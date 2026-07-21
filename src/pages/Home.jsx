import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogService } from '../services/blogService';

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

// ─── TYPING ANIMATION FOR HERO BLUE SUBHEADING ─────────────────────────────────
const heroTypingServices = [
  'Full-Stack & AI Studio',
  'Web App Development',
  'Custom SaaS Platforms',
  'Mobile App Engineering',
  'GenAI & Chatbot Solutions',
  'UI/UX & Product Design',
  'Enterprise Software Systems'
];

function TypingHeading() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Cursor Blink
  useEffect(() => {
    const timeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 450);
    return () => clearInterval(timeout);
  }, []);

  // Typing logic
  useEffect(() => {
    if (subIndex === heroTypingServices[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 2400);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % heroTypingServices.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <h2 className="nd-h1-blue">
      <span>{heroTypingServices[index].substring(0, subIndex)}</span>
      <span className={`nd-typing-cursor ${blink ? 'blink' : ''}`}>|</span>
    </h2>
  );
}

// ─── 3D TECH CARD COMPONENT ─────────────────────────────────────────────
const techCategoriesData = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['FastAPI', 'Node.js', 'Python'] },
  { category: 'Database', items: ['Supabase', 'PostgreSQL', 'pgvector'] },
  { category: 'AI & ML', items: ['Claude API', 'OpenAI API', 'RAG architectures', 'custom LLM integrations'] },
  { category: 'Cloud & DevOps', items: ['Vercel', 'AWS', 'CI/CD pipelines'] },
  { category: 'Mobile & Design', items: ['React Native', 'Flutter', 'Figma', 'Modern UI systems'] }
];

