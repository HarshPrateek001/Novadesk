import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Award, 
  ChevronDown, Terminal, Layers, ExternalLink, 
  Activity, Server, Database, Lock, Globe, GitBranch, Shield, 
  Command, Clock, Code, Cpu, MessageSquare, Compass, Eye,
  Check, FileText, Calendar, Send, ChevronRight, CornerDownRight,
  ArrowLeft, Sparkles, BookOpen, Fingerprint, Laptop, Coffee
} from 'lucide-react';
import SEO from '../components/SEO';

// ─── SCROLL REVEAL HELPER ────────────────────────────────────────────────────
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useScrollReveal();

  const translateMap = {
    up: 'translateY(24px)',
    down: 'translateY(-24px)',
    left: 'translateX(-28px)',
    right: 'translateX(28px)',
    fade: 'scale(0.99)'
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : translateMap[direction] || 'translateY(24px)',
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

// ─── LIVE WORLD CLOCK COMPONENT FOR GLOBAL FOOTPRINT ────────────────────────
function WorldClock({ city, timezone, label }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat([], {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setTime(formatter.format(new Date()));
      } catch {
        setTime('--:-- --');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="nd-clock-item">
      <div className="nd-clock-dot" />
      <div className="nd-clock-meta">
        <div className="nd-clock-city">{city} <span className="nd-clock-zone">[{label}]</span></div>
        <div className="nd-clock-time">{time}</div>
      </div>
    </div>
  );
}

// ─── DATA DEFINITIONS ────────────────────────────────────────────────────────

// 5 Non-Negotiable Studio Treaties (Editorial Guarantees)
const studioTreaties = [
  {
    num: "01",
    title: "Zero Junior Handoffs",
    tagline: "Direct senior builder execution on every single sprint.",
    narrative: "Traditional agencies win your business with senior partners and secretly pawn the work off to offshore juniors. At NovaDesk, Harsh Prateek personally architect-reviews every pull request, and Piusha Patra governs every sprint milestone. No juniors learning on your dollar.",
    deliverables: [
      "Architecture directly designed by Lead Systems Architects",
      "Direct code-level communication with the engineers building your product",
      "Zero account executive middlemen or game-of-telephone delays"
    ]
  },
  {
    num: "02",
    title: "Clickable Staging Every 7 Days",
    tagline: "You test real, working software every Friday. No theoretical slide decks.",
    narrative: "PowerPoint presentations do not validate products. Every 7 days, your code automatically builds to a private, password-protected staging URL. You click through real UI, trigger real APIs, and test actual database flows on your mobile phone and browser.",
    deliverables: [
      "Weekly automated CI/CD branch staging deployments",
      "Asynchronous Loom video walkthrough highlighting every new feature",
      "Real-time feedback incorporation before the next sprint kickoff"
    ]
  },
  {
    num: "03",
    title: "100% Day-1 Intellectual Property Sovereignty",
    tagline: "Your Git repos, cloud infrastructure, and keys belong to you from Day 1.",
    narrative: "We believe hostage agency models are unethical. All GitHub repositories, Supabase databases, Vercel deployments, and OpenAI API keys are provisioned directly in your company's name. Even if our engagement concludes, your platform operates autonomously without disruption.",
    deliverables: [
      "Full IP assignment and clean Git history handover on every commit",
      "Zero proprietary locking libraries or hidden licensing fees",
      "Complete environment credential transfer prior to final launch"
    ]
  },
  {
    num: "04",
    title: "Predictable Fixed-Scope Sprints",
    tagline: "Eliminating billable hourly padding in favor of committed outcomes.",
    narrative: "Hourly billing incentives are inherently perverse: agencies make more money when they take longer to solve problems. NovaDesk operates strictly on 7-to-14-day fixed-scope milestone sprints. You know exactly what ships and exactly what it costs before work begins.",
    deliverables: [
      "Guaranteed scope-of-work delivery within committed sprint timelines",
      "Transparent fixed sprint pricing with zero surprise change orders",
      "Clear milestone acceptance criteria signed off before billing"
    ]
  },
  {
    num: "05",
    title: "Direct WhatsApp & Slack Async Line",
    tagline: "Sub-1 hour response windows directly with leadership.",
    narrative: "No ticketing portals where your requests sit in a queue for 48 hours. You get a direct, shared Slack or WhatsApp channel with Harsh and Piusha. When you have an urgent architectural question or investor demo request, you speak directly to the builders.",
    deliverables: [
      "Sub-60 minute response time during active business hours",
      "4+ hours guaranteed daily synchronous overlap across US, UK, and Gulf time zones",
      "Direct access to technical decision-makers without bureaucratic red tape"
    ]
  }
];

// 4 Progression Chapters for the Interactive Studio Journal
const studioChapters = [
  {
    chapter: "01",
    era: "2024",
    title: "The Clean Break",
    subtitle: "Rejecting Agency Bloat",
    lead: "NovaDesk was born out of frustration with traditional IT outsourcing: bloated hourly billing, disconnected account managers, and codebases designed for vendor lock-in.",
    story: "Harsh and Piusha set out to build an intentional, boutique product engineering studio where elite founders could collaborate directly with senior architects. We established our founding rule: zero junior handoffs, fixed sprint pricing, and 100% IP sovereignty on Day 1.",
    tangibleArtifact: "The Anti-Agency Framework: Fixed 14-day delivery sprints with sub-1 hour founder response times.",
    metrics: [
      "Eliminated hourly billing in favor of outcome-based sprints",
      "Sub-1 hour direct architect response windows",
      "100% Day-1 legal IP transfer agreements"
    ]
  },
  {
    chapter: "02",
    era: "2024–25",
    title: "The 21-Day MVP Framework",
    subtitle: "Codifying Zero-to-Production Velocity",
    lead: "Startups fail when they take six months to validate an idea. We engineered a standardized 21-day rapid production framework that takes founders from concept to live staging.",
    story: "By decoupling client applications into standardized, modular architectures (PostgreSQL schemas, authentication primitives, and robust component design systems), we eliminated weeks of boilerplate waste while ensuring codebases maintain enterprise resilience for in-house scale.",
    tangibleArtifact: "The Production Blueprint: Sub-3 week live production deployments with automated 7-day staging cycles.",
    metrics: [
      "Average 21 days from kickoff to live production deployment",
      "Automated CI/CD staging environments updated every Friday",
      "Milestone-based delivery with weekly verified staging reviews"
    ]
  },
  {
    chapter: "03",
    era: "2025",
    title: "Applied AI & SaaS Core",
    subtitle: "Beyond Gimmicks to Practical Systems",
    lead: "While the industry flooded the market with shallow AI wrappers, NovaDesk invested in practical, reliable business intelligence architectures.",
    story: "We designed custom retrieval pipelines with pgvector, structured JSON schema enforcement, and workflow automation that executes real business actions. We combined these intelligence layers with robust multi-tenant SaaS backends built for scale.",
    tangibleArtifact: "Semantic Vector Vault: Production-grade RAG pipelines with fast retrieval and strict business guardrails.",
    metrics: [
      "Fast vector search retrieval with custom PostgreSQL pgvector indexes",
      "Multi-tenant billing integrations with payment gateways",
      "Reliable cloud deployment with automated health and error monitoring"
    ]
  },
  {
    chapter: "04",
    era: "2026",
    title: "Modern Engineering Studio",
    subtitle: "India-Rooted Engineering, Global Capability",
    lead: "Today, NovaDesk operates as a dedicated technical development partner for ambitious founders, growing businesses, and modern startups across India, the Gulf, and international markets.",
    story: "We combine local business understanding with modern full-stack engineering standards. We provide guaranteed real-time synchronous overlap across international time zones. We function not as distant ticket-takers, but as deeply committed technical partners invested in our clients' growth.",
    tangibleArtifact: "Synchronous Global Cadence: Real-time timezone overlap with zero-trust legal credential governance.",
    metrics: [
      "4+ hours daily synchronous overlap across international time zones",
      "Zero-trust credential governance and mutual NDA enforcement on Day 1",
      "Dedicated senior developers operating with complete IP transparency"
    ]
  }
];

const faqs = [
  {
    q: "Do Harsh and Piusha personally work on our project?",
    a: "Yes. NovaDesk is deliberately structured as a boutique, founder-led studio. Harsh Prateek directs the technical architecture and conducts every code review, while Piusha Patra leads sprint governance, milestone quality, and client collaboration. You have direct leadership accountability throughout."
  },
  {
    q: "What happens if we want to transition to an in-house team later?",
    a: "We actively prepare for it from Day 1. Because your codebase follows standard conventions, strict typing, and comprehensive architecture documentation, your new in-house hires can onboard in days. We even facilitate technical handover walkthroughs."
  },
  {
    q: "How do you handle non-disclosure agreements (NDAs) and IP rights?",
    a: "We sign a mutual non-disclosure agreement prior to our technical discovery session. All intellectual property, source code, designs, and cloud infrastructure keys belong solely to your company as each milestone is deployed."
  },
  {
    q: "How does time zone collaboration work for international clients?",
    a: "We combine an async-first workflow with 4+ hours of guaranteed real-time overlap across US (EST/PST), UK/Europe, and Gulf (GST) business hours. You receive daily loom/text updates and weekly live demo syncs at mutually convenient times."
  },
  {
    q: "How does NovaDesk differ from hiring a freelancer or Upwork dev shop?",
    a: "Freelancers pose single-point-of-failure risks and frequently ghost when overcommitted. Upwork dev shops bait with senior profiles and switch to junior developers. NovaDesk gives you an elite, accountable squad with full-stack, mobile, AI, and cloud DevOps under one cohesive guarantee."
  }
];

export default function AboutUs() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeTreaty, setActiveTreaty] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  // SEO Schemas
  const personSchemaHarsh = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.novadesk.site/#harsh-prateek",
    "name": "Harsh Prateek",
    "givenName": "Harsh",
    "familyName": "Prateek",
    "alternateName": ["Harsh Prateek NovaDesk", "Harsh Prateek Founder", "Harsh Prateek Director"],
    "jobTitle": "Director & Founder",
    "worksFor": { "@type": "Organization", "@id": "https://www.novadesk.site/#organization", "name": "NovaDesk", "url": "https://www.novadesk.site" },
    "url": "https://www.novadesk.site/about-us",
    "sameAs": [
      "https://www.linkedin.com/in/harshprateek001/",
      "https://calendly.com/itsharshprateek/30min"
    ]
  };

  const personSchemaPiusha = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.novadesk.site/#piusha-patra",
    "name": "Piusha Patra",
    "givenName": "Piusha",
    "familyName": "Patra",
    "alternateName": ["Piusha Patra NovaDesk", "Piusha Patra Co-Founder", "Piusha Patra Director"],
    "jobTitle": "Co-Founder & Director of Operations",
    "worksFor": { "@type": "Organization", "@id": "https://www.novadesk.site/#organization", "name": "NovaDesk", "url": "https://www.novadesk.site" },
    "url": "https://www.novadesk.site/about-us"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.novadesk.site/#organization",
    "name": "NovaDesk",
    "url": "https://www.novadesk.site",
    "logo": "https://www.novadesk.site/favicon-192.png",
    "founders": [
      { "@type": "Person", "@id": "https://www.novadesk.site/#harsh-prateek", "name": "Harsh Prateek", "jobTitle": "Director & Founder" },
      { "@type": "Person", "@id": "https://www.novadesk.site/#piusha-patra", "name": "Piusha Patra", "jobTitle": "Co-Founder & Director" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/novadesk-solutions/",
      "https://www.instagram.com/novadesk_officials_?igsh=MW5yZGtrbzg5aXNscg==",
      "https://www.facebook.com/share/1BfvnjhFV9/",
      "https://github.com/novadesksite-001"
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About NovaDesk | Executive Engineering Studio & Leadership",
    "url": "https://www.novadesk.site/about-us"
  };

  return (
    <>
      <SEO
        keywords="About NovaDesk, Harsh Prateek Founder, Piusha Patra NovaDesk, bespoke software development partner, custom AI engineering studio, outsourced software development team, digital product engineering agency"
        title="About NovaDesk | The Human Software Engineering Studio"
        description="NovaDesk is an authentic digital product and applied AI engineering studio founded by Harsh Prateek and Piusha Patra. Direct senior builder execution, weekly shippable staging, and zero junior handoffs."
        url="/about-us"
        author="Harsh Prateek & Piusha Patra"
        schema={[personSchemaHarsh, personSchemaPiusha, organizationSchema, aboutPageSchema]}
      />

      <style>{`
        /* ─── OPTION 3: THE TANGIBLE HUMAN WORKSHOP & CRAFT JOURNAL ─── */
        .nd-craft-page {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #111827;
          background: #FFFFFF;
          overflow-x: hidden;
          line-height: 1.65;
        }

        .nd-craft-page * {
          box-sizing: border-box;
        }

        .nd-shell {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* Monospaced Technical Eyebrow */
        .nd-mono-tag {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #64748B;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .nd-mono-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563EB;
          display: inline-block;
        }

        /* ─── 1. HERO: CLEAN & PREMIUM DUO-FOUNDER CENTERPIECE ─── */
        .nd-hero-atelier-canvas {
          padding: 80px 0 0 0;
          background: 
            radial-gradient(ellipse 70% 50% at 50% 15%, rgba(37, 99, 235, 0.05) 0%, transparent 80%),
            linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        /* Duo Founders Centerpiece Frame */
        .nd-hero-atelier-canvas .nd-shell {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nd-hero-duo-stage {
          position: relative;
          max-width: 600px;
          width: 100%;
          margin: 0 auto 16px auto;
          text-align: center;
        }

        .nd-hero-duo-img-wrap {
          position: relative;
          width: 100%;
          max-width: 580px;
          margin: 0 auto;
        }

        .nd-hero-duo-img {
          width: 100%;
          max-height: 440px;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          filter: drop-shadow(0 16px 36px rgba(15, 23, 42, 0.05));
        }

        /* Clean Founder Credit Pill */
        .nd-hero-duo-credit {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 20px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 999px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          margin-top: 14px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11.5px;
          font-weight: 700;
          color: #334155;
          letter-spacing: 0.5px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nd-credit-dot {
          color: #2563EB;
        }

        /* Grand Integrated Headline Area */
        .nd-hero-text-block {
          text-align: center;
          max-width: 760px;
          margin: 32px auto 0 auto;
          position: relative;
          z-index: 5;
          padding-bottom: 64px;
        }

        .nd-hero-main-h1 {
          font-size: clamp(38px, 5.2vw, 68px);
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.08;
          color: #0F172A;
          margin: 0 0 18px 0;
        }

        .nd-hero-main-h1 em {
          font-style: italic;
          font-family: Georgia, serif;
          font-weight: 400;
          color: #2563EB;
        }

        .nd-hero-sub-p {
          font-size: 17px;
          color: #475569;
          line-height: 1.75;
          max-width: 600px;
          margin: 0 auto 52px auto;
        }

        .nd-hero-cta-cluster {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .nd-hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #0F172A;
          color: #FFFFFF;
          font-size: 14.5px;
          font-weight: 700;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);
          white-space: nowrap;
        }

        .nd-hero-btn-primary:hover {
          background: #2563EB;
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.35);
        }

        .nd-hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 14px 24px;
          background: #FFFFFF;
          color: #0F172A;
          font-size: 14px;
          font-weight: 700;
          border-radius: 14px;
          border: 1.5px solid rgba(15, 23, 42, 0.14);
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .nd-hero-btn-secondary:hover {
          background: #F8FAFC;
          border-color: #2563EB;
          color: #2563EB;
        }

        /* ── BLUE TICKER (MATCHING HOME PAGE BLUE TICKER) ── */
        .nd-blue-ticker-wrap { 
          background: #2E29FF; 
          padding: 18px 0; 
          overflow: hidden; 
          position: relative; 
          z-index: 10; 
          border-top: 1px solid rgba(255, 255, 255, 0.15); 
          border-bottom: 1px solid rgba(255, 255, 255, 0.15); 
          margin-top: 48px;
        }

        .nd-blue-ticker-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 140px;
          background: linear-gradient(90deg, #2E29FF 0%, transparent 100%);
          z-index: 3;
          pointer-events: none;
        }

        .nd-blue-ticker-wrap::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 140px;
          background: linear-gradient(270deg, #2E29FF 0%, transparent 100%);
          z-index: 3;
          pointer-events: none;
        }

        .nd-blue-ticker { display: flex; width: 100%; }
        .nd-blue-ticker-track { 
          display: flex; 
          width: max-content; 
          animation: nd-about-ticker-slide 32s linear infinite; 
        }

        .nd-blue-ticker-wrap:hover .nd-blue-ticker-track {
          animation-play-state: paused;
        }

        .nd-blue-ticker-group { 
          display: flex; 
          align-items: center; 
          gap: 52px; 
          padding-right: 52px; 
          white-space: nowrap; 
        }

        .nd-blue-ticker-group span { 
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif; 
          font-size: 14px; 
          font-weight: 800; 
          color: #FFFFFF; 
          letter-spacing: 1.5px; 
          text-transform: uppercase; 
          display: flex; 
          align-items: center; 
          gap: 10px; 
        }

        .nd-ticker-star {
          color: #FFB6DB;
          font-size: 13px;
        }

        @keyframes nd-about-ticker-slide { 
          0% { transform: translate3d(0, 0, 0); } 
          100% { transform: translate3d(-50%, 0, 0); } 
        }

        @media (max-width: 1024px) {
          .nd-hero-text-block {
            margin-top: 20px;
          }
          .nd-vital-divider {
            display: none;
          }
          .nd-hero-vitals-strip {
            gap: 14px;
          }
        }

        /* ─── 2. BEHIND THE SCREENS: WORKSHOP ARTIFACTS ─── */
        .nd-artifacts-canvas {
          padding: 110px 0;
          background: #FFFFFF;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .nd-artifacts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
          margin-top: 48px;
        }

        .nd-artifact-box {
          background: #FAF9F6;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .nd-artifact-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.05);
        }

        .nd-artifact-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          padding-bottom: 14px;
        }

        .nd-artifact-title {
          font-size: 16px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.3px;
        }

        .nd-artifact-caption {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.7;
          margin-top: 20px;
        }

        /* Terminal Artifact Specimen */
        .nd-terminal-specimen {
          background: #0B0F17;
          color: #F8FAFC;
          border-radius: 12px;
          padding: 20px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12.5px;
          line-height: 1.6;
          overflow-x: auto;
          box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .nd-code-keyword { color: #F43F5E; }
        .nd-code-fn { color: #38BDF8; }
        .nd-code-string { color: #34D399; }
        .nd-code-comment { color: #64748B; font-style: italic; }

        /* Slack / Direct Chat Specimen */
        .nd-chat-specimen {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .nd-chat-msg {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .nd-chat-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .nd-chat-bubble {
          background: #F1F5F9;
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 13.5px;
          color: #1E293B;
          line-height: 1.5;
        }

        .nd-chat-author {
          font-size: 11.5px;
          font-weight: 700;
          color: #64748B;
          margin-bottom: 2px;
        }

        /* Whiteboard Schema Specimen */
        .nd-schema-specimen {
          background: #FFFFFF;
          border: 1px dashed #CBD5E1;
          border-radius: 12px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: ui-monospace, monospace;
          font-size: 12px;
          color: #334155;
        }

        .nd-schema-row {
          display: flex;
          justify-content: space-between;
          padding: 6px 10px;
          background: #F8FAFC;
          border-radius: 6px;
        }

        /* Staging Preview Specimen */
        .nd-staging-specimen {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px;
        }

        .nd-staging-url-bar {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 6px;
          padding: 6px 12px;
          font-family: ui-monospace, monospace;
          font-size: 11.5px;
          color: #2563EB;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nd-staging-badge-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .nd-staging-pill {
          font-size: 11px;
          font-weight: 700;
          background: #ECFDF5;
          color: #059669;
          padding: 3px 8px;
          border-radius: 4px;
        }

        /* ─── 3. THE STUDIO JOURNAL: 4 CHAPTERS OF PROGRESSION ─── */
        .nd-journal-canvas {
          padding: 110px 0;
          background: #FAF9F6;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          position: relative;
        }

        .nd-journal-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px auto;
        }

        .nd-journal-h2 {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          letter-spacing: -1.2px;
          color: #0F172A;
          margin: 12px 0 16px 0;
        }

        /* Chapter Tabs Nav */
        .nd-journal-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .nd-journal-tab {
          padding: 12px 24px;
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nd-journal-tab:hover {
          border-color: #2563EB;
          color: #2563EB;
        }

        .nd-journal-tab.active {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
        }

        /* Active Chapter Reading Pane */
        .nd-chapter-pane {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 16px 44px rgba(15, 23, 42, 0.04);
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 52px;
          align-items: center;
        }

        .nd-chapter-num-badge {
          font-family: ui-monospace, monospace;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #2563EB;
          margin-bottom: 12px;
          display: inline-block;
        }

        .nd-chapter-h3 {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          letter-spacing: -0.8px;
          color: #0F172A;
          margin: 0 0 8px 0;
          line-height: 1.2;
        }

        .nd-chapter-sub {
          font-size: 15px;
          font-weight: 700;
          color: #2563EB;
          margin-bottom: 20px;
        }

        .nd-chapter-lead {
          font-size: 16px;
          font-weight: 600;
          color: #1E293B;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .nd-chapter-story {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .nd-chapter-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nd-chapter-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid #CBD5E1;
          background: #FFFFFF;
          color: #1E293B;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nd-chapter-btn:hover:not(:disabled) {
          border-color: #2563EB;
          color: #2563EB;
          background: #F8FAFC;
        }

        .nd-chapter-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        /* Chapter Right Side Artifact Box */
        .nd-chapter-artifact-box {
          background: #F8FAFC;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          padding: 32px;
        }

        .nd-chapter-artifact-title {
          font-family: ui-monospace, monospace;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #64748B;
          margin-bottom: 14px;
          display: block;
        }

        .nd-chapter-tangible-text {
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.6;
          border-left: 3px solid #2563EB;
          padding-left: 14px;
          margin-bottom: 24px;
        }

        .nd-chapter-metrics-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nd-chapter-metric-item {
          font-size: 13.5px;
          font-weight: 600;
          color: #334155;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.5;
        }

        /* ─── 4. THE 5 NON-NEGOTIABLE STUDIO TREATIES ─── */
        .nd-treaties-canvas {
          padding: 110px 0;
          background: #FFFFFF;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .nd-treaties-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: flex-start;
        }

        .nd-treaty-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nd-treaty-item {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background: #FAF9F6;
        }

        .nd-treaty-item.active {
          border-color: #2563EB;
          background: #FFFFFF;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.06);
        }

        .nd-treaty-trigger {
          width: 100%;
          padding: 24px 28px;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
        }

        .nd-treaty-trigger-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nd-treaty-num {
          font-family: ui-monospace, monospace;
          font-size: 14px;
          font-weight: 800;
          color: #2563EB;
        }

        .nd-treaty-heading {
          font-size: 17px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.3px;
        }

        .nd-treaty-content {
          padding: 0 28px 28px 28px;
          border-top: 1px solid rgba(15, 23, 42, 0.04);
          margin-top: -6px;
        }

        .nd-treaty-tagline {
          font-size: 14.5px;
          font-weight: 700;
          color: #2563EB;
          margin: 16px 0 10px 0;
        }

        .nd-treaty-desc {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .nd-treaty-deliverables {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nd-treaty-del-item {
          font-size: 13px;
          font-weight: 600;
          color: #1E293B;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ─── 5. EXECUTIVE FOUNDER DOSSIERS ─── */
        .nd-founders-canvas {
          padding: 110px 0;
          background: #FAF9F6;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .nd-founders-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          margin-top: 48px;
        }

        .nd-founder-dossier-card {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .nd-founder-top-banner {
          padding: 36px 36px 24px 36px;
          display: flex;
          align-items: center;
          gap: 24px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }

        .nd-founder-avatar-wrap {
          width: 110px;
          height: 110px;
          border-radius: 18px;
          overflow: hidden;
          border: 2px solid #E2E8F0;
          flex-shrink: 0;
        }

        .nd-founder-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .nd-founder-info h3 {
          font-size: 24px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.6px;
          margin: 0 0 6px 0;
        }

        .nd-founder-role {
          font-size: 13.5px;
          font-weight: 700;
          color: #2563EB;
          margin-bottom: 8px;
        }

        .nd-founder-creed {
          font-size: 13px;
          color: #64748B;
          font-style: italic;
          line-height: 1.5;
        }

        .nd-founder-body {
          padding: 32px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }

        .nd-founder-bio {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 24px;
        }

        .nd-founder-skills-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .nd-skill-chip {
          font-size: 12px;
          font-weight: 600;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          color: #334155;
          padding: 5px 12px;
          border-radius: 8px;
        }

        .nd-founder-cta-row {
          border-top: 1px solid #F1F5F9;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ─── 6. GLOBAL SYNCHRONOUS DELIVERY (LIVE WORLD CLOCKS) ─── */
        .nd-global-canvas {
          padding: 110px 0;
          background: #FFFFFF;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .nd-global-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
        }

        .nd-clocks-terminal {
          background: #0F172A;
          color: #FFFFFF;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 16px 44px rgba(15, 23, 42, 0.12);
        }

        .nd-clocks-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 18px;
          margin-bottom: 24px;
        }

        .nd-clocks-header-title {
          font-family: ui-monospace, monospace;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #60A5FA;
        }

        .nd-clocks-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nd-clock-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .nd-clock-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
          flex-shrink: 0;
        }

        .nd-clock-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nd-clock-city {
          font-size: 14px;
          font-weight: 700;
          color: #FFFFFF;
        }

        .nd-clock-zone {
          font-size: 11px;
          color: #94A3B8;
          font-weight: 500;
        }

        .nd-clock-time {
          font-family: ui-monospace, monospace;
          font-size: 14px;
          color: #60A5FA;
          font-weight: 700;
        }

        /* ─── 7. PARTNERSHIP FAQS ─── */
        .nd-faq-canvas {
          padding: 110px 0;
          background: #FAF9F6;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .nd-faq-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: flex-start;
        }

        .nd-faq-card {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 16px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .nd-faq-card.open {
          border-color: rgba(37, 99, 235, 0.4);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.06);
        }

        .nd-faq-btn {
          width: 100%;
          padding: 22px 24px;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          text-align: left;
        }

        .nd-faq-q-text {
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.4;
        }

        .nd-faq-answer {
          padding: 0 24px 22px 24px;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.75;
          border-top: 1px solid rgba(15, 23, 42, 0.04);
        }

        /* ─── 8. FINAL EDITORIAL CONVERSION STRIP ─── */
        .nd-cta-strip {
          padding: 90px 0;
          background: #0B0F17;
          color: #FFFFFF;
          text-align: center;
          position: relative;
        }

        .nd-cta-content {
          max-width: 720px;
          margin: 0 auto;
        }

        .nd-cta-h2 {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          letter-spacing: -1.2px;
          margin: 14px 0 18px 0;
          line-height: 1.2;
        }

        .nd-cta-p {
          font-size: 16.5px;
          color: #94A3B8;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .nd-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          background: #2563EB;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);
        }

        .nd-btn-primary:hover {
          background: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37, 99, 235, 0.45);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .nd-letter-grid,
          .nd-artifacts-grid,
          .nd-chapter-pane,
          .nd-treaties-layout,
          .nd-founders-grid,
          .nd-global-layout,
          .nd-faq-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <div className="nd-craft-page">

        {/* ─── 1. HERO: CLEAN & PREMIUM DUO-FOUNDER CENTERPIECE ─── */}
        <section className="nd-hero-atelier-canvas">
          <div className="nd-shell">
            

            {/* Duo Founders Portrait Centerpiece Stage */}
            <Reveal direction="up" delay={20}>
              <div className="nd-hero-duo-stage">
                <div className="nd-hero-duo-img-wrap">
                  <img 
                    src="/novadesk_founders_duo_feathered.webp" 
                    alt="Harsh Prateek & Piusha Patra - Founders of NovaDesk" 
                    className="nd-hero-duo-img"
                  />
                </div>
                
                {/* Clean, Elegant Leadership Attribution Pill */}
                <div className="nd-hero-duo-credit">
                  <span>HARSH PRATEEK <span style={{ opacity: 0.7, fontWeight: 500 }}>(Lead Systems Architect)</span></span>
                  <span className="nd-credit-dot">•</span>
                  <span>PIUSHA PATRA <span style={{ opacity: 0.7, fontWeight: 500 }}>(Director of Operations)</span></span>
                </div>
              </div>
            </Reveal>

            {/* Integrated Grand Typography Block (Below/Overlapping image fade) */}
            <Reveal direction="up" delay={120}>
              <div className="nd-hero-text-block">
                <h1 className="nd-hero-main-h1">
                  Build your Startup <br />
                  with <em>NovaDesk</em>
                </h1>
                <p className="nd-hero-sub-p">
                  We built NovaDesk to liberate ambitious founders from agency bloat, hourly billing markups, and offshore junior handoffs. You work directly with the senior engineering leaders building your product.
                </p>

                {/* High-Intent CTAs */}
                <div className="nd-hero-cta-cluster">
                  <Link to="/contact-us" className="nd-hero-btn-primary">
                    Book Architecture Discovery with Founders <ArrowRight size={16} />
                  </Link>
                  <a href="#studio-treaties" className="nd-hero-btn-secondary">
                    Explore Studio Treaties <ChevronDown size={15} />
                  </a>
                </div>

              </div>
            </Reveal>

          </div>

          {/* Full-Width Royal Blue Infinite Ticker (Matching Home Page) */}
          <div className="nd-blue-ticker-wrap">
            <div className="nd-blue-ticker">
              <div className="nd-blue-ticker-track">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="nd-blue-ticker-group">
                    <span><span className="nd-ticker-star">✦</span> 0 JUNIOR HANDOFFS</span>
                    <span><span className="nd-ticker-star">✦</span> 7-DAY CLICKABLE STAGING</span>
                    <span><span className="nd-ticker-star">✦</span> 100% DAY-1 IP SOVEREIGNTY</span>
                    <span><span className="nd-ticker-star">✦</span> 21-DAY MVP FRAMEWORK</span>
                    <span><span className="nd-ticker-star">✦</span> FIXED-SCOPE PREDICTABLE SPRINTS</span>
                    <span><span className="nd-ticker-star">✦</span> DIRECT WHATSAPP &amp; SLACK</span>
                    <span><span className="nd-ticker-star">✦</span> 4+ HOURS SYNCHRONOUS GLOBAL OVERLAP</span>
                    <span><span className="nd-ticker-star">✦</span> ARCHITECT-REVIEWED CODE</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. BEHIND THE SCREENS: WORKSHOP ARTIFACTS ─── */}
        <section className="nd-artifacts-canvas">
          <div className="nd-shell">
            <Reveal direction="up">
              <div style={{ maxWidth: '780px' }}>
                <div className="nd-mono-tag">
                  <span className="nd-mono-dot" />
                  [WORKSHOP EVIDENCE] • BEHIND THE SCREENS
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1.2px', color: '#0F172A', margin: '0 0 14px 0' }}>
                  Real Software Engineering. Zero AI Gimmicks.
                </h2>
                <p style={{ fontSize: '16px', color: '#64748B', margin: 0 }}>
                  Take a look at how production software is actually designed, verified, and shipped inside our studio every day.
                </p>
              </div>
            </Reveal>

            <div className="nd-artifacts-grid">
              
              {/* Artifact 01: Production Terminal Code */}
              <Reveal direction="up" delay={50}>
                <div className="nd-artifact-box">
                  <div>
                    <div className="nd-artifact-header">
                      <span className="nd-artifact-title">ARTIFACT 01: DOWN TO THE METAL</span>
                      <span className="nd-mono-tag" style={{ margin: 0, color: '#2563EB' }}>TypeScript / pgvector</span>
                    </div>

                    <div className="nd-terminal-specimen">
                      <div><span className="nd-code-comment">// NovaDesk Core: Deterministic RAG Vector Query</span></div>
                      <div><span className="nd-code-keyword">export async function</span> <span className="nd-code-fn">querySemanticVault</span>(prompt: <span className="nd-code-keyword">string</span>) &#123;</div>
                      <div style={{ paddingLeft: '16px' }}><span className="nd-code-keyword">const</span> vector = <span className="nd-code-keyword">await</span> embed(prompt);</div>
                      <div style={{ paddingLeft: '16px' }}><span className="nd-code-keyword">return await</span> db.query(sql`</div>
                      <div style={{ paddingLeft: '32px' }}><span className="nd-code-string">SELECT id, chunk_data, 1 - (embedding &lt;=&gt; $&#123;vector&#125;) AS sim</span></div>
                      <div style={{ paddingLeft: '32px' }}><span className="nd-code-string">FROM knowledge_vault WHERE sim &gt; 0.85 ORDER BY sim DESC LIMIT 5</span></div>
                      <div style={{ paddingLeft: '16px' }}>`);</div>
                      <div>&#125;</div>
                    </div>
                  </div>

                  <p className="nd-artifact-caption">
                    We write typed, production-grade systems—deterministic vector retrieval, strict Postgres constraints, and clean domain isolation.
                  </p>
                </div>
              </Reveal>

              {/* Artifact 02: Direct Line WhatsApp / Slack */}
              <Reveal direction="up" delay={100}>
                <div className="nd-artifact-box">
                  <div>
                    <div className="nd-artifact-header">
                      <span className="nd-artifact-title">ARTIFACT 02: DIRECT BUILDER LINE</span>
                      <span className="nd-mono-tag" style={{ margin: 0, color: '#059669' }}>Zero Middlemen</span>
                    </div>

                    <div className="nd-chat-specimen">
                      <div className="nd-chat-msg">
                        <img src="/hero-my-image.webp" alt="Harsh Prateek" className="nd-chat-avatar" />
                        <div>
                          <div className="nd-chat-author">Harsh Prateek (Lead Systems Architect)</div>
                          <div className="nd-chat-bubble">
                            "Staged the multi-tenant billing webhook on preview branch `v2.4`. Database migrations ran zero-downtime. Check staging link when free."
                          </div>
                        </div>
                      </div>

                      <div className="nd-chat-msg" style={{ flexDirection: 'row-reverse' }}>
                        <div style={{ textAlign: 'right' }}>
                          <div className="nd-chat-author">Client Founder</div>
                          <div className="nd-chat-bubble" style={{ background: '#2563EB', color: '#FFFFFF' }}>
                            "Tested on mobile Safari and Stripe test keys passed instantly! Ready to push to production."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="nd-artifact-caption">
                    No ticketing portals where your requests languish for 48 hours. You speak directly to Harsh and Piusha in a shared Slack or WhatsApp workspace.
                  </p>
                </div>
              </Reveal>

              {/* Artifact 03: 7-Day Shippable Staging */}
              <Reveal direction="up" delay={150}>
                <div className="nd-artifact-box">
                  <div>
                    <div className="nd-artifact-header">
                      <span className="nd-artifact-title">ARTIFACT 03: CLICKABLE STAGING</span>
                      <span className="nd-mono-tag" style={{ margin: 0, color: '#2563EB' }}>Weekly Friday Demo</span>
                    </div>

                    <div className="nd-staging-specimen">
                      <div className="nd-staging-url-bar">
                        <Lock size={12} style={{ color: '#059669' }} />
                        <span>https://staging-client-sprint.novadesk.app</span>
                      </div>
                      <div className="nd-staging-badge-row">
                        <span className="nd-staging-pill">CI/CD PASSING</span>
                        <span className="nd-staging-pill">POSTGRES HEALTHY</span>
                        <span className="nd-staging-pill">AUTH STAGED</span>
                        <span className="nd-staging-pill">VERCEL EDGE</span>
                      </div>
                    </div>
                  </div>

                  <p className="nd-artifact-caption">
                    Every Friday, you test shippable code on your own devices. Slide decks don't validate businesses—clickable software does.
                  </p>
                </div>
              </Reveal>

              {/* Artifact 04: Database Schema Blueprint */}
              <Reveal direction="up" delay={200}>
                <div className="nd-artifact-box">
                  <div>
                    <div className="nd-artifact-header">
                      <span className="nd-artifact-title">ARTIFACT 04: ARCHITECTURE BLUEPRINT</span>
                      <span className="nd-mono-tag" style={{ margin: 0, color: '#4F46E5' }}>Schema Discipline</span>
                    </div>

                    <div className="nd-schema-specimen">
                      <div className="nd-schema-row">
                        <span>TABLE: organizations</span>
                        <span style={{ color: '#2563EB' }}>[PK: uuid, rls: enabled]</span>
                      </div>
                      <div className="nd-schema-row">
                        <span>TABLE: tenant_subscriptions</span>
                        <span style={{ color: '#059669' }}>[FK: org_id, stripe_sync]</span>
                      </div>
                      <div className="nd-schema-row">
                        <span>TABLE: knowledge_vectors</span>
                        <span style={{ color: '#D97706' }}>[dim: 1536, ivfflat_index]</span>
                      </div>
                    </div>
                  </div>

                  <p className="nd-artifact-caption">
                    Every system begins with rigorous data architecture on the whiteboard before writing a single API endpoint.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ─── 3. THE STUDIO JOURNAL: 4 CHAPTERS OF PROGRESSION ─── */}
        <section className="nd-journal-canvas">
          <div className="nd-shell">
            <Reveal direction="up">
              <div className="nd-journal-header">
                <div className="nd-mono-tag">
                  <span className="nd-mono-dot" />
                  [STUDIO CHRONICLE] • EVOLUTION OF AN ENGINEERING STANDARD
                </div>
                <h2 className="nd-journal-h2">
                  The Four Chapters of NovaDesk
                </h2>
                <p style={{ fontSize: '16px', color: '#64748B', margin: 0 }}>
                  Click each chapter below to inspect how our engineering methodologies and capabilities compound over time.
                </p>
              </div>
            </Reveal>

            {/* Chapter Selector Tabs */}
            <div className="nd-journal-nav">
              {studioChapters.map((chap, idx) => (
                <button
                  key={idx}
                  className={`nd-journal-tab ${activeChapter === idx ? 'active' : ''}`}
                  onClick={() => setActiveChapter(idx)}
                >
                  <BookOpen size={14} />
                  <span>Chapter {chap.chapter}: {chap.title}</span>
                  <span style={{ opacity: 0.6, fontSize: '12px' }}>({chap.era})</span>
                </button>
              ))}
            </div>

            {/* Active Chapter Reading Pane */}
            <div className="nd-chapter-pane">
              {/* Left Column: Chapter Narrative */}
              <div>
                <span className="nd-chapter-num-badge">
                  CHAPTER {studioChapters[activeChapter].chapter} • {studioChapters[activeChapter].era}
                </span>
                
                <h3 className="nd-chapter-h3">
                  {studioChapters[activeChapter].title}
                </h3>

                <div className="nd-chapter-sub">
                  {studioChapters[activeChapter].subtitle}
                </div>

                <p className="nd-chapter-lead">
                  "{studioChapters[activeChapter].lead}"
                </p>

                <p className="nd-chapter-story">
                  {studioChapters[activeChapter].story}
                </p>

                <div className="nd-chapter-controls">
                  <button 
                    className="nd-chapter-btn"
                    onClick={() => setActiveChapter(prev => Math.max(0, prev - 1))}
                    disabled={activeChapter === 0}
                  >
                    <ArrowLeft size={14} /> Previous Chapter
                  </button>
                  <button 
                    className="nd-chapter-btn"
                    onClick={() => setActiveChapter(prev => Math.min(studioChapters.length - 1, prev + 1))}
                    disabled={activeChapter === studioChapters.length - 1}
                  >
                    Next Chapter <ArrowRight size={14} />
                  </button>
                  <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600, marginLeft: 8 }}>
                    {activeChapter + 1} of {studioChapters.length}
                  </span>
                </div>
              </div>

              {/* Right Column: Tangible Artifact & Impact Box */}
              <div className="nd-chapter-artifact-box">
                <span className="nd-chapter-artifact-title">
                  TANGIBLE STUDIO DELIVERABLE
                </span>

                <div className="nd-chapter-tangible-text">
                  {studioChapters[activeChapter].tangibleArtifact}
                </div>

                <span className="nd-chapter-artifact-title" style={{ marginTop: '20px' }}>
                  KEY MILESTONES &amp; STANDARDS
                </span>

                <ul className="nd-chapter-metrics-list">
                  {studioChapters[activeChapter].metrics.map((metric, mIdx) => (
                    <li key={mIdx} className="nd-chapter-metric-item">
                      <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0, marginTop: 2 }} />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ─── 4. THE 5 NON-NEGOTIABLE STUDIO TREATIES ─── */}
        <section id="studio-treaties" className="nd-treaties-canvas">
          <div className="nd-shell">
            <div className="nd-treaties-layout">
              
              {/* Left Column: Treaty Lead */}
              <Reveal direction="up">
                <div>
                  <div className="nd-mono-tag">
                    <span className="nd-mono-dot" />
                    [STUDIO LAW] • THE FIVE TREATIES
                  </div>
                  <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1.2px', color: '#0F172A', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                    Non-Negotiable Guarantees We Put in Writing
                  </h2>
                  <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '28px' }}>
                    Agencies hide behind vague statements of work and ambiguous change orders. NovaDesk operates under five unyielding commitments that protect your capital, IP, and launch schedule.
                  </p>
                  <Link to="/contact-us" className="nd-btn-primary">
                    Book Architecture Discovery <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>

              {/* Right Column: Accordion Treaties */}
              <div className="nd-treaty-accordion-list">
                {studioTreaties.map((treaty, idx) => {
                  const isOpen = activeTreaty === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`nd-treaty-item ${isOpen ? 'active' : ''}`}
                    >
                      <button 
                        className="nd-treaty-trigger"
                        onClick={() => setActiveTreaty(isOpen ? null : idx)}
                      >
                        <div className="nd-treaty-trigger-left">
                          <span className="nd-treaty-num">{treaty.num}</span>
                          <span className="nd-treaty-heading">{treaty.title}</span>
                        </div>
                        <ChevronDown 
                          size={18} 
                          style={{ 
                            color: isOpen ? '#2563EB' : '#94A3B8',
                            transform: isOpen ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s ease'
                          }} 
                        />
                      </button>

                      {isOpen && (
                        <div className="nd-treaty-content">
                          <div className="nd-treaty-tagline">{treaty.tagline}</div>
                          <p className="nd-treaty-desc">{treaty.narrative}</p>
                          <ul className="nd-treaty-deliverables">
                            {treaty.deliverables.map((item, dIdx) => (
                              <li key={dIdx} className="nd-treaty-del-item">
                                <Check size={14} style={{ color: '#059669', flexShrink: 0 }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ─── 5. EXECUTIVE FOUNDER DOSSIERS ─── */}
        <section className="nd-founders-canvas">
          <div className="nd-shell">
            <Reveal direction="up">
              <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
                <div className="nd-mono-tag">
                  <span className="nd-mono-dot" />
                  [STUDIO LEADERSHIP] • MEET THE ARCHITECTS
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1.2px', color: '#0F172A', margin: '0 0 14px 0' }}>
                  Direct Executive Accountability
                </h2>
                <p style={{ fontSize: '16px', color: '#64748B', margin: 0 }}>
                  We are deliberately structured as a boutique, founder-led studio. When you hire NovaDesk, you get Harsh and Piusha directly in your corner.
                </p>
              </div>
            </Reveal>

            <div className="nd-founders-grid">
              
              {/* HARSH PRATEEK */}
              <Reveal direction="up" delay={50}>
                <div className="nd-founder-dossier-card">
                  <div>
                    <div className="nd-founder-top-banner">
                      <div className="nd-founder-avatar-wrap">
                        <img 
                          src="/hero-my-image.webp" 
                          alt="Harsh Prateek - Director & Lead Systems Architect" 
                          className="nd-founder-avatar-img"
                        />
                      </div>
                      <div className="nd-founder-info">
                        <h3>Harsh Prateek</h3>
                        <div className="nd-founder-role">Director &amp; Lead Systems Architect</div>
                        <div className="nd-founder-creed">
                          "Software is craft. If you don't understand the database query at 2 AM, you shouldn't be architecting a client's business."
                        </div>
                      </div>
                    </div>

                    <div className="nd-founder-body">
                      <p className="nd-founder-bio">
                        Harsh oversees technical systems architecture, full-stack scalability, and applied GenAI workflows at NovaDesk. He directly architects database topologies, conducts code review governance, and ensures every staging deployment is rock-solid.
                      </p>

                      <div className="nd-founder-skills-strip">
                        <span className="nd-skill-chip">Next.js 15 &amp; React</span>
                        <span className="nd-skill-chip">FastAPI &amp; Python</span>
                        <span className="nd-skill-chip">Supabase &amp; PostgreSQL</span>
                        <span className="nd-skill-chip">Vector RAG Pipelines</span>
                        <span className="nd-skill-chip">Direct Dev Access</span>
                      </div>

                      <div className="nd-founder-cta-row">
                        <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Technical Governance</span>
                        <Link to="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 700, color: '#2563EB', textDecoration: 'none' }}>
                          Sync with Harsh <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* PIUSHA PATRA */}
              <Reveal direction="up" delay={100}>
                <div className="nd-founder-dossier-card">
                  <div>
                    <div className="nd-founder-top-banner">
                      <div className="nd-founder-avatar-wrap">
                        <img 
                          src="/Co-Founder.png" 
                          alt="Piusha Patra - Co-Founder & Director of Operations" 
                          className="nd-founder-avatar-img"
                        />
                      </div>
                      <div className="nd-founder-info">
                        <h3>Piusha Patra</h3>
                        <div className="nd-founder-role" style={{ color: '#4F46E5' }}>Co-Founder &amp; Director of Operations</div>
                        <div className="nd-founder-creed">
                          "We treat every client's capital like our own seed round. Speed without rigorous project governance is just expensive chaos."
                        </div>
                      </div>
                    </div>

                    <div className="nd-founder-body">
                      <p className="nd-founder-bio">
                        Piusha directs sprint cadence governance, milestone quality assurance, and long-term client growth partnerships at NovaDesk. Her leadership guarantees scopes stay disciplined, staging ships strictly on schedule, and client IP remains legally secure.
                      </p>

                      <div className="nd-founder-skills-strip">
                        <span className="nd-skill-chip">Sprint Governance</span>
                        <span className="nd-skill-chip">Milestone QA Assurance</span>
                        <span className="nd-skill-chip">IP Sovereignty</span>
                        <span className="nd-skill-chip">Client Growth Strategy</span>
                        <span className="nd-skill-chip">Async Overlap Sync</span>
                      </div>

                      <div className="nd-founder-cta-row">
                        <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Operations Governance</span>
                        <Link to="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 700, color: '#4F46E5', textDecoration: 'none' }}>
                          Sync with Piusha <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ─── 6. GLOBAL SYNCHRONOUS DELIVERY (LIVE WORLD CLOCKS) ─── */}
        <section className="nd-global-canvas">
          <div className="nd-shell">
            <div className="nd-global-layout">
              <Reveal direction="up">
                <div>
                  <div className="nd-mono-tag">
                    <span className="nd-mono-dot" />
                    [GLOBAL OVERLAP] • TIMEZONE SYNCHRONICITY
                  </div>
                  <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1.2px', color: '#0F172A', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                    India-Rooted Engineering, Synchronous Global Delivery
                  </h2>
                  <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '24px' }}>
                    Operating from India’s premier software corridor, NovaDesk blends world-class engineering discipline with the speed and flexibility demanded by international founders.
                  </p>
                  <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.75 }}>
                    We guarantee a minimum of 4+ hours of active real-time overlap across US (PST/EST), UK/Europe (GMT), and Gulf (GST) business hours every single workday.
                  </p>
                </div>
              </Reveal>

              {/* World Clocks Terminal Card */}
              <div className="nd-clocks-terminal">
                <div className="nd-clocks-top">
                  <span className="nd-clocks-header-title">LIVE STUDIO CLOCKS • ACTIVE OVERLAP</span>
                  <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>SYNCHRONIZED</span>
                </div>

                <div className="nd-clocks-grid">
                  <WorldClock city="San Francisco / LA" timezone="America/Los_Angeles" label="PST" />
                  <WorldClock city="New York / Boston" timezone="America/New_York" label="EST" />
                  <WorldClock city="London / Dublin" timezone="Europe/London" label="GMT" />
                  <WorldClock city="Dubai / Abu Dhabi" timezone="Asia/Dubai" label="GST" />
                  <WorldClock city="Bengaluru / Delhi" timezone="Asia/Kolkata" label="IST (HQ)" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. PARTNERSHIP FAQS ─── */}
        <section className="nd-faq-canvas">
          <div className="nd-shell">
            <div className="nd-faq-grid">
              
              {/* Left Column: FAQ Lead */}
              <Reveal direction="up">
                <div>
                  <div className="nd-mono-tag">
                    <span className="nd-mono-dot" />
                    [PARTNERSHIP DILIGENCE] • FREQUENTLY ASKED QUESTIONS
                  </div>
                  <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1.2px', color: '#0F172A', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                    Clear Answers for Discerning Founders
                  </h2>
                  <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '24px' }}>
                    Everything you need to know about our legal IP protection, sprint cadence, and engineering governance before partnering.
                  </p>
                  <Link to="/contact-us" className="nd-btn-primary">
                    Have Another Question? Ask Harsh <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>

              {/* Right Column: FAQ Accordions */}
              <div>
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`nd-faq-card ${isOpen ? 'open' : ''}`}>
                      <button 
                        className="nd-faq-btn"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                      >
                        <span className="nd-faq-q-text">{faq.q}</span>
                        <ChevronDown 
                          size={18} 
                          style={{ 
                            color: isOpen ? '#2563EB' : '#94A3B8',
                            transform: isOpen ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s ease',
                            flexShrink: 0
                          }} 
                        />
                      </button>

                      {isOpen && (
                        <div className="nd-faq-answer">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ─── 8. FINAL CONVERSION STRIP ─── */}
        <section className="nd-cta-strip">
          <div className="nd-shell">
            <div className="nd-cta-content">
              <div className="nd-mono-tag" style={{ color: '#60A5FA' }}>
                <span className="nd-mono-dot" style={{ background: '#60A5FA' }} />
                [NEXT SPRINT RESERVATIONS OPEN]
              </div>
              <h2 className="nd-cta-h2">
                Ready to build with senior engineers?
              </h2>
              <p className="nd-cta-p">
                Skip the sales pitch. Schedule an architecture discovery session directly with Harsh Prateek and Piusha Patra to map your product roadmap.
              </p>
              <Link to="/contact-us" className="nd-btn-primary" style={{ fontSize: '16px', padding: '18px 40px' }}>
                Schedule Architecture Sync with Founders <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
