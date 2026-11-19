import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import '../pages/services/ai-service-template.css';

// SVG Icons
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z" fill="currentColor"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
  </svg>
);

const IconChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
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

// Interactive Code / Architecture Terminal Widget for Service Hero
function DefaultHeroTerminal({ title = 'Enterprise Web Application Architecture' }) {
  const [activeTab, setActiveTab] = useState(0);

  const snippets = [
    {
      tab: 'API Router',
      lang: 'typescript',
      file: 'src/api/routes.ts',
      code: `import { createRouter, authenticate, rateLimit } from '@novadesk/core';

export const appRouter = createRouter()
  .use(rateLimit({ windowMs: 60_000, max: 1200 }))
  .use(authenticate({ roles: ['admin', 'workspace:read'] }))
  .query('getMetrics', async ({ ctx }) => {
    return await ctx.db.metrics.aggregate({
      latencyP99: 'sub-80ms',
      uptimeSLA: '99.99%',
      securityStatus: 'SOC2_Compliant'
    });
  });`
    },
    {
      tab: 'Schema & DDL',
      lang: 'sql',
      file: 'prisma/schema.prisma',
      code: `model TenantWorkspace {
  id             String    @id @default(uuid())
  slug           String    @unique
  encryptionKey  String    @db.VarChar(256)
  isolationLevel Isolation @default(ROW_LEVEL_SECURITY)
  createdAt      DateTime  @default(now())
  
  @@index([slug, createdAt])
}`
    },
    {
      tab: 'CI/CD Pipeline',
      lang: 'yaml',
      file: '.github/workflows/deploy.yml',
      code: `name: Production Deployment
on: [push]
jobs:
  verify-and-ship:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run test:security && npm run build
      - name: Deploy to Cloudflare Edge / AWS
        run: npx novadesk-ship --zero-downtime`
    }
  ];

  return (
    <div className="av-scene" style={{ display: 'block', background: '#0b0f19', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1e293b', boxShadow: '0 20px 45px rgba(0,0,0,0.35)' }}>
      {/* Chrome bar */}
      <div className="av-chrome-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', background: '#070a12', borderBottom: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="av-dot red" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
          <span className="av-dot yellow" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
          <span className="av-dot green" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600', marginLeft: '12px' }}>{snippets[activeTab].file}</span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {snippets.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === idx ? '#2E29FF' : 'rgba(255,255,255,0.06)',
                color: activeTab === idx ? '#fff' : '#94a3b8',
                fontWeight: '600'
              }}
            >
              {s.tab}
            </button>
          ))}
        </div>
      </div>
      {/* Code body */}
      <pre style={{ margin: 0, padding: '20px', fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: '13px', lineHeight: '1.6', color: '#e2e8f0', overflowX: 'auto', background: '#0b0f19' }}>
        <code>{snippets[activeTab].code}</code>
      </pre>
      {/* Terminal Footer status */}
      <div style={{ padding: '10px 18px', background: 'rgba(46, 41, 255, 0.08)', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', color: '#38bdf8' }}>
        <span>✓ 100% Production Grade Type Safety</span>
        <span style={{ color: '#10b981' }}>● All 70 Verification Tests Passed</span>
      </div>
    </div>
  );
}

