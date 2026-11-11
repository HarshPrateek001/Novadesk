import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Check, Code2, Cpu, Database, Layers, Workflow } from 'lucide-react';
import { CAPABILITY_AREAS, OPPORTUNITY_OUTCOMES } from '../../lib/videoAnalysis';
import { CHAPTER_GRID_VARIANTS, CHAPTER_ITEM_VARIANTS } from './forgeMotionConfig';

const CAPABILITY_ICONS = {
  'agent-orchestration': Bot,
  'autonomous-engineering': Code2,
  'business-automation': Workflow,
  'model-agnostic-infra': Cpu,
  'context-intelligence': Database,
  'digital-systems': Layers,
};

/**
 * Chapter 06 panel: What We're Exploring.
 */
export function ExploringPanel() {
  return (
    <div className="forge-glass-panel">
      <div className="forge-eyebrow">06 &mdash; WHAT WE&apos;RE EXPLORING</div>
      <h2 className="forge-section-title">Technology With a Purpose.</h2>
      <p className="forge-section-lead">
        Our areas of exploration bring together several important parts of the evolving AI landscape.
      </p>

      <motion.div variants={CHAPTER_GRID_VARIANTS} className="forge-cards-two-up">
        {CAPABILITY_AREAS.map((cap, idx) => {
          const Icon = CAPABILITY_ICONS[cap.id] || Cpu;
          return (
            <motion.article
              key={cap.id}
              variants={CHAPTER_ITEM_VARIANTS}
              className="forge-mini-card"
            >
              <div className="forge-mini-head">
                <span className="forge-mini-icon">
                  <Icon size={16} strokeWidth={1.7} />
                </span>
                <span className="forge-mini-num">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}

/**
 * Chapter 07 panel: The Business Opportunity.
 */
export function OpportunityPanel() {
  return (
    <div className="forge-glass-panel">
      <div className="forge-eyebrow">07 &mdash; THE BUSINESS OPPORTUNITY</div>
      <h2 className="forge-section-title">Less Fragmentation. More Meaningful Work.</h2>

      <div className="forge-prose">
        <p>Imagine a business where information doesn&apos;t get stuck between disconnected tools.</p>
        <p>
          A customer request comes in. One system understands the requirement. Another gathers relevant
          information. A specialised agent prepares the next action. Another validates the result. The workflow
          moves forward with the right human approvals.
        </p>
        <p>This is an example of the kind of connected experience we want to explore.</p>
        <p>FORGE aims to investigate how coordinated intelligence could help businesses work towards:</p>
      </div>

      <motion.ul variants={CHAPTER_GRID_VARIANTS} className="forge-outcome-list forge-outcome-list--two-up">
        {OPPORTUNITY_OUTCOMES.map((outcome) => (
          <motion.li key={outcome} variants={CHAPTER_ITEM_VARIANTS}>
            <span className="forge-outcome-check">
              <Check size={13} strokeWidth={2.5} />
            </span>
            <span>{outcome}</span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="forge-prose" style={{ marginTop: '16px' }}>
        <p>The real measure of AI isn&apos;t how impressive a demonstration looks.</p>
        <p className="forge-prose-highlight">
          It&apos;s how much meaningful work it can help people accomplish.
        </p>
      </div>
    </div>
  );
}

/**
 * Stacked mobile / reduced-motion renderer for Chapters 06 & 07.
 */
export default function Capabilities() {
  return (
    <>
      <section id="exploring" data-chapter="4" className="forge-story-chapter forge-chapter--left">
        <div className="forge-container forge-chapter-container">
          <div className="forge-column forge-column--left">
            <ExploringPanel />
          </div>
        </div>
      </section>

      <section id="opportunity" data-chapter="5" className="forge-story-chapter forge-chapter--left">
        <div className="forge-container forge-chapter-container">
          <div className="forge-column forge-column--left">
            <OpportunityPanel />
          </div>
        </div>
      </section>
    </>
  );
}
