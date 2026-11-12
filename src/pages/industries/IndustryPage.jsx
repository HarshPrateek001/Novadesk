import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NotFound from '../NotFound';
import SEO from '../../components/SEO';

const industryData = {
  'healthcare': {
    name: 'Healthcare',
    title: 'Healthcare Software Development Company | HIPAA-Compliant HealthTech',
    keywords: 'healthcare software development company, HIPAA compliant app development, custom EHR EMR software development, telehealth app development agency, HealthTech software solutions, patient portal development, NovaDesk healthcare',
    badge: 'HEALTHCARE & HEALTHTECH',
    h1: 'Engineering Secure, Compliant Healthcare Software',
    subtitle: 'From telemedicine portals and EHR/EMR integrations to patient mobile apps and AI diagnostics — built to strict HIPAA and ISO standards.',
    overview: 'Healthcare institutions and digital health startups require rock-solid security, verifiable HIPAA compliance, and frictionless patient-doctor UX. NovaDesk develops clinical-grade digital health platforms that streamline workflows and safeguard sensitive patient data.',
    metrics: [
      { num: '100%', lbl: 'HIPAA & HL7 Compliant' },
      { num: '99.99%', lbl: 'Uptime SLA' },
      { num: '3.5x', lbl: 'Faster Patient Intake' }
    ],
    solutions: [
      { title: 'Telemedicine & Video Consultation', desc: 'WebRTC end-to-end encrypted video appointments, instant chat, and digital prescription issuance.' },
      { title: 'EHR / EMR System Integrations', desc: 'Seamless bi-directional data synchronization with Epic, Cerner, FHIR, and HL7 standard protocols.' },
      { title: 'Patient Portals & Health Apps', desc: 'Intuitive iOS & Android apps for lab report access, doctor booking, and automated medication reminders.' },
      { title: 'Medical Billing & Insurance Automation', desc: 'Automated claims processing, eligibility checks, and secure payment gateway integrations.' }
    ],
    faqs: [
      { q: 'How do you guarantee HIPAA compliance?', a: 'We employ end-to-end AES-256 encryption in transit and at rest, role-based access control (RBAC), immutable audit logging, and sign Business Associate Agreements (BAAs) with certified cloud hosts.' },
      { q: 'Can you integrate with existing hospital EHR systems?', a: 'Yes. We specialize in FHIR and HL7 v2/v3 integrations to seamlessly connect with Epic, Cerner, Allscripts, and custom legacy hospital databases.' },
      { q: 'What is the typical timeline for an MVP healthtech app?', a: 'A complete, compliant MVP (telehealth consultation or patient scheduling app) typically launches in 8 to 12 weeks with full milestone deliverables.' }
    ]
  },
  'logistics': {
    name: 'Logistics',
    title: 'Logistics & Supply Chain Software Development | NovaDesk',
    keywords: 'logistics software development company, supply chain app development services, fleet management software development, warehouse management system WMS development, last-mile delivery app, freight platform engineering, NovaDesk logistics',
    badge: 'LOGISTICS & SUPPLY CHAIN',
    h1: 'Custom Logistics, Fleet & Warehouse Management Software',
    subtitle: 'Real-time GPS fleet tracking, route optimization algorithms, automated dispatch, and cloud warehouse management systems (WMS).',
    overview: 'Supply chains succeed on speed, transparency, and route efficiency. NovaDesk builds real-time freight and inventory software that cuts fuel waste, automates driver dispatch, and provides live visibility across every transit mile.',
    metrics: [
      { num: '28%', lbl: 'Fuel & Route Cost Savings' },
      { num: '100ms', lbl: 'Real-Time Telemetry' },
      { num: '40%', lbl: 'Faster Yard Turnaround' }
    ],
    solutions: [
      { title: 'Live Fleet Tracking & Telematics', desc: 'Real-time GPS tracking, geofencing triggers, driver behavior telemetry, and maintenance alerts.' },
      { title: 'AI Route & Load Optimization', desc: 'Multi-stop dynamic routing models that account for live traffic, axle weight, and delivery priority.' },
      { title: 'Warehouse Management (WMS)', desc: 'Barcode / RFID scanning, automated stock count, slotting optimization, and cross-docking workflows.' },
      { title: 'Freight Brokerage & Dispatch Portals', desc: 'Digital rate quotation, automated carrier assignment, digital BOLs, and proof-of-delivery capture.' }
    ],
    faqs: [
      { q: 'Can your logistics software work offline in low-connectivity zones?', a: 'Yes. Our driver and warehouse mobile applications are built offline-first using SQLite / Realm and synchronize automatically when connectivity restores.' },
      { q: 'Can you integrate with IoT sensors and ELD devices?', a: 'Yes. We integrate with OBD-II devices, temperature sensors for cold chain logistics, and major ELD hardware providers via MQTT and REST APIs.' },
      { q: 'Can we build custom carrier billing and invoicing modules?', a: 'Absolutely. We automate dynamic fuel surcharges, detention pay, distance-based invoicing, and one-click PDF generation.' }
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    title: 'Real Estate & PropTech Software Development | NovaDesk',
    keywords: 'real estate app development company, PropTech software development services, MLS integration software, property management software development, real estate CRM development, virtual property tour platform, NovaDesk real estate',
    badge: 'REAL ESTATE & PROPTECH',
    h1: 'Scalable PropTech Platforms & Property Portals',
    subtitle: 'Custom MLS/RETS integrations, tenant leasing portals, digital lease signing, and interactive 3D virtual tour platforms.',
    overview: 'Modern property buyers, renters, and commercial managers demand seamless digital experiences. NovaDesk crafts high-conversion real estate web platforms and property management software designed for maximum scale.',
    metrics: [
      { num: '3x', lbl: 'Lead Conversion Lift' },
      { num: '100k+', lbl: 'Listings Indexed' },
      { num: '65%', lbl: 'Reduction in Vacancy Days' }
    ],
    solutions: [
      { title: 'Custom Real Estate Portals', desc: 'Ultra-fast search with geospatial filters, interactive map exploration, and instant agent scheduling.' },
      { title: 'MLS, IDX & RETS Feed Integration', desc: 'Automated synchronization with national and regional MLS feeds with zero listing lag.' },
      { title: 'Tenant & Property Management SaaS', desc: 'Automated rent collection via UPI/Stripe, maintenance ticket dispatch, and digital lease e-signing.' },
      { title: 'Commercial Leasing Dashboards', desc: 'Multi-tenant occupancy tracking, lease renewal alerts, and financial yield analytics.' }
    ],
    faqs: [
      { q: 'How fast do MLS listings sync on your platforms?', a: 'Our automated webhooks and cron synchronizers ingest and index MLS/IDX data in under 60 seconds with full image caching on global CDNs.' },
      { q: 'Can you implement 360-degree virtual property tours?', a: 'Yes. We embed Matterport, Three.js, and panoramic WebGL viewers for interactive virtual walk-throughs on any mobile or desktop screen.' },
      { q: 'Do you support multi-currency and international listings?', a: 'Yes, our PropTech architecture supports localized currencies, metric/imperial floor plans, and multilingual listing descriptions.' }
    ]
  },
  'staffing': {
    name: 'Staffing',
    title: 'Staffing & HR Tech Software Development | NovaDesk',
    keywords: 'staffing agency software development, recruitment software development company, ATS applicant tracking system development, HR tech software solutions, on-demand staffing platform, job portal app development, NovaDesk staffing',
    badge: 'STAFFING & HR TECH',
    h1: 'Applicant Tracking Systems & Workforce Platforms',
    subtitle: 'AI-assisted resume screening, automated recruiter workflows, interview pipelines, and contractor payroll management.',
    overview: 'Recruiting agencies and enterprise HR teams need to match qualified candidates faster with zero friction. NovaDesk creates custom ATS platforms and on-demand staffing applications that automate sourcing through onboarding.',
    metrics: [
      { num: '70%', lbl: 'Recruiter Time Saved' },
      { num: '4x', lbl: 'Faster Time-to-Hire' },
      { num: '99%', lbl: 'Resume Parsing Accuracy' }
    ],
    solutions: [
      { title: 'Custom Applicant Tracking Systems (ATS)', desc: 'Kanban candidate pipelines, scorecard reviews, automated email/SMS sequences, and interview scheduling.' },
      { title: 'AI Resume Parsing & Matching', desc: 'Vector embeddings and NLP parsing that match candidate skills against job requirements automatically.' },
      { title: 'On-Demand Shift Staffing Apps', desc: 'Uber-style gig and nurse/hospitality shift scheduling with instant acceptance and geo-clock in.' },
      { title: 'Contractor Compliance & Payroll', desc: 'Time tracking, timesheet approval hierarchies, tax forms, and bulk automated payroll disbursements.' }
    ],
    faqs: [
      { q: 'Can the platform parse PDF and DOCX resumes automatically?', a: 'Yes. We integrate high-speed document parsers that extract candidate experience, education, skills, and certifications into structured database records.' },
      { q: 'Does your ATS integrate with LinkedIn and job boards?', a: 'Yes, we build one-click posting to LinkedIn, Indeed, Monster, and Google Jobs with automated inbound webhook ingestion.' },
      { q: 'Can we build custom role permissions for clients and recruiters?', a: 'Yes. Role-based access control allows enterprise clients to see candidate shortlists while keeping internal notes and margins private.' }
    ]
  },
  'education': {
    name: 'Education',
    title: 'EdTech & Learning Management Software Development | NovaDesk',
    keywords: 'EdTech software development company, e-learning app development services, custom LMS learning management system development, virtual classroom software, school university management ERP, EdTech mobile apps, NovaDesk education',
    badge: 'EDTECH & E-LEARNING',
    h1: 'Next-Generation Learning Management Systems (LMS)',
    subtitle: 'Interactive virtual classrooms, AI quiz generation, progress analytics, and SCORM/xAPI compliant course delivery.',
    overview: 'Education platforms must captivate students while delivering measurable outcomes. NovaDesk engineers scalable LMS platforms, tutoring marketplaces, and corporate training systems designed for high retention.',
    metrics: [
      { num: '500k+', lbl: 'Concurrent Learners' },
      { num: '<1.2s', lbl: 'Course Video Load' },
      { num: '88%', lbl: 'Course Completion Rate' }
    ],
    solutions: [
      { title: 'Custom LMS Platforms', desc: 'Modular curriculum builders, video lectures, drip content scheduling, and automated certification issuance.' },
      { title: 'Live Interactive Virtual Classrooms', desc: 'Low-latency multi-speaker video, collaborative whiteboards, breakout rooms, and live polling.' },
      { title: 'AI-Powered Study Assistants & Quizzes', desc: 'Automated flashcard generators, personalized knowledge retention quizzes, and AI tutor chatbots.' },
      { title: 'Gamification & Learning Analytics', desc: 'Badges, streaks, leaderboards, and granular drop-off analytics that highlight student confusion points.' }
    ],
    faqs: [
      { q: 'Is the platform SCORM and xAPI compliant?', a: 'Yes, we build and test against SCORM 1.2 / 2004 and Experience API (xAPI) standards for universal course compatibility.' },
      { q: 'How do you protect copyrighted video lectures from piracy?', a: 'We implement DRM encryption (Widevine / FairPlay), signed URLs with expiring tokens, dynamic watermark overlays, and anti-screen-recording detection.' },
      { q: 'Can you handle simultaneous exam submissions for thousands of students?', a: 'Yes. Our serverless auto-scaling architecture handles high-spike exam submissions without database locking or timeouts.' }
    ]
  },
  'retail': {
    name: 'Retail',
    title: 'Retail Software & POS Systems Development | NovaDesk',
    keywords: 'retail software development company, omnichannel retail POS development, retail inventory management software, custom ecommerce store engineering, retail loyalty app development, headless commerce retail, NovaDesk retail',
    badge: 'RETAIL & OMNICHANNEL',
    h1: 'Omnichannel Retail Platforms & Cloud POS Systems',
    subtitle: 'Unified online and offline inventory synchronization, customer loyalty programs, and high-speed in-store checkout.',
    overview: 'Bridging physical storefronts with digital commerce is vital for retail growth. NovaDesk builds unified omnichannel retail engines that sync stocks across warehouses, physical POS registers, and mobile apps in real time.',
    metrics: [
      { num: '0.8s', lbl: 'Barcode Scan-to-Bill' },
      { num: '100%', lbl: 'Omnichannel Stock Sync' },
      { num: '32%', lbl: 'Repeat Customer Lift' }
    ],
    solutions: [
      { title: 'Cloud-Based POS Systems', desc: 'Fast touchscreen point-of-sale supporting barcode scanners, thermal printers, cash drawers, and UPI.' },
      { title: 'Real-Time Inventory Unification', desc: 'Never oversell: instant stock synchronization across brick-and-mortar stores, website, and marketplaces.' },
      { title: 'Loyalty & CRM Customer Profiles', desc: 'Cross-channel loyalty points, personalized discount SMS/WhatsApp campaigns, and purchase history.' },
      { title: 'Buy Online, Pick Up In Store (BOPIS)', desc: 'Seamless click-and-collect workflows with automated store associate notifications and customer tracking.' }
    ],
    faqs: [
      { q: 'Can the POS run if the store internet goes down?', a: 'Yes. Our POS software supports offline mode with local indexedDB / SQLite storage, allowing offline billing and auto-syncing upon reconnection.' },
      { q: 'What hardware does the POS support?', a: 'It runs seamlessly on iPad, Android tablets, touchscreen Windows terminals, Bluetooth barcode scanners, and Star/Epson thermal receipt printers.' },
      { q: 'Can we integrate with Tally or ERP software?', a: 'Yes, we build automated daily sync bridges to Tally, SAP, Oracle, and Zoho Books.' }
    ]
  },
  'marketplace': {
    name: 'Marketplace',
    title: 'Multi-Vendor Marketplace Platform Development | NovaDesk',
    keywords: 'multi-vendor marketplace app development, B2B marketplace software development company, custom online marketplace platform, peer-to-peer marketplace app, service marketplace engineering, escrow payment marketplace, NovaDesk marketplace',
    badge: 'MARKETPLACE & PLATFORMS',
    h1: 'Scalable Two-Sided Marketplaces & Multi-Vendor Platforms',
    subtitle: 'Automated vendor onboarding, commission split payouts, dispute resolution, and escrow payment architectures.',
    overview: 'Two-sided marketplaces present unique challenges: balancing vendor management with buyer trust. NovaDesk builds high-frequency marketplace platforms engineered for instant payouts, trusted reviews, and friction-free transactions.',
    metrics: [
      { num: 'Sub-Sec', lbl: 'Split Payment Execution' },
      { num: '10k+', lbl: 'Active Vendors Handled' },
      { num: '99.98%', lbl: 'Transaction Success Rate' }
    ],
    solutions: [
      { title: 'Vendor Portals & Product Management', desc: 'Self-serve merchant dashboards for catalog uploads, stock levels, sales analytics, and payout history.' },
      { title: 'Automated Commission & Split Payouts', desc: 'Stripe Connect, Razorpay Route, and PayPal Marketplace integrations with automated split settlement.' },
      { title: 'Trust, Reviews & Dispute Escalation', desc: 'Verified buyer reviews, delivery verification codes, refund escrow, and admin mediation tools.' },
      { title: 'Geospatial Hyperlocal Matching', desc: 'Find closest providers or vendors within a radius, factoring delivery fees and estimated transit time.' }
    ],
    faqs: [
      { q: 'How are vendor commissions calculated and deducted?', a: 'Commissions can be configured globally, by product category, or per merchant as flat fees or percentage splits, deducted automatically at checkout.' },
      { q: 'How do you handle KYC verification for merchants?', a: 'We integrate with Aadhaar, PAN, GSTIN, and international identity verification APIs to automate instant seller onboarding.' },
      { q: 'Can vendors run sponsored advertisements or boost listings?', a: 'Yes. We build native sponsored listing modules that allow vendors to bid for top placements on search and category pages.' }
    ]
  },
  'sports': {
    name: 'Sports',
    title: 'Sports Tech & Fan Engagement Software Development | NovaDesk',
    keywords: 'sports app development company, live sports score streaming platform, tournament league management software, athlete performance analytics app, fan engagement platform development, fantasy sports software engineering, NovaDesk sports',
    badge: 'SPORTS TECH & ANALYTICS',
    h1: 'Sports Management, Analytics & Fan Engagement Platforms',
    subtitle: 'Tournament fixtures, athlete biometric telemetry, live score streaming, and branded fan community apps.',
    overview: 'From professional sports leagues to regional academies and fitness startups, sports software demands real-time responsiveness and high-energy user experiences. NovaDesk creates platforms that engage fans and empower coaches.',
    metrics: [
      { num: '<500ms', lbl: 'Live Score Latency' },
      { num: '250k+', lbl: 'Concurrent Live Streamers' },
      { num: '45%', lbl: 'Higher Fan Retention' }
    ],
    solutions: [
      { title: 'League & Tournament Management', desc: 'Automated round-robin and knockout fixture generation, team rosters, referee assignments, and standings.' },
      { title: 'Live Match Centers & Score Streaming', desc: 'Ball-by-ball or play-by-play live commentary, interactive statistics, and push notification score alerts.' },
      { title: 'Player Performance & Video Analytics', desc: 'GPS tracking data overlays, athlete conditioning metrics, injury logs, and match footage tagging.' },
      { title: 'Fan Club & Merchandise Storefronts', desc: 'Exclusive digital memberships, gamified trivia, VIP matchday passes, and official club jersey sales.' }
    ],
    faqs: [
      { q: 'Can you ingest live score feeds from Sportradar or Opta?', a: 'Yes. We integrate with Sportradar, Opta, and custom WebSocket feeds to update game state within milliseconds without page refreshes.' },
      { q: 'Can this software manage youth sports academies and fee collection?', a: 'Yes, we provide academy management modules with attendance tracking, batch scheduling, and automated monthly fee reminders via WhatsApp.' },
      { q: 'Do you build fantasy sports or prediction contests?', a: 'Yes. We engineer compliant fantasy sports engines with leaderboard computations, credit systems, and live prize calculations.' }
    ]
  },
  'food-and-restaurant': {
    name: 'Food & Restaurant',
    title: 'Restaurant Tech & Online Food Ordering Software | NovaDesk',
    keywords: 'food delivery app development company, restaurant online ordering system software, kitchen display system KDS development, cloud kitchen software, contactless QR ordering app, white-label food delivery app, NovaDesk foodtech',
    badge: 'FOODTECH & RESTAURANTS',
    h1: 'Custom Food Delivery Apps, POS & Kitchen Display Systems',
    subtitle: 'Zero-commission online ordering, real-time rider tracking, table QR digital menus, and Kitchen Display Systems (KDS).',
    overview: 'Restaurants can no longer afford to give away 30% of their revenues to third-party delivery apps. NovaDesk delivers direct-to-consumer online ordering platforms and kitchen automation software that maximize your margins.',
    metrics: [
      { num: '0%', lbl: 'Third-Party Commission' },
      { num: '35%', lbl: 'Increase in Average Order' },
      { num: '8 min', lbl: 'Saved per Kitchen Ticket' }
    ],
    solutions: [
      { title: 'Direct Online Ordering System', desc: 'Branded web and mobile ordering with custom modifiers, combos, coupon engines, and instant UPI checkout.' },
      { title: 'Kitchen Display System (KDS)', desc: 'Real-time kitchen screens with color-coded preparation timers, bump bars, and recipe instruction cards.' },
      { title: 'QR Code Contactless Table Ordering', desc: 'Dine-in guests scan table QR codes to browse photos, order directly, split bills, and pay without waiting.' },
      { title: 'Delivery Fleet & Rider Dispatch', desc: 'Auto-assign orders to in-house delivery drivers with turn-by-turn navigation and live customer GPS tracking.' }
    ],
    faqs: [
      { q: 'Can we stop paying aggregators high commissions?', a: 'Yes! With your own branded direct ordering platform, you keep 100% of your order revenue and own all customer phone numbers and emails for remarketing.' },
      { q: 'Does it support multiple restaurant branches and cloud kitchens?', a: 'Yes, centralized franchise management lets you manage menus, pricing, inventory, and staff permissions across 50+ locations from one admin dashboard.' },
      { q: 'Can orders print directly to our kitchen thermal printers?', a: 'Yes, our system auto-prints Kitchen Order Tickets (KOT) directly to standard ESC/POS network and Bluetooth thermal printers.' }
    ]
  },
  'travel-and-hospitality': {
    name: 'Travel & Hospitality',
    title: 'Travel & Hospitality Software Development Company | NovaDesk',
    keywords: 'travel booking app development company, hotel management software PMS development, OTA channel manager integration, flight hotel booking engine, tour travel portal development, hospitality guest app, NovaDesk travel',
    badge: 'TRAVEL & HOSPITALITY',
    h1: 'Travel Booking Engines & Hotel Management Software',
    subtitle: 'Direct booking engines, GDS/OTA channel managers, itinerary planners, and contactless hotel guest experiences.',
    overview: 'Travelers demand effortless bookings and real-time confirmations. NovaDesk creates end-to-end travel portals, flight/hotel booking engines, and property management systems that increase direct bookings.',
    metrics: [
      { num: '40%', lbl: 'More Direct Bookings' },
      { num: '100%', lbl: 'Two-Way Channel Sync' },
      { num: '2.8x', lbl: 'Faster Itinerary Creation' }
    ],
    solutions: [
      { title: 'Direct Hotel Booking Engines', desc: 'Commission-free booking widgets with calendar date pickers, room upgrades, add-on packages, and instant confirmation.' },
      { title: 'Two-Way OTA Channel Manager', desc: 'Automatically sync room availability and rates with Booking.com, Airbnb, Agoda, and Expedia to avoid overbooking.' },
      { title: 'Travel Agency Itinerary Builder', desc: 'Drag-and-drop tour itinerary creation with day-by-day maps, hotel vouchers, and automated pricing quotes.' },
      { title: 'Contactless Mobile Guest Check-In', desc: 'Digital ID upload, keyless mobile room entry, in-room service ordering, and instant WhatsApp concierge.' }
    ],
    faqs: [
      { q: 'Can you integrate with Amadeus, Sabre, or Hotelbeds?', a: 'Yes. We integrate with major Global Distribution Systems (GDS) and hotel bed banks for live flight, hotel, and car rental inventories.' },
      { q: 'How does the channel manager prevent double bookings?', a: 'Our channel manager uses bi-directional XML/REST webhooks to instantly block booked rooms across all connected channels within seconds.' },
      { q: 'Can we accept international currencies and credit cards?', a: 'Yes. We support Stripe, PayPal, Razorpay, and Adyen with automatic currency conversion and dynamic localized pricing.' }
    ]
  },
  'on-demand': {
    name: 'On-Demand',
    title: 'On-Demand App Development Company | Uber-Like Custom Apps',
    keywords: 'on-demand app development company, hyperlocal delivery app development, Uber-like app development services, multi-vendor on-demand platform, real-time GPS dispatch software, quick-commerce Q-commerce app, NovaDesk on-demand',
    badge: 'ON-DEMAND & HYPERLOCAL',
    h1: 'Custom On-Demand Service & Delivery Applications',
    subtitle: 'Uber-for-X platforms featuring three apps in one: Customer App, Service Provider App, and Mission-Control Admin Dashboard.',
    overview: 'On-demand models power the modern service economy — from home repairs and courier dispatch to beauty services and tow trucks. NovaDesk designs scalable on-demand ecosystems that balance real-time matching with high reliability.',
    metrics: [
      { num: '<30s', lbl: 'Provider Match Time' },
      { num: '99.9%', lbl: 'Geofence Accuracy' },
      { num: '100k+', lbl: 'Daily Trips Supported' }
    ],
    solutions: [
      { title: 'Customer Booking App', desc: 'Instant service request, upfront fare estimate, live GPS provider tracking, and seamless digital payments.' },
      { title: 'Provider / Driver Mobile App', desc: 'Job broadcast alerts, acceptance timers, in-app navigation, earnings analytics, and instant cash-out.' },
      { title: 'Central Dispatch Admin Dashboard', desc: 'Live map overview of all active providers, manual dispatch overrides, heatmaps, and surge pricing controls.' },
      { title: 'Dynamic Surge & Fare Engine', desc: 'Algorithms that adjust service pricing based on real-time demand, weather, driver supply, and geographic zones.' }
    ],
    faqs: [
      { q: 'What is included in an on-demand software package?', a: 'You receive three dedicated applications: (1) Customer iOS & Android App, (2) Provider iOS & Android App, and (3) Web-based Super Admin Dispatch Dashboard, complete with full source code ownership.' },
      { q: 'How does live location tracking work without draining the battery?', a: 'We employ intelligent background geofencing and motion activity APIs that throttle GPS pings while preserving sub-second accuracy during active jobs.' },
      { q: 'Can we launch our on-demand MVP in a single city first?', a: 'Yes. Our platform is modular, enabling you to prove unit economics in one geographic area and expand across cities with one click.' }
    ]
  }
};

export default function IndustryPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const cleanSlug = (slug || '').toLowerCase();
  const data = industryData[cleanSlug];

  if (!data) {
    return <NotFound />;
  }

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${data.name} Software Development Services`,
    "provider": {
      "@type": "Organization",
      "name": "NovaDesk",
      "url": "https://www.novadesk.site"
    },
    "description": data.subtitle,
    "keywords": data.keywords,
    "areaServed": "India, Global",
    "serviceType": `${data.name} Software Engineering`
  };

  return (
    <div className="page-wraper">
      <SEO 
        title={data.title}
        description={data.subtitle}
        keywords={data.keywords}
        url={`/industries/${cleanSlug}`}
        canonical={`https://www.novadesk.site/industries/${cleanSlug}`}
        schema={jsonLdSchema}
      />

      <style>{`
        .ind-page-hero {
          padding: 100px 24px 70px;
          background: linear-gradient(180deg, #F8FAFD 0%, #FFFFFF 100%);
          text-align: center;
        }
        .ind-page-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .ind-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(46, 41, 255, 0.08);
          border: 1px solid rgba(46, 41, 255, 0.18);
          color: #2E29FF;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 20px;
        }
        .ind-h1 {
          font-size: 46px;
          font-weight: 800;
          line-height: 1.18;
          color: #0A0A2E;
          letter-spacing: -1.2px;
          margin-bottom: 20px;
          font-family: 'Space Grotesk', sans-serif;
        }
        .ind-sub {
          font-size: 18px;
          color: #4B5563;
          line-height: 1.65;
          max-width: 800px;
          margin: 0 auto 32px;
        }
        .ind-cta-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .ind-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: #2E29FF;
          color: #FFFFFF;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(46, 41, 255, 0.25);
          transition: transform 0.2s, background 0.2s;
        }
        .ind-btn-primary:hover {
          background: #1D18E0;
          transform: translateY(-2px);
          color: #FFFFFF;
        }
        .ind-btn-sec {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #FFFFFF;
          color: #1F2937;
          border: 1px solid #E5E7EB;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .ind-btn-sec:hover {
          background: #F9FAFB;
        }
        .ind-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 20px;
        }
        .ind-metric-card {
          background: #FFFFFF;
          border: 1px solid #E8EEF5;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .ind-metric-num {
          font-size: 38px;
          font-weight: 800;
          color: #2E29FF;
          margin-bottom: 6px;
          font-family: 'Space Grotesk', sans-serif;
        }
        .ind-metric-lbl {
          font-size: 13px;
          color: #6B7280;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Solutions Section */
        .ind-section {
          padding: 70px 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .ind-sec-tag {
          font-size: 12px;
          font-weight: 800;
          color: #2E29FF;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
        }
        .ind-sec-h2 {
          font-size: 34px;
          font-weight: 800;
          color: #0A0A2E;
          letter-spacing: -0.8px;
          margin-bottom: 16px;
          font-family: 'Space Grotesk', sans-serif;
        }
        .ind-sec-desc {
          font-size: 16.5px;
          color: #4B5563;
          line-height: 1.6;
          max-width: 760px;
          margin-bottom: 40px;
        }
        .ind-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .ind-solution-card {
          background: #FFFFFF;
          border: 1px solid #EAEFF5;
          border-radius: 18px;
          padding: 30px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ind-solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(46, 41, 255, 0.08);
          border-color: rgba(46, 41, 255, 0.3);
        }
        .ind-solution-title {
          font-size: 19px;
          font-weight: 700;
          color: #0A0A2E;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ind-solution-desc {
          font-size: 14.5px;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        /* FAQ Section */
        .ind-faq-box {
          border-top: 1px solid #EAEFF5;
          padding-top: 50px;
        }
        .ind-faq-item {
          border-bottom: 1px solid #EDF2F7;
          margin-bottom: 12px;
        }
        .ind-faq-q {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 18px 0;
          font-size: 16.5px;
          font-weight: 700;
          color: #0A0A2E;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .ind-faq-a {
          padding: 0 0 20px 0;
          font-size: 15px;
          color: #555;
          line-height: 1.65;
        }

        /* CTA Banner */
        .ind-banner-cta {
          background: linear-gradient(135deg, #2E29FF 0%, #1D18E0 100%);
          border-radius: 24px;
          padding: 48px;
          text-align: center;
          color: #FFFFFF;
          margin: 60px 0 20px;
        }
        .ind-banner-h2 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 14px;
          color: #FFFFFF;
          font-family: 'Space Grotesk', sans-serif;
        }
        .ind-banner-p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.88);
          max-width: 650px;
          margin: 0 auto 28px;
          line-height: 1.6;
        }
        .ind-banner-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 34px;
          background: #FFFFFF;
          color: #2E29FF;
          border-radius: 50px;
          font-weight: 800;
          font-size: 15.5px;
          text-decoration: none;
          transition: transform 0.2s, background 0.2s;
        }
        .ind-banner-btn:hover {
          transform: translateY(-2px);
          background: #F3F4F6;
          color: #2E29FF;
        }

        @media (max-width: 768px) {
          .ind-h1 { font-size: 32px; }
          .ind-sub { font-size: 16px; }
          .ind-metrics-grid { grid-template-columns: 1fr; gap: 14px; }
          .ind-cards-grid { grid-template-columns: 1fr; gap: 16px; }
          .ind-banner-cta { padding: 32px 20px; }
          .ind-banner-h2 { font-size: 24px; }
        }
      `}</style>

      {/* Hero */}
      <section className="ind-page-hero">
        <div className="ind-page-inner">
          <div className="ind-badge">
            <span>✦</span> {data.badge}
          </div>
          <h1 className="ind-h1">{data.h1}</h1>
          <p className="ind-sub">{data.subtitle}</p>

          <div className="ind-cta-row">
            <Link to="/get-a-free-quote" className="ind-btn-primary">
              Calculate Project Quote ↗
            </Link>
            <Link to="/contact-us" className="ind-btn-sec">
              Talk to Industry Specialist
            </Link>
          </div>

          <div className="ind-metrics-grid">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="ind-metric-card">
                <div className="ind-metric-num">{m.num}</div>
                <div className="ind-metric-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="ind-section">
        <div className="ind-sec-tag">WHAT WE BUILD</div>
        <h2 className="ind-sec-h2">Tailored Software Solutions for {data.name}</h2>
        <p className="ind-sec-desc">{data.overview}</p>

        <div className="ind-cards-grid">
          {data.solutions.map((sol, idx) => (
            <div key={idx} className="ind-solution-card">
              <div className="ind-solution-title">
                <span style={{ color: '#2E29FF' }}>✓</span> {sol.title}
              </div>
              <p className="ind-solution-desc">{sol.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="ind-faq-box" style={{ marginTop: '60px' }}>
          <div className="ind-sec-tag">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="ind-sec-h2" style={{ fontSize: '28px' }}>Got Questions About Our {data.name} Software?</h2>
          
          <div style={{ marginTop: '24px' }}>
            {data.faqs.map((faq, i) => (
              <div key={i} className="ind-faq-item">
                <button
                  type="button"
                  className="ind-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: '#2E29FF' }}>
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <div className="ind-faq-a">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Banner CTA */}
        <div className="ind-banner-cta">
          <h2 className="ind-banner-h2">Ready to Engineer Your {data.name} Product?</h2>
          <p className="ind-banner-p">
            Let's discuss your scope, tech architecture, timeline, and estimate with direct access to our senior engineering team.
          </p>
          <Link to="/contact-us" className="ind-banner-btn">
            Schedule a Discovery Call ↗
          </Link>
        </div>
      </section>
    </div>
  );
}

