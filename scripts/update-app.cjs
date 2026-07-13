const fs = require('fs');
const path = require('path');

const servicesInput = [
  { slug: 'chatbot-development', comp: 'ChatbotDevelopment' },
  { slug: 'gen-ai-development', comp: 'GenAiDevelopment' },
  { slug: 'ai-integrated-software', comp: 'AiIntegratedSoftware' },
  { slug: 'conversational-ai', comp: 'ConversationalAi' },
  { slug: 'php-development', comp: 'PhpDevelopment' },
  { slug: 'python-development', comp: 'PythonDevelopment' },
  { slug: 'node-js-development', comp: 'NodeJsDevelopment' },
  { slug: 'cms-development', comp: 'CmsDevelopment' },
  { slug: 'wordpress-development', comp: 'WordPressDevelopment' },
  { slug: 'ecommerce-development', comp: 'EcommerceDevelopment' },
  { slug: 'ecommerce-design', comp: 'EcommerceDesign' },
  { slug: 'ecommerce-implementation', comp: 'EcommerceImplementation' },
  { slug: 'woocommerce-development', comp: 'WoocommerceDevelopment' },
  { slug: 'shopify-development', comp: 'ShopifyDevelopment' },
  { slug: 'android-development', comp: 'AndroidDevelopment' },
  { slug: 'ios-development', comp: 'IosDevelopment' },
  { slug: 'mobile-app-development', comp: 'MobileAppDevelopment' },
  { slug: 'react-native-development', comp: 'ReactNativeDevelopment' },
  { slug: 'saas-development', comp: 'SaasDevelopment' },
  { slug: 'erp-software-development', comp: 'ErpSoftwareDevelopment' },
  { slug: 'crm-systems-development', comp: 'CrmSystemsDevelopment' },
  { slug: 'enterprise-software-development', comp: 'EnterpriseSoftwareDevelopment' },
  { slug: 'custom-software-development', comp: 'CustomSoftwareDevelopment' },
  { slug: 'mvp-development', comp: 'MvpDevelopment' }
];

let appFile = fs.readFileSync(path.join(__dirname, '../src/App.jsx'), 'utf8');

// Filter out already imported (FullStackDevelopment, WebApplicationDevelopment, ReactJsDevelopment aren't in this list ideally but if they are we handle it)
const toImport = servicesInput.filter(s => !appFile.includes(s.comp));

const importsStr = toImport.map(s => `import ${s.comp} from './pages/services/${s.comp}';`).join('\\n');
const routesStr = toImport.map(s => `              <Route path="/services/${s.slug}" element={<${s.comp} />} />`).join('\\n');

appFile = appFile.replace(/import ReactJsDevelopment from '\.\/pages\/services\/ReactJsDevelopment';/, `import ReactJsDevelopment from './pages/services/ReactJsDevelopment';\\n${importsStr}`);

appFile = appFile.replace(/<Route path="\/services\/react-js-development" element={<ReactJsDevelopment \/>} \/>/, `<Route path="/services/react-js-development" element={<ReactJsDevelopment />} />\\n${routesStr}`);

fs.writeFileSync(path.join(__dirname, '../src/App.jsx'), appFile, 'utf8');
console.log('App.jsx updated with all routes');
