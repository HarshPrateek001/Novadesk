import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url, schema, jsonLd, author, breadcrumbs, noindex = false }) {
  const siteTitle = "NovaDesk | Websites, Software & Digital Products Built for Growth";
  const defaultDescription = "NovaDesk is a software and web development agency engineering custom websites, e-commerce storefronts, web applications, and digital products for businesses and startups.";
  const defaultImage = "https://www.novadesk.site/novadesk_team_5_members_hero.webp";
  
  const pageTitle = title 
    ? (title.includes('NovaDesk') ? title : `${title} | NovaDesk`) 
    : siteTitle;
  const pageDescription = description || defaultDescription;
  
  const defaultKeywords = "web development agency, custom software development, Next.js React developers, ecommerce development, startup MVP development, NovaDesk";

  const pageKeywords = keywords || defaultKeywords;
  const pageUrl = url ? (url.startsWith('http') ? url : `https://www.novadesk.site${url}`) : "https://www.novadesk.site";
  const pageImage = image || defaultImage;
  const pageAuthor = author || "Harsh Prateek";

  // Support both single schema object, array of schemas, and jsonLd prop
  const activeSchema = schema || jsonLd;
  const schemas = activeSchema ? (Array.isArray(activeSchema) ? [...activeSchema] : [activeSchema]) : [];

  // Automatically inject BreadcrumbList schema if breadcrumbs are provided
  if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": b.name,
        "item": b.url.startsWith('http') ? b.url : `https://www.novadesk.site${b.url}`
      }))
    });
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta 
        name="robots" 
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} 
      />
      <meta name="author" content={pageAuthor} />

      {/* Regional Meta Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Kolkata, India" />
      
      {/* Thumbnail & Image Links for Search Engine Snippets */}
      <link rel="image_src" href={pageImage} />
      <meta name="thumbnail" content={pageImage} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content="NovaDesk - Software & Web Development Agency" />
      <meta property="og:site_name" content="NovaDesk" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />

      <link rel="canonical" href={pageUrl} />

      {/* JSON-LD Schemas — one <script> per schema for Google compliance */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
