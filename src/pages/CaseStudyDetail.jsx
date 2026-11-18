import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { getCaseStudyBySlug, getRelatedCaseStudies } from '../data/caseStudiesData';
import './case-study-detail.css';

// SVG Icons (Strictly White & Royal Blue #2E29FF)
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

const ExternalLinkIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const caseItem = getCaseStudyBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseItem) {
    return <Navigate to="/case-studies" replace />;
  }

  const relatedCases = getRelatedCaseStudies(caseItem.slug, 3);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: caseItem.title, url: `/case-studies/${caseItem.slug}` }
  ];

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': caseItem.title,
    'description': caseItem.seo.description,
    'proficiencyLevel': 'Expert',
    'author': {
      '@type': 'Organization',
      'name': 'NovaDesk Labs',
      'url': 'https://www.novadesk.site'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'NovaDesk',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.novadesk.site/assets/img/icons/novadesk-logo.webp'
      }
    },
    'about': {
      '@type': 'Thing',
      'name': caseItem.industry
    }
  };

  return (
    <div className="csd-page">
      <SEO
        title={caseItem.seo.title}
        description={caseItem.seo.description}
        url={`/case-studies/${caseItem.slug}`}
        keywords={caseItem.seo.keywords}
        breadcrumbs={breadcrumbs}
        schema={caseStudySchema}
      />

      {/* Ambient Radial Lighting */}
      <div className="csd-ambient-glow" aria-hidden="true" />

      {/* ─── Hero Section ────────────────────────────────────────────── */}
      <section className="csd-hero">
        <div className="csd-container">
          <div className="csd-breadcrumb-wrap">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="csd-kicker-badge">
            <span className="csd-live-dot" />
            <span>{caseItem.categoryLabel} • {caseItem.industry}</span>
          </div>

          <h1 className="csd-title">
            {caseItem.title.split('—')[0]}
            {caseItem.title.includes('—') && (
              <>
                — <span className="csd-blue-gradient">{caseItem.title.split('—')[1]}</span>
              </>
            )}
          </h1>

          <p className="csd-lead">
            {caseItem.heroSummary}
          </p>

          {/* Project Meta Information Strip */}
          <div className="csd-meta-strip">
            <div className="csd-meta-item">
              <span className="csd-meta-label">Client Partner</span>
              <span className="csd-meta-value">{caseItem.client}</span>
            </div>
            <div className="csd-meta-item">
              <span className="csd-meta-label">Domain</span>
              <span className="csd-meta-value">{caseItem.categoryLabel}</span>
            </div>
            <div className="csd-meta-item">
              <span className="csd-meta-label">Geography</span>
              <span className="csd-meta-value">{caseItem.region}</span>
            </div>
            <div className="csd-meta-item">
              <span className="csd-meta-label">Delivery Timeline</span>
              <span className="csd-meta-value">{caseItem.timeline}</span>
            </div>
            <div className="csd-meta-item">
              <span className="csd-meta-label">Live Product</span>
              {caseItem.internalRoute ? (
                <Link to={caseItem.internalRoute} className="csd-meta-link">
                  <span>Open System</span>
                  <ExternalLinkIcon />
                </Link>
              ) : (
                <a
                  href={caseItem.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="csd-meta-link"
                >
                  <span>Visit Website</span>
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </div>

          {/* Hero Visual Browser Mockup */}
          <div className="csd-visual-container">
            <div className="csd-browser-mockup">
              <div className="csd-browser-header">
                <span className="csd-browser-dot" />
                <span className="csd-browser-dot" />
                <span className="csd-browser-dot" />
                <div className="csd-browser-url">
                  {caseItem.liveUrl.replace(/^https?:\/\//, '')}
                </div>
              </div>
              <img
                src={caseItem.image}
                alt={`${caseItem.title} - NovaDesk Production Delivery`}
                className="csd-browser-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Executive Overview & Client Profile ─────────────────────── */}
      <section className="csd-overview-section">
        <div className="csd-container">
          <div className="csd-overview-grid">
            <div className="csd-overview-card">
              <span className="csd-section-kicker">Strategic Context</span>
              <h3>Executive Overview</h3>
              <p>{caseItem.desc}</p>
              <p>{caseItem.heroSummary}</p>
            </div>

            <div className="csd-overview-card is-accent">
              <span className="csd-section-kicker">Operational Scope</span>
              <h3>The Client Profile</h3>
              <p>{caseItem.theClient}</p>
              <p>{caseItem.clientProfile}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Overcoming Challenges with Intelligent Solutions ───────── */}
      <section className="csd-cs-section">
        <div className="csd-container">
          <div className="csd-section-header">
            <span className="csd-section-kicker">Engineering Deep Dive</span>
            <h2 className="csd-section-title">Overcoming Challenges with Intelligent Solutions</h2>
            <p className="csd-section-desc">
              How NovaDesk diagnosed fundamental operational and technical constraints to engineer predictable, high-impact business outcomes.
            </p>
          </div>

          <div className="csd-cs-list">
            {caseItem.challengesSolutions.map((cs, idx) => (
              <div key={idx} className="csd-cs-row">
                <div className="csd-cs-box is-challenge">
                  <span className="csd-cs-badge badge-challenge">Challenge 0{idx + 1}</span>
                  <h4>{cs.challengeTitle}</h4>
                  <p>{cs.challengeDesc}</p>
                </div>

                <div className="csd-cs-box is-solution">
                  <span className="csd-cs-badge badge-solution">NovaDesk Solution</span>
                  <h4>{cs.solutionTitle}</h4>
                  <p>{cs.solutionDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Outcomes & Quantified Business Impact ───────────────────── */}
      <section className="csd-outcomes-section">
        <div className="csd-container">
          <div className="csd-section-header" style={{ textAlign: 'center', margin: '0 auto 40px auto' }}>
            <span className="csd-section-kicker">Verified Performance</span>
            <h2 className="csd-section-title">Measurable Outcomes & Business Impact</h2>
            <p className="csd-section-desc" style={{ margin: '0 auto' }}>
              We evaluate engineering excellence through production benchmarks and client revenue growth.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="csd-metrics-grid">
            {caseItem.metricsList.map((m, idx) => (
              <div key={idx} className="csd-metric-card">
                <div className="csd-metric-val">{m.val}</div>
                <div className="csd-metric-label">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Outcomes Checklist Card */}
          <div className="csd-outcomes-card">
            <h3>Key Production Deliverables & ROI Highlights</h3>
            <ul className="csd-outcomes-list">
              {caseItem.outcomes.map((out, idx) => (
                <li key={idx} className="csd-outcome-item">
                  <span className="csd-outcome-icon">
                    <CheckCircleIcon />
                  </span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Technical Architecture Blueprint ───────────────────────── */}
      <section className="csd-arch-section">
        <div className="csd-container">
          <div className="csd-section-header">
            <span className="csd-section-kicker">System Blueprint</span>
            <h2 className="csd-section-title">Technical Architecture & Stack</h2>
            <p className="csd-section-desc">
              Modular, type-safe, and scalable layers designed for zero vendor lock-in and minimal maintenance overhead.
            </p>
          </div>

          <div className="csd-arch-grid">
            {caseItem.architecture.map((arch, idx) => (
              <div key={idx} className="csd-arch-card">
                <span className="csd-arch-layer-name">{arch.layer}</span>
                <div className="csd-arch-content">
                  <h4>{arch.title}</h4>
                  <p>{arch.detail}</p>
                </div>
                <span className="csd-arch-tech">{arch.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Client Testimonial ─────────────────────────────────────── */}
      {caseItem.testimonial && (
        <section className="csd-testimonial-section">
          <div className="csd-container">
            <div className="csd-testimonial-card">
              <span className="csd-quote-mark" aria-hidden="true">&ldquo;</span>
              <p className="csd-testimonial-quote">
                "{caseItem.testimonial.quote}"
              </p>
              <div className="csd-testimonial-meta">
                <div className="csd-testimonial-avatar">
                  {caseItem.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="csd-testimonial-name">{caseItem.testimonial.author}</div>
                  <div className="csd-testimonial-role">
                    {caseItem.testimonial.role} • {caseItem.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Related Case Studies (Experion Style) ──────────────────── */}
      {relatedCases.length > 0 && (
        <section className="csd-related-section">
          <div className="csd-container">
            <div className="csd-section-header">
              <span className="csd-section-kicker">Explore More Deliveries</span>
              <h2 className="csd-section-title">Related Engineering Stories</h2>
              <p className="csd-section-desc">
                Browse our other client transformations across modern web platforms, e-commerce, and enterprise software.
              </p>
            </div>

            <div className="csd-related-grid">
              {relatedCases.map((rc) => (
                <Link
                  key={rc.slug}
                  to={`/case-studies/${rc.slug}`}
                  className="csd-related-card"
                >
                  <div className="csd-related-media">
                    <img
                      src={rc.image}
                      alt={rc.title}
                      className="csd-related-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="csd-related-body">
                    <div>
                      <span className="csd-related-kicker">{rc.categoryLabel}</span>
                      <h3 className="csd-related-title">{rc.title}</h3>
                    </div>
                    <span className="csd-related-link-text">
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Bottom High-Converting CTA Banner ──────────────────────── */}
      <section className="csd-container">
        <div className="csd-cta-box">
          <h2>Ready to Engineer Your Next Digital Milestone?</h2>
          <p>
            Share your technical requirements, business goals, and timeline. Our founding team will provide a transparent architecture scope and estimate within 24 hours.
          </p>
          <div className="csd-cta-btn-group">
            <Link to="/get-a-free-quote" className="csd-btn-white">
              <span>Get a Detailed Scope Estimate</span>
              <ArrowRight size={17} />
            </Link>
            <a
              href="https://calendly.com/itsharshprateek/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="csd-btn-outline-white"
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

