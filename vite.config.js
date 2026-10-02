import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// https://vite.dev/config/

/**
 * NovaDesk Vite Configuration
 *
 * Custom plugin: `blogSitemapPlugin`
 * ──────────────────────────────────
 * At build time, reads all JSON files from src/blogs/,
 * generates sitemap XML entries for /blog and each /blog/:slug,
 * and writes them to public/sitemap.xml.
 *
 * This runs automatically on every Vercel build.
 * New JSON file → new sitemap entry, no manual work.
 */
function blogSitemapPlugin() {
  return {
    name: 'blog-sitemap',
    closeBundle: async () => {
      try {
        const blogsDir = resolve(__dirname, 'src/blogs')
        const distDir = resolve(__dirname, 'dist')
        const SITE_URL = 'https://www.novadesk.site'

        if (!fs.existsSync(blogsDir)) return

        const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.json'))
        const blogs = files
          .map(f => {
            try {
              const raw = fs.readFileSync(resolve(blogsDir, f), 'utf-8')
              return JSON.parse(raw)
            } catch {
              return null
            }
          })
          .filter(b => b && b.status === 'published' && b.slug)

        // Complete canonical URL registry for sitemap generation
        const staticUrls = [
          { loc: '/', changefreq: 'daily', priority: '1.0' },
          { loc: '/about-us', changefreq: 'weekly', priority: '0.95' },
          { loc: '/get-a-free-quote', changefreq: 'weekly', priority: '0.95' },
          { loc: '/contact-us', changefreq: 'monthly', priority: '0.85' },
          { loc: '/case-studies', changefreq: 'weekly', priority: '0.90' },
          { loc: '/blog', changefreq: 'daily', priority: '0.90' },
          // Priority Commercial Services
          { loc: '/services/web-development', changefreq: 'weekly', priority: '0.95' },
          { loc: '/services/ai-development', changefreq: 'weekly', priority: '0.95' },
          { loc: '/services/ecommerce-development', changefreq: 'weekly', priority: '0.90' },
          { loc: '/services/ui-ux-design', changefreq: 'weekly', priority: '0.90' },
          { loc: '/services/seo-services', changefreq: 'weekly', priority: '0.90' },
          { loc: '/services/website-maintenance', changefreq: 'weekly', priority: '0.90' },
          // Local SEO Locations
          { loc: '/locations/kolkata', changefreq: 'weekly', priority: '0.90' },
          { loc: '/locations/durgapur', changefreq: 'weekly', priority: '0.85' },
          { loc: '/locations/deoghar', changefreq: 'weekly', priority: '0.85' },
          // Specialized Services
          { loc: '/services/chatbot-development', changefreq: 'monthly', priority: '0.85' },
          { loc: '/services/gen-ai-development', changefreq: 'weekly', priority: '0.90' },
          { loc: '/services/ai-integrated-software', changefreq: 'monthly', priority: '0.85' },
          { loc: '/services/conversational-ai', changefreq: 'monthly', priority: '0.85' },
          { loc: '/services/web-application-development', changefreq: 'monthly', priority: '0.85' },
          { loc: '/services/full-stack-development', changefreq: 'monthly', priority: '0.85' },
          { loc: '/services/php-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/cms-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/wordpress-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/ecommerce-design', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/ecommerce-implementation', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/woocommerce-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/shopify-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/android-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/ios-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/mobile-app-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/react-native-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/mvp-development', changefreq: 'weekly', priority: '0.90' },
          { loc: '/services/saas-development', changefreq: 'monthly', priority: '0.85' },
          { loc: '/services/erp-software-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/crm-systems-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/enterprise-software-development', changefreq: 'monthly', priority: '0.80' },
          { loc: '/services/custom-software-development', changefreq: 'monthly', priority: '0.80' },
          // Industry
          { loc: '/industries/fintech', changefreq: 'monthly', priority: '0.85' },
          // Legal
          { loc: '/privacy-policy', changefreq: 'yearly', priority: '0.30' },
          { loc: '/terms', changefreq: 'yearly', priority: '0.30' }
        ]

        const staticEntries = staticUrls
          .map(u => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`)
          .join('\n')

        const blogEntries = blogs
          .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
          .map(b => `  <url>
    <loc>${SITE_URL}/blog/${b.slug}</loc>
    <lastmod>${b.updatedDate || b.publishDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`)
          .join('\n')

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${blogEntries}
</urlset>`

        if (fs.existsSync(distDir)) {
          fs.writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap, 'utf-8')
          console.log(`[blog-sitemap] ✅ Generated sitemap.xml with ${blogs.length} blog entries`)
        }

        // Also generate RSS feed
        const rssItems = blogs
          .slice(0, 20)
          .map(b => `  <item>
    <title><![CDATA[${b.title}]]></title>
    <link>${SITE_URL}/blog/${b.slug}</link>
    <guid isPermaLink="true">${SITE_URL}/blog/${b.slug}</guid>
    <description><![CDATA[${b.excerpt}]]></description>
    <pubDate>${new Date(b.publishDate).toUTCString()}</pubDate>
    <category><![CDATA[${b.category}]]></category>
  </item>`)
          .join('\n')

        const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NovaDesk Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Insights on software development, AI, and digital transformation</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`

        if (fs.existsSync(distDir)) {
          fs.writeFileSync(resolve(distDir, 'rss.xml'), rss, 'utf-8')
          console.log(`[blog-sitemap] ✅ Generated rss.xml with ${Math.min(blogs.length, 20)} entries`)
        }
      } catch (err) {
        console.error('[blog-sitemap] ❌ Error generating sitemap/RSS:', err)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    blogSitemapPlugin(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})
