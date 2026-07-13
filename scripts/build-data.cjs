const fs = require('fs');
const path = require('path');

const servicesInput = [
  { name: 'Chatbot Development', slug: 'chatbot-development', comp: 'ChatbotDevelopment', cat: 'AI & ML' },
  { name: 'Gen AI Development', slug: 'gen-ai-development', comp: 'GenAiDevelopment', cat: 'AI & ML' },
  { name: 'AI Integrated Software', slug: 'ai-integrated-software', comp: 'AiIntegratedSoftware', cat: 'AI & ML' },
  { name: 'Conversational AI', slug: 'conversational-ai', comp: 'ConversationalAi', cat: 'AI & ML' },
  
  { name: 'PHP Development', slug: 'php-development', comp: 'PhpDevelopment', cat: 'Web' },
  { name: 'Python Development', slug: 'python-development', comp: 'PythonDevelopment', cat: 'Web' },
  { name: 'Node JS Development', slug: 'node-js-development', comp: 'NodeJsDevelopment', cat: 'Web' },
  { name: 'CMS Development', slug: 'cms-development', comp: 'CmsDevelopment', cat: 'Web' },
  { name: 'WordPress Development', slug: 'wordpress-development', comp: 'WordPressDevelopment', cat: 'Web' },
  
  { name: 'eCommerce Dev', slug: 'ecommerce-development', comp: 'EcommerceDevelopment', cat: 'Ecommerce' },
  { name: 'eCommerce Design', slug: 'ecommerce-design', comp: 'EcommerceDesign', cat: 'Ecommerce' },
  { name: 'eCommerce Implementation', slug: 'ecommerce-implementation', comp: 'EcommerceImplementation', cat: 'Ecommerce' },
  { name: 'WooCommerce', slug: 'woocommerce-development', comp: 'WoocommerceDevelopment', cat: 'Ecommerce' },
  { name: 'Shopify Dev', slug: 'shopify-development', comp: 'ShopifyDevelopment', cat: 'Ecommerce' },
  
  { name: 'Android Development', slug: 'android-development', comp: 'AndroidDevelopment', cat: 'Mobile' },
  { name: 'iOS Development', slug: 'ios-development', comp: 'IosDevelopment', cat: 'Mobile' },
  { name: 'Mobile App Devs', slug: 'mobile-app-development', comp: 'MobileAppDevelopment', cat: 'Mobile' },
  { name: 'React Native Development', slug: 'react-native-development', comp: 'ReactNativeDevelopment', cat: 'Mobile' },
  
  { name: 'SaaS Development', slug: 'saas-development', comp: 'SaasDevelopment', cat: 'Software' },
  { name: 'ERP Software', slug: 'erp-software-development', comp: 'ErpSoftwareDevelopment', cat: 'Software' },
  { name: 'CRM Systems', slug: 'crm-systems-development', comp: 'CrmSystemsDevelopment', cat: 'Software' },
  { name: 'Enterprise Software', slug: 'enterprise-software-development', comp: 'EnterpriseSoftwareDevelopment', cat: 'Software' },
  { name: 'Custom Software', slug: 'custom-software-development', comp: 'CustomSoftwareDevelopment', cat: 'Software' },
  { name: 'MVP Development', slug: 'mvp-development', comp: 'MvpDevelopment', cat: 'Software' }
];

