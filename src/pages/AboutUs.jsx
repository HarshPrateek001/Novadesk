import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import './about-us.css';

// SVG Icons (White & Royal Blue #2E29FF)
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

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" }
  ];

  const tools = [
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "Python",
    "Supabase",
    "n8n",
    "OpenAI & Claude APIs"
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
    <div className="au-page">
      <SEO 
        title="About NovaDesk | Founder-Led Web Development and AI Studio"
        description="Meet NovaDesk, a founder-led studio building fast, modern websites and AI-powered tools for growing businesses. Honest advice, personal service, real results."
        url="/about-us"
        keywords="about NovaDesk, founder-led software studio, Harsh Prateek developer, boutique web development agency, AI workflow automation studio, honest web development India"
        breadcrumbs={breadcrumbs}
        schema={aboutSchema}
      />

      {/* Ambient Lighting Background */}
      <div className="au-ambient-glow" aria-hidden="true" />

      {/* ─── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="au-hero">
        <div className="au-container">
          <div className="au-breadcrumb-wrap" style={{ marginBottom: '20px' }}>
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="au-hero-grid">
            <div>
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
                <CheckCircleIcon />
                <span>Zero account managers • Direct developer access • Real results</span>
              </div>
            </div>

            {/* Founder / Studio Visual Frame */}
            <div className="au-hero-visual-card">
              <div className="au-hero-img-wrap">
                <img 
                  src="/novadesk_founders_duo_feathered.webp" 
                  alt="NovaDesk Studio Founders" 
                  className="au-hero-img"
                  loading="eager"
                />
              </div>
              <div className="au-hero-badge-float">
                <div>
                  <div className="au-hero-badge-title">NovaDesk Studio</div>
                  <div className="au-hero-badge-sub">Founder-Led Engineering</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="au-live-dot" />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#2E29FF' }}>ACTIVE BUILDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OUR STORY SECTION ───────────────────────────────────── */}
      <section className="au-story-section">
        <div className="au-container">
          <div className="au-story-grid">
            <div className="au-story-heading-sticky">
              <span className="au-section-kicker">Our Story</span>
              <h2 className="au-section-title">Why NovaDesk exists</h2>
              <p className="au-section-desc">
                Understanding the real business challenge before writing a single line of code.
              </p>
            </div>

            <div className="au-story-content">
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

      {/* ─── 3. WHAT WE BELIEVE SECTION ─────────────────────────────── */}
      <section className="au-believe-section">
        <div className="au-container">
          <div className="au-section-header">
            <span className="au-section-kicker">What We Believe</span>
            <h2 className="au-section-title">Four things we hold on to</h2>
            <p className="au-section-desc">
              Values in action that guide every client interaction and engineering decision.
            </p>
          </div>

          <div className="au-believe-grid">
            <div className="au-believe-card">
              <span className="au-believe-num">01 / INTEGRITY</span>
              <h3>Honest over impressive.</h3>
              <p>
                We will tell you what will work, what will not, and what it will cost, even when a bigger promise would be easier to sell.
              </p>
            </div>

            <div className="au-believe-card">
              <span className="au-believe-num">02 / USABILITY</span>
              <h3>Simple beats clever.</h3>
              <p>
                A fast, clear website converts better than a fancy one nobody understands. We build what your customers can use in seconds.
              </p>
            </div>

            <div className="au-believe-card">
              <span className="au-believe-num">03 / TRANSPARENCY</span>
              <h3>You should never be in the dark.</h3>
              <p>
                Regular updates, clear timelines, and one person to ask. No jargon walls and no corporate handoffs.
              </p>
            </div>

            <div className="au-believe-card">
              <span className="au-believe-num">04 / PARTNERSHIP</span>
              <h3>Launch is the beginning.</h3>
              <p>
                A website is a living thing. We stay around after go-live to fix, improve, and grow it with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. HOW WE WORK (PROCESS) ────────────────────────────────── */}
      <section className="au-process-section">
        <div className="au-container">
          <div className="au-section-header">
            <span className="au-section-kicker">How We Work</span>
            <h2 className="au-section-title">From first call to launch, in four steps</h2>
            <p className="au-section-desc">
              A predictable, collaborative roadmap with zero surprises along the way.
            </p>
          </div>

          <div className="au-process-grid">
            <div className="au-process-card">
              <span className="au-step-pill">01</span>
              <h3>Listen</h3>
              <p>
                We start with a conversation about your business, your customers, and what success looks like for you.
              </p>
            </div>

            <div className="au-process-card">
              <span className="au-step-pill">02</span>
              <h3>Design</h3>
              <p>
                You see the direction early, in real screens, not vague descriptions. We refine it together before anything is built.
              </p>
            </div>

            <div className="au-process-card">
              <span className="au-step-pill">03</span>
              <h3>Build</h3>
              <p>
                We build with modern, reliable tools so your site is fast, secure, and easy to grow. You get regular progress updates the whole way.
              </p>
            </div>

            <div className="au-process-card">
              <span className="au-step-pill">04</span>
              <h3>Support</h3>
              <p>
                After launch we handle fixes, updates, and next steps, so your site keeps working as hard as you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT WE BUILD (SERVICES RECAP) ───────────────────────── */}
      <section className="au-build-section">
        <div className="au-container">
          <div className="au-section-header">
            <span className="au-section-kicker">What We Build</span>
            <h2 className="au-section-title">What we can do for you</h2>
            <p className="au-section-desc">
              Focused software and web solutions engineered to turn visitors into long-term customers.
            </p>
          </div>

          <div className="au-build-grid">
            <div className="au-build-card">
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

            <div className="au-build-card">
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

            <div className="au-build-card">
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

      {/* ─── 6. MEET THE FOUNDER ─────────────────────────────────────── */}
      <section className="au-founder-section">
        <div className="au-container">
          <div className="au-founder-card">
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

      {/* ─── 7. TOOLS WE BUILD WITH (TECH WE TRUST) ──────────────────── */}
      <section className="au-tools-section">
        <div className="au-container">
          <span className="au-section-kicker">Tech We Trust</span>
          <h2 className="au-section-title">Tools we build with</h2>
          <p className="au-section-desc">
            We pick technology that is proven, fast, and easy to maintain, so you are never locked into something fragile.
          </p>

          <div className="au-tools-strip">
            {tools.map((tool, idx) => (
              <div key={idx} className="au-tool-pill">
                <span className="au-tool-dot" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. SELECTED WORK (REAL PROJECTS) ────────────────────────── */}
      <section className="au-work-section">
        <div className="au-container">
          <div className="au-section-header">
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
                className="au-work-card"
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

          <div className="au-work-center-btn">
            <Link to="/case-studies" className="au-btn-outline">
              <span>View all case studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. CLOSING CTA BANNER ───────────────────────────────────── */}
      <section className="au-cta-section">
        <div className="au-container">
          <div className="au-cta-box">
            <h2>Have an idea or a problem worth solving?</h2>
            <p>
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
          </div>
        </div>
      </section>
    </div>
  );
}
