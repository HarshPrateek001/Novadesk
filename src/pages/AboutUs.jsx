import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Clock, Code, Cpu, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

// ─── DATA ────────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: "Rohan Verma",
    role: "Lead Full-Stack Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "System Architecture"],
    bio: "Specializing in high-throughput distributed systems and enterprise React web platforms.",
    color: "#2E29FF"
  },
  {
    name: "Ananya Sharma",
    role: "AI & ML Systems Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    tags: ["Python", "GenAI", "LangChain", "FastAPI"],
    bio: "Architecting LLM integrations, RAG pipelines, and intelligent automation models.",
    color: "#7C3AED"
  },
  {
    name: "Vikramaditya Singh",
    role: "Lead UI/UX & Product Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    tags: ["Design Systems", "Figma", "Micro-Interactions", "UX"],
    bio: "Crafting sleek, high-converting product interfaces that delight users at first touch.",
    color: "#0EA5E9"
  },
  {
    name: "Kavya Nair",
    role: "Cloud & DevOps Infrastructure Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    bio: "Ensuring 99.99% uptime, automated zero-downtime deployments, and cloud security.",
    color: "#00B882"
  },
  {
    name: "Amitabh Roy",
    role: "Mobile App Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    tags: ["React Native", "iOS", "Android", "Flutter"],
    bio: "Building butter-smooth cross-platform mobile apps for fast-growing startup launches.",
    color: "#F59E0B"
  },
  {
    name: "Pooja Gupta",
    role: "QA & Quality Engineering Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    tags: ["Automation", "Cypress", "Jest", "Security Audit"],
    bio: "Driving automated testing suites to guarantee robust, bug-free production releases.",
    color: "#EC4899"
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
    q: "What post-launch support and ongoing maintenance do you offer?",
    a: "Every project includes a dedicated post-launch support window. We also offer continuous maintenance, cloud infrastructure scaling, and retainer models for continuous feature development."
  }
];

const coreValues = [
  { icon: <MessageSquare size={22} />, title: "Direct Access", desc: "Speak directly with the engineers building your product. No middleman, no miscommunication.", color: "#2E29FF", bg: "rgba(46,41,255,0.08)" },
  { icon: <Clock size={22} />, title: "Honest Scoping", desc: "Realistic timelines and clear deliverables. We value honest transparency over inflated promises.", color: "#00B882", bg: "rgba(0,184,130,0.08)" },
  { icon: <Code size={22} />, title: "Clean Production Code", desc: "Modern Next.js, FastAPI, and Supabase architecture built for long-term scalability and security.", color: "#CA8A04", bg: "rgba(234,179,8,0.08)" },
  { icon: <Cpu size={22} />, title: "AI-First Innovation", desc: "Integrating state-of-the-art GenAI models, LLM agents, and automated workflows into software.", color: "#9333EA", bg: "rgba(168,85,247,0.08)" }
];

