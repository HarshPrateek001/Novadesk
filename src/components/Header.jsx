import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

// ── Icons
const LogoIcon = () => (
  <svg 
    width="34" 
    height="24" 
    viewBox="-14 -14 196 140" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <g transform="translate(-24 -44)">
      <path d="M24 44H54L134 156H104Z" fill="#8F8CFF" />
      <rect x="24" y="44" width="24" height="112" fill="#2E29FF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M110 44H130C168 44 192 68 192 100C192 132 168 156 130 156H110Z M134 68H136C154 68 168 82 168 100C168 118 154 132 136 132H134Z" fill="#2E29FF" />
      <path d="M151 86Q153.24 97.76 165 100Q153.24 102.24 151 114Q148.76 102.24 137 100Q148.76 97.76 151 86Z" fill="#8F8CFF" />
    </g>
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
    <div className="nd-hdr-mega-sidebar nd-mega-sidebar">
      <div className="nd-hdr-side-header nd-side-header">FEATURED CASE STUDY</div>
      
      {/* Featured Card */}
      <Link to="/case-studies" className="nd-hdr-side-featured-card nd-side-featured-card" onClick={onClose}>
        <span className="nd-hdr-side-tag nd-side-tag">AI &amp; AUTOMATION</span>
        <div className="nd-hdr-side-card-title nd-side-card-title">AI Customer Support Desk</div>
        <div className="nd-hdr-side-card-metric nd-side-card-metric">
          78%
          <span>L1 TICKET AUTO-RESOLUTION</span>
        </div>
        <p className="nd-hdr-side-card-desc nd-side-card-desc">
          Designed for telecom enterprise scale. Automates incoming L1 support workflows cleanly.
        </p>
        <div className="nd-hdr-side-card-link nd-side-card-link">
          Read Case Study →
        </div>
      </Link>

      {/* Solid Blue CTA Box */}
      <div className="nd-hdr-side-cta-box nd-side-cta-box">
        <div className="nd-hdr-side-cta-title nd-side-cta-title">Build and Scale with Experts</div>
        <div className="nd-hdr-side-cta-desc nd-side-cta-desc">
          Development, AI, cloud, and product engineering to power your next big idea.
        </div>
        <Link to="/contact-us" className="nd-hdr-side-cta-btn nd-side-cta-btn" onClick={onClose}>
          Schedule a Free Consultation ↗
        </Link>
      </div>

      {/* Stats Counter */}
      <div className="nd-hdr-side-stats nd-side-stats">
        <div className="nd-hdr-side-stat-item nd-side-stat-item">
          <span className="nd-hdr-side-stat-num nd-side-stat-num">500</span>
          <span className="nd-hdr-side-stat-lbl nd-side-stat-lbl">FORTUNE</span>
        </div>
        <div className="nd-hdr-side-stat-item nd-side-stat-item">
          <span className="nd-hdr-side-stat-num nd-side-stat-num">132</span>
          <span className="nd-hdr-side-stat-lbl nd-side-stat-lbl">STARTUPS</span>
        </div>
        <div className="nd-hdr-side-stat-item nd-side-stat-item">
          <span className="nd-hdr-side-stat-num nd-side-stat-num">04</span>
          <span className="nd-hdr-side-stat-lbl nd-side-stat-lbl">UNICORNS</span>
        </div>
      </div>
    </div>
  );
}

// ── Industries Data (12 Industries matching Image 1)
const industries = [
  { name: 'Fintech', desc: 'Fintech software for payments, lending, and financial services.' },
  { name: 'Healthcare', desc: 'Secure software for healthcare providers and health startups.' },
  { name: 'Logistics', desc: 'Systems to track shipments and manage delivery operations.' },
  { name: 'Real Estate', desc: 'Software for property management and real estate platforms.' },
  { name: 'Staffing', desc: 'Providing skilled personnel to meet workforce needs.' },
  { name: 'Education', desc: 'Software for schools, edtech startups, and learning platforms.' },
  { name: 'Retail', desc: 'Software that helps retailers sell online and manage operations.' },
  { name: 'Marketplace', desc: 'Marketplace platforms that connect buyers and sellers.' },
  { name: 'Sports', desc: 'Apps and platforms for sports teams and fan engagement.' },
  { name: 'Food & Restaurant', desc: 'Software for restaurant management, ordering, and delivery.' },
  { name: 'Travel & Hospitality', desc: 'Booking systems and software for travel businesses.' },
  { name: 'On-demand', desc: 'Services available instantly whenever you need them.' },
];

