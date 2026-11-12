import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { caseStudies } from '../data/caseStudiesData';
import './case-studies.css';

// SVG Icons (Strictly White & Royal Blue #2E29FF)
const ArrowUpRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const ArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="8" />
  </svg>
);

const LayersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export default function CaseStudies() {
  const [filter, setFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when architecture modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedCase(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
    document.body.style.overflow = '';
    return undefined;
  }, [selectedCase]);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects', count: caseStudies.length },
    { id: 'ai', label: 'Indigenous AI', count: caseStudies.filter(c => c.category === 'ai').length },
    { id: 'ecommerce', label: 'E-Commerce & D2C', count: caseStudies.filter(c => c.category === 'ecommerce').length },
    { id: 'saas', label: 'Enterprise SaaS & CMS', count: caseStudies.filter(c => c.category === 'saas').length }
  ];

  const filteredCases = filter === 'all' ? caseStudies : caseStudies.filter(item => item.category === filter);
  const flagshipCase = caseStudies.find(c => c.isFlagship) || caseStudies[0];

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "NovaDesk Client Case Studies & Production Portfolio",
    "description": "Real-world engineering deliveries and verified client metrics across Custom Web Platforms, E-Commerce, SaaS, and Indigenous AI systems.",
    "itemListElement": caseStudies.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "TechArticle",
        "name": c.title,
        "description": c.desc,
        "url": `https://www.novadesk.site/case-studies/${c.slug}`
      }
    }))
  };

  return (
    <div className="cs-page">
      <SEO 
        title="Client Case Studies & Verified Results | NovaDesk"
        description="Explore NovaDesk's real-world client case studies: Buy Elaichi Online, Mahaveer Herbals, RiYO Advertising CMS, Authentiq AI, and indigenous FORGE AI."
        url="/case-studies"
        keywords="NovaDesk case studies, custom software portfolio, Mahaveer Herbals case study, Buy Elaichi Online case study, RiYO advertising CMS, Authentiq SaaS, FORGE AI engine"
        breadcrumbs={breadcrumbs}
        schema={portfolioSchema}
      />

      {/* Ambient Lighting & Grid Elements */}
      <div className="cs-ambient-glow" aria-hidden="true" />
      <div className="cs-grid-overlay" aria-hidden="true" />

      {/* ─── Hero Section ────────────────────────────────────────────── */}
      <section className="cs-hero">
        <div className="cs-container">
          <div className="cs-breadcrumb-wrap">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="cs-pill-badge">
            <span className="cs-live-dot" />
            <span>Proof of Execution • Verified Production Deliveries</span>
          </div>

          <h1 className="cs-hero-title">
            Products We Engineered That Built <span className="cs-blue-gradient">Measurable Growth</span>
          </h1>

          <p className="cs-hero-lead">
            We measure engineering standards in high-impact business outcomes: 
            sub-second load times, autonomous workflows, zero-downtime database migrations, and compounding client revenue.
          </p>

          {/* Impact Stats Grid */}
          <div className="cs-metrics-grid">
            <div className="cs-metric-card">
              <div className="cs-metric-value">35+</div>
              <div className="cs-metric-label">Web & AI Products Shipped</div>
            </div>
            <div className="cs-metric-card">
              <div className="cs-metric-value">99.98%</div>
              <div className="cs-metric-label">Average SLA Production Uptime</div>
            </div>
            <div className="cs-metric-card">
              <div className="cs-metric-value">&lt;0.8s</div>
              <div className="cs-metric-label">Average LCP Load Times</div>
            </div>
            <div className="cs-metric-card">
              <div className="cs-metric-value">$40M+</div>
              <div className="cs-metric-label">Client Transactions Handled</div>
            </div>
          </div>

          {/* Interactive Filter Navigation */}
          <div className="cs-filter-section">
            <div className="cs-filter-tabs" role="tablist" aria-label="Filter case studies by category">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat.id}
                  className={`cs-tab-btn ${filter === cat.id ? 'is-active' : ''}`}
                >
                  <span>{cat.label}</span>
                  <span className="cs-tab-count">{cat.count}</span>
                </button>
              ))}
            </div>
            <div className="cs-filter-stat">
              Showing <strong>{filteredCases.length}</strong> production case studies
            </div>
          </div>
        </div>
      </section>

      {/* ─── Spotlight Flagship Feature (Visible on 'All' or 'AI') ───── */}
      {(filter === 'all' || filter === 'ai') && flagshipCase && (
        <section className="cs-container">
          <div className="cs-spotlight-card">
            <div className="cs-spotlight-content">
              <div className="cs-spotlight-tag">
                <span className="cs-live-dot" />
                <span>Featured Indigenous IP • Production Active</span>
              </div>
              <h2 className="cs-spotlight-title">{flagshipCase.title}</h2>
              <p className="cs-spotlight-desc">
                {flagshipCase.desc} Engineered in-house for sub-millisecond canvas rendering with zero video buffering.
              </p>

              {/* Spotlight Live Stats */}
              <div className="cs-spotlight-stats">
                {flagshipCase.metricsList.map((m, idx) => (
                  <div key={idx} className="cs-stat-item">
                    <div className="cs-stat-item-label">{m.label}</div>
                    <div className="cs-stat-item-val">{m.val}</div>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="cs-tech-wrap">
                {flagshipCase.techStack.map((t, i) => (
                  <span key={i} className="cs-tech-pill">{t}</span>
                ))}
              </div>

              {/* Trigger Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link 
                  to={`/case-studies/${flagshipCase.slug}`}
                  className="cs-btn-primary"
                >
                  <span>Read In-Depth Case Study</span>
                  <ArrowRight size={16} />
                </Link>
                <button 
                  type="button" 
                  onClick={() => setSelectedCase(flagshipCase)} 
                  className="cs-btn-primary"
                  style={{ background: '#FFFFFF', color: '#2E29FF', border: '1.5px solid #2E29FF', boxShadow: 'none' }}
                >
                  <span>Architecture Blueprint</span>
                  <LayersIcon />
                </button>
              </div>
            </div>

            <div className="cs-spotlight-media">
              <Link to={`/case-studies/${flagshipCase.slug}`} style={{ display: 'block' }}>
                <img 
                  src={flagshipCase.image} 
                  alt={flagshipCase.title} 
                  className="cs-spotlight-img"
                  loading="eager"
                />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── Case Studies Grid ──────────────────────────────────────── */}
      <section className="cs-container">
        <div className="cs-grid">
          {filteredCases.map((item) => (
            <article key={item.id} className="cs-card">
              {/* Card Mockup Window */}
              <div className="cs-card-media">
                <Link to={`/case-studies/${item.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="cs-card-img" 
                    loading="lazy" 
                  />
                  <div className="cs-card-badge-overlay">
                    <span className="cs-category-badge">{item.categoryLabel}</span>
                  </div>
                  <div className="cs-card-arrow-btn" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </div>

              {/* Card Body */}
              <div className="cs-card-body">
                <div>
                  <h3 className="cs-card-title">
                    <Link to={`/case-studies/${item.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="cs-card-desc">{item.desc}</p>
                </div>

                <div>
                  {/* Highlight Outcome Box */}
                  <div className="cs-outcome-box">
                    <span className="cs-outcome-label">Verified Production Outcome</span>
                    <div className="cs-outcome-text">{item.outcomes[0]}</div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="cs-tech-wrap">
                    {item.techStack.slice(0, 4).map((t, i) => (
                      <span key={i} className="cs-tech-pill">{t}</span>
                    ))}
                    {item.techStack.length > 4 && (
                      <span className="cs-tech-pill" style={{ color: '#64748B' }}>
                        +{item.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="cs-card-btn-group">
                    <Link
                      to={`/case-studies/${item.slug}`}
                      className="cs-btn-solid-blue"
                    >
                      <span>Read In-Depth Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSelectedCase(item)}
                      className="cs-card-action-btn"
                    >
                      <span>Quick Architecture Peek</span>
                      <LayersIcon />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Technical Architecture Deep Dive Modal ─────────────────── */}
      {selectedCase && (
        <div 
          className="cs-modal-backdrop" 
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCase(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cs-modal-title"
        >
          <div className="cs-modal-window">
            {/* Modal Header */}
            <div className="cs-modal-header">
              <div>
                <span className="cs-modal-badge">
                  {selectedCase.categoryLabel} • {selectedCase.region}
                </span>
                <h3 id="cs-modal-title" className="cs-modal-title">
                  {selectedCase.title}
                </h3>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedCase(null)} 
                className="cs-modal-close-btn"
                aria-label="Close modal"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Modal Content */}
            <div className="cs-modal-body">
              {/* Challenge vs Solution Grid */}
              <div className="cs-modal-grid-2">
                <div className="cs-modal-box">
                  <h4>The Business Problem</h4>
                  <p>{selectedCase.challengesSolutions[0].challengeDesc}</p>
                </div>
                <div className="cs-modal-solution-box">
                  <h4>NovaDesk Engineered Solution</h4>
                  <p>{selectedCase.challengesSolutions[0].solutionDesc}</p>
                </div>
              </div>

              {/* Verified Metrics */}
              <div>
                <div className="cs-modal-section-title">
                  <CheckCircleIcon />
                  <span>Verified Production Benchmarks</span>
                </div>
                <div className="cs-modal-stats">
                  {selectedCase.metricsList.map((m, idx) => (
                    <div key={idx} className="cs-stat-item">
                      <div className="cs-stat-item-label">{m.label}</div>
                      <div className="cs-stat-item-val" style={{ fontSize: '18px' }}>{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Breakdown Layers */}
              {selectedCase.architecture && (
                <div>
                  <div className="cs-modal-section-title">
                    <LayersIcon />
                    <span>Technical Architecture Blueprint</span>
                  </div>
                  <div className="cs-architecture-layer">
                    {selectedCase.architecture.map((layer, idx) => (
                      <div key={idx} className="cs-arch-row">
                        <div className="cs-arch-layer-name">{layer.layer}</div>
                        <div className="cs-arch-layer-detail">
                          <strong>{layer.title}:</strong> {layer.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Testimonial */}
              {selectedCase.testimonial && (
                <div className="cs-modal-testimonial">
                  <p className="cs-modal-testimonial-quote">
                    "{selectedCase.testimonial.quote}"
                  </p>
                  <div className="cs-modal-testimonial-author">
                    {selectedCase.testimonial.author}
                    <span className="cs-modal-testimonial-role">
                      — {selectedCase.testimonial.role}, {selectedCase.testimonial.company}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="cs-modal-footer">
              <span className="cs-modal-footer-note">
                Looking for detailed technical specs?
              </span>
              <Link 
                to={`/case-studies/${selectedCase.slug}`} 
                className="cs-btn-primary"
                onClick={() => setSelectedCase(null)}
                style={{ padding: '10px 20px', fontSize: '13.5px' }}
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ─── Engineering Standards Strip ────────────────────────────── */}
      <section className="cs-standards-section">
        <div className="cs-container">
          <div className="cs-standards-title">
            <span className="cs-pill-badge" style={{ marginBottom: '12px' }}>Engineering Principles</span>
            <h2>How NovaDesk Delivers Predictable Results</h2>
            <p>Every product we ship adheres to four non-negotiable architectural mandates from discovery to deployment.</p>
          </div>

          <div className="cs-standards-grid">
            <div className="cs-standard-card">
              <span className="cs-standard-num">01 / ARCHITECTURE</span>
              <h3>Modular & Type-Safe</h3>
              <p>Strict TypeScript and modular component layers so your product scales with future teams without rewrite debt.</p>
            </div>

            <div className="cs-standard-card">
              <span className="cs-standard-num">02 / PERFORMANCE</span>
              <h3>Sub-Second Speed</h3>
              <p>Edge asset caching, WebP optimizations, and lazy hydration tuned for maximum Google Core Web Vitals scores.</p>
            </div>

            <div className="cs-standard-card">
              <span className="cs-standard-num">03 / SECURITY</span>
              <h3>Bank-Grade Hardening</h3>
              <p>Strict CORS, CSRF defenses, RLS data isolation, and encrypted secrets management matching SOC2 and HIPAA standards.</p>
            </div>

            <div className="cs-standard-card">
              <span className="cs-standard-num">04 / OWNERSHIP</span>
              <h3>100% IP Handover</h3>
              <p>Zero vendor lock-in. Full repository ownership, clean documentation, CI/CD pipelines, and zero proprietary runtimes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom High-Converting CTA Banner ──────────────────────── */}
      <section className="cs-container">
        <div className="cs-cta-box">
          <h2>Ready to Ship Your Product with Proven Engineers?</h2>
          <p>
            Tell us about your product vision, timeline, and goals. We will provide a comprehensive architecture breakdown,
            milestone deliverables, and transparent pricing within 24 hours.
          </p>
          <div className="cs-cta-btn-group">
            <Link to="/get-a-free-quote" className="cs-btn-white">
              <span>Get a Detailed Scope Estimate</span>
              <ArrowRight size={17} />
            </Link>
            <a 
              href="https://calendly.com/itsharshprateek/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cs-btn-outline-white"
            >
              <span>Book Founder Strategy Call</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
