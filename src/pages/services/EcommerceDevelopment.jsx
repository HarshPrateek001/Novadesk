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

// Interactive Code / Architecture Terminal Widget for E-Commerce Hero
function EcommerceHeroTerminal() {
  const [activeTab, setActiveTab] = useState(0);

  const snippets = [
    {
      tab: 'Checkout Engine',
      file: 'src/checkout/order-pipeline.ts',
      code: `// Instant 1-Click Server-Side Checkout Pipeline
import { stripe, razorpay, inventoryWorker } from '@/lib/commerce';

export async function processOrder(cart: CartSession) {
  const reservation = await inventoryWorker.reserveLock(cart.items, { ttl: 300 });
  const payment = await stripe.paymentIntents.create({
    amount: cart.totalCents,
    currency: 'usd',
    idempotencyKey: cart.idempotencyToken
  });
  return { status: 'CONFIRMED', latency: '48ms', trackingId: payment.id };
}`
    },
    {
      tab: 'Catalog Edge ISR',
      file: 'src/app/products/[slug]/page.tsx',
      code: `// Next.js 15 Streaming Catalog Page with Edge Cache
export const revalidate = 60; // 60s On-Demand ISR

export default async function ProductPage({ params }: Props) {
  const product = await getCachedProduct(params.slug);
  return (
    <ProductLayout
      sku={product.sku}
      realTimeStock={product.stockLevel}
      coreWebVitals={{ lcp: '<600ms', cls: 0.00 }}
    />
  );
}`
    },
    {
      tab: 'ERP Webhooks',
      file: 'webhooks/erp-sync.ts',
      code: `// Bidirectional Warehouse & Inventory Sync
export async function handleStockUpdate(event: InventoryEvent) {
  await redis.set(\`stock:\${event.sku}\`, event.quantity);
  await edgeCdn.purgeTag(\`product:\${event.sku}\`);
  return { purged: true, syncDuration: '14ms' };
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
        <span>✓ 10,000+ Concurrent Checkouts</span>
        <span style={{ color: '#10b981' }}>● Sub-1.2s P99 Checkout</span>
      </div>
    </div>
  );
}

export default function EcommerceDevelopment() {
  const [activeArch, setActiveArch] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/ecommerce-development" },
    { name: "E-Commerce Development", url: "/services/ecommerce-development" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-Commerce Website Development Services",
    "serviceType": "E-Commerce Development & Custom Online Storefronts",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "keywords": "ecommerce development company, B2B ecommerce web development agency, custom online storefront development, headless ecommerce development, Shopify Plus and WooCommerce agency, ecommerce payment gateway integration, NovaDesk ecommerce",
    "description": "High-converting custom e-commerce web development, headless storefronts, Shopify Plus engineering, and high-volume WooCommerce architectures with guaranteed 100% IP ownership."
  };

  const faqs = [
    {
      q: "Which e-commerce platforms does NovaDesk specialize in?",
      a: "We engineer custom headless e-commerce platforms using Next.js and Shopify Storefront APIs, high-performance Shopify Plus custom themes, and scalable WooCommerce architectures tailored for high-volume order processing with zero slow page builders."
    },
    {
      q: "How do you optimize e-commerce stores for maximum conversion rates?",
      a: "We engineer ultra-fast checkout flows, frictionless one-click payment integrations (Apple Pay, Google Pay, UPI, Stripe, Razorpay), predictive typo-tolerant search, and sub-second catalog page load speeds to minimize cart abandonment."
    },
    {
      q: "Can you synchronize inventory and orders with our existing ERP or warehouse software?",
      a: "Yes. We build custom bidirectional API integrations that synchronize live inventory, shipping labels, tax calculation, and order fulfilment with Tally, SAP, custom warehouse software, and 3PL fulfillment networks."
    },
    {
      q: "Do you build multi-currency and international e-commerce stores?",
      a: "Yes. We configure multi-currency billing, localized geo-IP routing, automated tax and duties calculation, and multilingual catalog support for brands selling across India, North America, the Middle East, and Europe."
    },
    {
      q: "How do you handle flash sales and massive concurrent traffic spikes?",
      a: "We deploy edge-cached static product pages (ISR), auto-scaling cloud databases with Redis caching, and asynchronous payment queue workers capable of handling over 10,000 concurrent checkout sessions without crashing."
    },
    {
      q: "Who owns the e-commerce codebase, design assets, and database after launch?",
      a: "You retain 100% full intellectual property ownership from day one. All custom Shopify theme code, Next.js repositories, database schemas, and API credentials are transferred completely to your accounts."
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

  const tickerItems = [
    "100% SOURCE CODE OWNERSHIP",
    "SUB-1.2S CATALOG LOAD SPEED",
    "10,000+ CONCURRENT CHECKOUTS",
    "ZERO PLATFORM LOCK-IN",
    "HEADLESS COMMERCE ARCHITECTURE",
    "WEEKLY CLICKABLE STAGING BUILDS",
    "CUSTOM ERP & WAREHOUSE SYNC",
    "STRICT PCI-DSS COMPLIANCE",
    "DIRECT SENIOR DEVELOPER ACCESS",
    "30-DAY POST LAUNCH WARRANTY"
  ];

  const architectures = [
    {
      badge: "Headless High Speed",
      complexity: "Production Grade",
      title: "Headless Next.js 15 & Shopify Storefront API",
      tagline: "Decoupled frontend delivering sub-500ms catalog browsing and infinite UI customization backed by Shopify checkout.",
      useCases: ["D2C High-Growth Brands", "Omnichannel Retailers", "Global Multi-Currency Stores", "Custom Subscription Brands"],
      steps: [
        { badge: "Layer 01", title: "Next.js App Router Frontend", desc: "React Server Components streaming product details with zero client JS bloat." },
        { badge: "Layer 02", title: "Shopify Storefront GraphQL", desc: "Real-time cart and inventory management via high-throughput GraphQL endpoints." },
        { badge: "Layer 03", title: "Cloudflare Edge Caching", desc: "Global asset distribution caching product grids across 300+ CDN edge nodes." },
        { badge: "Layer 04", title: "Instant 1-Click Checkout", desc: "Apple Pay, Google Pay, Shop Pay, and credit card express checkout flows." }
      ]
    },
    {
      badge: "Shopify Plus Native",
      complexity: "Enterprise Scale",
      title: "Bespoke Shopify Plus Liquid & Theme 2.0",
      tagline: "Clean, zero-app-bloat custom Shopify themes designed specifically to maximize conversion rates and average order value.",
      useCases: ["Fashion & Lifestyle Brands", "High-Volume Apparel", "Wholesale B2B Portals", "Direct-to-Consumer Pioneers"],
      steps: [
        { badge: "Step 01", title: "Zero-Bloat Custom Theme", desc: "Hand-coded Liquid architecture avoiding heavy visual page builder plugins." },
        { badge: "Step 02", title: "Shopify Functions & Scripts", desc: "Custom tiered pricing, bundle discounts, and automated shipping logic." },
        { badge: "Step 03", title: "Predictive Cart Drawer", desc: "AI-driven cross-sells and free-shipping threshold progression bars." },
        { badge: "Step 04", title: "Klaviyo & CRM Integration", desc: "Real-time abandoned checkout telemetry and automated SMS/email triggers." }
      ]
    },
    {
      badge: "High-Volume WordPress",
      complexity: "Open Source Control",
      title: "Enterprise WooCommerce & High-Concurrency Redis",
      tagline: "Custom WooCommerce instances optimized with database connection pooling and micro-caching to eliminate cart sluggishness.",
      useCases: ["Custom Digital Goods", "B2B Wholesale Portals", "Indian D2C Brands with UPI", "Zero-Commission Stores"],
      steps: [
        { badge: "Phase 01", title: "Bespoke Theme Core", desc: "Clean semantic markup without Elementor or heavy multi-purpose frameworks." },
        { badge: "Phase 02", title: "Redis Object Caching", desc: "In-memory caching of complex database queries and product taxonomy trees." },
        { badge: "Phase 03", title: "Idempotent Payment Hooks", desc: "Frictionless Razorpay, Cashfree, Stripe, and COD automated validation." },
        { badge: "Phase 04", title: "Automated Backup & Failover", desc: "Continuous daily database snapshots and automated staging test environments." }
      ]
    },
    {
      badge: "Composable Commerce",
      complexity: "Custom Enterprise",
      title: "MedusaJS & Custom Node.js Microservices",
      tagline: "100% open-source composable commerce engine with modular cart, fulfillment, and multi-warehouse routing.",
      useCases: ["Multi-Vendor Marketplaces", "Complex B2B Quotations", "Custom Subscription Engines", "International Multi-Warehouse"],
      steps: [
        { badge: "Gate 01", title: "Modular Commerce Core", desc: "Decoupled Node.js headless backend with complete data sovereignty." },
        { badge: "Gate 02", title: "PostgreSQL & Prisma DDL", desc: "Relational database modeling with automated database migrations." },
        { badge: "Gate 03", title: "Algolia Typo-Tolerant Search", desc: "Sub-20ms search indexing with faceted filters and catalog navigation." },
        { badge: "Gate 04", title: "Warehouse ERP Webhooks", desc: "Live integration with inventory management systems and 3PL fulfillment APIs." }
      ]
    },
    {
      badge: "B2B Wholesale",
      complexity: "Enterprise Scale",
      title: "Custom B2B Commerce & Corporate Ordering Portals",
      tagline: "Gated wholesale storefronts with custom volume pricing, purchase order (PO) invoicing, and team approval hierarchies.",
      useCases: ["Industrial Suppliers", "Corporate Gifting Portals", "Bulk Wholesale Distributors", "Private Dealer Networks"],
      steps: [
        { badge: "Module 01", title: "Role-Based Account Trees", desc: "Tiered buyer permissions, credit limit approvals, and multi-seat logins." },
        { badge: "Module 02", title: "Dynamic Tiered Price Lists", desc: "Contract pricing matrices automatically tailored to verified client tiers." },
        { badge: "Module 03", title: "Net-30 Invoicing & PO Flow", desc: "Automated PDF invoice delivery and offline payment reconciliation webhooks." },
        { badge: "Module 04", title: "ERP & SAP Real-Time Sync", desc: "Direct bidirectional sync with legacy enterprise inventory databases." }
      ]
    }
  ];

  const differentiators = [
    {
      num: "01",
      title: "Direct Senior Developer Collaboration",
      desc: "You work directly with senior e-commerce product engineers led by founder Harsh Prateek. No non-technical account managers, no outsourced junior contractors. Fast answers, sharp code, and direct Slack channels."
    },
    {
      num: "02",
      title: "100% Day-One Code Ownership",
      desc: "You own every single line of custom theme code, headless microservices, database schemas, and CI/CD pipelines from day one. Zero recurring vendor platform fees, zero revenue cuts, zero lock-in."
    },
    {
      num: "03",
      title: "Weekly Clickable Staging Releases",
      desc: "No multi-month radio silences. Every Friday, you test working checkout flows and product pages on a private, password-protected staging URL with an async video walkthrough explaining every feature."
    },
    {
      num: "04",
      title: "Engineered for Conversion & Speed",
      desc: "Every 100ms of latency reduction lifts conversion rates. We engineer sub-second catalog loads, optimize checkout steps, and guarantee 95+ Core Web Vitals to keep shoppers buying."
    },
    {
      num: "05",
      title: "Automated ERP & Warehouse Integration",
      desc: "We don't leave you with manual CSV imports. We build resilient bidirectional webhooks that sync inventory, order fulfillment, shipping labels, and customer records with your backend systems."
    },
    {
      num: "06",
      title: "Transparent, Milestone-Based Sprints",
      desc: "Predictable budgets with zero surprise change orders. We work on defined milestone-based sprints with clear deliverables, guaranteed SLAs, and full technical handover documentation."
    }
  ];

  const features = [
    { tag: "Storefront UI", title: "Conversion-Centric Storefronts", desc: "Frictionless mobile layouts, sticky add-to-cart bars, and dynamic customer reviews engineered to maximize cart values." },
    { tag: "Checkout Speed", title: "Sub-Second Express Checkout", desc: "One-click Apple Pay, Google Pay, Shop Pay, UPI, and credit card flows that eliminate cart abandonment friction." },
    { tag: "Search & Filter", title: "Typo-Tolerant Instant Search", desc: "Sub-20ms Algolia and Meilisearch integrations with facet filters, SKU matching, and dynamic autocomplete." },
    { tag: "ERP & 3PL Sync", title: "Real-Time Warehouse & Inventory Sync", desc: "Two-way automated sync with SAP, Tally, Shiprocket, Delhivery, and custom warehouse management APIs." },
    { tag: "Global Commerce", title: "Multi-Currency & Geo-IP Routing", desc: "Localized currency conversion, automated duties/tax calculation, and multi-language catalog support for global scale." },
    { tag: "Security & Scale", title: "PCI-DSS Hardened Infrastructure", desc: "Automated failover, Redis caching, and rate-limiting designed to absorb 10,000+ concurrent flash sale checkout requests." }
  ];

  const benefits = [
    { title: "Sub-1.2s Checkout Latency", desc: "Clean modern code and edge CDN caching deliver instant page responsiveness and eliminate shopping cart drop-off." },
    { title: "+28% Conversion Lift", desc: "Engineered specifically to minimize checkout friction, speed up catalog browsing, and elevate customer trust." },
    { title: "99.99% Flash Sale Uptime", desc: "Redundant cloud infrastructure, connection pooling, and automated failover keep your store online during peak promotional campaigns." }
  ];

  const benefitsTable = [
    { title: "Catalog Page Load (LCP)", impact: "Sub-800ms initial rendering powered by React Server Components" },
    { title: "Average Checkout Completion", impact: "+28% higher completion rate via 1-click express payment flows" },
    { title: "Flash Sale Concurrency", impact: "Guaranteed support for 10,000+ simultaneous checkout requests" },
    { title: "IP & Intellectual Property", impact: "100% full transfer of repositories, theme files, and database schemas" }
  ];

  const processSteps = [
    { stepNum: "STEP 01", title: "Technical Discovery & Catalog Architecture", desc: "We audit your product catalog, payment requirements, shipping integrations, and ERP software to establish a complete technical specification." },
    { stepNum: "STEP 02", title: "Conversion UX Wireframes & Cart Blueprints", desc: "High-converting Figma mobile storefront designs and checkout flows are created and reviewed before authoring production code." },
    { stepNum: "STEP 03", title: "Agile Development & Weekly Staging", desc: "Two-week sprints with testable staging builds delivered every Friday for hands-on order placement and iterative feedback." },
    { stepNum: "STEP 04", title: "Payment QA, Load Testing & White-Glove Launch", desc: "Comprehensive payment gateway sandboxing, 10,000-user stress testing, DNS migration, and live production launch with full IP handover." }
  ];

  const industries = [
    { title: "Fashion & Apparel", desc: "High-resolution lookbooks, dynamic size charts, swatch selectors, and personalized cross-sell cart drawers." },
    { title: "Consumer Electronics", desc: "Complex technical spec comparison tables, warranty add-on flows, and serialized inventory tracking." },
    { title: "Health & Wellness", desc: "Recurring subscription billing (Recharge), ingredient transparency accordions, and automated replenishment cycles." },
    { title: "Food & Beverage", desc: "Perishable delivery time slot pickers, localized zip-code fulfillment routing, and cold-pack shipping calculators." },
    { title: "B2B Wholesale & Industrial", desc: "Gated customer pricing tiers, bulk order matrices, quote request engines, and Net-30 PO invoicing." },
    { title: "Beauty & Cosmetics", desc: "Virtual shade try-on integrations, cruelty-free certification badges, and custom bundle builder workflows." }
  ];

  const industryTable = [
    { industry: "Fashion & Lifestyle", useCases: "Next.js headless stores, dynamic size recommendation, Instagram shop sync" },
    { industry: "Health & Supplements", useCases: "Recurring subscription billing, tiered volume discounts, quiz recommendation funnels" },
    { industry: "B2B Wholesale & Supply", useCases: "Gated corporate accounts, custom contract pricing, Net-30 purchase order workflows" },
    { industry: "D2C Consumer Brands", useCases: "High-converting single-page checkouts, localized UPI/Cash on Delivery, 3PL sync" }
  ];

  return (
    <div className="fs-page">
      <SEO 
        title="E-Commerce Development Company | Custom Online Stores & Shopify"
        description="High-converting custom e-commerce website development, Shopify Plus engineering, headless commerce, and high-volume WooCommerce architectures with guaranteed 100% IP ownership."
        url="/services/ecommerce-development"
        keywords="ecommerce development company, B2B ecommerce web development agency, custom online storefront development, headless ecommerce development, Shopify Plus and WooCommerce agency, ecommerce payment gateway integration, NovaDesk ecommerce"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* ── 1. HERO SECTION (CHATBOT MATCHED) ── */}
      <section className="fs-hero">
        <div className="fs-container fs-hero-grid">
          <div className="fs-hero-content">
            <div className="fs-hero-eyebrow">
              <span className="fs-badge-dot"></span>
              HIGH-CONVERSION E-COMMERCE ENGINEERING
            </div>

            <h1 className="fs-hero-title">
              Custom <span className="fs-gradient-text">E-Commerce Development</span> for Ambitious Brands
            </h1>

            <p className="fs-hero-desc">
              We engineer fast, secure, scalable digital storefronts that convert visitors into loyal buyers. Headless Next.js commerce, custom Shopify Plus themes, and high-volume WooCommerce architectures with 100% IP ownership.
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
                <HeroCheckBadge /> Sub-1.2s P99 Checkout
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
                  store.novadesk.site/checkout
                </div>
              </div>
              <div className="nd-browser-content" style={{ padding: '0', background: '#0b0f19' }}>
                <EcommerceHeroTerminal />
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
                <h2>Built for brands that demand <em>storefronts that convert</em></h2>
                <p>Skip slow bloated themes and fragmented plugins. We build lightning-fast, high-converting digital storefronts engineered for speed, frictionless checkout, and massive order volume.</p>
              </div>
              <div className="nd-intro-stats">
                <div className="nd-intro-stat">
                  <div className="nd-intro-stat-num">&lt;1.2<sub>s</sub></div>
                  <div className="nd-intro-stat-label">P99 Checkout Speed</div>
                </div>
                <div className="nd-intro-divider" />
                <div className="nd-intro-stat">
                  <div className="nd-intro-stat-num">99.99<sub>%</sub></div>
                  <div className="nd-intro-stat-label">Checkout SLA Uptime</div>
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
                <div>Modern Next.js<br/>&amp; Shopify Plus</div>
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
          <h2 className="fs-section-title">E-Commerce Architectures We Deploy</h2>
          <p className="fs-section-subtitle">
            Explore our architectural blueprints below to discover latency benchmarks, inventory synchronizations, and checkout capabilities.
          </p>

          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
              Digital Commerce Architectures We Support
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
                                 architectures[activeArch]?.complexity === 'Production Grade' ? '#2E29FF' : '#34A853',
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
                  The NovaDesk E-Commerce Standard
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Zero-Bloat Custom Architecture:</strong> Bespoke Next.js or Shopify Liquid themes without 30+ speed-draining apps.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Frictionless 1-Click Payments:</strong> Apple Pay, Google Pay, UPI, and credit card flows engineered for instant conversion.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon"><CheckCircle /></div>
                    <div><strong>Automated ERP &amp; Warehouse Sync:</strong> Bidirectional APIs synchronizing live inventory and fulfillment in real time.</div>
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
                  Common E-Commerce Pitfalls (What We Avoid)
                </h3>
                <ul className="fs-split-list">
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>App Bloat &amp; Plugin Clutter:</strong> Stacking 25+ monthly Shopify apps that inject render-blocking scripts and destroy mobile LCP.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>High Cart Abandonment:</strong> Clunky multi-step checkouts requiring tedious account creation and slow page reloads.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Flash Sale Server Crashes:</strong> Fragile monolithic databases that time out as soon as influencer promotions drive traffic spikes.</div>
                  </li>
                  <li className="fs-split-item">
                    <div className="fs-split-item-icon" style={{ background: 'rgba(234, 67, 53, 0.1)', color: '#EA4335', fontWeight: 'bold' }}>✕</div>
                    <div><strong>Manual Spreadsheet Sync:</strong> Operators wasting dozens of hours daily manually re-keying orders into warehouse software.</div>
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
                A Conversion-First Approach to Online Stores
              </h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.65' }}>
                There is no shortage of drag-and-drop website templates. We differentiate ourselves by engineering high-converting commerce engines, ultra-fast checkouts, and resilient cloud backends.
              </p>

              {/* Spotlight Card */}
              <div className="fs-value-spotlight">
                <h4>The NovaDesk Promise</h4>
                <ul className="fs-spotlight-list">
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>100% Source Code &amp; Theme Ownership</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>Zero Platform Lock-In or Hidden Fees</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>Direct Senior Developer Slack Access</span>
                  </li>
                  <li className="fs-spotlight-item">
                    <CheckCircle />
                    <span>Strict PCI-DSS Compliance Standards</span>
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
                  <div><strong>Heavy pre-made templates:</strong> Slow loading times that fail Google Core Web Vitals and increase cart abandonment.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✕</span>
                  <div><strong>Bloated third-party apps:</strong> Layering 20+ monthly recurring apps that conflict, slow down checkout, and leak customer data.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✕</span>
                  <div><strong>Inflexible workflows:</strong> Incapable of accommodating custom B2B tiers, complex bundles, or real-time warehouse ERP sync.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✕</span>
                  <div><strong>Revenue rev-shares:</strong> Hidden agency rev-share markups or ongoing proprietary licensing fees.</div>
                </li>
              </ul>
            </div>

            <div className="fs-comp-card fs-comp-card-custom">
              <h4>The NovaDesk Custom Route</h4>
              <ul className="fs-comp-list">
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✓</span>
                  <div><strong>Full IP ownership:</strong> Complete custom theme code and server configurations belong to you, with zero revenue cuts.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✓</span>
                  <div><strong>Sub-1.2s checkout:</strong> Engineered for speed with 1-click Apple Pay, Google Pay, UPI, and instant card validation.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✓</span>
                  <div><strong>Direct ERP &amp; 3PL integration:</strong> Automated bidirectional sync with inventory, shipping labels, and accounting software.</div>
                </li>
                <li className="fs-comp-item">
                  <span className="fs-comp-item-icon">✓</span>
                  <div><strong>Flash sale resilience:</strong> Cloudflare edge caching and database pooling that handles 10,000+ concurrent shoppers.</div>
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
          <h2 className="fs-section-title">Comprehensive E-Commerce Capabilities</h2>
          <p className="fs-section-subtitle">
            Every feature is engineered from the ground up for speed, maximum conversion rate, and resilient transaction processing.
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
                    <span>Production-hardened implementation with automated regression testing and PCI-DSS compliance.</span>
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
          <h2 className="fs-section-title">Measurable Outcomes for Modern E-Commerce</h2>
          <p className="fs-section-subtitle">
            We measure our engineering success not just in clean code, but in higher conversion rates, lower bounce rates, and increased average order value.
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
              Expected Performance &amp; Revenue Metrics
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
              <h2>A Battle-Tested Launch Protocol</h2>
            </div>
            <div className="fs-process-header-right">
              <p>
                From discovery and schema definition to payment integration and load testing, we deliver your online store with zero operational disruption.
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
          <h2 className="fs-section-title">Engineered for High-Growth Verticals</h2>
          <p className="fs-section-subtitle">
            From high-volume fashion apparel to gated B2B industrial distribution, we build e-commerce systems tailored to specific customer buying journeys.
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
              Common E-Commerce Deployments
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
                  Modern Tools &amp; Commerce Frameworks
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                  We do not lock you into a single proprietary framework. We build modular commerce components using industry-standard platforms, payment APIs, and server infrastructures to ensure your store is maintainable.
                </p>
                
                <div style={{ marginTop: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0b0f19' }}>
                    How We Choose Your E-Commerce Stack:
                  </h3>
                  <ul className="fs-bullet-list">
                    <li className="fs-bullet-item">
                      <CheckCircle />
                      <div><strong>Performance &amp; Scale:</strong> Instant catalog search, edge caching, and low-latency databases.</div>
                    </li>
                    <li className="fs-bullet-item">
                      <CheckCircle />
                      <div><strong>Payment Security:</strong> PCI-DSS compliance, tokenized checkout, and zero credit card leakage.</div>
                    </li>
                    <li className="fs-bullet-item">
                      <CheckCircle />
                      <div><strong>Zero Vendor Lock-in:</strong> 100% owned GitHub repositories, theme code, and open data standards.</div>
                    </li>
                    <li className="fs-bullet-item">
                      <CheckCircle />
                      <div><strong>Maintainability:</strong> Clean, typed code that your internal operations team can easily manage.</div>
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
                      <h3 className="sub">Commerce Frontend</h3>
                      <div className="skill">
                        <p className="skills">Next.js 15 Commerce</p>
                        <p className="skills">Shopify Liquid 2.0</p>
                        <p className="skills">React 19</p>
                        <p className="skills">Tailwind CSS</p>
                        <p className="skills">Framer Motion</p>
                        <p className="skills">HTML5 Semantic</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tech_stack">
                  <div className="framework">
                    <div className="bgcolorto">
                      <h3 className="sub">APIs &amp; Microservices</h3>
                      <div className="skill">
                        <p className="skills bg">Shopify Storefront API</p>
                        <p className="skills bg">MedusaJS</p>
                        <p className="skills bg">WooCommerce REST</p>
                        <p className="skills bg">Node.js / Express</p>
                        <p className="skills bg">GraphQL Endpoints</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tech_stack">
                  <div className="framework">
                    <div className="bg_cool_aqua">
                      <h3 className="sub">Payments &amp; Search</h3>
                      <div className="skill">
                        <p className="skills cool_aqua">Stripe Elements</p>
                        <p className="skills cool_aqua">Razorpay &amp; UPI</p>
                        <p className="skills cool_aqua">Shop Pay</p>
                        <p className="skills cool_aqua">Algolia Search</p>
                        <p className="skills cool_aqua">Redis (Cache)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tech_stack">
                  <div className="framework">
                    <div className="bg_lavender">
                      <h3 className="sub">Cloud &amp; Warehouse Sync</h3>
                      <div className="skill">
                        <p className="skills lavender">Cloudflare CDN</p>
                        <p className="skills lavender">AWS Lambda</p>
                        <p className="skills lavender">Klaviyo Webhooks</p>
                        <p className="skills lavender">ERP / SAP Connectors</p>
                        <p className="skills lavender">Shiprocket APIs</p>
                        <p className="skills lavender">Sentry Monitoring</p>
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
          <h2 className="fs-section-title">An Engineering-First Commerce Partner</h2>
          <p className="fs-section-subtitle">
            Zero shortcuts on payment security. Every checkout endpoint is audited for vulnerabilities and data integrity.
          </p>

          <div className="fs-grid-3">
            <div className="fs-card-premium">
              <h3>100% IP &amp; Theme Ownership</h3>
              <p>All source code, Liquid templates, and server configurations belong to you. Zero proprietary lock-in and zero revenue cuts.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Direct Developer Channels</h3>
              <p>Communicate directly with senior e-commerce software engineers. Avoid account manager telephone games for faster turnarounds.</p>
            </div>
            <div className="fs-card-premium">
              <h3>PCI-DSS Level 1 Hardened</h3>
              <p>End-to-end payment encryption, tokenized checkout, and strict security headers built into every payment transaction.</p>
            </div>
            <div className="fs-card-premium">
              <h3>30-Day Post-Launch Warranty</h3>
              <p>Immediate bug fixes, performance monitoring, and checkout stabilization included without extra charges after going live.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Transparent Sprint Pricing</h3>
              <p>No arbitrary pricing packages. You receive an itemized list of deliverables, project schedules, and integration roadmaps.</p>
            </div>
            <div className="fs-card-premium">
              <h3>Direct Warehouse &amp; ERP Sync</h3>
              <p>We do not dump orders in static spreadsheets. All inventory, fulfillment, and customer records sync directly with your primary systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQS (CHATBOT MATCHED - MAXIMUM 6 ITEMS) ── */}
      <section className="nd-faq">
        <div className="nd-faq-inner">
          <div className="nd-faq-tag">✦ FAQs ✦</div>
          <h2 className="nd-faq-title">E-Commerce Development FAQs</h2>
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

      {/* ── 12. HIGH-IMPACT BOTTOM CTA (CHATBOT MATCHED) ── */}
      <div className="fs-container" style={{ paddingBottom: '60px' }}>
        <section className="fs-cta-bottom">
          <div className="fs-cta-content-grid">
            <div className="fs-cta-text-left">
              <span className="fs-cta-badge">
                <span className="fs-cta-badge-dot"></span> Free E-Commerce Architecture Call
              </span>
              <h2>Let&apos;s Build Your Next High-Converting Store</h2>
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
