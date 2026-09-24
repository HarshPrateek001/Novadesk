import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ── Icons (AutoAE-style minimalist vector assets)
const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26L18 14L12 11L6 26Z" fill="#2E29FF" />
    <path d="M12 26L24 14L18 11L12 26Z" fill="#2E29FF" opacity="0.8" />
    <path d="M18 26L30 14L24 11L18 26Z" fill="#2E29FF" opacity="0.5" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
  </svg>
);

const CaretIcon = ({ isOpen }) => (
  <svg 
    width="10" 
    height="10" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`aae-caret ${isOpen ? 'open' : ''}`}
  >
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="7" x2="20" y2="7"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
    <line x1="4" y1="17" x2="20" y2="17"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ── Category mini icons
const AiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const WebIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const MobileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const SoftwareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);
const EcommerceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E29FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

// ── Service URL Map (Preserved 100% of all existing routes)
const serviceUrlMap = {
  'Chatbot Development': '/services/chatbot-development',
  'Gen AI Development': '/services/gen-ai-development',
  'AI Integrated Software': '/services/ai-integrated-software',
  'Conversational AI': '/services/conversational-ai',
  'Web Application Development': '/services/web-application-development',
  'Fullstack Development': '/services/full-stack-development',
  'PHP': '/services/php-development',
  'CMS': '/services/cms-development',
  'WordPress': '/services/wordpress-development',
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

const getServiceUrl = (label) => serviceUrlMap[label] || '/services';

// ── Service Categories Structure
const servicesNav = [
  {
    id: 'ai',
    label: 'AI & GenAI Solutions',
    badge: 'Popular',
    icon: <AiIcon />,
    title: 'Autonomous AI & Custom LLMs',
    desc: 'Automate business logic, build conversational agents, and deploy custom GenAI workflows.',
    links: [
      { label: 'Chatbot Development', desc: 'Autonomous 24/7 intelligent support bots.' },
      { label: 'Gen AI Development', desc: 'Custom fine-tuned generative AI pipelines.' },
      { label: 'AI Integrated Software', desc: 'Embed intelligent models into legacy apps.' },
      { label: 'Conversational AI', desc: 'Multi-lingual voice & text neural systems.' }
    ],
  },
  {
    id: 'web',
    label: 'Web & Fullstack Engineering',
    badge: 'Core',
    icon: <WebIcon />,
    title: 'High-Performance Web Platforms',
    desc: 'Scalable, modern web architectures built with React, Node, Next.js, and reliable backends.',
    links: [
      { label: 'Web Application Development', desc: 'High-speed cloud-native web apps.' },
      { label: 'Fullstack Development', desc: 'Complete frontend, backend, and DB builds.' },
      { label: 'PHP', desc: 'Modern and secure enterprise PHP backends.' },
      { label: 'CMS', desc: 'Custom headless and modular CMS setups.' },
      { label: 'WordPress', desc: 'Bespoke themes and enterprise plugins.' }
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile App Development',
    badge: 'iOS & Android',
    icon: <MobileIcon />,
    title: 'Fluid Mobile Experiences',
    desc: 'Native and cross-platform apps engineered for performance, 60fps animations, and retention.',
    links: [
      { label: 'Android', desc: 'Native Kotlin apps for Google Play ecosystem.' },
      { label: 'iOS', desc: 'Pixel-perfect Swift apps for iPhone & iPad.' },
      { label: 'Mobile App Devs', desc: 'Cross-platform native-feel experiences.' },
      { label: 'React Native', desc: 'Unified single-codebase iOS and Android apps.' }
    ],
  },
  {
    id: 'software',
    label: 'Custom Software & SaaS',
    badge: '21-Day MVP',
    icon: <SoftwareIcon />,
    title: 'Bespoke Software & Scalable SaaS',
    desc: 'From 21-day MVPs to enterprise-grade ERPs and CRM platforms built for multi-tenant scale.',
    links: [
      { label: 'MVP Dev', desc: '21-day launch framework for founders.' },
      { label: 'SaaS Dev', desc: 'Subscription and multi-tenant architectures.' },
      { label: 'ERP Software', desc: 'Operations and supply-chain resource systems.' },
      { label: 'CRMS System', desc: 'Sales pipeline and client management tools.' },
      { label: 'Enterprises Software', desc: 'Mission-critical distributed corporate tools.' },
      { label: 'Custom Software', desc: 'Tailor-made software for unique business ops.' }
    ],
  },
  {
    id: 'ecommerce',
    label: 'eCommerce Systems',
    badge: 'High Conversion',
    icon: <EcommerceIcon />,
    title: 'Conversion-Optimized Stores',
    desc: 'Secure storefronts, custom checkout flows, and headless commerce architectures.',
    links: [
      { label: 'eCommerce Design', desc: 'High-converting UI/UX shopping journeys.' },
      { label: 'eCommerce Implementation', desc: 'Payment gateways and inventory sync.' },
      { label: 'WooCommerce', desc: 'Custom scalable WordPress stores.' },
      { label: 'Shopify Dev', desc: 'Custom themes, apps, and Liquid scripts.' }
    ],
  },
];

// ── Industries List (Preserved all 12 industries)
const industries = [
  { name: 'Fintech', desc: 'Payment rails, lending engines, and PCI-compliant platforms.' },
  { name: 'Healthcare', desc: 'HIPAA-ready telemetry, patient portals, and telehealth.' },
  { name: 'Logistics', desc: 'Fleet routing, real-time dispatch, and warehouse ERPs.' },
  { name: 'Real Estate', desc: 'PropTech platforms, virtual tours, and tenant portals.' },
  { name: 'Staffing', desc: 'Workforce scheduling, ATS systems, and talent networks.' },
  { name: 'Education', desc: 'LMS platforms, virtual classrooms, and edtech tools.' },
  { name: 'Retail', desc: 'Omnichannel POS, loyalty platforms, and inventory sync.' },
  { name: 'Marketplace', desc: 'Multi-vendor platforms, escrow payments, and matching.' },
  { name: 'Sports', desc: 'Fan engagement platforms, live stats, and ticket portals.' },
  { name: 'Food & Restaurant', desc: 'Contactless ordering, POS integration, and delivery.' },
  { name: 'Travel & Hospitality', desc: 'Booking engines, itinerary sync, and hotel systems.' },
  { name: 'On-demand', desc: 'Instant service dispatch, geo-tracking, and live alerts.' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(null); // 'services' | 'industries' | null
  const [activeServiceTab, setActiveServiceTab] = useState('ai');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const timeoutRef = useRef(null);
  const location = useLocation();

  // ── Hardware-accelerated rAF scroll listener with deadband hysteresis
  // Prevents frame drops, layout thrashing, and jittering
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setIsScrolled((prev) => {
            // Hysteresis deadband: turns ON past 28px, turns OFF below 10px
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

  // Smooth hover intent handlers with safe buffer
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

  const closeDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(null);
  };

  const currentService = servicesNav.find(s => s.id === activeServiceTab) || servicesNav[0];

  return (
    <>
      <style>{`
        /* ── ZERO-REFLOW HARDWARE-ACCELERATED HEADER ── */
        
        /* 1. Top Announcement Strip in normal document flow (scrolls off smoothly like native web) */
        .aae-top-banner {
          width: 100%;
          background: #2E29FF;
          color: #FFFFFF;
          font-size: 12.5px;
          font-weight: 500;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1000;
          text-align: center;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
          box-sizing: border-box;
        }
        .aae-top-banner a {
          color: #FFFFFF;
          font-weight: 700;
          text-decoration: underline;
          margin-left: 6px;
          transition: opacity 0.2s;
        }
        .aae-top-banner a:hover {
          opacity: 0.9;
        }
        .aae-banner-close {
          position: absolute;
          right: 16px;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 50%;
          transition: color 0.2s;
        }
        .aae-banner-close:hover {
          color: #fff;
        }

        /* 2. Fixed-height Zero-Reflow Sticky Header Wrapper */
        .aae-header-wrapper {
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          pointer-events: none;
          contain: layout style;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
          background: transparent;
        }

        .aae-frame-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          box-sizing: border-box;
          pointer-events: none;
        }

        /* 3. Constant Height Floating Pill (No Height / Margin Reflows) */
        .aae-header-pill {
          pointer-events: auto;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1240px;
          height: 56px;
          padding: 0 24px;
          border-radius: 9999px;
          background: #FFFFFF;
          border: none;
          outline: none;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 20px -6px rgba(10, 10, 46, 0.07);
          transform: translate3d(0, 0, 0);
          will-change: max-width, background-color, box-shadow;
          transition: 
            max-width 0.28s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.25s ease,
            box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        /* Scrolled state: Contracts width into sleek capsule pill with gentle elevation */
        .aae-header-pill.is-scrolled {
          max-width: 1140px;
          background: #FFFFFF;
          border: none;
          outline: none;
          box-shadow: 0 4px 24px -6px rgba(10, 10, 46, 0.10), 0 1px 4px rgba(0, 0, 0, 0.04);
        }

        /* Left Brand Logo */
        .aae-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .aae-brand-title {
          font-size: 19px;
          font-weight: 900;
          color: #0A0A2E;
          letter-spacing: -0.6px;
          line-height: 1;
        }
        .aae-brand-title span {
          color: #2E29FF;
        }

        /* Center Nav Pill Cluster */
        .aae-nav-group {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .aae-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
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
        .aae-nav-btn:hover, .aae-nav-btn.active {
          color: #2E29FF;
          background: rgba(46, 41, 255, 0.06);
        }

        .aae-caret {
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          color: #6B7280;
        }
        .aae-caret.open {
          transform: rotate(180deg);
          color: #2E29FF;
        }

        /* Micro Beta Badge on AI Studio */
        .aae-badge-beta {
          font-size: 10px;
          font-weight: 600;
          font-style: italic;
          letter-spacing: -0.3px;
          color: #2E29FF;
          background: #EEF0FF;
          padding: 1px 6px;
          border-radius: 9999px;
          margin-left: 2px;
          border: 1px solid rgba(46, 41, 255, 0.15);
        }

        /* Sparkle rotate animation on hover */
        .aae-sparkle-btn:hover svg {
          transform: rotate(15deg) scale(1.08);
        }
        .aae-sparkle-btn svg {
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          color: #2E29FF;
        }

        /* Right CTA Button (High conversion pill) */
        .aae-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #2E29FF;
          color: #FFFFFF;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(46, 41, 255, 0.25);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }
        .aae-cta-btn:hover {
          background: #1c17d4;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(46, 41, 255, 0.35);
        }
        .aae-cta-btn:active {
          transform: translateY(0);
        }

        /* Hamburger button */
        .aae-hamburger-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: transparent;
          border: none;
          color: #0A0A2E;
          cursor: pointer;
          transition: background 0.18s;
        }
        .aae-hamburger-btn:hover {
          background: rgba(46, 41, 255, 0.08);
          color: #2E29FF;
        }

        /* ── Floating Mega Dropdowns (AutoAE Style Floating Cards) ── */
        .aae-dropdown-wrap {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          pointer-events: auto;
          animation: aaeDropdownFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes aaeDropdownFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-6px) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }

        .aae-dropdown-card {
          background: #FFFFFF;
          border-radius: 22px;
          border: 1px solid rgba(46, 41, 255, 0.1);
          box-shadow: 0 24px 60px -15px rgba(10, 10, 46, 0.14), 0 0 0 1px rgba(46, 41, 255, 0.04);
          overflow: hidden;
          position: relative;
        }

        /* Services Menu Layout */
        .aae-services-menu {
          width: 860px;
          display: flex;
        }

        .aae-svc-sidebar {
          width: 270px;
          background: #F8F9FD;
          border-right: 1px solid rgba(46, 41, 255, 0.08);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-shrink: 0;
        }

        .aae-svc-tab-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 12px;
          border: none;
          background: transparent;
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 600;
          color: #4B5563;
          cursor: pointer;
          transition: all 0.18s;
          text-align: left;
        }
        .aae-svc-tab-btn:hover {
          background: #EEF0FF;
          color: #2E29FF;
        }
        .aae-svc-tab-btn.active {
          background: #2E29FF;
          color: #FFFFFF;
        }
        .aae-svc-tab-btn.active svg {
          stroke: #FFFFFF;
        }

        .aae-svc-tab-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .aae-svc-content {
          flex: 1;
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .aae-svc-header {
          margin-bottom: 18px;
        }
        .aae-svc-title {
          font-size: 18px;
          font-weight: 800;
          color: #0A0A2E;
          margin-bottom: 4px;
        }
        .aae-svc-desc {
          font-size: 13px;
          color: #64748B;
          line-height: 1.45;
        }

        .aae-svc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .aae-svc-link {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 12px 14px;
          border-radius: 12px;
          background: #FAFAFC;
          border: 1px solid rgba(46, 41, 255, 0.05);
          text-decoration: none;
          transition: all 0.18s;
        }
        .aae-svc-link:hover {
          background: #EEF0FF;
          border-color: rgba(46, 41, 255, 0.2);
          transform: translateY(-1px);
        }
        .aae-svc-link-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A0A2E;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .aae-svc-link:hover .aae-svc-link-title {
          color: #2E29FF;
        }
        .aae-svc-link-desc {
          font-size: 11.5px;
          color: #64748B;
          line-height: 1.4;
        }

        /* Bottom highlight strip in services dropdown */
        .aae-svc-footer {
          margin-top: 20px;
          padding-top: 14px;
          border-top: 1px solid rgba(46, 41, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12.5px;
          color: #475569;
        }
        .aae-svc-footer a {
          color: #2E29FF;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .aae-svc-footer a:hover {
          text-decoration: underline;
        }

        /* Industries Menu Layout */
        .aae-industries-menu {
          width: 820px;
          padding: 26px 30px;
        }

        .aae-ind-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(46, 41, 255, 0.08);
        }
        .aae-ind-top h3 {
          font-size: 18px;
          font-weight: 800;
          color: #0A0A2E;
          margin-bottom: 4px;
        }
        .aae-ind-top p {
          font-size: 13px;
          color: #64748B;
        }

        .aae-ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .aae-ind-card {
          padding: 12px 14px;
          border-radius: 12px;
          background: #FAFAFC;
          border: 1px solid rgba(46, 41, 255, 0.05);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 3px;
          transition: all 0.18s;
        }
        .aae-ind-card:hover {
          background: #EEF0FF;
          border-color: rgba(46, 41, 255, 0.2);
          transform: translateY(-1px);
        }
        .aae-ind-name {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A0A2E;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .aae-ind-card:hover .aae-ind-name {
          color: #2E29FF;
        }
        .aae-ind-card-desc {
          font-size: 11.5px;
          color: #64748B;
          line-height: 1.4;
        }

        /* ── Mobile Navigation Drawer ── */
        .aae-mobile-drawer {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 46, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          justify-content: flex-end;
          pointer-events: auto;
        }

        .aae-drawer-panel {
          width: 100%;
          max-width: 380px;
          height: 100%;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
          animation: aaeSlideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes aaeSlideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .aae-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          border-bottom: 1px solid #F1F3F9;
        }

        .aae-drawer-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #F3F4F6;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #374151;
        }

        .aae-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 12px 16px 120px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .aae-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #111827;
          text-decoration: none;
          transition: background 0.18s;
        }
        .aae-drawer-link:hover {
          background: #F8F9FD;
          color: #2E29FF;
        }

        .aae-drawer-accordion-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #111827;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.18s;
        }
        .aae-drawer-accordion-btn:hover {
          background: #F8F9FD;
          color: #2E29FF;
        }

        .aae-drawer-sub-box {
          background: #F8F9FD;
          border-radius: 12px;
          padding: 8px 12px;
          margin-top: 4px;
          margin-bottom: 4px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .aae-drawer-sub-link {
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: #4B5563;
          text-decoration: none;
          transition: all 0.15s;
        }
        .aae-drawer-sub-link:hover {
          color: #2E29FF;
          background: #EEF0FF;
        }

        .aae-drawer-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px 24px;
          background: #FFFFFF;
          border-top: 1px solid #F1F3F9;
        }
        .aae-drawer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: #2E29FF;
          color: #FFFFFF;
          padding: 13px 20px;
          border-radius: 9999px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(46, 41, 255, 0.25);
        }

        /* ── Responsive Queries ── */
        @media (max-width: 1024px) {
          .aae-header-wrapper {
            height: 60px !important;
          }
          .aae-header-pill {
            height: 48px !important;
            padding: 0 14px !important;
            max-width: 100% !important;
          }
          .aae-header-pill.is-scrolled {
            max-width: 100% !important;
          }
          .aae-nav-group,
          .aae-cta-btn {
            display: none !important;
          }
          .aae-hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>

      {/* 1. Top Announcement Bar in normal document flow (scrolls off smoothly) */}
      {bannerVisible && (
        <div className="aae-top-banner">
          <span>
            ⚡ Launch production apps in 21 days with <strong>NovaDesk Sprint MVP</strong>
          </span>
          <Link to="/services/mvp-development">Explore Sprint →</Link>
          <button 
            className="aae-banner-close" 
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss announcement"
          >
            ✕
          </button>
        </div>
      )}

      {/* 2. Fixed-height Zero-Reflow Sticky Header Container */}
      <header className="aae-header-wrapper">
        <div className="aae-frame-container">
          <div className={`aae-header-pill ${isScrolled ? 'is-scrolled' : ''}`}>
            {/* 1. Left: Brand Logo */}
            <Link to="/" className="aae-brand" onClick={closeDropdown}>
              <LogoIcon />
              <div className="aae-brand-title">
                NOVA<span>DESK</span>
              </div>
            </Link>

            {/* 2. Center: Nav Links */}
            <nav className="aae-nav-group" aria-label="Primary Navigation">
              {/* Highlight Item: AI Studio with Sparkle & Beta tag */}
              <Link 
                to="/services/gen-ai-development" 
                className="aae-nav-btn aae-sparkle-btn"
                onMouseEnter={closeDropdown}
              >
                <SparklesIcon />
                <span>AI Studio</span>
                <span className="aae-badge-beta">beta</span>
              </Link>

              {/* Dropdown: Services */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`aae-nav-btn ${openMenu === 'services' ? 'active' : ''}`}
                  onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')}
                  aria-expanded={openMenu === 'services'}
                >
                  Services
                  <CaretIcon isOpen={openMenu === 'services'} />
                </button>

                {/* Floating Services Dropdown Card */}
                {openMenu === 'services' && (
                  <div className="aae-dropdown-wrap">
                    <div className="aae-dropdown-card aae-services-menu">
                      {/* Left Sidebar Category Tabs */}
                      <div className="aae-svc-sidebar">
                        {servicesNav.map((s) => (
                          <button
                            key={s.id}
                            className={`aae-svc-tab-btn ${activeServiceTab === s.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveServiceTab(s.id)}
                            onClick={() => setActiveServiceTab(s.id)}
                          >
                            <span className="aae-svc-tab-left">
                              {s.icon}
                              {s.label}
                            </span>
                            <ArrowRight />
                          </button>
                        ))}
                      </div>

                      {/* Right Sub-services Grid */}
                      <div className="aae-svc-content">
                        <div>
                          <div className="aae-svc-header">
                            <h4 className="aae-svc-title">{currentService.title}</h4>
                            <p className="aae-svc-desc">{currentService.desc}</p>
                          </div>

                          <div className="aae-svc-grid">
                            {currentService.links.map((link) => (
                              <Link
                                key={link.label}
                                to={getServiceUrl(link.label)}
                                className="aae-svc-link"
                                onClick={closeDropdown}
                              >
                                <span className="aae-svc-link-title">
                                  {link.label}
                                  <ArrowRight />
                                </span>
                                <span className="aae-svc-link-desc">{link.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Highlight Strip */}
                        <div className="aae-svc-footer">
                          <span>🚀 Need rapid MVP prototyping with human engineers?</span>
                          <Link to="/services/mvp-development" onClick={closeDropdown}>
                            Explore 21-Day Sprint MVP →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown: Industries */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`aae-nav-btn ${openMenu === 'industries' ? 'active' : ''}`}
                  onClick={() => setOpenMenu(openMenu === 'industries' ? null : 'industries')}
                  aria-expanded={openMenu === 'industries'}
                >
                  Industries
                  <CaretIcon isOpen={openMenu === 'industries'} />
                </button>

                {/* Floating Industries Dropdown Card */}
                {openMenu === 'industries' && (
                  <div className="aae-dropdown-wrap">
                    <div className="aae-dropdown-card aae-industries-menu">
                      <div className="aae-ind-top">
                        <div>
                          <h3>Software Tailored for Modern Industries</h3>
                          <p>Production systems engineered for domain compliance, scale, and high conversion.</p>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E29FF', background: '#EEF0FF', padding: '4px 10px', borderRadius: '20px' }}>
                          12 Domain Verticals
                        </span>
                      </div>

                      <div className="aae-ind-grid">
                        {industries.map((ind) => (
                          <Link
                            key={ind.name}
                            to={`/industries/${ind.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                            className="aae-ind-card"
                            onClick={closeDropdown}
                          >
                            <span className="aae-ind-name">
                              {ind.name}
                              <ArrowUpRight />
                            </span>
                            <span className="aae-ind-card-desc">{ind.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link to="/case-studies" className="aae-nav-btn" onMouseEnter={closeDropdown}>
                Case Studies
              </Link>
              <Link to="/about-us" className="aae-nav-btn" onMouseEnter={closeDropdown}>
                About Us
              </Link>
              <Link to="/blog" className="aae-nav-btn" onMouseEnter={closeDropdown}>
                Blogs
              </Link>
            </nav>

            {/* 3. Right: CTA Action Button */}
            <Link to="/contact-us" className="aae-cta-btn" onClick={closeDropdown}>
              Book a Call
              <ArrowUpRight />
            </Link>

            {/* Mobile Hamburger Trigger */}
            <button 
              className="aae-hamburger-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer (AutoAE Style Slide Sheet) ── */}
        {mobileOpen && (
          <div className="aae-mobile-drawer" onClick={() => setMobileOpen(false)}>
            <div className="aae-drawer-panel" onClick={(e) => e.stopPropagation()}>
              {/* Drawer Top */}
              <div className="aae-drawer-header">
                <Link to="/" className="aae-brand" onClick={() => setMobileOpen(false)}>
                  <LogoIcon />
                  <div className="aae-brand-title">
                    NOVA<span>DESK</span>
                  </div>
                </Link>
                <button 
                  className="aae-drawer-close-btn"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="aae-drawer-body">
                {/* AI Studio direct link */}
                <Link 
                  to="/services/gen-ai-development" 
                  className="aae-drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SparklesIcon />
                    AI Studio
                  </span>
                  <span className="aae-badge-beta">beta</span>
                </Link>

                {/* Services Accordion */}
                <div>
                  <button 
                    className="aae-drawer-accordion-btn"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span>Services</span>
                    <CaretIcon isOpen={mobileServicesOpen} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="aae-drawer-sub-box">
                      {servicesNav.map((s) => (
                        <div key={s.id} style={{ marginBottom: '8px' }}>
                          <span style={{ fontSize: '11px', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', padding: '4px 12px', display: 'block' }}>
                            {s.label}
                          </span>
                          {s.links.map((link) => (
                            <Link
                              key={link.label}
                              to={getServiceUrl(link.label)}
                              className="aae-drawer-sub-link"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Industries Accordion */}
                <div>
                  <button 
                    className="aae-drawer-accordion-btn"
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  >
                    <span>Industries</span>
                    <CaretIcon isOpen={mobileIndustriesOpen} />
                  </button>

                  {mobileIndustriesOpen && (
                    <div className="aae-drawer-sub-box">
                      {industries.map((ind) => (
                        <Link
                          key={ind.name}
                          to={`/industries/${ind.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                          className="aae-drawer-sub-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Links */}
                <Link 
                  to="/case-studies" 
                  className="aae-drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Case Studies</span>
                  <ArrowRight />
                </Link>

                <Link 
                  to="/about-us" 
                  className="aae-drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>About Us</span>
                  <ArrowRight />
                </Link>

                <Link 
                  to="/blog" 
                  className="aae-drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Blogs</span>
                  <ArrowRight />
                </Link>

                <Link 
                  to="/contact-us" 
                  className="aae-drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Contact Us</span>
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
                  Book a Call
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
