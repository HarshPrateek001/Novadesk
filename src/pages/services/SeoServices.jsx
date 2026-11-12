import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumb from '../../components/Breadcrumb';

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FFB2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ChevronDown = ({ isOpen }) => (
  <svg 
    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function SeoServices() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/seo-services" },
    { name: "Technical SEO Services", url: "/services/seo-services" }
  ];

  const faqs = [
    {
      q: "What makes NovaDesk's technical SEO approach different from marketing agencies?",
      a: "Most SEO agencies focus exclusively on shallow blog posts and generic backlink outreach. NovaDesk approaches SEO from an engineering perspective: we audit and rewrite code, eliminate render-blocking scripts, optimize server response times (TTFB), resolve hydration bottlenecks, fix crawl depth, and implement deep JSON-LD semantic entity graphs. We fix the foundational technical flaws search engines penalize."
    },
    {
      q: "How do Core Web Vitals (LCP, INP, CLS) impact organic search rankings?",
      a: "Google uses Core Web Vitals as official ranking and user experience signals. Sites with slow Largest Contentful Paint (> 2.5s) or erratic Cumulative Layout Shift (> 0.1) suffer reduced crawl budgets, lower conversion rates, and demoted rankings on competitive commercial queries. We engineer your frontend to consistently achieve green 90+ Lighthouse scores."
    },
    {
      q: "Can you optimize Single Page Applications (React/Vite/Next.js) for search engines?",
      a: "Yes. Client-side rendered SPAs frequently suffer from indexing delays and empty initial DOM snapshots. We implement Server-Side Rendering (SSR), Static Site Generation (SSG), dynamic pre-rendering, and intelligent metadata hydration to guarantee 100% crawl visibility for Googlebot, Bingbot, and AI search agents like Perplexity and ChatGPT Search."
    },
    {
      q: "What is Schema.org structured data and why does my business need it?",
      a: "Structured data translates your website's content into machine-readable JSON-LD entities that search engines immediately understand without ambiguity. It unlocks rich snippets (FAQ accordions, star reviews, software application cards, local business knowledge panels) which dramatically increases click-through rates (CTR) in search engine result pages."
    },
    {
      q: "How soon can we expect to see tangible organic traffic and ranking improvements?",
      a: "Technical fixes (eliminating crawl errors, fixing indexing issues, and repairing canonical loops) often yield measurable indexing improvements within 2 to 4 weeks. High-impact keyword rankings and compounding qualified lead flow typically build momentum over a 60 to 90 day window as Google re-crawls and re-evaluates page authority."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Technical SEO Services & Organic Search Architecture",
    "serviceType": "Technical SEO Audits, Core Web Vitals & Semantic Entity Optimization",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.novadesk.site/#organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site/"
    },
    "areaServed": ["India", "United States", "United Kingdom", "Worldwide"],
    "description": "Enterprise-grade technical SEO, Core Web Vitals optimization, programmatic SEO architecture, and semantic structured data implementation for compounding organic revenue."
  };

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

  return (
    <div className="nd-service-page">
      <SEO 
        title="Technical SEO Services & Organic Search Architecture | NovaDesk"
        description="Data-driven technical SEO, Core Web Vitals optimization, programmatic architecture, and semantic JSON-LD structured data that ranks your website on Google's first page."
        url="/services/seo-services"
        keywords="technical SEO agency, Core Web Vitals optimization services, programmatic SEO engineering, structured data JSON-LD schema audit, B2B organic search growth, ecommerce technical SEO, AI search optimization GEO, NovaDesk SEO"
        breadcrumbs={breadcrumbs}
        jsonLd={[serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="nd-service-hero">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="nd-service-pill">Engineering-First Search Optimization</span>
              <h1 className="nd-service-h1">
                Technical SEO & Organic Search Architecture That Drives <span className="nd-gradient-text">Qualified Pipeline</span>
              </h1>
              <p className="nd-service-lead">
                Stop wasting budget on vanity keywords and broken backlinks. NovaDesk engineers fast, accessible, technically flawless web architectures that rank at the top of Google, Bing, and AI search engines.
              </p>
              <div className="nd-service-cta-group">
                <Link to="/get-a-free-quote" className="nd-btn-primary">
                  Request Technical SEO Audit <ArrowRight />
                </Link>
                <a 
                  href="https://calendly.com/itsharshprateek/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nd-btn-outline"
                >
                  Book 15-Min Strategy Call
                </a>
              </div>
              <div className="nd-service-trust-bar">
                <span>Core Web Vitals Pass Guaranteed</span>
                <span>•</span>
                <span>Semantic JSON-LD Entity Graphs</span>
                <span>•</span>
                <span>0% Black-Hat / 100% White-Hat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Pain Points Section */}
      <section className="nd-service-pain-points">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Why Traffic Stalls</span>
            <h2>The Technical Flaws Crushing Your Organic Visibility</h2>
            <p>90% of websites fail to rank because of underlying code-level bottlenecks that marketing agencies miss.</p>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">01</div>
                <h3>Failing Core Web Vitals & Speed</h3>
                <p>Bloated JavaScript bundles, unoptimized media, and render-blocking fonts delay page load past 3 seconds, triggering immediate algorithmic ranking penalties from Google.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">02</div>
                <h3>Broken Indexing & SPA Crawl Traps</h3>
                <p>Client-side React applications without static hydration or pre-rendering leave search bots with empty HTML snapshots, resulting in zero indexed commercial pages.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nd-pain-card">
                <div className="nd-pain-num">03</div>
                <h3>Missing Semantic Entity Architecture</h3>
                <p>Without structured Schema.org JSON-LD and clean internal link graphs, search bots and AI assistants cannot determine your business entity, services, or pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technical Pillars */}
      <section className="nd-service-capabilities">
        <div className="container">
          <div className="nd-section-header">
            <span className="nd-section-tag">Engineering Playbook</span>
            <h2>Our Full-Stack Technical SEO Framework</h2>
            <p>Every optimization we perform is auditable, white-hat, and baked directly into your codebase.</p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">⚡</div>
                <h3>Core Web Vitals Optimization</h3>
                <p>We eliminate render-blocking CSS/JS, compress hero assets to modern WebP/AVIF, stabilize layout shifts (CLS), and achieve sub-1.8s First Contentful Paint.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> LCP sub-2.5s remediation</li>
                  <li><CheckCircle /> Interaction to Next Paint (INP) tuning</li>
                  <li><CheckCircle /> Cumulative Layout Shift (CLS) zeroing</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🕸️</div>
                <h3>Crawl Budget & Architecture</h3>
                <p>We streamline your sitemap structure, optimize robots.txt directives, eliminate redirect loops, and design flat click-depth hierarchies for maximum indexing efficiency.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Canonical tag audit & repair</li>
                  <li><CheckCircle /> Dynamic XML sitemap generation</li>
                  <li><CheckCircle /> Internal link equity distribution</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🧬</div>
                <h3>Semantic Schema & Knowledge Graphs</h3>
                <p>We implement deep Schema.org JSON-LD tags across your domain, connecting your organization, founders, locations, products, and reviews into Google's Knowledge Graph.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Organization & LocalBusiness schema</li>
                  <li><CheckCircle /> FAQPage & Product rich snippets</li>
                  <li><CheckCircle /> BreadcrumbList & Article schema</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🎯</div>
                <h3>High-Intent Commercial Keyword Mapping</h3>
                <p>We don't chase vanity volume. We research and map high-converting, bottom-of-funnel commercial keywords to dedicated high-performance landing pages that convert.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Competitor revenue gap analysis</li>
                  <li><CheckCircle /> Bottom-of-funnel transactional queries</li>
                  <li><CheckCircle /> Search intent cluster modeling</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🚀</div>
                <h3>Programmatic SEO Architecture</h3>
                <p>For SaaS and multi-location directories, we engineer scalable programmatic page templates powered by database feeds with unique value, preventing thin-content penalties.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Scalable dynamic page generation</li>
                  <li><CheckCircle /> Automated meta tag generation</li>
                  <li><CheckCircle /> Unique programmatic data points</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="nd-cap-card">
                <div className="nd-cap-icon">🤖</div>
                <h3>AI & LLM Search Optimization (GEO)</h3>
                <p>We prepare your digital presence for generative search engines like Perplexity, Gemini, and ChatGPT Search by building citation-dense, structured entity assets.</p>
                <ul className="nd-cap-list">
                  <li><CheckCircle /> Generative Engine Optimization (GEO)</li>
                  <li><CheckCircle /> Semantic markdown structuring</li>
                  <li><CheckCircle /> Verified external entity references</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Table / Comparison */}
      <section className="nd-service-tech-table">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Transparent Deliverables</span>
            <h2>What You Receive With NovaDesk Technical SEO</h2>
            <p>Actionable code commits, weekly performance reporting, and clear ranking trajectories.</p>
          </div>
          <div className="table-responsive mt-4">
            <table className="nd-compare-table">
              <thead>
                <tr>
                  <th>Audit Deliverable</th>
                  <th>Generic SEO Agency</th>
                  <th>NovaDesk Technical SEO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Code Implementation</strong></td>
                  <td>Hands you a 50-page PDF report to fix yourself</td>
                  <td><strong>We write, test, and merge the code fixes directly to your repo</strong></td>
                </tr>
                <tr>
                  <td><strong>Core Web Vitals</strong></td>
                  <td>Ignored or limited to basic caching plugins</td>
                  <td><strong>Engineered frontend optimization guarantee (90+ Lighthouse)</strong></td>
                </tr>
                <tr>
                  <td><strong>Structured Data</strong></td>
                  <td>Basic auto-generated WordPress plugin tags</td>
                  <td><strong>Custom JSON-LD Knowledge Graph with entity reconciliation</strong></td>
                </tr>
                <tr>
                  <td><strong>SPA / JavaScript SEO</strong></td>
                  <td>Unable to debug client-rendered React apps</td>
                  <td><strong>Full React/Next.js hydration, pre-rendering, and SSR setup</strong></td>
                </tr>
                <tr>
                  <td><strong>Reporting</strong></td>
                  <td>Automated vanity ranking reports with zero context</td>
                  <td><strong>Clear business impact: qualified leads, indexing health, revenue pipeline</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nd-service-faq">
        <div className="container">
          <div className="nd-section-header text-center">
            <span className="nd-section-tag">Common Inquiries</span>
            <h2>Frequently Asked Questions About Technical SEO</h2>
            <p>Everything you need to know about our technical SEO process and timelines.</p>
          </div>
          <div className="nd-faq-accordion mt-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`nd-faq-item ${openFaq === idx ? 'active' : ''}`}>
                <button 
                  className="nd-faq-question" 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown isOpen={openFaq === idx} />
                </button>
                {openFaq === idx && (
                  <div className="nd-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="nd-service-cta-banner">
        <div className="container">
          <div className="nd-cta-box text-center">
            <h2>Ready to Unlock Compounding Organic Traffic?</h2>
            <p>Let our technical engineers run a complimentary audit on your website and pinpoint the exact bottlenecks holding back your search rankings.</p>
            <div className="nd-service-cta-group justify-content-center">
              <Link to="/get-a-free-quote" className="nd-btn-primary">
                Claim Your Free SEO Audit <ArrowRight />
              </Link>
              <a 
                href="https://calendly.com/itsharshprateek/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nd-btn-outline"
              >
                Schedule Founder Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
