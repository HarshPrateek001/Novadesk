import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { prefersReducedMotion } from '../../lib/animations';
import {
  APPROACH_PRINCIPLES,
  CAPABILITY_AREAS,
  CORE_PILLARS,
  INTELLIGENCE_LAYERS,
  JOURNEY_STAGES,
  OPPORTUNITY_OUTCOMES,
} from '../../lib/videoAnalysis';
import CoreFrameCanvas from './CoreFrameCanvas';
import ForgeCoreScene from './ForgeCoreScene';
import { DESKTOP_CHAPTER_VARIANTS } from './forgeMotionConfig';
import IntelligenceModules, { HowWeThinkPanel, ThreePillarsPanel } from './IntelligenceModules';
import Capabilities, { ExploringPanel, OpportunityPanel } from './Capabilities';
import DevelopmentJourney, { ApproachPanel, JourneyPanel } from './DevelopmentJourney';

const BIGGER_PICTURE_COPY = {
  eyebrow: '02 \u2014 THE BIGGER PICTURE',
  title: "AI Has Come a Long Way. There's Still More to Build.",
  paragraphs: [
    'Think about how we use AI today.',
    'One tool helps us write. Another helps us analyse data. Another generates code. Another automates a business process.',
    'Each capability is powerful on its own. But getting these tools to understand context, share responsibilities and work together is still a challenge.',
    "Businesses don't simply need more AI tools. They need better ways to connect them.",
    "That's the opportunity we're exploring with FORGE.",
    'We want to move beyond disconnected AI experiences and work towards systems where intelligence can collaborate, adapt and contribute to meaningful outcomes.',
  ],
  highlight: "A better future for AI isn't just about smarter models. It's about smarter systems.",
};

const WHAT_IS_FORGE_COPY = {
  eyebrow: '03 \u2014 WHAT IS FORGE?',
  title: 'Not Another AI Model. A Different Way to Think About AI.',
  paragraphs: [
    'FORGE stands for Framework for Orchestrated Reasoning, Generation & Engineering.',
    'It represents our vision of a connected AI ecosystem where different models, specialised agents, tools, data sources and software systems can work together.',
    'Rather than depending on one model for every problem, the idea is to bring the right capabilities together for the right task.',
    'Imagine a system that can understand a goal, break it into smaller tasks, coordinate specialised agents, use relevant tools and bring everything together into a meaningful result.',
    "That's the kind of intelligence we're interested in engineering.",
  ],
  highlight: 'FORGE is being developed around this broader vision.',
};

