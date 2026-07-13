const fs = require('fs');
const path = require('path');

const servicesInput = [
  { comp: 'ChatbotDevelopment', cat: 'AI & ML' },
  { comp: 'GenAiDevelopment', cat: 'AI & ML' },
  { comp: 'AiIntegratedSoftware', cat: 'AI & ML' },
  { comp: 'ConversationalAi', cat: 'AI & ML' },
  { comp: 'PhpDevelopment', cat: 'Web' },
  { comp: 'PythonDevelopment', cat: 'Web' },
  { comp: 'NodeJsDevelopment', cat: 'Web' },
  { comp: 'CmsDevelopment', cat: 'Web' },
  { comp: 'WordPressDevelopment', cat: 'Web' },
  { comp: 'EcommerceDevelopment', cat: 'Ecommerce' },
  { comp: 'EcommerceDesign', cat: 'Ecommerce' },
  { comp: 'EcommerceImplementation', cat: 'Ecommerce' },
  { comp: 'WoocommerceDevelopment', cat: 'Ecommerce' },
  { comp: 'ShopifyDevelopment', cat: 'Ecommerce' },
  { comp: 'AndroidDevelopment', cat: 'Mobile' },
  { comp: 'IosDevelopment', cat: 'Mobile' },
  { comp: 'MobileAppDevelopment', cat: 'Mobile' },
  { comp: 'ReactNativeDevelopment', cat: 'Mobile' },
  { comp: 'SaasDevelopment', cat: 'Software' },
  { comp: 'ErpSoftwareDevelopment', cat: 'Software' },
  { comp: 'CrmSystemsDevelopment', cat: 'Software' },
  { comp: 'EnterpriseSoftwareDevelopment', cat: 'Software' },
  { comp: 'CustomSoftwareDevelopment', cat: 'Software' },
  { comp: 'MvpDevelopment', cat: 'Software' }
];

const categoryImages = {
  'AI & ML': '/hero-visual.png',
  'Web': '/webapp_hero_illustration.png',
  'Ecommerce': '/hero_illustration.png',
  'Mobile': '/hero-my-image.png',
  'Software': '/fullstack_hero_illustration.png'
};

const outputDir = path.join(__dirname, '../src/pages/services/');

servicesInput.forEach(service => {
  const filePath = path.join(outputDir, `${service.comp}.jsx`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Default image in template was fullstack_hero_illustration.png
    const targetImage = categoryImages[service.cat];
    content = content.replace(/\/fullstack_hero_illustration\.png/g, targetImage);
    
    // Update alt text to match
    content = content.replace(/alt="Full Stack Development Team"/g, `alt="${service.comp} Team"`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated image for ${service.comp} to ${targetImage}`);
  }
});
