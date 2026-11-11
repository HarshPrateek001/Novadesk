import { useEffect, useRef, useState } from 'react';
import { FORGE_SEQUENCE, getSequenceFrameUrl } from '../lib/videoAnalysis';

const clamp01 = (v) => Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0));

/**
 * Scroll-driven 159-frame WebP canvas sequence engine.
 * Prioritizes frame 0 + evenly spaced skeleton keyframes first so immediate
 * scrubbing never blanks out, then streams remaining frames in throttled batches
 * and draws with sub-frame alpha crossfading at display refresh rates.
 */
export function useFrameSequenceScrubber({
  canvasRef,
  scrollProgressRef,
  frameCount = FORGE_SEQUENCE.frameCount,
  isReduced = false,
  onReady,
}) {
  const [isReady, setIsReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const imagesRef = useRef([]);
  const loadedFlagsRef = useRef(new Uint8Array(frameCount));
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return undefined;

    let cancelled = false;
    let rafId = null;
    let isVisible = true;
    let lastDrawnFloat = -1;
    let lastLoadedMark = -1;
    let totalLoaded = 0;

    const images = new Array(frameCount);
    const loadedFlags = new Uint8Array(frameCount);
    imagesRef.current = images;
    loadedFlagsRef.current = loadedFlags;

    const findNearestLoaded = (targetIdx) => {
      if (loadedFlags[targetIdx]) return targetIdx;
      for (let offset = 1; offset < frameCount; offset += 1) {
        const back = targetIdx - offset;
        if (back >= 0 && loadedFlags[back]) return back;
        const forward = targetIdx + offset;
        if (forward < frameCount && loadedFlags[forward]) return forward;
      }
      return -1;
    };

    const drawFrame = (progress, force = false) => {
      const p = clamp01(progress);
      const exactFrame = p * (frameCount - 1);

      if (!force && Math.abs(exactFrame - lastDrawnFloat) < 0.003) {
        return;
      }

      const baseIdx = Math.floor(exactFrame);
      const nextIdx = Math.min(frameCount - 1, baseIdx + 1);
      const blend = exactFrame - baseIdx;

      const resolvedBase = findNearestLoaded(baseIdx);
      if (resolvedBase < 0) return;

      const baseImg = images[resolvedBase];
      if (!baseImg || !baseImg.complete || baseImg.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;

      ctx.globalAlpha = 1;
      ctx.drawImage(baseImg, 0, 0, cw, ch);

      if (resolvedBase === baseIdx && nextIdx !== baseIdx && loadedFlags[nextIdx] && blend > 0.025) {
        const nextImg = images[nextIdx];
        if (nextImg && nextImg.complete && nextImg.naturalWidth > 0) {
          ctx.globalAlpha = blend;
          ctx.drawImage(nextImg, 0, 0, cw, ch);
          ctx.globalAlpha = 1;
        }
      }

      lastDrawnFloat = exactFrame;
    };

    const loadSingleFrame = (idx) =>
      new Promise((resolve) => {
        if (cancelled || loadedFlags[idx] || idx < 0 || idx >= frameCount) {
          resolve();
          return;
        }

        const img = new Image();
        img.decoding = 'async';
        img.src = getSequenceFrameUrl(idx);

        const markReady = () => {
          if (cancelled || loadedFlags[idx]) {
            resolve();
            return;
          }
          images[idx] = img;
          loadedFlags[idx] = 1;
          totalLoaded += 1;
          setLoadedCount(totalLoaded);

          if (idx === 0) {
            setIsReady(true);
            onReadyRef.current?.();
            drawFrame(scrollProgressRef?.current ?? 0, true);
          } else {
            const p = clamp01(scrollProgressRef?.current ?? 0);
            const activeTarget = Math.round(p * (frameCount - 1));
            if (Math.abs(idx - activeTarget) <= 12) {
              drawFrame(p, true);
            }
          }
          resolve();
        };

        img.onload = () => {
          if (typeof img.decode === 'function') {
            img.decode().then(markReady).catch(markReady);
          } else {
            markReady();
          }
        };
        img.onerror = () => resolve();
      });

    // Build prioritized load order:
    // 1) Frame 0 and final frame immediately
    // 2) 16 evenly spaced skeleton keyframes across the timeline
    // 3) Remaining dense frames for smooth optical crossfading
    const prioritySet = new Set([0, frameCount - 1]);
    const skeletonStep = Math.max(1, Math.floor((frameCount - 1) / 15));
    for (let i = 0; i < frameCount; i += skeletonStep) {
      prioritySet.add(i);
    }

    const immediateQueue = Array.from(prioritySet).slice(0, 2);
    const skeletonQueue = Array.from(prioritySet).slice(2);
    const fillQueue = [];
    for (let i = 0; i < frameCount; i += 1) {
      if (!prioritySet.has(i)) fillQueue.push(i);
    }

    const runBatched = async (indices, concurrency = 6) => {
      for (let i = 0; i < indices.length; i += concurrency) {
        if (cancelled) break;
        const batch = indices.slice(i, i + concurrency);
        await Promise.all(batch.map((idx) => loadSingleFrame(idx)));
      }
    };

    const preloadAll = async () => {
      await Promise.all(immediateQueue.map((idx) => loadSingleFrame(idx)));
      await runBatched(skeletonQueue, 6);
      await runBatched(fillQueue, 6);
    };

    preloadAll();

    const tick = () => {
      if (cancelled) return;
      if (!isVisible || document.hidden) {
        rafId = null;
        return;
      }

      const currentProgress = clamp01(scrollProgressRef?.current ?? 0);
      const forceRedraw = lastLoadedMark !== totalLoaded && totalLoaded > 0;
      if (forceRedraw) {
        lastLoadedMark = totalLoaded;
      }

      drawFrame(currentProgress, forceRedraw);

      if (!isReduced) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                isVisible = entry.isIntersecting;
                if (isVisible && rafId === null && !isReduced) {
                  rafId = window.requestAnimationFrame(tick);
                }
              });
            },
            { threshold: 0.01 }
          )
        : null;

    if (observer) observer.observe(canvas);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, [canvasRef, frameCount, isReduced, scrollProgressRef]);

  return {
    isReady,
    loadedCount,
    totalFrames: frameCount,
    drawFrameAt: (progress) => {
      const canvas = canvasRef?.current;
      const ctx = canvas?.getContext('2d', { alpha: false });
      if (!canvas || !ctx) return;
      const idx = Math.max(0, Math.min(frameCount - 1, Math.round(clamp01(progress) * (frameCount - 1))));
      const img = imagesRef.current[idx];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.globalAlpha = 1;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    },
  };
}

