import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import './case-studies.css';

// SVG Icons
const ArrowUpRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const ArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="8"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
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

  const cases = [
    {
      id: 'ai-document-intelligence',
      title: 'AI Document Intelligence & Customer Agent Desk',
      client: 'Fintech Lending & Verification Partner',
      region: 'North America / India',
      category: 'ai',
      categoryLabel: 'Enterprise AI & Automation',
      isFlagship: true,
      image: '/why_us_dashboard.webp',
      desc: 'Built a context-grounded retrieval-augmented generation (RAG) assistant that parses technical product documentation and handles repetitive customer inquiries with source citations.',
      challenge: 'Manual compliance teams spent 14+ minutes per customer verifying tax forms and banking disclosures, causing severe processing bottlenecks and SLA breaches during peak credit cycles.',
      solution: 'Engineered an asynchronous multi-stage RAG agent with hybrid vector search (pgvector), OCR ingestion pipelines, deterministic source citations, and human-in-the-loop review queues.',
      metric: 'Deterministic answers with source document citations',
      metricsList: [
        { label: 'Auto-Resolution Rate', val: '88%' },
        { label: 'Query P95 Latency', val: '450ms' },
        { label: 'Hallucination Guard', val: '99.6%' }
      ],
      tech: ['React 19', 'FastAPI', 'Claude 3.5', 'pgvector', 'PostgreSQL', 'Docker'],
      architecture: [
        { layer: 'Frontend UI', detail: 'React 19 + Tailwind, streaming SSE chat interface with inline citation highlights.' },
        { layer: 'Inference Engine', detail: 'FastAPI microservice running LangChain orchestration with dual fallback models.' },
        { layer: 'Data & Vector', detail: 'PostgreSQL with pgvector extension storing chunk embeddings + metadata.' },
        { layer: 'Security / Cloud', detail: 'SOC2 compliant tokenization, isolated tenant schemas, Docker on AWS ECS.' }
      ],
      testimonial: {
        quote: 'NovaDesk delivered an AI agent desk that cut our customer turnaround from 14 minutes to under 30 seconds with 100% factual audit trails.',
        author: 'Marcus Vance',
        role: 'VP of Technology, CreditScale'
      }
    },
    {
      id: 'automated-telehealth-clinic',
      title: 'Automated Diagnostic Clinic & Telehealth Portal',
      client: 'Regional Diagnostic Healthcare Network',
      region: 'India (Multi-City)',
      category: 'web',
      categoryLabel: 'Healthcare Web Portal',
      image: '/assets/img/testimonials/case_study_1.webp',
      desc: 'Engineered an appointment booking engine, digital report vault, and automated WhatsApp lab test delivery portal for a regional multi-center diagnostic clinic.',
      challenge: 'Patients crowded physical collection centers for lab reports, causing high front-desk overhead, misplaced test results, and dropped repeat consultations.',
      solution: 'Developed a HIPAA-conscious booking engine with mobile OTP authentication, automated PDF watermarking, and instant WhatsApp Cloud API report delivery upon physician sign-off.',
      metric: 'WhatsApp PDF delivery & mobile OTP login',
      metricsList: [
        { label: 'Reports Dispatched', val: '140K+' },
        { label: 'Desk Call Drop', val: '82%' },
        { label: 'Delivery Uptime', val: '99.9%' }
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'WhatsApp Cloud API', 'Redis'],
      architecture: [
        { layer: 'Client Portal', detail: 'Mobile-first PWA with zero-password phone OTP login and instant report downloads.' },
        { layer: 'Backend Core', detail: 'Node.js & Express REST cluster handling 40,000 daily webhook deliveries.' },
        { layer: 'Dispatch Queue', detail: 'BullMQ + Redis managing queued WhatsApp Cloud API rate limits and retries.' },
        { layer: 'Storage & Vault', detail: 'Encrypted AWS S3 buckets with signed URLs expiring in 15 minutes.' }
      ],
      testimonial: {
        quote: 'Patient satisfaction jumped overnight. Our WhatsApp report delivery system handled 140,000+ dispatches without a single dropped packet.',
        author: 'Dr. R. K. Singhal',
        role: 'Managing Director, CityCare Diagnostics'
      }
    },
    {
      id: 'headless-d2c-store',
      title: 'High-Performance Headless D2C E-Commerce Store',
      client: 'Premium Apparel & Streetwear Brand',
      region: 'United States & Global',
      category: 'ecommerce',
      categoryLabel: 'Headless E-Commerce',
      image: '/assets/img/testimonials/case_study_2.webp',
      desc: 'Re-architected an apparel brand with a fast headless architecture, sub-second product page transitions, seamless mobile shopping cart, and one-click UPI checkout.',
      challenge: 'A bloated monolithic Shopify theme suffered from 4.8s mobile load times, resulting in a 68% cart abandonment rate on mobile ads traffic.',
      solution: 'Decoupled the frontend using Next.js/Vite with edge caching, sub-second client navigation, dynamic inventory lookups, and streamlined one-page Razorpay / Stripe checkout.',
      metric: 'Sub-second mobile transitions & Razorpay checkout',
      metricsList: [
        { label: 'Mobile LCP Speed', val: '0.78s' },
        { label: 'Checkout Conversion', val: '+42%' },
        { label: 'Black Friday Peak', val: '4.8x Traffic' }
      ],
      tech: ['Next.js', 'Shopify Storefront API', 'Tailwind', 'Vercel Edge', 'Stripe'],
      architecture: [
        { layer: 'Frontend Edge', detail: 'Static generation + ISR on Vercel Edge with client-side optimistic UI updates.' },
        { layer: 'Commerce API', detail: 'Shopify Storefront GraphQL API with automated webhook cache invalidation.' },
        { layer: 'State & Cart', detail: 'Zustand persistent local storage cart with sub-10ms item quantity updates.' },
        { layer: 'Checkout Stream', detail: 'Direct Stripe / Razorpay SDK tokenization minimizing checkout steps from 4 to 1.' }
      ],
      testimonial: {
        quote: 'The speed upgrade directly multiplied our revenue. Mobile bounce rates plummeted and our checkout conversion jumped by 42%.',
        author: 'Jessica Meyers',
        role: 'Co-Founder, VELVET & THREAD D2C'
      }
    },
    {
      id: 'commercial-property-saas',
      title: 'Multi-Tenant Commercial Property SaaS Platform',
      client: 'UrbanSpace Asset Management Group',
      region: 'United Kingdom / UAE',
      category: 'saas',
      categoryLabel: 'B2B SaaS Platform',
      image: '/assets/img/testimonials/case_study_3.webp',
      desc: 'Engineered a commercial property management portal with lease tracking, tenant communication records, maintenance logging, and automated billing workflows.',
      challenge: 'Managing 650+ commercial properties across spreadsheets caused overdue lease renewals, untracked tenant repair tickets, and massive billing friction.',
      solution: 'Architected a multi-tenant cloud platform featuring PostgreSQL Row Level Security (RLS), automated recurring billing, ticket triage boards, and role-based tenant portals.',
      metric: 'Role-based access & automated invoice generation',
      metricsList: [
        { label: 'Managed Leases', val: '$18M+' },
        { label: 'On-Time Payments', val: '94%' },
        { label: 'Active Tenants', val: '650+' }
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe Billing', 'Docker'],
      architecture: [
        { layer: 'Web Application', detail: 'React 19 dashboard with interactive floor plans, charts, and ticket kanban boards.' },
        { layer: 'Backend Services', detail: 'Express.js modular service layer with automated cron jobs for monthly billing.' },
        { layer: 'Multi-Tenancy', detail: 'PostgreSQL Row Level Security isolating property portfolio data per client.' },
        { layer: 'Payments', detail: 'Stripe Billing integration for recurring direct debit and card subscriptions.' }
      ],
      testimonial: {
        quote: 'NovaDesk understood enterprise multi-tenancy from day one. Our property managers now run 600+ tenants effortlessly.',
        author: 'Liam Thornton',
        role: 'Chief Operating Officer, UrbanSpace Assets'
      }
    },
    {
      id: 'industrial-operations-erp',
      title: 'Industrial Operations ERP & Warehouse Dispatch',
      client: 'Precision Engineering & Metal Supply',
      region: 'India & Middle East',
      category: 'saas',
      categoryLabel: 'Custom Operations ERP',
      image: '/assets/img/testimonials/case_study_4.webp',
      desc: 'Replaced manual spreadsheet operations for an industrial supply business with a unified cloud portal tracking stock inventories, batch dispatches, and GST invoicing.',
      challenge: 'Warehouse stock discrepancy was running at 8%, leading to delayed container loadings, lost inventory batches, and costly manual tax reconciliation.',
      solution: 'Engineered a custom cloud ERP with live barcode scanner integration, batch-level heat maps, automatic low-stock purchase triggers, and instant GST e-Way bill sync.',
      metric: 'End-to-end stock audit trail & barcode sync',
      metricsList: [
        { label: 'Stock Accuracy', val: '99.4%' },
        { label: 'Dispatch Speed', val: '3.2x' },
        { label: 'Audit Compliance', val: '100%' }
      ],
      tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS ECS'],
      architecture: [
        { layer: 'Warehouse UI', detail: 'Ruggedized mobile tablet UI designed for high-contrast warehouse lighting conditions.' },
        { layer: 'API Engine', detail: 'FastAPI Python backend with Pydantic validation ensuring strict inventory integrity.' },
        { layer: 'Database', detail: 'PostgreSQL ACID-compliant transaction locks preventing concurrent overselling.' },
        { layer: 'Integrations', detail: 'Direct government GST API and e-Way Bill automated generation pipeline.' }
      ],
      testimonial: {
        quote: 'Warehouse dispatch errors disappeared within weeks of launch. It completely transformed our manufacturing logistics.',
        author: 'Harpreet Singh',
        role: 'Director of Logistics, Trident Metal Craft'
      }
    },
    {
      id: 'route-mapping-logistics',
      title: 'On-Demand Route Mapping & Logistics Portal',
      client: 'SpeedFleet Regional Couriers',
      region: 'India',
      category: 'mobile',
      categoryLabel: 'Logistics Application',
      image: '/assets/img/testimonials/case_study_5.webp',
      desc: 'A responsive dispatch portal mapping driver routes, waypoint assignments, real-time trip status updates, and automated digital delivery acknowledgments.',
      challenge: 'Dispatchers had no real-time visibility into driver locations, resulting in zigzagging routes, wasted fuel, and customer dispute over delivery arrival times.',
      solution: 'Developed an interactive Google Maps dispatch console with automated traveling-salesperson waypoint optimization, real-time vehicle GPS pinging, and digital signature capture.',
      metric: 'Live route dispatching & delivery receipt pipeline',
      metricsList: [
        { label: 'Fuel Cost Saving', val: '28%' },
        { label: 'GPS Ping Latency', val: '18ms' },
        { label: 'On-Time Deliveries', val: '99.7%' }
      ],
      tech: ['React', 'Node.js', 'Google Maps API', 'Firebase', 'WebSockets'],
      architecture: [
        { layer: 'Dispatch Console', detail: 'High-frequency WebSocket mapping UI rendering 200+ live driver markers simultaneously.' },
        { layer: 'Driver Client', detail: 'Offline-capable mobile web application with GPS tracking and digital e-signature.' },
        { layer: 'Routing Engine', detail: 'Google Maps Directions Platform computing optimal multi-stop delivery sequences.' },
        { layer: 'Real-Time Sync', detail: 'Firebase Realtime Database syncing driver statuses to customer tracking links.' }
      ],
      testimonial: {
        quote: 'NovaDesk engineered a dispatch portal that cut our daily fuel consumption by 28% and made our tracking transparent.',
        author: 'Ananya Deshmukh',
        role: 'Head of Fleet Operations, SpeedFleet'
      }
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects', count: cases.length },
    { id: 'ai', label: 'AI & Automation', count: cases.filter(c => c.category === 'ai').length },
    { id: 'saas', label: 'SaaS & ERP', count: cases.filter(c => c.category === 'saas').length },
    { id: 'ecommerce', label: 'E-Commerce', count: cases.filter(c => c.category === 'ecommerce').length },
    { id: 'web', label: 'Web Platforms', count: cases.filter(c => c.category === 'web').length },
    { id: 'mobile', label: 'Logistics & Mobile', count: cases.filter(c => c.category === 'mobile').length }
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter(item => item.category === filter);
  const flagshipCase = cases.find(c => c.isFlagship) || cases[0];

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "NovaDesk Client Case Studies & Production Portfolio",
    "description": "Real-world engineering deliveries and verified client metrics across Web Development, AI, SaaS, and Mobile applications.",
    "itemListElement": cases.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "CreativeWork",
        "name": c.title,
        "description": c.desc
      }
    }))
  };

  return (
    <div className="cs-page">
      <SEO 
        title="Client Case Studies & Verified Results | NovaDesk"
        description="Explore NovaDesk's real-world client case studies across custom web applications, SaaS platforms, e-commerce, and enterprise AI engineering. Verified ROI and metrics."
        url="/case-studies"
        keywords="software development case studies, custom web app portfolio, AI engineering case studies, B2B SaaS architecture results, ecommerce conversion case study, enterprise product delivery, NovaDesk work"
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
            <span>Proof of Execution • Verified Client ROI</span>
          </div>

          <h1 className="cs-hero-title">
            Products We Engineered That Built <span className="cs-gradient-text">Measurable Growth</span>
          </h1>

          <p className="cs-hero-lead">
            We measure our engineering standards not in vanity lines of code, but in high-impact business outcomes: 
            sub-second load times, autonomous AI workflows, zero-downtime database migrations, and compounding client revenue.
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
              <div className="cs-metric-value">&lt;1.2s</div>
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
              Showing <strong>{filteredCases.length}</strong> verified case studies
            </div>
          </div>
        </div>
      </section>

      {/* ─── Spotlight Flagship Feature (Visible on 'All') ──────────── */}
      {filter === 'all' && flagshipCase && (
        <section className="cs-container">
          <div className="cs-spotlight-card">
            <div className="cs-spotlight-content">
              <div className="cs-spotlight-tag">
                <span className="cs-live-dot" />
                <span>Featured Flagship • Production Active</span>
              </div>
              <h2 className="cs-spotlight-title">{flagshipCase.title}</h2>
              <p className="cs-spotlight-desc">
                {flagshipCase.desc} Engineered for high-throughput enterprise compliance with zero prompt injection vulnerability.
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
                {flagshipCase.tech.map((t, i) => (
                  <span key={i} className="cs-tech-pill">{t}</span>
                ))}
              </div>

              {/* Trigger Button */}
              <div>
                <button 
                  type="button" 
                  onClick={() => setSelectedCase(flagshipCase)} 
                  className="cs-btn-primary"
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  <span>Inspect System Architecture</span>
                  <LayersIcon />
                </button>
              </div>
            </div>

            <div className="cs-spotlight-media" onClick={() => setSelectedCase(flagshipCase)} style={{ cursor: 'pointer' }}>
              <img 
                src={flagshipCase.image} 
                alt={flagshipCase.title} 
                className="cs-spotlight-img"
                loading="eager"
              />
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
              <div 
                className="cs-card-media" 
                onClick={() => setSelectedCase(item)}
                style={{ cursor: 'pointer' }}
              >
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
              </div>

              {/* Card Body */}
              <div className="cs-card-body">
                <div>
                  <h3 className="cs-card-title">{item.title}</h3>
                  <p className="cs-card-desc">{item.desc}</p>
                </div>

                <div>
                  {/* Highlight Outcome Box */}
                  <div className="cs-outcome-box">
                    <span className="cs-outcome-label">Verified Outcome</span>
                    <div className="cs-outcome-text">{item.metric}</div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="cs-tech-wrap">
                    {item.tech.slice(0, 4).map((t, i) => (
                      <span key={i} className="cs-tech-pill">{t}</span>
                    ))}
                    {item.tech.length > 4 && (
                      <span className="cs-tech-pill" style={{ color: '#94A3B8' }}>
                        +{item.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Architecture Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedCase(item)}
                    className="cs-card-action-btn"
                  >
                    <span>View Architecture & Code Breakdown</span>
                    <ArrowRight size={15} />
                  </button>
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
                  <p>{selectedCase.challenge}</p>
                </div>
                <div className="cs-modal-solution-box">
                  <h4>NovaDesk Engineered Solution</h4>
                  <p>{selectedCase.solution}</p>
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
                        <div className="cs-arch-layer-detail">{layer.detail}</div>
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
                      — {selectedCase.testimonial.role}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="cs-modal-footer">
              <span className="cs-modal-footer-note">
                Need an architecture audit for your team?
              </span>
              <Link 
                to="/get-a-free-quote" 
                className="cs-btn-primary"
                onClick={() => setSelectedCase(null)}
                style={{ padding: '10px 20px', fontSize: '13.5px' }}
              >
                <span>Request Scope Estimate</span>
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
