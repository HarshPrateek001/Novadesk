import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
);
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const LogoIcon = () => (
  <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26L18 14L12 11L6 26Z" fill="#2E29FF" />
    <path d="M12 26L24 14L18 11L12 26Z" fill="#2E29FF" opacity="0.8" />
    <path d="M18 26L30 14L24 11L18 26Z" fill="#2E29FF" opacity="0.5" />
  </svg>
);

// ── Achievements Sidebar
function AchievementsSidebar({ onClose }) {
  return (
    <div className="hdr-achievement-panel">
      <h4 className="hdr-ach-title">Our Achievements</h4>
      <div className="hdr-ach-logos">
        <div className="hdr-ach-logo-item">
          <span className="hdr-logo-google">Google</span>
          <span className="hdr-ach-label">Top 20 Indian Startup</span>
        </div>
        <div className="hdr-ach-logo-item">
          <span className="hdr-logo-linkedin">Linked<span>in</span></span>
          <span className="hdr-ach-label">Top 20 Indian Startup</span>
        </div>

        <div className="hdr-ach-logo-item">
          <span className="hdr-logo-years">14<sup>+</sup></span>
          <span className="hdr-ach-label">Years of Tech Experience</span>
        </div>
      </div>
      <div className="hdr-ach-cta-box">
        <h4 className="hdr-ach-cta-title">Build and Scale with Experts</h4>
        <p className="hdr-ach-cta-desc">Development, AI, cloud, and product engineering to power your next big idea.</p>
        <Link to="/contact-us" className="hdr-ach-btn" onClick={onClose}>Schedule a Free Consultation ↗</Link>
      </div>
      <div className="hdr-ach-stats">
        <div className="hdr-ach-stat">
          <span className="hdr-ach-stat-num">500</span>
          <span className="hdr-ach-stat-label">FORTUNE</span>
        </div>
        <div className="hdr-ach-stat">
          <span className="hdr-ach-stat-num">132</span>
          <span className="hdr-ach-stat-label">STARTUPS</span>
        </div>
        <div className="hdr-ach-stat">
          <span className="hdr-ach-stat-num">04</span>
          <span className="hdr-ach-stat-label">UNICORNS</span>
        </div>
      </div>
    </div>
  );
}

// ── Industries Menu
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

function IndustriesMenu({ onClose }) {
  return (
    <div className="hdr-mega hdr-mega-industries">
      <div className="hdr-mega-left">
        <div className="hdr-ind-header">
          <h3>Software Built for Growing Businesses</h3>
          <p>We build software that helps companies launch products and scale faster.</p>
        </div>
        <div className="hdr-ind-grid">
          {industries.map((ind) => (
            <Link key={ind.name} to={`/industries/${ind.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`} className="hdr-ind-card" onClick={onClose}>
              <span className="hdr-ind-name">{ind.name}</span>
              <span className="hdr-ind-desc">{ind.desc}</span>
            </Link>
          ))}
        </div>
      </div>
      <AchievementsSidebar onClose={onClose} />
    </div>
  );
}