function StaticProsePanel({ copy }) {
  return (
    <div className="forge-glass-panel">
      <div className="forge-eyebrow">{copy.eyebrow}</div>
      <h2 className="forge-section-title">{copy.title}</h2>
      <div className="forge-prose">
        {copy.paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
        <p className="forge-prose-highlight">{copy.highlight}</p>
      </div>
    </div>
  );
}

function BiggerPicturePanel() {
  return <StaticProsePanel copy={BIGGER_PICTURE_COPY} />;
}

function WhatIsForgePanel() {
  return <StaticProsePanel copy={WHAT_IS_FORGE_COPY} />;
}

const STORY_CHAPTERS = [
  { id: 'bigger-picture', num: '02', label: 'The Bigger Picture', side: 'left', progress: 0.03, Panel: BiggerPicturePanel },
  { id: 'what-is-forge', num: '03', label: 'What is FORGE?', side: 'left', progress: 0.17, Panel: WhatIsForgePanel },
  { id: 'how-we-think', num: '04', label: 'Connected Intelligence', side: 'right', progress: 0.30, Panel: HowWeThinkPanel },
  { id: 'pillars', num: '05', label: 'Three Pillars', side: 'right', progress: 0.45, Panel: ThreePillarsPanel },
  { id: 'exploring', num: '06', label: 'Exploring', side: 'left', progress: 0.60, Panel: ExploringPanel },
  { id: 'opportunity', num: '07', label: 'Opportunity', side: 'left', progress: 0.73, Panel: OpportunityPanel },
  { id: 'approach', num: '08', label: 'Our Approach', side: 'right', progress: 0.85, Panel: ApproachPanel },
  { id: 'journey', num: '09', label: 'Journey Ahead', side: 'right', progress: 0.96, Panel: JourneyPanel },
];

// Symmetric boundaries aligned with the exact center peak of each Left <-> Right 3D Core sweep
const CHAPTER_THRESHOLDS = [0.115, 0.23, 0.375, 0.53, 0.665, 0.79, 0.905];

function getChapterFromProgress(progress) {
  for (let i = 0; i < CHAPTER_THRESHOLDS.length; i += 1) {
    if (progress < CHAPTER_THRESHOLDS[i]) return i;
  }
  return STORY_CHAPTERS.length - 1;
}

const SEMANTIC_CHAPTER_RENDERERS = {
  'bigger-picture': () => (
    <>
      <h2>{BIGGER_PICTURE_COPY.title}</h2>
      {BIGGER_PICTURE_COPY.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <p>{BIGGER_PICTURE_COPY.highlight}</p>
    </>
  ),
  'what-is-forge': () => (
    <>
      <h2>{WHAT_IS_FORGE_COPY.title}</h2>
      {WHAT_IS_FORGE_COPY.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <p>{WHAT_IS_FORGE_COPY.highlight}</p>
    </>
  ),
  'how-we-think': () => (
    <>
      <h2>From Individual Capabilities to Connected Intelligence.</h2>
      <p>We see the future of AI as a combination of multiple capabilities working together.</p>
      {INTELLIGENCE_LAYERS.map((layer) => (
        <article key={layer.id}>
          <h3>{layer.title}</h3>
          <p>{layer.description}</p>
        </article>
      ))}
    </>
  ),
  pillars: () => (
    <>
      <h2>Three Ideas. One Direction.</h2>
      {CORE_PILLARS.map((pillar) => (
        <article key={pillar.id} id={pillar.id}>
          <h3>
            {pillar.name}: {pillar.tagline}
          </h3>
          {pillar.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      ))}
    </>
  ),
  exploring: () => (
    <>
      <h2>Technology With a Purpose.</h2>
      <p>Our areas of exploration bring together several important parts of the evolving AI landscape.</p>
      {CAPABILITY_AREAS.map((cap) => (
        <article key={cap.id}>
          <h3>{cap.title}</h3>
          <p>{cap.description}</p>
        </article>
      ))}
    </>
  ),
  opportunity: () => (
    <>
      <h2>Less Fragmentation. More Meaningful Work.</h2>
      <p>FORGE aims to investigate how coordinated intelligence could help businesses work towards:</p>
      <ul>
        {OPPORTUNITY_OUTCOMES.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
      <p>It&apos;s how much meaningful work it can help people accomplish.</p>
    </>
  ),
  approach: () => (
    <>
      <h2>Built With Curiosity. Engineered With Purpose.</h2>
      {APPROACH_PRINCIPLES.map((item) => (
        <article key={item.number}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
        </article>
      ))}
    </>
  ),
  journey: () => (
    <>
      <h2>A Vision That We&apos;re Working to Bring to Life.</h2>
      <p>FORGE is at an early stage, and we see the journey as an opportunity to build carefully and learn continuously.</p>
      {JOURNEY_STAGES.map((stage) => (
        <article key={stage.step}>
          <h3>
            {stage.step} — {stage.title}
          </h3>
          <p>{stage.summary}</p>
        </article>
      ))}
    </>
  ),
};

/**
 * Exposes unmounted AnimatePresence chapters once in semantic DOM order so search crawlers and screen readers can read the full FORGE narrative at scrollY=0 without duplicate headings.
 */
function SemanticInactiveChapters({ activeChapter }) {
  return (
    <div className="forge-sr-chapters" aria-label="Additional FORGE AI Architecture Chapters">
      {STORY_CHAPTERS.map((chapter, idx) => {
        if (idx === activeChapter) return null;
        const renderContent = SEMANTIC_CHAPTER_RENDERERS[chapter.id];
        if (!renderContent) return null;
        return (
          <section key={chapter.id} id={chapter.id} aria-label={chapter.label}>
            {renderContent()}
          </section>
        );
      })}
    </div>
  );
}

/**
 * Scroll-driven chapter-by-chapter 3D Core Scrollytelling Experience (Sections 02 through 09).
 * Synchronizes:
 * 1) 159-frame extracted WebP Canvas scrubber with sub-frame alpha interpolation
 * 2) Scroll-reactive Three.js holographic particle cloud, wireframe cage & depth camera
 * 3) Framer Motion spring-damped 3D lateral sweeps & `<AnimatePresence mode="wait">` chapter gating
 */
export default function ForgeStorytelling() {
  const stageWrapRef = useRef(null);
  const scrollProgressRef = useRef(0);
  const activeIndexRef = useRef(0);

  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isReduced, setIsReduced] = useState(() => prefersReducedMotion());
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1025 : true
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const mqDesktop = window.matchMedia('(min-width: 1025px)');
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMedia = () => {
      setIsDesktop(mqDesktop.matches);
      setIsReduced(mqReduced.matches);
    };
    syncMedia();
    mqDesktop.addEventListener('change', syncMedia);
    mqReduced.addEventListener('change', syncMedia);
    return () => {
      mqDesktop.removeEventListener('change', syncMedia);
      mqReduced.removeEventListener('change', syncMedia);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: stageWrapRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    mass: 0.15,
    restDelta: 0.0008,
  });

  const coreX = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    ['71vw', '71vw', '50vw', '29vw', '29vw', '50vw', '71vw', '71vw', '50vw', '29vw', '29vw']
  );

  const coreScale = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    [1, 1, 1.13, 1, 1, 1.13, 1, 1, 1.13, 1, 1]
  );

  const coreRotateY = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    [-8, -8, 0, 8, 8, 0, -8, -8, 0, 8, 8]
  );

  const coreRotateX = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    [0, 0, 3, 0, 0, -3, 0, 0, 3, 0, 0]
  );

  // Calibrated 3D orbital curve for tablets & phones (desktop >= 1025px uses untouched coreX/Scale/Rotate)
  const mobileCoreX = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    ['54vw', '54vw', '50vw', '46vw', '46vw', '50vw', '54vw', '54vw', '50vw', '46vw', '46vw']
  );

  const mobileCoreY = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    ['-15vh', '-15vh', '-4vh', '-18vh', '-18vh', '-4vh', '-15vh', '-15vh', '-4vh', '-18vh', '-18vh']
  );

  const mobileCoreScale = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    [0.92, 0.92, 1.14, 0.96, 0.96, 1.14, 0.92, 0.92, 1.14, 0.96, 0.96]
  );

  const mobileCoreRotateY = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    [-10, -10, 0, 10, 10, 0, -10, -10, 0, 10, 10]
  );

  const mobileCoreRotateX = useTransform(
    smoothProgress,
    [0, 0.20, 0.23, 0.26, 0.50, 0.53, 0.56, 0.76, 0.79, 0.82, 1],
    [4, 4, -2, 6, 6, -2, 4, 4, -2, 6, 6]
  );

  const meterScaleX = useTransform(smoothProgress, [0, 1], [0.01, 1]);

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));
    scrollProgressRef.current = clamped;

    const nextIdx = getChapterFromProgress(clamped);
    if (nextIdx !== activeIndexRef.current) {
      setScrollDirection(nextIdx > activeIndexRef.current ? 1 : -1);
      activeIndexRef.current = nextIdx;
      setActiveChapter(nextIdx);
    }
  });

  const activeChapterMeta = STORY_CHAPTERS[activeChapter] || STORY_CHAPTERS[0];
  const ActivePanel = activeChapterMeta.Panel;
  const pinnedStageActive = !isReduced;

  return (
    <div
      ref={stageWrapRef}
      className={`forge-story-stage-wrap ${isReduced ? 'is-reduced-motion' : ''}`.trim()}
    >
      <div className="forge-sticky-stage">
        {/* Unclipped Holographic Core Backdrop + Three.js Scene */}
        <div className="forge-sticky-core-track" aria-hidden="true">
          <div className="forge-sticky-core-viewport">
            <ForgeCoreScene
              scrollProgressRef={scrollProgressRef}
              className="forge-sticky-three"
              intensity={0.92}
            />

            <motion.div
              className="forge-sticky-core-mover"
              style={
                !pinnedStageActive
                  ? undefined
                  : isDesktop
                    ? {
                        x: coreX,
                        scale: coreScale,
                        rotateY: coreRotateY,
                        rotateX: coreRotateX,
                        transformPerspective: 1400,
                      }
                    : {
                        x: mobileCoreX,
                        y: mobileCoreY,
                        scale: mobileCoreScale,
                        rotateY: mobileCoreRotateY,
                        rotateX: mobileCoreRotateX,
                        transformPerspective: 1100,
                      }
              }
            >
              <div className="forge-core-blue-aura" />
              <CoreFrameCanvas scrollProgressRef={scrollProgressRef} isReduced={isReduced} />
            </motion.div>

            <div className="forge-sticky-edge-scrim" />

            <div className="forge-scroll-meter">
              <motion.div
                className="forge-scroll-meter-fill"
                style={!isReduced ? { scaleX: meterScaleX } : undefined}
              />
            </div>
          </div>
        </div>

        {/* All Devices (!reduced-motion): Strict One-At-A-Time AnimatePresence Staging */}
        <div className="forge-story-flow">
          {pinnedStageActive ? (
            <AnimatePresence mode="wait" initial={false} custom={scrollDirection}>
              <motion.section
                key={activeChapterMeta.id}
                id={activeChapterMeta.id}
                data-chapter={activeChapter}
                data-stage-progress={activeChapterMeta.progress}
                custom={scrollDirection}
                variants={DESKTOP_CHAPTER_VARIANTS}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`forge-story-chapter forge-chapter--${activeChapterMeta.side} is-chapter-active`}
              >
                <div className="forge-container forge-chapter-container">
                  <div className={`forge-column forge-column--${activeChapterMeta.side}`}>
                    <ActivePanel />
                  </div>
                </div>
              </motion.section>
            </AnimatePresence>
          ) : (
            <>
              <section id="bigger-picture" data-chapter="0" className="forge-story-chapter forge-chapter--left">
                <div className="forge-container forge-chapter-container">
                  <div className="forge-column forge-column--left">
                    <BiggerPicturePanel />
                  </div>
                </div>
              </section>

              <section id="what-is-forge" data-chapter="1" className="forge-story-chapter forge-chapter--left">
                <div className="forge-container forge-chapter-container">
                  <div className="forge-column forge-column--left">
                    <WhatIsForgePanel />
                  </div>
                </div>
              </section>

              <IntelligenceModules />
              <Capabilities />
              <DevelopmentJourney />
            </>
          )}
        </div>
      </div>

      {pinnedStageActive ? <SemanticInactiveChapters activeChapter={activeChapter} /> : null}
    </div>
  );
}
