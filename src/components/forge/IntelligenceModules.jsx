import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Database, GitMerge, ShieldCheck, Wrench } from 'lucide-react';
import { CORE_PILLARS, INTELLIGENCE_LAYERS } from '../../lib/videoAnalysis';
import { CHAPTER_GRID_VARIANTS, CHAPTER_ITEM_VARIANTS } from './forgeMotionConfig';

const LAYER_ICONS = {
  'ai-models': Cpu,
  'intelligent-agents': Bot,
  'tools-integrations': Wrench,
  'data-context': Database,
  orchestration: GitMerge,
  'human-oversight': ShieldCheck,
};

function PillarIcon({ type }) {
  if (type === 'neural') {
    return (
      <svg viewBox="0 0 36 36" className="forge-pillar-svg-icon" aria-hidden="true">
        <path
          d="M8 22 L15 11 L22 17 L29 12 M15 11 L19 26 L29 12"
          stroke="#60A5FA"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15" cy="11" r="2.2" fill="#2E29FF" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="22" cy="17" r="2" fill="#93C5FD" />
        <circle cx="29" cy="12" r="2.2" fill="#FFFFFF" />
      </svg>
    );
  }

  if (type === 'geometry') {
    return (
      <svg viewBox="0 0 36 36" className="forge-pillar-svg-icon" aria-hidden="true">
        <polygon
          points="18,4 30,11 30,25 18,32 6,25 6,11"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1.5"
        />
        <polygon
          points="18,10 25,14 25,22 18,26 11,22 11,14"
          fill="none"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.1"
        />
        <circle cx="18" cy="18" r="2.4" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 36 36" className="forge-pillar-svg-icon" aria-hidden="true">
      <circle cx="18" cy="18" r="13.5" stroke="#2E29FF" strokeWidth="1.4" strokeDasharray="3 3" fill="none" />
      <circle cx="18" cy="18" r="8.5" stroke="#60A5FA" strokeWidth="1.4" fill="none" />
      <circle cx="18" cy="18" r="3.5" stroke="#FFFFFF" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

/**
 * Chapter 04 panel: How We Think About Intelligence.
 */
export function HowWeThinkPanel() {
  return (
    <div className="forge-glass-panel">
      <div className="forge-eyebrow">04 &mdash; HOW WE THINK ABOUT INTELLIGENCE</div>
      <h2 className="forge-section-title">From Individual Capabilities to Connected Intelligence.</h2>
      <p className="forge-section-lead">
        We see the future of AI as a combination of multiple capabilities working together.
      </p>

      <motion.div variants={CHAPTER_GRID_VARIANTS} className="forge-cards-two-up">
        {INTELLIGENCE_LAYERS.map((layer, idx) => {
          const Icon = LAYER_ICONS[layer.id] || Cpu;
          return (
            <motion.article
              key={layer.id}
              variants={CHAPTER_ITEM_VARIANTS}
              className="forge-mini-card"
            >
              <div className="forge-mini-head">
                <span className="forge-mini-icon">
                  <Icon size={16} strokeWidth={1.65} />
                </span>
                <span className="forge-mini-num">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}

/**
 * Chapter 05 panel: Our Three Pillars (iTHINK, iFORGE, iEVOLVE).
 */
export function ThreePillarsPanel() {
  return (
    <div className="forge-glass-panel">
      <div className="forge-eyebrow">05 &mdash; OUR THREE PILLARS</div>
      <h2 className="forge-section-title">Three Ideas. One Direction.</h2>

      <motion.div variants={CHAPTER_GRID_VARIANTS} className="forge-pillar-stack">
        {CORE_PILLARS.map((pillar) => (
          <motion.article
            key={pillar.id}
            id={pillar.id}
            data-stage-progress="0.45"
            variants={CHAPTER_ITEM_VARIANTS}
            className="forge-pillar-row"
          >
            <div className="forge-pillar-head">
              <PillarIcon type={pillar.visualType} />
              <div className="forge-pillar-title-group">
                <div className="forge-pillar-heading-row">
                  <span className="forge-pillar-num">{pillar.number}</span>
                  <span className="forge-pillar-title">{pillar.name}</span>
                </div>
                <h3 className="forge-pillar-subtitle">
                  <span className="forge-sr-only">{pillar.name}: </span>
                  {pillar.tagline}
                </h3>
              </div>
            </div>

            <div className="forge-pillar-copy">
              {pillar.paragraphs.map((para, i) => (
                <p key={i} className={i === 0 ? 'forge-pillar-lead-line' : undefined}>
                  {para}
                </p>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Stacked mobile / reduced-motion renderer for Chapters 04 & 05.
 */
export default function IntelligenceModules() {
  return (
    <>
      <section id="how-we-think" data-chapter="2" className="forge-story-chapter forge-chapter--right">
        <div className="forge-container forge-chapter-container">
          <div className="forge-column forge-column--right">
            <HowWeThinkPanel />
          </div>
        </div>
      </section>

      <section id="pillars" data-chapter="3" className="forge-story-chapter forge-chapter--right">
        <div className="forge-container forge-chapter-container">
          <div className="forge-column forge-column--right">
            <ThreePillarsPanel />
          </div>
        </div>
      </section>
    </>
  );
}
