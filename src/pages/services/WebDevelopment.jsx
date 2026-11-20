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
    <div style={{ display: 'block', background: '#0b0f19', borderRadius: '0 0 16px 16px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: '#070a12', borderBottom: '1px solid #1e293b' }}>
        <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>{snippets[activeTab].file}</span>
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
      <pre style={{ margin: 0, padding: '18px', fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: '12.5px', lineHeight: '1.6', color: '#e2e8f0', overflowX: 'auto', background: '#0b0f19' }}>
        <code>{snippets[activeTab].code}</code>
      </pre>
      <div style={{ padding: '8px 16px', background: 'rgba(46, 41, 255, 0.08)', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', color: '#38bdf8' }}>
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

  const canonicalUrl = "https://www.novadesk.site/services/web-development";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": "Custom Web Development Services Company | NovaDesk",
    "description": "High-performance custom web development services for startups and established enterprises. Next.js, React, full-stack cloud engineering, and guaranteed 100% IP ownership.",
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
    { title: "Web Application Development", url: "/services/web-application-development" },
    { title: "Full-Stack Development", url: "/services/full-stack-development" },
    { title: "SaaS Product Engineering", url: "/services/saas-development" },
    { title: "E-Commerce Development", url: "/services/ecommerce-development" },
    { title: "Custom Software Cost Breakdown", url: "/blog/how-much-does-custom-software-development-cost" },
  ];

  const tickerItems = [
    "100% SOURCE CODE OWNERSHIP",
    "DIRECT SENIOR DEVELOPER ACCESS",
    "SUB-100MS API RESPONSES",
    "ZERO VENDOR LOCK-IN",
    "ENTERPRISE GRADE SECURITY",
    "WEEKLY CLICKABLE STAGING BUILDS",
    "CLEAN NEXT.JS & REACT ARCHITECTURE",
    "TRANSPARENT SPRINT PRICING",
    "STRICT SOC 2 & OWASP COMPLIANCE",
    "30-DAY POST LAUNCH WARRANTY"
  ];

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
    { title: "Sub-Second Latency", desc: "Clean modern code and edge CDN caching deliver sub-1000ms Largest Contentful Paint for maximum retention." },
    { title: "95+ Google PageSpeed", desc: "Engineered specifically to ace Google Core Web Vitals and drive sustainable organic search rankings." },
    { title: "99.99% Production Uptime", desc: "Redundant cloud infrastructure, connection pooling, and automated failover keep your business online 24/7." }
  ];

  const benefitsTable = [
    { title: "Core Web Vitals Pass Rate", impact: "Guaranteed 95+ score across mobile and desktop viewports" },
    { title: "First Contentful Paint (FCP)", impact: "Sub-500ms initial rendering powered by React Server Components" },
    { title: "API Endpoint Latency", impact: "P99 under 100ms via optimized database queries and Redis caching" },
    { title: "IP & Intellectual Property", impact: "100% full transfer of repositories, server configs, and assets" }
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
    { industry: "Fintech & Banking", useCases: "PCI-compliant transaction flows, ledger interfaces, identity verification" },
    { industry: "Healthcare & Life Sciences", useCases: "Telehealth scheduling, HIPAA-compliant patient intake, secure portals" },
    { industry: "B2B SaaS & Enterprise", useCases: "Multi-tenant dashboards, usage-based billing, enterprise SSO" },
    { industry: "E-Commerce & Retail", useCases: "Headless Shopify/Next.js stores, 1-click checkout, ERP inventory sync" }
  ];

  return (
    <div className="fs-page">
      <SEO 
        title="Custom Web Development Services Company | NovaDesk"
        description="High-performance custom web development services for startups and established enterprises. Next.js, React, full-stack cloud engineering, and guaranteed 100% IP ownership."
        url="/services/web-development"
        keywords="Custom Web Development Company Kolkata, Hire Web Developers Kolkata, Next.js Web Agency Kolkata, Enterprise Website Engineering Kolkata, Full Stack Web Development Services Kolkata, High Performance Web Apps Kolkata, Best Web Development Company in Kolkata, NovaDesk Web"
        schema={[serviceSchema, faqSchema, webPageSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* ── 1. HERO SECTION (CHATBOT MATCHED) ── */}
      <section className="fs-hero">
        <div className="fs-container fs-hero-grid">
          <div className="fs-hero-content">
            <div className="fs-hero-eyebrow">
              <span className="fs-badge-dot"></span>
              CUSTOM WEB DEVELOPMENT &amp; FULL-STACK ENGINEERING
            </div>

            <h1 className="fs-hero-title">
              Custom <span className="fs-gradient-text">Web Development</span> Services for Modern Brands
            </h1>

            <p className="fs-hero-desc">
              We architect fast, secure, scalable websites and full-stack web applications using Next.js, React, and cloud backends. Clickable weekly staging, sub-second load times, and 100% day-one code ownership.
            </p>

            <div className="fs-hero-actions">
              <Link to="/get-a-free-quote" className="fs-btn fs-btn-primary">
                Get Started Free <ArrowRight />
              </Link>
              <Link to="/contact-us" className="fs-btn" style={{ background: '#0B0F19', color: '#fff', border: '1px solid #1E293B' }}>
                Request a Custom Quote →
              </Link>
            </div>

            <div className="fs-hero-checks">
              <span className="fs-hero-check">
                <HeroCheckBadge /> 100% Code Ownership
              </span>
              <span className="fs-hero-check">
                <HeroCheckBadge /> Sub-1s LCP PageSpeed
              </span>
              <span className="fs-hero-check">
                <HeroCheckBadge /> Deploy in 3-6 Weeks
              </span>
            </div>
          </div>

          <div className="nd-hero-browser-wrapper">
            <div className="nd-browser-card">
              <div className="nd-browser-topbar">
                <div className="nd-browser-dots">
                  <span className="nd-dot red"></span>
                  <span className="nd-dot yellow"></span>
                  <span className="nd-dot green"></span>
                </div>
                <div className="nd-browser-url">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', color: '#10B981'}}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  novadesk.site/web-engineering
                </div>
              </div>
              <div className="nd-browser-content" style={{ padding: '0', background: '#0b0f19' }}>
                <HeroTerminalWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TICKER STRIP & STATS RIBBON (CHATBOT MATCHED) ── */}
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
                <h2>Built for businesses that demand <em>exceptional web performance</em></h2>
                <p>Skip slow WordPress themes and fragmented teams. We build clean, high-converting websites and cloud web applications engineered for speed, security, and measurable ROI.</p>
              </div>
              <div className="nd-intro-stats">
                <div className="nd-intro-stat">
                  <div className="nd-intro-stat-num">&lt;1.0<sub>s</sub></div>
                  <div className="nd-intro-stat-label">Page Load Time</div>
                </div>
                <div className="nd-intro-divider" />
                <div className="nd-intro-stat">
                  <div className="nd-intro-stat-num">95<sub>+</sub></div>
                  <div className="nd-intro-stat-label">Core Web Vitals</div>
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

      {/* ── 3. SERVICE OVERVIEW & INTERACTIVE ARCHITECTURES (CHATBOT MATCHED) ── */}
      <section className="fs-section fs-section-bg-slate">
        <div className="fs-container">
          <div className="fs-tag-arrows">SERVICE OVERVIEW</div>
          <h2 className="fs-section-title">Architectures &amp; Frameworks We Deploy</h2>
          <p className="fs-section-subtitle">
            Explore our architectural blueprints below to discover latency benchmarks, database schemas, and enterprise use cases.
          </p>

          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
              Web Engineering Architectures We Support
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
                          color: architectures[activeArch]?.complexity === 'Enterprise Scale' ? '#EA4335' : 
                                 architectures[activeArch]?.complexity === 'High Speed' ? '#34A853' : '#2E29FF',
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
                  The NovaDesk Engineering Standard
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
                There is no shortage of generic digital agencies. We differentiate ourselves by delivering bespoke software engineering, enterprise security, and measurable conversion growth.
              </p>

              {/* Spotlight Card */}
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
          <h2 className="fs-section-title">Comprehensive Web Development Capabilities</h2>
          <p className="fs-section-subtitle">
            Every feature is engineered from the ground up for speed, security, and long-term maintainability.
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
          <div className="fs-tag-arrows">BUSINESS IMPACT</div>
          <h2 className="fs-section-title">Measurable Outcomes for Growing Ventures</h2>
          <p className="fs-section-subtitle">
            We measure our engineering success not just in clean syntax, but in measurable bottom-line growth.
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
              Expected Performance &amp; Business Metrics
            </h3>
            <div className="fs-table-container">
              <table className="fs-table">
                <thead>
                  <tr>
                    <th>Metric</th>
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
              <h2>The NovaDesk Senior Builder Protocol</h2>
            </div>
            <div className="fs-process-header-right">
              <p>
                A battle-tested production lifecycle designed to eliminate technical debt, guarantee uptime, and keep delivery on schedule.
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
          <div className="fs-tag-arrows">INDUSTRY APPLICATIONS</div>
          <h2 className="fs-section-title">Engineered for High-Stakes Verticals</h2>
          <p className="fs-section-subtitle">
            From regulated financial platforms to high-throughput marketplaces, we build software that performs under pressure.
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
              Common Industry Deployments
            </h3>
            <div className="fs-table-container">
              <table className="fs-table">
                <thead>
                  <tr>
                    <th>Industry</th>
                    <th>Typical Solution Architecture</th>
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
                  Modern Tools &amp; Production Frameworks
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                  We do not lock you into a single proprietary framework. We build modular web components using industry-standard platforms, programming languages, and server infrastructures to ensure your code is maintainable.
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
            Zero shortcuts on security. Every application is audited for vulnerabilities and data integrity.
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
              <h3>OWASP Top 10 Hardened</h3>
              <p>Protection against SQL injection, cross-site scripting (XSS), and CSRF token tampering built into every endpoint.</p>
            </div>
            <div className="fs-card-premium">
              <h3>30-Day Post-Launch Warranty</h3>
              <p>Immediate bug fixes, performance monitoring, and DNS stabilization included without extra charges after going live.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Transparent Sprint Pricing</h3>
              <p>No arbitrary pricing packages. You receive an itemized list of deliverables, project schedules, and server usage expectations.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Enterprise Cloud Hosting</h3>
              <p>Deploy directly to your private AWS, GCP, Vercel, or on-premise cloud infrastructure with zero lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQS (CHATBOT MATCHED - MAXIMUM 6 ITEMS) ── */}
      <section className="nd-faq">
        <div className="nd-faq-inner">
          <div className="nd-faq-tag">✦ FAQs ✦</div>
          <h2 className="nd-faq-title">Custom Web Development FAQs</h2>
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
              <h2>Let&apos;s Build Your Next Web Project Together</h2>
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
