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

  const canonicalUrl = "https://www.novadesk.site/services/web-application-development";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": "Custom Web Application Development Company | NovaDesk",
    "description": "Senior engineering squads building high-performance custom web applications, SaaS platforms, and enterprise cloud portals with guaranteed 100% IP ownership.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.novadesk.site/#website",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "inLanguage": "en-US",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": b.name,
        "item": b.url.startsWith('http') ? b.url : `https://www.novadesk.site${b.url}`
      }))
    }
  };

  const interlinks = [
    { title: "Custom Web Development", url: "/services/web-development" },
    { title: "Full-Stack Software Development", url: "/services/full-stack-development" },
    { title: "SaaS Platform Development", url: "/services/saas-development" },
    { title: "Enterprise Software Engineering", url: "/services/enterprise-software-development" },
    { title: "Custom Software Development Cost Guide", url: "/blog/how-much-does-custom-software-development-cost" },
  ];

  const tickerItems = [
    "REACT SERVER COMPONENTS (RSC)",
    "NEXT.JS 15 APP ROUTER",
    "POSTGRESQL & SUPABASE RLS",
    "TYPESCRIPT 100% TYPE SAFETY",
    "SUB-100MS API ENDPOINTS",
    "100% IP & CODE OWNERSHIP",
    "DIRECT SENIOR DEVELOPER SLACK",
    "ENTERPRISE OWASP TOP 10"
  ];

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
    { title: "24/7 Production SLA Reliability", desc: "Redundant cloud infrastructure, health checks, and automated failover keep your web application running smoothly around the clock." },
    { title: "50% Lower Cloud Hosting Costs", desc: "Clean code, connection pooling, and serverless edge caching prevent runaway cloud bills as your active users grow." },
    { title: "Sub-Second P99 Response Times", desc: "Instantaneous page transitions and sub-100ms API endpoints prevent user drop-off and maximize customer retention." },
    { title: "100% Defensible Code Sovereignty", desc: "Zero proprietary agency frameworks. Complete Git commit history, architecture specs, and release keys belong to you." },
    { title: "Rapid Engineering Velocity", desc: "Strictly typed TypeScript schemas allow your team to iterate rapidly without fears of regression bugs." },
    { title: "Elastic Traffic Auto-Scaling", desc: "Dockerized microservices effortlessly scale from initial launch to millions of daily requests without manual intervention." }
  ];

  const benefitsTable = [
    { title: "Sub-100ms API Latency", impact: "Eliminates UI freeze, improves conversion funnel throughput, and satisfies Core Web Vitals metrics." },
    { title: "100% Code & IP Ownership", impact: "Zero vendor lock-in or recurring per-seat agency royalties. Full asset sovereignty." },
    { title: "Direct Senior Developer Access", impact: "Cuts delivery time by 40% by eliminating account manager bottlenecks and junior handoffs." },
    { title: "Weekly Staging Releases", impact: "Review and click through working code every Friday with async video walkthroughs." }
  ];

  const processSteps = [
    { stepNum: "STEP 01", title: "Technical Discovery & Scope Definition", desc: "We review your business goals, user personas, database schemas, and integration boundaries to formulate a detailed technical specification." },
    { stepNum: "STEP 02", title: "Wireframes, Database DDL & API Contracts", desc: "Interactive Figma UX prototypes and schema blueprints are created and reviewed before writing production code." },
    { stepNum: "STEP 03", title: "Agile Development & Weekly Staging", desc: "Two-week sprints with clickable staging builds delivered every Friday for hands-on review and rapid iterative feedback." },
    { stepNum: "STEP 04", title: "Rigorous QA, Security Audit & Launch", desc: "Comprehensive penetration testing, mobile cross-device QA, DNS migration, and white-glove production launch with full IP handover." }
  ];

  const industries = [
    { title: "Fintech & Banking", desc: "Secure digital wallets, payment gateways, and real-time ledger dashboards with strict PCI-DSS compliance." },
    { title: "Healthcare & MedTech", desc: "HIPAA-compliant telemedicine platforms, patient appointment portals, and electronic medical record integrations." },
    { title: "B2B SaaS & Tech", desc: "Multi-tenant cloud platforms with recurring billing, seat-based subscriptions, and team permission trees." },
    { title: "E-Commerce & Retail", desc: "High-converting online storefronts, custom checkout flows, and automated ERP inventory synchronizations." },
    { title: "Logistics & Supply Chain", desc: "Fleet tracking, warehouse management dashboards, real-time GPS telemetry, and automated dispatch engines." },
    { title: "EdTech & Learning Portals", desc: "Interactive course platforms, video streaming pipelines, student progress analytics, and quiz engines." }
  ];

  const industryTable = [
    { industry: "Fintech & Banking", useCases: "Payment gateway integration, ledger databases, KYC verification workflows, and fraud alert systems." },
    { industry: "Healthcare & MedTech", useCases: "Telehealth video portals, appointment scheduling, patient intake questionnaires, and HIPAA secure records." },
    { industry: "B2B SaaS & Tech", useCases: "Multi-tenant cloud dashboards, seat-based billing, team role permissions, and public developer APIs." },
    { industry: "E-Commerce & Retail", useCases: "Custom single-page checkouts, real-time inventory ERP sync, recommendation engines, and cart recovery." }
  ];

  return (
    <div className="fs-page">
      <SEO 
        title="Custom Web Application Development Company | NovaDesk"
        description="Senior engineering squads building high-performance custom web applications, SaaS platforms, and enterprise cloud portals with guaranteed 100% IP ownership."
        url="/services/web-application-development"
        keywords="web application development company, custom web app development services, SaaS application development agency, hire full stack developers, Next.js web application engineering, cloud portal software, NovaDesk web apps"
        schema={[serviceSchema, faqSchema, webPageSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* ── 1. HERO SECTION (CHATBOT MATCHED) ── */}
      <section className="fs-hero">
        <div className="fs-container fs-hero-grid">
          <div className="fs-hero-text">
            <div style={{display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(46,41,255,0.08)', border:'1px solid rgba(46,41,255,0.2)', padding:'6px 16px', borderRadius:'40px', fontSize:'11px', fontWeight:'700', color:'#2E29FF', letterSpacing:'0.8px', textTransform:'uppercase', marginBottom:'20px'}}>
              ENTERPRISE WEB APPLICATION DEVELOPMENT
            </div>

            <h1 className="fs-hero-title">
              Custom <span className="fs-text-blue">Web Application</span> Development Company
            </h1>

            <p className="fs-hero-desc" style={{ marginBottom: '38px' }}>
              We engineer bespoke, high-performance web applications, customer portals, and multi-tenant SaaS platforms that scale smoothly from first launch to millions of daily active users.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '36px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Link to="/contact-us" className="fs-btn fs-btn-primary" style={{ height: '52px', padding: '0 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(46, 41, 255, 0.25)' }}>
                  Get Started Free <ArrowRight />
                </Link>
                <Link to="/get-a-free-quote" className="fs-btn" style={{ height: '52px', padding: '0 26px', borderRadius: '12px', fontSize: '15px', fontWeight: '700', backgroundColor: '#0B0F19', color: '#ffffff', border: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  Request a Custom Quote →
                </Link>
              </div>
              <div style={{ fontSize: '13.5px', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '22px', fontWeight: '600', marginTop: '6px', alignItems: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <HeroCheckBadge /> 100% Code Ownership
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <HeroCheckBadge /> SOC 2 &amp; OWASP Hardened
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <HeroCheckBadge /> Deploy in 3-6 Weeks
                </span>
              </div>
            </div>
          </div>

          <div className="nd-hero-browser-wrapper">
            <div className="nd-browser-card" style={{ paddingBottom: 0, overflow: 'hidden', background: '#070a13', border: '1px solid rgba(46, 41, 255, 0.2)', boxShadow: '0 25px 60px -15px rgba(46, 41, 255, 0.25)' }}>
              <div className="nd-browser-topbar" style={{ background: '#0c111d', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="nd-browser-dots">
                  <span className="nd-dot red"></span>
                  <span className="nd-dot yellow"></span>
                  <span className="nd-dot green"></span>
                </div>
                <div className="nd-browser-url" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', color: '#10B981'}}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  app.novadesk.site/dashboard
                </div>
                <div style={{ position: 'absolute', right: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#10B981', fontWeight: '600' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                  Production Live
                </div>
              </div>
              <div style={{ display: 'block', width: '100%', position: 'relative', overflow: 'hidden', lineHeight: 0, background: '#070a13' }}>
                <img 
                  src="/webapp_hero_illustration.webp" 
                  alt="Custom Web Application Development" 
                  width="1024" 
                  height="1024" 
                  loading="eager" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxHeight: '440px', 
                    display: 'block', 
                    objectFit: 'cover', 
                    objectPosition: 'center',
                    margin: 0, 
                    borderRadius: 0,
                    boxShadow: 'none'
                  }} 
                />
                
                {/* Live Telemetry Overlay Bar at bottom of browser window */}
                <div style={{
                  padding: '12px 18px',
                  background: 'rgba(11, 15, 25, 0.92)',
                  backdropFilter: 'blur(8px)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  color: '#94a3b8',
                  lineHeight: 1.4
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ color: '#38bdf8', fontWeight: '700' }}>⚡ P99 Latency: 42ms</span>
                    <span style={{ color: '#e2e8f0' }}>PostgreSQL + Redis</span>
                  </div>
                  <div style={{ color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>✓</span> 99.99% Cloud SLA Uptime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TICKER STRIP & ROYAL BLUE STATS RIBBON (CHATBOT MATCHED) ── */}
      <section className="fs-agency-alt">
        <div className="nd-ticker-wrap">
          <div className="nd-ticker">
            <div className="nd-ticker-track">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="nd-ticker-group">
                  {tickerItems.map((item, i) => (
                    <span key={i}>✦ {item}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fs-agency-alt-bg">
          <div className="nd-intro">
            <div className="nd-intro-inner">
              <div className="nd-intro-text">
                <h2>Built for businesses that demand <em>software that scales</em></h2>
                <p>Skip the basic templates. We engineer advanced, high-performance web systems with clean architecture and seamless backend connections.</p>
              </div>
              <div className="nd-intro-stats">
                <div className="nd-intro-stat">
                  <div className="nd-intro-stat-num">&lt;100<sub>ms</sub></div>
                  <div className="nd-intro-stat-label">P99 API Latency</div>
                </div>
                <div className="nd-intro-divider" />
                <div className="nd-intro-stat">
                  <div className="nd-intro-stat-num">99.99<sub>%</sub></div>
                  <div className="nd-intro-stat-label">Cloud SLA Uptime</div>
                </div>
                <div className="nd-intro-divider" />
                <div className="nd-intro-stat">
                  <div className="nd-intro-stat-num">100<sub>%</sub></div>
                  <div className="nd-intro-stat-label">Code &amp; IP Ownership</div>
                </div>
              </div>
            </div>
          </div>

          <div className="fs-usp-bar-transparent">
            <div className="fs-container fs-usp-grid">
              <div className="fs-usp-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div>Custom-Built,<br/>Fully Owned Code</div>
              </div>
              <div className="fs-usp-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
                </svg>
                <div>Modern Next.js<br/>&amp; React Stacks</div>
              </div>
              <div className="fs-usp-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>Free Initial Strategy<br/>&amp; Architecture Call</div>
              </div>
              <div className="fs-usp-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <div>Active Support<br/>SLA &amp; Monitoring</div>
              </div>
              <div className="fs-usp-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
                <div>Transparent,<br/>Milestone-Based Fees</div>
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

          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
              Web Application Architectures We Support
            </h3>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '32px', fontWeight: '500' }}>
              Select an architecture below to explore its capabilities, complexity, and common industry use cases.
            </p>

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
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
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
                  <div>
                    <div className="fs-overview-preview-header">
                      <span className="fs-overview-preview-badge">{architectures[activeArch]?.badge}</span>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Complexity: 
                        <span style={{ 
                          color: architectures[activeArch]?.complexity === 'High' ? '#EA4335' : 
                                 architectures[activeArch]?.complexity === 'Medium' ? '#FBBC05' : '#2E29FF',
                          fontWeight: '800'
                        }}>
                          {architectures[activeArch]?.complexity}
                        </span>
                      </div>
                    </div>

                    <h3>{architectures[activeArch]?.title}</h3>
                    <div className="fs-overview-preview-tagline" style={{ marginBottom: '16px' }}>{architectures[activeArch]?.tagline}</div>
                  </div>

                  {/* Steps / Architecture Layers */}
                  <div className="av-scene-flow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', margin: '20px 0' }}>
                    {(architectures[activeArch]?.steps || []).map((step, sIdx) => (
                      <div key={sIdx} className="av-node-box" style={{ padding: '12px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', background: '#ffffff' }}>
                        <span className="av-node-badge" style={{ fontSize: '11px', fontWeight: '800', color: '#2E29FF', display: 'block', marginBottom: '4px' }}>
                          {step.badge}
                        </span>
                        <strong className="av-node-title" style={{ fontSize: '13px', color: '#0b0f19', display: 'block', marginBottom: '3px' }}>
                          {step.title}
                        </strong>
                        <p className="av-node-desc" style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.45', margin: 0 }}>
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Use Case Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                    {(architectures[activeArch]?.useCases || []).map((uc, uIdx) => (
                      <div key={uIdx} style={{ background: 'rgba(46, 41, 255, 0.05)', border: '1px solid rgba(46, 41, 255, 0.15)', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', fontWeight: '600', color: '#2E29FF', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <span>✦ {uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Split Cards: Do's vs Don'ts (CHATBOT MATCHED) */}
            <div className="fs-split-cards">
              <div className="fs-split-card fs-split-card-success">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  What Makes Our Web Applications Succeed
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>100% Bespoke Codebase:</strong> Hand-crafted Next.js and TypeScript architectures without bloated generic themes.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Zero Platform Lock-In:</strong> Direct ownership of code repositories, databases, and AWS/Cloudflare hosting accounts.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Direct Senior Developer Access:</strong> Direct Slack channel with senior architects who write the code and know your system.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Weekly Clickable Staging:</strong> Working, testable code deployed every Friday with an async video explanation.</div>
                  </li>
                </ul>
              </div>

              <div className="fs-split-card fs-split-card-failure">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US (STICKY PROMISE CARD + 6 DIFFERENTIATORS + COMPARISON SPLIT) ── */}
      <section className="fs-section">
        <div className="fs-container">
          <div className="fs-why-us-grid">
            {/* Left Sticky Column */}
            <div className="fs-why-us-sticky">
              <div className="fs-tag-arrows">WHY CHOOSE US</div>
              <h2 className="fs-section-title" style={{ marginBottom: '24px' }}>
                A Business-First Approach to Web Engineering
              </h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.65' }}>
                There is no shortage of template-based digital agencies. We differentiate ourselves by delivering bespoke software engineering, enterprise security, and long-term data optimization.
              </p>

              {/* Spotlight Card */}
              <div className="fs-value-spotlight">
                <h4>The NovaDesk Promise</h4>
                <ul className="fs-spotlight-list">
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>100% Source Code Ownership</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>No Vendor Platform Lock-In</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>Direct Developer Slack Access</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>Strict Compliance Standards</span>
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
                    <h3>{diff.title}</h3>
                    <p>{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Comparison Cards */}
          <div className="fs-comparison-split">
            <div className="fs-comp-card fs-comp-card-cookie">
              <h4>The Generic Agency Route</h4>
              <ul className="fs-comp-list">
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✕</span>
                  <div><strong>Closed ecosystems:</strong> Hard vendor lock-in to visual builders requiring high monthly platform subscription fees.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✕</span>
                  <div><strong>Rigid structures:</strong> Incapable of managing scale or custom business logic, frustrating end users.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✕</span>
                  <div><strong>Bloated codebases:</strong> Slow loading times that fail Google Core Web Vitals and hurt SEO rankings.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✕</span>
                  <div><strong>Basic integrations:</strong> Restricted to pre-existing plugins without support for custom APIs or secure backends.</div>
                </li>
              </ul>
            </div>

            <div className="fs-comp-card fs-comp-card-custom">
              <h4>The NovaDesk Custom Route</h4>
              <ul className="fs-comp-list">
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✓</span>
                  <div><strong>Full IP ownership:</strong> Complete source code and server configurations belong to you, with zero monthly usage markups.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✓</span>
                  <div><strong>Modern React &amp; Cloud:</strong> Dynamically scales to millions of users with sub-second page rendering.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✓</span>
                  <div><strong>Brand alignment:</strong> Tailored UI/UX and custom components built specifically around your brand guidelines.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✓</span>
                  <div><strong>Any database sync:</strong> Custom webhook middleware connecting with CRMs, ERPs, inventory portals, and internal logs.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CORE SYSTEM FEATURES & BENTO GRID (CHATBOT MATCHED) ── */}
      <section className="fs-section fs-features-light">
        <div className="fs-container">
          <div className="fs-tag-arrows">SYSTEM FEATURES</div>
          <h2 className="fs-section-title">Comprehensive Web Application Capabilities</h2>
          <p className="fs-section-subtitle">
            We construct custom web architectures equipped with advanced operational capabilities to handle complex business use cases.
          </p>

          <div className="fs-bento-grid">
            {features.map((feat, idx) => (
              <div key={idx} className={`fs-bento-card ${(idx === 0 || idx === 3) ? 'fs-bento-col-2' : ''}`}>
                <div className="fs-bento-card-badge" style={{
                  background: idx === 1 ? 'rgba(52,168,83,0.08)' : idx === 2 ? 'rgba(251,188,5,0.08)' : idx === 3 ? 'rgba(234,67,53,0.08)' : 'rgba(46,41,255,0.08)',
                  color: idx === 1 ? '#34A853' : idx === 2 ? '#D97706' : idx === 3 ? '#EA4335' : '#2E29FF'
                }}>
                  {feat.tag}
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
                {(idx === 0 || idx === 3) && (
                  <div style={{ marginTop: '16px', background: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#2E29FF', fontWeight: '800' }}>✦</span>
                    <span>Production-hardened implementation with automated regression testing and strict type safety.</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BUSINESS BENEFITS & IMPACT METRICS TABLE (CHATBOT MATCHED) ── */}
      <section className="fs-section">
        <div className="fs-container">
          <div className="fs-tag-arrows">BUSINESS BENEFITS</div>
          <h2 className="fs-section-title">Measurable Business Value From Day One</h2>
          <p className="fs-section-subtitle">
            Deploying bespoke software engineering allows businesses to eliminate technical debt, minimize cloud hosting bills, and scale without friction.
          </p>

          <div className="fs-grid-3">
            {benefits.map((b, idx) => (
              <div key={idx} className="fs-card-premium">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits summary table */}
          <div style={{ marginTop: '50px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
              Expected Business Impact Metrics
            </h3>
            <div className="fs-table-container">
              <table className="fs-table">
                <thead>
                  <tr>
                    <th>Benefit</th>
                    <th>Expected Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {benefitsTable.map((row, idx) => (
                    <tr key={idx}>
                      <td><strong>{row.title}</strong></td>
                      <td>{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. DELIVERY ROADMAP TIMELINE (CHATBOT MATCHED) ── */}
      <section className="fs-process-blue">
        <div className="fs-container">
          <div className="fs-process-header-wrap">
            <div className="fs-process-header-left">
              <div className="fs-process-tag-lines">← OUR ROADMAP →</div>
              <h2>A Structured Process for Launching High-Impact Products</h2>
            </div>
            <div className="fs-process-header-right">
              <p>
                We coordinate discovery, architectural design, agile sprint delivery, cloud infrastructure deployment, and post-launch refinement to ensure project success.
              </p>
            </div>
          </div>

          <div className="fs-timeline-blue">
            {processSteps.map((step, idx) => (
              <div key={idx} className="fs-timeline-item-blue">
                <div className="fs-timeline-dot-blue"></div>
                <div className="fs-timeline-content-blue">
                  <span className="fs-timeline-step-badge">{step.stepNum || `STEP 0${idx + 1}`}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. INDUSTRY APPLICATIONS & TABLE (CHATBOT MATCHED) ── */}
      <section className="fs-section fs-section-bg-slate">
        <div className="fs-container">
          <div className="fs-tag-arrows">INDUSTRIES WE SERVE</div>
          <h2 className="fs-section-title">Custom Solutions Tailored to Industry Workflows</h2>
          <p className="fs-section-subtitle">
            We design software architectures configured to meet the unique compliance guidelines, transactional parameters, and user intents of your specific industry.
          </p>

          <div className="fs-grid-3" style={{ marginBottom: '60px' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="fs-card-premium">
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>

          {/* Industry comparison table */}
          <div style={{ marginTop: '50px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#0b0f19' }}>
              Common Industry Use Cases
            </h3>
            <div className="fs-table-container">
              <table className="fs-table">
                <thead>
                  <tr>
                    <th>Industry</th>
                    <th>Common Application Use Cases</th>
                  </tr>
                </thead>
                <tbody>
                  {industryTable.map((row, idx) => (
                    <tr key={idx}>
                      <td><strong>{row.industry}</strong></td>
                      <td>{row.useCases}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. ARTICLE BOX / TECH STACK SECTION (CHATBOT MATCHED) ── */}
      <section className="expertise experts">
        <div className="container">
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
            <div className="col" style={{ flex: '1', minWidth: '300px' }}>
              <div className="head epb">
                <div className="fs-tag-arrows">TECH STACKS</div>
                <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0b0f19', marginBottom: '16px' }}>
                  Advanced Tools &amp; Modern Frameworks
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                  We do not lock you into a single proprietary framework. We build modular software components using industry-standard platforms, programming languages, and server infrastructures to ensure your code is maintainable.
                </p>
                
                <div style={{ marginTop: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                    How We Choose Your Tech Stack:
                  </h3>
                  <ul className="fs-bullet-list">
                    <li className="fs-bullet-item">
                      <CheckCircle />
                      <div><strong>Performance &amp; Scale:</strong> Modern SSR, edge caching, and low-latency databases.</div>
                    </li>
                    <li className="fs-bullet-item">
                      <CheckCircle />
                      <div><strong>Security &amp; Compliance:</strong> OWASP Top 10 hardening and strict encryption.</div>
                    </li>
                    <li className="fs-bullet-item">
                      <CheckCircle />
                      <div><strong>Zero Vendor Lock-in:</strong> 100% owned GitHub repositories and open standards.</div>
                    </li>
                    <li className="fs-bullet-item">
                      <CheckCircle />
                      <div><strong>Maintainability:</strong> Clean, typed code that your internal team can easily own.</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col d-flex justify-content-end align-items-center" style={{ flex: '1', minWidth: '300px' }}>
              <div className="eb_box">
                <div className="tech_stack">
                  <div className="framework">
                    <div className="bgcolor">
                      <h3 className="sub">Frontend &amp; UI Stacks</h3>
                      <div className="skill">
                        <p className="skills">Next.js 15</p>
                        <p className="skills">React 19</p>
                        <p className="skills">TypeScript</p>
                        <p className="skills">Tailwind CSS</p>
                        <p className="skills">Framer Motion</p>
                        <p className="skills">HTML5 / WebP</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tech_stack">
                  <div className="framework">
                    <div className="bgcolorto">
                      <h3 className="sub">Backend &amp; Cloud APIs</h3>
                      <div className="skill">
                        <p className="skills bg">Node.js</p>
                        <p className="skills bg">Python / FastAPI</p>
                        <p className="skills bg">Go (Golang)</p>
                        <p className="skills bg">REST &amp; GraphQL</p>
                        <p className="skills bg">Laravel 11 / PHP 8.3</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tech_stack">
                  <div className="framework">
                    <div className="bg_cool_aqua">
                      <h3 className="sub">Databases &amp; Caching</h3>
                      <div className="skill">
                        <p className="skills cool_aqua">PostgreSQL</p>
                        <p className="skills cool_aqua">Supabase</p>
                        <p className="skills cool_aqua">Redis (Cache)</p>
                        <p className="skills cool_aqua">MySQL</p>
                        <p className="skills cool_aqua">Prisma ORM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tech_stack">
                  <div className="framework">
                    <div className="bg_lavender">
                      <h3 className="sub">Cloud &amp; DevOps</h3>
                      <div className="skill">
                        <p className="skills lavender">AWS Cloud</p>
                        <p className="skills lavender">Cloudflare CDN</p>
                        <p className="skills lavender">Docker</p>
                        <p className="skills lavender">Vercel Edge</p>
                        <p className="skills lavender">GitHub Actions</p>
                        <p className="skills lavender">Sentry Telemetry</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. TRUST & SECURITY SECTION (CHATBOT MATCHED) ── */}
      <section className="fs-section fs-section-bg-slate">
        <div className="fs-container">
          <div className="fs-tag-arrows">TRUST &amp; SECURITY</div>
          <h2 className="fs-section-title">An Engineering-First Partner</h2>
          <p className="fs-section-subtitle">
            We focus on clean coding standards, robust integrations, and clear communication patterns to build reliable software.
          </p>

          <div className="fs-grid-3">
            <div className="fs-card-premium">
              <h3>100% IP Ownership</h3>
              <p>The code we write belongs entirely to you. No proprietary licensing, no locked API containers, and no hidden vendor platforms.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Direct Developer Channels</h3>
              <p>Communicate directly with lead software engineers. Avoid account manager telephone games for faster code scoping and updates.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Production-Ready Security</h3>
              <p>We implement end-to-end data encryption protocols, clean authorization headers, and secure database parameters by default.</p>
            </div>
            <div className="fs-card-premium">
              <h3>SLA Support Contracts</h3>
              <p>We guarantee system uptime and active post-launch bug patches. Our engineering team is always available to implement version upgrades.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Transparent Estimation</h3>
              <p>No arbitrary pricing packages. You receive an itemized list of deliverables, project schedules, and server usage expectations.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Direct CRM &amp; Database Sync</h3>
              <p>We do not dump data in static spreadsheets. All customer records and telemetry sync directly with your primary systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQS (CHATBOT MATCHED - MAXIMUM 6 ITEMS) ── */}
      <section className="nd-faq">
        <div className="nd-faq-inner">
          <div className="nd-faq-tag">✦ FAQs ✦</div>
          <h2 className="nd-faq-title">Custom Web Application FAQs</h2>
          <div className="nd-faq-list">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <Link to="/contact-us" className="nd-faq-cta-btn">
              Still have questions? Talk to Us ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. EXPLORE RELATED SERVICES & ARCHITECTURAL SOLUTIONS (SEO INTERNAL LINKS) ── */}
      <section className="fs-section fs-section-bg-slate" style={{ borderTop: '1px solid #e2e8f0', padding: '60px 0' }}>
        <div className="fs-container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
            <div className="fs-tag-arrows">CROSS-STACK CAPABILITIES</div>
            <h2 className="fs-section-title" style={{ fontSize: '28px', marginBottom: '12px' }}>
              Related Engineering Services &amp; Architecture Guides
            </h2>
            <p className="fs-section-subtitle" style={{ fontSize: '15px', color: '#64748b' }}>
              Explore interconnected software capabilities, architectures, and engineering playbooks built by NovaDesk engineers.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}>
            {interlinks.map((link, idx) => {
              const cleanTitle = (link.title || '').replace(/\s*→\s*$/, '');
              return (
                <Link
                  key={idx}
                  to={link.url}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 22px',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    textDecoration: 'none',
                    color: '#0f172a',
                    fontWeight: '600',
                    fontSize: '14.5px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#2E29FF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(46, 41, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                  }}
                >
                  <span>{cleanTitle}</span>
                  <span style={{ color: '#2E29FF', fontSize: '16px', fontWeight: '700' }}>→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 13. HIGH-IMPACT BOTTOM CTA (CHATBOT MATCHED) ── */}
      <div className="fs-container" style={{ paddingBottom: '60px' }}>
        <section className="fs-cta-bottom">
          <div className="fs-cta-content-grid">
            <div className="fs-cta-text-left">
              <span className="fs-cta-badge">
                <span className="fs-cta-badge-dot"></span> Free Architecture &amp; Strategy Call
              </span>
              <h2>Ready to Build Your Custom Web Application?</h2>
              <p>
                Speak directly with senior software architects. Receive a detailed architecture scope, milestone timeline, and fixed quote within 24 hours.
              </p>
              <div className="fs-cta-trust-items">
                <span>✓ 100% Code Ownership</span>
                <span>✓ Direct Slack Channels</span>
                <span>✓ Production SLA Support</span>
              </div>
            </div>

            <div className="fs-cta-actions-right">
              <Link to="/contact-us" className="fs-btn-cta-primary">
                Book Free Consultation <ArrowRight />
              </Link>
              <Link to="/get-a-free-quote" className="fs-btn-cta-secondary">
                Get a Free Quote
              </Link>
              <div className="fs-cta-email-note">
                Or email: <a href="mailto:novadesk.site@gmail.com">novadesk.site@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