const categoryData = {
  'AI & ML': {
    ticker: ['✦ OPENAI API', '✦ LLAMA 3', '✦ LANGCHAIN', '✦ VECTOR DATABASES', '✦ HUGGINGFACE', '✦ CUSTOM ML MODELS'],
    q1: "How can AI integration improve my business workflows?",
    a1: "AI can automate repetitive tasks, provide 24/7 intelligent customer support, and extract insights from large datasets, significantly reducing operational costs.",
    q2: "Do you build custom models or use existing APIs?",
    a2: "We do both. For rapid deployment, we integrate powerful APIs like OpenAI or Anthropic. For highly specialized tasks, we can fine-tune open-source models like LLaMA."
  },
  'Web': {
    ticker: ['✦ NEXT.JS', '✦ REACT', '✦ NODE.JS', '✦ PYTHON / DJANGO', '✦ PHP / LARAVEL', '✦ POSTGRESQL'],
    q1: "Will the web application be mobile-friendly and responsive?",
    a1: "Absolutely. Every web application we build is designed with a mobile-first approach, ensuring it looks and works perfectly across all devices and screen sizes.",
    q2: "How long does it take to develop a custom web platform?",
    a2: "A standard MVP takes 4-6 weeks. Complex enterprise platforms with multiple integrations and roles can take 2-4 months depending on the defined scope."
  },
  'Ecommerce': {
    ticker: ['✦ SHOPIFY PLUS', '✦ WOOCOMMERCE', '✦ STRIPE INTEGRATION', '✦ CUSTOM CHECKOUTS', '✦ INVENTORY SYNC', '✦ HEADLESS COMMERCE'],
    q1: "Can you integrate our existing inventory management system?",
    a1: "Yes, we build robust API integrations to connect your new eCommerce storefront with your existing ERP, CRM, or inventory management systems.",
    q2: "Do you optimize eCommerce sites for conversions and speed?",
    a2: "Speed and UX are our top priorities for eCommerce. We ensure fast load times, frictionless checkouts, and optimized product pages to maximize your conversion rate."
  },
  'Mobile': {
    ticker: ['✦ REACT NATIVE', '✦ FLUTTER', '✦ SWIFT (IOS)', '✦ KOTLIN (ANDROID)', '✦ FIREBASE', '✦ APP STORE DEPLOYMENT'],
    q1: "Do you build native or cross-platform applications?",
    a1: "We specialize in both. We recommend cross-platform frameworks like React Native for faster time-to-market across iOS and Android, but we also build native apps for specialized performance needs.",
    q2: "Will you help us launch the app on the App Store and Google Play?",
    a2: "Yes, our service includes end-to-end deployment. We handle the submission process, asset guidelines, and approval processes for both Apple and Google stores."
  },
  'Software': {
    ticker: ['✦ SAAS ARCHITECTURE', '✦ MULTI-TENANT SYSTEMS', '✦ CLOUD DEPLOYMENT', '✦ AWS / GCP', '✦ MICROSERVICES', '✦ SECURE APIS'],
    q1: "Who owns the source code once the software is finished?",
    a1: "You do. Upon final payment, 100% of the Intellectual Property (IP) and source code ownership is transferred to you.",
    q2: "How do you ensure the software is secure and scalable?",
    a2: "We follow industry-standard security practices (OWASP), implement robust authentication, and design cloud-native architectures that scale automatically as your user base grows."
  }
};

const outputData = servicesInput.map(s => {
  const cat = categoryData[s.cat];
  
  return {
    componentName: s.comp,
    slug: s.slug,
    seoTitle: `${s.name} Services | NOVADESK`,
    seoDesc: `Expert ${s.name} tailored for startups and enterprises. We build secure, scalable, and high-performance solutions. Get a free consultation today.`,
    seoKeywords: `${s.name.toLowerCase()}, custom ${s.name.toLowerCase()}, ${s.cat.toLowerCase()} development company, hire developers`,
    
    heroH1: s.name.split(' ').slice(0, -1).join(' ') || s.name,
    heroBlue: s.name.split(' ').slice(-1).join(' '),
    heroDesc: `NOVADESK delivers professional ${s.name} solutions designed to scale. From architecture to deployment, we build high-performance systems for modern businesses.`,
    
    tickerItems: cat.ticker,
    
    expertiseH2: `What's Included in Our ${s.name} Services`,
    expertiseDesc: `We cover the entire lifecycle of ${s.name}. Our modular approach ensures that your product is secure, fast, and easy to maintain as your business grows.`,
    
    apiCtaH2: `Scale Faster With Our<br/>${s.name} Expertise`,
    apiCtaDesc: `Partner with a team that understands the nuances of ${s.name}. We build architectures that support millions of users without breaking a sweat.`,
    
    processH2: `Inside Our ${s.name}<br/>Process`,
    
    faqs: [
      {
        q: `Why should we choose NOVADESK for ${s.name}?`,
        a: `We bring deep engineering expertise without the agency bloat. You get direct access to senior developers who understand both the technical and business sides of ${s.name}.`
      },
      {
        q: cat.q1,
        a: cat.a1
      },
      {
        q: cat.q2,
        a: cat.a2
      },
      {
        q: "What happens after the project is deployed?",
        a: "We offer dedicated post-launch support and maintenance packages. We ensure your system stays updated, secure, and running smoothly."
      }
    ]
  };
});

fs.writeFileSync(path.join(__dirname, 'services-data.json'), JSON.stringify(outputData, null, 2), 'utf8');
console.log('services-data.json generated successfully with ' + outputData.length + ' services.');
