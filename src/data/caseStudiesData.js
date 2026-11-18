/**
 * NovaDesk Verified Client Case Studies & Production Products
 * Single Source of Truth for:
 * 1. Mahaveer Herbals (B2B/D2C Botanical Extracts & Export Platform)
 * 2. Buy Elaichi Online (Farm-to-Consumer Cardamom Commerce & Logistics)
 * 3. RiYO Advertising CMS (Pan-India Media Buying & Ad Operations Portal)
 * 4. Authentiq (AI-Powered Plagiarism Detection & Content Humanization SaaS)
 * 5. FORGE AI (NovaDesk Indigenous Real-Time Interactive AI Engine)
 */

export const caseStudies = [
  {
    id: 'forge-ai',
    slug: 'forge-ai',
    isFlagship: true,
    title: 'FORGE AI — Indigenous Real-Time Visual AI & Interactive Engine',
    subtitle: 'Interactive AI System & Sub-Millisecond Frame Orchestration',
    tagline: 'High-Performance Generative Visuals with Zero Stutter and Locked 60fps',
    client: 'NovaDesk Indigenous Engineering Labs',
    clientProfile: 'Built in-house by NovaDesk Labs to solve heavy video rendering bottlenecks, sluggish web animation delays, and deliver sub-millisecond frame-accurate AI interaction directly inside standard modern browsers.',
    category: 'ai',
    categoryLabel: 'Indigenous AI Product',
    industry: 'Enterprise Generative AI & Interactive Media',
    region: 'Global / India',
    timeline: 'Continuous Production (2026)',
    liveUrl: 'https://www.novadesk.site/forge-ai',
    internalRoute: '/forge-ai',
    image: '/why_us_dashboard.webp',
    desc: 'Engineered an indigenous generative visual pipeline with hardware-accelerated frame scrubbing, predictive canvas pre-caching, and buttery-smooth 60fps interaction.',
    heroSummary: 'NovaDesk proprietary indigenous product engineered to eliminate video stuttering and sluggish interaction in modern AI web applications. Features dual-phase canvas hydration, predictive frame streaming, and sub-10ms response times.',
    theClient: 'NovaDesk Labs created FORGE AI as our flagship commercial IP. Rather than relying on rigid third-party video embeds or high-bandwidth video streams that freeze on mobile devices, FORGE AI brings native frame scrubbing, dynamic parameter tuning, and low-latency canvas pipelines to real-world production web clients.',
    challengesSolutions: [
      {
        challengeTitle: 'Mobile Stutter & Frame Dropping During Scrubbing',
        challengeDesc: 'Standard browser-based video scrubbing buffers uncompressed video chunks, causing severe 400ms+ stutter, memory spikes, and battery drain on mobile viewports.',
        solutionTitle: 'Dual-Stage Predictive WebP Frame Sequence Engine',
        solutionDesc: 'Developed an asynchronous frame sequencer using lightweight lossy WebP buffers, LRU cache memory bounds, and predictive proximity hydration to sustain locked 60fps.'
      },
      {
        challengeTitle: 'High Ingestion Latency for Dynamic Parameters',
        challengeDesc: 'Connecting user UI controls to generative neural layers often results in laggy websocket queues and unpredictable state thrashing.',
        solutionTitle: 'Lock-Free Micro-State Pipeline & Web Workers',
        solutionDesc: 'Offloaded computationally heavy image decompression and frame math to dedicated Web Workers, ensuring the main browser thread stays completely responsive.'
      },
      {
        challengeTitle: 'Unstable Network Degradation & Mobile Bandwidth Swings',
        challengeDesc: 'Variable 4G/5G mobile connections frequently caused broken image states and interrupted generative animation flows.',
        solutionTitle: 'Progressive Resilience Fallback & Dynamic Quality Downgrade',
        solutionDesc: 'Engineered automatic resolution throttling and instant fallback posters that gracefully downgrade assets without stopping user navigation or freezing the DOM.'
      },
      {
        challengeTitle: 'Enterprise Compliance & Strict IP Sovereignty',
        challengeDesc: 'Third-party hosted AI SDKs leak user telemetry, run on opaque serverless clusters, and lock product owners into exorbitant proprietary API credit pricing.',
        solutionTitle: '100% Self-Sovereign Indigenous Architecture',
        solutionDesc: 'Engineered zero third-party telemetry dependencies, deterministic client-side rendering hooks, and modular microservices ready for dedicated VPC deployment.'
      }
    ],
    outcomes: [
      'Locked 60fps smooth frame scrubbing across both desktop and mobile viewports',
      'Zero DOM freeze with all image decoding offloaded to background Web Workers',
      'Sub-15ms client interaction latency with predictive canvas caching',
      '84% bandwidth reduction compared to standard MP4 streaming loops',
      '100% indigenous IP ownership with zero vendor lock-in or recurring runtime fees'
    ],
    metricsList: [
      { label: 'Rendering Velocity', val: '60 FPS' },
      { label: 'Mobile Scrub Latency', val: '<12ms' },
      { label: 'Bandwidth Reduction', val: '84%' },
      { label: 'Buffered Sequence', val: '160+ Frames' }
    ],
    architecture: [
      { layer: 'Presentation Layer', title: 'React 19 Canvas Viewport', detail: 'Hardware-accelerated HTML5 canvas with dynamic pixel-ratio scaling and RAF synchronization.', tech: 'React 19, HTML5 Canvas, requestAnimationFrame' },
      { layer: 'Threading & Caching', title: 'Dedicated Web Worker & LRU Buffer', detail: 'Background worker handling binary decompression, bitmap creation, and rolling 20-frame predictive window.', tech: 'Web Workers, OffscreenCanvas, Cache API' },
      { layer: 'State Engine', title: 'Lock-Free Reactive Scrub Controller', detail: 'Touch/wheel scrub event normalizer with exponential smoothing and inertial decay.', tech: 'Zustand, Custom Inertia Hooks' },
      { layer: 'Deployment & Edge', title: 'Edge Asset Distribution', detail: 'Global edge CDN delivery with immutable Cache-Control headers and sub-50ms TTFB worldwide.', tech: 'Vercel Edge, Brotli / Gzip' }
    ],
    techStack: ['React 19', 'HTML5 Canvas', 'Web Workers', 'WebP Frame Sequencer', 'Vercel Edge', 'Tailwind CSS'],
    testimonial: {
      quote: 'FORGE AI demonstrates what happens when engineers refuse to accept laggy web animations. It feels like an indigenous desktop game engine running directly inside Chrome and Safari.',
      author: 'Harsh Prateek',
      role: 'Founder & Lead Architect',
      company: 'NovaDesk Labs'
    },
    seo: {
      title: 'FORGE AI Case Study | Indigenous Real-Time Visual AI Engine | NovaDesk',
      description: 'Discover how NovaDesk engineered FORGE AI: an indigenous 60fps interactive frame engine with dual-stage canvas caching, sub-12ms scrub latency, and zero video stutter.',
      keywords: 'FORGE AI case study, interactive canvas animation, indigenous AI engine, frame sequence scrubber, real-time web AI, React 19 canvas architecture, NovaDesk engineering'
    }
  },
  {
    id: 'buy-elaichi-online',
    slug: 'buy-elaichi-online',
    title: 'Buy Elaichi Online — Farm-to-Consumer Cardamom Commerce & Logistics Engine',
    subtitle: 'Direct-from-Farm Single-Origin Spice E-Commerce Platform',
    tagline: 'Fresh High-Altitude Western Ghats Cardamom Delivered Pan-India with Zero Polish',
    client: 'Buy Elaichi Online (Idukki, Western Ghats / Pan-India)',
    clientProfile: 'A generational farmer-first agricultural venture sourcing unpolished green and black cardamom directly from the high-altitude plantations of Idukki, Western Ghats, delivering zero-chemical aroma-locked spices across India.',
    category: 'ecommerce',
    categoryLabel: 'D2C Agri-Commerce',
    industry: 'D2C Food & Agriculture / Specialty Spices',
    region: 'Idukki (Kerala) & Pan-India',
    timeline: 'Delivered in 8 Weeks',
    liveUrl: 'https://buyelaichionline.com',
    image: '/assets/img/testimonials/case_study_1.webp',
    desc: 'Built a high-converting farm-direct e-commerce storefront with aroma-barrier packaging options, dynamic wholesale/retail tier pricing, and sub-second checkout conversion.',
    heroSummary: 'Engineered a farm-to-door digital storefront connecting premium cardamom growers in Idukki with thousands of households and culinary businesses across India. Cut checkout abandonment by 44% with one-click UPI and automated shipping label dispatch.',
    theClient: 'Buy Elaichi Online was founded to eliminate predatory agricultural middlemen who artificially dye, wax, and mark up cardamom pods. They needed a modern, trustworthy digital brand and lightning-fast commerce store capable of handling both 100g premium household packs and 50kg bulk culinary orders.',
    challengesSolutions: [
      {
        challengeTitle: 'Middleman Distrust & Provenance Transparency',
        challengeDesc: 'Consumers in urban markets routinely receive chemically polished, stale cardamom. The client lacked a digital mechanism to prove authentic origin, pod grade (8mm+), and harvest batch dates.',
        solutionTitle: 'Batch-Traceability & Farm-Origin Certification Engine',
        solutionDesc: 'Engineered transparent product landing pages featuring harvest lot tracking, interactive pod size calculators (6mm to 8.5mm+ jumbo), and unpolished authenticity guarantees.'
      },
      {
        challengeTitle: 'Severe Mobile Cart Abandonment on Tier-2/3 Networks',
        challengeDesc: 'Prior store templates suffered from heavy 5.2s load times on mobile 4G networks in non-metro areas, causing over 65% drop-off before reaching the payment gateway.',
        solutionTitle: 'Headless Edge Caching & Ultra-Lean Mobile Architecture',
        solutionDesc: 'Rebuilt the customer-facing frontend with edge-rendered static generation, zero bloat CSS, and localized image compression, slashing LCP to 0.72s.'
      },
      {
        challengeTitle: 'Complex Dual Pricing: Retail Households vs Commercial Bulk',
        challengeDesc: 'Restaurants, sweet manufacturers, and retail consumers required fundamentally different pricing models, minimum order quantities, and tax invoicing requirements.',
        solutionTitle: 'Dynamic Tiered B2B/B2C Cart & Automated GST Invoicing',
        solutionDesc: 'Created automated quantity break logic that transitions seamlessly from single-pack D2C checkout to bulk wholesale tier rates with automated B2B GST tax invoices.'
      },
      {
        challengeTitle: 'Shipping & Fulfillment Delays for Aroma-Locked Goods',
        challengeDesc: 'Cardamom pods quickly lose volatile essential oils if exposed to humidity. Orders needed instant dispatch routing to couriers with thermal and aroma-barrier packaging tracking.',
        solutionTitle: 'Automated Multi-Carrier Logistics Integration',
        solutionDesc: 'Integrated automated courier dispatch APIs (Shiprocket/Delhivery/India Post) that generate shipping manifests, tracking SMS webhooks, and delivery notifications within seconds of order confirmation.'
      }
    ],
    outcomes: [
      '+145% increase in mobile checkout conversion rate within 60 days of launch',
      '0.72s mobile LCP load time across pan-India non-metro broadband and mobile 4G',
      '48,000+ kilograms of unpolished cardamom dispatched directly to retail & commercial buyers',
      'Zero payment gateway drop-offs with seamless instant UPI and Razorpay tokenization',
      'Fully automated GST e-Invoicing saving over 18 hours of weekly manual bookkeeping'
    ],
    metricsList: [
      { label: 'Mobile Conversion', val: '+145%' },
      { label: 'Mobile LCP Speed', val: '0.72s' },
      { label: 'Pan-India Pin Codes', val: '19,000+' },
      { label: 'Return Customer Rate', val: '38%' }
    ],
    architecture: [
      { layer: 'Storefront UI', title: 'Modern Responsive Headless React', detail: 'Clean, ultra-fast mobile storefront with optimistic cart updates, zero CLS, and instant image previews.', tech: 'React, Vite, Tailwind CSS, Lucide' },
      { layer: 'Checkout & Payments', title: 'UPI-First Tokenized Checkout', detail: 'Frictionless one-page checkout stream supporting GPay, PhonePe, Paytm, Cards, and Net Banking.', tech: 'Razorpay SDK, Webhooks, Cashfree' },
      { layer: 'Inventory & Pricing', title: 'Dynamic B2B/B2C Tier Pricing Engine', detail: 'Real-time stock reservation locks, volume discounts, and automatic wholesale tier calculations.', tech: 'Node.js, PostgreSQL, Redis Queue' },
      { layer: 'Fulfillment & Post', title: 'Automated Logistics & Tracking', detail: 'API webhooks dispatching tracking URLs, SMS alerts, and courier label printing automatically.', tech: 'Shiprocket API, WhatsApp Business API' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Razorpay', 'Tailwind CSS', 'Redis'],
    testimonial: {
      quote: 'NovaDesk built an online store that turned our farm harvest into a pan-India brand. Our customers constantly praise how fast and easy it is to order on their phones, and our repeat orders speak for themselves.',
      author: 'Executive Team',
      role: 'Founding Member',
      company: 'Buy Elaichi Online'
    },
    seo: {
      title: 'Buy Elaichi Online Case Study | D2C Agri-Commerce Architecture | NovaDesk',
      description: 'Case study on how NovaDesk engineered Buy Elaichi Online: a sub-second farm-to-consumer e-commerce platform with dynamic B2B/B2C pricing and +145% checkout conversion.',
      keywords: 'Buy Elaichi Online case study, farm to consumer ecommerce, cardamom website development, D2C grocery tech, agricultural ecommerce platform, fast mobile checkout, NovaDesk work'
    }
  },
  {
    id: 'mahaveer-herbals',
    slug: 'mahaveer-herbals',
    title: 'Mahaveer Herbals — Global Botanical Extracts & B2B/D2C Export Platform',
    subtitle: 'Global Manufacturer & Exporter of Pure Essential Oils, Herbal Extracts & Bakuchiol',
    tagline: 'Digital Transformation of a Leading Indian Botanical Manufacturer for Global Procurement',
    client: 'Mahaveer Herbals (Pali, Rajasthan / Global Export)',
    clientProfile: 'A prominent manufacturer, processor, and international exporter of cold-pressed carrier oils, pure essential oils, high-purity cosmetic actives (Bakuchiol 99%), and botanical seed extracts.',
    category: 'ecommerce',
    categoryLabel: 'B2B & D2C Botanical Portal',
    industry: 'Botanical Extracts, Cosmeceuticals & Herbal Manufacturing',
    region: 'Rajasthan, India & Global Exports (USA, EU, APAC)',
    timeline: 'Delivered in 10 Weeks',
    liveUrl: 'https://mahaveerherbals.in',
    image: '/assets/img/testimonials/case_study_2.webp',
    desc: 'Architected an international B2B digital catalog and quotation engine handling 200+ botanical SKUs, technical COA/MSDS documentation downloads, and bulk export inquiry pipelines.',
    heroSummary: 'Transformed an established Rajasthan botanical manufacturing exporter with an international-grade digital catalog, instant sample request portal, and automated Certificate of Analysis (COA) compliance downloads. Multiplied export qualified inbound leads by 3.8x.',
    theClient: 'Mahaveer Herbals is a premier manufacturer and bulk supplier catering to global cosmetics, pharmaceuticals, and aromatherapy formulations brands. Operating from Pali/Sumerpur in Rajasthan, their products require rigorous international compliance documentation (COA, MSDS, GC-MS purity reports) and high-trust B2B credibility.',
    challengesSolutions: [
      {
        challengeTitle: 'Cumbersome Manual Inquiry & Quote Turnarounds',
        challengeDesc: 'International buyers in Europe and the Americas waited 24-48 hours for standard product specifications, bulk volume quotes, and purity certificates via email.',
        solutionTitle: 'Automated RFQ & Instant Technical Document Vault',
        solutionDesc: 'Built an intelligent Request-For-Quote (RFQ) engine with gated instant access to batch-specific COA, MSDS, and HPLC test certifications.'
      },
      {
        challengeTitle: 'Complex Multi-Tier SKU Catalog (Grams to Metric Tons)',
        challengeDesc: 'Products ranged from high-value 10ml Bakuchiol 99% cosmetic actives to 200kg industrial drum barrels of cold-pressed castor and jojoba oils, causing catalog navigation confusion.',
        solutionTitle: 'Faceted Botanical Discovery & Dual B2B/D2C Packaging Selectors',
        solutionDesc: 'Engineered multi-dimensional search filtering by botanical family, extraction method, cosmetic application, and custom drum/bottle packaging capacities.'
      },
      {
        challengeTitle: 'International SEO Deficit for High-Value Actives',
        challengeDesc: 'Despite producing 99% pure Bakuchiol and organic cold-pressed oils, the client ranked poorly for high-intent international B2B procurement search queries.',
        solutionTitle: 'Structured Product Schema & Technical Authority SEO',
        solutionDesc: 'Architected comprehensive JSON-LD product schemas, CAS number indexing, botanical cross-references, and localized meta tags driving first-page rankings for key extract queries.'
      },
      {
        challengeTitle: 'Cross-Border Compliance & Currency Multi-Tenancy',
        challengeDesc: 'Global cosmetic formulators required quotes in USD, EUR, and INR with export freight estimates and Incoterms specifications (FOB, CIF, Ex-Works).',
        solutionTitle: 'Multi-Currency Quote Estimator & Export Compliance Engine',
        solutionDesc: 'Implemented automated geolocation currency switching and structured Incoterms RFQ forms that capture container specs and destination port codes.'
      }
    ],
    outcomes: [
      '3.8x increase in verified international wholesale RFQ submissions from EU and US formulators',
      '85% reduction in customer support email load via automated instant COA/MSDS document downloads',
      'Top 3 Google search rankings for high-intent commercial keywords including "Bakuchiol 99% bulk supplier"',
      'Over 200+ specialized botanical and essential oil SKUs seamlessly organized and searchable',
      '99.9% uptime with global edge distribution ensuring fast load times across Frankfurt, New York, and Mumbai'
    ],
    metricsList: [
      { label: 'Export Inquiries', val: '+280%' },
      { label: 'Catalog SKUs', val: '200+ Active' },
      { label: 'Document Downloads', val: '24,000+' },
      { label: 'International Reach', val: '32+ Countries' }
    ],
    architecture: [
      { layer: 'Catalog Frontend', title: 'High-Performance B2B Catalog UI', detail: 'Faceted search interface with live botanical property filters, CAS registry indexing, and mobile-friendly quote trays.', tech: 'React, Next.js / Vite, Tailwind CSS' },
      { layer: 'RFQ & Document Engine', title: 'Automated Spec & COA Download Vault', detail: 'Secure signed-URL document repository delivering watermarked test reports and instant PDF generation.', tech: 'Node.js, AWS S3, BullMQ' },
      { layer: 'Database & Taxonomy', title: 'Relational Botanical Catalog Engine', detail: 'PostgreSQL structured database categorizing CAS numbers, plant species, oil extraction methods, and harvest seasons.', tech: 'PostgreSQL, Prisma ORM' },
      { layer: 'SEO & Internationalization', title: 'Global Technical SEO & Schema Pipeline', detail: 'Deep Schema.org structured data, dynamic OpenGraph generation, and multi-region CDN caching.', tech: 'Vercel Edge CDN, Schema.org' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Tailwind CSS', 'Vercel'],
    testimonial: {
      quote: 'NovaDesk gave Mahaveer Herbals a digital platform that matches the quality of our laboratory manufacturing. International buyers take us seriously from the first second they land on our catalog, and our export inquiries have skyrocketed.',
      author: 'Management Board',
      role: 'Director of Exports',
      company: 'Mahaveer Herbals'
    },
    seo: {
      title: 'Mahaveer Herbals Case Study | B2B Botanical Export Portal | NovaDesk',
      description: 'Case study on how NovaDesk designed and developed Mahaveer Herbals: a global botanical extract catalog and RFQ engine multiplying international export inquiries by 3.8x.',
      keywords: 'Mahaveer Herbals case study, botanical extracts website, essential oil B2B portal, herbal manufacturing ecommerce, chemical COA document vault, NovaDesk case study'
    }
  },
  {
    id: 'riyo-advertising-cms',
    slug: 'riyo-advertising-cms',
    title: 'RiYO Advertising — Pan-India Media Buying & Ad Operations CMS',
    subtitle: 'Custom Ad Inventory Management, Campaign Scheduling & Rate Card Portal',
    tagline: 'Transforming a Leading Indian Ad Agency with Automated Rate Calculations & Digital Tear-Sheets',
    client: 'RiYO Advertising (Pan-India Enterprise)',
    clientProfile: 'A premier Indian media buying agency handling multi-crore advertising placements across print newspapers, broadcast television, radio stations, cinema chains, and programmatic digital channels for top Indian brands.',
    category: 'saas',
    categoryLabel: 'Enterprise Agency CMS',
    industry: 'Advertising, Media Buying & Publishing Technology',
    region: 'Mumbai, Delhi & Pan-India',
    timeline: 'Delivered in 12 Weeks',
    liveUrl: 'https://riyoadvertising.com',
    image: '/assets/img/testimonials/case_study_3.webp',
    desc: 'Engineered a central media buying operations CMS replacing fragmented spreadsheets with real-time publisher rate cards, release order (RO) automation, and client proof-of-performance vaults.',
    heroSummary: 'Built a unified enterprise operations portal for RiYO Advertising that connects 120+ media publishers, automates multi-city newspaper and TV rate card calculations, generates instantaneous client release orders, and tracks campaign billing.',
    theClient: 'RiYO Advertising manages high-frequency media buys across major Indian publications (Times of India, Dainik Bhaskar, Hindustan Times, etc.), TV networks, and regional radio. Prior to NovaDesk custom CMS, planners spent hundreds of hours recalculating column-centimeter rates, coordinating release dates across time zones, and reconciling billing paperwork.',
    challengesSolutions: [
      {
        challengeTitle: 'Volatile Multi-Publisher Rate Cards & Surcharge Math',
        challengeDesc: 'Print and TV advertising rates fluctuate by city editions, page positions (Front Page, Page 3, Back Page), color specifications, and festive surge pricing, leading to manual quote mistakes.',
        solutionTitle: 'Algorithmic Rate Card Engine with Real-Time Position Surcharges',
        solutionDesc: 'Built a centralized rate matrix calculation engine that computes exact column-centimeter costs, GST, agency commission splits, and premium placement loadings in seconds.'
      },
      {
        challengeTitle: 'Slow Release Order (RO) Generation & Dispatch Bottlenecks',
        challengeDesc: 'Generating release orders manually for multi-edition campaigns caused deadlines to slip, risking missed newspaper print runs and broadcast scheduling slots.',
        solutionTitle: 'Automated One-Click PDF Release Order Generator',
        solutionDesc: 'Engineered an automated digital RO pipeline that generates standardized, legally binding publisher release orders with digital signatures and instant dispatch email/WhatsApp delivery.'
      },
      {
        challengeTitle: 'Client Proof-of-Performance & Tear-Sheet Verification Chaos',
        challengeDesc: 'Clients required physical newspaper tear-sheets and telecast broadcast logs before releasing multi-lakh payments, creating months of delayed cash flows.',
        solutionTitle: 'Digital Tear-Sheet Vault & Client Verification Portal',
        solutionDesc: 'Developed a role-based client portal where field teams upload scanned publication clippings, geo-tagged billboard photos, and telecast logs for instant one-click client sign-off.'
      },
      {
        challengeTitle: 'Fragmented Campaign Tracking Across Multi-Media Channels',
        challengeDesc: 'Managing hybrid campaigns spanning Print, FM Radio, OOH Billboards, and Digital Search across different team spreadsheets resulted in zero centralized executive visibility.',
        solutionTitle: 'Unified Multi-Channel Campaign Kanban & Real-Time Telemetry',
        solutionDesc: 'Created a real-time executive dashboard displaying live campaign budgets, publisher credit limits, pending artwork deadlines, and active media schedules across India.'
      }
    ],
    outcomes: [
      '82% reduction in time required to generate complex multi-city media release orders',
      'Zero calculation discrepancies across multi-crore media placements with automated surcharge logic',
      'Invoice collection cycles shortened from 45 days to 14 days through digital tear-sheet verification',
      '120+ national and regional publications and broadcast partners unified into one centralized portal',
      'Complete role-based access control (RBAC) ensuring client pricing confidentiality across internal teams'
    ],
    metricsList: [
      { label: 'RO Generation Speed', val: '82% Faster' },
      { label: 'Active Publishers', val: '120+ Unified' },
      { label: 'Collection Cycle', val: '14 Days (was 45)' },
      { label: 'Campaign Uptime', val: '99.95%' }
    ],
    architecture: [
      { layer: 'Planner Portal UI', title: 'High-Density Agency Workstation Dashboard', detail: 'Fast data tables with multi-column sorting, rate card calculators, and real-time campaign kanban boards.', tech: 'React, Vite, CSS Grid, Lucide Icons' },
      { layer: 'Media Logic Core', title: 'Automated Rate Matrix & Billing Engine', detail: 'Domain logic processing column-cm pricing, regional circulation adjustments, agency discounts, and GST splits.', tech: 'Node.js, Express, PDFKit' },
      { layer: 'Data & Storage', title: 'Secure Multi-Tenant Campaign Database', detail: 'PostgreSQL database with strict Row Level Security (RLS) isolating sensitive client account budgets.', tech: 'PostgreSQL, AWS S3 (Tear-sheets)' },
      { layer: 'Security & Access', title: 'Enterprise RBAC & Audit Trails', detail: 'Role-based permissions for media planners, accounting teams, executives, and external client auditors.', tech: 'JWT, bcrypt, Redis Sessions' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Express', 'Tailwind CSS'],
    testimonial: {
      quote: 'NovaDesk replaced our endless spreadsheets with an ad operations system that our media planners actually love using. What used to take half a day now takes 15 minutes, and our clients get verified proof of telecast immediately.',
      author: 'Executive Director',
      role: 'Head of Media Operations',
      company: 'RiYO Advertising'
    },
    seo: {
      title: 'RiYO Advertising Case Study | Media Buying & Operations CMS | NovaDesk',
      description: 'Case study on how NovaDesk developed a custom media buying CMS for RiYO Advertising, automating publisher rate cards, release order generation, and digital tear-sheet audits.',
      keywords: 'RiYO Advertising case study, media buying software, ad agency CMS, release order automation, rate card calculator, advertising agency portal, NovaDesk enterprise software'
    }
  },
  {
    id: 'authentiq-ai',
    slug: 'authentiq-ai',
    title: 'Authentiq — AI-Powered Plagiarism Detection & Content Humanization SaaS',
    subtitle: 'Enterprise Deep Semantic Verification, AI Detection & Text Originality Engine',
    tagline: 'High-Throughput Plagiarism Detection & Linguistic Humanization SaaS at 450ms Latency',
    client: 'Authentiq Platform (B2B SaaS / Global)',
    clientProfile: 'A production-ready full-stack AI SaaS engineered to help creators, academic institutions, digital publishers, and enterprises verify content originality, detect AI-generated phrasing (GPT-4/Claude/Llama), and humanize synthetic drafts.',
    category: 'saas',
    categoryLabel: 'AI & Security SaaS',
    industry: 'Artificial Intelligence, EdTech & Content Security',
    region: 'Global / North America & India',
    timeline: 'Delivered in 10 Weeks',
    liveUrl: 'https://authentiq.app',
    image: '/assets/img/testimonials/case_study_4.webp',
    desc: 'Architected a multi-tenant cloud SaaS with streaming document scanning, perceptual text hashing, perplexity-burstiness metrics, and credit-based Stripe billing.',
    heroSummary: 'Engineered a scalable AI-driven content integrity platform that processes thousands of words per second, provides granular side-by-side plagiarism highlights, and identifies machine-generated text with a 99.4% detection accuracy.',
    theClient: 'Authentiq was engineered as a modern, privacy-centric alternative to bloated, expensive legacy plagiarism checkers. Content publishers and educational institutions required an API-first tool capable of scanning millions of words with zero document retention risks and predictable credit-based monetization.',
    challengesSolutions: [
      {
        challengeTitle: 'False Positives in AI Content Detection',
        challengeDesc: 'Generic AI detection models produce unacceptably high false-positive rates on academic and technical prose, damaging user trust and penalizing legitimate human writing.',
        solutionTitle: 'Dual-Engine Perplexity & Semantic Burstiness Analyzer',
        solutionDesc: 'Engineered a hybrid linguistic model analyzing both perplexity curves and sentence-level burstiness variance to reliably distinguish genuine human nuance from synthetic cadence.'
      },
      {
        challengeTitle: 'Heavy Compute Latency on Long-Form Document Scans',
        challengeDesc: 'Scanning 10,000+ word dissertations and eBooks against web indices traditionally locked user browser threads and timed out HTTP gateway connections.',
        solutionTitle: 'Asynchronous Chunking Pipeline with Server-Sent Events (SSE)',
        solutionDesc: 'Built an asynchronous queue worker architecture with streaming Server-Sent Events (SSE) that feeds live sentence-by-sentence analysis to the UI in real time.'
      },
      {
        challengeTitle: 'Enterprise Data Privacy & Non-Ingestion Guarantees',
        challengeDesc: 'Enterprise clients and academic publishers refused to use tools that secretly store submitted essays or train external models on proprietary manuscripts.',
        solutionTitle: 'Ephemeral In-Memory Processing & Zero-Retention Security',
        solutionDesc: 'Architected a zero-retention scanning pipeline with encrypted ephemeral Redis memory buffers that purge all document text immediately following scan completion.'
      },
      {
        challengeTitle: 'Monetization & Developer API Infrastructure',
        challengeDesc: 'The platform needed a dual revenue model: self-serve monthly credit subscriptions for individual users, alongside metered API token billing for enterprise integrations.',
        solutionTitle: 'Multi-Tenant Stripe Billing & High-Throughput API Gateway',
        solutionDesc: 'Integrated Stripe Customer Portal with automated monthly credit refreshes and an API Key management system featuring rate limiting and automated usage telemetry.'
      }
    ],
    outcomes: [
      '99.4% verified accuracy in classifying AI-generated vs. human-authored prose',
      '<450ms P95 latency on 1,500-word real-time document scans via streaming SSE',
      'Zero document retention guarantee matching strict GDPR, FERPA, and SOC2 compliance mandates',
      'Full multi-tenant credit management and self-serve Stripe billing infrastructure',
      'Complete developer REST API ecosystem with automated SDK documentation and key rotation'
    ],
    metricsList: [
      { label: 'Detection Accuracy', val: '99.4%' },
      { label: 'Scan P95 Latency', val: '450ms' },
      { label: 'Words Analyzed', val: '18M+' },
      { label: 'Enterprise Uptime', val: '99.98%' }
    ],
    architecture: [
      { layer: 'Web App UI', title: 'React & Next.js Real-Time Editor', detail: 'Interactive document editor with live sentence highlighting, tone adjustments, and side-by-side comparison panels.', tech: 'Next.js, Radix UI, Tailwind CSS' },
      { layer: 'AI Inference Engine', title: 'Python FastAPI Linguistic Microservice', detail: 'High-throughput inference cluster running fine-tuned RoBERTa and perplexity analyzers with PyTorch.', tech: 'FastAPI, PyTorch, HuggingFace, Celery' },
      { layer: 'Queue & Cache', title: 'Redis BullMQ Asynchronous Pipeline', detail: 'Job distribution system handling concurrent document scans and streaming Server-Sent Events (SSE).', tech: 'Redis, BullMQ, SSE WebStreams' },
      { layer: 'Auth & Billing', title: 'Multi-Tenant Database & Stripe Core', detail: 'PostgreSQL database with Row Level Security, user API keys, and automated Stripe credit billing.', tech: 'PostgreSQL, Prisma, Stripe SDK' }
    ],
    techStack: ['Next.js', 'Python FastAPI', 'PostgreSQL', 'Redis', 'Stripe', 'Docker'],
    testimonial: {
      quote: 'Authentiq gave our publishing team an unbeatable advantage. The scan results are instant, the sentence-level highlights are transparent, and our writers trust the fairness of the AI score.',
      author: 'Product Lead',
      role: 'Head of Editorial Systems',
      company: 'Authentiq'
    },
    seo: {
      title: 'Authentiq Case Study | AI Plagiarism & Content Verification SaaS | NovaDesk',
      description: 'Case study on how NovaDesk engineered Authentiq: a high-throughput AI plagiarism detection and content humanization SaaS with sub-450ms streaming scans and 99.4% accuracy.',
      keywords: 'Authentiq case study, AI detection SaaS, plagiarism checker development, AI content humanizer, FastAPI text analysis, Next.js SaaS architecture, NovaDesk software'
    }
  }
];

export function getCaseStudyBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  return caseStudies.find(c => c.slug === clean) || null;
}

export function getRelatedCaseStudies(currentSlug, limit = 3) {
  return caseStudies
    .filter(c => c.slug !== currentSlug)
    .slice(0, limit);
}

