import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, Clock, Code, Cpu, Sparkles, ArrowRight, CheckCircle2, 
  ShieldCheck, Zap, Users, Award, TrendingUp, ChevronDown, Search, 
  XCircle, AlertCircle, Terminal, Layers, Star, ExternalLink, Activity,
  Server, Database, Lock, Globe, GitBranch, Shield, Command
} from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

// ─── DYNAMIC SVG ICON COMPONENT ──────────────────────────────────────────────
// Dynamically renders black SVG icons from /icons/lineal or /icons/solid
// and recolors them using CSS masks according to theme color specs.

function Icon({ name, type = 'lineal', color = 'currentColor', size = 24, className = '', style = {} }) {
  const iconPath = `/icons/${type}/${name}.svg`;
  return (
    <span
      className={`nd-icon ${className}`}
      style={{
        display: 'inline-block',
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        backgroundColor: color,
        WebkitMaskImage: `url("${iconPath}")`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskImage: `url("${iconPath}")`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
        flexShrink: 0,
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        ...style
      }}
    />
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "99.4%", label: "On-Time Delivery", sub: "50+ Shipped Sprints", icon: "speedometer", color: "#2E29FF" },
  { value: "50+", label: "Shipped Platforms", sub: "Web, Mobile & AI Apps", icon: "rocket", color: "#00B882" },
  { value: "100%", label: "Direct Senior Access", sub: "Zero Account Managers", icon: "group", color: "#F59E0B" },
  { value: "4.9★", label: "Client Rating", sub: "Global Founders", icon: "award-2", color: "#EC4899" }
];

const paradigmComparison = [
  {
    title: "Project Communication",
    traditional: "Account managers, indirect feedback loops, lost details.",
    novadesk: "Direct Slack/Teams channel with lead engineers writing your code.",
    icon: "chat-2",
    color: "#2E29FF"
  },
  {
    title: "Development Speed",
    traditional: "Monthly milestone dumps with high uncertainty.",
    novadesk: "Weekly live shippable builds with full transparency.",
    icon: "rocket",
    color: "#00B882"
  },
  {
    title: "Code Architecture",
    traditional: "Outsourced junior developers learning on your budget.",
    novadesk: "Handcrafted by senior architects using modern Next.js & FastAPI.",
    icon: "browser",
    color: "#7C3AED"
  },
  {
    title: "Pricing & Billing",
    traditional: "Hidden surprise fees and inflated change request hours.",
    novadesk: "Transparent sprint scoping with predictable flat rates.",
    icon: "balance",
    color: "#F59E0B"
  }
];

const coreValues = [
  {
    iconName: "group",
    type: "lineal",
    title: "Direct Engineering Access",
    desc: "Speak directly with the architects and engineers building your system. No telephone games, no middle layers.",
    color: "#2E29FF",
    bg: "rgba(46, 41, 255, 0.08)",
    badge: "No Middlemen"
  },
  {
    iconName: "speedometer",
    type: "lineal",
    title: "Rapid Shippable Velocity",
    desc: "Continuous integration & weekly demo releases so you see real working software from day one.",
    color: "#00B882",
    bg: "rgba(0, 184, 130, 0.08)",
    badge: "Fast Iteration"
  },
  {
    iconName: "sitemap",
    type: "lineal",
    title: "Production-Grade Scalability",
    desc: "Modern Next.js, Node.js, FastAPI, and Supabase stack designed for high availability and linear scaling.",
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.08)",
    badge: "99.99% Uptime"
  },
  {
    iconName: "light-bulb",
    type: "lineal",
    title: "AI-First Native Architecture",
    desc: "Seamlessly embedding LLMs, custom RAG pipelines, and intelligent automation into business workflows.",
    color: "#9333EA",
    bg: "rgba(147, 51, 234, 0.08)",
    badge: "GenAI Powered"
  },
  {
    iconName: "shield-2",
    type: "lineal",
    title: "Zero-Trust Security & QA",
    desc: "Automated end-to-end testing, security audits, and strict data encryption built into every deployment.",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.08)",
    badge: "Bank-Grade QA"
  },
  {
    iconName: "compass",
    type: "lineal",
    title: "Transparent Scoping & Counsel",
    desc: "Clear timelines, realistic roadmaps, and truthful technical counsel over inflated sales promises.",
    color: "#0EA5E9",
    bg: "rgba(14, 165, 233, 0.08)",
    badge: "100% Transparent"
  }
];

const techStack = [
  { name: "React / Next.js", icon: "/icons/nextjs.svg", desc: "Full-Stack Web Framework", category: "Frontend" },
  { name: "Python / FastAPI", icon: "/icons/fastapi.svg", desc: "High-Performance Backend APIs", category: "Backend" },
  { name: "Node.js", icon: "/icons/nodejs.svg", desc: "Scalable Microservices", category: "Backend" },
  { name: "Supabase & Postgres", icon: "/icons/supabase.svg", desc: "Realtime Database & Auth", category: "Database" },
  { name: "OpenAI & Gemini", icon: "/icons/openai.svg", desc: "GenAI Models & LLM Agents", category: "AI & ML" },
  { name: "AWS & Docker", icon: "/icons/aws.svg", desc: "Cloud Container Orchestration", category: "DevOps" },
  { name: "React Native", icon: "/icons/react.svg", desc: "Cross-Platform Mobile Apps", category: "Mobile" },
  { name: "Figma", icon: "/icons/figma.svg", desc: "Design Systems & Wireframes", category: "Design" }
];

