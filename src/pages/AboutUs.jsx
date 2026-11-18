import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import './about-us.css';

// ─── SVG ICONS (Royal Blue #2E29FF & Crisp White) ───────────────────────────
const ArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ArrowUpRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CpuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const HeartHandshakeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// ─── AUTHENTIC TECH STACK SVG BRAND LOGOS ──────────────────────────────────
const NextJsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 128 128" fill="none" aria-hidden="true">
    <circle cx="64" cy="64" r="64" fill="#0A0A0A" />
    <path d="M101.5 106.6L48.4 38.4H36.3V89.6H46.4V51.7L94.5 113.3C96.9 111.3 99.3 109 101.5 106.6Z" fill="#FFFFFF" />
    <path d="M81.6 38.4H91.7V89.6H81.6V38.4Z" fill="#FFFFFF" />
  </svg>
);

const ReactIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <ellipse cx="12" cy="12" rx="4.2" ry="10.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="4.2" ry="10.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="4.2" ry="10.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M11.5 8H5.5V10H7.5V17H9.5V10H11.5V8Z" fill="#FFFFFF" />
    <path d="M13 15C13.5 16 14.5 17 16 17C17.5 17 18.5 16.2 18.5 15C18.5 13.8 17.5 13.2 16.2 12.6C14.2 11.8 13.2 11 13.2 9.5C13.2 8 14.5 7 16.2 7C17.5 7 18.6 7.6 19.2 8.6L17.8 9.8C17.4 9.2 16.8 8.8 16.2 8.8C15.4 8.8 15 9.2 15 9.6C15 10.2 15.6 10.6 17 11.2C18.8 12 20.2 12.8 20.2 14.8C20.2 16.8 18.5 18.8 16 18.8C14.2 18.8 12.6 17.8 11.8 16.2L13 15Z" fill="#FFFFFF" />
  </svg>
);

const FastApiIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#009688" />
    <path d="M12.5 4L7 13H12L11.5 20L17 11H12L12.5 4Z" fill="#FFFFFF" />
  </svg>
);

const PythonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M11.9 2C8.6 2 6.7 3.5 6.7 5.5V7H12.3V7.8H4.6C2.6 7.8 1 9.5 1 12.2C1 14.9 2.5 16.4 4.5 16.4H6V14.5C6 12.5 7.8 10.8 9.9 10.8H15.4C16.8 10.8 17.8 9.7 17.8 8.4V5.5C17.8 3.5 15.2 2 11.9 2ZM9.4 3.7C10 3.7 10.5 4.2 10.5 4.8C10.5 5.4 10 5.9 9.4 5.9C8.8 5.9 8.3 5.4 8.3 4.8C8.3 4.2 8.8 3.7 9.4 3.7Z" fill="#3776AB" />
    <path d="M12.1 22C15.4 22 17.3 20.5 17.3 18.5V17H11.7V16.2H19.4C21.4 16.2 23 14.5 23 11.8C23 9.1 21.5 7.6 19.5 7.6H18V9.5C18 11.5 16.2 13.2 14.1 13.2H8.6C7.2 13.2 6.2 14.3 6.2 15.6V18.5C6.2 20.5 8.8 22 12.1 22ZM14.6 20.3C14 20.3 13.5 19.8 13.5 19.2C13.5 18.6 14 18.1 14.6 18.1C15.2 18.1 15.7 18.6 15.7 19.2C15.7 19.8 15.2 20.3 14.6 20.3Z" fill="#FFD43B" />
  </svg>
);

const SupabaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13.2 2.1C12.8 1.5 11.8 1.7 11.6 2.4L6.2 14.4C5.8 15.2 6.5 16.1 7.4 16L12.3 15.3L10.8 21.9C10.6 22.5 11.6 22.8 11.9 22.1L17.8 10.1C18.2 9.3 17.5 8.4 16.6 8.5L11.7 9.2L13.2 2.1Z" fill="#3ECF8E" />
  </svg>
);

