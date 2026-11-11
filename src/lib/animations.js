import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let pluginsRegistered = false;
let activeLenis = null;

export function registerForgePlugins() {
  if (!pluginsRegistered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    pluginsRegistered = true;
  }
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Initializes Lenis smooth scrolling synchronized tightly with GSAP ScrollTrigger.
 * Returns a cleanup function so global navigation away from /forge-ai restores default scrolling.
 */
export function initForgeSmoothScroll() {
  if (typeof window === 'undefined' || prefersReducedMotion()) {
    return () => {};
  }

  registerForgePlugins();

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.4,
  });

  lenis.on('scroll', ScrollTrigger.update);

  const onTick = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(onTick);
  gsap.ticker.lagSmoothing(0);
  activeLenis = lenis;

  return () => {
    if (activeLenis === lenis) activeLenis = null;
    gsap.ticker.remove(onTick);
    lenis.destroy();
  };
}

export const FORGE_CHAPTER_PROGRESS = {
  'bigger-picture': 0.03,
  'what-is-forge': 0.17,
  'how-we-think': 0.30,
  pillars: 0.45,
  ithink: 0.45,
  iforge: 0.45,
  ievolve: 0.45,
  exploring: 0.60,
  opportunity: 0.73,
  approach: 0.85,
  journey: 0.96,
};

export function scrollToForgeSection(targetId) {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  const isPinnedStage = !prefersReducedMotion();
  const stageWrap = document.querySelector('.forge-story-stage-wrap');
  const mappedProgress = FORGE_CHAPTER_PROGRESS[targetId];

  // On pinned 3D stage (desktop, tablet, & mobile), map chapter IDs directly to their active timeline progress
  // (works seamlessly even when Framer Motion AnimatePresence unmounts inactive chapters)
  if (isPinnedStage && stageWrap && mappedProgress !== undefined) {
    const stageTop = stageWrap.getBoundingClientRect().top + window.scrollY;
    const travel = Math.max(0, stageWrap.offsetHeight - window.innerHeight);
    const targetY = Math.round(stageTop + mappedProgress * travel);

    if (activeLenis) {
      activeLenis.scrollTo(targetY, { duration: 1.1 });
      return;
    }
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    return;
  }

  const el = document.getElementById(targetId);
  if (!el) return;

  if (activeLenis && !prefersReducedMotion()) {
    activeLenis.scrollTo(el, { offset: -78 });
    return;
  }
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}