const processSteps = [
  {
    step: "01",
    title: "Architecture & Discovery",
    desc: "We analyze your technical goals, map domain data flows, and build a precise blueprint for rapid execution.",
    icon: "compass",
    color: "#2E29FF",
    details: ["System Topology", "Database Schema Design", "Tech Stack Selection"]
  },
  {
    step: "02",
    title: "UX & Technical Design System",
    desc: "Designing responsive, high-converting interfaces with micro-interactions and pixel-perfect Figma design systems.",
    icon: "design",
    color: "#7C3AED",
    details: ["Interactive Wireframes", "Design System Tokens", "User Testing"]
  },
  {
    step: "03",
    title: "Agile Engineering Sprints",
    desc: "Senior engineers write clean, maintainable code in 1-week sprints with automated test coverage.",
    icon: "settings-2",
    color: "#00B882",
    details: ["Frontend & Backend Sprints", "Automated QA Suites", "Weekly Live Demos"]
  },
  {
    step: "04",
    title: "Production Launch & Scale",
    desc: "Zero-downtime deployment, continuous cloud monitoring, and ongoing feature enhancement.",
    icon: "rocket",
    color: "#F59E0B",
    details: ["CI/CD Pipeline", "Cloud Auto-scaling", "Post-Launch SLA"]
  }
];

const capabilities = [
  {
    title: "Full-Stack Web Systems",
    category: "Full-Stack",
    desc: "Architecting high-throughput React & Next.js platforms with serverless backends and optimized render performance.",
    icon: <Globe size={26} />,
    color: "#2E29FF",
    bg: "rgba(46, 41, 255, 0.08)",
    techs: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"]
  },
  {
    title: "AI & GenAI Integration",
    category: "AI & Data",
    desc: "Building custom LLM agents, RAG document pipelines, conversational bots, and intelligent business workflows.",
    icon: <Cpu size={26} />,
    color: "#9333EA",
    bg: "rgba(147, 51, 234, 0.08)",
    techs: ["Python", "FastAPI", "LangChain", "OpenAI", "Gemini"]
  },
  {
    title: "Mobile App Development",
    category: "Full-Stack",
    desc: "Developing butter-smooth cross-platform iOS & Android mobile applications with offline-first state sync.",
    icon: <Zap size={26} />,
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.08)",
    techs: ["React Native", "iOS", "Android", "Supabase", "GraphQL"]
  },
  {
    title: "Cloud & DevOps Infrastructure",
    category: "DevOps",
    desc: "Zero-downtime CI/CD deployment automation, Docker containerization, Kubernetes scaling, and AWS infrastructure.",
    icon: <Server size={26} />,
    color: "#00B882",
    bg: "rgba(0, 184, 130, 0.08)",
    techs: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel"]
  },
  {
    title: "UI/UX & Design Systems",
    category: "Design",
    desc: "Crafting scalable Figma design systems, micro-interactions, responsive layouts, and user conversion flows.",
    icon: <Layers size={26} />,
    color: "#0EA5E9",
    bg: "rgba(14, 165, 233, 0.08)",
    techs: ["Figma", "Design Tokens", "Micro-Interactions", "Wireframing"]
  },
  {
    title: "QA Automation & Security",
    category: "DevOps",
    desc: "Comprehensive automated unit testing, Cypress E2E test suites, performance optimization, and security audits.",
    icon: <ShieldCheck size={26} />,
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.08)",
    techs: ["Cypress", "Jest", "Security Scans", "Lighthouse 100"]
  }
];

const faqs = [
  {
    q: "Who leads the development and operations at NovaDesk?",
    a: "NovaDesk is led directly by Founder & CEO Harsh Prateek (handling technical architecture and full-stack execution) and Co-Founder Piusha Patra (handling strategic direction, client relationships, and operations). Clients work directly with leadership and senior engineering talent."
  },
  {
    q: "Why choose NovaDesk over a traditional software agency?",
    a: "Traditional agencies add unnecessary layers—account managers, coordinators, and junior developers learning on your budget. NovaDesk provides direct engineering access, transparent weekly shippable builds, and senior-level execution without bloated agency overhead."
  },
  {
    q: "What technical stack does NovaDesk specialize in?",
    a: "We specialize in modern, high-performance tech stacks including React, Next.js, TypeScript, Node.js, Python (FastAPI), Supabase, PostgreSQL, React Native, and enterprise AI APIs (OpenAI, Gemini, Custom RAG)."
  },
  {
    q: "How do weekly shippable builds work?",
    a: "Every week, our team pushes production-ready code to your staging environment. You participate in a weekly async or live demo to review actual features, test functionality, and approve next sprint priorities."
  },
  {
    q: "What post-launch support and ongoing maintenance do you offer?",
    a: "Every project includes a dedicated post-launch support window. We also offer continuous maintenance, cloud infrastructure scaling, and retainer models for continuous feature development."
  }
];

