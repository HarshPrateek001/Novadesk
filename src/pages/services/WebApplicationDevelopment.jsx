import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import './ai-service-template.css';

// SVG Icons
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="currentColor"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
  </svg>
);

const IconChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const HeroCheckBadge = () => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'rgba(46, 41, 255, 0.1)',
    color: '#2E29FF',
    flexShrink: 0
  }}>
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </span>
);

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={`nd-faq-item ${open ? 'nd-faq-open' : ''}`}>
      <button type="button" className="nd-faq-q" onClick={onToggle}>
        <span>{q}</span>
        <span className="nd-faq-icon">
          <IconChevronDown />
        </span>
      </button>
      {open && <div className="nd-faq-a">{a}</div>}
    </div>
  );
}

export default function WebApplicationDevelopment() {
  const [activeArch, setActiveArch] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/web-development" },
    { name: "Web Application Development", url: "/services/web-application-development" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Application Development Services",
    "serviceType": "Bespoke Web Application & Cloud Engineering",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "keywords": "web application development company, custom web app development services, SaaS application development agency, hire full stack developers, Next.js web application engineering, cloud portal software, NovaDesk web apps",
    "description": "Architecting bespoke, high-performance web applications, customer portals, and multi-tenant SaaS platforms using Next.js, React, Node.js, and cloud relational databases with guaranteed 100% IP ownership."
  };

  const faqs = [
    {
      q: "What is the difference between a simple website and a custom web application?",
      a: "A website is primarily informational—static pages with limited user interactivity and minimal backend state. A web application is an interactive software platform that executes complex business logic, manages user accounts, processes payments, manipulates relational databases, and runs background worker tasks—such as a SaaS dashboard, CRM, or client portal."
    },
    {
      q: "How long does it take to architect and deploy a custom web application?",
      a: "A focused MVP or internal portal typically takes 3 to 6 weeks to ship. Larger, multi-tenant enterprise applications with complex third-party integrations and role-based permissions typically require 6 to 10 weeks. We deliver clickable staging builds every single Friday so you verify progress in real time."
    },
    {
      q: "What technology stack do you use for modern web applications?",
      a: "Our core production stack utilizes Next.js 15 and React on the frontend with TypeScript, paired with Node.js, Go, or Python backends, PostgreSQL/Supabase for relational storage, Redis for in-memory caching and message queues, and Tailwind CSS for responsive styling."
    },
    {
      q: "Who owns the source code and cloud infrastructure after launch?",
      a: "You retain 100% intellectual property sovereignty from day one. All GitHub repositories, cloud infrastructure (AWS/GCP), Supabase databases, and API keys are provisioned directly in your company's name with zero proprietary lock-in."
    },
    {
      q: "How do you ensure the web application is secure against cyber attacks?",
      a: "Every application is engineered to meet strict OWASP Top 10 standards. We implement parameterized database queries, strict Content Security Policies (CSP), HTTP-only cookie session authentication, CSRF tokens, token bucket rate limiting, and automated vulnerability scanning on every pull request."
    },
    {
      q: "What is the typical investment required for custom web application development?",
      a: "Custom web applications typically range from ₹1,00,000 to ₹5,00,000+ ($1,500 to $7,000+ USD) depending on database complexity, role hierarchies, and third-party integrations. We operate on predictable, fixed-price milestone sprints with zero surprise change orders."
    }
  ];

  const faqSchema = {
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
  };

  const architectures = [
    {
      badge: "Full-Stack React",
      complexity: "Production Grade",
      title: "Next.js 15 App Router & React Server Components",
      tagline: "Streaming server-side rendering and static edge caching delivering instant page transitions and maximum SEO equity.",
      useCases: ["SaaS Dashboards", "Customer Self-Service Portals", "High-Traffic Web Apps", "Dynamic Marketplaces"],
      steps: [
        { badge: "Layer 01", title: "React Server Components (RSC)", desc: "Zero client-side bundle overhead for data-heavy components with instant server streaming." },
        { badge: "Layer 02", title: "Type-Safe Server Actions & tRPC", desc: "End-to-end typed contracts connecting frontend UI forms directly to backend databases." },
        { badge: "Layer 03", title: "Edge Middleware & Auth", desc: "Sub-20ms authentication verification and dynamic routing running directly on edge servers." },
        { badge: "Layer 04", title: "Automated Core Web Vitals", desc: "Strict image optimization, font preloading, and zero layout shift on mobile and desktop." }
      ]
    },
    {
      badge: "Distributed Backend",
      complexity: "High Concurrency",
      title: "Node.js & Go Microservices Architecture",
      tagline: "Resilient containerized backend services engineered for high concurrent user loads and horizontal auto-scaling.",
      useCases: ["Enterprise Cloud Platforms", "Transactional Payment APIs", "Data Aggregation Pipelines", "High-Volume REST/gRPC APIs"],
      steps: [
        { badge: "Step 01", title: "High-Speed API Gateway", desc: "Rate limiting, SSL termination, and request telemetry handling thousands of requests per second." },
        { badge: "Step 02", title: "Modular Domain Microservices", desc: "Decoupled domain services communicating via lightweight gRPC and RabbitMQ event buses." },
        { badge: "Step 03", title: "Connection Pooled PostgreSQL", desc: "Optimized read replicas, index partitioning, and sub-5ms query response benchmarks." },
        { badge: "Step 04", title: "Docker & Kubernetes Deployment", desc: "Self-healing container clusters orchestrated on AWS ECS/EKS with automated rolling updates." }
      ]
    },
    {
      badge: "Real-Time Systems",
      complexity: "Real-Time Streaming",
      title: "Event-Driven & WebSocket Data Mesh",
      tagline: "Bi-directional WebSocket streaming, live collaboration cursors, and asynchronous background worker queues.",
      useCases: ["Live Financial Tickers", "Collaborative Workspaces", "Chat & Notification Centers", "IoT Telemetry Dashboards"],
      steps: [
        { badge: "Phase 01", title: "Persistent WebSocket Gateway", desc: "Low-latency socket connections with automated reconnection fallbacks." },
        { badge: "Phase 02", title: "Redis Pub/Sub Message Broker", desc: "Sub-millisecond event fanout across horizontally distributed server instances." },
        { badge: "Phase 03", title: "Asynchronous BullMQ Workers", desc: "Offloading intensive PDF exports, email queues, and third-party API syncs." },
        { badge: "Phase 04", title: "Optimistic UI State Sync", desc: "Instant local UI feedback with server-reconciled consistency guards." }
      ]
    },
    {
      badge: "Data Architecture",
      complexity: "Enterprise Scale",
      title: "Supabase & PostgreSQL Relational Engine",
      tagline: "Enterprise database architecture with Row-Level Security (RLS), automated backups, and vector embeddings.",
      useCases: ["Multi-Tenant SaaS", "Regulated Healthcare", "Fintech Payment Ledgers", "Enterprise CRM Tools"],
      steps: [
        { badge: "Gate 01", title: "Normalized Relational Modeling", desc: "Strict foreign key constraints, composite indexing, and automated migration scripts." },
        { badge: "Gate 02", title: "Row-Level Security (RLS)", desc: "Database-enforced tenant isolation preventing cross-account data leaks." },
        { badge: "Gate 03", title: "PgVector Semantic Indexing", desc: "Hybrid keyword and vector similarity queries embedded natively in SQL." },
        { badge: "Gate 04", title: "Point-in-Time Recovery (PITR)", desc: "Automated continuous backup snapshots with zero data loss recovery guarantees." }
      ]
    },
    {
      badge: "Enterprise Security",
      complexity: "SOC 2 Hardened",
      title: "Zero-Trust Identity & API Protection",
      tagline: "Comprehensive security architecture featuring OAuth2/SAML SSO, CSRF protection, and automated vulnerability scanning.",
      useCases: ["Corporate Portals", "Regulated Banking", "Government Compliance", "Mission-Critical SaaS"],
      steps: [
        { badge: "Module 01", title: "Enterprise SSO & MFA", desc: "Seamless SAML, Okta, and Google Workspace integration with hardware key MFA." },
        { badge: "Module 02", title: "Cryptographic Token Rotation", desc: "Short-lived JWTs, rotating refresh tokens, and automated session revocation." },
        { badge: "Module 03", title: "OWASP Top 10 Protection", desc: "Strict input sanitization, CSP headers, rate-limiting, and SQL injection barriers." },
        { badge: "Module 04", title: "Immutable Audit Trails", desc: "Append-only security access logs for compliance reporting and anomaly detection." }
      ]
    }
  ];

  const differentiators = [
    {
      num: "01",
      title: "Direct Senior Developer Collaboration",
      desc: "You work directly with senior product engineers led by founder Harsh Prateek. No account managers playing telephone, no outsourced junior contractors. Fast answers, sharp code, and direct Slack channels."
    },
    {
      num: "02",
      title: "100% Day-One Code Ownership",
      desc: "You own every single line of source code, database migration, CI/CD pipeline, and Docker container from day one. Zero proprietary agency frameworks, zero licensing fees, zero vendor lock-in."
    },
    {
      num: "03",
      title: "Weekly Clickable Staging Releases",
      desc: "No multi-month radio silences. Every Friday, you receive a working staging deployment with an async video walkthrough explaining every feature, metric, and architectural decision."
    },
    {
      num: "04",
      title: "Engineered for Core Web Vitals & Speed",
      desc: "Speed is a core business feature. We optimize critical render paths, leverage modern SSR and edge caching, and build semantic HTML to deliver 95+ PageSpeed scores that drive organic search rankings."
    },
    {
      num: "05",
      title: "Production-Hardened Security & Compliance",
      desc: "From OWASP Top 10 protection and CSRF mitigation to strict role-based access control (RBAC) and database encryption, our engineering adheres to enterprise SOC 2 and GDPR standards."
    },
    {
      num: "06",
      title: "Transparent, Milestone-Based Sprints",
      desc: "Predictable budgets with zero surprise change orders. We work on defined milestone-based sprints with clear deliverables, guaranteed SLAs, and full technical documentation."
    }
  ];

  const features = [
    { tag: "Frontend Systems", title: "Next.js 15 & React User Interfaces", desc: "Server-rendered, lightning-fast UI components optimized for sub-100ms first paint and seamless navigation." },
    { tag: "Backend APIs", title: "Node.js & Go Microservices", desc: "High-concurrency microservices, GraphQL and REST endpoints, background job queues, and WebSocket streaming." },
    { tag: "Database Design", title: "PostgreSQL & Supabase Multi-Tenancy", desc: "Row-Level Security (RLS), connection pooling, composite indexing, and automated point-in-time recovery." },
    { tag: "Enterprise Auth", title: "OAuth2, SAML SSO & Granular RBAC", desc: "Enterprise single sign-on, session revocation, hardware MFA, and hierarchical user role permissions." },
    { tag: "Third-Party APIs", title: "Payment Gateways & ERP Integrations", desc: "Native connections to Stripe, Razorpay, Salesforce, HubSpot, SAP, and custom internal enterprise webhooks." },
    { tag: "DevOps & Cloud", title: "Dockerized CI/CD & Infrastructure as Code", desc: "Automated GitHub Actions pipelines, Docker containerization, preview environments, and zero-downtime rolling deploys." }
  ];

  const benefits = [
    { num: "40%", lbl: "Lower Cloud Infrastructure Costs", desc: "Clean code, efficient connection pooling, and edge caching minimize cloud hosting bills." },
    { num: "3.5x", lbl: "Faster Feature Releases", desc: "Modular, strictly typed TypeScript architecture allows your team to iterate with speed." },
    { num: "99.99%", lbl: "Guaranteed Production Uptime", desc: "Redundant cloud infrastructure and automated failover keep your business online 24/7." },
    { num: "100%", lbl: "Complete IP & Asset Sovereignty", desc: "Full git history, release credentials, and architecture blueprints transferred to you." }
  ];

  const processSteps = [
    { num: "Step 01", title: "Technical Discovery & Scope Definition", desc: "We review your business goals, user personas, database schemas, and integration boundaries to formulate a detailed technical specification." },
    { num: "Step 02", title: "Wireframes, Database DDL & API Contracts", desc: "Interactive Figma UX prototypes and schema blueprints are created and reviewed before writing production code." },
    { num: "Step 03", title: "Agile Development & Weekly Staging", desc: "Two-week sprints with clickable staging builds delivered every Friday for hands-on review and rapid iterative feedback." },
    { num: "Step 04", title: "Rigorous QA, Security Audit & Launch", desc: "Comprehensive penetration testing, mobile cross-device QA, DNS migration, and white-glove production launch with full IP handover." }
  ];

  const industries = [
    { title: "Fintech & Banking", desc: "Secure digital wallets, payment gateways, and real-time ledger dashboards with strict PCI-DSS compliance." },
    { title: "Healthcare & MedTech", desc: "HIPAA-compliant telemedicine platforms, patient appointment portals, and electronic medical record integrations." },
    { title: "B2B SaaS & Tech", desc: "Multi-tenant cloud platforms with recurring billing, seat-based subscriptions, and team permission trees." },
    { title: "E-Commerce & Retail", desc: "High-converting online storefronts, custom checkout flows, and automated ERP inventory synchronizations." },
    { title: "Logistics & Supply Chain", desc: "Fleet tracking, warehouse management dashboards, real-time GPS telemetry, and automated dispatch engines." },
    { title: "EdTech & Learning Portals", desc: "Interactive course platforms, video streaming pipelines, student progress analytics, and quiz engines." }
  ];

  return (
    <div className="fs-page">
      <SEO 
        title="Custom Web Application Development Company | NovaDesk"
        description="Senior engineering squads building high-performance custom web applications, SaaS platforms, and enterprise cloud portals with guaranteed 100% IP ownership."
        url="/services/web-application-development"
        keywords="web application development company, custom web app development services, SaaS application development agency, hire full stack developers, Next.js web application engineering, cloud portal software, NovaDesk web apps"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* ── 1. HERO SECTION ── */}
      <section className="fs-hero">
        <div className="fs-container fs-hero-grid">
          <div className="fs-hero-text">
            <div className="fs-badge-eyebrow">
              <span className="fs-dot-pulse" />
              ENTERPRISE WEB APPLICATION DEVELOPMENT
            </div>

            <h1 className="fs-hero-h1">
              Custom <span className="fs-text-blue">Web Application</span> Development Company
            </h1>

            <p className="fs-subtext">
              We engineer bespoke, high-performance web applications, customer portals, and multi-tenant SaaS platforms that scale smoothly from first launch to millions of daily active users.
            </p>

            <div className="fs-cta-row">
              <Link to="/get-a-free-quote" className="fs-btn fs-btn-primary">
                Get Started Free <ArrowRight />
              </Link>
              <Link to="/contact-us" className="fs-btn fs-btn-white">
                Request a Custom Quote →
              </Link>
            </div>

            <div className="fs-trust-badges">
              <div className="fs-trust-item">
                <HeroCheckBadge />
                <span>100% Code Ownership</span>
              </div>
              <div className="fs-trust-item">
                <HeroCheckBadge />
                <span>SOC 2 &amp; OWASP Hardened</span>
              </div>
              <div className="fs-trust-item">
                <HeroCheckBadge />
                <span>Deploy in 3-6 Weeks</span>
              </div>
            </div>
          </div>

          <div className="fs-hero-visual">
            <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 20px 45px rgba(0,0,0,0.08)', background: '#ffffff' }}>
              <img 
                src="/webapp_hero_illustration.webp" 
                alt="Custom Web Application Development" 
                className="fs-hero-image" 
                width="600" 
                height="420" 
                loading="eager" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TICKER STRIP & STATS RIBBON ── */}
      <section className="fs-agency-alt">
        <div className="fs-ticker-strip">
          <div className="fs-ticker-track">
            <span>100% SOURCE CODE OWNERSHIP</span>
            <span className="fs-ticker-dot">✦</span>
            <span>DIRECT SENIOR DEVELOPER ACCESS</span>
            <span className="fs-ticker-dot">✦</span>
            <span>SUB-100MS API RESPONSES</span>
            <span className="fs-ticker-dot">✦</span>
            <span>ZERO VENDOR LOCK-IN</span>
            <span className="fs-ticker-dot">✦</span>
            <span>ENTERPRISE GRADE SECURITY</span>
            <span className="fs-ticker-dot">✦</span>
            <span>WEEKLY CLICKABLE STAGING BUILDS</span>
            <span className="fs-ticker-dot">✦</span>
            <span>CLEAN NEXT.JS &amp; REACT ARCHITECTURE</span>
            <span className="fs-ticker-dot">✦</span>
            <span>TRANSPARENT SPRINT PRICING</span>
            <span className="fs-ticker-dot">✦</span>
          </div>
        </div>

        <div className="fs-container">
          <div className="fs-agency-alt-box">
            <div className="fs-agency-alt-header">
              <div>
                <span className="fs-agency-alt-tag">TECHNICAL EXCELLENCE</span>
                <h3 className="fs-agency-alt-title">Architected for Speed, Security &amp; Scale</h3>
              </div>
              <div className="fs-stats-pills">
                <div className="fs-stat-pill">
                  <strong>Sub-100ms</strong>
                  <span>P99 API Latency</span>
                </div>
                <div className="fs-stat-pill">
                  <strong>99.99%</strong>
                  <span>Cloud SLA Uptime</span>
                </div>
                <div className="fs-stat-pill">
                  <strong>100%</strong>
                  <span>Code &amp; IP Sovereignty</span>
                </div>
              </div>
            </div>

            <div className="fs-ribbon-cards-grid">
              <div className="fs-ribbon-card">
                <span className="fs-rc-icon">✦</span>
                <strong>Custom-Built, Fully Owned Code</strong>
              </div>
              <div className="fs-ribbon-card">
                <span className="fs-rc-icon">✦</span>
                <strong>Modern Next.js &amp; React Stacks</strong>
              </div>
              <div className="fs-ribbon-card">
                <span className="fs-rc-icon">✦</span>
                <strong>Free Technical Architecture Call</strong>
              </div>
              <div className="fs-ribbon-card">
                <span className="fs-rc-icon">✦</span>
                <strong>Active Support, SLA &amp; Monitoring</strong>
              </div>
              <div className="fs-ribbon-card">
                <span className="fs-rc-icon">✦</span>
                <strong>Transparent, Milestone-Based Sprints</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICE OVERVIEW & INTERACTIVE ARCHITECTURES ── */}
      <section className="fs-section fs-section-bg-slate">
        <div className="fs-container">
          <div className="fs-tag-arrows">SERVICE OVERVIEW</div>
          <h2 className="fs-section-title">Architectures &amp; Frameworks We Deploy</h2>
          <p className="fs-section-subtitle">
            Explore our architectural blueprints below to discover latency benchmarks, database schemas, and enterprise use cases.
          </p>

          <div style={{ marginTop: '40px' }}>
            <div className="fs-overview-layout">
              {/* Left Tabs Selector */}
              <div className="fs-overview-tabs">
                {architectures.map((arch, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`fs-overview-tab ${activeArch === index ? 'active' : ''}`}
                    onClick={() => setActiveArch(index)}
                  >
                    <div className="fs-overview-tab-icon">
                      <span style={{ fontSize: '18px' }}>✦</span>
                    </div>
                    <div className="fs-overview-tab-text">
                      <h4>{arch.title}</h4>
                      <span>{arch.tagline}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Detail Preview Card */}
              <div className="fs-overview-preview">
                <div className="fs-overview-preview-card">
                  <div className="fs-overview-preview-header">
                    <span className="fs-overview-preview-badge">{architectures[activeArch]?.badge}</span>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Complexity: 
                      <span style={{ color: '#2E29FF', fontWeight: '800' }}>
                        {architectures[activeArch]?.complexity}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0b0f19', marginBottom: '8px' }}>
                    {architectures[activeArch]?.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: '1.6', marginBottom: '24px' }}>
                    {architectures[activeArch]?.tagline}
                  </p>

                  {/* Steps / Architecture Layers */}
                  <div className="av-scene-flow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                    {(architectures[activeArch]?.steps || []).map((step, sIdx) => (
                      <div key={sIdx} className="av-node-box" style={{ padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#ffffff' }}>
                        <span className="av-node-badge" style={{ fontSize: '11px', fontWeight: '800', color: '#2E29FF', display: 'block', marginBottom: '4px' }}>
                          {step.badge}
                        </span>
                        <strong className="av-node-title" style={{ fontSize: '13.5px', color: '#0b0f19', display: 'block', marginBottom: '4px' }}>
                          {step.title}
                        </strong>
                        <p className="av-node-desc" style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Use Case Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                    {(architectures[activeArch]?.useCases || []).map((uc, uIdx) => (
                      <span key={uIdx} style={{ fontSize: '12px', padding: '4px 10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '20px', color: '#475569', fontWeight: '600' }}>
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DO's vs DON'Ts Split Comparison */}
          <div className="fs-split-grid" style={{ marginTop: '48px' }}>
            <div className="fs-split-card fs-split-card-success">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                The NovaDesk Engineering Standard
              </h3>
              <ul className="fs-split-list">
                <li className="fs-split-item">
                  <div className="fs-split-item-icon">✓</div>
                  <div><strong>100% Bespoke Codebase:</strong> Hand-crafted Next.js and TypeScript architectures without bloated generic themes.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon">✓</div>
                  <div><strong>Zero Platform Lock-In:</strong> Direct ownership of code repositories, databases, and AWS/Cloudflare hosting accounts.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon">✓</div>
                  <div><strong>Direct Senior Developer Access:</strong> Direct Slack channel with senior architects who write the code and know your system.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon">✓</div>
                  <div><strong>Weekly Clickable Staging:</strong> Working, testable code deployed every Friday with an async Loom explanation.</div>
                </li>
              </ul>
            </div>

            <div className="fs-split-card fs-split-card-failure">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                Common Industry Pitfalls (What We Avoid)
              </h3>
              <ul className="fs-split-list">
                <li className="fs-split-item">
                  <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                  <div><strong>Bloated Pre-Made Themes:</strong> Using slow WordPress themes or generic drag-and-drop builders loaded with 40+ plugins that destroy PageSpeed.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                  <div><strong>Vendor Platform Lock-In:</strong> Proprietary CMS systems that hold your data hostage with monthly per-seat licensing penalties.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                  <div><strong>Subcontracted Junior Contractors:</strong> Handing your mission-critical project to unvetted offshore interns without senior technical oversight.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                  <div><strong>Surprise Change Orders:</strong> Ambiguous milestone scopes leading to unexpected budget overruns midway through development.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US (STICKY PROMISE CARD + 6 DIFFERENTIATORS) ── */}
      <section className="fs-section">
        <div className="fs-container">
          <div className="fs-why-us-grid">
            {/* Left Sticky Column */}
            <div className="fs-why-us-sticky">
              <div className="fs-tag-arrows">WHY CHOOSE US</div>
              <h2 className="fs-section-title" style={{ marginBottom: '20px' }}>
                A Business-First Approach to Web Engineering
              </h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.65', marginBottom: '28px' }}>
                There is no shortage of generic digital agencies. We differentiate ourselves by delivering bespoke software engineering, enterprise security, and measurable conversion growth.
              </p>

              {/* The NovaDesk Promise Card */}
              <div className="fs-value-spotlight">
                <h4>The NovaDesk Promise</h4>
                <ul className="fs-spotlight-list">
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>100% Source Code &amp; IP Ownership</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>No Vendor Platform Lock-In</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>Direct Senior Developer Slack Access</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>Strict SOC 2 &amp; Compliance Standards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: 6 Differentiators Stack */}
            <div className="fs-differentiators-stack">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="fs-diff-row">
                  <div className="fs-diff-number">{diff.num}</div>
                  <div className="fs-diff-content">
                    <h4>{diff.title}</h4>
                    <p>{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CORE SYSTEM FEATURES & CAPABILITIES ── */}
      <section className="fs-section fs-section-bg-slate">
        <div className="fs-container">
          <div className="fs-tag-arrows">SYSTEM FEATURES</div>
          <h2 className="fs-section-title">Comprehensive Web Application Capabilities</h2>
          <p className="fs-section-subtitle">
            Every feature is engineered from the ground up for speed, security, and long-term maintainability.
          </p>

          <div className="fs-features-grid" style={{ marginTop: '40px' }}>
            {features.map((feat, idx) => (
              <div key={idx} className="fs-feature-card">
                <span className="fs-feature-badge" style={{ fontSize: '11px', fontWeight: '800', color: '#2E29FF', background: 'rgba(46,41,255,0.06)', padding: '4px 10px', borderRadius: '20px', display: 'inline-block', marginBottom: '12px' }}>
                  {feat.tag}
                </span>
                <h3 className="fs-feature-card-title">{feat.title}</h3>
                <p className="fs-feature-card-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TANGIBLE BUSINESS ROI & OUTCOMES ── */}
      <section className="fs-section">
        <div className="fs-container">
          <div className="fs-tag-arrows">BUSINESS IMPACT</div>
          <h2 className="fs-section-title">Measurable Outcomes for Growing Ventures</h2>
          <p className="fs-section-subtitle">
            We measure our engineering success not just in clean syntax, but in measurable bottom-line growth.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginTop: '44px' }}>
            {benefits.map((b, idx) => (
              <div key={idx} style={{ background: '#f8fafc', borderRadius: '16px', padding: '32px 24px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: '900', color: '#2E29FF', display: 'block', marginBottom: '8px', letterSpacing: '-1px' }}>
                  {b.num}
                </span>
                <strong style={{ fontSize: '16.5px', color: '#0b0f19', display: 'block', marginBottom: '8px' }}>
                  {b.lbl}
                </strong>
                <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. DELIVERY LIFECYCLE ── */}
      <section className="fs-process-blue">
        <div className="fs-container">
          <span className="fs-pb-tag">DELIVERY PROTOCOL</span>
          <h2 className="fs-pb-title">The NovaDesk Senior Builder Protocol</h2>
          <p className="fs-pb-subtitle">
            A battle-tested production lifecycle designed to eliminate technical debt and keep delivery on schedule.
          </p>

          <div className="fs-pb-steps">
            {processSteps.map((step, idx) => (
              <div key={idx} className="fs-pb-step">
                <span className="fs-pb-num">{step.num}</span>
                <h3 className="fs-pb-step-title">{step.title}</h3>
                <p className="fs-pb-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. INDUSTRY APPLICATIONS ── */}
      <section className="fs-section fs-section-bg-slate">
        <div className="fs-container">
          <div className="fs-tag-arrows">INDUSTRY APPLICATIONS</div>
          <h2 className="fs-section-title">Engineered for High-Stakes Verticals</h2>
          <p className="fs-section-subtitle">
            From regulated financial platforms to high-throughput marketplaces, we build software that performs under pressure.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {industries.map((ind, idx) => (
              <div key={idx} style={{ background: '#ffffff', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <span style={{ fontSize: '20px', display: 'block', marginBottom: '12px' }}>✦</span>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0b0f19', marginBottom: '8px' }}>{ind.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. DIRECT SENIOR DEVELOPER COLLABORATION ── */}
      <section className="fs-section">
        <div className="fs-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="fs-tag-arrows">DIRECT COLLABORATION</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '900', color: '#0b0f19', marginBottom: '20px', letterSpacing: '-0.8px' }}>
                Work Directly with Senior Engineers, Not Salespeople
              </h2>
              <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '24px' }}>
                At NovaDesk, your project is led directly by senior product engineers with over a decade of real-world production experience. We participate in technical architecture calls, write clean code, and provide direct Slack channels.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                  <CheckCircle />
                  <span>Direct Slack and asynchronous Loom video channels</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                  <CheckCircle />
                  <span>Clickable staging updates delivered every single Friday</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                  <CheckCircle />
                  <span>Immediate architectural decisions without bureaucratic delays</span>
                </div>
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '36px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#2E29FF', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                TECHNICAL GUARANTEE
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0b0f19', marginBottom: '14px' }}>
                The NovaDesk Engineering Standard
              </h3>
              <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: '1.65', marginBottom: '24px' }}>
                We treat your codebase like our own product. Every pull request is peer-reviewed, strictly typed, and verified against automated regression tests before shipping to production.
              </p>
              <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Schedule Technical Discovery Call <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. TRUST, SECURITY & ENTERPRISE STANDARDS ── */}
      <section className="fs-section fs-section-bg-slate">
        <div className="fs-container">
          <div className="fs-tag-arrows">TRUST &amp; SECURITY</div>
          <h2 className="fs-section-title">Enterprise Security &amp; Compliance Hardened</h2>
          <p className="fs-section-subtitle">
            Zero shortcuts on security. Every application is audited for vulnerabilities and data integrity.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '36px' }}>
            <div style={{ background: '#ffffff', borderRadius: '14px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <strong style={{ fontSize: '16px', color: '#0b0f19', display: 'block', marginBottom: '6px' }}>🔒 OWASP Top 10 Hardened</strong>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Protection against SQL injection, cross-site scripting (XSS), and CSRF token tampering.</p>
            </div>
            <div style={{ background: '#ffffff', borderRadius: '14px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <strong style={{ fontSize: '16px', color: '#0b0f19', display: 'block', marginBottom: '6px' }}>🛡️ Data Sovereignty</strong>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Deploy directly to your private AWS, GCP, or on-premise cloud infrastructure.</p>
            </div>
            <div style={{ background: '#ffffff', borderRadius: '14px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <strong style={{ fontSize: '16px', color: '#0b0f19', display: 'block', marginBottom: '6px' }}>📜 Non-Disclosure Guarantee</strong>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Mutual NDA signed before discussing project specifications and business logic.</p>
            </div>
            <div style={{ background: '#ffffff', borderRadius: '14px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <strong style={{ fontSize: '16px', color: '#0b0f19', display: 'block', marginBottom: '6px' }}>⚡ 30-Day Post-Launch Warranty</strong>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Immediate bug fixes and performance monitoring included after going live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQS (STRICTLY MAXIMUM 6 ITEMS) ── */}
      <section className="nd-faq" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="fs-container">
          <div className="nd-faq-inner" style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div className="nd-faq-tag" style={{ textAlign: 'center', color: '#2E29FF', fontWeight: '800', letterSpacing: '1.5px', fontSize: '12px', marginBottom: '12px' }}>
              ✦ FREQUENTLY ASKED QUESTIONS ✦
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#0b0f19', textAlign: 'center', marginBottom: '16px', letterSpacing: '-0.8px' }}>
              Custom Web Application FAQs
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', textAlign: 'center', marginBottom: '44px' }}>
              Everything you need to know about our engineering methodology, pricing, and handover.
            </p>

            <div className="nd-faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqs.map((faq, idx) => (
                <FaqItem
                  key={idx}
                  q={faq.q}
                  a={faq.a}
                  open={openFaq === idx}
                  onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. HIGH-IMPACT CONVERSION BOTTOM CTA ── */}
      <section className="fs-cta-bottom" style={{ background: '#2E29FF', padding: '75px 0', color: '#ffffff' }}>
        <div className="fs-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: '12px' }}>
                ✦ READY TO BUILD? ✦
              </span>
              <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', fontWeight: '900', color: '#ffffff', lineHeight: '1.15', marginBottom: '16px', letterSpacing: '-1px' }}>
                Let&apos;s Build Your Next Web Application Together
              </h2>
              <p style={{ fontSize: '16.5px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.65', margin: 0 }}>
                Speak directly with senior software architects. Receive a detailed architecture scope, milestone timeline, and fixed quote within 24 hours.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/get-a-free-quote" className="fs-btn fs-btn-solid-white">
                  Get Free Scope &amp; Quote <ArrowRight />
                </Link>
                <Link to="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 28px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff', textDecoration: 'none', fontWeight: '700', fontSize: '15.5px' }}>
                  Book Consultation Call →
                </Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                <span>✓ Zero Obligation Quote</span>
                <span>✓ Mutual NDA Protection</span>
                <span>✓ 24-Hour Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
