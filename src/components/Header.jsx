import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

// ── Icons
const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 26L18 14L12 11L6 26Z" fill="#2E29FF" />
    <path d="M12 26L24 14L18 11L12 26Z" fill="#2E29FF" opacity="0.8" />
    <path d="M18 26L30 14L24 11L18 26Z" fill="#2E29FF" opacity="0.5" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
  </svg>
);

const CaretIcon = ({ isOpen }) => (
  <svg 
    width="11" 
    height="11" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={isOpen ? "#2E29FF" : "currentColor"}
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ 
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.2s ease',
      color: isOpen ? '#2E29FF' : 'inherit',
      flexShrink: 0
    }}
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="4" y1="7" x2="20" y2="7"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
    <line x1="4" y1="17" x2="20" y2="17"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ── Category Mini Icons for Mobile Drawer
const AiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const WebIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const MobileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const SoftwareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);
const EcommerceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

// ── Right Sidebar: Featured Case Study, Scale with Experts CTA & Stats (Shared across Services & Industries)
function FeaturedSidebar({ onClose }) {
  return (
    <div className="nd-mega-sidebar">
      <div className="nd-side-header">FEATURED CASE STUDY</div>
      
      {/* Featured Card */}
      <Link to="/case-studies" className="nd-side-featured-card" onClick={onClose}>
        <span className="nd-side-tag">AI &amp; AUTOMATION</span>
        <div className="nd-side-card-title">AI Customer Support Desk</div>
        <div className="nd-side-card-metric">
          78%
          <span>L1 TICKET AUTO-RESOLUTION</span>
        </div>
        <p className="nd-side-card-desc">
          Designed for telecom enterprise scale. Automates incoming L1 support workflows cleanly.
        </p>
        <div className="nd-side-card-link">
          Read Case Study →
        </div>
      </Link>

      {/* Solid Blue CTA Box */}
      <div className="nd-side-cta-box">
        <div className="nd-side-cta-title">Build and Scale with Experts</div>
        <div className="nd-side-cta-desc">
          Development, AI, cloud, and product engineering to power your next big idea.
        </div>
        <Link to="/contact-us" className="nd-side-cta-btn" onClick={onClose}>
          Schedule a Free Consultation ↗
        </Link>
      </div>

      {/* Stats Counter */}
      <div className="nd-side-stats">
        <div className="nd-side-stat-item">
          <span className="nd-side-stat-num">500</span>
          <span className="nd-side-stat-lbl">FORTUNE</span>
        </div>
        <div className="nd-side-stat-item">
          <span className="nd-side-stat-num">132</span>
          <span className="nd-side-stat-lbl">STARTUPS</span>
        </div>
        <div className="nd-side-stat-item">
          <span className="nd-side-stat-num">04</span>
          <span className="nd-side-stat-lbl">UNICORNS</span>
        </div>
      </div>
    </div>
  );
}

// ── Industries Data (12 Industries matching Image 1)
const industries = [
  { name: 'Fintech', desc: 'Fintech software for payments, lending, and financial services.' },
  { name: 'Staffing', desc: 'Providing skilled personnel to meet workforce needs.' },
  { name: 'Healthcare', desc: 'Secure software for healthcare providers and health startups.' },
  { name: 'Logistics', desc: 'Systems to track shipments and manage delivery operations.' },
  { name: 'On-demand', desc: 'Services available instantly whenever you need them.' },
  { name: 'Education', desc: 'Software for schools, edtech startups, and learning platforms.' },
  { name: 'Real Estate', desc: 'Software for property management and real estate platforms.' },
  { name: 'Retail', desc: 'Software that helps retailers sell online and manage operations.' },
  { name: 'Marketplace', desc: 'Marketplace platforms that connect buyers and sellers.' },
  { name: 'Sports', desc: 'Apps and platforms for sports teams and fan engagement.' },
  { name: 'Food & Restaurant', desc: 'Software for restaurant management, ordering, and delivery.' },
  { name: 'Travel & Hospitality', desc: 'Booking systems and software for travel businesses.' },
];