// ─── SCROLL REVEAL HOOK ──────────────────────────────────────────────────────

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
    up: 'translateY(36px)',
    down: 'translateY(-36px)',
    left: 'translateX(-44px)',
    right: 'translateX(44px)',
    fade: 'scale(0.96)'
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : translateMap[direction] || 'translateY(36px)',
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

// ─── MAIN ABOUT US COMPONENT (LIGHT LAYOUT THEME) ───────────────────────────

export default function AboutUs() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [capabilityTab, setCapabilityTab] = useState('All');
  const [faqSearch, setFaqSearch] = useState('');

  const filteredCapabilities = capabilityTab === 'All'
    ? capabilities
    : capabilities.filter(c => c.category === capabilityTab);

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  // JSON-LD Schemas (Preserved for SEO)
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
    "url": "https://www.novadesk.site/about-us"
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
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About NovaDesk | Leadership, Directors & Engineering Team",
    "url": "https://www.novadesk.site/about-us"
  };

  return (
    <>
      <SEO
        keywords="About NovaDesk, Harsh Prateek, Piusha Patra, Piusha Patra NovaDesk, Harsh Prateek Founder, Piusha Patra Co-Founder, software development team, AI studio India"
        title="About NovaDesk | Full-Stack & AI Development Studio"
        description="NovaDesk is a premier software engineering studio led by Founder & CEO Harsh Prateek and Co-Founder Piusha Patra. Built around direct access, senior engineers, and AI innovation."
        url="/about-us"
        author="Harsh Prateek & Piusha Patra"
        schema={[personSchemaHarsh, personSchemaPiusha, organizationSchema, aboutPageSchema]}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        /* ── LIGHT THEME ROOT ── */
        .nd-about-root {
          font-family: 'Plus Jakarta Sans', var(--font-sans), sans-serif;
          color: #0F172A;
          background: #FFFFFF;
          overflow-x: hidden;
        }

        .nd-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ── HERO SECTION (LIGHT) ── */
        .nd-hero-pro {
          position: relative;
          padding: 110px 24px 80px 24px;
          background: linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 60%, #FFFFFF 100%);
          overflow: hidden;
          color: #0F172A;
        }

        .nd-hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(46, 41, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(46, 41, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%);
          pointer-events: none;
        }

        .nd-hero-glow-1 {
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(circle, rgba(46,41,255,0.08) 0%, rgba(124,58,237,0.05) 40%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .nd-hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 100px;
          background: #FFFFFF;
          border: 1px solid rgba(46, 41, 255, 0.2);
          font-size: 13px;
          font-weight: 700;
          color: #2E29FF;
          letter-spacing: 0.5px;
          margin-bottom: 28px;
          box-shadow: 0 4px 16px rgba(46,41,255,0.08);
        }

        .nd-hero-headline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(42px, 5.8vw, 72px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -2px;
          margin-bottom: 24px;
          color: #0F172A;
        }

        .nd-gradient-text {
          background: linear-gradient(135deg, #2E29FF 0%, #7C3AED 50%, #00B882 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nd-hero-desc {
          font-size: clamp(17px, 2.2vw, 19.5px);
          line-height: 1.75;
          color: #475569;
          max-width: 780px;
          margin: 0 auto 52px auto;
          font-weight: 400;
        }

        /* ── HERO STATS GRID (LIGHT) ── */
        .nd-hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .nd-stat-glass-card {
          padding: 28px 22px;
          border-radius: 20px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .nd-stat-glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(46, 41, 255, 0.3);
          box-shadow: 0 20px 40px rgba(46, 41, 255, 0.08);
        }

        .nd-stat-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 40px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 10px;
        }

        .nd-stat-lbl {
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 4px;
        }

        .nd-stat-sub {
          font-size: 12px;
          color: #64748B;
        }

        /* ── PARADIGM COMPARISON SECTION (LIGHT) ── */
        .nd-paradigm-section {
          padding: 110px 24px;
          background: #F8FAFC;
          position: relative;
          color: #0F172A;
        }

        .nd-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .nd-section-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 800;
          letter-spacing: -1.2px;
          line-height: 1.12;
          margin-bottom: 18px;
          color: #0F172A;
        }

        .nd-section-lead {
          font-size: 17.5px;
          color: #64748B;
          max-width: 640px;
          line-height: 1.7;
        }

        .nd-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 60px;
        }

        .nd-comp-card {
          padding: 34px 30px;
          border-radius: 24px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: all 0.35s ease;
        }

        .nd-comp-card:hover {
          border-color: rgba(46, 41, 255, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(46, 41, 255, 0.06);
        }

        .nd-comp-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid #F1F5F9;
        }

        .nd-comp-title {
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
        }

        .nd-comp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .nd-comp-box {
          padding: 16px;
          border-radius: 14px;
          font-size: 13.5px;
          line-height: 1.6;
        }

        .nd-comp-box.trad {
          background: #FEF2F2;
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #991B1B;
        }

        .nd-comp-box.nova {
          background: #ECFDF5;
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #065F46;
        }

        .nd-comp-box-title {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── TECHNICAL LEADERSHIP SECTION (LIGHT MODE - NO PORTRAIT IMAGES) ── */
        .nd-exec-section {
          padding: 120px 24px;
          background: #FFFFFF;
          color: #0F172A;
          position: relative;
        }

        .nd-leadership-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 60px;
        }

        .nd-leader-tech-card {
          padding: 44px 38px;
          border-radius: 32px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .nd-leader-tech-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--leader-accent, #2E29FF);
        }

        .nd-leader-tech-card:hover {
          transform: translateY(-8px);
          border-color: var(--leader-accent, #2E29FF);
          box-shadow: 0 28px 60px rgba(15, 23, 42, 0.08);
        }

        .nd-terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          border-radius: 14px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          font-family: 'Space Grotesk', monospace;
          font-size: 12px;
          color: #334155;
          margin-bottom: 28px;
        }

        .nd-terminal-dots {
          display: flex;
          gap: 6px;
        }

        .nd-terminal-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .nd-leader-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .nd-leader-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -1.2px;
          line-height: 1.1;
          margin-bottom: 18px;
        }

        .nd-leader-bio {
          font-size: 16px;
          line-height: 1.75;
          color: #475569;
          margin-bottom: 24px;
        }

        .nd-leader-quote {
          padding: 20px 24px;
          border-left: 3.5px solid var(--leader-accent, #2E29FF);
          background: #F8FAFC;
          border-radius: 0 16px 16px 0;
          font-size: 14.5px;
          font-style: italic;
          color: #1E293B;
          margin-bottom: 28px;
          line-height: 1.65;
        }

        .nd-leader-signature {
          font-family: 'Georgia', serif;
          font-size: 28px;
          font-style: italic;
          color: #0F172A;
          margin-bottom: 28px;
          opacity: 0.9;
        }

        .nd-leader-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .nd-leader-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 10px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          font-size: 12.5px;
          font-weight: 600;
          color: #334155;
        }

        /* ── TECH ECOSYSTEM MATRIX (LIGHT) ── */
        .nd-tech-section {
          padding: 110px 24px;
          background: #F8FAFC;
          color: #0F172A;
          position: relative;
        }

        .nd-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 60px;
        }

        .nd-tech-card {
          padding: 28px 22px;
          border-radius: 20px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.35s ease;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nd-tech-card:hover {
          transform: translateY(-5px);
          border-color: rgba(46, 41, 255, 0.3);
          box-shadow: 0 16px 36px rgba(46, 41, 255, 0.08);
        }

        .nd-tech-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .nd-tech-icon-wrap img {
          width: 26px;
          height: 26px;
          object-fit: contain;
        }

        .nd-tech-name {
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 2px;
        }

        .nd-tech-desc {
          font-size: 12.5px;
          color: #64748B;
        }

        /* ── CORE VALUES SECTION (LIGHT) ── */
        .nd-values-section {
          padding: 120px 24px;
          background: #FFFFFF;
          color: #0F172A;
          position: relative;
        }

        .nd-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 60px;
        }

        .nd-value-card {
          padding: 36px 30px;
          border-radius: 28px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .nd-value-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-accent, #2E29FF);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nd-value-card:hover {
          transform: translateY(-8px);
          border-color: var(--card-accent, #2E29FF);
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.06);
        }

        .nd-value-card:hover::after {
          opacity: 1;
        }

        .nd-value-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .nd-value-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .nd-value-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 12px;
        }

        .nd-value-desc {
          font-size: 14.5px;
          color: #64748B;
          line-height: 1.7;
        }

        /* ── PROCESS TIMELINE SECTION (LIGHT) ── */
        .nd-process-section {
          padding: 120px 24px;
          background: #F8FAFC;
          color: #0F172A;
        }

        .nd-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 60px;
          position: relative;
        }

        .nd-process-card {
          padding: 32px 24px;
          border-radius: 24px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 6px 20px rgba(0,0,0,0.02);
          transition: all 0.35s ease;
          position: relative;
        }

        .nd-process-card:hover {
          transform: translateY(-6px);
          border-color: var(--step-accent, #2E29FF);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
        }

        .nd-process-step-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 44px;
          font-weight: 800;
          line-height: 1;
          color: #CBD5E1;
          margin-bottom: 16px;
        }

        .nd-process-title {
          font-size: 19px;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 10px;
        }

        .nd-process-desc {
          font-size: 14px;
          color: #64748B;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .nd-process-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nd-process-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 6px;
        }

        /* ── DOMAIN CAPABILITIES MATRIX (LIGHT) ── */
        .nd-cap-section {
          padding: 120px 24px;
          background: #FFFFFF;
          color: #0F172A;
        }

        .nd-filter-bar {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 36px;
          margin-bottom: 52px;
        }

        .nd-filter-btn {
          padding: 10px 22px;
          border-radius: 100px;
          font-size: 13.5px;
          font-weight: 700;
          border: 1.5px solid #E2E8F0;
          background: #FFFFFF;
          color: #64748B;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .nd-filter-btn:hover, .nd-filter-btn.active {
          background: #2E29FF;
          color: #FFFFFF;
          border-color: #2E29FF;
          box-shadow: 0 8px 20px rgba(46, 41, 255, 0.25);
        }

        .nd-cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .nd-cap-card {
          padding: 32px 28px;
          border-radius: 28px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 6px 20px rgba(0,0,0,0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .nd-cap-card:hover {
          transform: translateY(-8px);
          border-color: var(--cap-color, #2E29FF);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.07);
        }

        .nd-cap-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }

        .nd-cap-title {
          font-size: 20px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 10px;
        }

        .nd-cap-desc {
          font-size: 14.5px;
          color: #64748B;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .nd-cap-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .nd-cap-tag {
          font-size: 11.5px;
          font-weight: 700;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          color: #475569;
          padding: 5px 11px;
          border-radius: 8px;
        }

        /* ── FAQ SECTION (LIGHT) ── */
        .nd-faq-section {
          padding: 120px 24px;
          background: #F8FAFC;
          color: #0F172A;
        }

        .nd-faq-search-box {
          max-width: 580px;
          margin: 32px auto 48px auto;
          position: relative;
        }

        .nd-faq-input {
          width: 100%;
          padding: 16px 20px 16px 52px;
          border-radius: 16px;
          border: 1.5px solid #E2E8F0;
          background: #FFFFFF;
          font-size: 15px;
          color: #0F172A;
          outline: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .nd-faq-input:focus {
          border-color: #2E29FF;
          box-shadow: 0 8px 24px rgba(46, 41, 255, 0.1);
        }

        .nd-faq-item {
          border-radius: 20px;
          border: 1.5px solid #E2E8F0;
          background: #FFFFFF;
          margin-bottom: 14px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .nd-faq-item.open {
          border-color: rgba(46, 41, 255, 0.4);
          box-shadow: 0 12px 32px rgba(46, 41, 255, 0.08);
          background: #FFFFFF;
        }

        .nd-faq-btn {
          width: 100%;
          padding: 24px 28px;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
        }

        .nd-faq-question {
          font-size: 17px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.45;
        }

        .nd-faq-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          flex-shrink: 0;
          background: #F1F5F9;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-size: 18px;
          font-weight: 700;
        }

        .nd-faq-item.open .nd-faq-icon-wrap {
          background: #2E29FF;
          color: #FFFFFF;
        }

        .nd-faq-ans-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nd-faq-item.open .nd-faq-ans-wrap {
          max-height: 320px;
        }

        .nd-faq-answer {
          padding: 0 28px 24px 28px;
          font-size: 15.5px;
          color: #475569;
          line-height: 1.8;
        }

        /* ── PRO CTA SECTION (VIBRANT ROYAL BLUE LIGHT ACCENT) ── */
        .nd-cta-pro {
          padding: 120px 24px;
          background: linear-gradient(135deg, #2E29FF 0%, #1E1AD6 50%, #0D0B2E 100%);
          position: relative;
          overflow: hidden;
          color: #FFFFFF;
          text-align: center;
        }

        .nd-cta-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .nd-cta-content {
          max-width: 780px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .nd-cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #FFFFFF;
        }

        .nd-cta-desc {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.75;
          margin-bottom: 44px;
        }

        .nd-cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .nd-btn-primary-glow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: #FFFFFF;
          color: #2E29FF !important;
          font-weight: 800;
          font-size: 15.5px;
          border-radius: 14px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .nd-btn-primary-glow:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        }

        .nd-btn-glass {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          color: #FFFFFF !important;
          font-weight: 700;
          font-size: 15.5px;
          border-radius: 14px;
          text-decoration: none;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nd-btn-glass:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-3px);
        }

        /* ── RESPONSIVE DESIGN ── */
        @media (max-width: 1024px) {
          .nd-hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .nd-leadership-grid { grid-template-columns: 1fr; gap: 32px; }
          .nd-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .nd-values-grid { grid-template-columns: repeat(2, 1fr); }
          .nd-process-grid { grid-template-columns: repeat(2, 1fr); }
          .nd-cap-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .nd-hero-pro { padding: 90px 16px 60px 16px; }
          .nd-hero-stats-grid { grid-template-columns: 1fr; }
          .nd-comparison-grid { grid-template-columns: 1fr; }
          .nd-comp-row { grid-template-columns: 1fr; }
          .nd-tech-grid { grid-template-columns: 1fr; }
          .nd-values-grid { grid-template-columns: 1fr; }
          .nd-process-grid { grid-template-columns: 1fr; }
          .nd-cap-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="nd-about-root">

        {/* ─── PRO HERO SECTION (LIGHT) ─────────────────────────────────────────── */}
        <section className="nd-hero-pro">
          <div className="nd-hero-bg-grid" />
          <div className="nd-hero-glow-1" />

          <div className="nd-container" style={{ textAlign: 'center' }}>
            <Reveal direction="up" delay={0}>
              <div className="nd-hero-pill">
                <Sparkles size={15} style={{ color: '#2E29FF' }} />
                <span>ABOUT NOVADESK STUDIO</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={80}>
              <h1 className="nd-hero-headline">
                We Architect Systems.<br />
                <span className="nd-gradient-text">Engineered for Legacy &amp; Scale.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={140}>
              <p className="nd-hero-desc">
                NovaDesk is a modern software engineering studio built on direct technical access, weekly shippable iterations, and zero agency fluff. We help visionary founders turn ideas into resilient software.
              </p>
            </Reveal>

            {/* Stats Glass Row */}
            <Reveal direction="up" delay={200}>
              <div className="nd-hero-stats-grid">
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="nd-stat-glass-card">
                    <div className="nd-stat-val" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="nd-stat-lbl">{stat.label}</div>
                    <div className="nd-stat-sub">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── THE NOVADESK PARADIGM (WHY WE ARE DIFFERENT) ───────────────────── */}
        <section className="nd-paradigm-section">
          <div className="nd-container">
            <Reveal direction="up">
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
                <span className="nd-section-tag" style={{ background: 'rgba(46, 41, 255, 0.08)', color: '#2E29FF' }}>
                  THE ANTI-AGENCY PARADIGM
                </span>
                <h2 className="nd-section-h2">Why Forward-Thinking Founders Choose Us</h2>
                <p className="nd-section-lead" style={{ margin: '0 auto' }}>
                  Traditional software agencies are broken. We redesigned the agency model around speed, direct technical access, and senior engineering execution.
                </p>
              </div>
            </Reveal>

            <div className="nd-comparison-grid">
              {paradigmComparison.map((item, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 80}>
                  <div className="nd-comp-card">
                    <div className="nd-comp-header">
                      <div style={{ 
                        width: 44, height: 44, borderRadius: 12, 
                        background: 'rgba(46, 41, 255, 0.08)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center' 
                      }}>
                        <Icon name={item.icon} type="lineal" color={item.color} size={24} />
                      </div>
                      <div className="nd-comp-title">{item.title}</div>
                    </div>

                    <div className="nd-comp-row">
                      <div className="nd-comp-box trad">
                        <div className="nd-comp-box-title">
                          <AlertCircle size={13} /> Traditional Agency
                        </div>
                        {item.traditional}
                      </div>

                      <div className="nd-comp-box nova">
                        <div className="nd-comp-box-title">
                          <CheckCircle2 size={13} /> NovaDesk Approach
                        </div>
                        {item.novadesk}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TECHNICAL LEADERSHIP SECTION (LIGHT MODE - NO PORTRAIT IMAGES) ─── */}
        <section className="nd-exec-section">
          <div className="nd-container">
            <Reveal direction="up">
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
                <span className="nd-section-tag" style={{ background: 'rgba(46, 41, 255, 0.08)', color: '#2E29FF' }}>
                  EXECUTIVE STEWARDSHIP
                </span>
                <h2 className="nd-section-h2">Guided by Engineering Precision</h2>
                <p className="nd-section-lead" style={{ margin: '0 auto' }}>
                  NovaDesk is directed by hands-on founders who actively code, architect systems, and lead client operations.
                </p>
              </div>
            </Reveal>

            <div className="nd-leadership-grid">
              {/* HARSH PRATEEK CARD */}
              <Reveal direction="up" delay={0}>
                <div className="nd-leader-tech-card" style={{ '--leader-accent': '#2E29FF' }}>
                  <div className="nd-terminal-header">
                    <div className="nd-terminal-dots">
                      <span className="nd-terminal-dot" style={{ background: '#FF5F56' }} />
                      <span className="nd-terminal-dot" style={{ background: '#FFBD2E' }} />
                      <span className="nd-terminal-dot" style={{ background: '#27C93F' }} />
                    </div>
                    <div>~ /novadesk/leadership/harsh-prateek</div>
                    <Terminal size={14} />
                  </div>

                  <div className="nd-leader-badge" style={{ background: 'rgba(46, 41, 255, 0.08)', color: '#2E29FF' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E29FF' }} />
                    Director &amp; Technical Founder
                  </div>

                  <h3 className="nd-leader-name">Harsh Prateek</h3>
                  <p className="nd-leader-bio">
                    NovaDesk was established to eliminate the bloat and indirect communication of traditional agencies. Harsh directs technical strategy, full-stack architecture, and AI integrations — giving clients direct developer access and clean production execution.
                  </p>
                  
                  <div className="nd-leader-quote">
                    "Software should be built by people who deeply understand both lines of code and business outcome. No fluff, no excuses."
                  </div>

                  <div className="nd-leader-signature">Harsh Prateek</div>

                  <div className="nd-leader-tags">
                    {['Full-Stack Architecture', 'GenAI Systems', 'Next.js & FastAPI', 'Direct Access'].map((t, i) => (
                      <span key={i} className="nd-leader-tag">
                        <CheckCircle2 size={13} style={{ color: '#2E29FF' }} /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* PIUSHA PATRA CARD */}
              <Reveal direction="up" delay={100}>
                <div className="nd-leader-tech-card" style={{ '--leader-accent': '#00B882' }}>
                  <div className="nd-terminal-header">
                    <div className="nd-terminal-dots">
                      <span className="nd-terminal-dot" style={{ background: '#FF5F56' }} />
                      <span className="nd-terminal-dot" style={{ background: '#FFBD2E' }} />
                      <span className="nd-terminal-dot" style={{ background: '#27C93F' }} />
                    </div>
                    <div>~ /novadesk/leadership/piusha-patra</div>
                    <Command size={14} />
                  </div>

                  <div className="nd-leader-badge" style={{ background: 'rgba(0, 184, 130, 0.1)', color: '#00B882' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00B882' }} />
                    Co-Founder &amp; Director of Operations
                  </div>

                  <h3 className="nd-leader-name">Piusha Patra</h3>
                  <p className="nd-leader-bio">
                    Piusha leads strategic direction, operational alignment, and client growth partnerships. Her focus ensures that every engineering project at NovaDesk operates with complete transparency, strict quality standards, and long-term client trust.
                  </p>

                  <div className="nd-leader-quote" style={{ borderLeftColor: '#00B882' }}>
                    "Every lasting business is built on trust, transparency, and uncompromised quality. We build software partnerships that last for years."
                  </div>

                  <div className="nd-leader-signature" style={{ color: '#00B882' }}>Piusha Patra</div>

                  <div className="nd-leader-tags">
                    {['Client Partnerships', 'Operational Strategy', 'Project Governance', 'Quality Assurance'].map((t, i) => (
                      <span key={i} className="nd-leader-tag">
                        <CheckCircle2 size={13} style={{ color: '#00B882' }} /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── TECH ECOSYSTEM MATRIX (LIGHT) ────────────────────────────────── */}
        <section className="nd-tech-section">
          <div className="nd-container">
            <Reveal direction="up">
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
                <span className="nd-section-tag" style={{ background: 'rgba(46, 41, 255, 0.08)', color: '#2E29FF' }}>
                  OUR TECH STACK
                </span>
                <h2 className="nd-section-h2">Battle-Tested Modern Technologies</h2>
                <p className="nd-section-lead" style={{ margin: '0 auto' }}>
                  We engineer products using modern frameworks chosen for speed, scalability, and long-term maintainability.
                </p>
              </div>
            </Reveal>

            <div className="nd-tech-grid">
              {techStack.map((tech, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 50}>
                  <div className="nd-tech-card">
                    <div className="nd-tech-icon-wrap">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    <div>
                      <div className="nd-tech-name">{tech.name}</div>
                      <div className="nd-tech-desc">{tech.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CORE ENGINEERING VALUES (LIGHT) ───────────────────────────────── */}
        <section className="nd-values-section">
          <div className="nd-container">
            <Reveal direction="up">
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
                <span className="nd-section-tag" style={{ background: 'rgba(46, 41, 255, 0.08)', color: '#2E29FF' }}>
                  OUR PHILOSOPHY
                </span>
                <h2 className="nd-section-h2">The Principles That Govern Every Commit</h2>
                <p className="nd-section-lead" style={{ margin: '0 auto' }}>
                  Six core engineering pillars embedded into every line of code we write.
                </p>
              </div>
            </Reveal>

            <div className="nd-values-grid">
              {coreValues.map((val, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 70}>
                  <div className="nd-value-card" style={{ '--card-accent': val.color }}>
                    <div className="nd-value-icon-box" style={{ background: val.bg }}>
                      <Icon name={val.iconName} type={val.type} color={val.color} size={30} />
                    </div>
                    <div className="nd-value-badge" style={{ background: val.bg, color: val.color }}>
                      {val.badge}
                    </div>
                    <h3 className="nd-value-title">{val.title}</h3>
                    <p className="nd-value-desc">{val.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DEVELOPMENT METHODOLOGY (LIGHT) ───────────────────────────────── */}
        <section className="nd-process-section">
          <div className="nd-container">
            <Reveal direction="up">
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
                <span className="nd-section-tag" style={{ background: 'rgba(46, 41, 255, 0.08)', color: '#2E29FF' }}>
                  HOW WE WORK
                </span>
                <h2 className="nd-section-h2">Our 4-Phase Delivery Framework</h2>
                <p className="nd-section-lead" style={{ color: '#64748B', margin: '0 auto' }}>
                  From raw concept to battle-tested production software in structured agile sprints.
                </p>
              </div>
            </Reveal>

            <div className="nd-process-grid">
              {processSteps.map((step, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 80}>
                  <div className="nd-process-card" style={{ '--step-accent': step.color }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                      <div className="nd-process-step-num">{step.step}</div>
                      <div style={{ 
                        width: 42, height: 42, borderRadius: 12, 
                        background: `${step.color}12`, 
                        display: 'flex', alignItems: 'center', justifyContent: 'center' 
                      }}>
                        <Icon name={step.icon} type="lineal" color={step.color} size={22} />
                      </div>
                    </div>
                    <h3 className="nd-process-title">{step.title}</h3>
                    <p className="nd-process-desc">{step.desc}</p>
                    <ul className="nd-process-list">
                      {step.details.map((item, i) => (
                        <li key={i} className="nd-process-item">
                          <CheckCircle2 size={13} style={{ color: step.color }} /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DOMAIN CAPABILITIES MATRIX (LIGHT) ─────────────────────────────── */}
        <section className="nd-cap-section">
          <div className="nd-container">
            <Reveal direction="up">
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
                <span className="nd-section-tag" style={{ background: 'rgba(46, 41, 255, 0.08)', color: '#2E29FF' }}>
                  DOMAIN SPECIALTIES
                </span>
                <h2 className="nd-section-h2">Engineering Capabilities Across Domains</h2>
                <p className="nd-section-lead" style={{ color: '#64748B', margin: '0 auto' }}>
                  Senior technical specialists focused on full-stack architecture, GenAI integration, mobile apps, and DevOps infrastructure.
                </p>

                {/* Filter Buttons */}
                <div className="nd-filter-bar">
                  {['All', 'Full-Stack', 'AI & Data', 'Design', 'DevOps'].map((cat) => (
                    <button
                      key={cat}
                      className={`nd-filter-btn ${capabilityTab === cat ? 'active' : ''}`}
                      onClick={() => setCapabilityTab(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="nd-cap-grid">
              {filteredCapabilities.map((cap, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 60}>
                  <div className="nd-cap-card" style={{ '--cap-color': cap.color }}>
                    <div className="nd-cap-icon-box" style={{ background: cap.bg, color: cap.color }}>
                      {cap.icon}
                    </div>
                    <h3 className="nd-cap-title">{cap.title}</h3>
                    <p className="nd-cap-desc">{cap.desc}</p>
                    <div className="nd-cap-tags">
                      {cap.techs.map((tech, tIdx) => (
                        <span key={tIdx} className="nd-cap-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FREQUENTLY ASKED QUESTIONS (LIGHT) ──────────────────────────────── */}
        <section className="nd-faq-section">
          <div className="nd-container" style={{ maxWidth: '860px' }}>
            <Reveal direction="up">
              <div style={{ textAlign: 'center' }}>
                <span className="nd-section-tag" style={{ background: 'rgba(46, 41, 255, 0.08)', color: '#2E29FF' }}>
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="nd-section-h2">Everything You Need to Know</h2>
                <p className="nd-section-lead" style={{ color: '#64748B', margin: '0 auto' }}>
                  Transparent answers about how we collaborate, contract, and deliver shippable code.
                </p>
              </div>

              {/* Search Bar */}
              <div className="nd-faq-search-box">
                <Search size={18} style={{ position: 'absolute', left: 20, top: 18, color: '#94A3B8' }} />
                <input
                  type="text"
                  placeholder="Search questions about process, stack, or pricing..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="nd-faq-input"
                />
              </div>
            </Reveal>

            {filteredFaqs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748B' }}>
                No matching questions found. Try searching another term or contact our leadership directly.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 50}>
                  <div className={`nd-faq-item ${activeFaq === idx ? 'open' : ''}`}>
                    <button
                      className="nd-faq-btn"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    >
                      <span className="nd-faq-question">{faq.q}</span>
                      <span className="nd-faq-icon-wrap">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    <div className="nd-faq-ans-wrap">
                      <p className="nd-faq-answer">{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              ))
            )}
          </div>
        </section>

        {/* ─── PRO CTA SECTION ─────────────────────────────────────────────────── */}
        <section className="nd-cta-pro">
          <div className="nd-cta-glow" />

          <div className="nd-cta-content">
            <Reveal direction="up">
              <span className="nd-hero-pill" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF', marginBottom: 20 }}>
                <Sparkles size={14} style={{ color: '#FFFFFF' }} />
                <span>START YOUR PROJECT</span>
              </span>
              <h2 className="nd-cta-title">
                Ready to Build Your Product<br />
                With Senior Engineers?
              </h2>
            </Reveal>

            <Reveal direction="up" delay={80}>
              <p className="nd-cta-desc">
                Partner directly with Founder Harsh Prateek &amp; Director Piusha Patra. Get transparent timelines, clean architecture, and weekly shippable code.
              </p>
            </Reveal>

            <Reveal direction="up" delay={140}>
              <div className="nd-cta-btns">
                <Link to="/contact-us" className="nd-btn-primary-glow">
                  Schedule Founder Call <ArrowRight size={18} />
                </Link>
                <Link to="/get-a-free-quote" className="nd-btn-glass">
                  Get a Free Instant Quote <ExternalLink size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
}
