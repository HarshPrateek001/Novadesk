import { useRef } from 'react';
import { FORGE_ASSETS, FORGE_SEQUENCE } from '../../lib/videoAnalysis';
import { useFrameSequenceScrubber } from '../../hooks/useFrameSequenceScrubber';

/**
 * Unclipped 159-frame Canvas scrub engine for the FORGE Core.
 * Renders crisp WebP sequence frames in direct sync with Framer Motion
 * scroll progress and dissolves edges seamlessly via screen blend vignette.
 */
export default function CoreFrameCanvas({
  scrollProgressRef,
  isReduced = false,
  className = '',
  onReady,
}) {
  const canvasRef = useRef(null);

  const { isReady } = useFrameSequenceScrubber({
    canvasRef,
    scrollProgressRef,
    frameCount: FORGE_SEQUENCE.frameCount,
    isReduced,
    onReady,
  });

  return (
    <div className={`forge-video-frame forge-sequence-stage ${className}`.trim()}>
      {!isReady && (
        <img
          src={FORGE_ASSETS.poster}
          alt=""
          aria-hidden="true"
          className="forge-video-element forge-sequence-poster"
          loading="eager"
          decoding="async"
        />
      )}

      <canvas
        ref={canvasRef}
        width={FORGE_SEQUENCE.width}
        height={FORGE_SEQUENCE.height}
        className={`forge-video-element forge-sequence-canvas ${isReady ? 'is-ready' : ''}`}
        aria-label="FORGE Intelligence Core 3D activation sequence"
      />

      {/* Seamless edge vignette + bottom-right watermark dissolve */}
      <div className="forge-video-vignette" aria-hidden="true" />
    </div>
  );
}

