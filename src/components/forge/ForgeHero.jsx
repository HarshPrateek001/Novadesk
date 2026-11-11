import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { prefersReducedMotion, scrollToForgeSection } from '../../lib/animations';
import { FORGE_ASSETS } from '../../lib/videoAnalysis';
import ForgeCoreScene from './ForgeCoreScene';

const HERO_PLAYBACK_RATE = 0.42;

/**
 * Section 01 — Full-bleed Top Hero Banner preserving the smooth FORGE Core video canvas
 * framed in NovaDesk's Black, Royal Blue (#2E29FF), and Crisp White identity.
 */
export default function ForgeHero() {
  const heroRef = useRef(null);
  const heroVideoRef = useRef(null);
  const [heroVideoFailed, setHeroVideoFailed] = useState(false);

  useEffect(() => {
    const heroEl = heroRef.current;
    const videoEl = heroVideoRef.current;
    if (!heroEl || !videoEl) return undefined;

    const applySlowPlayback = () => {
      videoEl.defaultPlaybackRate = HERO_PLAYBACK_RATE;
      videoEl.playbackRate = HERO_PLAYBACK_RATE;
    };

    const reduced = prefersReducedMotion();
    if (!reduced) {
      applySlowPlayback();
      videoEl.play().catch(() => {});
    }

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (reduced) return;
                if (entry.isIntersecting) {
                  applySlowPlayback();
                  videoEl.play().catch(() => {});
                } else {
                  videoEl.pause();
                }
              });
            },
            { threshold: 0.05 }
          )
        : null;

    if (observer) observer.observe(heroEl);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="forge-hero-banner" aria-label="FORGE AI Overview">
      {!heroVideoFailed ? (
        <video
          ref={heroVideoRef}
          className="forge-hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={FORGE_ASSETS.keyframes[2].src}
          onLoadedMetadata={(e) => {
            e.currentTarget.defaultPlaybackRate = HERO_PLAYBACK_RATE;
            e.currentTarget.playbackRate = HERO_PLAYBACK_RATE;
          }}
          onPlay={(e) => {
            e.currentTarget.playbackRate = HERO_PLAYBACK_RATE;
          }}
          onError={() => setHeroVideoFailed(true)}
          aria-label="FORGE AI Holographic Core"
        >
          <source src={FORGE_ASSETS.scrubVideo} type="video/mp4" />
          <source src={FORGE_ASSETS.originalVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={FORGE_ASSETS.keyframes[2].src}
          alt="FORGE AI Holographic Core"
          className="forge-hero-video-bg"
        />
      )}

      <ForgeCoreScene className="forge-hero-three" intensity={0.92} />

      <div className="forge-container forge-hero-inner">
        <div className="forge-brand-lockup">
          <div className="forge-emblem-mark" aria-hidden="true">
            <span className="forge-emblem-ring" />
            <span className="forge-emblem-core" />
          </div>

          <div className="forge-brand-meta">
            <span className="forge-brand-name">FORGE</span>
            <span className="forge-brand-full">
              Framework for Orchestrated Reasoning, Generation &amp; Engineering
            </span>
            <span className="forge-brand-tagline">Engineering What Comes Next.</span>
          </div>
        </div>

        <h1 className="forge-hero-headline">
          <span className="forge-sr-only">
            FORGE AI: Framework for Orchestrated Reasoning, Generation &amp; Engineering &mdash;{' '}
          </span>
          Beyond AI Models.
          <br />
          <span className="forge-text-blue">Towards Intelligent Ecosystems.</span>
        </h1>

        <div className="forge-hero-copy">
          <p>
            Artificial intelligence is evolving quickly. But we believe its real potential goes beyond
            individual models, prompts or isolated tools.
          </p>
          <p>
            FORGE is an emerging initiative exploring how AI models, intelligent agents, software systems
            and business workflows can work together as one coordinated ecosystem.
          </p>
          <p>
            Our goal is simple: make intelligence more useful, connected and capable of solving
            real-world problems.
          </p>
        </div>

        <div className="forge-banner-buttons">
          <button
            type="button"
            onClick={() => scrollToForgeSection('bigger-picture')}
            className="forge-btn-primary"
          >
            <span>Explore the FORGE Vision</span>
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            onClick={() => scrollToForgeSection('approach')}
            className="forge-btn-outline"
          >
            <span>Discover Our Approach</span>
            <ArrowRight size={17} />
          </button>
        </div>

        <p className="forge-hero-footnote">
          <em>
            Built around a simple belief: intelligence becomes more powerful when everything works together.
          </em>
        </p>
      </div>
    </section>
  );
}