const TechCard3D = ({ tech, index }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)');
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(14px) scale3d(1.025, 1.025, 1.025)`);
    setGlow({
      x: ((x / rect.width) * 100).toFixed(1),
      y: ((y / rect.height) * 100).toFixed(1),
      opacity: 1
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)');
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  const categoryIcons = [
    // 01: Frontend
    <svg key="fe" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
    // 02: Backend
    <svg key="be" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>,
    // 03: Database
    <svg key="db" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
    // 04: AI & ML
    <svg key="ai" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path><circle cx="12" cy="12" r="4"></circle></svg>,
    // 05: Cloud & DevOps
    <svg key="cloud" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
    // 06: Mobile & Design
    <svg key="mobile" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  ];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="nd-tech-3d-card-wrapper"
    >
      <div
        className={`nd-tech-3d-card ${isHovered ? 'hovered' : ''}`}
        style={{ transform }}
      >
        <div
          className="nd-tech-3d-glow"
          style={{
            background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(46, 41, 255, 0.18), transparent 70%)`,
            opacity: glow.opacity
          }}
        />

        <div className="nd-tech-3d-orb">
          0{index + 1}
        </div>

        <div className="nd-tech-3d-header">
          <div className="nd-tech-3d-icon-badge">
            {categoryIcons[index % categoryIcons.length]}
          </div>
          <h3 className="nd-tech-3d-title">{tech.category}</h3>
        </div>

        <div className="nd-tech-3d-list">
          {tech.items.map((item, idx) => (
            <div key={idx} className="nd-tech-3d-pill">
              <span className="nd-tech-pill-dot" />
              {item}
            </div>
          ))}
        </div>

        <div className="nd-tech-3d-bottom-glow" />
      </div>
    </div>
  );
};

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
  const [activeTab, setActiveTab] = useState('ai');
  const [activeFaq, setActiveFaq] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [activeTechFilter, setActiveTechFilter] = useState('All');
  
  // ─── BLOG SLIDER STATE & METHODS ───
  const [blogs, setBlogs] = useState([]);
  const blogSliderRef = useRef(null);

  useEffect(() => {
    blogService.getAllBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  const scrollBlogsLeft = () => {
    if (blogSliderRef.current) {
      blogSliderRef.current.scrollBy({ left: -412, behavior: 'smooth' });
    }
  };

  const scrollBlogsRight = () => {
    if (blogSliderRef.current) {
      blogSliderRef.current.scrollBy({ left: 412, behavior: 'smooth' });
    }
  };

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
      label: 'AI & ML Integration',
      title: 'AI & Machine Learning Integration',
      desc: 'AI is only useful when it\'s solving a real problem — not when it\'s bolted onto a product as a buzzword. We build LLM-powered features, intelligent automation, and custom AI systems using models like Claude and OpenAI, integrated directly into your product\'s workflow.',
      whothisfor: 'Businesses that want AI features that genuinely improve the product experience, not just check a marketing box.',
      links: [
        { label: 'Custom Chatbots & Conversational AI', desc: 'Trained on your business context for accurate, relevant responses.' },
        { label: 'Retrieval-Augmented Generation (RAG)', desc: 'Accurate, source-grounded AI responses using your own data.' },
        { label: 'Workflow Automation', desc: 'Removes repetitive manual work from your team\'s day.' },
        { label: 'Document Processing Pipelines', desc: 'Intelligent extraction and analysis of documents at scale.' },
        { label: 'AI-Assisted Search & Recommendations', desc: 'Customized user suggestions and intelligent search.' },
        { label: 'Responsible AI Deployment', desc: 'Safety, data privacy, and compliance built in from the start.' }
      ]
    },
    web: {
      icon: <IconWeb />,
      label: 'Web Development',
      title: 'Web Development',
      desc: 'Your website is often the first real interaction a potential customer has with your business — and in most cases, it\'s doing that job 24/7. We build custom websites and web applications that are fast, SEO-friendly, and designed to turn visitors into customers.',
      whothisfor: 'Businesses that need a website that actually works for their sales and marketing funnel, not just a digital business card.',
      links: [
        { label: 'Custom-Coded Websites', desc: 'Built on Next.js — not template-based, not generic.' },
        { label: 'Responsive Design', desc: 'Works cleanly across mobile, tablet, and desktop.' },
        { label: 'SEO-Friendly Architecture', desc: 'Proper heading structure, fast load times, clean URLs from day one.' },
        { label: 'Content Management Systems', desc: 'Update your own site without calling us for every text change.' },
        { label: 'Conversion-Optimised Landing Pages', desc: 'Built specifically for conversion, not just information.' },
        { label: 'Multi-Language & Multi-Region Support', desc: 'For businesses operating across markets.' }
      ]
    },
    saas: {
      icon: <IconCloud />,
      label: 'SaaS Development',
      title: 'SaaS Product Development',
      desc: 'Building a SaaS product is different from building a website — it needs to handle multiple customers, subscription logic, permissions, and scale, all while staying maintainable as new features get added. We build SaaS platforms from MVP through to full multi-tenant architecture.',
      whothisfor: 'Founders building a SaaS product from scratch, and existing SaaS businesses that need to re-architect for scale.',
      links: [
        { label: 'Multi-Tenant Architecture', desc: 'Scales from your first customer to your thousandth.' },
        { label: 'Subscription Billing & Payments', desc: 'Payment gateway integration and subscription logic.' },
        { label: 'Role-Based Access Control', desc: 'Team and organisation structures built right.' },
        { label: 'Admin Dashboards & Analytics', desc: 'For both you and your end customers.' },
        { label: 'API-First Architecture', desc: 'Integrate with the tools your customers already use.' },
        { label: 'Scalable Backend Infrastructure', desc: 'Grows with your user base instead of breaking under it.' }
      ]
    },
    mobile: {
      icon: <IconMobile />,
      label: 'App Development',
      title: 'Mobile App Development',
      desc: 'A slow, buggy app doesn\'t just frustrate users — it actively pushes them toward your competitors. We build native and cross-platform mobile apps that feel smooth, load fast, and are engineered for real-world usage patterns, not just demo-day polish.',
      whothisfor: 'Startups launching their first app, and established businesses looking to extend their product into mobile.',
      links: [
        { label: 'Native iOS & Android', desc: 'Where performance demands it — built with Swift and Kotlin.' },
        { label: 'Cross-Platform (React Native, Flutter)', desc: 'Faster, cost-efficient builds across both platforms.' },
        { label: 'Offline-First Architecture', desc: 'Apps that work in low-connectivity environments.' },
        { label: 'Push Notifications & In-App Purchases', desc: 'Third-party SDK integrations done properly.' },
        { label: 'App Store & Play Store Submission', desc: 'Including compliance reviews and metadata.' },
        { label: 'Post-Launch Monitoring', desc: 'Performance issues caught before users complain.' }
      ]
    },
    api: {
      icon: <IconDevOps />,
      label: 'API & Integrations',
      title: 'API Development & Integration',
      desc: 'Modern software rarely works in isolation — your product needs to talk to payment providers, CRMs, marketing tools, and internal systems. We build robust, well-documented APIs and handle integrations so those connections are reliable instead of fragile.',
      whothisfor: 'Businesses that need their software ecosystem to actually work together instead of existing as disconnected tools.',
      links: [
        { label: 'RESTful & GraphQL APIs', desc: 'Clean design and development for any use case.' },
        { label: 'Third-Party Integrations', desc: 'Payment gateways, CRMs, marketing platforms, communication tools.' },
        { label: 'API Documentation', desc: 'So your team or external partners can work with your system easily.' },
        { label: 'Auth & Security Best Practices', desc: 'OAuth, JWT, rate limiting — done right.' },
        { label: 'Webhook Systems', desc: 'Real-time data sync between platforms.' },
        { label: 'Legacy System Integration', desc: 'Modernising older infrastructure without full rebuilds.' }
      ]
    },
    software: {
      icon: <IconCode />,
      label: 'Cloud & DevOps',
      title: 'Cloud & DevOps',
      desc: 'The best product in the world doesn\'t matter if it\'s slow, insecure, or goes down during your busiest hour. We handle deployment, hosting, and infrastructure so your product stays fast, secure, and online — without you needing to think about servers.',
      whothisfor: 'Any business running a live product that needs to stay reliable as usage grows.',
      links: [
        { label: 'Cloud Infrastructure Setup', desc: 'AWS, Vercel, and other platforms based on your needs.' },
        { label: 'CI/CD Pipeline Setup', desc: 'Smooth, low-risk deployments every time.' },
        { label: 'Performance Monitoring & Alerting', desc: 'Know about issues before your users do.' },
        { label: 'Security Best Practices', desc: 'Encrypted data, secure environment config, regular audits.' },
        { label: 'Scalable Infrastructure Design', desc: 'Traffic spikes don\'t take your product down.' },
        { label: 'Cost Optimisation', desc: 'Cloud bill doesn\'t grow faster than your business.' }
      ]
    }
  };

  const faqs = [
    { q: 'What services does NovaDesk offer?', a: 'We offer web development, app development, SaaS product development, AI/ML integration, UI/UX design, API development, cloud deployment, and ongoing maintenance — all under one team.' },
    { q: 'How long does a typical project take?', a: 'Timelines vary by scope. A basic website may take 2–4 weeks, a mobile app typically takes 6–12 weeks, and a full SaaS product can take 2–4 months depending on complexity. You\'ll get a clear, honest timeline during the proposal stage — not a vague estimate.' },
    { q: 'Do you work with startups, or only established businesses?', a: 'Both. We work with early-stage founders building their first MVP as well as established local and regional businesses looking to build or upgrade their digital presence.' },
    { q: 'Can you integrate AI features into an existing product?', a: 'Yes — we specialize in adding AI/ML capabilities like chatbots, automation, and intelligent search into products that already exist, without requiring a full rebuild.' },
    { q: 'Do you offer support after the project is delivered?', a: 'Yes. We offer maintenance and support arrangements to keep your product running smoothly, secure, and up to date after launch.' },
    { q: 'How much does a project cost?', a: 'Pricing depends on scope, complexity, and timeline. We don\'t publish flat rates because that usually leads to either underscoping or overpaying. Reach out for a free consultation and you\'ll get a clear, itemized quote based on your actual requirements.' },
    { q: 'Do you work with international clients?', a: 'Yes, we work with clients across India as well as international businesses looking for quality engineering at competitive rates.' },
    { q: 'What industries do you specialize in?', a: "We've worked across restaurants, real estate, EdTech, healthcare, e-commerce, and professional services, along with broader startup and SaaS founder projects." },
    { q: 'Can NovaDesk handle both design and development?', a: 'Yes — our team covers UI/UX design and full-stack development under one roof, so your project doesn\'t get split across disconnected vendors.' },
    { q: 'What technologies do you use?', a: 'We primarily work with Next.js, React, TypeScript, FastAPI, Supabase, and modern AI APIs like Claude and OpenAI — chosen based on what fits your specific project.' },
    { q: 'Do you sign NDAs before starting a project?', a: "Yes, we're happy to sign NDAs to protect your idea and business information before any detailed discussion begins." },
    { q: 'How do I get started?', a: 'Book a free discovery call through our contact form, and we\'ll walk you through scoping, timeline, and next steps — no pressure, no obligation.' },
    { q: 'Do you build MVPs for startups?', a: 'Yes, MVP development is one of our core specialties. We help founders go from idea to a working, launchable product without over-building features nobody\'s asked for yet.' },
    { q: 'What makes NovaDesk different from other agencies?', a: "We combine full-stack development with real AI/ML expertise, direct communication (no account-manager layers), and honest scoping instead of inflated promises. We're a focused team, not a large outsourcing operation — and for many clients, that's exactly what they're looking for." },
    { q: 'Can I request a specific tech stack?', a: "Absolutely. While we have our preferred stack for speed and reliability, we're flexible and can work with your existing systems and technical requirements." },
    { q: 'How involved will I need to be during the project?', a: "As much or as little as you'd like — but we recommend regular check-ins so you can give feedback early, when it's cheap to make changes, rather than after launch." },
    { q: 'What happens if my requirements change mid-project?', a: "Requirements evolving is normal, especially for new products. We build in structured check-ins specifically so scope changes can be discussed and priced transparently, instead of causing surprise delays or costs later." },
    { q: 'Do you provide source code and documentation?', a: "Yes. You own your codebase, and we provide documentation so your product isn't a black box that only we can maintain." },
    { q: 'Can you work with a limited budget for an early-stage startup?', a: "Yes — we're happy to have an honest conversation about what's realistically achievable within your budget, and help you prioritize what actually needs to be in a first version." },
    { q: 'How do you ensure the quality of what you build?', a: 'We test throughout development, not just at the end — functionality, performance, and security checks happen within every sprint, so issues get caught early instead of surfacing after launch.' },
    { q: 'Do you offer ongoing product strategy advice, or just development?', a: "Both. Many of our clients treat us as a technical thinking partner, not just an execution team — we're happy to weigh in on product decisions, not just build what's specified." },
    { q: 'What if I only need one part of the process, like design or just development?', a: "That's completely fine. While we offer end-to-end service, we also work on standalone design, standalone development, or specific technical problems if that's what you need." },
  ];

  const jsonLdSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site",
      "logo": "https://www.novadesk.site/favicon.svg",
      "description": "NovaDesk is a premier software engineering agency providing highly optimized offshore teams for custom Web apps, mobile systems, and AI deployments.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://www.linkedin.com/company/novadesk-solutions/",
        "https://www.instagram.com/novadesk_officials_?igsh=MW5yZGtrbzg5aXNscg==",
        "https://www.facebook.com/share/1BfvnjhFV9/",
        "https://github.com/novadesksite-001"
      ],
      "founder": {
        "@type": "Person",
        "name": "Harsh Prateek",
        "jobTitle": "Founder & Lead Engineer"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <>
      <SEO 
        title="India's Premier Custom Software & AI Development Studio"
        description="Partner with Novadesk, India's leading software development agency. We build scalable custom web apps, SaaS platforms, mobile solutions, and enterprise AI software."
        keywords="Top software development agency in India, AI app developers, custom SaaS development, Web app development company, hire offshore developers, Novadesk"
        url="/"
        schema={jsonLdSchema}
      />
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
          grid-template-columns: 1.15fr 0.85fr; 
          gap: 40px; 
          align-items: center; 
          position: relative;
          z-index: 2;
        }

        /* LEFT SIDE */
        .nd-hero-left { padding-bottom: 60px; }
        .nd-eyebrow { display:inline-flex; align-items:center; gap:8px; background:rgba(46,41,255,0.08); border:1px solid rgba(46,41,255,0.2); padding:8px 18px; border-radius:40px; font-size:11.5px; font-weight:700; color:#2E29FF; letter-spacing:0.8px; text-transform:uppercase; margin-bottom:28px; }
        .nd-h1 { font-size:56px; line-height:1.15; letter-spacing:-1.5px; color:#0A0A2E; font-weight:800; margin-bottom:10px; }
        .nd-h1-blue { font-size:46px; line-height:1.2; letter-spacing:-1.2px; color:#2E29FF; font-weight:800; margin-bottom:36px; display:block; white-space:nowrap; }
        .nd-typing-cursor { display: inline-block; margin-left: 4px; color: #2E29FF; font-weight: 300; }
        .nd-typing-cursor.blink { opacity: 0; }
        .nd-subtext { font-size:16.5px; line-height:1.75; color:#4B5563; max-width:530px; margin-bottom:24px; font-weight:400; }
        .nd-subtext-sm { font-size:14.5px; line-height:1.7; color:#6B7280; max-width:510px; margin-bottom:24px; font-weight:400; }
        .nd-industries { font-size:14px; color:#6B7280; margin-bottom:0px; font-weight:400; line-height:1.7; max-width:530px; }
        .nd-industries strong { color:#0A0A2E; font-weight:600; }
        .nd-cta-row { display:flex; gap:16px; flex-wrap:wrap; margin-top:40px; margin-bottom:48px; align-items:center; }
        .nd-btn-primary { display:inline-flex; align-items:center; gap:8px; padding:16px 34px; background:#2E29FF; color:#fff; border-radius:8px; font-weight:700; font-size:15.5px; border:none; cursor:pointer; transition:all .25s; text-decoration:none; letter-spacing:0.2px; box-shadow:0 8px 24px rgba(46,41,255,0.22); }
        .nd-btn-primary:hover { background:#1a16dd; transform:translateY(-2px); box-shadow:0 12px 30px rgba(46,41,255,0.32); }
        .nd-btn-outline { display:inline-flex; align-items:center; gap:8px; padding:16px 30px; background:transparent; color:#2E29FF; border-radius:8px; font-weight:700; font-size:15.5px; border:2px solid rgba(46,41,255,0.3); cursor:pointer; transition:all .25s; text-decoration:none; }
        .nd-btn-outline:hover { border-color:#2E29FF; background:#EEF0FF; }
        .nd-rating-row { display:flex; align-items:center; gap:16px; margin-top:10px; }
        .nd-avatars { display:flex; align-items:center; }
        .nd-avatar { width:38px; height:38px; border-radius:50%; border:2px solid #fff; background:#E5E7EB; margin-left:-10px; display:flex; align-items:center; justify-content:center; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1); }
        .nd-avatars .nd-avatar:first-child { margin-left:0; }
        .nd-avatar-img { width:100%; height:100%; object-fit:cover; display:block; }
        .nd-stars { display:flex; gap:3px; color:#F59E0B; margin-bottom:3px; }
        .nd-rating-text { font-size:14px; font-weight:700; color:#0A0A2E; line-height:1.2; }
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
        .nd-achievements-inner { max-width: 1500px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 2; }
        .nd-section-tag { display:inline-flex; align-items:center; justify-content:center; gap:10px; font-size:14px; font-weight:700; color:#2E29FF; text-transform:uppercase; letter-spacing:1px; margin:0 auto 12px auto; text-align:center; }
        .nd-section-tag::before, .nd-section-tag::after { content:'✦'; font-size:12px; color:#FFB6DB; }
        .nd-section-h2 { font-size:40px; font-weight:800; color:#0A0A2E; margin-bottom:16px; text-align:center; }
        .nd-section-sub { font-size:16px; color:#6B7280; font-weight:400; max-width:680px; margin:0 auto; line-height:1.6; text-align:center; display:block; }
        .nd-why-choose-slider-wrap {
          width: 100%;
          position: relative;
          padding: 30px 0;
          margin-top: 40px;
          overflow: hidden;
          white-space: nowrap;
        }
        .nd-why-choose-slider-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: nd-ticker 35s linear infinite;
        }
        .nd-why-choose-slider-wrap:hover .nd-why-choose-slider-track {
          animation-play-state: paused;
        }
        @keyframes nd-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .nd-why-choose-card-container {
          width: 400px;
          flex-shrink: 0;
        }

        /* ── INDUSTRIES SLIDER (REVERSE TICKER) ── */
        .nd-industries-slider-wrap {
          width: 100%;
          position: relative;
          padding: 30px 0;
          margin-top: 40px;
          overflow: hidden;
          white-space: nowrap;
        }
        .nd-industries-slider-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: nd-ticker-reverse 35s linear infinite;
        }
        .nd-industries-slider-wrap:hover .nd-industries-slider-track {
          animation-play-state: paused;
        }
        @keyframes nd-ticker-reverse {
          0% { transform: translateX(calc(-50% - 12px)); }
          100% { transform: translateX(0); }
        }
        .nd-industry-card-container {
          width: 400px;
          flex-shrink: 0;
        }

        /* ── PORTFOLIO / PRODUCT CATALOG (NOW BLOG) ── */
        .nd-portfolio {
          background-color: #2E29FF;
          background-image: linear-gradient(135deg, #2E29FF 0%, #150E63 100%);
          padding: 100px 0;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .nd-portfolio-card-link {
          text-decoration: none !important;
          color: inherit !important;
          display: block;
          height: 100%;
        }
        .nd-portfolio::before {
          content: '';
          position: absolute;
          top: -150px; right: -150px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(46, 41, 255, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .nd-portfolio-inner {
          max-width: 1330px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }
        .nd-portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
          text-align: left;
        }
        .nd-portfolio-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 14px; font-weight: 700; color: #FFB6DB;
          text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;
        }
        .nd-portfolio-h2 {
          font-size: 40px; font-weight: 800; color: white; margin-bottom: 16px;
        }
        .nd-portfolio-sub {
          font-size: 16px; color: rgba(255,255,255,0.8); max-width: 680px; line-height: 1.6; text-align: left;
        }
        .nd-portfolio-nav-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 8px;
        }
        .nd-slider-nav-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .nd-slider-nav-btn:hover {
          background: white;
          color: #2E29FF;
          border-color: white;
          transform: scale(1.05);
        }
        .nd-portfolio-track-wrap {
          display: flex;
          gap: 32px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Firefox */
          padding: 20px 0;
        }
        .nd-portfolio-track-wrap::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .nd-portfolio-card-wrap {
          scroll-snap-align: start;
          flex: 0 0 380px; /* fixed width on desktop */
        }
        .nd-portfolio-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.35s ease;
          backdrop-filter: blur(10px);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .nd-portfolio-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.06);
        }
        .nd-portfolio-img-wrap {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        .nd-portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .nd-portfolio-card:hover .nd-portfolio-img {
          transform: scale(1.05);
        }
        .nd-portfolio-info {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .nd-portfolio-title {
          font-size: 20px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .nd-portfolio-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .nd-portfolio-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .nd-portfolio-tech span {
          font-size: 11px;
          font-weight: 700;
          color: #FFB6DB;
          background: rgba(255, 182, 219, 0.1);
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .nd-portfolio-meta {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nd-portfolio-meta span.dot {
          width: 4px;
          height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
        }
        .nd-portfolio-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 18px;
        }
        .nd-portfolio-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nd-portfolio-author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          object-fit: cover;
        }
        .nd-portfolio-author span {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }
        .nd-portfolio-readmore {
          font-size: 14px;
          font-weight: 700;
          color: #FFB6DB;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.25s ease;
        }
        .nd-portfolio-readmore:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .nd-portfolio-card-wrap {
            flex: 0 0 340px;
          }
        }
        @media (max-width: 768px) {
          .nd-portfolio-slider-wrap {
            width: 100vw !important;
            margin-left: -40px !important;
            margin-right: -40px !important;
          }
          .nd-portfolio-track-wrap {
            padding: 20px 40px !important;
          }
          .nd-portfolio-card-wrap {
            flex: 0 0 calc(100vw - 80px) !important;
          }
        }
        @media (max-width: 640px) {
          .nd-portfolio-slider-wrap {
            margin-left: -20px !important;
            margin-right: -20px !important;
          }
          .nd-portfolio-track-wrap {
            padding: 20px 20px !important;
          }
          .nd-portfolio-card-wrap {
            flex: 0 0 calc(100vw - 40px) !important;
          }
        }

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
        .nd-service-links { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: rgba(46, 41, 255, 0.08); border: 1px solid rgba(46, 41, 255, 0.08); border-radius: 12px; overflow: hidden; margin-top: 24px; }
        .nd-service-link-card { padding: 16px; background: #fff; text-decoration: none; display: flex; flex-direction: column; transition: background 0.15s; }
        .nd-service-link-card:last-child:nth-child(odd) { grid-column: 1 / -1; }
        .nd-service-link-card:hover { background: #F8F9FF; }
        .nd-service-link-title { font-size: 15px; font-weight: 700; color: #0A0A2E; margin-bottom: 4px; transition: color 0.15s; }
        .nd-service-link-card:hover .nd-service-link-title { color: #2E29FF; }
        .nd-service-link-desc { font-size: 13px; color: #6B7280; line-height: 1.4; font-weight: 400; }
        
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
        .nd-process-steps { display:grid; grid-template-columns:repeat(5, 1fr); gap:16px; }
        .nd-step { border:1.5px solid rgba(255, 255, 255, 0.35); background:rgba(255, 255, 255, 0.02); border-radius:20px; padding:24px 18px; display:flex; flex-direction:column; gap:20px; transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1); text-align:left; }
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

        /* ── FAQ ── (Moved to index.css) */

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

        /* ── WHY NOVADESK EXISTS STANDALONE ── */
        .nd-why-exist {
          background-color: #2E29FF;
          background-image: linear-gradient(135deg, #2E29FF 0%, #150E63 100%);
          padding: 100px 0;
          color: #ffffff;
        }
        .nd-why-exist-inner { max-width: 1330px; margin: 0 auto; padding: 0 40px; }
        .nd-why-exist-header { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: flex-end; margin-bottom: 60px; text-align: left; }
        .nd-why-exist-tag { font-size: 13px; font-weight: 700; color: #FFB6DB; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
        .nd-why-exist-h2 { font-size: 42px; font-weight: 800; color: #ffffff; line-height: 1.2; margin: 0; }
        .nd-why-exist-sub { font-size: 16px; line-height: 1.65; color: rgba(255, 255, 255, 0.85); margin: 0; font-weight: 400; }
        .nd-why-exist-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .nd-why-exist-card { border: 1.5px solid rgba(255, 255, 255, 0.35); background: rgba(255, 255, 255, 0.02); border-radius: 20px; padding: 32px 24px; display: flex; flex-direction: column; gap: 20px; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); text-align: left; }
        .nd-why-exist-card:hover { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.7); transform: translateY(-6px); }
        .nd-why-exist-badge { width: 32px; height: 32px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); color: #FFB6DB; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; flex-shrink: 0; }
        .nd-why-exist-card-title { font-size: 18px; font-weight: 800; color: #ffffff; margin: 0; line-height: 1.3; }
        .nd-why-exist-card-desc { font-size: 13.5px; line-height: 1.6; color: rgba(255, 255, 255, 0.8); margin: 0; font-weight: 400; }
        .nd-why-exist-footer { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; padding: 40px; margin-top: 50px; text-align: left; }
        .nd-why-exist-footer p { font-size: 15.5px; line-height: 1.75; color: rgba(255, 255, 255, 0.9); margin: 0 0 20px 0; }
        .nd-why-exist-footer p:last-child { margin-bottom: 0; }
        
        /* ── FINTECH GRID OVERRIDES & SUBCLASSES ── */
        .fintech_grid.grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }
        .fintech_card:hover .nd-tech-showcase-item {
          background: rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
        }
        
        /* ── GLOBALLY RETROFIT top-tag-blue TO REMOVE ARROWS & MATCH THE PINK STAR DESIGN ── */
        .top-tag-blue {
          position: relative;
          display: inline-flex !important;
          align-items: center;
          gap: 10px;
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #2E29FF !important;
          text-transform: uppercase;
          letter-spacing: 1px !important;
          margin: 0 auto 12px auto !important;
          padding: 0 !important;
          width: fit-content !important;
          justify-content: center !important;
        }
        .top-tag-blue::before,
        .top-tag-blue::after {
          content: '✦' !important;
          position: static !important;
          width: auto !important;
          height: auto !important;
          background: none !important;
          font-size: 12px !important;
          color: #FFB6DB !important;
          display: inline-block !important;
        }

        /* ── CORE SERVICES GLANCE ── */
        .nd-core-glance { background: #ffffff; padding: 100px 0; border-bottom: 1px solid rgba(46, 41, 255, 0.06); }
        .nd-core-glance-inner { max-width: 1330px; margin: 0 auto; padding: 0 40px; }
        .nd-core-glance-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 50px; }
        .nd-core-glance-card { background: #F8F9FF; border: 1px solid rgba(46, 41, 255, 0.05); border-radius: 16px; padding: 24px; text-align: left; transition: all 0.25s; }
        .nd-core-glance-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(46, 41, 255, 0.06); border-color: rgba(46, 41, 255, 0.15); }
        .nd-core-glance-title { font-size: 16px; font-weight: 700; color: #0A0A2E; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
        .nd-core-glance-desc { font-size: 13.5px; color: #4B5563; line-height: 1.6; margin: 0; }

        /* ── INTERACTIVE TECH FILTER BUTTONS ── */
        .nd-tech-filter-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
        }

        .nd-tech-filter-btn {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(46, 41, 255, 0.12);
          color: #4B5563;
          font-size: 13.5px;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
        }

        .nd-tech-filter-btn:hover {
          background: rgba(46, 41, 255, 0.06);
          color: #2E29FF;
          border-color: rgba(46, 41, 255, 0.25);
          transform: translateY(-2px);
        }

        .nd-tech-filter-btn.active {
          background: linear-gradient(135deg, #2E29FF 0%, #4F46E5 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 6px 16px rgba(46, 41, 255, 0.25);
          transform: translateY(-2px);
        }

        /* ── 3D TECH SHOWCASE SECTION STYLES ── */
        .nd-tech-showcase-3d {
          background: linear-gradient(180deg, #F8F9FF 0%, #EEF2FF 50%, #F8F9FF 100%);
          padding: 110px 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(46, 41, 255, 0.08);
          border-bottom: 1px solid rgba(46, 41, 255, 0.08);
        }

        .nd-tech-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(46, 41, 255, 0.07) 1px, transparent 1px),
            radial-gradient(rgba(46, 41, 255, 0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0 0, 20px 20px;
          pointer-events: none;
          opacity: 0.7;
        }

        .nd-tech-ambient-orb-1 {
          position: absolute;
          top: -10%;
          left: -5%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(46, 41, 255, 0) 70%);
          border-radius: 50%;
          filter: blur(50px);
          pointer-events: none;
          animation: floatOrb 12s ease-in-out infinite alternate;
        }

        .nd-tech-ambient-orb-2 {
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(46, 41, 255, 0) 70%);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          animation: floatOrb 15s ease-in-out infinite alternate-reverse;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -40px) scale(1.1); }
          100% { transform: translate(-20px, 30px) scale(0.95); }
        }

        .nd-tech-3d-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 54px;
        }

        .nd-tech-3d-card-wrapper {
          perspective: 1000px;
          height: 100%;
        }

        .nd-tech-3d-card {
          position: relative;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(46, 41, 255, 0.12);
          border-radius: 24px;
          padding: 36px 30px 32px 30px;
          height: 100%;
          min-height: 270px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform-style: preserve-3d;
          transition: transform 0.2s cubic-bezier(0.1, 0.9, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          box-shadow: 
            0 10px 30px -10px rgba(46, 41, 255, 0.06),
            0 1px 3px rgba(0, 0, 0, 0.02),
            inset 0 1px 1px #ffffff;
        }

        .nd-tech-3d-card.hovered {
          border-color: rgba(46, 41, 255, 0.35);
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 
            0 25px 50px -12px rgba(46, 41, 255, 0.16),
            0 0 25px rgba(46, 41, 255, 0.08),
            inset 0 1px 1px #ffffff;
        }

        .nd-tech-3d-glow {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .nd-tech-3d-orb {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2E29FF 0%, #6366F1 100%);
          color: #ffffff;
          font-weight: 800;
          font-size: 15px;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateZ(45px);
          box-shadow: 
            0 10px 22px rgba(46, 41, 255, 0.35),
            inset 0 2px 4px rgba(255, 255, 255, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 2;
        }

        .nd-tech-3d-card.hovered .nd-tech-3d-orb {
          transform: translateZ(55px) scale(1.08);
          box-shadow: 
            0 14px 28px rgba(46, 41, 255, 0.45),
            inset 0 2px 4px rgba(255, 255, 255, 0.6);
        }

        .nd-tech-3d-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          transform: translateZ(35px);
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .nd-tech-3d-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(46, 41, 255, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%);
          border: 1px solid rgba(46, 41, 255, 0.15);
          color: #2E29FF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(46, 41, 255, 0.06);
          transition: all 0.3s ease;
        }

        .nd-tech-3d-card.hovered .nd-tech-3d-icon-badge {
          background: linear-gradient(135deg, #2E29FF 0%, #4F46E5 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(46, 41, 255, 0.3);
          transform: rotate(-4deg) scale(1.05);
        }

        .nd-tech-3d-title {
          font-size: 22px;
          font-weight: 800;
          color: #0A0A2E;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .nd-tech-3d-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          transform: translateZ(28px);
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .nd-tech-3d-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          font-weight: 600;
          color: #1E1B4B;
          background: #ffffff;
          border: 1px solid rgba(46, 41, 255, 0.14);
          padding: 8px 16px;
          border-radius: 30px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }

        .nd-tech-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2E29FF;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .nd-tech-3d-pill:hover {
          transform: translateZ(20px) translateY(-3px) scale(1.05);
          background: linear-gradient(135deg, #2E29FF 0%, #4F46E5 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(46, 41, 255, 0.28);
        }

        .nd-tech-3d-pill:hover .nd-tech-pill-dot {
          background: #ffffff;
          transform: scale(1.3);
        }

        .nd-tech-3d-bottom-glow {
          position: absolute;
          bottom: 0;
          left: 20%;
          right: 20%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #2E29FF, #6366F1, transparent);
          border-radius: 3px 3px 0 0;
          opacity: 0;
          transform: scaleX(0.4);
          transition: all 0.4s ease;
          z-index: 2;
        }

        .nd-tech-3d-card.hovered .nd-tech-3d-bottom-glow {
          opacity: 1;
          transform: scaleX(1);
        }

        .nd-tech-3d-note-box {
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px dashed rgba(46, 41, 255, 0.2);
          border-radius: 40px;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 4px 15px rgba(46, 41, 255, 0.03);
        }

        .nd-tech-3d-note-text {
          font-size: 14px;
          color: #4B5563;
          font-weight: 500;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .nd-tech-3d-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .nd-tech-3d-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .nd-tech-3d-card {
            padding: 28px 22px;
          }
          .nd-tech-3d-note-box {
            border-radius: 16px;
            padding: 12px 18px;
          }
        }

        /* ── WHY CLIENTS WORK WITH US (COMPACT STYLES) ── */
        .services_expertise .services-card-scroll .service_card {
          padding: 16px 20px !important;
          gap: 16px !important;
          background: #ffffff !important;
          border: 1px solid rgba(46, 41, 255, 0.08) !important;
          border-radius: 16px !important;
          margin-bottom: 16px !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02) !important;
          transition: transform 0.2s ease, border-color 0.2s ease !important;
        }
        .services_expertise .services-card-scroll .service_card:hover {
          transform: translateY(-2px) !important;
          border-color: rgba(46, 41, 255, 0.25) !important;
        }
        .services_expertise .services-card-scroll .service_card .textbox {
          gap: 4px !important;
        }
        .services_expertise .services-card-scroll .service_card .textbox h3 {
          font-size: 16.5px !important;
          line-height: 22px !important;
          font-weight: 700 !important;
          color: #0A0A2E !important;
          margin: 0 !important;
        }
        .services_expertise .services-card-scroll .service_card .textbox p {
          font-size: 13.5px !important;
          line-height: 20px !important;
          color: #4B5563 !important;
          margin: 0 !important;
        }
        .nd-why-clients-icon-box {
          width: 40px !important;
          height: 40px !important;
          border-radius: 10px !important;
          background: linear-gradient(135deg, #2E29FF 0%, #6366F1 100%) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #ffffff !important;
          flex-shrink: 0 !important;
          box-shadow: 0 4px 12px rgba(46, 41, 255, 0.12) !important;
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
          .nd-hero { padding-top: 40px !important; }
          .nd-hero-inner { display: flex; flex-direction: column-reverse; gap: 40px; padding: 0 20px !important; }
          .nd-hero-direct-img { margin-top: 0 !important; max-width: 420px !important; margin: 0 auto; }
          .nd-h1, .nd-h1-blue { font-size: 38px !important; line-height: 1.2 !important; text-align: center; }
          .nd-h1-blue { white-space: normal !important; min-height: auto !important; margin-bottom: 24px !important; }
          .nd-eyebrow { margin-left: auto; margin-right: auto; }
          .nd-subtext, .nd-subtext-sm, .nd-industries { text-align: center; margin-left: auto; margin-right: auto; }
          .nd-cta-row { justify-content: center; margin-top: 24px; margin-bottom: 32px; }
          .nd-rating-row { justify-content: center; }
          
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
          
          /* Grids */
           .nd-why-exist-grid { grid-template-columns: repeat(2, 1fr); }
          .nd-why-exist-header { grid-template-columns: 1fr; gap: 20px; }
          .nd-core-glance-grid { grid-template-columns: repeat(2, 1fr); }
          .nd-tech-showcase-grid { grid-template-columns: repeat(2, 1fr); }
          .nd-why-clients-inner { grid-template-columns: 1fr; gap: 50px; }
          .nd-why-clients-left { position: static !important; }
          .fintech_grid.grid-4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width:768px) {
          /* General Padding Reductions */
          .nd-why-exist, .nd-core-glance, .nd-portfolio, .nd-achievements, 
          .nd-expertise, .nd-process, .nd-compare, .nd-tech-showcase, 
          .nd-why-clients, .nd-projects, .nd-recognized, .nd-final-cta, 
          .nd-intro, section[style*="padding: 100px"] {
            padding: 60px 0 !important;
          }
          /* Headings */
          .nd-section-h2, .nd-process-h2, .nd-why-exist-h2, .nd-portfolio-h2, .nd-h1, .nd-h1-blue { font-size: 32px !important; }
          .nd-h1-blue { min-height: auto !important; white-space: normal !important; }
          
          .nd-portfolio-grid { grid-template-columns: 1fr; }
          
          /* Table horizontal scrolling on Mobile */
          .nd-compare-table-wrapper { 
            overflow-x: auto !important; 
            -webkit-overflow-scrolling: touch; 
            box-shadow: 0 32px 72px rgba(46, 41, 255, 0.08), 0 8px 24px rgba(46, 41, 255, 0.04);
            border: 1px solid rgba(46, 41, 255, 0.08) !important;
            border-radius: 24px;
            background: #ffffff;
            margin-top: 40px;
          }
          .nd-compare-table-wrapper::-webkit-scrollbar {
            height: 8px !important;
            display: block !important;
          }
          .nd-compare-table-wrapper::-webkit-scrollbar-track {
            background: rgba(46, 41, 255, 0.04) !important;
            border-radius: 4px !important;
          }
          .nd-compare-table-wrapper::-webkit-scrollbar-thumb {
            background: rgba(46, 41, 255, 0.25) !important;
            border-radius: 4px !important;
          }
          .nd-compare-table-wrapper::-webkit-scrollbar-thumb:hover {
            background: rgba(46, 41, 255, 0.45) !important;
          }
          .nd-compare-table { 
            min-width: 780px !important; 
            width: 100%; 
            display: table !important;
          }
          .nd-compare-table thead { display: table-header-group !important; }
          .nd-compare-table thead tr { background: #2E29FF !important; }
          .nd-compare-table thead th { background: #2E29FF !important; color: #ffffff !important; }
          .nd-compare-table thead th:last-child { background: #120ee3 !important; }
          .nd-compare-table tbody { display: table-row-group !important; }
          .nd-compare-table tr { display: table-row !important; border: none !important; padding: 0 !important; background: transparent !important; box-shadow: none !important; }
          .nd-compare-table td, .nd-compare-table th { display: table-cell !important; border: none !important; border-bottom: 1px solid rgba(46, 41, 255, 0.06) !important; padding: 18px 20px !important; text-align: left !important; }
          .nd-compare-table tr:last-child td { border-bottom: none !important; }
          .nd-compare-table td::before { display: none !important; }
          
          /* Column Widths & Wrapping Controls to prevent squeezing */
          .nd-compare-table th, .nd-compare-table td { 
            width: 25% !important; 
            min-width: 190px !important; 
            box-sizing: border-box !important;
            white-space: normal !important;
          }
          .nd-compare-table th:first-child, .nd-compare-table td:first-child { 
            min-width: 150px !important; 
            width: 22% !important; 
          }
        }
        @media (max-width:640px) {
          .nd-h1 { font-size: 28px !important; }
          .nd-h1-blue { font-size: 28px !important; }
          .nd-stats-grid { grid-template-columns:1fr; }
          .nd-process-steps { grid-template-columns:1fr; }
          .nd-logo-grid { grid-template-columns:repeat(2,1fr); }
          .nd-projects-track { grid-template-columns:1fr; }
          .nd-trust-badges { grid-template-columns:1fr; }
          .nd-hero-right { padding-bottom: 0 !important; }
          .nd-hero-left { padding-bottom: 20px !important; }
          
          /* Slider Cards - Spanning absolute screen edges with edge-to-edge flow */
          .nd-why-choose-slider-wrap, .nd-industries-slider-wrap { 
            width: 100vw !important; 
            margin-left: -20px !important; 
            margin-right: -20px !important; 
          }
          .nd-why-choose-card-container, .nd-industry-card-container { 
            width: 100vw !important; 
            display: flex !important; 
            padding: 0 20px !important; 
            box-sizing: border-box !important; 
          }
          .nd-why-choose-slider-track, .nd-industries-slider-track { gap: 0px !important; }
          @keyframes nd-ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes nd-ticker-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .nd-why-choose-card-container > div, .nd-industry-card-container > div { min-height: unset !important; height: 100% !important; }
          .nd-why-choose-card-container > div > div:first-child, .nd-industry-card-container > div > div:first-child { height: 120px !important; }
          .nd-why-choose-card-container p, .nd-industry-card-container p { font-size: 14px !important; margin-bottom: 4px !important; }
          .nd-why-choose-card-container span, .nd-industry-card-container span { font-size: 11px !important; line-height: 1.3 !important; }
          .nd-why-choose-card-container > div > div:nth-child(2), .nd-industry-card-container > div > div:nth-child(2) { padding: 12px !important; }
          .nd-why-choose-card-container svg, .nd-industry-card-container svg { width: 8px; height: 11px; }
          
          /* 1-column overrides */
          .nd-why-exist-grid, .nd-core-glance-grid, .nd-tech-showcase-grid, .fintech_grid.grid-4 { grid-template-columns: 1fr; }
          .nd-service-links { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="nd">

        {/* ── 1. HERO ── */}
        <section className="nd-hero">
          <div className="nd-hero-inner">

            {/* LEFT */}
            <div className="nd-hero-left">
              <div className="nd-eyebrow">
                <span className="nd-sparkle">✦</span>
                TOP SOFTWARE DEVELOPMENT AGENCY IN INDIA
              </div>
              <h1 className="nd-h1">India's Premier</h1>
              <TypingHeading />
              <p className="nd-subtext">
                Partner with top-tier developers to build scalable custom web apps, mobile solutions, SaaS platforms, and enterprise AI software. We turn your vision into high-performance digital products.
              </p>
              <p className="nd-subtext-sm">
                Trusted by early-stage founders and venture-backed teams. Hire expert offshore developers from India for high-quality engineering.
              </p>
              <p className="nd-industries">
                <strong>Fintech, Healthcare, EdTech, Logistics, SaaS, E-commerce.</strong> We bring engineering depth, product thinking, and the execution speed your business actually needs.
              </p>
              <div className="nd-cta-row">
                <Link to="/contact-us" className="nd-btn-primary">Book a Free 30-Min Call ↗</Link>
              </div>
              <div className="nd-rating-row">
                <div className="nd-avatars">
                  <div className="nd-avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Client Avatar 1" className="nd-avatar-img" /></div>
                  <div className="nd-avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Client Avatar 2" className="nd-avatar-img" /></div>
                  <div className="nd-avatar"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Client Avatar 3" className="nd-avatar-img" /></div>
                </div>
                <div>
                  <div className="nd-stars">{[...Array(5)].map((_,i) => <IconStar key={i} />)}</div>
                  <div className="nd-rating-text">3+ High-Impact Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* RIGHT — DIRECT IMAGE WITHOUT FRAMES OR BADGES */}
            <div className="nd-hero-right">
              <img src="/hero-my-image.webp" alt="NOVADESK software development studio" className="nd-hero-direct-img" />
              <div className="nd-hero-img-caption">
                <h3>Founder & Lead Engineer, NOVADESK</h3>
                <h2>HARSH PRATEEK</h2>
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

        {/* ── 2. WHY NOVADESK EXISTS ── */}
        <section className="nd-why-exist">
          <div className="nd-why-exist-inner">
            <div className="nd-why-exist-header">
              <div>
                <div className="nd-why-exist-tag">✦ Why NovaDesk Exists ✦</div>
                <h2 className="nd-why-exist-h2">Built Because Most Software Partnerships Break Down.</h2>
              </div>
              <div>
                <p className="nd-why-exist-sub">
                  Most businesses don't need "another developer." They need a team that understands the product, ships on time, and doesn't disappear after the invoice is paid.
                </p>
              </div>
            </div>

            <div className="nd-why-exist-grid">
              {/* Card 1 */}
              <div className="nd-why-exist-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 className="nd-why-exist-card-title">Freelancers<br />who vanish</h3>
                  <div className="nd-why-exist-badge">⚠️</div>
                </div>
                <p className="nd-why-exist-card-desc">
                  Leaving half-built code, zero documentation, and a scramble to find someone new who can pick up where they left off. You lose months, not just money.
                </p>
              </div>

              {/* Card 2 */}
              <div className="nd-why-exist-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 className="nd-why-exist-card-title">Agencies that<br />oversell</h3>
                  <div className="nd-why-exist-badge">⚠️</div>
                </div>
                <p className="nd-why-exist-card-desc">
                  Impressive pitch decks followed by missed deadlines and features that don't actually work the way they were promised. You pay for process, not product.
                </p>
              </div>

              {/* Card 3 */}
              <div className="nd-why-exist-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 className="nd-why-exist-card-title">In-house teams<br />stretched thin</h3>
                  <div className="nd-why-exist-badge">⚠️</div>
                </div>
                <p className="nd-why-exist-card-desc">
                  Your core team is busy keeping the lights on, and the new product idea sitting in your backlog never gets built. Growth stalls while competition moves.
                </p>
              </div>

              {/* Card 4 */}
              <div className="nd-why-exist-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 className="nd-why-exist-card-title">AI hype without<br />real engineering</h3>
                  <div className="nd-why-exist-badge">⚠️</div>
                </div>
                <p className="nd-why-exist-card-desc">
                  Tools and vendors promising "AI-powered everything" without the underlying software discipline to make it reliable and secure in production.
                </p>
              </div>
            </div>

            <div className="nd-why-exist-footer">
              <p>
                <strong>NovaDesk exists to close that gap.</strong> We're a full-stack and AI development team that treats every project like it's our own product — because for us, your success is the only real measure of whether we did our job well.
              </p>
              <p>
                We're not a 500-person outsourcing shop, and we don't pretend to be. What we offer instead is direct access to the people actually building your product, clear communication at every step, and the technical range to handle a project end-to-end — from the first wireframe to the server it runs on.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. WHAT WE DO — CORE SERVICES GLANCE ── */}
        <section className="nd-core-glance" style={{ background: '#f8f9ff', padding: '100px 0' }}>
          <div className="nd-core-glance-inner" style={{ maxWidth: '1330px', margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="nd-section-tag">Core Services at a Glance</div>
              <h2 className="nd-section-h2" style={{ fontSize: '40px', fontWeight: '800', color: '#0A0A2E', marginTop: '12px' }}>A Mission-Control Center for Your Software Needs</h2>
              <p className="nd-section-sub" style={{ marginTop: '10px', textAlign: 'center' }}>
                Every service is built to integrate cleanly with the next, so your product scales without technical debt piling up behind it.
              </p>
            </div>

            <div className="fintech_grid grid-4">
              {[
                { title: 'Web Development', desc: 'Business websites, web apps, landing pages, and custom CMS platforms designed for maximum conversion and speed.' },
                { title: 'App Development', desc: 'High-performance native and cross-platform mobile apps for iOS and Android.' },
                { title: 'SaaS Development', desc: 'Multi-tenant platforms, subscription billing gateways, custom dashboards, and user permission flows.' },
                { title: 'AI & ML Integration', desc: 'LLM-powered features, custom chatbots, automation flows, and custom AI systems using Claude and OpenAI.' },
                { title: 'UI/UX Design', desc: 'Product design, low-fidelity wireframes, interactive prototypes, and custom design systems.' },
                { title: 'API Development', desc: 'Custom backend APIs, secure third-party integrations, and robust database architecture.' },
                { title: 'Cloud & DevOps', desc: 'Hosting setup, secure CI/CD deployment pipelines, and active infrastructure management.' },
                { title: 'Maintenance & Support', desc: 'Active bug fixes, security updates, performance monitoring, and ongoing scaling support.' }
              ].map((service, i) => (
                <div key={i} className="fintech_card" style={{ minHeight: '280px' }}>
                  <span className="num-circle">0{i + 1}</span>
                  <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0F0D1D', marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ fontSize: '14.5px', color: '#555', lineHeight: '1.6', margin: 0 }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEW: PORTFOLIO / PROJECT CATALOG ── */}
        <section className="nd-achievements">
          <div className="nd-achievements-inner">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="nd-section-tag">WHY CHOOSE NOVADESK</div>
              <h2 className="nd-section-h2">What We Offer. Why It Matters.</h2>
              <p className="nd-section-sub">We're not trying to be the biggest agency in the market. We're trying to be the most reliable technical partner for the businesses we work with.</p>
            </div>

            <div className="nd-why-choose-slider-wrap">
              <div className="nd-why-choose-slider-track">
                {[
                  { title: 'Full-Stack & AI Unified', desc: 'No juggling multiple vendors for design, development, and AI models. We handle it end-to-end.', image: '/assets/img/testimonials/why_choose_1.png', location: 'AI + Fullstack' },
                  { title: 'Direct Access to Builders', desc: 'No account managers in the middle translating messages. Talk directly to the team coding your project.', image: '/assets/img/testimonials/why_choose_2.png', location: 'Direct Devs' },
                  { title: 'Built to Scale', desc: 'Every product is architected with long-term growth in mind, using robust Next.js and Supabase structures.', image: '/assets/img/testimonials/why_choose_5.png', location: 'Scalable Stack' },
                  { title: 'India-Rooted, Globally Capable', desc: 'We understand local business needs while holding ourselves to world-class engineering standards.', image: '/assets/img/testimonials/why_choose_6.png', location: 'India & Global' },
                  { title: 'Post-Launch Partnership', desc: 'We do not disappear after deployment. Ongoing support and feature growth retainers keep you running.', image: '/assets/img/testimonials/why_choose_7.png', location: 'Ongoing Support' }
                ].concat([
                  { title: 'Full-Stack & AI Unified', desc: 'No juggling multiple vendors for design, development, and AI models. We handle it end-to-end.', image: '/assets/img/testimonials/why_choose_1.png', location: 'AI + Fullstack' },
                  { title: 'Direct Access to Builders', desc: 'No account managers in the middle translating messages. Talk directly to the team coding your project.', image: '/assets/img/testimonials/why_choose_2.png', location: 'Direct Devs' },
                  { title: 'Built to Scale', desc: 'Every product is architected with long-term growth in mind, using robust Next.js and Supabase structures.', image: '/assets/img/testimonials/why_choose_5.png', location: 'Scalable Stack' },
                  { title: 'India-Rooted, Globally Capable', desc: 'We understand local business needs while holding ourselves to world-class engineering standards.', image: '/assets/img/testimonials/why_choose_6.png', location: 'India & Global' },
                  { title: 'Post-Launch Partnership', desc: 'We do not disappear after deployment. Ongoing support and feature growth retainers keep you running.', image: '/assets/img/testimonials/why_choose_7.png', location: 'Ongoing Support' }
                ]).map((item, i) => (
                  <div key={i} className="nd-why-choose-card-container">
                    <div style={{ height: '380px', display: 'flex', flexDirection: 'column', background: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid rgba(46, 41, 255, 0.05)' }}>
                      <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flexGrow: 1, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', whiteSpace: 'normal' }}>
                        <div>
                          <p style={{ fontSize: '18px', fontWeight: '800', color: '#0A0A2E', margin: '0 0 8px 0', lineHeight: '1.3' }}>
                            {item.title}
                          </p>
                          <span style={{ fontSize: '14.5px', color: '#555', display: 'block', fontWeight: '400', lineHeight: '1.5' }}>
                            {item.desc}
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '18px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(46, 41, 255, 0.05)', padding: '6px 12px', borderRadius: '8px' }}>
                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF" />
                            </svg>
                            <span style={{ fontSize: '11px', color: '#2E29FF', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ── 6. SERVICES IN DETAIL (Tabbed) ── */}
        <section className="nd-expertise">
          <div className="nd-expertise-inner">
            <div className="nd-expertise-header">
              <div style={{ textAlign: 'left' }}>
                <div className="nd-section-tag" style={{ color: '#2E29FF', margin: '0 0 12px 0', textAlign: 'left', justifyContent: 'flex-start' }}>✦ OUR SERVICES ✦</div>
                <h2 className="nd-section-h2" style={{ fontSize: '40px', fontWeight: '800', color: '#0A0A2E', lineHeight: 1.2, textAlign: 'left' }}>Find The Right<br />Solutions For You</h2>
              </div>
              <div>
                <p className="nd-expertise-desc">
                  NovaDesk operates like a mission-control center for your software needs — every service is built to integrate cleanly with the next, so your product scales without technical debt piling up behind it.
                </p>
                <p className="nd-expertise-desc">
                  From custom web and mobile development to SaaS platforms, API systems, AI integration, and cloud infrastructure — we cover every layer of product development, so you get one reliable partner from idea to launch.
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
                        <div key={i} className="nd-service-link-card">
                          <span className="nd-service-link-title">{l.label}</span>
                          <span className="nd-service-link-desc">{l.desc}</span>
                        </div>
                      ))}
                    </div>
                    {t.whothisfor && (
                      <div style={{ marginTop: '24px', background: 'rgba(46,41,255,0.06)', borderLeft: '3px solid #2E29FF', borderRadius: '0 8px 8px 0', padding: '14px 20px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: '#2E29FF', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Who this is for: </span>
                        <span style={{ fontSize: '14px', color: '#555', fontWeight: '500' }}>{t.whothisfor}</span>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>

            <div className="nd-expertise-cta">
              <h3>Ready to build something that actually works?</h3>
              <Link to="/contact-us" className="nd-process-cta-btn" style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}>
                Schedule a Free Consultation ↗
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. PROJECT LOG ── */}
        

        {/* ── 7. HOW WE WORK — OUR PROCESS ── */}
        <section id="how-i-work" className="nd-process">
          <div className="nd-process-inner">
            <div className="nd-process-header-grid">
              <div className="nd-process-header-left">
                <div className="nd-process-tag">✦ Our Process ✦</div>
                <h2 className="nd-process-h2">How We Build Products Without Surprises.</h2>
              </div>
              <div className="nd-process-header-right">
                <p className="nd-process-sub">
                  Software gets built badly when nobody asks the hard questions early, and when progress happens invisibly. Our process is designed to avoid both of those failure modes.
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
                  <li>Understand your business, users, and what success looks like.</li>
                  <li>What problem is this product solving, and for whom?</li>
                  <li>What does the first version absolutely need to do?</li>
                  <li>What does success look like in 90 days? In a year?</li>
                  <li>Scope honestly — timeline and budget reality upfront.</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Proposal<br />&amp; Roadmap</h3>
                  <div className="nd-step-badge">02</div>
                </div>
                <ul className="nd-step-list">
                  <li>Clear, itemized project scope and realistic timeline.</li>
                  <li>Transparent pricing — no hidden costs.</li>
                  <li>No vague "it depends" deliverables.</li>
                  <li>If something is genuinely uncertain, we say so clearly.</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Design<br />&amp; Prototyping</h3>
                  <div className="nd-step-badge">03</div>
                </div>
                <ul className="nd-step-list">
                  <li>You see exactly what's being built before development starts.</li>
                  <li>Wireframes that map out structure and flow.</li>
                  <li>Clickable prototypes — test the experience before it's coded.</li>
                  <li>Final visual designs reviewed and approved by you.</li>
                  <li>No surprises once real development begins.</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Development<br />&amp; QA</h3>
                  <div className="nd-step-badge">04</div>
                </div>
                <ul className="nd-step-list">
                  <li>Short, structured sprints — progress is always visible.</li>
                  <li>Regular check-ins with real working software, not slide decks.</li>
                  <li>Code reviewed for quality and maintainability every sprint.</li>
                  <li>Testing built in throughout, not bolted on at the end.</li>
                  <li>Every feature tested before it reaches your users.</li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="nd-step">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>Launch<br />&amp; Support</h3>
                  <div className="nd-step-badge">05</div>
                </div>
                <ul className="nd-step-list">
                  <li>Launch day is when real usage starts, not when we disappear.</li>
                  <li>Deployment, infrastructure, and app store submissions handled.</li>
                  <li>Performance monitoring and issue resolution post-launch.</li>
                  <li>Ongoing support, bug fixes, and feature growth as you scale.</li>
                  <li>We stay engaged as your product and business evolve.</li>
                </ul>
              </div>
            </div>

            {/* Section footer profile & CTA */}
            <div className="nd-process-footer">
              <div className="nd-process-profile">
                <img src="/hero-my-image.webp" alt="Harsh Prateek" className="nd-process-avatar" />
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
            <div className="nd-section-tag">HOW WE COMPARE</div>
            <h2 className="nd-section-h2">Freelancers vs. Large Agencies vs. NovaDesk</h2>
            <p className="nd-section-sub">A genuine tradeoff — not a domination claim. Here's how we honestly compare across the things that matter most in a software build.</p>
            <div className="nd-compare-table-wrapper">
              <table className="nd-compare-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Freelancers</th>
                    <th>Large Agencies</th>
                    <th style={{ background:'#120ee3' }}>NovaDesk ✦</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Communication', 'Direct, but inconsistent availability', 'Filtered through account managers', 'Direct, with a dedicated team'],
                    ['Continuity', 'High risk of disappearing mid-project', 'Team members rotate frequently', 'Same team from kickoff to launch and beyond'],
                    ['Technical Range', 'Usually specialized in one area', 'Broad, but often siloed departments', 'Full-stack + AI under one team'],
                    ['Speed', 'Fast, but limited bandwidth', 'Often slow due to internal processes', 'Fast, lean, and focused'],
                    ['Post-Launch Support', 'Rarely available', 'Often a separate, costly engagement', 'Built into our long-term partnership approach'],
                    ['Transparency', 'Varies by individual', 'Often buried in reports and dashboards', 'Clear updates, honest scoping, no inflated claims'],
                  ].map(([f, a, b, n], i) => (
                    <tr key={i}>
                      <td data-label="Aspect"><strong>{f}</strong></td>
                      <td data-label="Freelancers">{a}</td>
                      <td data-label="Large Agencies">{b}</td>
                      <td data-label="NovaDesk" style={{ color:'#2E29FF', fontWeight:'600' }}>{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="nd-compare-note">We're not trying to be the biggest agency in the market. We're trying to be the most reliable technical partner for the businesses we work with.</p>
          </div>
        </section>

        {/* ── 8.5 INDUSTRIES WE SERVE ── */}
        <section style={{ background:'#ffffff', padding:'100px 0', overflow: 'hidden' }}>
          <div style={{ maxWidth:'1500px', margin:'0 auto', padding:'0 40px' }}>
            <div style={{ textAlign:'center', marginBottom:'40px' }}>
              <div className="nd-section-tag">INDUSTRIES WE SERVE</div>
              <h2 className="nd-section-h2" style={{ fontSize: '40px', fontWeight: '800', color: '#0A0A2E', marginTop: '12px' }}>Built for the Businesses That Drive Real Economies</h2>
              <p className="nd-section-sub" style={{ marginTop: '10px', textAlign: 'center' }}>We work across both hyper-local businesses and broader India-wide and international clients — the same engineering discipline applies regardless of scale.</p>
            </div>

            <div className="nd-industries-slider-wrap">
              <div className="nd-industries-slider-track">
                {[
                  { title: 'Restaurants & Hospitality', desc: 'Online ordering systems, table booking platforms, and digital presence that drives footfall and repeat orders.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=80', location: 'HOSPITALITY' },
                  { title: 'Real Estate', desc: 'Property listing platforms, lead-capture systems, virtual tour integrations, and CRM connections for agents.', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&auto=format&fit=crop&q=80', location: 'REAL ESTATE' },
                  { title: 'Startups & SaaS Founders', desc: 'MVP development, product scaling support, and technical guidance for founders without an in-house engineering team.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=80', location: 'STARTUPS' },
                  { title: 'EdTech', desc: 'Learning management systems, AI-assisted content tools, and student engagement platforms.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80', location: 'EDUCATION' },
                  { title: 'Healthcare & Wellness', desc: 'Secure, privacy-conscious platforms for patient engagement, appointment booking, and digital health services.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&auto=format&fit=crop&q=80', location: 'HEALTH' },
                  { title: 'E-commerce', desc: 'Custom storefronts, inventory management, and conversion-optimized shopping experiences.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80', location: 'ECOMMERCE' },
                  { title: 'Professional Services', desc: 'Websites and internal tools that reflect credibility and streamline day-to-day operations.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80', location: 'SERVICES' },
                  { title: 'Local & Regional Businesses', desc: 'Digital transformation for businesses that have historically relied on offline growth — building an online presence.', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&auto=format&fit=crop&q=80', location: 'LOCAL' }
                ].concat([
                  { title: 'Restaurants & Hospitality', desc: 'Online ordering systems, table booking platforms, and digital presence that drives footfall and repeat orders.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=80', location: 'HOSPITALITY' },
                  { title: 'Real Estate', desc: 'Property listing platforms, lead-capture systems, virtual tour integrations, and CRM connections for agents.', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&auto=format&fit=crop&q=80', location: 'REAL ESTATE' },
                  { title: 'Startups & SaaS Founders', desc: 'MVP development, product scaling support, and technical guidance for founders without an in-house engineering team.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=80', location: 'STARTUPS' },
                  { title: 'EdTech', desc: 'Learning management systems, AI-assisted content tools, and student engagement platforms.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80', location: 'EDUCATION' },
                  { title: 'Healthcare & Wellness', desc: 'Secure, privacy-conscious platforms for patient engagement, appointment booking, and digital health services.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&auto=format&fit=crop&q=80', location: 'HEALTH' },
                  { title: 'E-commerce', desc: 'Custom storefronts, inventory management, and conversion-optimized shopping experiences.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80', location: 'ECOMMERCE' },
                  { title: 'Professional Services', desc: 'Websites and internal tools that reflect credibility and streamline day-to-day operations.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80', location: 'SERVICES' },
                  { title: 'Local & Regional Businesses', desc: 'Digital transformation for businesses that have historically relied on offline growth — helping them build an online presence.', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&auto=format&fit=crop&q=80', location: 'LOCAL' }
                ]).map((item, i) => (
                  <div key={i} className="nd-industry-card-container">
                    <div style={{ height: '380px', display: 'flex', flexDirection: 'column', background: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid rgba(46, 41, 255, 0.05)' }}>
                      <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flexGrow: 1, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', whiteSpace: 'normal' }}>
                        <div>
                          <p style={{ fontSize: '18px', fontWeight: '800', color: '#0A0A2E', margin: '0 0 8px 0', lineHeight: '1.3' }}>
                            {item.title}
                          </p>
                          <span style={{ fontSize: '14.5px', color: '#555', display: 'block', fontWeight: '400', lineHeight: '1.5' }}>
                            {item.desc}
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '18px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(46, 41, 255, 0.05)', padding: '6px 12px', borderRadius: '8px' }}>
                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.99967 13.6673C4.84412 13.6673 4.71079 13.6229 4.59968 13.534C4.48856 13.4451 4.40523 13.3284 4.34968 13.184C4.13856 12.5618 3.8719 11.9784 3.54967 11.434C3.23856 10.8895 2.79967 10.2507 2.23301 9.51732C1.66634 8.78398 1.20523 8.08398 0.849674 7.41732C0.50523 6.75065 0.333008 5.94509 0.333008 5.00065C0.333008 3.70065 0.783008 2.60065 1.68301 1.70065C2.59412 0.78954 3.69967 0.333984 4.99967 0.333984C6.29967 0.333984 7.39967 0.78954 8.29967 1.70065C9.21079 2.60065 9.66634 3.70065 9.66634 5.00065C9.66634 6.01176 9.4719 6.85621 9.08301 7.53398C8.70523 8.20065 8.26634 8.86176 7.76634 9.51732C7.16634 10.3173 6.71079 10.984 6.39967 11.5173C6.09968 12.0395 5.84968 12.5951 5.64967 13.184C5.59412 13.3395 5.50523 13.4618 5.38301 13.5507C5.2719 13.6284 5.14412 13.6673 4.99967 13.6673ZM4.99967 6.66732C5.46634 6.66732 5.86079 6.50621 6.18301 6.18398C6.50523 5.86176 6.66634 5.46732 6.66634 5.00065C6.66634 4.53398 6.50523 4.13954 6.18301 3.81732C5.86079 3.4951 5.46634 3.33398 4.99967 3.33398C4.53301 3.33398 4.13856 3.4951 3.81634 3.81732C3.49412 4.13954 3.33301 4.53398 3.33301 5.00065C3.33301 5.46732 3.49412 5.86176 3.81634 6.18398C4.13856 6.50621 4.53301 6.66732 4.99967 6.66732Z" fill="#2E29FF" />
                            </svg>
                            <span style={{ fontSize: '11px', color: '#2E29FF', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* ── 10. WHY CLIENTS WORK WITH US ── */}
        <section className="services_expertise" style={{ background: '#F8F9FF', borderBottom: '1px solid rgba(46, 41, 255, 0.06)' }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sticky-head">
                  <span className="top-tag-blue">Why Clients Work With Us</span>
                  <div className="head">
                    <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '38px', lineHeight: '48px', letterSpacing: '-0.5px', textTransform: 'capitalize', color: '#0F0D1D', paddingTop: '16px' }}>What You Can Expect Working With Us</h2>
                    <p style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '15.5px', lineHeight: '25px', color: '#4B5563', paddingTop: '12px', margin: 0 }}>
                      We're upfront about where we are as a company: NovaDesk is a focused, founder-led team — not a 500-person outsourcing operation. For many clients, that's exactly the point. You're not a ticket number in a queue. You get direct access to the people actually building your product, honest scoping instead of inflated promises, and a team that's genuinely invested in your product working.
                    </p>
                  </div>
                  <div className="mt-5">
                    <a href="/contact-us" className="btn-consultation-white">
                      Get a free Consultation
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0052 9.41421L7.39858 18.0208L5.98438 16.6066L14.591 8H7.00519V6H18.0052V17H16.0052V9.41421Z" fill="#2E29FF"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-card-scroll">
                  {[
                    { 
                      title: 'Direct communication', 
                      desc: 'Talk directly to the people writing your code — no relay through account managers.',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      )
                    },
                    { 
                      title: 'Honest timelines & pricing', 
                      desc: 'Even when that means saying "this will take longer than you\'d like".',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      )
                    },
                    { 
                      title: 'Goal-oriented engineering', 
                      desc: 'A team that pushes back when a request doesn\'t serve your actual business goals.',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                      )
                    },
                    { 
                      title: 'Documentation & handoffs', 
                      desc: 'Your product is never a black box only we understand.',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                      )
                    },
                    { 
                      title: 'Long-term partnership', 
                      desc: 'We\'d rather build a lasting relationship than maximize one project\'s invoice.',
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      )
                    }
                  ].map((bullet, i) => (
                    <div key={i} className="service_card">
                      <div className="nd-why-clients-icon-box">
                        {bullet.icon}
                      </div>
                      <div className="textbox">
                        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '19px', lineHeight: '26px', color: '#0F0D1D', margin: 0 }}>{bullet.title}</h3>
                        <p style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '14.5px', lineHeight: '22px', color: '#4B5563', margin: '6px 0 0 0' }}>{bullet.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. PORTFOLIO / BLOG CATALOG ── */}
        <section className="nd-portfolio">
          <div className="nd-portfolio-inner">
            <div className="nd-portfolio-header">
              <div>
                <div className="nd-portfolio-tag">✦ Latest Insights ✦</div>
                <h2 className="nd-portfolio-h2">From Our Blog</h2>
                <p className="nd-portfolio-sub">Explore the technical blueprints, product guides, and startup engineering frameworks built by our team.</p>
              </div>
              <div className="nd-portfolio-nav-buttons">
                <button onClick={scrollBlogsLeft} className="nd-slider-nav-btn" aria-label="Previous Post">←</button>
                <button onClick={scrollBlogsRight} className="nd-slider-nav-btn" aria-label="Next Post">→</button>
              </div>
            </div>
            
            <div className="nd-portfolio-slider-wrap">
              <div ref={blogSliderRef} className="nd-portfolio-track-wrap">
                {blogs.map((blog, i) => (
                  <div key={blog.id || i} className="nd-portfolio-card-wrap">
                    <Link to={`/blog/${blog.slug}`} className="nd-portfolio-card-link">
                      <div className="nd-portfolio-card">
                        <div className="nd-portfolio-img-wrap">
                          <img src={blog.thumbnail || blog.coverImage} alt={blog.title} className="nd-portfolio-img" />
                        </div>
                        <div className="nd-portfolio-info">
                          <div>
                            <div className="nd-portfolio-meta">
                              <span>{blog.publishDate ? new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}</span>
                              <span className="dot"></span>
                              <span>{blog.readTime || 5} min read</span>
                            </div>
                            <h3 className="nd-portfolio-title">{blog.title}</h3>
                            <p className="nd-portfolio-desc">{blog.excerpt}</p>
                          </div>
                          <div>
                            <div className="nd-portfolio-tech" style={{ marginBottom: '20px' }}>
                              <span>{blog.category}</span>
                            </div>
                            <div className="nd-portfolio-footer">
                              <div className="nd-portfolio-author">
                                <img src={blog.author?.avatar || '/hero-my-image.webp'} alt={blog.author?.name || 'Harsh Prateek'} />
                                <span>{blog.author?.name || 'Harsh Prateek'}</span>
                              </div>
                              <span className="nd-portfolio-readmore">
                                Read More →
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. ACHIEVEMENTS / WHY CHOOSE NOVADESK ── */}
        <section style={{ background:'linear-gradient(135deg,#0A0A2E 0%,#1a1a4e 100%)', padding:'100px 0' }}>
          <div style={{ maxWidth:'800px', margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'28px' }}>
              <div style={{ fontSize:'12px', fontWeight:'700', color:'rgba(255,255,255,0.5)', letterSpacing:'2px', textTransform:'uppercase' }}>✦ A Note From the Founder ✦</div>
              <blockquote style={{ fontSize:'22px', fontStyle:'italic', color:'#fff', lineHeight:'1.65', margin:0, fontWeight:'400', padding:'0 20px' }}>
                "NovaDesk started from a simple frustration: too many businesses get burned by software partners who either overpromise and underdeliver, or disappear the moment things get complicated. We built NovaDesk to be the opposite of that — a team that treats your product with the same seriousness we'd want if it were our own."
              </blockquote>
              <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.65)', lineHeight:'1.75', margin:0, maxWidth:'640px' }}>
                We're still early. We're building our client base one honest, well-delivered project at a time. If you're looking for a partner who'll tell you the truth about your timeline, your budget, and your product — even when it's not what you want to hear — that's who we're trying to be.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:'16px', marginTop:'8px' }}>
                <img src="/hero-my-image.webp" alt="Harsh Prateek, Founder of NovaDesk" style={{ width:'60px', height:'60px', borderRadius:'50%', objectFit:'cover', border:'2px solid rgba(255,255,255,0.2)' }} />
                <div>
                  <div style={{ fontSize:'16px', fontWeight:'700', color:'#fff', textAlign:'left' }}>Harsh Prateek</div>
                  <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', textAlign:'left', marginTop:'3px' }}>Founder &amp; Lead Engineer, NovaDesk</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. TOOLS & TECHNOLOGIES WE WORK WITH ── */}
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
