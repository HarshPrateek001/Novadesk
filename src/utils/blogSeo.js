/**
 * NovaDesk Blog Management System — SEO Utilities
 *
 * Generates structured SEO data for blog posts:
 *   - Article JSON-LD schema (Google)
 *   - BreadcrumbList JSON-LD schema
 *   - Open Graph metadata values
 *   - Canonical URL builder
 *   - RSS 2.0 XML feed
 *   - Sitemap XML entries
 */

const SITE_URL = 'https://www.novadesk.site';
const SITE_NAME = 'NovaDesk';
const SITE_LOGO = 'https://www.novadesk.site/hero-my-image.webp';

// ─────────────────────────────────────────────
// URL BUILDER
// ─────────────────────────────────────────────

/**
 * Build a canonical URL for any path on the NovaDesk domain.
 * @param {string} path - e.g. '/blog/my-post-slug'
 * @returns {string} - Full canonical URL
 */
export function generateSiteUrl(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

// ─────────────────────────────────────────────
// ARTICLE JSON-LD SCHEMA
// ─────────────────────────────────────────────

/**
 * Generate Article structured data for Google rich results.
 * @param {import('../types/blog').BlogPost} blog
 * @returns {Object} - JSON-LD Article schema object
 */
export function generateArticleSchema(blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.description,
    image: [blog.coverImage],
    author: {
      '@type': 'Person',
      name: blog.author.name,
      ...(blog.author.linkedin && { url: blog.author.linkedin }),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO,
      },
    },
    datePublished: blog.publishDate,
    dateModified: blog.updatedDate || blog.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': generateSiteUrl(`/blog/${blog.slug}`),
    },
    url: generateSiteUrl(`/blog/${blog.slug}`),
    keywords: blog.tags.join(', '),
    articleSection: blog.category,
    timeRequired: `PT${blog.readTime}M`,
  };
}

// ─────────────────────────────────────────────
// BREADCRUMB JSON-LD SCHEMA
// ─────────────────────────────────────────────

/**
 * Generate BreadcrumbList structured data.
 * @param {import('../types/blog').BlogPost} blog
 * @returns {Object} - JSON-LD BreadcrumbList schema
 */
export function generateBreadcrumbSchema(blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: generateSiteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: generateSiteUrl('/blog'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.title,
        item: generateSiteUrl(`/blog/${blog.slug}`),
      },
    ],
  };
}

// ─────────────────────────────────────────────
// RSS FEED GENERATOR
// ─────────────────────────────────────────────

/**
 * Generate an RSS 2.0 XML feed from a list of blog posts.
 * This can be served from a build script or a Vite plugin.
 * @param {import('../types/blog').BlogPost[]} blogs
 * @returns {string} - RSS XML string
 */
export function generateRssFeed(blogs) {
  const items = blogs
    .slice(0, 20) // RSS feeds typically show latest 20
    .map(
      (blog) => `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${generateSiteUrl(`/blog/${blog.slug}`)}</link>
      <guid isPermaLink="true">${generateSiteUrl(`/blog/${blog.slug}`)}</guid>
      <description><![CDATA[${blog.excerpt}]]></description>
      <pubDate>${new Date(blog.publishDate).toUTCString()}</pubDate>
      <category><![CDATA[${blog.category}]]></category>
      ${blog.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
      <author>${blog.author.name}</author>
      ${blog.coverImage ? `<enclosure url="${blog.coverImage}" type="image/webp"/>` : ''}
    </item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_NAME} Blog</title>
    <link>${generateSiteUrl('/blog')}</link>
    <description>Insights on software development, AI, and digital transformation from ${SITE_NAME}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${generateSiteUrl('/rss.xml')}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_LOGO}</url>
      <title>${SITE_NAME} Blog</title>
      <link>${generateSiteUrl('/blog')}</link>
    </image>
${items}
  </channel>
</rss>`;
}

// ─────────────────────────────────────────────
// SITEMAP ENTRIES GENERATOR
// ─────────────────────────────────────────────

/**
 * Generate sitemap XML <url> entries for all blog posts.
 * Used by the Vite build plugin to append to public/sitemap.xml.
 * @param {import('../types/blog').BlogPost[]} blogs
 * @returns {string} - XML url entries
 */
export function generateSitemapEntries(blogs) {
  const blogIndexEntry = `
  <url>
    <loc>${generateSiteUrl('/blog')}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;

  const postEntries = blogs
    .map(
      (blog) => `
  <url>
    <loc>${generateSiteUrl(`/blog/${blog.slug}`)}</loc>
    <lastmod>${blog.updatedDate || blog.publishDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('');

  return blogIndexEntry + postEntries;
}

// ─────────────────────────────────────────────
// FORMAT HELPERS
// ─────────────────────────────────────────────

/**
 * Format a date string to a human-readable format.
 * @param {string} dateStr - ISO date string e.g. "2026-07-18"
 * @returns {string} - e.g. "July 18, 2026"
 */
export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format read time to display string.
 * @param {number} minutes
 * @returns {string} - e.g. "5 min read"
 */
export function formatReadTime(minutes) {
  return `${minutes} min read`;
}
