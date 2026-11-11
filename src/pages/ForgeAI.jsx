import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import ForgeHero from '../components/forge/ForgeHero';
import ForgeTicker from '../components/forge/ForgeTicker';
import ForgeStorytelling from '../components/forge/ForgeStorytelling';
import { initForgeSmoothScroll, registerForgePlugins } from '../lib/animations';
import {
  CAPABILITY_AREAS,
  CORE_PILLARS,
  FORGE_ASSETS,
  INTELLIGENCE_LAYERS,
} from '../lib/videoAnalysis';
import 'lenis/dist/lenis.css';
import './forge/forge.css';

const SITE_URL = 'https://www.novadesk.site';
const PAGE_URL = `${SITE_URL}/forge-ai`;
const PAGE_TITLE = 'FORGE AI: Orchestrated AI & Agent Systems | NovaDesk';
const PAGE_DESCRIPTION =
  'Explore FORGE AI by NovaDesk — a Framework for Orchestrated Reasoning, Generation & Engineering uniting AI models, intelligent agents, and software systems.';
const OG_IMAGE = `${SITE_URL}${FORGE_ASSETS.keyframes[2].src}`;
const POSTER_IMAGE = `${SITE_URL}${FORGE_ASSETS.poster}`;
const VIDEO_URL = `${SITE_URL}${FORGE_ASSETS.scrubVideo}`;

export default function ForgeAI() {
  useEffect(() => {
    registerForgePlugins();
    const cleanupSmooth = initForgeSmoothScroll();

    const rafId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    const backupTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 240);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(backupTimer);
      cleanupSmooth();
    };
  }, []);

  const publisherRef = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'NovaDesk',
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon-192.png`,
    },
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#harsh-prateek`,
      name: 'Harsh Prateek',
      url: `${SITE_URL}/about-us`,
    },
  };

  const forgeWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    inLanguage: 'en-US',
    datePublished: '2026-11-10',
    dateModified: '2026-11-12',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'NovaDesk',
      url: `${SITE_URL}/`,
    },
    publisher: publisherRef,
    author: publisherRef,
    about: { '@id': `${PAGE_URL}#architecture` },
    mainEntity: { '@id': `${PAGE_URL}#architecture` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
      width: 1920,
      height: 1080,
      caption: 'FORGE AI Holographic Core — Framework for Orchestrated Reasoning, Generation & Engineering',
    },
    video: { '@id': `${PAGE_URL}#video` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.forge-hero-headline', '.forge-hero-copy', '.forge-section-title'],
    },
    relatedLink: [
      `${SITE_URL}/services/ai-development`,
      `${SITE_URL}/services/gen-ai-development`,
      `${SITE_URL}/services/ai-integrated-software`,
      `${SITE_URL}/get-a-free-quote`,
    ],
  };

  const forgeArchitectureSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${PAGE_URL}#architecture`,
    name: 'FORGE — Framework for Orchestrated Reasoning, Generation & Engineering',
    alternateName: ['FORGE AI', 'NovaDesk FORGE'],
    headline: 'Beyond AI Models. Towards Intelligent Ecosystems.',
    description:
      'An emerging AI-powered technology initiative by NovaDesk uniting model-agnostic AI orchestration, specialised intelligent agents, tools, context, and human oversight into cohesive software ecosystems.',
    url: PAGE_URL,
    image: OG_IMAGE,
    inLanguage: 'en-US',
    creator: publisherRef,
    publisher: publisherRef,
    keywords: [
      'FORGE AI',
      'Framework for Orchestrated Reasoning, Generation & Engineering',
      'AI Agent Orchestration',
      'Connected Intelligence Ecosystem',
      'Model-Agnostic AI Infrastructure',
      'Autonomous Software Engineering',
      'iTHINK',
      'iFORGE',
      'iEVOLVE',
    ],
    hasPart: { '@id': `${PAGE_URL}#pillars` },
  };

  const forgePillarsSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${PAGE_URL}#pillars`,
    name: 'FORGE Core Pillars: iTHINK, iFORGE & iEVOLVE',
    url: `${PAGE_URL}#pillars`,
    hasDefinedTerm: CORE_PILLARS.map((pillar) => ({
      '@type': 'DefinedTerm',
      name: pillar.name,
      termCode: pillar.number,
      description: `${pillar.tagline} ${pillar.paragraphs.join(' ')}`,
      url: `${PAGE_URL}#${pillar.id}`,
      inDefinedTermSet: `${PAGE_URL}#pillars`,
    })),
  };

  const forgeCapabilitiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${PAGE_URL}#capabilities`,
    name: 'FORGE AI Intelligence Layers & Core Capability Areas',
    numberOfItems: INTELLIGENCE_LAYERS.length + CAPABILITY_AREAS.length,
    itemListElement: [...INTELLIGENCE_LAYERS, ...CAPABILITY_AREAS].map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Thing',
        name: item.title,
        description: item.description,
      },
    })),
  };

  const forgeVideoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${PAGE_URL}#video`,
    name: 'FORGE AI Holographic Core Architecture Visualization',
    description:
      '3D holographic core visualization illustrating connected AI models, specialised agents, tools, context, and human-guided orchestration inside NovaDesk FORGE.',
    thumbnailUrl: [OG_IMAGE, POSTER_IMAGE],
    contentUrl: VIDEO_URL,
    embedUrl: PAGE_URL,
    uploadDate: '2026-11-10T00:00:00+05:30',
    duration: 'PT10S',
    encodingFormat: 'video/mp4',
    width: 1920,
    height: 1080,
    publisher: publisherRef,
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'FORGE AI', url: '/forge-ai' },
  ];

  return (
    <div className="forge-page">
      <SEO
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        keywords="FORGE AI, Framework for Orchestrated Reasoning Generation Engineering, AI agent orchestration, connected intelligence ecosystem, model-agnostic AI infrastructure, autonomous software engineering, iTHINK iFORGE iEVOLVE, intelligent business automation, NovaDesk FORGE"
        url="/forge-ai"
        canonical="/forge-ai"
        image={OG_IMAGE}
        imageAlt="FORGE AI Holographic Core — Framework for Orchestrated Reasoning, Generation & Engineering by NovaDesk"
        imageWidth={1920}
        imageHeight={1080}
        author="Harsh Prateek, NovaDesk"
        breadcrumbs={breadcrumbs}
        schema={[
          forgeWebPageSchema,
          forgeArchitectureSchema,
          forgePillarsSchema,
          forgeCapabilitiesSchema,
          forgeVideoSchema,
        ]}
      >
        <link rel="preload" as="image" href={FORGE_ASSETS.keyframes[2].src} fetchPriority="high" />
      </SEO>

      {/* 01 — HERO SECTION */}
      <ForgeHero />

      {/* KINETIC TICKER IMMEDIATELY BELOW HERO */}
      <ForgeTicker />

      {/* 02–09 — ALTERNATING 3D CORE SCROLL STORYTELLING */}
      <ForgeStorytelling />
    </div>
  );
}