// ─── SCROLL ANIMATION HOOK ────────────────────────────────────────────────────

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
      { threshold: options.threshold || 0.12, rootMargin: options.rootMargin || '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// ─── REVEAL WRAPPER ───────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useScrollReveal();

  const translateMap = {
    up: 'translateY(32px)',
    down: 'translateY(-32px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    fade: 'scale(0.97)'
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : translateMap[direction] || 'translateY(32px)',
        transition: `opacity 0.95s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.95s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div style={{
      borderRadius: '16px',
      border: open ? '1.5px solid rgba(46,41,255,0.3)' : '1.5px solid #E2E8F0',
      background: open ? 'rgba(46,41,255,0.02)' : '#FFFFFF',
      marginBottom: '12px',
      overflow: 'hidden',
      transition: 'border-color 0.3s, background 0.3s',
      boxShadow: open ? '0 8px 24px rgba(46,41,255,0.08)' : '0 2px 8px rgba(0,0,0,0.03)'
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', padding: '22px 28px', background: 'transparent',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '16px', textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A', lineHeight: '1.4' }}>{q}</span>
        <span style={{
          width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
          background: open ? '#2E29FF' : '#F1F5F9',
          color: open ? '#FFFFFF' : '#64748B',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s', fontSize: '18px', fontWeight: '700'
        }}>
          {open ? '−' : '+'}
        </span>
      </button>
      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)'
      }}>
        <p style={{ padding: '0 28px 22px 28px', fontSize: '15px', color: '#475569', lineHeight: '1.75', margin: 0 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function AboutUs() {
  const [activeFaq, setActiveFaq] = useState(null);

  // JSON-LD Schemas
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
    "image": "https://www.novadesk.site/hero-my-image.webp"
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
    "url": "https://www.novadesk.site/about-us",
    "image": "https://www.novadesk.site/Co-Founder.png"
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
        image="https://www.novadesk.site/hero-my-image.webp"
        author="Harsh Prateek & Piusha Patra"
        schema={[personSchemaHarsh, personSchemaPiusha, organizationSchema, aboutPageSchema]}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        /* ── GLOBAL ── */
        .nd-about-page { font-family: 'Inter', sans-serif; overflow-x: hidden; }

        /* ── HERO ── */
        .nd-hero {
          background: #0A0A2E;
          padding: 72px 24px 64px 24px;
          text-align: center;
        }
        .nd-hero-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          padding: 0 24px;
          margin: 0 auto;
        }
        .nd-hero-eyebrow { display: none; }
        .nd-hero-title {
          font-size: clamp(44px, 6vw, 78px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -2px;
          color: #FFFFFF;
          margin-bottom: 24px;
        }
        .nd-hero-title-grad {
          background: linear-gradient(135deg, #818CF8 0%, #A78BFA 40%, #67E8F9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nd-hero-sub {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255,255,255,0.6);
          max-width: 680px;
          margin: 0 auto 52px auto;
        }
        .nd-hero-stats {
          display: flex;
          gap: 0;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          background: rgba(255,255,255,0.03);
          max-width: 700px;
          margin: 0 auto;
        }
        .nd-hero-stat {
          flex: 1;
          padding: 28px 20px;
          border-right: 1px solid rgba(255,255,255,0.08);
          text-align: center;
        }
        .nd-hero-stat:last-child { border-right: none; }
        .nd-hero-stat-num {
          font-size: 34px;
          font-weight: 900;
          background: linear-gradient(135deg, #818CF8, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 6px;
        }
        .nd-hero-stat-lbl {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ── SECTION SHELL ── */
        .nd-section {
          padding: 100px 0;
        }
        .nd-section-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .nd-section-inner-wide {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .nd-section-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .nd-section-h2 {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -1.2px;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .nd-section-sub {
          font-size: 17px;
          color: #64748B;
          line-height: 1.7;
          max-width: 580px;
        }

        /* ── LEADERSHIP SECTION ── */
        .nd-leadership-section {
          background: #F8FAFC;
        }

        /* ── EXEC CARD ── */
        .nd-exec-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }
        .nd-exec-wrap:last-child { margin-bottom: 0; }
        .nd-exec-wrap.reverse { direction: rtl; }
        .nd-exec-wrap.reverse > * { direction: ltr; }

        .nd-exec-img-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.15);
        }
        .nd-exec-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .nd-exec-img-wrap:hover .nd-exec-img {
          transform: scale(1.03);
        }
        .nd-exec-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,8,20,0.75) 0%, rgba(8,8,20,0.1) 50%, transparent 100%);
        }
        .nd-exec-img-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          padding: 18px 22px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
        }
        .nd-exec-img-name {
          font-size: 20px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 4px;
        }
        .nd-exec-img-title {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
        }

        .nd-exec-content { padding: 10px 0; }
        .nd-exec-role-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .nd-exec-name {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .nd-exec-text {
          font-size: 16px;
          line-height: 1.85;
          color: #475569;
          margin-bottom: 16px;
        }
        .nd-exec-text:last-of-type { margin-bottom: 28px; }
        .nd-exec-sig {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 32px;
          font-style: italic;
          color: #0F172A;
          opacity: 0.85;
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }
        .nd-exec-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .nd-exec-highlight-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        /* ── TEAM SECTION ── */
        .nd-team-section { background: #FFFFFF; }
        .nd-team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 60px;
        }
        .nd-team-card {
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s, border-color 0.35s;
          position: relative;
        }
        .nd-team-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-accent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nd-team-card:hover { transform: translateY(-8px); box-shadow: 0 28px 60px rgba(0,0,0,0.1); border-color: transparent; }
        .nd-team-card:hover::before { opacity: 1; }
        .nd-team-card-img-wrap {
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        .nd-team-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .nd-team-card:hover .nd-team-card-img { transform: scale(1.06); }
        .nd-team-card-body { padding: 24px; }
        .nd-team-name { font-size: 18px; font-weight: 800; color: #0F172A; margin-bottom: 4px; }
        .nd-team-role { font-size: 13px; font-weight: 700; margin-bottom: 12px; }
        .nd-team-bio { font-size: 13.5px; color: #64748B; line-height: 1.65; margin-bottom: 18px; }
        .nd-team-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .nd-team-tag { font-size: 11px; font-weight: 700; background: #F8FAFC; border: 1px solid #E2E8F0; color: #475569; padding: 4px 10px; border-radius: 8px; }

        /* ── VALUES SECTION ── */
        .nd-values-section { background: #05050A; }
        .nd-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 60px;
        }
        .nd-value-card {
          padding: 32px 26px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          transition: transform 0.35s, border-color 0.35s, background 0.35s;
        }
        .nd-value-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
        }
        .nd-value-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 22px;
        }
        .nd-value-title { font-size: 17px; font-weight: 800; color: #F8FAFC; margin-bottom: 10px; }
        .nd-value-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.65; }

        /* ── FAQ ── */
        .nd-faq-section { background: #F8FAFC; }

        /* ── CTA ── */
        .nd-cta-section {
          background: linear-gradient(135deg, #0D0B2E 0%, #1a1060 50%, #0D0B2E 100%);
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
          text-align: center;
        }
        .nd-cta-section::before {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(46,41,255,0.3) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .nd-cta-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
        .nd-cta-title { font-size: clamp(32px, 4vw, 52px); font-weight: 900; color: #FFFFFF; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 18px; }
        .nd-cta-sub { font-size: 17px; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 40px; }
        .nd-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .nd-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 16px 32px; background: #FFFFFF; color: #1E1AD6;
          font-weight: 800; font-size: 15px; border-radius: 12px;
          text-decoration: none; border: none; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        .nd-btn-white:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(0,0,0,0.2); }
        .nd-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 16px 32px; background: transparent; color: rgba(255,255,255,0.85);
          font-weight: 700; font-size: 15px; border-radius: 12px;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,0.25); cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .nd-btn-outline:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.06); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .nd-exec-wrap, .nd-exec-wrap.reverse { grid-template-columns: 1fr; direction: ltr; gap: 40px; }
          .nd-values-grid { grid-template-columns: repeat(2, 1fr); }
          .nd-team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .nd-hero-stats { flex-direction: column; }
          .nd-hero-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .nd-hero-stat:last-child { border-bottom: none; }
          .nd-values-grid { grid-template-columns: 1fr; }
          .nd-team-grid { grid-template-columns: 1fr; }
          .nd-exec-img { height: 360px; }
        }
      `}</style>

      <div className="nd-about-page">

        {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
        <section className="nd-hero">
          <div className="nd-hero-inner">
            <Reveal direction="up" delay={0}>
              <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(129,140,248,0.8)', marginBottom: '18px' }}>
                About Us
              </p>
            </Reveal>

            <Reveal direction="up" delay={60}>
              <h1 className="nd-hero-title">
                We Build Trsut That
                <span className="nd-hero-title-grad">Actually Ships.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={120}>
              <p className="nd-hero-sub">
                A focused engineering studio led by founders who code — delivering fast, reliable digital products for startups and businesses worldwide.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── EXECUTIVE LEADERSHIP ────────────────────────────────────────── */}
        <section className={`nd-section nd-leadership-section`}>
          <div className="nd-section-inner-wide">
            <Reveal direction="up">
              <div style={{ marginBottom: '72px' }}>
                <span className="nd-section-eyebrow" style={{ color: '#2E29FF' }}>Executive Leadership</span>
                <h2 className="nd-section-h2">Guided by Vision &amp; Technical Depth</h2>
                <p className="nd-section-sub">
                  Meet the founders who shape every decision, every product, and every partnership at NovaDesk.
                </p>
              </div>
            </Reveal>

            {/* ── HARSH PRATEEK ─── */}
            <div className="nd-exec-wrap">
              <Reveal direction="left" delay={0}>
                <div className="nd-exec-content">
                  <div className="nd-exec-role-pill" style={{ background: 'rgba(46,41,255,0.08)', color: '#2E29FF' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E29FF', display: 'inline-block' }} />
                    Director &amp; Founder
                  </div>
                  <h3 className="nd-exec-name">Harsh Prateek</h3>
                  <p className="nd-exec-text">
                    <strong style={{ color: '#0F172A' }}>NovaDesk started with a straightforward frustration:</strong> watching good ideas get slowed down by process, not talent.
                  </p>
                  <p className="nd-exec-text">
                    Most software agencies add bloated management layers between the client and the engineer actually writing the code. NovaDesk is built differently — providing direct access to senior developers who bring both technical execution and business product thinking.
                  </p>
                  <p className="nd-exec-text">
                    Every system engineered under Harsh Prateek's leadership is built on a modern, high-performance stack (Next.js, FastAPI, Supabase, React, Node.js) for speed, security, and long-term maintainability.
                  </p>
                  <div className="nd-exec-sig">Harsh Prateek</div>
                  <div className="nd-exec-highlights">
                    {['Full-Stack Architecture', 'AI & GenAI', 'Product Strategy', 'Direct Client Access'].map((t, i) => (
                      <div key={i} className="nd-exec-highlight-tag">
                        <CheckCircle2 size={13} style={{ color: '#2E29FF' }} /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={100}>
                <div className="nd-exec-img-wrap">
                  <img src="/hero-my-image.webp" alt="Harsh Prateek - Founder & CEO at NovaDesk" className="nd-exec-img" />
                </div>
              </Reveal>
            </div>

            {/* ── DIVIDER ─── */}
            <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #E2E8F0 30%, #E2E8F0 70%, transparent)', marginBottom: '80px' }} />

            {/* ── PIUSHA PATRA ─── */}
            <div className="nd-exec-wrap reverse">
              <Reveal direction="left" delay={0}>
                <div className="nd-exec-img-wrap">
                  <img src="/Co-Founder.png" alt="Piusha Patra - Co-Founder & Director at NovaDesk" className="nd-exec-img" />
                </div>
              </Reveal>

              <Reveal direction="right" delay={100}>
                <div className="nd-exec-content">
                  <div className="nd-exec-role-pill" style={{ background: 'rgba(0,184,130,0.1)', color: '#00B882' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00B882', display: 'inline-block' }} />
                    Co-Founder &amp; Director
                  </div>
                  <h3 className="nd-exec-name">Piusha Patra</h3>
                  <p className="nd-exec-text">
                    I believe that every successful business is built on strong relationships, clear communication, and a shared vision. As the Co-Founder of NovaDesk, my focus is on shaping the company's direction beyond technology — building meaningful client relationships, streamlining operations, supporting our team, and ensuring that every project reflects our commitment to quality and trust.
                  </p>
                  <p className="nd-exec-text">
                    I am passionate about creating an environment where innovation meets collaboration. My goal is to help businesses grow by delivering not just digital solutions, but experiences that create lasting value. Every decision I make is guided by our vision of building a company that people can rely on, where creativity, integrity, and long-term partnerships always come first.
                  </p>
                  <div className="nd-exec-sig" style={{ color: '#00B882' }}>Piusha Patra</div>
                  <div className="nd-exec-highlights">
                    {['Client Relationships', 'Operations', 'Team Leadership', 'Strategic Vision'].map((t, i) => (
                      <div key={i} className="nd-exec-highlight-tag">
                        <CheckCircle2 size={13} style={{ color: '#00B882' }} /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── CORE VALUES ─────────────────────────────────────────────────── */}
        <section className="nd-section nd-values-section">
          <div className="nd-section-inner">
            <Reveal direction="up">
              <div style={{ marginBottom: '8px' }}>
                <span className="nd-section-eyebrow" style={{ color: '#818CF8' }}>How We Build</span>
                <h2 className="nd-section-h2" style={{ color: '#F8FAFC' }}>Our Core Engineering Values</h2>
                <p className="nd-section-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Four principles that guide every line of code, every product decision, and every client interaction.
                </p>
              </div>
            </Reveal>

            <div className="nd-values-grid">
              {coreValues.map((v, i) => (
                <Reveal key={i} direction="up" delay={i * 80}>
                  <div className="nd-value-card">
                    <div className="nd-value-icon" style={{ background: v.bg, color: v.color }}>
                      {v.icon}
                    </div>
                    <div className="nd-value-title">{v.title}</div>
                    <div className="nd-value-desc">{v.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TEAM GRID ───────────────────────────────────────────────────── */}
        <section className="nd-section nd-team-section">
          <div className="nd-section-inner">
            <Reveal direction="up">
              <div style={{ marginBottom: '8px' }}>
                <span className="nd-section-eyebrow" style={{ color: '#2E29FF' }}>Our Core Team</span>
                <h2 className="nd-section-h2">The Engineers &amp; Designers Behind NovaDesk</h2>
                <p className="nd-section-sub">
                  Handpicked senior specialists dedicated to full-stack engineering, GenAI integration, cloud infrastructure, and product design.
                </p>
              </div>
            </Reveal>

            <div className="nd-team-grid">
              {teamMembers.map((m, i) => (
                <Reveal key={i} direction="up" delay={i * 60}>
                  <div
                    className="nd-team-card"
                    style={{ '--card-accent': m.color }}
                  >
                    <div className="nd-team-card-img-wrap">
                      <img src={m.image} alt={m.name} className="nd-team-card-img" />
                    </div>
                    <div className="nd-team-card-body">
                      <div className="nd-team-name">{m.name}</div>
                      <div className="nd-team-role" style={{ color: m.color }}>{m.role}</div>
                      <div className="nd-team-bio">{m.bio}</div>
                      <div className="nd-team-tags">
                        {m.tags.map((t, j) => (
                          <span key={j} className="nd-team-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="nd-section nd-faq-section">
          <div className="nd-section-inner" style={{ maxWidth: '860px' }}>
            <Reveal direction="up">
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <span className="nd-section-eyebrow" style={{ color: '#2E29FF' }}>Frequently Asked Questions</span>
                <h2 className="nd-section-h2" style={{ margin: '0 auto' }}>Everything You Need to Know</h2>
              </div>
            </Reveal>

            {faqs.map((f, i) => (
              <Reveal key={i} direction="up" delay={i * 60}>
                <FaqItem
                  q={f.q}
                  a={f.a}
                  open={activeFaq === i}
                  onToggle={() => setActiveFaq(activeFaq === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────────────────── */}
        <section className="nd-cta-section">
          <div className="nd-cta-inner">
            <Reveal direction="up">
              <h2 className="nd-cta-title">Ready to Build Your<br />Next Big Product?</h2>
            </Reveal>
            <Reveal direction="up" delay={80}>
              <p className="nd-cta-sub">
                Partner directly with senior engineering leadership. Build high-performance web, mobile, and AI solutions that scale.
              </p>
            </Reveal>
            <Reveal direction="up" delay={160}>
              <div className="nd-cta-btns">
                <Link to="/contact-us" className="nd-btn-white">
                  Schedule a Free Consultation <ArrowRight size={16} />
                </Link>
                <Link to="/get-a-free-quote" className="nd-btn-outline">
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
}