function IndustriesMenuWindow({ onClose }) {
  return (
    <div className="nd-mega-card nd-mega-industries">
      <div className="nd-mega-left">
        <div className="nd-mega-header">
          <h3>Software Built for Growing Businesses</h3>
          <p>We build software that helps companies launch products and scale faster.</p>
        </div>
        <div className="nd-ind-grid">
          {industries.map((ind) => (
            <Link 
              key={ind.name} 
              to={`/industries/${ind.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`} 
              className="nd-ind-card" 
              onClick={onClose}
            >
              <div className="nd-ind-card-title">{ind.name}</div>
              <div className="nd-ind-card-desc">{ind.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <FeaturedSidebar onClose={onClose} />
    </div>
  );
}

// ── Service URL Mapping
const serviceUrlMap = {
  'Chatbot Development': '/services/chatbot-development',
  'Gen AI Development': '/services/gen-ai-development',
  'AI Integrated Software': '/services/ai-integrated-software',
  'Conversational AI': '/services/conversational-ai',
  'Web Development': '/services/web-development',
  'Web Application Development': '/services/web-application-development',
  'Fullstack Development': '/services/full-stack-development',
  'PHP': '/services/php-development',
  'CMS': '/services/cms-development',
  'WordPress': '/services/wordpress-development',
  'eCommerce Development': '/services/ecommerce-development',
  'eCommerce Design': '/services/ecommerce-design',
  'eCommerce Implementation': '/services/ecommerce-implementation',
  'WooCommerce': '/services/woocommerce-development',
  'Shopify Dev': '/services/shopify-development',
  'Android': '/services/android-development',
  'iOS': '/services/ios-development',
  'Mobile App Devs': '/services/mobile-app-development',
  'React Native': '/services/react-native-development',
  'SaaS Dev': '/services/saas-development',
  'ERP Software': '/services/erp-software-development',
  'CRMS System': '/services/crm-systems-development',
  'Enterprises Software': '/services/enterprise-software-development',
  'Custom Software': '/services/custom-software-development',
  'MVP Dev': '/services/mvp-development'
};

const getServiceUrl = (label) => serviceUrlMap[label] || '/services/web-development';

// ── Services Categories Structure matching Image 2 & Mobile Drawer
const servicesNav = [
  {
    id: 'ai',
    desktopLabel: 'AI & ML Development',
    label: 'AI & GenAI Solutions',
    badge: 'Popular',
    icon: <AiIcon />,
    title: 'Smart Tech That Gets the Job Done',
    desc: 'Harness artificial intelligence and machine learning to automate workflows and gain actionable insights. Our AI transforms data into smart decisions.',
    links: [
      { label: 'Chatbot Development', desc: 'Autonomous 24/7 intelligent support bots.' },
      { label: 'Gen AI Development', desc: 'Custom fine-tuned generative AI pipelines.' },
      { label: 'AI Integrated Software', desc: 'Embed intelligent models into legacy apps.' },
      { label: 'Conversational AI', desc: 'Advanced voice and text conversational models.' }
    ],
  },
  {
    id: 'web',
    desktopLabel: 'Web & CMS Devlopment',
    label: 'Web & Fullstack Engineering',
    badge: 'Core',
    icon: <WebIcon />,
    title: 'Your Website, Your Way, Easy to Manage',
    desc: 'Build robust and scalable websites and CMS platforms that help you manage content effortlessly. Our development ensures a seamless digital presence.',
    links: [
      { label: 'Web Application Development', desc: 'Robust custom web apps tailored to you.' },
      { label: 'Fullstack Development', desc: 'End-to-end development from UI to database.' },
      { label: 'PHP', desc: 'Reliable and scalable backend architectures.' },
      { label: 'CMS', desc: 'Easy-to-use content management systems.' },
      { label: 'WordPress', desc: 'Custom themes and plugins for WordPress.' },
      { label: 'Web Development', desc: 'Modern Next.js and high-performance platforms.' }
    ],
  },
  {
    id: 'ecommerce',
    desktopLabel: 'Ecommerce Devlopment',
    label: 'eCommerce Systems',
    badge: 'High Conversion',
    icon: <EcommerceIcon />,
    title: 'Turn Visitors into Loyal Customers',
    desc: 'We build custom eCommerce websites that combine intuitive user experiences, secure checkout, and scalable architecture.',
    links: [
      { label: 'eCommerce Design', desc: 'Conversion-optimized storefront designs.' },
      { label: 'eCommerce Implementation', desc: 'Seamless integrations for retail ops.' },
      { label: 'WooCommerce', desc: 'Flexible eCommerce powered by WordPress.' },
      { label: 'Shopify Dev', desc: 'Custom Shopify themes and apps.' },
      { label: 'eCommerce Development', desc: 'Scalable headless digital storefronts.' }
    ],
  },
  {
    id: 'mobile',
    desktopLabel: 'Mobile App Development',
    label: 'Mobile App Development',
    badge: 'iOS & Android',
    icon: <MobileIcon />,
    title: 'Apps That Your Users Will Definitely Tap',
    desc: 'From concept to launch, we craft mobile apps that deliver seamless user experiences on both iOS and Android. Our apps engage, retain, and convert.',
    links: [
      { label: 'Android', desc: 'Native Android apps for the Google Play Store.' },
      { label: 'iOS', desc: 'Premium iOS apps for iPhone and iPad.' },
      { label: 'Mobile App Devs', desc: 'Cross-platform mobile solutions.' },
      { label: 'React Native', desc: 'One codebase for both iOS and Android.' }
    ],
  },
  {
    id: 'software',
    desktopLabel: 'Software Development',
    label: 'Custom Software & SaaS',
    badge: '21-Day MVP',
    icon: <SoftwareIcon />,
    title: 'Custom Software, Built for Your Business',
    desc: 'We build custom software — SaaS platforms, enterprise tools, MVPs, and ERP systems — engineered precisely to fit your business workflows.',
    links: [
      { label: 'MVP Dev', desc: 'Rapid prototyping for startup founders.' },
      { label: 'SaaS Dev', desc: 'Cloud-based software as a service products.' },
      { label: 'ERP Software', desc: 'Enterprise resource planning for operations.' },
      { label: 'CRMS System', desc: 'Customer relationship management tools.' },
      { label: 'Enterprises Software', desc: 'Large-scale corporate software solutions.' },
      { label: 'Custom Software', desc: 'Bespoke software tailored to your specific needs.' }
    ],
  },
];

function ServicesMenuWindow({ onClose }) {
  const [activeService, setActiveService] = useState('ai');
  const current = servicesNav.find(s => s.id === activeService) || servicesNav[0];

  return (
    <div className="nd-mega-card nd-mega-services">
      {/* Left Navigation Category Tabs */}
      <nav className="nd-svc-sidebar" aria-label="Service categories">
        {servicesNav.map(s => (
          <button
            key={s.id}
            type="button"
            className={`nd-svc-tab-btn ${activeService === s.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveService(s.id)}
            onClick={() => setActiveService(s.id)}
          >
            <span>{s.desktopLabel || s.label}</span>
            <ArrowRight />
          </button>
        ))}
      </nav>

      {/* Center Sub-services Content */}
      <div className="nd-svc-center">
        <div className="nd-mega-header">
          <h3>{current.title}</h3>
          <p>{current.desc}</p>
        </div>
        <div className="nd-svc-grid">
          {current.links.map(l => (
            <Link 
              key={l.label} 
              to={getServiceUrl(l.label)} 
              className="nd-svc-card" 
              onClick={onClose}
            >
              <div className="nd-svc-card-title">{l.label}</div>
              <div className="nd-svc-card-desc">{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <FeaturedSidebar onClose={onClose} />
    </div>
  );
}

// ── MAIN COMPONENT
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // 'services' | 'industries' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState('ai');

  const timeoutRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();

  // Scroll listener for subtle elevation
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setIsScrolled((prev) => {
            if (!prev && currentY > 28) return true;
            if (prev && currentY < 10) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // Close menus on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 180);
  };

  const toggleDropdown = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(prev => prev === menu ? null : menu);
  };

  const closeDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(null);
  };

  return (
    <>
      <style>{`
        /* ── 1. STICKY HEADER WRAPPER ── */
        .nd-header-wrapper {
          position: sticky;
          top: 14px;
          z-index: 1000;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          padding: 0 16px;
          box-sizing: border-box;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .nd-frame-box {
          position: relative;
          width: 100%;
          max-width: 1140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }

        /* ── 2. FLOATING PILL NAVBAR (Exact Layout from user's screenshot) ── */
        .nd-header-pill {
          pointer-events: auto;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 60px;
          padding: 0 20px 0 24px;
          border-radius: 9999px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 20px -2px rgba(10, 10, 46, 0.08), 0 1px 3px rgba(0,0,0,0.04);
          transition: all 0.25s ease;
          box-sizing: border-box;
        }
        .nd-header-pill.is-scrolled {
          box-shadow: 0 8px 30px rgba(10, 10, 46, 0.12), 0 1px 4px rgba(0,0,0,0.06);
        }

        /* Brand Logo on Left */
        .nd-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
          cursor: pointer;
        }
        .nd-brand-title {
          font-size: 20px;
          font-weight: 900;
          color: #0A0A2E;
          letter-spacing: -0.5px;
          line-height: 1;
        }
        .nd-brand-title span {
          color: #2E29FF;
        }

        /* Center Nav Group */
        .nd-nav-group {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .nd-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 9999px;
          font-size: 13.5px;
          font-weight: 600;
          color: #1F2937;
          background: transparent;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.18s ease;
          font-family: inherit;
        }
        .nd-nav-btn:hover {
          color: #2E29FF;
          background: rgba(46, 41, 255, 0.05);
        }
        .nd-nav-btn.active {
          color: #2E29FF;
          background: #EEF0FF;
        }

        /* Sparkle AI Studio Button */
        .nd-sparkle-btn {
          color: #1F2937;
        }
        .nd-sparkle-btn svg {
          color: #2E29FF;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nd-sparkle-btn:hover svg {
          transform: rotate(15deg) scale(1.1);
        }
        .nd-badge-beta {
          font-size: 10px;
          font-weight: 600;
          font-style: italic;
          letter-spacing: -0.2px;
          color: #2E29FF;
          background: #EEF0FF;
          padding: 1px 7px;
          border-radius: 9999px;
          border: 1px solid rgba(46, 41, 255, 0.15);
        }

        /* Right CTA: Book a Call */
        .nd-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #2E29FF;
          color: #FFFFFF !important;
          padding: 9px 20px;
          border-radius: 9999px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(46, 41, 255, 0.25);
          transition: all 0.2s ease;
          cursor: pointer;
          flex-shrink: 0;
        }
        .nd-cta-btn:hover {
          background: #1c17d4;
          box-shadow: 0 6px 18px rgba(46, 41, 255, 0.35);
          transform: translateY(-1px);
        }

        /* Hamburger button */
        .nd-hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #0A0A2E;
          padding: 6px;
          border-radius: 8px;
        }

        /* ── 3. MEGA DROPDOWN POPUP WINDOW (Matches Image 1 & 2 Exactly) ── */
        @keyframes ndMenuFadeSlide {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .nd-mega-popup-wrap {
          position: absolute;
          top: 68px;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          z-index: 1000;
          pointer-events: auto;
          display: flex;
          justify-content: center;
          animation: ndMenuFadeSlide 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-sizing: border-box;
        }

        /* The Card: 2px solid #2E29FF border matching reference screenshot! */
        .nd-mega-card {
          position: relative;
          background: #FFFFFF;
          border: 2px solid #2E29FF;
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(46, 41, 255, 0.14), 0 8px 24px rgba(0, 0, 0, 0.06);
          display: flex;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* Shared Header in Dropdowns */
        .nd-mega-header {
          margin-bottom: 22px;
        }
        .nd-mega-header h3 {
          font-size: 21px;
          font-weight: 800;
          color: #0A0A2E;
          margin: 0 0 6px 0;
        }
        .nd-mega-header p {
          font-size: 13.5px;
          color: #64748B;
          margin: 0;
          line-height: 1.5;
        }

        /* ── INDUSTRIES DROPDOWN (Image 1 Layout) ── */
        .nd-mega-industries .nd-mega-left {
          flex: 1;
          padding: 30px 34px;
        }
        .nd-ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .nd-ind-card {
          padding: 13px 15px;
          background: #FFFFFF;
          border: 1px solid #EDF2F7;
          border-radius: 12px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 3px;
          transition: all 0.18s ease;
        }
        .nd-ind-card:hover {
          background: #F8FAFC;
          border-color: rgba(46, 41, 255, 0.3);
          transform: translateY(-1px);
        }
        .nd-ind-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #0A0A2E;
        }
        .nd-ind-card:hover .nd-ind-card-title {
          color: #2E29FF;
        }
        .nd-ind-card-desc {
          font-size: 11.5px;
          color: #64748B;
          line-height: 1.45;
        }

        /* ── SERVICES DROPDOWN (Image 2 Layout: 3 Columns) ── */
        .nd-mega-services {
          display: flex;
        }
        .nd-svc-sidebar {
          width: 230px;
          background: #FFFFFF;
          padding: 24px 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-right: 1px solid #EDF2F7;
          flex-shrink: 0;
        }
        .nd-svc-tab-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 11px 14px;
          border: none;
          background: transparent;
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 600;
          color: #4B5563;
          cursor: pointer;
          border-radius: 10px;
          text-align: left;
          transition: all 0.18s ease;
          width: 100%;
        }
        .nd-svc-tab-btn:hover {
          background: #F3F4F6;
          color: #111827;
        }
        .nd-svc-tab-btn.active {
          background: #2E29FF;
          color: #FFFFFF;
          font-weight: 700;
        }
        .nd-svc-tab-btn.active svg {
          stroke: #FFFFFF;
        }

        .nd-svc-center {
          flex: 1;
          padding: 30px 34px;
        }
        .nd-svc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .nd-svc-card {
          padding: 15px 16px;
          background: #FFFFFF;
          border: 1px solid #EDF2F7;
          border-radius: 12px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 3px;
          transition: all 0.18s ease;
        }
        .nd-svc-card:hover {
          background: #F8FAFC;
          border-color: rgba(46, 41, 255, 0.3);
          transform: translateY(-1px);
        }
        .nd-svc-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #0A0A2E;
          transition: color 0.15s;
        }
        .nd-svc-card:hover .nd-svc-card-title {
          color: #2E29FF;
        }
        .nd-svc-card-desc {
          font-size: 11.5px;
          color: #64748B;
          line-height: 1.45;
        }

        /* ── RIGHT SIDEBAR: FEATURED CASE STUDY & STATS (Shared) ── */
        .nd-mega-sidebar {
          width: 275px;
          background: #FFFFFF;
          border-left: 1px solid #EDF2F7;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          flex-shrink: 0;
        }
        .nd-side-header {
          font-size: 10.5px;
          font-weight: 800;
          color: #2E29FF;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin: 0;
        }
        .nd-side-featured-card {
          background: #FFFFFF;
          border: 1px solid #EDF2F7;
          border-radius: 14px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .nd-side-featured-card:hover {
          transform: translateY(-2px);
          border-color: rgba(46, 41, 255, 0.3);
          box-shadow: 0 8px 20px rgba(46, 41, 255, 0.08);
        }
        .nd-side-tag {
          font-size: 9.5px;
          font-weight: 800;
          color: #2E29FF;
          background: #EEF0FF;
          padding: 3px 9px;
          border-radius: 9999px;
          align-self: flex-start;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .nd-side-card-title {
          font-size: 14px;
          font-weight: 800;
          color: #0A0A2E;
          line-height: 1.35;
          margin-top: 2px;
        }
        .nd-side-card-metric {
          font-size: 24px;
          font-weight: 900;
          color: #00B882;
          margin: 2px 0 0;
          line-height: 1;
        }
        .nd-side-card-metric span {
          font-size: 9px;
          font-weight: 700;
          color: #64748B;
          text-transform: uppercase;
          display: block;
          margin-top: 3px;
        }
        .nd-side-card-desc {
          font-size: 11px;
          color: #64748B;
          line-height: 1.5;
          margin: 4px 0 0 0;
        }
        .nd-side-card-link {
          font-size: 11.5px;
          font-weight: 700;
          color: #2E29FF;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }
        .nd-side-cta-box {
          background: #2E29FF;
          border-radius: 14px;
          padding: 16px 14px;
          color: #FFFFFF;
        }
        .nd-side-cta-title {
          font-size: 13px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 5px 0;
        }
        .nd-side-cta-desc {
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.45;
          margin: 0 0 11px 0;
        }
        .nd-side-cta-btn {
          display: block;
          background: #FFFFFF;
          color: #2E29FF !important;
          padding: 8px 12px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
          transition: all 0.18s ease;
        }
        .nd-side-cta-btn:hover {
          background: #EEF0FF;
        }
        .nd-side-stats {
          display: flex;
          justify-content: space-between;
          padding: 0 2px;
        }
        .nd-side-stat-item {
          text-align: center;
        }
        .nd-side-stat-num {
          display: block;
          font-size: 17px;
          font-weight: 800;
          color: #2E29FF;
        }
        .nd-side-stat-lbl {
          display: block;
          font-size: 8.5px;
          color: #64748B;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin-top: 2px;
        }

        /* ── 4. RESPONSIVE BREAKPOINTS (Tablets & Mobile) ── */
        @media (max-width: 1024px) {
          .nd-nav-group,
          .nd-cta-btn {
            display: none !important;
          }
          .nd-hamburger-btn {
            display: flex !important;
          }
          .nd-header-pill {
            height: 52px;
            padding: 0 16px;
          }
          .nd-mega-popup-wrap {
            display: none !important;
          }
        }

        /* ── Fullscreen Portal Mobile Navigation Drawer ── */
        .aae-mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          background: rgba(10, 10, 46, 0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 999999;
          display: flex;
          justify-content: flex-end;
          pointer-events: auto;
          animation: aaeFadeIn 0.25s ease;
        }

        @keyframes aaeFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .aae-drawer-panel {
          width: 100%;
          max-width: 420px;
          height: 100%;
          height: 100dvh;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          box-shadow: -12px 0 35px rgba(0, 0, 0, 0.18);
          animation: aaeSlideLeft 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
        }

        @media (max-width: 480px) {
          .aae-drawer-panel {
            max-width: 100% !important;
          }
        }

        @keyframes aaeSlideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .aae-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #F1F3F9;
          background: #FFFFFF;
          flex-shrink: 0;
        }

        .aae-drawer-close-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #F3F4F6;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #374151;
          transition: background 0.18s, color 0.18s;
        }
        .aae-drawer-close-btn:hover, .aae-drawer-close-btn:active {
          background: #EEF0FF;
          color: #2E29FF;
        }

        .aae-drawer-body {
          flex: 1;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          padding: 16px 18px 120px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .aae-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          text-decoration: none;
          transition: background 0.18s, color 0.18s;
        }
        .aae-drawer-link:hover, .aae-drawer-link:active {
          background: #F8F9FD;
          color: #2E29FF;
        }

        .aae-drawer-link-ai {
          background: #EEF0FF;
          color: #2E29FF;
          border: 1px solid rgba(46, 41, 255, 0.15);
          margin-bottom: 4px;
        }
        .aae-drawer-link-ai:hover {
          background: #e2e5ff;
        }

        .aae-drawer-accordion-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          color: #0A0A2E;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.18s, color 0.18s;
        }
        .aae-drawer-accordion-btn:hover, .aae-drawer-accordion-btn:active {
          background: #F8F9FD;
          color: #2E29FF;
        }

        .aae-drawer-sub-box {
          background: #F8F9FD;
          border-radius: 14px;
          padding: 10px;
          margin-top: 4px;
          margin-bottom: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        /* Mobile service category groups */
        .aae-drawer-cat-group {
          background: #FFFFFF;
          border-radius: 10px;
          border: 1px solid rgba(46, 41, 255, 0.08);
          overflow: hidden;
        }

        .aae-drawer-cat-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 12px;
          background: #FFFFFF;
          border: none;
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 700;
          color: #1F2937;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s, color 0.15s;
        }
        .aae-drawer-cat-btn:hover, .aae-drawer-cat-btn.open {
          background: #F5F7FF;
          color: #2E29FF;
        }

        .aae-drawer-cat-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .aae-cat-badge {
          font-size: 10px;
          font-weight: 700;
          color: #2E29FF;
          background: #EEF0FF;
          padding: 1px 6px;
          border-radius: 9999px;
        }

        .aae-drawer-cat-links {
          padding: 6px 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-top: 1px solid rgba(46, 41, 255, 0.06);
          background: #FAFAFC;
        }

        .aae-drawer-sub-link {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 8px 10px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .aae-drawer-sub-link:hover, .aae-drawer-sub-link:active {
          background: #EEF0FF;
        }
        .aae-drawer-sub-link-title {
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .aae-drawer-sub-link:hover .aae-drawer-sub-link-title {
          color: #2E29FF;
        }
        .aae-drawer-sub-link-desc {
          font-size: 11.5px;
          color: #64748B;
          line-height: 1.4;
        }

        /* Mobile Industries 2-column grid */
        .aae-drawer-ind-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .aae-drawer-ind-chip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          background: #FFFFFF;
          border: 1px solid rgba(46, 41, 255, 0.08);
          border-radius: 10px;
          font-size: 12.5px;
          font-weight: 600;
          color: #1F2937;
          text-decoration: none;
          transition: all 0.15s;
        }
        .aae-drawer-ind-chip:hover, .aae-drawer-ind-chip:active {
          background: #EEF0FF;
          color: #2E29FF;
          border-color: rgba(46, 41, 255, 0.2);
        }

        /* Pinned Drawer Footer */
        .aae-drawer-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 14px 20px calc(14px + env(safe-area-inset-bottom, 0px));
          background: #FFFFFF;
          border-top: 1px solid #F1F3F9;
          box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.04);
          z-index: 10;
        }
        .aae-drawer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: #2E29FF;
          color: #FFFFFF !important;
          padding: 13px 20px;
          border-radius: 9999px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(46, 41, 255, 0.25);
          transition: background 0.18s;
        }
        .aae-drawer-cta:hover, .aae-drawer-cta:active {
          background: #1c17d4;
        }
      `}</style>

      {/* ── HEADER CONTAINER ── */}
      <header className="nd-header-wrapper" ref={headerRef}>
        <div className="nd-frame-box" onMouseLeave={handleMouseLeave}>
          
          {/* FLOATING PILL BAR (Matches user's attached screenshot) */}
          <div className={`nd-header-pill ${isScrolled ? 'is-scrolled' : ''}`}>
            
            {/* 1. Left: Brand Logo */}
            <Link to="/" className="nd-brand" onClick={closeDropdown} aria-label="NovaDesk Homepage">
              <LogoIcon />
              <div className="nd-brand-title">
                NOVA<span>DESK</span>
              </div>
            </Link>

            {/* 2. Center: Nav Links */}
            <nav className="nd-nav-group" aria-label="Primary Navigation">
              {/* Highlight Item: AI Studio with Sparkle & Beta tag */}
              <Link 
                to="/services/gen-ai-development" 
                className="nd-nav-btn nd-sparkle-btn"
                onMouseEnter={closeDropdown}
              >
                <SparklesIcon />
                <span>AI Studio</span>
                <span className="nd-badge-beta">beta</span>
              </Link>

              {/* Dropdown: Services */}
              <div 
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  type="button"
                  className={`nd-nav-btn ${openMenu === 'services' ? 'active' : ''}`}
                  onClick={() => toggleDropdown('services')}
                  aria-expanded={openMenu === 'services'}
                >
                  <span>Services</span>
                  <CaretIcon isOpen={openMenu === 'services'} />
                </button>
              </div>

              {/* Dropdown: Industries */}
              <div 
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  type="button"
                  className={`nd-nav-btn ${openMenu === 'industries' ? 'active' : ''}`}
                  onClick={() => toggleDropdown('industries')}
                  aria-expanded={openMenu === 'industries'}
                >
                  <span>Industries</span>
                  <CaretIcon isOpen={openMenu === 'industries'} />
                </button>
              </div>

              {/* Direct Links */}
              <Link to="/case-studies" className="nd-nav-btn" onMouseEnter={closeDropdown}>
                Products
              </Link>
              <Link to="/about-us" className="nd-nav-btn" onMouseEnter={closeDropdown}>
                About Us
              </Link>
              <Link to="/blog" className="nd-nav-btn" onMouseEnter={closeDropdown}>
                Blogs
              </Link>
            </nav>

            {/* 3. Right: CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/contact-us" className="nd-cta-btn" onClick={closeDropdown}>
                Book a Call
                <ArrowUpRight />
              </Link>

              <button 
                type="button"
                className="nd-hamburger-btn"
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile navigation"
              >
                <MenuIcon />
              </button>
            </div>
          </div>

          {/* ── 3. MEGA DROPDOWN POPUP WINDOW (2px Blue Border + 3-Section Layout) ── */}
          {openMenu && (
            <div 
              className="nd-mega-popup-wrap"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              {openMenu === 'industries' && <IndustriesMenuWindow onClose={closeDropdown} />}
              {openMenu === 'services' && <ServicesMenuWindow onClose={closeDropdown} />}
            </div>
          )}
        </div>

        {/* ── 4. MOBILE NAVIGATION DRAWER (Matches User's Reference Images 1 & 2) ── */}
        {mobileOpen && typeof document !== 'undefined' && createPortal(
          <div 
            className="aae-mobile-drawer" 
            onClick={() => setMobileOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="aae-drawer-panel" onClick={(e) => e.stopPropagation()}>
              {/* Drawer Top Header */}
              <div className="aae-drawer-header">
                <Link to="/" className="nd-brand" onClick={() => setMobileOpen(false)}>
                  <LogoIcon />
                  <div className="nd-brand-title">
                    NOVA<span>DESK</span>
                  </div>
                </Link>
                <button 
                  className="aae-drawer-close-btn"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  type="button"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="aae-drawer-body">
                {/* 1. Highlight AI Studio (Matches Image 1) */}
                <Link 
                  to="/services/gen-ai-development" 
                  className="aae-drawer-link aae-drawer-link-ai"
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                    <SparklesIcon />
                    AI Studio
                  </span>
                  <span className="nd-badge-beta">beta</span>
                </Link>

                {/* 2. Services Accordion with Category Groups (Matches Image 1) */}
                <div>
                  <button 
                    type="button"
                    className="aae-drawer-accordion-btn"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span style={{ fontWeight: 700, fontSize: '16px', color: '#0A0A2E' }}>Services</span>
                    <CaretIcon isOpen={mobileServicesOpen} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="aae-drawer-sub-box">
                      {servicesNav.map((cat) => {
                        const isCatOpen = mobileActiveCategory === cat.id;
                        return (
                          <div key={cat.id} className="aae-drawer-cat-group">
                            <button 
                              type="button"
                              className={`aae-drawer-cat-btn ${isCatOpen ? 'open' : ''}`}
                              onClick={() => setMobileActiveCategory(isCatOpen ? null : cat.id)}
                              aria-expanded={isCatOpen}
                            >
                              <div className="aae-drawer-cat-left">
                                {cat.icon}
                                <span style={{ fontWeight: 700 }}>{cat.label}</span>
                                {cat.badge && <span className="aae-cat-badge">{cat.badge}</span>}
                              </div>
                              <CaretIcon isOpen={isCatOpen} />
                            </button>

                            {isCatOpen && (
                              <div className="aae-drawer-cat-links">
                                {cat.links.map((link) => (
                                  <Link
                                    key={link.label}
                                    to={getServiceUrl(link.label)}
                                    className="aae-drawer-sub-link"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <div className="aae-drawer-sub-link-title">
                                      <span>{link.label}</span>
                                      <ArrowRight />
                                    </div>
                                    <div className="aae-drawer-sub-link-desc">{link.desc}</div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Industries Accordion with 2-Column Grid (Matches Image 2) */}
                <div>
                  <button 
                    type="button"
                    className="aae-drawer-accordion-btn"
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    aria-expanded={mobileIndustriesOpen}
                  >
                    <span style={{ fontWeight: 700, fontSize: '16px', color: '#0A0A2E' }}>Industries</span>
                    <CaretIcon isOpen={mobileIndustriesOpen} />
                  </button>

                  {mobileIndustriesOpen && (
                    <div className="aae-drawer-sub-box">
                      <div className="aae-drawer-ind-grid">
                        {industries.map((ind) => (
                          <Link
                            key={ind.name}
                            to={`/industries/${ind.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                            className="aae-drawer-ind-chip"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span>{ind.name}</span>
                            <ArrowUpRight />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. Direct Links (Matches Image 2) */}
                <Link 
                  to="/case-studies" 
                  className="aae-drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={{ fontWeight: 700, color: '#0A0A2E' }}>Case Studies</span>
                  <ArrowRight />
                </Link>

                <Link 
                  to="/about-us" 
                  className="aae-drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={{ fontWeight: 700, color: '#0A0A2E' }}>About Us</span>
                  <ArrowRight />
                </Link>

                <Link 
                  to="/blog" 
                  className="aae-drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={{ fontWeight: 700, color: '#0A0A2E' }}>Blogs</span>
                  <ArrowRight />
                </Link>

                {/* 5. Regional Studios */}
                <div style={{ padding: '14px 14px 8px', borderTop: '1px solid #EDF2F7', marginTop: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#2E29FF', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '8px' }}>
                    Regional Studios
                  </span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Link 
                      to="/locations/kolkata" 
                      className="aae-drawer-ind-chip" 
                      style={{ fontSize: '12px', padding: '6px 12px' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      Kolkata ↗
                    </Link>
                    <Link 
                      to="/locations/durgapur" 
                      className="aae-drawer-ind-chip" 
                      style={{ fontSize: '12px', padding: '6px 12px' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      Durgapur ↗
                    </Link>
                    <Link 
                      to="/locations/deoghar" 
                      className="aae-drawer-ind-chip" 
                      style={{ fontSize: '12px', padding: '6px 12px' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      Deoghar HQ ↗
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pinned Bottom CTA */}
              <div className="aae-drawer-footer">
                <Link 
                  to="/contact-us" 
                  className="aae-drawer-cta"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Call ↗
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
      </header>
    </>
  );
}
