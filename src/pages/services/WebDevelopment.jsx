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

// Interactive Code / Architecture Terminal Widget for Hero
function HeroTerminalWidget() {
  const [activeTab, setActiveTab] = useState(0);

  const snippets = [
    {
      tab: 'PageSpeed Engine',
      file: 'src/app/page.tsx',
      code: `// Next.js 15 Streaming Server Component
import { Suspense } from 'react';
import { HeroSection, LiveMetrics } from '@/components';

export const metadata = {
  title: 'High-Performance Web Engineering | NovaDesk',
  alternates: { canonical: 'https://www.novadesk.site/services/web-development' }
};

export default async function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection />
      <Suspense fallback={<MetricsSkeleton />}>
        <LiveMetrics latencyP99="<45ms" coreWebVitals={100} />
      </Suspense>
    </main>
  );
}`
    },
    {
      tab: 'Edge Middleware',
      file: 'middleware.ts',
      code: `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}`
    },
    {
      tab: 'Database & Prisma',
      file: 'prisma/schema.prisma',
      code: `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model ProjectDelivery {
  id           String   @id @default(uuid())
  clientSlug   String   @unique
  stagingUrl   String
  slaUptime    Decimal  @default(99.99)
  codeAudit    Boolean  @default(true)
  releasedAt   DateTime @default(now())
}`
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
        <span style={{ color: '#10b981' }}>● Sub-1.0s LCP Verified</span>
      </div>
    </div>
  );
}

export default function WebDevelopment() {
  const [activeArch, setActiveArch] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/web-development" },
    { name: "Web Development", url: "/services/web-development" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development Services",
    "serviceType": "Custom Web Development & Modern Web Applications",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "keywords": "custom web development company, hire web developers, Next.js web agency, enterprise website engineering, full stack web development services, high performance web apps, NovaDesk web",
    "description": "Custom web development services for startups and established enterprises. High-performance Next.js, React, and full-stack cloud web engineering with guaranteed IP ownership."
  };

  const faqs = [
    {
      q: "What makes NovaDesk's web development services different from generic agencies?",
      a: "At NovaDesk, you work directly with senior product engineers led by founder Harsh Prateek. We don't use bloated WordPress themes or hand your project to inexperienced offshore juniors. We engineer modern, scalable web applications using Next.js, React, Node.js, and cloud backends with clickable weekly staging and complete day-one code ownership."
    },
    {
      q: "How much does custom web development cost at NovaDesk?",
      a: "Project costs depend on your technical scope: modern business websites typically range from ₹25,000 to ₹75,000, while complex custom web applications, SaaS platforms, and startup MVPs typically range from ₹1,00,000 to ₹5,00,000+ ($1,200 to $6,000+ for international clients). We operate on transparent, milestone-based sprints with zero surprise change orders."
    },
    {
      q: "How long does it take to design and launch a custom website or web app?",
      a: "Our standardized rapid production framework typically delivers a complete, production-ready web application in 3 to 6 weeks. Every Friday, you test shippable code on a private, password-protected staging URL so there are never surprises on launch day."
    },
    {
      q: "Will our website be optimized for mobile devices, accessibility, and Google SEO?",
      a: "Yes. Every web application we build adheres strictly to WCAG 2.2 AA accessibility guidelines, passes Core Web Vitals (sub-2.5s LCP), includes comprehensive JSON-LD structured data, and is engineered mobile-first across all screen viewports from 320px to 4K displays."
    },
    {
      q: "Who owns the intellectual property and code repository once the project is finished?",
      a: "You retain 100% intellectual property sovereignty from day one. All GitHub repositories, cloud infrastructure, Supabase databases, and deployment keys are provisioned directly in your company's name with clean Git commit histories."
    },
    {
      q: "What ongoing support and warranty do you offer after launch?",
      a: "Every project includes a comprehensive 30-day post-launch warranty covering immediate bug fixes, performance monitoring, and DNS stabilization. We also offer monthly maintenance and retainer packages for continuous feature rollouts and cloud scaling."
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
      badge: "Performance First",
      complexity: "Production Grade",
      title: "Modern React & Next.js 15 App Router",
      tagline: "Server-side rendered and streaming components delivering sub-100ms first paint and flawless SEO indexing.",
      useCases: ["Corporate Websites", "B2B SaaS Portals", "High-Converting Landing Pages", "Global Brand Presence"],
      steps: [
        { badge: "Layer 01", title: "React Server Components", desc: "Minimal client-side JavaScript execution ensuring instantaneous initial page rendering." },
        { badge: "Layer 02", title: "Streaming Edge Rendering", desc: "Progressive UI delivery streaming critical content to the user's browser in milliseconds." },
        { badge: "Layer 03", title: "Incremental Static Regeneration (ISR)", desc: "Automated on-demand background regeneration keeping content dynamic without rebuilds." },
        { badge: "Layer 04", title: "Structured Schema & OpenGraph", desc: "Automated JSON-LD schemas and dynamic social preview images for search rankings." }
      ]
    },
    {
      badge: "Jamstack & Edge",
      complexity: "High Speed",
      title: "Edge-Cached Static Architecture (SSG)",
      tagline: "Lightning-fast static page generation cached globally across 300+ CDN edge points of presence.",
      useCases: ["D2C Brand Showcases", "Content Hubs & Media", "Documentation Portals", "Product Marketing Hubs"],
      steps: [
        { badge: "Step 01", title: "Static Site Generation", desc: "Pre-rendered HTML pages compiled at build time for near-zero server computing latency." },
        { badge: "Step 02", title: "Global Cloudflare CDN", desc: "Instant worldwide asset distribution with Brotli compression and HTTP/3 support." },
        { badge: "Step 03", title: "Zero Layout Shift (CLS: 0.00)", desc: "Exact image dimensions, font metric overrides, and smooth skeleton placeholders." },
        { badge: "Step 04", title: "Speculative Edge Prefetching", desc: "Predictive hover prefetching loading linked routes before the user even clicks." }
      ]
    },
    {
      badge: "Decoupled Content",
      complexity: "Modern Headless",
      title: "Headless CMS & Composable Content Mesh",
      tagline: "Decoupled content studios (Sanity, Strapi, Contentful) feeding high-speed React frontends.",
      useCases: ["Agile Marketing Teams", "Multi-Region Content Portals", "Enterprise Newsrooms", "Dynamic Blogs"],
      steps: [
        { badge: "Phase 01", title: "Visual Content Studio", desc: "Tailored visual block editors allowing marketers to build landing pages without code." },
        { badge: "Phase 02", title: "GraphQL Content API", desc: "Fast, strongly typed queries fetching structured data with zero payload waste." },
        { badge: "Phase 03", title: "Instant Webhook Revalidation", desc: "Immediate edge cache purging triggered automatically upon content publish." },
        { badge: "Phase 04", title: "Multi-Language Localization", desc: "Automated subpath routing, translation sync, and hreflang meta generation." }
      ]
    },
    {
      badge: "Enterprise Portals",
      complexity: "Enterprise Scale",
      title: "Full-Stack Web Applications & Client Portals",
      tagline: "High-throughput cloud web applications with relational databases, user authentication, and payment workflows.",
      useCases: ["Client Dashboards", "Internal Operations Tools", "B2B Ordering Portals", "Custom Workflow Systems"],
      steps: [
        { badge: "Gate 01", title: "Type-Safe Backend APIs", desc: "Node.js, Go, or Python microservices with strict payload validation and rate limits." },
        { badge: "Gate 02", title: "PostgreSQL & Supabase RLS", desc: "Relational database modeling with Row-Level Security and connection pooling." },
        { badge: "Gate 03", title: "Stripe & Razorpay Checkout", desc: "Idempotent payment webhooks, subscription billing, and automated invoice delivery." },
        { badge: "Gate 04", title: "SOC 2 Hardened Security", desc: "Audit trails, role-based access control (RBAC), and session revocation." }
      ]
    },
    {
      badge: "E-Commerce",
      complexity: "High Conversion",
      title: "Custom High-Speed E-Commerce Infrastructure",
      tagline: "Scalable online storefronts with frictionless single-page checkouts and automated inventory sync.",
      useCases: ["Direct-to-Consumer Stores", "Wholesale B2B Portals", "High-Volume Catalog Sites", "Subscription Box Brands"],
      steps: [
        { badge: "Module 01", title: "Frictionless Checkout UI", desc: "1-click checkout with Apple Pay, Google Pay, credit cards, and UPI express flows." },
        { badge: "Module 02", title: "Instant Algolia/Meilisearch", desc: "Sub-20ms typo-tolerant search and faceted catalog filters." },
        { badge: "Module 03", title: "ERP & Warehouse Webhooks", desc: "Two-way automated sync with inventory management and order fulfillment APIs." },
        { badge: "Module 04", title: "Abandoned Cart Telemetry", desc: "Real-time funnel analytics and automated email/SMS recovery triggers." }
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
    { tag: "Core Architecture", title: "Modern Next.js & React Frontends", desc: "Server-side rendering, streaming edge components, and semantic markup engineered for speed and search ranking." },
    { tag: "Performance", title: "Sub-Second Page Load Optimization", desc: "Optimized server-side rendering, asset compression, edge caching, and speculative prefetching for instant page swaps." },
    { tag: "Database Design", title: "High-Throughput Relational Databases", desc: "PostgreSQL, Supabase, and MySQL schemas optimized with indexing, connection pooling, and automated replication." },
    { tag: "Security & Auth", title: "Enterprise Identity & Access Governance", desc: "Multi-factor authentication (MFA), role-based access control (RBAC), and session management compliant with modern standards." },
    { tag: "Integrations", title: "Third-Party API & Webhook Systems", desc: "Seamless connections to Stripe, Razorpay, HubSpot, Salesforce, and custom internal enterprise ERP tools." },
    { tag: "DevOps & Cloud", title: "Automated CI/CD Deployment Pipelines", desc: "Dockerized container workflows with automated regression tests, zero-downtime deployments, and real-time monitoring." }
  ];

  const benefits = [
    { num: "Sub-1s", lbl: "Average Page Load Time", desc: "Clean modern code and edge CDN caching deliver instant page responsiveness." },
    { num: "95+", lbl: "Google PageSpeed Score", desc: "Engineered specifically to ace Google Core Web Vitals and drive organic rankings." },
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
        title="Custom Web Development Services Company | NovaDesk"
        description="High-performance custom web development services for startups and established enterprises. Next.js, React, full-stack cloud engineering, and guaranteed 100% IP ownership."
        url="/services/web-development"
        keywords="custom web development company, hire web developers, Next.js web agency, enterprise website engineering, full stack web development services, high performance web apps, NovaDesk web"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* ── 1. HERO SECTION ── */}
      <section className="fs-hero">
        <div className="fs-container fs-hero-grid">
          <div className="fs-hero-text">
            <div className="fs-badge-eyebrow">
              <span className="fs-dot-pulse" />
              CUSTOM WEB DEVELOPMENT &amp; CLOUD ENGINEERING
            </div>

            <h1 className="fs-hero-h1">
              Custom <span className="fs-text-blue">Web Development</span> Services for Modern Brands
            </h1>

            <p className="fs-subtext">
              We architect fast, secure, scalable websites and full-stack web applications using Next.js, React, and cloud backends. Clickable weekly staging, sub-second load times, and 100% day-one code ownership.
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
            <HeroTerminalWidget />
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
                  <strong>Sub-1s</strong>
                  <span>LCP Load Time</span>
                </div>
                <div className="fs-stat-pill">
                  <strong>95+</strong>
                  <span>Mobile PageSpeed</span>
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
          <h2 className="fs-section-title">Comprehensive Web Development Capabilities</h2>
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
              Web Development FAQs
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
                Let&apos;s Build Your Next Web Project Together
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
