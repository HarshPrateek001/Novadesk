import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hubs = [
    {
      title: "Web & Full-Stack Development",
      desc: "Custom high-performance Next.js and React web applications.",
      link: "/services/web-development",
      badge: "Core Service"
    },
    {
      title: "AI & Intelligent Automation",
      desc: "Enterprise RAG pipelines, chatbots, and generative workflows.",
      link: "/services/ai-development",
      badge: "AI Engineering"
    },
    {
      title: "E-Commerce Solutions",
      desc: "High-converting Shopify, Headless & D2C online storefronts.",
      link: "/services/ecommerce-development",
      badge: "Revenue Systems"
    },
    {
      title: "Client Case Studies",
      desc: "Real-world engineering deliveries and verified client ROI.",
      link: "/case-studies",
      badge: "Our Work"
    },
    {
      title: "Engineering Blog",
      desc: "Deep-dives on web performance, software architecture & SEO.",
      link: "/blog",
      badge: "Insights"
    },
    {
      title: "Contact & Free Quote",
      desc: "Get a scope and milestone estimate for your next project.",
      link: "/get-a-free-quote",
      badge: "Get in Touch"
    }
  ];

  return (
    <div className="nd-service-page" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <SEO 
        title="404: Page Not Found | NovaDesk"
        description="The page you requested could not be found. Explore NovaDesk's custom software development, AI solutions, and engineering services."
        url="/404"
        noindex={true}
      />

      <section className="nd-service-hero" style={{ padding: '80px 0 60px' }}>
        <div className="container text-center">
          <span 
            className="nd-service-pill" 
            style={{ 
              borderColor: 'rgba(239, 68, 68, 0.4)', 
              color: '#F87171', 
              background: 'rgba(239, 68, 68, 0.1)',
              marginBottom: '20px',
              display: 'inline-block'
            }}
          >
            Error 404 • Resource Not Found
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(3.5rem, 8vw, 7rem)', 
              fontWeight: 800, 
              letterSpacing: '-0.04em',
              lineHeight: 1,
              margin: '0 0 20px',
              background: 'linear-gradient(135deg, #FFFFFF 30%, #2E29FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            404
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#FFFFFF', fontWeight: 600, marginBottom: '16px' }}>
            This Page Does Not Exist in Our Architecture
          </h2>
          <p style={{ maxWidth: '620px', margin: '0 auto 36px', color: '#A0AEC0', fontSize: '1.1rem', lineHeight: 1.6 }}>
            The URL you requested may have been relocated, updated, or does not exist. Use the shortcuts below to explore our services or head back to the homepage.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
            <Link to="/" className="nd-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <HomeIcon /> Return to Homepage
            </Link>
            <Link to="/get-a-free-quote" className="nd-btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Request a Project Quote <ArrowRight />
            </Link>
          </div>

          {/* Quick Hub Navigation Cards */}
          <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '20px', textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Popular Destinations
            </h3>
            <div className="row g-3">
              {hubs.map((hub, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <Link 
                    to={hub.link} 
                    className="nd-pain-card" 
                    style={{ 
                      display: 'block', 
                      textDecoration: 'none', 
                      height: '100%',
                      padding: '24px 20px',
                      transition: 'all 0.25s ease',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', color: '#00FFB2', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                        {hub.badge}
                      </span>
                      <ArrowRight />
                    </div>
                    <h4 style={{ fontSize: '16px', color: '#FFFFFF', margin: '0 0 6px', fontWeight: 600 }}>
                      {hub.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#A0AEC0', margin: 0, lineHeight: 1.5 }}>
                      {hub.desc}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
