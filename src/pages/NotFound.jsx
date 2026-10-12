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
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F8FAFC',
      fontFamily: "'Space Grotesk', sans-serif",
      paddingTop: '150px',
      paddingBottom: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }}>
      <SEO 
        title="404: Page Not Found | NovaDesk"
        description="The page you requested could not be found. Explore NovaDesk's custom software development, AI solutions, and engineering services."
        url="/404"
        noindex={true}
      />

      <style>{`
        .nd-404-container {
          width: 100%;
          max-width: 1040px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }
        .nd-404-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 6px 16px;
          border-radius: 30px;
          background: #FEE2E2;
          color: #DC2626;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin: 0 auto 16px auto;
          border: 1px solid rgba(220, 38, 38, 0.2);
        }
        .nd-404-number {
          font-size: clamp(80px, 14vw, 150px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -4px;
          margin: 0 auto 12px auto;
          text-align: center;
          background: linear-gradient(135deg, #0052FF 0%, #2E29FF 50%, #7928CA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nd-404-title {
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 800;
          color: #0F172A;
          margin: 0 auto 18px auto;
          letter-spacing: -0.5px;
          text-align: center;
        }
        .nd-404-desc {
          font-size: 17px;
          line-height: 1.65;
          color: #64748B;
          max-width: 520px;
          margin: 0 auto 44px auto;
          text-align: center !important;
          text-wrap: balance;
          display: block;
        }
        .nd-404-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 72px;
          width: 100%;
        }
        .nd-404-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #0052FF;
          color: #FFFFFF !important;
          padding: 0 28px;
          height: 48px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(0, 82, 255, 0.25);
          transition: all 0.2s ease;
          border: 1.5px solid transparent;
          box-sizing: border-box;
        }
        .nd-404-btn-primary:hover {
          background: #0040C7;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 82, 255, 0.35);
        }
        .nd-404-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #FFFFFF;
          color: #0F172A !important;
          padding: 0 28px;
          height: 48px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border: 1.5px solid #CBD5E1;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
          box-sizing: border-box;
        }
        .nd-404-btn-secondary:hover {
          border-color: #0052FF;
          color: #0052FF !important;
          background: #F8FAFC;
          transform: translateY(-2px);
        }
        .nd-404-grid-heading {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 24px;
          text-align: center;
          width: 100%;
        }
        .nd-404-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          text-align: center;
          max-width: 980px;
          margin: 0 auto;
          width: 100%;
        }
        .nd-404-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 20px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          box-sizing: border-box;
        }
        .nd-404-card:hover {
          border-color: #0052FF;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 82, 255, 0.08);
        }
        .nd-404-card-top {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 12px;
          width: 100%;
        }
        .nd-404-card-badge {
          font-size: 11px;
          font-weight: 700;
          color: #0052FF;
          background: #EEF2FF;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .nd-404-card-arrow {
          color: #94A3B8;
          display: inline-flex;
          align-items: center;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .nd-404-card:hover .nd-404-card-arrow {
          color: #0052FF;
          transform: translateX(3px);
        }
        .nd-404-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 8px 0;
          line-height: 1.35;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
        }
        .nd-404-card-desc {
          font-size: 13.5px;
          color: #64748B;
          margin: 0 auto;
          line-height: 1.5;
          text-align: center;
          width: 100%;
          max-width: 270px;
        }
        @media (max-width: 900px) {
          .nd-404-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .nd-404-grid {
            grid-template-columns: 1fr;
          }
          .nd-404-actions {
            flex-direction: column;
            width: 100%;
          }
          .nd-404-btn-primary, .nd-404-btn-secondary {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
          }
        }
      `}</style>

      <div className="nd-404-container">
        <span className="nd-404-badge">
          Error 404 • Resource Not Found
        </span>
        <h1 className="nd-404-number">
          404
        </h1>
        <h2 className="nd-404-title">
          This Page Could Not Be Found
        </h2>
        <p className="nd-404-desc" style={{ textAlign: 'center', margin: '0 auto 44px auto' }}>
          The page you're looking for doesn't exist or has been moved.<br />
          Explore our services below or return to our homepage.
        </p>

        <div className="nd-404-actions">
          <Link to="/" className="nd-404-btn-primary">
            <HomeIcon /> Return to Homepage
          </Link>
          <Link to="/get-a-free-quote" className="nd-404-btn-secondary">
            Request a Quote <ArrowRight />
          </Link>
        </div>

        {/* Quick Hub Navigation Cards */}
        <div style={{ width: '100%' }}>
          <div className="nd-404-grid-heading">
            Popular Destinations
          </div>
          <div className="nd-404-grid">
            {hubs.map((hub, i) => (
              <Link 
                key={i} 
                to={hub.link} 
                className="nd-404-card"
              >
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div className="nd-404-card-top">
                    <span className="nd-404-card-badge">
                      {hub.badge}
                    </span>
                    <span className="nd-404-card-arrow">
                      <ArrowRight />
                    </span>
                  </div>
                  <h3 className="nd-404-card-title">
                    {hub.title}
                  </h3>
                  <p className="nd-404-card-desc">
                    {hub.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