export default function ServiceTemplate({ service }) {
  const [activeArch, setActiveArch] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service?.slug]);

  if (!service) return null;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/web-development" },
    { name: service.shortName || service.title, url: service.url }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.serviceType,
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "keywords": service.keywords,
    "description": service.serviceDescription || service.description
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (service.faqs || []).slice(0, 6).map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // Default architecture fallback tabs if not custom defined
  const architectures = service.architectures || [
    {
      badge: "Modern Architecture",
      complexity: "Production Grade",
      title: "Cloud-Native Modular Microservices",
      tagline: "Decoupled frontend & backend services engineered for zero-downtime scalability.",
      useCases: ["High-Traffic SaaS", "Multi-Tenant Portals", "Enterprise APIs", "Edge CDN Caching"],
      steps: [
        { badge: "Layer 01", title: "Next.js / React Edge Frontend", desc: "Sub-100ms First Contentful Paint with static and server-rendered components." },
        { badge: "Layer 02", title: "Type-Safe REST & GraphQL APIs", desc: "Node.js & Python backend services with complete request validation." },
        { badge: "Layer 03", title: "Relational & In-Memory Databases", desc: "PostgreSQL, Prisma, and Redis connection pooling with automated read replicas." },
        { badge: "Layer 04", title: "Automated CI/CD & Security", desc: "Isolated Docker environments with end-to-end linting, unit tests, and canary rollouts." }
      ]
    },
    {
      badge: "Performance First",
      complexity: "Ultra High",
      title: "Server-Side Rendered (SSR) & Jamstack Platforms",
      tagline: "Lightning-fast page delivery designed for top Google search rankings and instantaneous user navigation.",
      useCases: ["D2C E-Commerce", "Content Hubs & Media", "B2B SaaS Landing Pages", "Lead Generation Portals"],
      steps: [
        { badge: "Step 01", title: "Edge Caching & CDN Distribution", desc: "Global asset delivery via Cloudflare and Vercel edge networks." },
        { badge: "Step 02", title: "Automated Core Web Vitals Optimization", desc: "Zero CLS, optimized WebP imagery, and speculative prefetching." },
        { badge: "Step 03", title: "Headless CMS Integration", desc: "Sanity/Strapi headless content pipelines with live draft previews." },
        { badge: "Step 04", title: "Automated Sitemap & Rich Snippets", desc: "Dynamic JSON-LD schemas and automatic RSS generation." }
      ]
    },
    {
      badge: "Enterprise Security",
      complexity: "Enterprise",
      title: "Multi-Tenant Data Isolation & RBAC Governance",
      tagline: "Role-Based Access Control, audit logs, and encrypted tenant partitions built to enterprise security standards.",
      useCases: ["Fintech & Banking", "Healthcare HIPAA Systems", "Corporate ERP Portals", "Custom CRM Pipelines"],
      steps: [
        { badge: "Gate 01", title: "OAuth2 & SAML Single Sign-On", desc: "Multi-factor authentication (MFA) and enterprise enterprise directory sync." },
        { badge: "Gate 02", title: "Row-Level Security (RLS)", desc: "PostgreSQL row policies preventing cross-tenant data leakage." },
        { badge: "Gate 03", title: "Automated Audit Trails", desc: "Immutable write-only security logs of every administrative action." },
        { badge: "Gate 04", title: "Data Encryption at Rest & In-Transit", desc: "AES-256 database storage and enforced TLS 1.3 encryption." }
      ]
    },
    {
      badge: "Real-Time Reactivity",
      complexity: "High",
      title: "Event-Driven & WebSocket Streaming Pipelines",
      tagline: "Bi-directional WebSocket streaming, live presence indicators, and asynchronous background worker queues.",
      useCases: ["Live Dashboards", "Collaborative Workspaces", "Notification Centers", "Real-Time Chat & Ticketing"],
      steps: [
        { badge: "Phase 01", title: "WebSocket Connection Gateway", desc: "Persistent low-overhead sockets handling thousands of concurrent subscribers." },
        { badge: "Phase 02", title: "Redis Pub/Sub Message Bus", desc: "Sub-5ms message propagation across distributed server clusters." },
        { badge: "Phase 03", title: "Background Job Workers (BullMQ / Celery)", desc: "Asynchronous task processing without blocking the HTTP event loop." },
        { badge: "Phase 04", title: "Optimistic UI Reconciliation", desc: "Zero-latency local UI updates with automated state rollback on failure." }
      ]
    },
    {
      badge: "API-First Integrations",
      complexity: "Medium",
      title: "Omnichannel API Gateways & Webhook Orchestration",
      tagline: "Clean, documented REST/gRPC endpoints connecting third-party CRMs, ERPs, payment processors, and analytics.",
      useCases: ["Stripe / Razorpay Payments", "Salesforce & HubSpot CRM", "Custom Zapier Webhooks", "Mobile SDK Endpoints"],
      steps: [
        { badge: "Module 01", title: "Unified Gateway & Rate Limiter", desc: "Token bucket rate limiting to prevent API exhaustion and DDoS spikes." },
        { badge: "Module 02", title: "Idempotent Webhook Handlers", desc: "Safe duplicate event deduplication for payment receipts and billing events." },
        { badge: "Module 03", title: "OpenAPI & Swagger Documentation", desc: "Interactive developer documentation with runnable code examples." },
        { badge: "Module 04", title: "Telemetry & Sentry Alerting", desc: "Real-time error capture and latency heatmaps across all external endpoints." }
      ]
    }
  ];

  // Ticker items
  const tickerItems = service.ticker || [
    "100% SOURCE CODE OWNERSHIP",
    "DIRECT SENIOR DEVELOPER ACCESS",
    "SUB-100MS API RESPONSES",
    "ZERO VENDOR LOCK-IN",
    "ENTERPRISE GRADE SECURITY",
    "WEEKLY CLICKABLE STAGING BUILDS",
    "CLEAN NEXT.JS & REACT ARCHITECTURE",
    "TRANSPARENT SPRINT PRICING"
  ];

  // 6 Differentiators (Why Choose Us)
  const differentiators = service.whyUs || [
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

  // System features (6 cards)
  const features = service.capabilities || [
    { tag: "Core Architecture", title: "Modular Full-Stack Engineering", desc: "Bespoke web applications built with Next.js, React, Node.js, and TypeScript, engineered for long-term maintainability." },
    { tag: "Performance", title: "Sub-Second Page Load Optimization", desc: "Optimized server-side rendering, asset compression, edge caching, and speculative prefetching for instant page swaps." },
    { tag: "Database Design", title: "High-Throughput Relational Databases", desc: "PostgreSQL, Supabase, and MySQL schemas optimized with indexing, connection pooling, and automated replication." },
    { tag: "Security & Auth", title: "Enterprise Identity & Access Governance", desc: "Multi-factor authentication (MFA), role-based access control (RBAC), and session management compliant with modern standards." },
    { tag: "Integrations", title: "Third-Party API & Webhook Systems", desc: "Seamless connections to Stripe, Razorpay, HubSpot, Salesforce, and custom internal enterprise ERP tools." },
    { tag: "DevOps & Cloud", title: "Automated CI/CD Deployment Pipelines", desc: "Dockerized container workflows with automated regression tests, zero-downtime deployments, and real-time monitoring." }
  ];

  // Business benefits (4 cards)
  const benefits = service.benefits || [
    { num: "40%", lbl: "Lower Infrastructure Costs", desc: "Clean, efficient code and serverless edge caching minimize cloud hosting bills." },
    { num: "3.5x", lbl: "Faster Feature Releases", desc: "Modular, well-documented architecture allows your internal team to iterate rapidly." },
    { num: "99.99%", lbl: "Guaranteed Production Uptime", desc: "Redundant cloud infrastructure and automated failover keep your business online 24/7." },
    { num: "100%", lbl: "Complete IP & Asset Sovereignty", desc: "Full git history, release credentials, and architecture blueprints transferred to you." }
  ];

  // 4 Delivery Process Steps
  const processSteps = service.process || [
    { num: "Step 01", title: "Technical Discovery & Scope Definition", desc: "We review your business goals, user personas, database schemas, and integration boundaries to formulate a detailed technical specification." },
    { num: "Step 02", title: "Wireframes, Database DDL & API Contracts", desc: "Interactive Figma UX prototypes and schema blueprints are created and reviewed before writing production code." },
    { num: "Step 03", title: "Agile Development & Weekly Staging", desc: "Two-week sprints with clickable staging builds delivered every Friday for hands-on review and rapid iterative feedback." },
    { num: "Step 04", title: "Rigorous QA, Security Audit & Launch", desc: "Comprehensive penetration testing, mobile cross-device QA, DNS migration, and white-glove production launch with full IP handover." }
  ];

  // Industry Applications
  const industries = service.industries || [
    { title: "Fintech & Banking", desc: "Secure digital wallets, payment gateways, and real-time ledger dashboards with strict PCI-DSS compliance." },
    { title: "Healthcare & MedTech", desc: "HIPAA-compliant telemedicine platforms, patient appointment portals, and electronic medical record integrations." },
    { title: "B2B SaaS & Tech", desc: "Multi-tenant cloud platforms with recurring billing, seat-based subscriptions, and team permission trees." },
    { title: "E-Commerce & Retail", desc: "High-converting online storefronts, custom checkout flows, and automated ERP inventory synchronizations." },
    { title: "Logistics & Supply Chain", desc: "Fleet tracking, warehouse management dashboards, real-time GPS telemetry, and automated dispatch engines." },
    { title: "EdTech & Learning Portals", desc: "Interactive course platforms, video streaming pipelines, student progress analytics, and quiz engines." }
  ];

  // FAQs strictly capped at 6
  const faqsList = (service.faqs || []).slice(0, 6);

  return (
    <div className="fs-page">
      <SEO 
        title={service.metaTitle || service.title}
        description={service.metaDescription || service.description}
        url={service.url}
        keywords={service.keywords}
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* ── 1. HERO SECTION ── */}
      <section className="fs-hero">
        <div className="fs-container fs-hero-grid">
          <div className="fs-hero-text">
            <div className="fs-badge-eyebrow">
              <span className="fs-dot-pulse" />
              {service.eyebrow || "ENTERPRISE SOFTWARE ENGINEERING"}
            </div>

            <h1 className="fs-hero-h1">
              {service.h1Prefix && `${service.h1Prefix} `}
              <span className="fs-text-blue">{service.h1Highlight || service.shortName || service.title}</span>
              {service.h1Suffix && ` ${service.h1Suffix}`}
            </h1>

            <p className="fs-subtext">
              {service.subtext || service.metaDescription || service.description}
            </p>

            <div className="fs-cta-row">
              <Link to="/get-a-free-quote" className="fs-btn fs-btn-primary">
                Get Started Free <ArrowRight />
              </Link>
              <Link to="/contact-us" className="fs-btn fs-btn-white">
                Request a Custom Quote →
              </Link>
            </div>

            <div className="fs-trust-row" style={{ marginTop: '28px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#475569', fontWeight: '600' }}>
                <HeroCheckBadge />
                <span>100% Code &amp; IP Ownership</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#475569', fontWeight: '600' }}>
                <HeroCheckBadge />
                <span>Zero Vendor Lock-In</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#475569', fontWeight: '600' }}>
                <HeroCheckBadge />
                <span>Direct Developer Slack Access</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual / Interactive Widget */}
          <div className="fs-hero-visual-wrap">
            {service.heroImage ? (
              <div style={{ background: '#ffffff', borderRadius: '18px', padding: '16px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(46,41,255,0.08)' }}>
                <img 
                  src={service.heroImage} 
                  alt={`${service.title} Architecture`}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
            ) : service.heroWidget ? (
              service.heroWidget
            ) : (
              <DefaultHeroTerminal title={service.title} />
            )}
          </div>
        </div>
      </section>

      {/* ── 2. TICKER STRIP & BLUE STATS RIBBON ── */}
      <section className="fs-agency-alt">
        <div className="nd-ticker-wrap">
          <div className="nd-ticker">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <span key={idx} className="fs-ticker-pill">
                ✦ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="fs-stats-ribbon">
          <div className="fs-container">
            <div className="fs-ribbon-grid">
              <div className="fs-ribbon-intro">
                <h2>Built for businesses that demand software that converts &amp; scales</h2>
                <p>Skip bloated templates and fragile off-the-shelf site builders. We engineer modern, scalable web applications with bespoke backend pipelines and clean day-one code ownership.</p>
              </div>

              <div className="fs-ribbon-stats-row">
                {(service.metrics || [
                  { num: "<100ms", lbl: "API Response Latency" },
                  { num: "99.99%", lbl: "Production Uptime SLA" },
                  { num: "100%", lbl: "Source Code Ownership" }
                ]).map((m, idx) => (
                  <div key={idx} className="fs-stat-col">
                    <span className="fs-stat-num">{m.num}</span>
                    <span className="fs-stat-lbl">{m.lbl}</span>
                  </div>
                ))}
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
                    <span className="fs-overview-preview-badge">{architectures[activeArch]?.badge || "Production Ready"}</span>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Complexity: 
                      <span style={{ color: '#2E29FF', fontWeight: '800' }}>
                        {architectures[activeArch]?.complexity || "Enterprise Grade"}
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
                      <span key={uIdx} style={{ background: 'rgba(46, 41, 255, 0.05)', border: '1px solid rgba(46, 41, 255, 0.15)', borderRadius: '20px', padding: '5px 12px', fontSize: '12px', fontWeight: '600', color: '#2E29FF' }}>
                        ✦ {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Do's vs Don'ts Split Cards */}
          <div className="fs-split-cards" style={{ marginTop: '48px' }}>
            <div className="fs-split-card fs-split-card-success">
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                What Makes Your Web Project Succeed
              </h3>
              <ul className="fs-split-list">
                <li className="fs-split-item">
                  <div className="fs-split-item-icon"><CheckCircle /></div>
                  <div><strong>Modular Component Hierarchy:</strong> Reusable React and Next.js design systems ensuring brand consistency across hundreds of pages.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon"><CheckCircle /></div>
                  <div><strong>Database Indexing &amp; Query Tuning:</strong> Explicit query profiling to eliminate slow database joins and connection bottlenecks under peak traffic.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon"><CheckCircle /></div>
                  <div><strong>Built-In Technical SEO &amp; Accessibility:</strong> Semantic HTML5 tags, WCAG AA compliance, and JSON-LD schema markup from day one.</div>
                </li>
                <li className="fs-split-item">
                  <div className="fs-split-item-icon"><CheckCircle /></div>
                  <div><strong>Automated CI/CD Deployment Pipelines:</strong> Zero-downtime releases with automated regression test validation on every pull request.</div>
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
          <h2 className="fs-section-title">{service.capabilitiesTitle || "Comprehensive Full-Stack Capabilities"}</h2>
          <p className="fs-section-subtitle">
            Every feature is engineered from the ground up for speed, security, and long-term maintainability.
          </p>

          <div className="fs-features-grid" style={{ marginTop: '40px' }}>
            {features.map((feat, idx) => (
              <div key={idx} className="fs-feature-card">
                <span className="fs-feature-badge" style={{ fontSize: '11px', fontWeight: '800', color: '#2E29FF', background: 'rgba(46,41,255,0.06)', padding: '4px 10px', borderRadius: '20px', display: 'inline-block', marginBottom: '12px' }}>
                  {feat.tag || "Feature"}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0b0f19', marginBottom: '10px' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: '1.65', margin: 0 }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BUSINESS BENEFITS & TANGIBLE ROI ── */}
      <section className="fs-section">
        <div className="fs-container">
          <div className="fs-tag-arrows">BUSINESS BENEFITS</div>
          <h2 className="fs-section-title">Measurable Outcomes for Your Business</h2>
          <p className="fs-section-subtitle">
            We don't just write code; we deliver digital assets that reduce operational overhead and drive conversion.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {benefits.map((b, idx) => (
              <div key={idx} style={{ background: '#ffffff', borderRadius: '16px', padding: '32px 24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', transition: 'all 0.3s' }}>
                <span style={{ fontSize: '38px', fontWeight: '900', color: '#2E29FF', display: 'block', marginBottom: '8px', letterSpacing: '-1px' }}>
                  {b.num}
                </span>
                <strong style={{ fontSize: '17px', color: '#0b0f19', display: 'block', marginBottom: '8px' }}>
                  {b.lbl}
                </strong>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PROCESS CADENCE (BLUE SECTION) ── */}
      <section className="fs-process-blue">
        <div className="fs-container">
          <div className="fs-process-header-wrap" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px auto' }}>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              ✦ {service.processTag || "EXECUTION PROTOCOL"} ✦
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.8px' }}>
              {service.processTitle || "How We Build & Ship Software"}
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.65' }}>
              A disciplined, transparent 4-stage engineering sprint protocol engineered to eliminate surprises.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {processSteps.map((step, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '30px 24px', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.65', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. INDUSTRY APPLICATIONS ── */}
      <section className="fs-section fs-section-bg-slate">
        <div className="fs-container">
          <div className="fs-tag-arrows">INDUSTRY APPLICATIONS</div>
          <h2 className="fs-section-title">Engineered for Your Industry Vertical</h2>
          <p className="fs-section-subtitle">
            Proven domain implementations tailored to regulatory, security, and transaction constraints.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {industries.map((ind, idx) => (
              <div key={idx} style={{ background: '#ffffff', borderRadius: '14px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0b0f19', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#2E29FF' }}>✦</span> {ind.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. DIRECT SENIOR DEVELOPER ACCESS ── */}
      <section className="expertise experts" style={{ padding: '70px 0', background: '#ffffff' }}>
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
              {service.faqsTitle || "Got Questions? We Have Answers."}
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', textAlign: 'center', marginBottom: '44px' }}>
              Everything you need to know about our engineering process, pricing, and handover.
            </p>

            <div className="nd-faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqsList.map((faq, idx) => (
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
                Let&apos;s Build Your Next Digital Product Together
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