const serviceUrlMap = {
  'Chatbot Development': '/services/chatbot-development',
  'Gen AI Development': '/services/gen-ai-development',
  'AI Integrated Software': '/services/ai-integrated-software',
  'Conversational AI': '/services/conversational-ai',
  'React JS Dev': '/services/react-js-development',
  'Web Application Development': '/services/web-application-development',
  'Fullstack Development': '/services/full-stack-development',
  'PHP': '/services/php-development',
  'Python': '/services/python-development',
  'Node JS': '/services/node-js-development',
  'CMS': '/services/cms-development',
  'WordPress': '/services/wordpress-development',
  'eCommerce Dev': '/services/ecommerce-development',
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

const getServiceUrl = (label) => {
  return serviceUrlMap[label] || '/services';
};

const servicesNav = [
  {
    id: 'ai', label: 'AI & ML Development',
    title: 'Smart Tech That Gets the Job Done',
    desc: 'Harness artificial intelligence and machine learning to automate workflows and gain actionable insights. Our AI transforms data into smart decisions.',
    links: [
      { label: 'Chatbot Development', desc: 'Intelligent bots to automate customer support.' },
      { label: 'Gen AI Development', desc: 'Custom generative AI solutions for your workflow.' },
      { label: 'AI Integrated Software', desc: 'Embed smart features into your existing apps.' },
      { label: 'Conversational AI', desc: 'Advanced voice and text conversational models.' }
    ],
  },
  {
    id: 'web', label: 'Web & CMS Devlopment',
    title: 'Your Website, Your Way, Easy to Manage',
    desc: 'Build robust and scalable websites and CMS platforms that help you manage content effortlessly. Our development ensures a seamless digital presence.',
    links: [
      { label: 'React JS Dev', desc: 'Fast, interactive frontends using React.' },
      { label: 'Web Application Development', desc: 'Robust custom web apps tailored to you.' },
      { label: 'Fullstack Development', desc: 'End-to-end development from UI to database.' },
      { label: 'PHP', desc: 'Reliable and scalable backend architectures.' },
      { label: 'Python', desc: 'Data-driven and high-performance backends.' },
      { label: 'Node JS', desc: 'High-speed, scalable network applications.' },
      { label: 'CMS', desc: 'Easy-to-use content management systems.' },
      { label: 'WordPress', desc: 'Custom themes and plugins for WordPress.' }
    ],
  },
  {
    id: 'ecommerce', label: 'Ecommerce Devlopment',
    title: 'Turn Visitors into Loyal Customers',
    desc: 'We build custom eCommerce websites that combine intuitive user experiences, secure checkout, and scalable architecture.',
    links: [
      { label: 'eCommerce Dev', desc: 'Full-scale online stores built for growth.' },
      { label: 'eCommerce Design', desc: 'Conversion-optimized storefront designs.' },
      { label: 'eCommerce Implementation', desc: 'Seamless integrations for retail ops.' },
      { label: 'WooCommerce', desc: 'Flexible eCommerce powered by WordPress.' },
      { label: 'Shopify Dev', desc: 'Custom Shopify themes and apps.' }
    ],
  },
  {
    id: 'mobile', label: 'Mobile App Development',
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
    id: 'software', label: 'Software Development',
    title: 'Custom Software, Built for Your Business',
    desc: 'We build custom software — SaaS platforms, enterprise tools, MVPs, and ERP systems — engineered precisely to fit your business workflows.',
    links: [
      { label: 'SaaS Dev', desc: 'Cloud-based software as a service products.' },
      { label: 'ERP Software', desc: 'Enterprise resource planning for operations.' },
      { label: 'CRMS System', desc: 'Customer relationship management tools.' },
      { label: 'Enterprises Software', desc: 'Large-scale corporate software solutions.' },
      { label: 'Custom Software', desc: 'Bespoke software tailored to your specific needs.' },
      { label: 'MVP Dev', desc: 'Rapid prototyping for startup founders.' }
    ],
  },
];

function ServicesMenu({ onClose }) {
  const [activeService, setActiveService] = useState('ai');
  const current = servicesNav.find(s => s.id === activeService) || servicesNav[0];

  return (
    <div className="hdr-mega hdr-mega-services">
      {/* Left nav */}
      <nav className="hdr-svc-nav">
        {servicesNav.map(s => (
          <button
            key={s.id}
            className={`hdr-svc-nav-btn ${activeService === s.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveService(s.id)}
            onClick={() => setActiveService(s.id)}
          >
            {s.label}
            <ArrowRight />
          </button>
        ))}
      </nav>
      {/* Center content */}
      <div className="hdr-svc-content">
        <h3 className="hdr-svc-title">{current.title}</h3>
        <p className="hdr-svc-desc">{current.desc}</p>
        <div className="hdr-svc-links">
          {current.links.map(l => (
            <Link key={l.label} to={getServiceUrl(l.label)} className="hdr-svc-link-card" onClick={onClose}>
              <span className="hdr-svc-link-title">{l.label}</span>
              <span className="hdr-svc-link-desc">{l.desc}</span>
            </Link>
          ))}
        </div>
      </div>
      <AchievementsSidebar onClose={onClose} />
    </div>
  );
}

// ── MAIN HEADER
export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const toggle = (name) => setOpenMenu(prev => prev === name ? null : name);
  const close = () => setOpenMenu(null);

  return (
    <>
      <style>{`
        /* ── DYNAMIC BACKGROUND GRID PATTERN FOR WHOLE PAGE ── */
        body {
          background-color: #fff;
          background-image: 
            linear-gradient(rgba(46,41,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46,41,255,0.03) 1px, transparent 1px);
          background-size: 26px 26px;
        }

        /* ── FLOATING HEADER CONTAINER ── */
        .hdr { 
          position: sticky; 
          top: 24px; 
          z-index: 1000; 
          background: transparent; 
          font-family: 'Space Grotesk', sans-serif; 
          pointer-events: none;
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 0 20px;
        }

        /* FLOATING TUBE BAR */
        .hdr-tube { 
          pointer-events: auto; 
          background: rgba(255, 255, 255, 0.85); 
          backdrop-filter: blur(20px); 
          -webkit-backdrop-filter: blur(20px); 
          border: 1px solid rgba(46, 41, 255, 0.15); 
          box-shadow: 0 16px 40px rgba(46, 41, 255, 0.08); 
          border-radius: 100px; 
          padding: 12px 32px; 
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          gap: 24px; 
          transition: all 0.3s ease; 
          width: 100%;
          max-width: 900px;
          height: 78px;
        }
        .hdr-tube:hover { 
          border-color: rgba(46, 41, 255, 0.35); 
          box-shadow: 0 20px 48px rgba(46, 41, 255, 0.14); 
        }

        /* LEFT SIDE MENU ITEMS */
        .hdr-left-group {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: flex-end;
        }

        /* RIGHT SIDE MENU ITEMS */
        .hdr-right-group {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: flex-start;
        }

        /* NAV BUTTONS */
        .hdr-nav-btn { 
          display: flex; 
          align-items: center; 
          gap: 4px; 
          padding: 10px 20px; 
          border: none; 
          background: transparent; 
          font-family: inherit; 
          font-size: 15.5px; 
          font-weight: 800; 
          color: #0A0A2E; 
          cursor: pointer; 
          border-radius: 24px; 
          transition: all 0.2s; 
          white-space: nowrap; 
        }
        .hdr-nav-btn:hover, .hdr-nav-btn.open { 
          background: rgba(46, 41, 255, 0.08); 
          color: #2E29FF; 
        }
        .hdr-nav-btn svg { transition: transform 0.2s; }
        .hdr-nav-btn.open svg { transform: rotate(180deg); }

        /* CENTER BRAND LOGO style as FUTURE DESKS */
        .hdr-brand-center {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          flex-shrink: 0;
          padding: 0 16px;
        }
        .hdr-logo-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
        }
        .hdr-logo-text .top {
          font-size: 11px;
          font-weight: 800;
          color: #2E29FF;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }
        .hdr-logo-text .bottom {
          font-size: 36px;
          font-weight: 900;
          color: #0A0A2E;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        /* MEGA WRAPPER */
        .hdr-mega-wrap { 
          position: absolute; 
          top: 78px; 
          left: 0; 
          right: 0; 
          z-index: 999; 
          pointer-events: auto; 
          padding: 16px 20px 0 20px;
        }
        .hdr-mega-backdrop { 
          position: fixed; 
          inset: 0; 
          background: rgba(10, 10, 46, 0.08); 
          backdrop-filter: blur(1px); 
          z-index: 998; 
          pointer-events: none; 
        }

        /* MEGA PANEL */
        .hdr-mega { 
          position: relative; 
          z-index: 999; 
          background: #fff; 
          border-top: 3px solid #2E29FF; 
          box-shadow: 0 20px 60px rgba(46, 41, 255, 0.12); 
          display: flex; 
          gap: 0; 
          max-width: 1200px; 
          margin: 0 auto; 
          border-radius: 16px; 
          overflow: hidden; 
        }

        /* ── INDUSTRIES MENU ── */
        .hdr-mega-industries .hdr-mega-left { flex: 1; padding: 32px 36px; }
        .hdr-ind-header { margin-bottom: 24px; }
        .hdr-ind-header h3 { font-size: 22px; font-weight: 800; color: #0A0A2E; margin-bottom: 6px; }
        .hdr-ind-header p { font-size: 14px; color: #6B7280; font-weight: 400; }
        .hdr-ind-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: rgba(46, 41, 255, 0.05); border: 1px solid rgba(46, 41, 255, 0.08); border-radius: 12px; overflow: hidden; }
        .hdr-ind-card { padding: 16px 18px; background: #fff; text-decoration: none; display: flex; flex-direction: column; gap: 4px; transition: background .15s; }
        .hdr-ind-card:hover { background: #EEF0FF; }
        .hdr-ind-name { font-size: 14px; font-weight: 700; color: #0A0A2E; }
        .hdr-ind-card:hover .hdr-ind-name { color: #2E29FF; }
        .hdr-ind-desc { font-size: 12px; color: #6B7280; line-height: 1.5; font-weight: 400; }

        /* ── SERVICES MENU ── */
        .hdr-mega-services { display: flex; }
        .hdr-svc-nav { width: 220px; background: #F8F9FF; padding: 16px 8px; display: flex; flex-direction: column; gap: 2px; border-right: 1px solid rgba(46, 41, 255, 0.08); flex-shrink: 0; }
        .hdr-svc-nav-btn { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 12px 14px; border: none; background: transparent; font-family: inherit; font-size: 13.5px; font-weight: 600; color: #4B5563; cursor: pointer; border-radius: 8px; text-align: left; transition: all .2s; }
        .hdr-svc-nav-btn:hover, .hdr-svc-nav-btn.active { background: #2E29FF; color: #fff; }
        .hdr-svc-nav-btn.active svg, .hdr-svc-nav-btn:hover svg { stroke: #fff; }
        .hdr-svc-content { flex: 1; padding: 28px 32px; }
        .hdr-svc-title { font-size: 20px; font-weight: 800; color: #0A0A2E; margin-bottom: 10px; }
        .hdr-svc-desc { font-size: 13.5px; color: #6B7280; line-height: 1.6; margin-bottom: 20px; max-width: 420px; font-weight: 400; }
        .hdr-svc-links { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: rgba(46, 41, 255, 0.08); border: 1px solid rgba(46, 41, 255, 0.08); border-radius: 12px; overflow: hidden; margin-top: 24px; }
        .hdr-svc-link-card { padding: 16px; background: #fff; text-decoration: none; display: flex; flex-direction: column; transition: background 0.15s; }
        .hdr-svc-link-card:last-child:nth-child(odd) { grid-column: 1 / -1; }
        .hdr-svc-link-card:hover { background: #F8F9FF; }
        .hdr-svc-link-title { font-size: 14px; font-weight: 700; color: #0A0A2E; margin-bottom: 4px; transition: color 0.15s; }
        .hdr-svc-link-card:hover .hdr-svc-link-title { color: #2E29FF; }
        .hdr-svc-link-desc { font-size: 12px; color: #6B7280; line-height: 1.4; font-weight: 400; }

        /* ── ACHIEVEMENTS SIDEBAR ── */
        .hdr-achievement-panel { width: 240px; background: #F8F9FF; border-left: 1px solid rgba(46, 41, 255, 0.08); padding: 24px 20px; display: flex; flex-direction: column; gap: 16px; flex-shrink: 0; }
        .hdr-ach-title { font-size: 14px; font-weight: 800; color: #0A0A2E; text-align: center; }
        .hdr-ach-logos { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .hdr-ach-logo-item { display: flex; flex-direction: column; align-items: center; gap: 4px; background: #fff; border: 1px solid rgba(46, 41, 255, 0.1); border-radius: 10px; padding: 10px 8px; }
        .hdr-logo-google { font-size: 16px; font-weight: 800; background: linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hdr-logo-linkedin { font-size: 14px; font-weight: 800; color: #0A66C2; }
        .hdr-logo-linkedin span { color: #fff; background: #0A66C2; padding: 0 2px; border-radius: 2px; }
        .hdr-logo-cmmi { font-size: 16px; font-weight: 900; color: #0A0A2E; letter-spacing: 1px; }
        .hdr-logo-years { font-size: 24px; font-weight: 900; color: #2E29FF; }
        .hdr-logo-years sup { font-size: 14px; }
        .hdr-ach-label { font-size: 9px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px; text-align: center; }
        .hdr-ach-cta-box { background: #2E29FF; border-radius: 12px; padding: 16px; }
        .hdr-ach-cta-title { font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 6px; }
        .hdr-ach-cta-desc { font-size: 11px; color: rgba(255,255,255,0.75); line-height: 1.5; margin-bottom: 12px; font-weight: 400; }
        .hdr-ach-btn { display: block; background: #fff; color: #2E29FF; padding: 9px 14px; border-radius: 50px; font-size: 11.5px; font-weight: 700; text-decoration: none; text-align: center; transition: all .2s; }
        .hdr-ach-btn:hover { background: #EEF0FF; }
        .hdr-ach-stats { display: flex; justify-content: space-between; }
        .hdr-ach-stat { text-align: center; }
        .hdr-ach-stat-num { display: block; font-size: 18px; font-weight: 800; color: #2E29FF; }
        .hdr-ach-stat-label { display: block; font-size: 9px; color: #6B7280; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3px; }

        /* ── MOBILE HAMBURGER ── */
        .hdr-hamburger { display: none; background: none; border: none; cursor: pointer; color: #0A0A2E; padding: 4px; pointer-events: auto; }
        .hdr-mobile-nav { display: none; }

        @media (max-width: 1024px) {
          .hdr { top: 12px; }
          .hdr-tube { height: 56px; padding: 8px 16px; }
          .hdr-left-group, .hdr-right-group { display: none; }
          .hdr-hamburger { display: flex; }
          .hdr-mobile-nav { display: flex; flex-direction: column; position: fixed; top: 72px; left: 0; width: 100%; height: calc(100vh - 72px); background: #fff; padding: 0 24px 24px 24px; pointer-events: auto; overflow-y: auto; border-top: 1px solid #EAECF0; z-index: 999; }
          .hdr-mobile-link { display: block; padding: 16px 0; font-size: 15px; font-weight: 600; color: #101828; text-decoration: none; border-bottom: 1px solid #EAECF0; }
          .hdr-mobile-link:hover { color: #2E29FF; }
          .hdr-mobile-group { border-bottom: 1px solid #EAECF0; }
          .hdr-mobile-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 16px 0; background: none; border: none; font-size: 15px; font-weight: 700; color: #101828; cursor: pointer; }
          .hdr-mobile-trigger.open { color: #2E29FF; }
          .hdr-mobile-trigger svg { transition: transform 0.3s; width: 14px; height: 14px; color: #667085; }
          .hdr-mobile-trigger.open svg { transform: rotate(180deg); color: #2E29FF; }
          .hdr-mobile-sub { padding: 0 0 16px 16px; display: flex; flex-direction: column; gap: 12px; }
          .hdr-mobile-sub-link { display: block; font-size: 14px; font-weight: 500; color: #475467; text-decoration: none; }
          .hdr-mobile-sub-link:hover { color: #2E29FF; }
          .hdr-mobile-service-cat { margin-bottom: 12px; }
          .hdr-mobile-service-cat-title { display: block; font-size: 13px; font-weight: 700; color: #0A0A2E; margin-bottom: 6px; }
          .hdr-mobile-service-links { display: flex; flex-direction: column; gap: 8px; padding-left: 12px; border-left: 2px solid rgba(46, 41, 255, 0.1); }
          .hdr-mobile-sub-link.sub-sub { font-size: 13px; color: #6B7280; }
          .hdr-mobile-cta { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; background: #342CF6; color: #fff; padding: 14px 24px; border-radius: 100px; font-size: 15px; font-weight: 600; text-decoration: none; margin-top: auto; margin-bottom: 40px; transition: background 0.2s; }
          .hdr-mobile-cta:hover { background: #1a16d9; }
          .hdr-mobile-cta svg { width: 16px; height: 16px; }
        }
      `}</style>

      <header className="hdr" onMouseLeave={close}>
        {/* Floating Capsule Tube Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div className="hdr-tube">
            {/* Left Menus */}
            <div className="hdr-left-group">
              <button
                className={`hdr-nav-btn ${openMenu === 'industries' ? 'open' : ''}`}
                onMouseEnter={() => setOpenMenu('industries')}
                onClick={() => toggle('industries')}
              >
                Industries <ChevronDown />
              </button>
              <button
                className={`hdr-nav-btn ${openMenu === 'services' ? 'open' : ''}`}
                onMouseEnter={() => setOpenMenu('services')}
                onClick={() => toggle('services')}
              >
                Services <ChevronDown />
              </button>
            </div>

            {/* Center Logo with Custom Graphic Icon and Bold Block Text */}
            <Link to="/" className="hdr-brand-center" onClick={close}>
              <LogoIcon />
              <div className="hdr-logo-text">
                <span className="bottom">NOVA<span style={{ color: '#2E29FF' }}>DESK</span></span>
              </div>
            </Link>

            {/* Right Menus */}
            <div className="hdr-right-group">
              <Link to="/about-us" className="hdr-nav-btn" onClick={close}>
                About Us
              </Link>
              <Link to="/contact-us" className="hdr-nav-btn" style={{ color: '#2E29FF' }} onClick={close}>
                Contact Us
              </Link>
            </div>

            {/* Hamburger on Mobile */}
            <button className="hdr-hamburger" onClick={() => setMobileOpen(o => !o)}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mega Menus Dropdown */}
          {openMenu && (
            <>
              <div className="hdr-mega-backdrop" onClick={close} />
              <div className="hdr-mega-wrap">
                {openMenu === 'industries' && <IndustriesMenu onClose={close} />}
                {openMenu === 'services' && <ServicesMenu onClose={close} />}
              </div>
            </>
          )}

          {/* Mobile Navigation Dropdown */}
          {mobileOpen && (
            <div className="hdr-mobile-nav">
              {/* Industries Dropdown */}
              <div className="hdr-mobile-group">
                <button 
                  className={`hdr-mobile-trigger ${mobileIndustriesOpen ? 'open' : ''}`}
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                >
                  <span>Industries</span>
                  <ChevronDown />
                </button>
                {mobileIndustriesOpen && (
                  <div className="hdr-mobile-sub">
                    {industries.map(i => (
                      <Link 
                        key={i.name} 
                        to={`/industries/${i.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`} 
                        className="hdr-mobile-sub-link" 
                        onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }}
                      >
                        {i.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="hdr-mobile-group">
                <button 
                  className={`hdr-mobile-trigger ${mobileServicesOpen ? 'open' : ''}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown />
                </button>
                {mobileServicesOpen && (
                  <div className="hdr-mobile-sub">
                    {servicesNav.map(s => (
                      <div key={s.id} className="hdr-mobile-service-cat">
                        <span className="hdr-mobile-service-cat-title">{s.label}</span>
                        <div className="hdr-mobile-service-links">
                          {s.links.map(l => (
                            <Link 
                              key={l} 
                              to={getServiceUrl(l)} 
                              className="hdr-mobile-sub-link sub-sub" 
                              onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                            >
                              {l}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hire Developers Dropdown */}
              <div className="hdr-mobile-group">
                <button 
                  className={`hdr-mobile-trigger ${mobileHireOpen ? 'open' : ''}`}
                  onClick={() => setMobileHireOpen(!mobileHireOpen)}
                >
                  <span>Hire Developers</span>
                  <ChevronDown />
                </button>
                {mobileHireOpen && (
                  <div className="hdr-mobile-sub">
                    <Link to="/contact-us" className="hdr-mobile-sub-link" onClick={() => { setMobileOpen(false); setMobileHireOpen(false); }}>Hire Dedicated Devs</Link>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="hdr-mobile-group">
                <button 
                  className={`hdr-mobile-trigger ${mobileCompanyOpen ? 'open' : ''}`}
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                >
                  <span>Company</span>
                  <ChevronDown />
                </button>
                {mobileCompanyOpen && (
                  <div className="hdr-mobile-sub">
                    <Link to="/about-us" className="hdr-mobile-sub-link" onClick={() => { setMobileOpen(false); setMobileCompanyOpen(false); }}>About Us</Link>
                    <Link to="/contact-us" className="hdr-mobile-sub-link" onClick={() => { setMobileOpen(false); setMobileCompanyOpen(false); }}>Contact Us</Link>
                  </div>
                )}
              </div>

              {/* Bottom Button */}
              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column' }}>
                <Link to="/contact-us" className="hdr-mobile-cta" onClick={() => setMobileOpen(false)}>
                  Schedule a Free Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19L19 5M19 5v10M19 5H9"/></svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
