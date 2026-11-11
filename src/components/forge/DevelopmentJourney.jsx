import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { APPROACH_PRINCIPLES, FORGE_ASSETS, JOURNEY_STAGES } from '../../lib/videoAnalysis';
import { CHAPTER_GRID_VARIANTS, CHAPTER_ITEM_VARIANTS } from './forgeMotionConfig';

/**
 * Chapter 08 panel: Our Approach.
 */
export function ApproachPanel() {
  return (
    <div className="forge-glass-panel">
      <div className="forge-eyebrow">08 &mdash; OUR APPROACH</div>
      <h2 className="forge-section-title">Built With Curiosity. Engineered With Purpose.</h2>

      <div className="forge-prose">
        <p>We aren&apos;t interested in adding AI to everything just because we can.</p>
        <p>
          We want to understand where intelligence genuinely helps, where automation makes sense and where human
          judgement should remain central.
        </p>
        <p>Our approach is guided by a few principles:</p>
      </div>

      <motion.div variants={CHAPTER_GRID_VARIANTS} className="forge-principles-grid">
        {APPROACH_PRINCIPLES.map((item, index) => (
          <motion.article
            key={item.number}
            variants={CHAPTER_ITEM_VARIANTS}
            className={`forge-principle-row ${
              index === APPROACH_PRINCIPLES.length - 1 ? 'forge-principle-row--wide' : ''
            }`.trim()}
          >
            <span className="forge-principle-num">{item.number}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Chapter 09 panel: The Journey Ahead (interactive development stage pills + extracted keyframes).
 */
export function JourneyPanel() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentStage = JOURNEY_STAGES[selectedIdx] || JOURNEY_STAGES[0];
  const currentFrame = FORGE_ASSETS.keyframes[selectedIdx] || FORGE_ASSETS.keyframes[0];

  return (
    <div className="forge-glass-panel">
      <div className="forge-eyebrow">09 &mdash; THE JOURNEY AHEAD</div>
      <h2 className="forge-section-title">A Vision That We&apos;re Working to Bring to Life.</h2>
      <p className="forge-section-lead">
        FORGE is at an early stage, and we see the journey as an opportunity to build carefully and learn
        continuously.
      </p>

      <div className="forge-stage-selector" role="tablist" aria-label="FORGE Development Stages">
        {JOURNEY_STAGES.map((stage, idx) => {
          const isActive = idx === selectedIdx;
          return (
            <button
              key={stage.step}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedIdx(idx)}
              className={`forge-stage-pill ${isActive ? 'is-active' : ''}`}
            >
              <span className="forge-stage-pill-num">{stage.step}</span>
              <span>{stage.title}</span>
            </button>
          );
        })}
      </div>

      <div className="forge-journey-frame-box" role="tabpanel" aria-label={currentStage.title}>
        <div className="forge-journey-frame-media">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentFrame.id}
              src={currentFrame.src}
              alt={`${currentStage.title} — ${currentFrame.label}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              loading="lazy"
            />
          </AnimatePresence>
          <div className="forge-blue-frame-tint" aria-hidden="true" />
        </div>

        <div className="forge-journey-frame-copy">
          <span className="forge-stage-pill-num">
            {currentStage.step} &mdash; {currentStage.title}
          </span>
          <p>{currentStage.summary}</p>
        </div>
      </div>

      <p className="forge-prose-highlight" style={{ marginTop: '14px' }}>
        We believe progress should be demonstrated through working systems, not just ambitious promises.
      </p>

      <div className="forge-sr-chapters">
        {JOURNEY_STAGES.map((stage, idx) =>
          idx !== selectedIdx ? (
            <div key={stage.step}>
              <h3>
                {stage.step} &mdash; {stage.title}
              </h3>
              <p>{stage.summary}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

/**
 * Stacked mobile / reduced-motion renderer for Chapters 08 & 09.
 */
export default function DevelopmentJourney() {
  return (
    <>
      <section id="approach" data-chapter="6" className="forge-story-chapter forge-chapter--right">
        <div className="forge-container forge-chapter-container">
          <div className="forge-column forge-column--right">
            <ApproachPanel />
          </div>
        </div>
      </section>

      <section id="journey" data-chapter="7" className="forge-story-chapter forge-chapter--right">
        <div className="forge-container forge-chapter-container">
          <div className="forge-column forge-column--right">
            <JourneyPanel />
          </div>
        </div>
      </section>
    </>
  );
}
