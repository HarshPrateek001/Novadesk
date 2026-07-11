import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// ─── ICONS ─────────────────────────────────────────────────────────────────
const IconAI = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M15 2.25V5.25M16.5 3.75H13.5M3 12.75V14.25M3.75 13.5H2.25M7.45 11.625a2.5 2.5 0 01-.49-.688L1.77 9.361a.5.5 0 010-.722l5.19-1.576a2.5 2.5 0 001.44-1.44l1.186-4.6a.5.5 0 01.964 0l1.185 4.6a2.5 2.5 0 001.44 1.44l4.6 1.186a.5.5 0 010 .964l-4.6 1.185a2.5 2.5 0 00-1.44 1.44l-1.185 4.6a.5.5 0 01-.964 0l-1.186-4.6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconWeb = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M7.5 3V6M1.5 6H16.5M4.5 3V6M3 3H15C15.83 3 16.5 3.67 16.5 4.5v9c0 .83-.67 1.5-1.5 1.5H3c-.83 0-1.5-.67-1.5-1.5v-9C1.5 3.67 2.17 3 3 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconMobile = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M9 13.5H9.0075M5.25 1.5H12.75c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5H5.25c-.83 0-1.5-.67-1.5-1.5V3c0-.83.67-1.5 1.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M12 13.5L16.5 9 12 4.5M6 4.5L1.5 9 6 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconDevOps = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M13.5 12L16.5 9l-3-3M4.5 6L1.5 9l3 3M10.875 3l-3.75 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconMVP = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M9 1.5L11.12 6.26L16.5 7.27L12.75 10.9L13.74 16.5L9 14.01L4.26 16.5L5.25 10.9L1.5 7.27L6.88 6.26L9 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 18.33C14.6 18.33 18.33 14.6 18.33 10S14.6 1.67 10 1.67 1.67 5.4 1.67 10 5.4 18.33 10 18.33zm4.12-11.25L8.5 12.58 5.63 9.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 9.41L7.4 18.02 5.98 16.6 14.59 8H7V6h11v11h-2V9.41z" fill="currentColor"/></svg>
);
const IconPin = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M5 13.67c-.16 0-.29-.04-.4-.13a.73.73 0 01-.25-.35c-.21-.62-.48-1.2-.8-1.74-.31-.55-.75-1.18-1.32-1.92C1.67 8.78 1.2 8.08.85 7.42.5 6.75.33 5.95.33 5c0-1.3.45-2.4 1.35-3.3C2.59.79 3.7.33 5 .33s2.4.46 3.3 1.37C9.21 2.6 9.67 3.7 9.67 5c0 1.01-.2 1.86-.58 2.53-.38.67-.82 1.32-1.32 1.97-.6.8-1.06 1.47-1.37 2-.3.52-.55 1.08-.75 1.68a.73.73 0 01-.25.32c-.11.08-.24.12-.4.12zm0-8c.47 0 .86-.16 1.18-.48.32-.32.49-.71.49-1.19s-.17-.87-.49-1.18A1.62 1.62 0 005 3.33c-.47 0-.86.16-1.18.48C3.5 4.13 3.33 4.52 3.33 5s.17.87.49 1.19c.32.32.71.48 1.18.48z" fill="currentColor"/></svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);
const IconCart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
);
const IconCloud = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
);

// ─── COUNTER HOOK ─────────────────────────────────────────────────────────
function useCounter(end, duration = 1500, isVisible) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);
  return count;
}

