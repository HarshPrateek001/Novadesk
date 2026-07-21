const fs = require('fs');

const paths = [
  '/',
  '/about-us',
  '/case-studies',
  '/contact-us',
  '/privacy-policy',
  '/terms',
  '/services/full-stack-development',
  '/services/web-application-development',
  '/services/react-js-development',
  '/services/chatbot-development',
  '/services/gen-ai-development',
  '/services/ai-integrated-software',
  '/services/conversational-ai',
  '/services/php-development',
  '/services/python-development',
  '/services/node-js-development',
  '/services/cms-development',
  '/services/wordpress-development',
  '/services/ecommerce-development',
  '/services/ecommerce-design',
  '/services/ecommerce-implementation',
  '/services/woocommerce-development',
  '/services/shopify-development',
  '/services/android-development',
  '/services/ios-development',
  '/services/mobile-app-development',
  '/services/react-native-development',
  '/services/saas-development',
  '/services/erp-software-development',
  '/services/crm-systems-development',
  '/services/enterprise-software-development',
  '/services/custom-software-development',
  '/services/mvp-development'
];

const baseUrl = 'https://www.novadesk.site';

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/services') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('d:\\Personal\\Agency\\NOVADESK\\public\\sitemap.xml', xml);
console.log('Sitemap generated.');