function IndustriesMenuWindow({ onClose }) {
  return (
    <div className="nd-mega-card nd-mega-industries">
      <div className="nd-mega-left">
        <div className="nd-hdr-mega-header nd-mega-header">
          <h3>Software Built for Growing Businesses</h3>
          <p>We build software that helps companies launch products and scale faster.</p>
        </div>
        <div className="nd-hdr-ind-grid nd-ind-grid">
          {industries.map((ind) => (
            <Link 
              key={ind.name} 
              to={`/industries/${ind.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`} 
              className="nd-hdr-ind-card nd-ind-card" 
              onClick={onClose}
            >
              <div className="nd-hdr-ind-card-title nd-ind-card-title">{ind.name}</div>
              <div className="nd-hdr-ind-card-desc nd-ind-card-desc">{ind.desc}</div>
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
      { label: 'Conversational AI', desc: 'Multi-lingual voice & text neural systems.' }
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
];

function ServicesMenuWindow({ onClose }) {
  const [activeService, setActiveService] = useState('ai');
  const current = servicesNav.find(s => s.id === activeService) || servicesNav[0];

  return (
    <div className="nd-mega-card nd-mega-services">
      {/* Left Navigation Category Tabs */}
      <nav className="nd-hdr-svc-sidebar nd-svc-sidebar" aria-label="Service categories">
        {servicesNav.map(s => (
          <button
            key={s.id}
            type="button"
            className={`nd-hdr-svc-tab-btn nd-svc-tab-btn ${activeService === s.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveService(s.id)}
            onClick={() => setActiveService(s.id)}
          >
            <span>{s.desktopLabel || s.label}</span>
            <ArrowRight />
          </button>
        ))}
      </nav>

      {/* Center Sub-services Content */}
      <div className="nd-hdr-svc-center nd-svc-center">
        <div className="nd-hdr-mega-header nd-mega-header">
          <h3>{current.title}</h3>
          <p>{current.desc}</p>
        </div>
        <div className="nd-hdr-svc-grid nd-svc-grid">
          {current.links.map(l => (
            <Link 
              key={l.label} 
              to={getServiceUrl(l.label)} 
              className="nd-hdr-svc-card nd-svc-card" 
              onClick={onClose}
            >
              <div className="nd-hdr-svc-card-title nd-svc-card-title">{l.label}</div>
              <div className="nd-hdr-svc-card-desc nd-svc-card-desc">{l.desc}</div>
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
    }, 240);
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
          z-index: 99999 !important;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          padding: 0 16px;
          box-sizing: border-box;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          border: none !important;
          border-bottom: none !important;
          background: transparent !important;
        }

        .nd-header-wrapper *,
        .nd-header-wrapper *::before,
        .nd-header-wrapper *::after {
          box-sizing: border-box;
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
          color: #2E29FF;
          letter-spacing: -0.5px;
          line-height: 1;
        }
        .nd-brand-title span {
          color: #0A0A3C;
          font-weight: 700;
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

        /* ── 3. MEGA DROPDOWN POPUP WINDOW (Strictly Isolated & Uniform Across All Pages) ── */
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
          top: 64px;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          z-index: 99999 !important;
          pointer-events: auto;
          display: flex;
          justify-content: center;
          animation: ndMenuFadeSlide 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-sizing: border-box;
        }

        /* Invisible hover bridge between floating pill (60px) and dropdown (64px) */
        .nd-mega-popup-wrap::before {
          content: '';
          position: absolute;
          top: -12px;
          left: 0;
          right: 0;
          height: 16px;
          background: transparent;
          pointer-events: auto;
        }

        /* The Mega Card: Royal Blue Border (#2E29FF), 24px Radius, White Background */
        .nd-header-wrapper .nd-mega-card {
          position: relative;
          background: #FFFFFF !important;
          border: 2px solid #2E29FF !important;
          border-radius: 24px !important;
          box-shadow: 0 24px 60px rgba(46, 41, 255, 0.14), 0 8px 24px rgba(0, 0, 0, 0.06) !important;
          display: flex !important;
          width: 100% !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
          color: #0A0A2E !important;
          text-align: left !important;
        }

        .nd-header-wrapper .nd-mega-card *,
        .nd-header-wrapper .nd-mega-card h3,
        .nd-header-wrapper .nd-mega-card p,
        .nd-header-wrapper .nd-mega-card a,
        .nd-header-wrapper .nd-mega-card button {
          box-sizing: border-box !important;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
        }

        /* Shared Header in Dropdowns */
        .nd-header-wrapper .nd-hdr-mega-header,
        .nd-header-wrapper .nd-mega-header {
          margin-bottom: 22px !important;
          text-align: left !important;
        }
        .nd-header-wrapper .nd-hdr-mega-header h3,
        .nd-header-wrapper .nd-mega-header h3 {
          font-size: 21px !important;
          font-weight: 800 !important;
          color: #0A0A2E !important;
          margin: 0 0 6px 0 !important;
          line-height: 1.25 !important;
          letter-spacing: -0.3px !important;
        }
        .nd-header-wrapper .nd-hdr-mega-header p,
        .nd-header-wrapper .nd-mega-header p {
          font-size: 13.5px !important;
          color: #64748B !important;
          margin: 0 !important;
          line-height: 1.5 !important;
        }

        /* ── INDUSTRIES DROPDOWN ── */
        .nd-header-wrapper .nd-mega-industries .nd-mega-left {
          flex: 1 !important;
          padding: 30px 34px !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-ind-grid,
        .nd-header-wrapper .nd-ind-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 12px !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-ind-card,
        .nd-header-wrapper .nd-ind-card {
          padding: 13px 15px !important;
          background: #FFFFFF !important;
          border: 1px solid #EDF2F7 !important;
          border-radius: 12px !important;
          text-decoration: none !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 3px !important;
          margin: 0 !important;
          box-shadow: none !important;
          transition: all 0.18s ease !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-ind-card:hover,
        .nd-header-wrapper .nd-ind-card:hover {
          background: #F8FAFC !important;
          border-color: rgba(46, 41, 255, 0.3) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(46, 41, 255, 0.06) !important;
        }
        .nd-header-wrapper .nd-hdr-ind-card-title,
        .nd-header-wrapper .nd-ind-card-title {
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #0A0A2E !important;
          line-height: 1.3 !important;
          margin: 0 !important;
          transition: color 0.15s !important;
        }
        .nd-header-wrapper .nd-hdr-ind-card:hover .nd-hdr-ind-card-title,
        .nd-header-wrapper .nd-ind-card:hover .nd-hdr-ind-card-title {
          color: #2E29FF !important;
        }
        .nd-header-wrapper .nd-hdr-ind-card-desc,
        .nd-header-wrapper .nd-ind-card-desc {
          font-size: 11.5px !important;
          color: #64748B !important;
          line-height: 1.45 !important;
          margin: 0 !important;
        }

        /* ── SERVICES DROPDOWN ── */
        .nd-header-wrapper .nd-mega-services {
          display: flex !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-svc-sidebar,
        .nd-header-wrapper .nd-svc-sidebar {
          width: 230px !important;
          background: #FFFFFF !important;
          padding: 24px 14px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 6px !important;
          border-right: 1px solid #EDF2F7 !important;
          flex-shrink: 0 !important;
          margin: 0 !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-svc-tab-btn,
        .nd-header-wrapper .nd-svc-tab-btn {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 8px !important;
          padding: 11px 14px !important;
          border: none !important;
          background: transparent !important;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: 13.5px !important;
          font-weight: 600 !important;
          color: #4B5563 !important;
          cursor: pointer !important;
          border-radius: 10px !important;
          text-align: left !important;
          transition: all 0.18s ease !important;
          width: 100% !important;
          box-sizing: border-box !important;
          margin: 0 !important;
          outline: none !important;
        }
        .nd-header-wrapper .nd-hdr-svc-tab-btn:hover,
        .nd-header-wrapper .nd-svc-tab-btn:hover {
          background: #F3F4F6 !important;
          color: #111827 !important;
        }
        .nd-header-wrapper .nd-hdr-svc-tab-btn.active,
        .nd-header-wrapper .nd-svc-tab-btn.active {
          background: #2E29FF !important;
          color: #FFFFFF !important;
          font-weight: 700 !important;
        }
        .nd-header-wrapper .nd-hdr-svc-tab-btn.active svg,
        .nd-header-wrapper .nd-svc-tab-btn.active svg {
          stroke: #FFFFFF !important;
        }

        .nd-header-wrapper .nd-hdr-svc-center,
        .nd-header-wrapper .nd-svc-center {
          flex: 1 !important;
          padding: 30px 34px !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-svc-grid,
        .nd-header-wrapper .nd-svc-grid {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 12px !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-svc-card,
        .nd-header-wrapper .nd-svc-card {
          padding: 15px 16px !important;
          background: #FFFFFF !important;
          border: 1px solid #EDF2F7 !important;
          border-radius: 12px !important;
          text-decoration: none !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 3px !important;
          margin: 0 !important;
          box-shadow: none !important;
          transition: all 0.18s ease !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-svc-card:hover,
        .nd-header-wrapper .nd-svc-card:hover {
          background: #F8FAFC !important;
          border-color: rgba(46, 41, 255, 0.3) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(46, 41, 255, 0.06) !important;
        }
        .nd-header-wrapper .nd-hdr-svc-card-title,
        .nd-header-wrapper .nd-svc-card-title {
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #0A0A2E !important;
          margin: 0 !important;
          line-height: 1.3 !important;
          transition: color 0.15s !important;
        }
        .nd-header-wrapper .nd-hdr-svc-card:hover .nd-hdr-svc-card-title,
        .nd-header-wrapper .nd-svc-card:hover .nd-svc-card-title {
          color: #2E29FF !important;
        }
        .nd-header-wrapper .nd-hdr-svc-card-desc,
        .nd-header-wrapper .nd-svc-card-desc {
          font-size: 11.5px !important;
          color: #64748B !important;
          line-height: 1.45 !important;
          margin: 0 !important;
        }

        /* ── RIGHT SIDEBAR: FEATURED CASE STUDY & STATS (Shared) ── */
        .nd-header-wrapper .nd-hdr-mega-sidebar,
        .nd-header-wrapper .nd-mega-sidebar {
          width: 275px !important;
          background: #FFFFFF !important;
          border-left: 1px solid #EDF2F7 !important;
          padding: 24px 20px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 15px !important;
          flex-shrink: 0 !important;
          margin: 0 !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-side-header,
        .nd-header-wrapper .nd-side-header {
          font-size: 10.5px !important;
          font-weight: 800 !important;
          color: #2E29FF !important;
          text-transform: uppercase !important;
          letter-spacing: 1.2px !important;
          margin: 0 !important;
        }
        .nd-header-wrapper .nd-hdr-side-featured-card,
        .nd-header-wrapper .nd-side-featured-card {
          background: #FFFFFF !important;
          border: 1px solid #EDF2F7 !important;
          border-radius: 14px !important;
          padding: 15px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 6px !important;
          transition: all 0.2s ease !important;
          text-decoration: none !important;
          margin: 0 !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-side-featured-card:hover,
        .nd-header-wrapper .nd-side-featured-card:hover {
          transform: translateY(-2px) !important;
          border-color: rgba(46, 41, 255, 0.3) !important;
          box-shadow: 0 8px 20px rgba(46, 41, 255, 0.08) !important;
        }
        .nd-header-wrapper .nd-hdr-side-tag,
        .nd-header-wrapper .nd-side-tag {
          font-size: 9.5px !important;
          font-weight: 800 !important;
          color: #2E29FF !important;
          background: #EEF0FF !important;
          padding: 3px 9px !important;
          border-radius: 9999px !important;
          align-self: flex-start !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          margin: 0 !important;
        }
        .nd-header-wrapper .nd-hdr-side-card-title,
        .nd-header-wrapper .nd-side-card-title {
          font-size: 14px !important;
          font-weight: 800 !important;
          color: #0A0A2E !important;
          line-height: 1.35 !important;
          margin: 2px 0 0 0 !important;
        }
        .nd-header-wrapper .nd-hdr-side-card-metric,
        .nd-header-wrapper .nd-side-card-metric {
          font-size: 24px !important;
          font-weight: 900 !important;
          color: #00B882 !important;
          margin: 2px 0 0 0 !important;
          line-height: 1 !important;
        }
        .nd-header-wrapper .nd-hdr-side-card-metric span,
        .nd-header-wrapper .nd-side-card-metric span {
          font-size: 9px !important;
          font-weight: 700 !important;
          color: #64748B !important;
          text-transform: uppercase !important;
          display: block !important;
          margin-top: 3px !important;
        }
        .nd-header-wrapper .nd-hdr-side-card-desc,
        .nd-header-wrapper .nd-side-card-desc {
          font-size: 11px !important;
          color: #64748B !important;
          line-height: 1.5 !important;
          margin: 4px 0 0 0 !important;
        }
        .nd-header-wrapper .nd-hdr-side-card-link,
        .nd-header-wrapper .nd-side-card-link {
          font-size: 11.5px !important;
          font-weight: 700 !important;
          color: #2E29FF !important;
          display: flex !important;
          align-items: center !important;
          gap: 4px !important;
          margin-top: 4px !important;
          text-decoration: none !important;
        }
        .nd-header-wrapper .nd-hdr-side-cta-box,
        .nd-header-wrapper .nd-side-cta-box {
          background: #2E29FF !important;
          border-radius: 14px !important;
          padding: 16px 14px !important;
          color: #FFFFFF !important;
          margin: 0 !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-side-cta-title,
        .nd-header-wrapper .nd-side-cta-title {
          font-size: 13px !important;
          font-weight: 800 !important;
          color: #FFFFFF !important;
          margin: 0 0 5px 0 !important;
          line-height: 1.3 !important;
        }
        .nd-header-wrapper .nd-hdr-side-cta-desc,
        .nd-header-wrapper .nd-side-cta-desc {
          font-size: 10.5px !important;
          color: rgba(255, 255, 255, 0.85) !important;
          line-height: 1.45 !important;
          margin: 0 0 11px 0 !important;
        }
        .nd-header-wrapper .nd-hdr-side-cta-btn,
        .nd-header-wrapper .nd-side-cta-btn {
          display: block !important;
          background: #FFFFFF !important;
          color: #2E29FF !important;
          padding: 8px 12px !important;
          border-radius: 9999px !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          text-align: center !important;
          transition: all 0.18s ease !important;
          margin: 0 !important;
        }
        .nd-header-wrapper .nd-hdr-side-cta-btn:hover,
        .nd-header-wrapper .nd-side-cta-btn:hover {
          background: #EEF0FF !important;
        }
        .nd-header-wrapper .nd-hdr-side-stats,
        .nd-header-wrapper .nd-side-stats {
          display: flex !important;
          justify-content: space-between !important;
          padding: 0 2px !important;
          margin: 0 !important;
          box-sizing: border-box !important;
        }
        .nd-header-wrapper .nd-hdr-side-stat-item,
        .nd-header-wrapper .nd-side-stat-item {
          text-align: center !important;
        }
        .nd-header-wrapper .nd-hdr-side-stat-num,
        .nd-header-wrapper .nd-side-stat-num {
          display: block !important;
          font-size: 17px !important;
          font-weight: 800 !important;
          color: #2E29FF !important;
          line-height: 1.2 !important;
        }
        .nd-header-wrapper .nd-hdr-side-stat-lbl,
        .nd-header-wrapper .nd-side-stat-lbl {
          display: block !important;
          font-size: 8.5px !important;
          color: #64748B !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.3px !important;
          margin-top: 2px !important;
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
          .nd-header-wrapper {
            top: 0 !important;
            padding: 8px 16px !important;
            background: rgba(255, 255, 255, 0.94) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06) !important;
            pointer-events: auto !important;
          }
          .nd-frame-box {
            max-width: 100% !important;
          }
          .nd-header-pill {
            height: 48px !important;
            padding: 0 4px !important;
            border-radius: 0 !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
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
          gap: 12px;
        }

        /* 1. Highlight AI Studio Button (Matches Image 1) */
        .aae-drawer-ai-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: #EEF2FF;
          border: 1.5px solid #D9E2FF;
          border-radius: 16px;
          text-decoration: none;
          color: #2E29FF;
          transition: background 0.18s, transform 0.18s;
        }
        .aae-drawer-ai-card:hover {
          background: #E5EAFF;
        }
        .aae-drawer-ai-left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 700;
          color: #2E29FF;
        }
        .aae-badge-beta {
          font-size: 11px;
          font-weight: 700;
          font-style: italic;
          color: #2E29FF;
          background: #DBE3FE;
          padding: 2px 10px;
          border-radius: 9999px;
        }

        /* Section Accordion Trigger (Services / Industries) */
        .aae-drawer-section-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .aae-drawer-section-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
        }

        /* Outer Container Card */
        .aae-drawer-container-box {
          background: #F8FAFD;
          border: 1px solid #EEF2F7;
          border-radius: 16px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 6px;
        }

        /* Mobile service category groups */
        .aae-drawer-cat-group {
          background: #FFFFFF;
          border-radius: 12px;
          border: 1px solid #EEF0F6;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: border-color 0.18s;
        }
        .aae-drawer-cat-group.active {
          border-color: rgba(46, 41, 255, 0.2);
        }

        .aae-drawer-cat-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 14px;
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
        .aae-drawer-cat-btn.open {
          background: #FFFFFF;
          color: #2E29FF;
        }

        .aae-drawer-cat-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .aae-cat-badge {
          font-size: 10.5px;
          font-weight: 700;
          color: #2E29FF;
          background: #EEF0FF;
          padding: 2px 7px;
          border-radius: 9999px;
          white-space: nowrap;
        }

        .aae-drawer-cat-links {
          padding: 4px 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-top: 1px solid #F1F5F9;
          background: #FFFFFF;
        }

        .aae-drawer-sub-link {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px 4px;
          border-radius: 8px;
          text-decoration: none;
          border-bottom: 1px solid #F8FAFC;
          transition: background 0.15s;
        }
        .aae-drawer-sub-link:last-child {
          border-bottom: none;
        }
        .aae-drawer-sub-link:hover, .aae-drawer-sub-link:active {
          background: #F4F6FF;
          padding-left: 8px;
          padding-right: 8px;
        }
        .aae-drawer-sub-link-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #111827;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .aae-drawer-sub-link:hover .aae-drawer-sub-link-title {
          color: #2E29FF;
        }
        .aae-drawer-sub-link-desc {
          font-size: 12px;
          color: #64748B;
          line-height: 1.4;
        }

        /* Mobile Industries 2-column grid (Matches Image 2) */
        .aae-drawer-ind-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .aae-drawer-ind-chip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          background: #FFFFFF;
          border: 1px solid #EEF0F6;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 600;
          color: #1F2937;
          text-decoration: none;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
          transition: all 0.15s;
        }
        .aae-drawer-ind-chip:hover, .aae-drawer-ind-chip:active {
          background: #EEF0FF;
          color: #2E29FF;
          border-color: rgba(46, 41, 255, 0.2);
        }

        /* Direct Links (Case Studies, About Us - Matches Image 2) */
        .aae-drawer-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 6px;
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          text-decoration: none;
          transition: color 0.18s;
        }
        .aae-drawer-nav-item:hover, .aae-drawer-nav-item:active {
          color: #2E29FF;
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
              {/* Highlight Item: FORGE AI Showcase */}
              <Link 
                to="/forge-ai" 
                className="nd-nav-btn nd-sparkle-btn"
                onMouseEnter={closeDropdown}
              >
                <SparklesIcon />
                <span>FORGE AI</span>
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
                {/* 1. Highlight FORGE AI Showcase */}
                <Link 
                  to="/forge-ai" 
                  className="aae-drawer-ai-card"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="aae-drawer-ai-left">
                    <SparklesIcon />
                    <span>FORGE AI</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* 2. Services Accordion with Category Groups (Matches Image 1) */}
                <div>
                  <button 
                    type="button"
                    className="aae-drawer-section-btn"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span className="aae-drawer-section-title">Services</span>
                    <CaretIcon isOpen={mobileServicesOpen} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="aae-drawer-container-box">
                      {servicesNav.map((cat) => {
                        const isCatOpen = mobileActiveCategory === cat.id;
                        return (
                          <div key={cat.id} className={`aae-drawer-cat-group ${isCatOpen ? 'active' : ''}`}>
                            <button 
                              type="button"
                              className={`aae-drawer-cat-btn ${isCatOpen ? 'open' : ''}`}
                              onClick={() => setMobileActiveCategory(isCatOpen ? null : cat.id)}
                              aria-expanded={isCatOpen}
                            >
                              <div className="aae-drawer-cat-left">
                                {cat.icon}
                                <span>{cat.label}</span>
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
                    className="aae-drawer-section-btn"
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    aria-expanded={mobileIndustriesOpen}
                  >
                    <span className="aae-drawer-section-title">Industries</span>
                    <CaretIcon isOpen={mobileIndustriesOpen} />
                  </button>

                  {mobileIndustriesOpen && (
                    <div className="aae-drawer-container-box">
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

                {/* 4. Direct Links (Matches Image 2: Case Studies, About Us) */}
                <Link 
                  to="/case-studies" 
                  className="aae-drawer-nav-item"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Case Studies</span>
                  <ArrowRight />
                </Link>

                <Link 
                  to="/about-us" 
                  className="aae-drawer-nav-item"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>About Us</span>
                  <ArrowRight />
                </Link>

                <Link 
                  to="/blog" 
                  className="aae-drawer-nav-item"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Blogs</span>
                  <ArrowRight />
                </Link>
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