// ─── ANIMATED COUNTER STAT ───────────────────────────────────────────────
function StatCard({ num, label, desc, isVisible }) {
  const parsed = parseInt(num.replace(/[^0-9]/g, ''));
  const suffix = num.replace(/[0-9]/g, '');
  const count = useCounter(parsed, 1500, isVisible);
  return (
    <div className="nd-stat-card">
      <h3 className="nd-stat-num">{count}{suffix}</h3>
      <div>
        <h4 className="nd-stat-label">{label}</h4>
        <p className="nd-stat-desc">{desc}</p>
      </div>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────
function ProjectCard({ name, category, desc, location, mockTitle, mockTag, mockEmoji, mockGradient }) {
  return (
    <div className="nd-project-card">
      <div className="nd-project-header" style={{ background: mockGradient }}>
        {/* Play Button Overlay */}
        <div className="nd-project-play-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        
        {/* Visual Mock Contents */}
        <div className="nd-project-mock-content">
          <div className="nd-project-mock-left">
            <div className="nd-project-mock-title">{mockTitle}</div>
            <div className="nd-project-mock-tag">{mockTag}</div>
          </div>
          <div className="nd-project-mock-right">
            <div className="nd-project-mock-logo">
              <span className="nd-project-mock-emoji">{mockEmoji}</span>
              <span className="nd-project-mock-brand">NOVADESK</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Body */}
      <div className="nd-project-body">
        <div className="nd-project-meta-left">
          <h3 className="nd-project-title-text">{name}</h3>
          <p className="nd-project-desc-text">{desc}</p>
        </div>
        <div className="nd-project-meta-right">
          <div className="nd-project-loc-tag">
            <span className="nd-pin"><IconPin /></span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────
const IconChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={`nd-faq-item ${open ? 'nd-faq-open' : ''}`}>
      <button className="nd-faq-q" onClick={onToggle}>
        <span>{q}</span>
        <span className="nd-faq-icon">
          <IconChevronDown />
        </span>
      </button>
      {open && <div className="nd-faq-a">{a}</div>}
    </div>
  );
}

// ─── TECH STACK DATA FOR TICKER ───────────────────────────────────────────
const techRow1 = [
  { name: 'Next.js', icon: <svg viewBox="0 0 180 180" fill="none"><circle cx="90" cy="90" r="80" stroke="#000000" strokeWidth="12"/><path d="M136.5 125L94.5 73.5V125H82.5V55H92.5L134.5 106.5V55H146.5V125H136.5Z" fill="#000000"/></svg> },
  { name: 'FastAPI', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V12.5H8.5l4-6.5V11h2.5l-4 6z" fill="#009688"/></svg> },
  { name: 'Supabase', icon: <svg viewBox="0 0 24 24" fill="none"><path d="M19 10h-6.5l3.5-7.5H8L4 14h6.5l-3.5 7.5H16L19 10z" fill="#3ECF8E"/></svg> },
  { name: 'OpenAI', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.3 9.3a5.5 5.5 0 0 0-2.8-2.8 5.6 5.6 0 0 0-5.8.7 5.6 5.6 0 0 0-2.5-4.1A5.6 5.6 0 0 0 4.6 4a5.6 5.6 0 0 0 .7 5.8A5.6 5.6 0 0 0 1.2 12a5.6 5.6 0 0 0 2.7 4.9A5.6 5.6 0 0 0 9.7 18a5.6 5.6 0 0 0 2.5 4 5.6 5.6 0 0 0 5.6-1 5.6 5.6 0 0 0-.7-5.8 5.6 5.6 0 0 0 4.2-2.1c1.2-1.1 1.7-2.6 1.7-3.8zm-11.8 8.1c-.6 0-1.1-.3-1.4-.8l-3-5.2a1.6 1.6 0 0 1 .6-2.2 1.6 1.6 0 0 1 2.2.6l3 5.2a1.6 1.6 0 0 1-.6 2.2c-.3.2-.5.2-.8.2zm4.1-1.1l-3-5.2a1.6 1.6 0 0 1 .6-2.2 1.6 1.6 0 0 1 2.2.6l3 5.2a1.6 1.6 0 0 1-.6 2.2 1.6 1.6 0 0 1-2.2-.6zm-5-8.7c-.3-.2-.5-.5-.5-.8a1.6 1.6 0 0 1 1.6-1.6c.6 0 1.1.3 1.4.8l3 5.2a1.6 1.6 0 0 1-.6 2.2 1.6 1.6 0 0 1-2.2-.6l-3-5.2z" fill="#10A37F"/></svg> },
  { name: 'PostgreSQL', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm6 14c0 .66-2.13 2-6 2s-6-1.34-6-2v-3.5c1.45 1.05 3.65 1.5 6 1.5s4.55-.45 6-1.5V18zm0-5c0 .66-2.13 2-6 2s-6-1.34-6-2V9.5c1.45 1.05 3.65 1.5 6 1.5s4.55-.45 6-1.5V13z" fill="#336791"/></svg> },
  { name: 'TypeScript', icon: <svg viewBox="0 0 100 100" fill="currentColor"><rect width="100" height="100" rx="15" fill="#3178C6"/><path d="M35 30h-10v45h-10v-45h-10v-10h30v10zm45 20c0 5-2 9-5 12-3 3-8 4-15 4-5 0-9-1-13-3v-10c4 2 8 3 12 3 4 0 7-1 9-2s3-4 3-6c0-2-1-4-2-5s-5-3-9-4c-6-2-10-4-12-7s-3-7-3-11c0-5 2-9 5-12s8-4 14-4c5 0 9 1 13 3v10c-4-2-7-3-11-3-3 0-6 1-8 2s-2 3-2 5c0 2 1 4 2 5s4 3 8 4c6 2 10 4 13 7s4 7 4 11z" fill="#ffffff" transform="translate(10, 5) scale(0.8)"/></svg> }
];

const techRow2 = [
  { name: 'React', icon: <svg viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
  { name: 'Flutter', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12l3.6 3.6 15.8-15.8H14.314zM21.7 12l-3.6-3.6L5.9 20.6l3.6 3.6L21.7 12z" fill="#02569B"/></svg> },
  { name: 'Vercel', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.5L12 1.5 0 22.5z" fill="#000000"/></svg> },
  { name: 'Docker', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 13.5V15h20v-1.5H2zm1-2.5h3v2H3v-2zm4 0h3v2H7v-2zm4 0h3v2h-3v-2zm4 0h3v2h-3v-2zm-12-3h3v2H3V8zm4 0h3v2H7V8zm4 0h3v2h-3V8zm-8-3h3v2H3V5zm4 0h3v2H7V5z" fill="#2496ED"/></svg> },
  { name: 'Claude', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-5.5s1-4 2.5-5.5 3.5-2.5 5.5-2.5 4 1 5.5 2.5 2.5 3.5 2.5 5.5-1 4-2.5 5.5-3.5 2.5-5.5 2.5-4-1-5.5-2.5z" stroke="#D97706"/><path d="M12 6v12M6 12h12M7.75 7.75l8.5 8.5M7.75 16.25l8.5-8.5" stroke="#D97706"/></svg> },
  { name: 'Tailwind', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7 1.2 1.3 2.7 2.9 5.4 2.9 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-1.2-1.3-2.7-2.9-5.4-2.9zm-6 6.4c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7 1.2 1.3 2.7 2.9 5.4 2.9 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-1.2-1.3-2.7-2.9-5.4-2.9z" fill="#38BDF8"/></svg> }
];

// ─── MAIN HOME ────────────────────────────────────────────────────────────
export default function Home() {
  const [activeTab, setActiveTab] = useState('software');
  const [activeFaq, setActiveFaq] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const projects = [
    { 
      name: 'AI Support Desk', 
      category: 'AI', 
      desc: 'Automated L1 support for telecom', 
      location: 'India', 
      status: 'DEPLOYED',
      mockTitle: 'REIMAGINING TECH SUPPORT',
      mockTag: 'SUPPORT APP BY NOVADESK',
      mockEmoji: '🤖',
      mockGradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)'
    },
    { 
      name: 'SaaS Property Portal', 
      category: 'Web', 
      desc: 'Multi-tenant real estate marketplace', 
      location: 'UAE', 
      status: 'DEPLOYED',
      mockTitle: 'REAL ESTATE MARKETPLACE',
      mockTag: 'PROPERTY APP BY NOVADESK',
      mockEmoji: '🏢',
      mockGradient: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)'
    },
    { 
      name: 'Logistics App', 
      category: 'Mobile', 
      desc: 'On-demand delivery & tracking', 
      location: 'Singapore', 
      status: 'DEPLOYED',
      mockTitle: 'ON-DEMAND LOGISTICS',
      mockTag: 'TRACKING APP BY NOVADESK',
      mockEmoji: '🚚',
      mockGradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    { 
      name: 'EdTech Platform', 
      category: 'Web', 
      desc: 'Learning management system', 
      location: 'East Africa', 
      status: 'DEPLOYED',
      mockTitle: 'LEARNING MANAGEMENT SYSTEM',
      mockTag: 'EDTECH APP BY NOVADESK',
      mockEmoji: '📚',
      mockGradient: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)'
    },
    { 
      name: 'Wealth Management App', 
      category: 'Mobile', 
      desc: 'B2B portfolio tracker', 
      location: 'India', 
      status: 'DEPLOYED',
      mockTitle: 'PORTFOLIO MONITORING',
      mockTag: 'FINANCE APP BY NOVADESK',
      mockEmoji: '💰',
      mockGradient: 'linear-gradient(135deg, #FFc312 0%, #EE5A24 100%)'
    },
    { 
      name: 'E-commerce Marketplace', 
      category: 'Web', 
      desc: 'Multi-vendor shopping platform', 
      location: 'India', 
      status: 'DEPLOYED',
      mockTitle: 'MULTI-VENDOR SHOPPING',
      mockTag: 'MARKETPLACE BY NOVADESK',
      mockEmoji: '🛍️',
      mockGradient: 'linear-gradient(135deg, #12CBC4 0%, #1289A7 100%)'
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrentProject(p => (p + 3 >= projects.length ? 0 : p + 1)), 3000);
    return () => clearInterval(t);
  }, []);

  const tabs = {
    ai: {
      icon: <IconAI />,
      label: 'AI & ML Development',
      title: 'AI & ML Development',
      desc: 'We build custom machine learning models, natural language processing pipelines, chatbot agents, and conversational AI solutions engineered to automate and optimize your business.',
      links: ['Chatbot Development', 'Gen AI Development', 'AI Integrated Software', 'Conversational AI']
    },
    web: {
      icon: <IconWeb />,
      label: 'Web & CMS Dev',
      title: 'Web & CMS Dev',
      desc: 'Clean architecture, fast load times, and custom content management solutions. We build highly responsive and reliable websites suited for content and logic-heavy applications.',
      links: ['React JS Dev', 'Web Dev', 'PHP', 'Python', 'Fullstack', 'CMS', 'Node JS', 'WordPress']
    },
    ecommerce: {
      icon: <IconCart />,
      label: 'Ecommerce Dev',
      title: 'Ecommerce Dev',
      desc: 'Scalable multi-vendor stores and direct-to-consumer storefronts featuring frictionless checkouts, inventory trackers, and seamless payment gateways.',
      links: ['eCommerce Dev', 'eCommerce Design', 'eCommerce Implementation', 'WooCommerce', 'Shopify Dev']
    },
    mobile: {
      icon: <IconMobile />,
      label: 'Mobile APP',
      title: 'Mobile APP',
      desc: 'Engaging, fast, and feature-rich mobile app development targeting native iOS and Android systems using Kotlin, Swift, Flutter, and React Native.',
      links: ['Android', 'iOS', 'Mobile App Devs', 'React Native']
    },
    software: {
      icon: <IconCode />,
      label: 'Software Development',
      title: 'Software Development',
      desc: 'We build custom software — SaaS platforms, ERP systems, internal CRM databases, enterprise integrations, and high-fidelity MVPs mapped to your exact workflows.',
      links: ['SaaS Dev', 'ERP Software', 'CRMS System', 'Enterprises Software', 'Custom Software', 'MVP Dev']
    }
  };

  const faqs = [
    { q: 'What services does NOVADESK actually offer?', a: 'Full-stack web development (Next.js, FastAPI, Supabase) and AI integration (LLM features, RAG, automation). I intentionally focus on these rather than offering everything, so the quality stays high.' },
    { q: 'How much does a project cost?', a: 'Depends on scope. A simple landing page or MVP module can start around ₹15,000–30,000; a full-stack product with AI features typically runs higher. You\'ll get a clear, itemized quote after a free discovery call — no vague ballparks.' },
    { q: 'How long does a typical project take?', a: 'A focused MVP usually takes 2–4 weeks. Larger builds with multiple features run 6–10 weeks. You\'ll know the realistic timeline after the discovery call, not a guess upfront.' },
    { q: 'Do I get to see progress during the build?', a: 'You see working software every week — not a status update. That\'s non-negotiable in how I work. No silent six-week builds followed by a big reveal.' },
    { q: 'Will you personally build my project?', a: 'Personally. NOVADESK is one person — the same person who scopes the project writes the code and deploys it.' },
    { q: 'Do you sign NDAs?', a: 'Yes, happy to sign an NDA before any detailed discussion if you need one.' },
    { q: 'What happens after launch?', a: 'Every project includes a defined support window post-launch for bug fixes and questions. Ongoing work beyond that is available separately if needed.' },
  ];

  return (
    <>
      <style>{`
        /* ── BASE ── */
        .nd { font-family: 'Space Grotesk', sans-serif; }

        /* ── HERO ── */
        .nd-hero { 
          position: relative; 
          overflow: hidden; 
          padding: 80px 0 80px 0; 
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.05) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .nd-hero::before { 
          content: ''; 
          position: absolute; 
          top: -100px; 
          left: 15%; 
          width: 600px; 
          height: 600px; 
          border-radius: 50%; 
          background: radial-gradient(circle, rgba(255, 182, 219, 0.45) 0%, transparent 75%); 
          filter: blur(50px);
          pointer-events: none; 
          z-index: 0;
        }
        .nd-hero::after { 
          content: ''; 
          position: absolute; 
          bottom: -50px; 
          right: 10%; 
          width: 500px; 
          height: 500px; 
          border-radius: 50%; 
          background: radial-gradient(circle, rgba(255, 105, 180, 0.25) 0%, transparent 75%); 
          filter: blur(60px);
          pointer-events: none; 
          z-index: 0;
        }
        .nd-hero-inner { 
          max-width: 1330px; 
          margin: 0 auto; 
          padding: 0 40px; 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 80px; 
          align-items: center; 
          position: relative;
          z-index: 2;
        }

        /* LEFT SIDE */
        .nd-hero-left { padding-bottom: 80px; }
        .nd-eyebrow { display:inline-flex; align-items:center; gap:8px; background:rgba(46,41,255,0.08); border:1px solid rgba(46,41,255,0.2); padding:6px 16px; border-radius:40px; font-size:11px; font-weight:700; color:#2E29FF; letter-spacing:0.8px; text-transform:uppercase; margin-bottom:20px; }
        .nd-h1 { font-size:54px; line-height:1.1; letter-spacing:-1.5px; color:#0A0A2E; font-weight:800; margin-bottom:8px; }
        .nd-h1-blue { font-size:54px; line-height:1.1; letter-spacing:-1.5px; color:#2E29FF; font-weight:800; margin-bottom:24px; display:block; }
        .nd-subtext { font-size:15.5px; line-height:1.7; color:#4B5563; max-width:500px; margin-bottom:12px; font-weight:400; }
        .nd-subtext-sm { font-size:14px; line-height:1.65; color:#6B7280; max-width:480px; margin-bottom:8px; font-weight:400; }
        .nd-industries { font-size:13.5px; color:#6B7280; margin-bottom:32px; font-weight:400; line-height:1.6; }
        .nd-industries strong { color:#0A0A2E; font-weight:600; }
        .nd-cta-row { display:flex; gap:16px; flex-wrap:wrap; margin-bottom:28px; align-items:center; }
        .nd-btn-primary { display:inline-flex; align-items:center; gap:8px; padding:14px 30px; background:#2E29FF; color:#fff; border-radius:6px; font-weight:700; font-size:15px; border:none; cursor:pointer; transition:all .25s; text-decoration:none; letter-spacing:0.2px; }
        .nd-btn-primary:hover { background:#1a16dd; transform:translateY(-2px); box-shadow:0 10px 28px rgba(46,41,255,0.3); }
        .nd-btn-outline { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:transparent; color:#2E29FF; border-radius:6px; font-weight:700; font-size:15px; border:2px solid rgba(46,41,255,0.3); cursor:pointer; transition:all .25s; text-decoration:none; }
        .nd-btn-outline:hover { border-color:#2E29FF; background:#EEF0FF; }
        .nd-rating-row { display:flex; align-items:center; gap:14px; }
        .nd-avatars { display:flex; }
        .nd-avatar { width:32px; height:32px; border-radius:50%; border:2px solid #fff; background: linear-gradient(135deg, #2E29FF, #7B78FF); margin-left:-8px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:11px; font-weight:700; }
        .nd-avatars .nd-avatar:first-child { margin-left:0; }
        .nd-stars { display:flex; gap:2px; color:#F59E0B; margin-bottom:2px; }
        .nd-rating-text { font-size:13px; font-weight:700; color:#0A0A2E; line-height:1.2; }
        .nd-rating-sub { font-size:12px; color:#6B7280; font-weight:400; }

        /* RIGHT SIDE — DIRECT IMAGE */
        .nd-hero-right { position:relative; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:5; }
        .nd-hero-direct-img { width:100%; max-width:500px; display:block; border-radius:24px; margin-top:-85px; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); cursor:pointer; }
        .nd-hero-direct-img:hover { transform:translateY(-8px) scale(1.03); }
        .nd-hero-img-caption { 
          text-align: center; 
          margin-top: -50px; 
          position: relative; 
          z-index: 10; 
          background: rgba(255, 255, 255, 0.72); 
          backdrop-filter: blur(14px); 
          -webkit-backdrop-filter: blur(14px); 
          border: 1px solid rgba(46, 41, 255, 0.12); 
          border-radius: 20px; 
          padding: 16px 28px; 
          box-shadow: 0 15px 35px rgba(46, 41, 255, 0.06); 
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.3s;
        }
        .nd-hero-img-caption h3 { font-size: 21px; font-weight: 800; color: #0A0A2E; margin-bottom: 4px; line-height: 1.2; text-transform: uppercase; letter-spacing: 0.5px; }
        .nd-hero-img-caption h4 { font-size: 21px; font-weight: 800; color: #2E29FF; line-height: 1.2; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* TRUST BADGES BELOW IMAGE */
        .nd-trust-badges { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-top:40px; }
        .nd-trust-card { background:#fff; border:1px solid rgba(46,41,255,0.1); border-radius:12px; padding:16px 20px; display:flex; align-items:center; gap:12px; box-shadow:0 2px 12px rgba(46,41,255,0.06); transition:all .2s; }
        .nd-trust-card:hover { border-color:#2E29FF; transform:translateY(-2px); box-shadow:0 8px 24px rgba(46,41,255,0.1); }
        .nd-trust-icon { width:36px; height:36px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
        .nd-trust-name { font-size:13px; font-weight:700; color:#0A0A2E; line-height:1.2; }
        .nd-trust-label { font-size:11px; color:#6B7280; font-weight:400; text-transform:uppercase; letter-spacing:0.4px; margin-top:2px; }

        /* ── DARK INTRO SECTION ── */
        .nd-intro { background:#2E29FF; padding:72px 0; }
        .nd-intro-inner { max-width:1330px; margin:0 auto; padding:0 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:40px; }
        .nd-intro-text h2 { color:#fff; font-size:36px; max-width:600px; line-height:1.2; margin-bottom:12px; }
        .nd-intro-text h2 em { color:#FFB6DB; font-style:normal; }
        .nd-intro-text p { color:rgba(255,255,255,0.75); font-size:15px; max-width:560px; font-weight:400; }
        .nd-intro-stats { display:flex; gap:32px; flex-wrap:wrap; }
        .nd-intro-stat { text-align:center; }
        .nd-intro-stat-num { font-size:48px; font-weight:700; color:#fff; line-height:1; }
        .nd-intro-stat-num sub { font-size:20px; color:#FFB6DB; }
        .nd-intro-stat-label { font-size:12px; color:#FFB6DB; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; margin-top:4px; }
        .nd-intro-divider { width:1px; height:60px; background:rgba(255,255,255,0.2); align-self:center; }

        /* ── DUAL ROW AUTO-SCROLLING TICKER ── */
        .nd-logos { 
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.03) 1px, transparent 1px);
          background-size: 26px 26px;
          padding: 80px 0; 
          border-bottom: 1px solid rgba(46,41,255,0.06); 
          position: relative;
          overflow: hidden;
        }
        .nd-logos::before {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 180px;
          background: linear-gradient(90deg, #ffffff 0%, transparent 100%);
          z-index: 3;
          pointer-events: none;
        }
        .nd-logos::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 180px;
          background: linear-gradient(270deg, #ffffff 0%, transparent 100%);
          z-index: 3;
          pointer-events: none;
        }
        
        .nd-logos-inner { max-width:1330px; margin:0 auto; padding:0 24px; text-align:center; position:relative; z-index:2; }
        .nd-logos-title { text-align:center; font-size:14px; font-weight:700; color:#2E29FF; margin-bottom:40px; text-transform:uppercase; letter-spacing:1px; }
        
        .nd-ticker-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          overflow: hidden;
        }
        
        .nd-ticker-row {
          display: flex;
          width: max-content;
          overflow: hidden;
        }
        
        .nd-ticker-track-lr {
          display: flex;
          gap: 60px;
          animation: scroll-lr 25s linear infinite;
        }
        .nd-ticker-track-rl {
          display: flex;
          gap: 60px;
          animation: scroll-rl 25s linear infinite;
        }
        
        /* Pause on hover */
        .nd-ticker-container:hover .nd-ticker-track-lr,
        .nd-ticker-container:hover .nd-ticker-track-rl {
          animation-play-state: paused;
        }
        
        .nd-tech-card {
          background: transparent;
          border: none;
          border-radius: 0;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 10px 0;
          box-shadow: none;
          white-space: nowrap;
          transition: all 0.3s ease;
          cursor: pointer;
          filter: grayscale(1) opacity(0.5);
        }
        .nd-tech-card:hover {
          filter: grayscale(0) opacity(1);
          transform: translateY(-2px);
        }
        .nd-tech-card span {
          font-size: 20px;
          font-weight: 700;
          color: #4B5563;
          transition: color 0.3s ease;
        }
        .nd-tech-card:hover span {
          color: #0A0A2E;
        }
        .nd-tech-card svg {
          flex-shrink: 0;
          width: 28px !important;
          height: 28px !important;
          transition: transform 0.3s ease;
        }
        .nd-tech-card:hover svg {
          transform: scale(1.1);
        }
        
        @keyframes scroll-lr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-rl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── WHY DIFFERENT ── */
        /* ── WHY DIFFERENT ── */
        .nd-achievements { 
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.03) 1px, transparent 1px);
          background-size: 26px 26px;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }
        .nd-achievements::before {
          content: '';
          position: absolute;
          top: -200px;
          left: -100px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(46, 41, 255, 0.04) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .nd-achievements::after {
          content: '';
          position: absolute;
          bottom: -200px;
          right: -100px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 182, 219, 0.16) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .nd-achievements-inner { max-width: 1330px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 2; }
        .nd-section-tag { display:inline-flex; align-items:center; gap:10px; font-size:14px; font-weight:700; color:#2E29FF; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px; }
        .nd-section-tag::before, .nd-section-tag::after { content:'✦'; font-size:12px; color:#FFB6DB; }
        .nd-section-h2 { font-size:40px; font-weight:800; color:#0A0A2E; margin-bottom:16px; }
        .nd-section-sub { font-size:16px; color:#6B7280; font-weight:400; max-width:680px; margin:0 auto; line-height:1.6; }
        .nd-stats-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:28px; margin-top:60px; }
        
        .nd-stat-card { 
          background: #ffffff; 
          border: 1.5px solid rgba(46, 41, 255, 0.05); 
          border-radius: 24px; 
          padding: 36px 30px; 
          display: flex; 
          flex-direction: column; 
          align-items: flex-start; 
          gap: 20px; 
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.015); 
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1); 
          text-align: left;
        }
        .nd-stat-card:hover { 
          border-color: rgba(46, 41, 255, 0.15); 
          transform: translateY(-6px); 
          box-shadow: 0 24px 56px rgba(46, 41, 255, 0.06); 
        }
        .nd-stat-card-highlight {
          border-color: #2E29FF !important;
          box-shadow: 0 16px 40px rgba(46, 41, 255, 0.05);
        }
        .nd-stat-card-highlight:hover {
          border-color: #2E29FF !important;
          box-shadow: 0 24px 56px rgba(46, 41, 255, 0.12);
        }
        .nd-stat-label { font-size:17px; font-weight:800; color:#0A0A2E; margin-bottom:6px; }
        .nd-stat-desc { font-size:14px; color:#6B7280; font-weight:400; line-height:1.6; }

        /* ── EXPERTISE / SERVICES ── */
        .nd-expertise { background:#fff; padding:100px 0; position:relative; }
        .nd-expertise-inner { max-width:1330px; margin:0 auto; padding:0 40px; }
        .nd-expertise-header { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:end; margin-bottom:60px; text-align:left; }
        .nd-expertise-desc { font-size:15.5px; color:#4B5563; line-height:1.65; font-weight:400; margin:0 0 16px 0; }
        .nd-expertise-desc:last-child { margin-bottom:0; }
        
        .nd-services-wrapper { display:grid; grid-template-columns:310px 1fr; gap:40px; background:#F4F5FC; border-radius:28px; padding:40px; border:1px solid rgba(46,41,255,0.03); }
        .nd-service-nav { background:#ffffff; padding:24px; display:flex; flex-direction:column; gap:8px; border-radius:20px; box-shadow:0 10px 30px rgba(46, 41, 255, 0.03); border:1px solid rgba(46,41,255,0.06); }
        .nd-tab-btn { display:flex; align-items:center; gap:12px; padding:14px 18px; border-radius:10px; border:none; background:transparent; font-family:inherit; font-size:14.5px; font-weight:700; color:#4B5563; cursor:pointer; text-align:left; transition:all 0.2s; }
        .nd-tab-btn:hover { background:rgba(46,41,255,0.05); color:#2E29FF; }
        .nd-tab-btn.active { background:#2E29FF; color:#ffffff; }
        .nd-tab-btn svg { flex-shrink:0; color:inherit; }
        
        .nd-service-content { padding:20px 10px; text-align:left; }
        .nd-service-article { display:none; }
        .nd-service-article.active { display:block; }
        .nd-service-title { font-size:30px; font-weight:800; color:#2E29FF; margin-bottom:16px; }
        .nd-service-desc-detail { font-size:16px; color:#4B5563; line-height:1.65; margin-bottom:32px; font-weight:400; }
        .nd-service-links { display:grid; grid-template-columns:repeat(2, 1fr); gap:16px 40px; }
        .nd-service-bullet-item { display:flex; align-items:center; gap:10px; font-size:15px; font-weight:600; color:#4B5563; }
        .nd-bullet-dot { width:6px; height:6px; border-radius:50%; background:#2E29FF; flex-shrink:0; opacity:0.6; }
        
        .nd-expertise-cta { background:linear-gradient(95deg, #2E29FF 0%, #7B78FF 100%); border-radius:24px; padding:32px 48px; display:flex; align-items:center; justify-content:space-between; gap:24px; margin-top:40px; box-shadow:0 16px 40px rgba(46,41,255,0.12); }
        .nd-expertise-cta h3 { font-size:22px; font-weight:800; color:#ffffff; margin:0; }
        
        @media (max-width:1024px) {
          .nd-services-wrapper { grid-template-columns:1fr; gap:32px; padding:24px; }
          .nd-service-nav { padding:16px; }
        }
        @media (max-width:768px) {
          .nd-expertise-header { grid-template-columns:1fr; gap:20px; }
          .nd-expertise-cta { flex-direction:column; text-align:center; padding:32px 24px; }
        }

        /* ── PROJECT SHOWCASE CARDS ── */
        .nd-projects { background:#2E29FF; padding:100px 0; color:#ffffff; }
        .nd-projects-inner { max-width:1330px; margin:0 auto; padding:0 40px; }
        .nd-projects-track { display:grid; grid-template-columns:repeat(3, 1fr); gap:32px; margin-top:60px; }
        
        .nd-project-card { 
          background:#ffffff; 
          border-radius:24px; 
          overflow:hidden; 
          box-shadow:0 16px 40px rgba(0, 0, 0, 0.15); 
          transition:all 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
          cursor:pointer;
          display:flex;
          flex-direction:column;
        }
        .nd-project-card:hover { 
          transform:translateY(-8px); 
          box-shadow:0 24px 60px rgba(0, 0, 0, 0.25); 
        }
        
        .nd-project-header { 
          height:200px; 
          position:relative; 
          overflow:hidden; 
          padding:24px;
          display:flex;
          align-items:flex-end;
        }
        
        .nd-project-play-btn {
          position:absolute;
          top:20px;
          right:20px;
          width:48px;
          height:48px;
          border-radius:50%;
          background:#2E29FF;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#ffffff;
          box-shadow:0 4px 12px rgba(46, 41, 255, 0.3);
          z-index:10;
          transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nd-project-card:hover .nd-project-play-btn {
          transform:scale(1.1);
          background:#1a16dd;
          box-shadow:0 6px 18px rgba(46, 41, 255, 0.4);
        }
        
        /* Inside Mock Content */
        .nd-project-mock-content {
          width:100%;
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          z-index:2;
          color:#ffffff;
          font-family:sans-serif;
        }
        .nd-project-mock-left {
          text-align:left;
        }
        .nd-project-mock-title {
          font-size:18px;
          font-weight:900;
          letter-spacing:-0.2px;
          line-height:1.2;
          margin-bottom:6px;
          text-transform:uppercase;
        }
        .nd-project-mock-tag {
          font-size:10px;
          font-weight:700;
          opacity:0.85;
          letter-spacing:0.5px;
          text-transform:uppercase;
        }
        .nd-project-mock-right {
          display:flex;
          flex-direction:column;
          align-items:flex-end;
        }
        .nd-project-mock-logo {
          background:#ffffff;
          border-radius:12px;
          padding:6px 12px;
          display:flex;
          align-items:center;
          gap:6px;
          box-shadow:0 4px 12px rgba(0,0,0,0.06);
        }
        .nd-project-mock-emoji {
          font-size:18px;
        }
        .nd-project-mock-brand {
          font-size:12px;
          font-weight:900;
          color:#2E29FF;
          letter-spacing:-0.2px;
        }
        
        /* Card Body */
        .nd-project-body {
          padding:24px;
          background:#ffffff;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:16px;
          border-top:1px solid rgba(46, 41, 255, 0.04);
        }
        .nd-project-meta-left {
          text-align:left;
        }
        .nd-project-title-text {
          font-size:17px;
          font-weight:800;
          color:#0A0A2E;
          margin:0;
        }
        .nd-project-desc-text {
          font-size:13.5px;
          color:#6B7280;
          margin:4px 0 0 0;
          font-weight:400;
        }
        
        /* Location Pill Tag with Left Accent Line */
        .nd-project-loc-tag {
          background:#F4F6FF;
          border-left:3px solid #2E29FF;
          border-radius:0 6px 6px 0;
          padding:6px 14px;
          font-size:13px;
          color:#2E29FF;
          font-weight:700;
          display:inline-flex;
          align-items:center;
          gap:6px;
          white-space:nowrap;
        }
        
        .nd-new-studio {
          background: rgba(255, 255, 255, 0.03);
          border: 2px dashed rgba(255, 255, 255, 0.25);
          border-radius: 20px;
          padding: 48px;
          text-align: center;
          margin-top: 40px;
          color: #ffffff;
        }
        .nd-new-studio blockquote {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.6;
          margin-bottom: 28px;
          font-style: italic;
        }
        .nd-new-studio blockquote::before {
          content: '\"';
          font-size: 40px;
          color: #FFB6DB;
          display: block;
          line-height: 1;
          margin-bottom: -8px;
        }

        /* ── HOW I WORK ── */
        .nd-process { background:#2E29FF; padding:100px 0; color:#ffffff; }
        .nd-process-inner { max-width:1330px; margin:0 auto; padding:0 40px; }
        .nd-process-header-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:60px; align-items:flex-end; margin-bottom:60px; text-align:left; }
        .nd-process-tag { font-size:13px; font-weight:700; color:#FFB6DB; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:16px; display:flex; align-items:center; gap:8px; }
        .nd-process-h2 { font-size:42px; font-weight:800; color:#ffffff; line-height:1.2; margin:0; }
        .nd-process-sub { font-size:16px; line-height:1.65; color:rgba(255, 255, 255, 0.85); margin:0; font-weight:400; }
        .nd-process-steps { display:grid; grid-template-columns:repeat(4, 1fr); gap:24px; }
        .nd-step { border:1.5px solid rgba(255, 255, 255, 0.35); background:rgba(255, 255, 255, 0.02); border-radius:20px; padding:32px 24px; display:flex; flex-direction:column; gap:20px; transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1); text-align:left; }
        .nd-step:hover { background:rgba(255, 255, 255, 0.08); border-color:rgba(255, 255, 255, 0.7); transform:translateY(-6px); }
        .nd-step-badge { width:32px; height:32px; border-radius:50%; background:#ffffff; color:#2E29FF; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; flex-shrink:0; }
        .nd-step-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
        .nd-step-list li { font-size:13.5px; line-height:1.5; color:rgba(255, 255, 255, 0.95); position:relative; padding-left:16px; font-weight:400; }
        .nd-step-list li::before { content:'•'; position:absolute; left:0; color:#FFB6DB; font-weight:bold; }
        
        .nd-process-footer { display:flex; justify-content:space-between; align-items:center; margin-top:60px; border-top:1px solid rgba(255, 255, 255, 0.15); padding-top:32px; flex-wrap:wrap; gap:24px; }
        .nd-process-profile { display:flex; align-items:center; gap:12px; }
        .nd-process-avatar { width:44px; height:44px; border-radius:50%; object-fit:cover; border:2px solid #ffffff; background:#ffffff; }
        .nd-process-profile-info h4 { font-size:14px; font-weight:700; color:#ffffff; margin:0; }
        .nd-process-profile-info p { font-size:12px; color:rgba(255, 255, 255, 0.7); margin:2px 0 0 0; }
        .nd-process-cta-btn { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:#ffffff; color:#2E29FF; border-radius:60px; font-weight:700; font-size:14px; text-decoration:none; transition:all 0.25s; }
        .nd-process-cta-btn:hover { transform:translateY(-2px); box-shadow:0 10px 24px rgba(0, 0, 0, 0.15); background:#f8f9ff; }

        @media (max-width:1024px) {
          .nd-process-header-grid { grid-template-columns:1fr; gap:20px; }
          .nd-process-steps { grid-template-columns:repeat(2, 1fr); }
        }
        @media (max-width:640px) {
          .nd-process-steps { grid-template-columns:1fr; }
        }

        /* ── COMPARISON TABLE ── */
        .nd-compare { 
          background-color: #ffffff;
          background-image: 
            linear-gradient(rgba(46, 41, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 41, 255, 0.04) 1px, transparent 1px);
          background-size: 26px 26px;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }
        .nd-compare::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 182, 219, 0.22) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .nd-compare-inner { max-width: 1140px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 2; }
        .nd-compare-table-wrapper {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 32px 72px rgba(46, 41, 255, 0.08), 0 8px 24px rgba(46, 41, 255, 0.04);
          border: 1px solid rgba(46, 41, 255, 0.08);
          margin-top: 60px;
        }
        .nd-compare-table { width: 100%; border-collapse: collapse; }
        .nd-compare-table thead tr { background: #2E29FF; }
        .nd-compare-table thead th { padding: 22px 30px; text-align: left; font-size: 15px; font-weight: 700; color: #ffffff; }
        .nd-compare-table thead th:last-child { background: #120ee3; }
        .nd-compare-table tbody tr { border-bottom: 1px solid rgba(46, 41, 255, 0.06); transition: background 0.2s; }
        .nd-compare-table tbody tr:last-child { border-bottom: none; }
        .nd-compare-table tbody tr:hover { background: rgba(46, 41, 255, 0.02); }
        .nd-compare-table tbody td { padding: 22px 30px; font-size: 14.5px; text-align: left; }
        .nd-compare-table tbody td:first-child { font-weight: 700; color: #0A0A2E; }
        .nd-compare-table tbody td:nth-child(2) { color: #6B7280; font-weight: 400; }
        .nd-compare-table tbody td:last-child { font-weight: 700; color: #2E29FF; }
        .nd-compare-note { font-size: 13.5px; color: #6B7280; margin-top: 28px; font-style: italic; font-weight: 400; text-align: center; }

        /* ── FAQ ── */
        .nd-faq { background:#fff; padding:100px 0; }
        .nd-faq-inner { max-width:960px; margin:0 auto; padding:0 24px; }
        .nd-faq-tag { text-align:center; font-size:13px; font-weight:700; color:#2E29FF; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px; display:flex; align-items:center; justify-content:center; gap:8px; }
        .nd-faq-title { font-size:32px; font-weight:800; color:#0A0A2E; text-align:center; margin-bottom:40px; line-height:1.25; }
        .nd-faq-list { margin-top:20px; display:flex; flex-direction:column; }
        .nd-faq-item { border:none; border-bottom:1px solid #E5E7EB; border-radius:0; overflow:hidden; transition:border-color .2s; }
        .nd-faq-q { width:100%; padding:24px 0; background:transparent; border:none; font-family:inherit; font-size:15.5px; font-weight:700; color:#0A0A2E; cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:16px; text-align:left; transition:color 0.2s; }
        .nd-faq-q:hover { color:#2E29FF; }
        .nd-faq-icon { display:inline-flex; align-items:center; justify-content:center; font-size:16px; color:#6B7280; flex-shrink:0; transition:transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .nd-faq-item.nd-faq-open .nd-faq-icon { transform:rotate(180deg); color:#2E29FF; }
        .nd-faq-a { padding:0 0 24px 0; font-size:14.5px; color:#4B5563; line-height:1.65; font-weight:400; text-align:left; }
        .nd-faq-cta-btn { display:inline-flex; align-items:center; gap:8px; padding:12px 32px; background:#2E29FF; color:#ffffff; border-radius:100px; font-weight:700; font-size:14px; text-decoration:none; transition:all 0.25s; box-shadow:0 8px 24px rgba(46,41,255,0.15); }
        .nd-faq-cta-btn:hover { background:#1a16dd; transform:translateY(-2px); box-shadow:0 12px 28px rgba(46,41,255,0.25); }

        /* ── RECOGNIZED & FEATURED ── */
        .nd-recognized { background:#fff; padding:100px 0; border-top:1px solid rgba(46,41,255,0.06); }
        .nd-recognized-inner { max-width:1100px; margin:0 auto; padding:0 24px; text-align:center; }
        .nd-recognized-tag { text-align:center; font-size:13px; font-weight:700; color:#2E29FF; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px; display:flex; align-items:center; justify-content:center; gap:8px; }
        .nd-recognized-title { font-size:32px; font-weight:800; color:#0A0A2E; text-align:center; margin-bottom:12px; line-height:1.25; }
        .nd-recognized-sub { font-size:15.5px; color:#6B7280; max-width:780px; margin:0 auto 40px auto; line-height:1.65; }
        
        .nd-featured-network { position:relative; width:100%; max-width:900px; height:420px; margin:50px auto 0 auto; }
        .nd-network-lines { position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:1; }
        
        .nd-network-center {
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          width:100px;
          height:100px;
          border-radius:50%;
          background:#2E29FF;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 12px 36px rgba(46,41,255,0.25);
          z-index:3;
        }
        .nd-network-center-inner {
          width:84px;
          height:84px;
          border-radius:50%;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:inset 0 2px 6px rgba(0,0,0,0.06);
        }
        .nd-network-card {
          position:absolute;
          background:#ffffff;
          border:1px solid rgba(46,41,255,0.08);
          border-radius:12px;
          padding:14px 24px;
          box-shadow:0 4px 20px rgba(0, 0, 0, 0.02);
          transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:2;
        }
        .nd-network-card:hover {
          transform:translateY(-4px) scale(1.05);
          border-color:rgba(46,41,255,0.25);
          box-shadow:0 12px 32px rgba(46, 41, 255, 0.1);
        }
        
        /* Position Nodes */
        .nd-node-yahoo { top:35px; left:230px; }
        .nd-node-fortune { top:35px; right:230px; }
        .nd-node-aol { top:150px; left:60px; }
        .nd-node-forbes { top:150px; right:60px; }
        .nd-node-techcrunch { top:265px; left:220px; }
        .nd-node-ani { top:265px; right:220px; }
        .nd-node-yourstory { bottom:10px; left:50%; transform:translateX(-50%); }

        @media (max-width: 768px) {
          .nd-network-lines { display: none; }
          .nd-featured-network { height: auto !important; display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; align-items: center; margin-top: 30px; }
          .nd-network-card { position: static !important; transform: none !important; margin: 0 !important; }
          .nd-network-center { display: none; }
        }

        /* ── FINAL CTA ── */
        .nd-final-cta { background:#0A0A2E; padding:100px 0; text-align:center; position:relative; overflow:hidden; }
        .nd-final-cta::before { content:''; position:absolute; top:-200px; left:50%; transform:translateX(-50%); width:600px; height:600px; border-radius:50%; background:radial-gradient(circle, rgba(255,182,219,0.12) 0%, transparent 70%); }
        .nd-final-cta-inner { max-width:600px; margin:0 auto; padding:0 24px; position:relative; }
        .nd-final-cta h2 { font-size:42px; color:#fff; margin-bottom:16px; }
        .nd-final-cta p { font-size:16px; color:rgba(255,255,255,0.7); margin-bottom:36px; font-weight:400; }
        .nd-email-link { font-size:14px; color:rgba(255,255,255,0.5); margin-top:16px; }
        .nd-email-link strong { color:#FFB6DB; }

        /* ── TICKER ── */
        .nd-ticker-wrap { background:#2E29FF; padding:18px 0; overflow:hidden; position:relative; z-index:10; border-top:1px solid rgba(255,255,255,0.1); border-bottom:1px solid rgba(255,255,255,0.1); }
        .nd-ticker { display:flex; width:100%; }
        .nd-ticker-track { display:flex; width:max-content; animation:ticker-slide 32s linear infinite; }
        .nd-ticker-group { display:flex; align-items:center; gap:50px; padding-right:50px; white-space:nowrap; }
        .nd-ticker-group span { font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:800; color:#fff; letter-spacing:1.5px; text-transform:uppercase; display:flex; align-items:center; gap:8px; }
        @keyframes ticker-slide { 0% { transform:translate3d(0, 0, 0); } 100% { transform:translate3d(-50%, 0, 0); } }

        /* ── RESPONSIVE ── */
        @media (max-width:1024px) {
          .nd-hero { padding-top: 24px !important; }
          .nd-hero-inner { display: flex; flex-direction: column-reverse; gap: 20px; }
          .nd-hero-direct-img { margin-top: 0 !important; }
          .nd-stats-grid { grid-template-columns:repeat(2,1fr); }
          .nd-services-wrapper { grid-template-columns:1fr; }
          .nd-service-nav { flex-direction:row; flex-wrap:wrap; border-right:none; border-bottom:1px solid rgba(46,41,255,0.08); }
          .nd-service-links { grid-template-columns:repeat(2,1fr); }
          .nd-process-steps { grid-template-columns:repeat(2,1fr); }
          .nd-process-steps::before { display:none; }
          .nd-expertise-header { grid-template-columns:1fr; }
          .nd-logo-grid { grid-template-columns:repeat(3,1fr); }
          .nd-projects-track { grid-template-columns:repeat(2,1fr); }
          .nd-intro-inner { justify-content:center; text-align:center; }
          .nd-intro-stats { justify-content:center; }
          .nd-trust-badges { grid-template-columns:repeat(3,1fr); }
        }
        @media (max-width:640px) {
          .nd-h1 { font-size:36px; }
          .nd-h1-blue { font-size:36px; }
          .nd-stats-grid { grid-template-columns:1fr; }
          .nd-process-steps { grid-template-columns:1fr; }
          .nd-logo-grid { grid-template-columns:repeat(2,1fr); }
          .nd-projects-track { grid-template-columns:1fr; }
          .nd-compare-table thead th, .nd-compare-table tbody td { padding:14px 16px; font-size:12px; }
          .nd-trust-badges { grid-template-columns:1fr; }
          .nd-hero-right { padding-bottom: 0 !important; }
          .nd-hero-left { padding-bottom: 40px !important; }
        }
      `}</style>

      <div className="nd">

        {/* ── 1. HERO ── */}
        <section className="nd-hero">
          <div className="nd-hero-inner">

            {/* LEFT */}
            <div className="nd-hero-left">
              <div className="nd-eyebrow">FULL-STACK + AI STUDIO — BUILT & SHIPPED BY ONE DEVELOPER</div>
              <h1 className="nd-h1">Build your Startup</h1>
              <span className="nd-h1-blue">with NOVADESK</span>
              <p className="nd-subtext">
                We build custom web apps, mobile products, and AI-powered features for startups and growing businesses across India, UAE, and beyond.
              </p>
              <p className="nd-subtext-sm">
                Trusted by early-stage founders and venture-backed teams. Backed by direct developer access — no middlemen, no account managers.
              </p>
              <p className="nd-industries">
                <strong>Fintech, Healthcare, EdTech, Logistics, SaaS, E-commerce.</strong> We bring engineering depth, product thinking, and the execution speed your business actually needs.
              </p>
              <div className="nd-cta-row">
                <Link to="/contact-us" className="nd-btn-primary">Book a Free 30-Min Call ↗</Link>
              </div>
              <div className="nd-rating-row">
                <div className="nd-avatars">
                  {['P','R','S'].map((l,i) => <div key={i} className="nd-avatar">{l}</div>)}
                </div>
                <div>
                  <div className="nd-stars">{[...Array(5)].map((_,i) => <IconStar key={i} />)}</div>
                  <div className="nd-rating-text">Trusted by 1,250+ Businesses Globally</div>
                </div>
              </div>
            </div>

            {/* RIGHT — DIRECT IMAGE WITHOUT FRAMES OR BADGES */}
            <div className="nd-hero-right">
              <img src="/hero-my-image.png" alt="NOVADESK software development studio" className="nd-hero-direct-img" />
              <div className="nd-hero-img-caption">
                <h3>FOUNDER OF NOVADESK</h3>
                <h4>HARSH PRATEEK</h4>
              </div>
            </div>

          </div>
        </section>

        {/* ── TICKER SECTION (Infinite Scrolling Tech & Trust) ── */}
        <section className="nd-ticker-wrap">
          <div className="nd-ticker">
            <div className="nd-ticker-track">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="nd-ticker-group">
                  <span>✦ NEXT.JS DEVELOPMENT</span>
                  <span>✦ FASTAPI + PYTHON</span>
                  <span>✦ SUPABASE + POSTGRESQL</span>
                  <span>✦ GENERATIVE AI &amp; LLMS</span>
                  <span>✦ CHATBOTS &amp; AGENTS</span>
                  <span>✦ MOBILE FLUTTER APPS</span>
                  <span>✦ 100% IP OWNERSHIP</span>
                  <span>✦ DIRECT DEVELOPER ACCESS</span>
                  <span>✦ WEEKLY WORKABLE MILESTONES</span>
                  <span>✦ CMMI LEVEL 5 STANDARDS</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. DARK INTRO BAR ── */}
        <section className="nd-intro">
          <div className="nd-intro-inner">
            <div className="nd-intro-text">
              <h2>Built for founders who are <em>tired of agency theater</em></h2>
              <p>Direct access to a full-stack + AI builder who ships weekly milestones and answers your messages the same day.</p>
            </div>
            <div className="nd-intro-stats">
              <div className="nd-intro-stat">
                <div className="nd-intro-stat-num">3<sub>+</sub></div>
                <div className="nd-intro-stat-label">Products Shipped</div>
              </div>
              <div className="nd-intro-divider" />
              <div className="nd-intro-stat">
                <div className="nd-intro-stat-num">7<sub>day</sub></div>
                <div className="nd-intro-stat-label">To First Milestone</div>
              </div>
              <div className="nd-intro-divider" />
              <div className="nd-intro-stat">
                <div className="nd-intro-stat-num">1<sub>dev</sub></div>
                <div className="nd-intro-stat-label">Full Ownership</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CLIENT LOGOS (DUAL ROW TICKER) ── */}
        <section className="nd-logos">
          <div className="nd-logos-inner">
            <p className="nd-logos-title">Tech Stack We Ship With</p>
          </div>
          
          <div className="nd-ticker-container">
            {/* Row 1: Left-to-Right */}
            <div className="nd-ticker-row">
              <div className="nd-ticker-track-lr">
                {[...techRow1, ...techRow1, ...techRow1, ...techRow1].map((t, i) => (
                  <div key={i} className="nd-tech-card">
                    {t.icon}
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Row 2: Right-to-Left */}
            <div className="nd-ticker-row">
              <div className="nd-ticker-track-rl">
                {[...techRow2, ...techRow2, ...techRow2, ...techRow2].map((t, i) => (
                  <div key={i} className="nd-tech-card">
                    {t.icon}
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. WHY DIFFERENT (3 pillars) ── */}
        <section className="nd-achievements">
          <div className="nd-achievements-inner">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="nd-section-tag">WHY THIS IS DIFFERENT</div>
              <h2 className="nd-section-h2">Why founders work directly with a builder, not an agency</h2>
              <p className="nd-section-sub">No agency overhead, no account manager overhead, no juniors assigned. Just the person writing the code.</p>
            </div>
            <div ref={statsRef} className="nd-stats-grid">
              {/* Card 1 */}
              <div className="nd-stat-card">
                <div style={{ width: 48, height: 48, background: '#FAF5EF', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3D2314', flexShrink: 0 }}><IconAI /></div>
                <div>
                  <div className="nd-stat-label">Direct Communication</div>
                  <p className="nd-stat-desc">No account manager translating your requirements to a dev team. You talk to the person writing the code — every question answered same day.</p>
                </div>
              </div>
              
              {/* Card 2 (Highlighted Card) */}
              <div className="nd-stat-card nd-stat-card-highlight">
                <div style={{ width: 48, height: 48, background: '#FAF5EF', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3D2314', flexShrink: 0 }}><IconCode /></div>
                <div>
                  <div className="nd-stat-label">Full Ownership, One Person</div>
                  <p className="nd-stat-desc">From database schema to deployment, one person owns the whole stack. No handoffs between teams, no context lost in translation.</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="nd-stat-card">
                <div style={{ width: 48, height: 48, background: '#FAF5EF', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3D2314', flexShrink: 0 }}><IconDevOps /></div>
                <div>
                  <div className="nd-stat-label">Modern Stack, Built for Speed</div>
                  <p className="nd-stat-desc">Next.js, FastAPI, Supabase — chosen for fast iteration, not legacy overhead. What takes agencies weeks often ships here in days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. EXPERTISE / SERVICES (Tabbed) ── */}
        <section className="nd-expertise">
          <div className="nd-expertise-inner">
            <div className="nd-expertise-header">
              <div>
                <div className="nd-section-tag" style={{ color: '#2E29FF' }}>✦ OUR EXPERTISE ✦</div>
                <h2 className="nd-section-h2" style={{ fontSize: '40px', fontWeight: '800', color: '#0A0A2E', lineHeight: 1.2 }}>Find The Right<br />Solutions For You</h2>
              </div>
              <div>
                <p className="nd-expertise-desc">
                  NOVADESK is a full-service software and AI development studio trusted by startups, scale-ups, and enterprises across India, the USA, UK, UAE, and Australia.
                </p>
                <p className="nd-expertise-desc">
                  From custom software development and mobile apps to generative AI solutions and enterprise platforms, we cover every layer of the product design, development, QA, and deployment so you get one reliable partner from idea to launch.
                </p>
              </div>
            </div>

            <div className="nd-services-wrapper">
              <nav className="nd-service-nav">
                {Object.entries(tabs).map(([key, t]) => (
                  <button key={key} className={`nd-tab-btn ${activeTab === key ? 'active' : ''}`} onClick={() => setActiveTab(key)}>
                    {t.icon} {t.label}
                  </button>
                ))}
              </nav>
              <div className="nd-service-content">
                {Object.entries(tabs).map(([key, t]) => (
                  <article key={key} className={`nd-service-article ${activeTab === key ? 'active' : ''}`}>
                    <h2 className="nd-service-title">{t.title}</h2>
                    <p className="nd-service-desc-detail">{t.desc}</p>
                    <div className="nd-service-links">
                      {t.links.map((l, i) => (
                        <div key={i} className="nd-service-bullet-item">
                          <span className="nd-bullet-dot" />
                          <span>{l}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="nd-expertise-cta">
              <h3>Explore Our Exceptional Services!</h3>
              <Link to="/contact-us" className="nd-process-cta-btn" style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}>
                Schedule a Free Consultation ↗
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. PROJECT LOG ── */}
        

        {/* ── 7. HOW I WORK ── */}
        <section id="how-i-work" className="nd-process">
          <div className="nd-process-inner">
            <div className="nd-process-header-grid">
              <div className="nd-process-header-left">
                <div className="nd-process-tag">✦ Our Process ✦</div>
                <h2 className="nd-process-h2">You See Working Software Every Week.</h2>
              </div>
              <div className="nd-process-header-right">
                <p className="nd-process-sub">
                  No six-month silence followed by a big reveal. No "we're working on it" updates. Every week — real software. Real feedback. Real progress. That's how we ship products without surprises.
                </p>
              </div>
            </div>
            
            <div className="nd-process-steps">
              {/* Step 1 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Discovery<br />&amp; Planning</h3>
                  <div className="nd-step-badge">01</div>
                </div>
                <ul className="nd-step-list">
                  <li>We ask hard questions before we write a single line of code.</li>
                  <li>What are you building?</li>
                  <li>Who is it for?</li>
                  <li>What does success look like in 90 days?</li>
                  <li>Most problems in software happen here — because nobody asked.</li>
                  <li>We ask.</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Design<br />&amp; Prototyping</h3>
                  <div className="nd-step-badge">02</div>
                </div>
                <ul className="nd-step-list">
                  <li>You see exactly what we're building before we build it.</li>
                  <li>Wireframes.</li>
                  <li>Clickable prototypes.</li>
                  <li>Final screens.</li>
                  <li>You approve every screen.</li>
                  <li>Interactive user testing.</li>
                  <li>Design system consistency.</li>
                  <li>Clear design documentation.</li>
                  <li>No surprises when development starts.</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Development<br />&amp; QA</h3>
                  <div className="nd-step-badge">03</div>
                </div>
                <ul className="nd-step-list">
                  <li>Weekly sprints.</li>
                  <li>Every Friday — a working demo.</li>
                  <li>Not a status update.</li>
                  <li>Not a slide deck.</li>
                  <li>Code reviewed every sprint.</li>
                  <li>Performance checks.</li>
                  <li>Working software you can click through.</li>
                  <li>Every feature tested before it reaches your users.</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Launch<br />&amp; Scale</h3>
                  <div className="nd-step-badge">04</div>
                </div>
                <ul className="nd-step-list">
                  <li>Most agencies disappear at go-live. We don't.</li>
                  <li>App store submissions.</li>
                  <li>Infrastructure.</li>
                  <li>New features.</li>
                  <li>Monitor, measure, improve.</li>
                  <li>We grow with your business.</li>
                  <li>Real user feedback.</li>
                  <li>We stay until it works in the real world — not just in the demo.</li>
                </ul>
              </div>
            </div>

            {/* Section footer profile & CTA */}
            <div className="nd-process-footer">
              <div className="nd-process-profile">
                <img src="/hero-my-image.png" alt="Harsh Prateek" className="nd-process-avatar" />
                <div className="nd-process-profile-info">
                  <h4>Harsh Prateek</h4>
                  <p>Founder, NOVADESK</p>
                </div>
              </div>
              <Link to="/contact-us" className="nd-process-cta-btn">
                Schedule a Free Consultation ↗
              </Link>
            </div>
          </div>
        </section>

        {/* ── 8. COMPARISON TABLE ── */}
        <section className="nd-compare">
          <div className="nd-compare-inner" style={{ textAlign: 'center' }}>
            <div className="nd-section-tag">WHY NOT A BIG AGENCY</div>
            <h2 className="nd-section-h2">Solo builder vs. a traditional agency</h2>
            <p className="nd-section-sub">A genuine tradeoff — not a domination claim. For founders who want speed and direct access, this is the right fit.</p>
            <div className="nd-compare-table-wrapper">
              <table className="nd-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Traditional Agency</th>
                    <th>NOVADESK</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Communication', 'Through an account manager', 'Direct with the person coding'],
                    ['Team', 'Rotates — juniors often assigned', 'Same person, start to finish'],
                    ['Speed', 'Slowed by internal handoffs', 'No handoffs — decisions happen instantly'],
                    ['Cost', 'Overhead of PM + sales + juniors', 'You pay for the build, not the overhead'],
                    ['Attention', 'One of many active accounts', 'Focused — limited projects per cycle'],
                  ].map(([f, a, n], i) => (
                    <tr key={i}>
                      <td>{f}</td>
                      <td>{a}</td>
                      <td>{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="nd-compare-note">* Some businesses genuinely need the safety net of multiple team members — this positions NOVADESK as the better fit for founders who want speed and direct access.</p>
          </div>
        </section>

        {/* ── 8.5 RECOGNIZED & FEATURED ── */}
        <section className="nd-recognized">
          <div className="nd-recognized-inner">
            <div className="nd-recognized-tag">✦ Recognized &amp; Featured ✦</div>
            <h2 className="nd-recognized-title">Recognized For Building Products That Move The Needle</h2>
            <p className="nd-recognized-sub">
              Our work building custom products and AI features has earned recognition from leading technology, business, and startup platforms across India, the US, the UK, and beyond.
            </p>
            
            <div className="nd-featured-network">
              {/* Dynamic Connecting Curved Lines */}
              <svg className="nd-network-lines" viewBox="0 0 900 420" fill="none" stroke="rgba(46, 41, 255, 0.08)" strokeWidth="2">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 2 L 6 5 L 0 8 z" fill="rgba(46, 41, 255, 0.18)" />
                  </marker>
                </defs>
                <path d="M 420 180 Q 360 120 350 85" markerEnd="url(#arrow)" />
                <path d="M 480 180 Q 540 120 550 85" markerEnd="url(#arrow)" />
                <path d="M 400 210 Q 300 210 205 175" markerEnd="url(#arrow)" />
                <path d="M 500 210 Q 600 210 695 175" markerEnd="url(#arrow)" />
                <path d="M 410 240 Q 370 270 362 280" markerEnd="url(#arrow)" />
                <path d="M 490 240 Q 530 270 538 280" markerEnd="url(#arrow)" />
                <path d="M 450 260 L 450 338" markerEnd="url(#arrow)" />
              </svg>
              
              {/* Central Branding Node */}
              <div className="nd-network-center">
                <div className="nd-network-center-inner">
                  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 26L18 14L12 11L6 26Z" fill="#2E29FF" />
                    <path d="M12 26L24 14L18 11L12 26Z" fill="#2E29FF" opacity="0.8" />
                    <path d="M18 26L30 14L24 11L18 26Z" fill="#2E29FF" opacity="0.5" />
                  </svg>
                </div>
              </div>
              
              {/* Media Nodes */}
              <div className="nd-network-card nd-node-yahoo">
                <span style={{ color: '#6001d2', fontWeight: '900', fontSize: '20px', fontStyle: 'italic', fontFamily: 'sans-serif' }}>yahoo!</span>
              </div>
              
              <div className="nd-network-card nd-node-fortune">
                <span style={{ color: '#000000', fontWeight: '800', fontSize: '18px', fontFamily: 'serif', letterSpacing: '1px' }}>FORTUNE</span>
              </div>
              
              <div className="nd-network-card nd-node-aol">
                <span style={{ color: '#000000', fontWeight: '800', fontSize: '22px', fontFamily: 'sans-serif', letterSpacing: '-0.5px' }}>Aol<span style={{ color: '#2E29FF' }}>.</span></span>
              </div>
              
              <div className="nd-network-card nd-node-forbes">
                <span style={{ color: '#005080', fontWeight: '800', fontSize: '20px', fontFamily: 'serif' }}>Forbes</span>
              </div>
              
              <div className="nd-network-card nd-node-techcrunch">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'sans-serif' }}>
                  <svg width="22" height="14" viewBox="0 0 22 14" fill="#02B159" style={{ flexShrink: 0 }}>
                    <rect width="6" height="14" />
                    <rect x="8" width="14" height="4" />
                    <rect x="12" y="5" width="10" height="4" />
                  </svg>
                  <span style={{ color: '#000000', fontWeight: '800', fontSize: '15px', letterSpacing: '-0.2px' }}>TechCrunch</span>
                </div>
              </div>
              
              <div className="nd-network-card nd-node-ani">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <span style={{ color: '#000000', fontWeight: '900', fontSize: '18px', letterSpacing: '1.2px', fontFamily: 'serif', lineHeight: 1 }}>ANI</span>
                  <span style={{ color: '#6B7280', fontSize: '7.5px', fontWeight: '600', textTransform: 'uppercase', whiteSpace: 'nowrap', marginTop: '3px', letterSpacing: '0.2px' }}>South Asia's Leading News Agency</span>
                </div>
              </div>
              
              <div className="nd-network-card nd-node-yourstory">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #FF3E3E', padding: '3px 10px', borderRadius: '4px', background: '#FFF3F3' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF3E3E" strokeWidth="2.5" style={{ marginTop: '-1px' }}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span style={{ color: '#FF3E3E', fontWeight: '800', fontSize: '12px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>YOURSTORY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FAQ ── */}
        <section className="nd-faq">
          <div className="nd-faq-inner">
            <div className="nd-faq-tag">✦ FAQs ✦</div>
            <h2 className="nd-faq-title">Your Software Development Questions, Answered</h2>
            <div className="nd-faq-list">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} open={activeFaq === i} onToggle={() => setActiveFaq(activeFaq === i ? null : i)} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Link to="/contact-us" className="nd-faq-cta-btn">
                Still have questions? Talk to Us ↗
              </Link>
            </div>
          </div>
        </section>

        

      </div>
    </>
  );
}