const N8nIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="5" cy="12" r="3" fill="#EA4B71" />
    <circle cx="12" cy="7" r="3" fill="#FF6D5A" />
    <circle cx="12" cy="17" r="3" fill="#EA4B71" />
    <circle cx="19" cy="12" r="3" fill="#FF6D5A" />
    <path d="M5 12H19M12 7V17" stroke="#EA4B71" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AiModelsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="8" cy="12" r="5" fill="#10A37F" fillOpacity="0.25" stroke="#10A37F" strokeWidth="1.5" />
    <path d="M8 9V15M5 12H11" stroke="#10A37F" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 6L17.5 10.5L22 12L17.5 13.5L16 18L14.5 13.5L10 12L14.5 10.5L16 6Z" fill="#D97757" />
  </svg>
);

export default function AboutUs() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll reveal observer for buttery smooth viewport entrance animations
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('au-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    const elements = document.querySelectorAll('.au-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" }
  ];

  // 8 Verified Tools with authentic SVG marks and role tags
  const tools = [
    { name: "Next.js", icon: <NextJsIcon />, badge: "Frontend & SSR" },
    { name: "React", icon: <ReactIcon />, badge: "UI Framework" },
    { name: "TypeScript", icon: <TypeScriptIcon />, badge: "Type Safety" },
    { name: "FastAPI", icon: <FastApiIcon />, badge: "High-Perf API" },
    { name: "Python", icon: <PythonIcon />, badge: "AI & Backend" },
    { name: "Supabase", icon: <SupabaseIcon />, badge: "Auth & DB" },
    { name: "n8n", icon: <N8nIcon />, badge: "Automation" },
    { name: "OpenAI & Claude APIs", icon: <AiModelsIcon />, badge: "Foundational AI" }
  ];

  const selectedProjects = [
    {
      name: "Buy Elaichi Online",
      slug: "buy-elaichi-online",
      category: "D2C Agri-Commerce",
      image: "/assets/img/testimonials/case_study_1.webp",
      outcome: "Direct-from-farm single-origin spices e-commerce store with 0.72s load times and a +145% increase in mobile checkout conversions."
    },
    {
      name: "Mahaveer Herbals",
      slug: "mahaveer-herbals",
      category: "B2B Export Catalog",
      image: "/assets/img/testimonials/case_study_2.webp",
      outcome: "Global botanical extracts and essential oils catalog and RFQ engine that multiplied international wholesale inquiries by 3.8x."
    },
    {
      name: "FORGE AI",
      slug: "forge-ai",
      category: "Indigenous AI Engine",
      image: "/why_us_dashboard.webp",
      outcome: "Indigenous real-time interactive canvas AI engine delivering locked 60fps frame scrubbing, <12ms scrub latency, and zero video buffering."
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About NovaDesk | Founder-Led Web Development and AI Studio",
    "description": "Meet NovaDesk, a founder-led studio building fast, modern websites and AI-powered tools for growing businesses. Honest advice, personal service, real results.",
    "url": "https://www.novadesk.site/about-us",
    "publisher": {
      "@type": "Organization",
      "name": "NovaDesk",
      "founder": {
        "@type": "Person",
        "name": "Harsh Prateek",
        "jobTitle": "Founder & Lead Developer",
        "url": "https://www.linkedin.com/in/itsharshprateek/"
      }
    }
  };

  return (
    <div className="au-page" ref={pageRef}>
      <SEO 
        title="About NovaDesk | Founder-Led Web Development and AI Studio"
        description="Meet NovaDesk, a founder-led studio building fast, modern websites and AI-powered tools for growing businesses. Honest advice, personal service, real results."
        url="/about-us"
        keywords="about NovaDesk, founder-led software studio, Harsh Prateek developer, boutique web development agency, AI workflow automation studio, honest web development India"
        breadcrumbs={breadcrumbs}
        schema={aboutSchema}
      />

      {/* ─── 1. HERO SECTION (PURE WHITE #FFFFFF) ───────────────────── */}
      <section className="au-hero au-section-white">
        <div className="au-ambient-glow" aria-hidden="true" />
        <div className="au-container">
          <div className="au-breadcrumb-wrap">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="au-hero-grid">
            <div className="au-hero-content au-reveal">
              <div className="au-kicker-badge">
                <span className="au-live-dot" />
                <span>Small Studio • Big Care For Every Build</span>
              </div>

              <h1 className="au-hero-title">
                Small studio. <span className="au-blue-gradient">Big care for every build.</span>
              </h1>

              <p className="au-hero-subtext">
                NovaDesk is a founder-led studio that designs and builds websites and AI-powered tools for businesses that want to grow without the agency runaround. You talk to the person who actually does the work.
              </p>

              <div className="au-hero-cta-group">
                <Link to="/get-a-free-quote" className="au-btn-primary">
                  <span>Start a conversation</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/case-studies" className="au-btn-outline">
                  <span>See our work</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="au-hero-trust-tag">
                <div className="au-hero-trust-item">
                  <CheckCircleIcon />
                  <span>Zero account managers</span>
                </div>
                <span className="au-hero-trust-sep">•</span>
                <div className="au-hero-trust-item">
                  <span>Direct developer access</span>
                </div>
                <span className="au-hero-trust-sep">•</span>
                <div className="au-hero-trust-item">
                  <span>Real results</span>
                </div>
              </div>
            </div>

            {/* Modern 3D Floating Studio Illustration (NO BOX CONTAINER!) */}
            <div className="au-hero-visual-wrap au-reveal au-delay-2">
              <img 
                src="/about_us_hero_3d_transparent.webp" 
                alt="NovaDesk Studio Digital Engineering Visual" 
                className="au-hero-3d-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OUR STORY SECTION (SOFT ICE-BLUE #F0F4FF) ─────────────── */}
      <section className="au-story-section au-section-ice">
        <div className="au-container">
          <div className="au-story-grid">
            <div className="au-story-heading-sticky au-reveal">
              <span className="au-section-kicker">Our Story</span>
              <h2 className="au-section-title">Why NovaDesk exists</h2>
              <p className="au-section-desc">
                Understanding the real business challenge before writing a single line of code.
              </p>
              <div className="au-story-portrait-wrap">
                <img 
                  src="/novadesk_founders_duo_feathered.webp" 
                  alt="NovaDesk Studio Founders" 
                  className="au-story-portrait-img" 
                  loading="lazy" 
                />
                <span className="au-story-portrait-caption">Founders • NovaDesk Studio</span>
              </div>
            </div>

            <div className="au-story-content au-reveal au-delay-1">
              <p className="au-story-p">
                I started NovaDesk because I kept seeing the same thing: good businesses with weak websites, and agencies that disappeared behind account managers the moment the invoice was paid.
              </p>
              <p className="au-story-p">
                I am a developer and a product thinker at heart. I like understanding how a business really works before I write a single line of code. What do your customers ask first? Where do leads slip away? What is eating your team’s time every day?
              </p>
              <p className="au-story-p">
                NovaDesk is my answer to that. A small studio where every project gets my full attention, every decision is explained in plain language, and what we ship is something you can be proud of and actually use.
              </p>
              <div className="au-story-highlight-box">
                <p>
                  We are not the biggest agency, and we do not want to be. We want to be the one you remember for doing it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. WHAT WE BELIEVE SECTION (PURE WHITE #FFFFFF) ─────────── */}
      <section className="au-believe-section au-section-white">
        <div className="au-container">
          <div className="au-section-header au-reveal">
            <span className="au-section-kicker">What We Believe</span>
            <h2 className="au-section-title">Four things we hold on to</h2>
            <p className="au-section-desc">
              Values in action that guide every client interaction and engineering decision.
            </p>
          </div>

          <div className="au-believe-grid">
            <div className="au-believe-card au-reveal au-delay-1">
              <span className="au-believe-num">01 / INTEGRITY</span>
              <h3>Honest over impressive.</h3>
              <p>
                We will tell you what will work, what will not, and what it will cost, even when a bigger promise would be easier to sell.
              </p>
            </div>

            <div className="au-believe-card au-reveal au-delay-2">
              <span className="au-believe-num">02 / USABILITY</span>
              <h3>Simple beats clever.</h3>
              <p>
                A fast, clear website converts better than a fancy one nobody understands. We build what your customers can use in seconds.
              </p>
            </div>

            <div className="au-believe-card au-reveal au-delay-3">
              <span className="au-believe-num">03 / TRANSPARENCY</span>
              <h3>You should never be in the dark.</h3>
              <p>
                Regular updates, clear timelines, and one person to ask. No jargon walls and no corporate handoffs.
              </p>
            </div>

            <div className="au-believe-card au-reveal au-delay-4">
              <span className="au-believe-num">04 / PARTNERSHIP</span>
              <h3>Launch is the beginning.</h3>
              <p>
                A website is a living thing. We stay around after go-live to fix, improve, and grow it with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. HOW WE WORK (DEEP ROYAL BLUE GRADIENT #2E29FF) ───────── */}
      <section className="au-process-section au-section-blue">
        <div className="au-container">
          <div className="au-section-header au-section-header-white au-reveal">
            <span className="au-section-kicker-white">How We Work</span>
            <h2 className="au-section-title-white">From first call to launch, in four steps</h2>
            <p className="au-section-desc-white">
              A predictable, collaborative roadmap with zero surprises along the way.
            </p>
          </div>

          <div className="au-process-track-wrapper">
            <div className="au-process-timeline-bar" aria-hidden="true" />
            <div className="au-process-grid">
              <div className="au-process-card au-reveal au-delay-1">
                <div className="au-step-pill-blue">01</div>
                <h3>Listen</h3>
                <p>
                  We start with a conversation about your business, your customers, and what success looks like for you.
                </p>
              </div>

              <div className="au-process-card au-reveal au-delay-2">
                <div className="au-step-pill-blue">02</div>
                <h3>Design</h3>
                <p>
                  You see the direction early, in real screens, not vague descriptions. We refine it together before anything is built.
                </p>
              </div>

              <div className="au-process-card au-reveal au-delay-3">
                <div className="au-step-pill-blue">03</div>
                <h3>Build</h3>
                <p>
                  We build with modern, reliable tools so your site is fast, secure, and easy to grow. You get regular progress updates the whole way.
                </p>
              </div>

              <div className="au-process-card au-reveal au-delay-4">
                <div className="au-step-pill-blue">04</div>
                <h3>Support</h3>
                <p>
                  After launch we handle fixes, updates, and next steps, so your site keeps working as hard as you do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT WE BUILD (PURE WHITE #FFFFFF) ───────────────────── */}
      <section className="au-build-section au-section-white">
        <div className="au-container">
          <div className="au-section-header au-reveal">
            <span className="au-section-kicker">What We Build</span>
            <h2 className="au-section-title">What we can do for you</h2>
            <p className="au-section-desc">
              Focused software and web solutions engineered to turn visitors into long-term customers.
            </p>
          </div>

          <div className="au-build-grid">
            <div className="au-build-card au-reveal au-delay-1">
              <div>
                <div className="au-build-icon-wrap">
                  <GlobeIcon />
                </div>
                <h3>Websites that work for you.</h3>
                <p>
                  Business websites, landing pages, and web apps designed to look sharp and turn visitors into enquiries.
                </p>
              </div>
              <Link to="/services/web-development" className="au-build-link">
                <span>Explore web development</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="au-build-card au-reveal au-delay-2">
              <div>
                <div className="au-build-icon-wrap">
                  <CpuIcon />
                </div>
                <h3>AI and automation.</h3>
                <p>
                  Chatbots that capture and qualify leads, workflows that cut repetitive manual work, and smart integrations built around how your team already operates.
                </p>
              </div>
              <Link to="/services/ai-development" className="au-build-link">
                <span>Explore AI solutions</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="au-build-card au-reveal au-delay-3">
              <div>
                <div className="au-build-icon-wrap">
                  <HeartHandshakeIcon />
                </div>
                <h3>Ongoing care.</h3>
                <p>
                  Hosting guidance, updates, SEO basics, and improvements after launch, so you are never left alone with a site that has stopped growing.
                </p>
              </div>
              <Link to="/services/website-maintenance" className="au-build-link">
                <span>Explore maintenance care</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. MEET THE FOUNDER (SOFT ICE-BLUE #EEF2FF) ─────────────── */}
      <section className="au-founder-section au-section-ice">
        <div className="au-container">
          <div className="au-founder-card au-reveal">
            <div className="au-founder-img-col">
              <div className="au-founder-img-wrap">
                <img 
                  src="/hero-my-image.webp" 
                  alt="Harsh Prateek - Founder of NovaDesk" 
                  className="au-founder-img"
                  loading="lazy"
                />
              </div>
              <div className="au-founder-status-pill">
                <span className="au-live-dot" />
                <span>Harsh • Founder & Lead Developer</span>
              </div>
            </div>

            <div className="au-founder-content">
              <span className="au-section-kicker">Meet The Founder</span>
              <h2 className="au-founder-greeting">Hi, I am Harsh.</h2>
              <p className="au-founder-bio">
                I am the founder of NovaDesk and the person you will work with from the first call to launch day and beyond. I build with Next.js, Python, and modern AI tools, and I care as much about the business problem as I do about the code.
              </p>
              <p className="au-founder-bio">
                I am based in India, I like turning messy ideas into clean products, and I answer my own emails.
              </p>

              <div className="au-founder-promise-box">
                <p className="au-founder-promise">
                  “If I would not put it on my own business, I will not ship it on yours.”
                </p>
              </div>

              <div className="au-founder-btn-group">
                <a 
                  href="https://www.linkedin.com/in/itsharshprateek/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="au-btn-linkedin"
                >
                  <LinkedinIcon />
                  <span>Connect on LinkedIn</span>
                </a>
                <a 
                  href="mailto:contact@novadesk.site" 
                  className="au-btn-email"
                >
                  <MailIcon />
                  <span>Email me directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. TOOLS WE BUILD WITH (PURE WHITE #FFFFFF & FULLY CENTERED) ─ */}
      <section className="au-tools-section au-section-white">
        <div className="au-container">
          <div className="au-tools-header au-reveal">
            <span className="au-section-kicker">Tech We Trust</span>
            <h2 className="au-section-title">Tools we build with</h2>
            <p className="au-section-desc">
              We pick technology that is proven, fast, and easy to maintain, so you are never locked into something fragile.
            </p>
          </div>

          <div className="au-tools-grid au-reveal au-delay-1">
            {tools.map((tool, idx) => (
              <div key={idx} className="au-tool-card">
                <div className="au-tool-icon-wrap">
                  {tool.icon}
                </div>
                <div className="au-tool-info">
                  <span className="au-tool-name">{tool.name}</span>
                  <span className="au-tool-badge">{tool.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. SELECTED WORK (SOFT ICE-BLUE #F0F4FF) ────────────────── */}
      <section className="au-work-section au-section-ice">
        <div className="au-container">
          <div className="au-section-header au-reveal">
            <span className="au-section-kicker">Selected Work</span>
            <h2 className="au-section-title">A few things we have built</h2>
            <p className="au-section-desc">
              Real projects with verified outcomes. Honest engineering that delivered measurable business results.
            </p>
          </div>

          <div className="au-work-grid">
            {selectedProjects.map((proj, idx) => (
              <Link 
                key={idx} 
                to={`/case-studies/${proj.slug}`} 
                className={`au-work-card au-reveal au-delay-${idx + 1}`}
              >
                <div className="au-work-media">
                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="au-work-img"
                    loading="lazy" 
                  />
                  <span className="au-work-category-badge">{proj.category}</span>
                </div>
                <div className="au-work-body">
                  <div>
                    <h3 className="au-work-title">{proj.name}</h3>
                    <p className="au-work-outcome">{proj.outcome}</p>
                  </div>
                  <span className="au-work-link">
                    <span>Read case study</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="au-work-center-btn au-reveal au-delay-3">
            <Link to="/case-studies" className="au-btn-outline">
              <span>View all case studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. CLOSING CTA BANNER (ROYAL BLUE GRADIENT) ─────────────── */}
      <section className="au-cta-section au-section-white">
        <div className="au-container">
          <div className="au-cta-box au-reveal">
            <div className="au-cta-mesh-glow" aria-hidden="true" />
            <div className="au-cta-kicker">
              <span className="au-cta-kicker-dot" />
              <span>Direct Founder Access</span>
            </div>
            <h2>Have an idea or a problem worth solving?</h2>
            <p className="au-cta-desc">
              Tell us about it. We will reply personally, usually within one working day, with honest thoughts and a clear next step. No pressure, no sales script.
            </p>
            <div className="au-cta-btn-group">
              <Link to="/get-a-free-quote" className="au-btn-white">
                <span>Let’s talk</span>
                <ArrowRight size={17} />
              </Link>
              <a 
                href="https://calendly.com/itsharshprateek/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="au-btn-outline-white"
              >
                <span>Book Founder Strategy Call</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="au-cta-trust-bar">
              <span>⚡ Direct Engineer Reply</span>
              <span className="au-cta-trust-dot">•</span>
              <span>🔒 Zero Spam or Sales Scripts</span>
              <span className="au-cta-trust-dot">•</span>
              <span>💬 Free Technical Consultation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
