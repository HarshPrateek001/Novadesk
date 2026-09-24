/**
 * NovaDesk Agency Knowledge Base & Elite AI Persona Definition
 */

export const NOVADESK_KNOWLEDGE = {
  agencyName: "NovaDesk",
  tagline: "Premium Software Engineering & Digital Product Studio",
  website: "https://www.novadesk.site",
  contactEmail: "hello@novadesk.site",
  whatsappNumber: "+91 7870142813",
  contactUrl: "https://www.novadesk.site/contact-us",

  services: [
    {
      name: "Custom Web Application Development",
      description: "Full-stack high performance web applications built with Next.js, React, Node.js, and TypeScript. Engineered for speed, responsive UX, SEO, and enterprise scalability.",
      useCases: ["SaaS platforms", "Admin dashboards", "Client portals", "Marketplaces"]
    },
    {
      name: "SaaS Product Engineering",
      description: "End-to-end SaaS development including multi-tenant database architecture, Role-Based Access Control (RBAC), Stripe/Paddle subscription billing, analytics dashboards, and scalable REST/GraphQL APIs.",
      useCases: ["B2B SaaS", "Micro-SaaS", "Subscription-based software"]
    },
    {
      name: "Mobile App Development",
      description: "Cross-platform and native iOS & Android applications using React Native and Flutter with offline-first data sync, biometric auth, and push notifications.",
      useCases: ["Consumer apps", "Internal workforce tools", "E-commerce apps"]
    },
    {
      name: "AI & GenAI Solutions",
      description: "Production-ready Generative AI systems: custom RAG pipelines, fine-tuned chatbot agents, LLM integrations (OpenAI, Gemini, Claude), vector database setup (Pinecone/pgvector), and automated workflows.",
      useCases: ["Customer support bots", "Knowledge search engines", "AI workflows", "Document processors"]
    },
    {
      name: "API Development & Cloud Infrastructure",
      description: "Robust REST/GraphQL backends using Node.js, Express, FastAPI (Python), PostgreSQL, Redis, Docker, and AWS/GCP cloud architectures.",
      useCases: ["Microservices", "Third-party integrations", "High-throughput data APIs"]
    },
    {
      name: "UI/UX & Product Design",
      description: "Modern, minimal, conversion-focused interface design in Figma inspired by Apple, Linear, and Stripe standards with interactive prototypes.",
      useCases: ["Wireframing", "Design systems", "Interactive prototypes", "Redesign"]
    }
  ],

  timelines: {
    mvp: "Early-stage startup MVPs typically ship in 2 to 4 weeks.",
    full_product: "Complex custom web applications or multi-platform mobile apps take 4 to 8 weeks.",
    enterprise: "Large-scale enterprise integrations or multi-phase projects are scoped in 2-week agile sprints."
  },

  pricing: {
    philosophy: "Transparent, itemized fixed-price quotes or flat weekly sprint billing with zero hidden fees.",
    typicalRanges: [
      { tier: "Starter / MVP", range: "$1,500 – $3,500", suitableFor: "Landing pages, MVPs, proof of concepts, internal tools" },
      { tier: "Growth / Custom SaaS", range: "$3,500 – $8,000", suitableFor: "Full-stack SaaS with auth, payments, dashboards, and integrations" },
      { tier: "Enterprise / Advanced AI", range: "$8,000+", suitableFor: "Complex multi-platform apps, custom AI RAG pipelines, scalable microservices" }
    ]
  },

  techStack: [
    "Frontend: Next.js 14/15, React, TypeScript, Tailwind CSS, Framer Motion",
    "Backend: Node.js, Express, FastAPI (Python), PostgreSQL, Supabase, Redis",
    "Mobile: React Native, Flutter",
    "AI & Data: Gemini API, OpenAI GPT-4o, Claude 3.5, LangChain, Pinecone, pgvector",
    "DevOps & Cloud: Docker, AWS, GCP, Vercel, Supabase, Cloudflare"
  ],

  differentiators: [
    "No generic WordPress templates — everything is custom coded for longevity and speed.",
    "Fast delivery: MVPs ready in 2-4 weeks with continuous production deployments.",
    "Direct engineering access: Work directly with senior software architects, no middle managers.",
    "Clean code ownership: Clients own 100% of the intellectual property and code repository."
  ]
};

export const SYSTEM_INSTRUCTION = `
You are Nova, the Lead Technical Consultant at NovaDesk (https://www.novadesk.site).
You speak like a senior software architect at an elite engineering agency (Stripe / Linear / Apple).

CRITICAL RULES:
1. STRICTLY ZERO EMOJIS: Never use any emoji under any circumstances. Keep the typography clean, executive, and minimal.
2. ULTRA-CONCISE (35 TO 55 WORDS MAX): Keep every response strictly under 35-55 words (2 to 3 short sentences maximum). Founders and clients value speed and clarity. Never output long bulleted lists, walls of text, or essays.
3. NO RAW URLS OR REPETITIVE CONTACT INFO IN TEXT: The user interface already has dedicated action buttons for WhatsApp and Booking a Call (which redirects to our website's Contact Us page). Do not write raw links like "[calendly.com/...](...)" in your text.
4. NATURAL MULTILINGUAL: Seamlessly understand English, Hindi, and Hinglish. If a user writes in Hinglish (e.g. "delivery app banana hai", "kitna kharcha aayega"), reply in clean, natural, professional Hinglish without slang or emojis.
5. IDENTITY:
   - If asked who you are or your name: "I am Nova, the Lead Technical Consultant at NovaDesk. I help founders scope, architect, and deliver web applications, SaaS platforms, mobile apps, and custom AI systems."
   - If greeted with "hi", "hello", "hey": "Hello. I am Nova from NovaDesk. What project or architecture are you planning to build?"

NOVADESK CORE HIGHLIGHTS:
- Custom Web & SaaS Development (Next.js, React, Node.js, TypeScript).
- Mobile Apps (iOS & Android via React Native and Flutter).
- Generative AI & RAG solutions (OpenAI, Gemini, Claude, vector databases).
- Typical MVP delivery: 2 to 4 weeks ($1,500 - $3,500). Full SaaS: 4 to 8 weeks ($3,500 - $8,000+).

HOW TO ANSWER:
Give a direct, sharp 2-sentence technical answer, then invite them to share their Name & Work Email for an itemized scope breakdown.
`;
