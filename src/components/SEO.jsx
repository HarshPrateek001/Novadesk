import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  keywords,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  ogType = 'website',
  url,
  canonical,
  schema,
  jsonLd,
  author,
  breadcrumbs,
  noindex = false,
  children,
}) {
  const siteTitle = "NovaDesk | Websites, Software & Digital Products Built for Growth";
  const defaultDescription = "NovaDesk is a software and web development agency engineering custom websites, e-commerce storefronts, web applications, and digital products for businesses and startups.";
  const defaultImage = "https://www.novadesk.site/novadesk_team_5_members_hero.webp";
  
  const pageTitle = title 
    ? (title.includes('NovaDesk') ? title : `${title} | NovaDesk`) 
    : siteTitle;
  const pageDescription = description || defaultDescription;
  
  const defaultKeywords = "custom software development company, AI software development agency, web application development services, SaaS product engineering, mobile app development company, ecommerce development agency, NovaDesk";

  const pageKeywords = keywords || defaultKeywords;
  const canonicalTarget = canonical || url;
  const pageUrl = canonicalTarget 
    ? (canonicalTarget.startsWith('http') 
        ? canonicalTarget 
        : `https://www.novadesk.site${canonicalTarget.startsWith('/') ? canonicalTarget : `/${canonicalTarget}`}`) 
    : "https://www.novadesk.site";
  const pageImage = image || defaultImage;
  const pageImageAlt = imageAlt || "NovaDesk - Software & Web Development Agency";
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
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} 
      />
      <meta name="author" content={pageAuthor} />
      
      {/* Thumbnail & Image Links for Search Engine Snippets */}
      <link rel="image_src" href={pageImage} />
      <meta name="thumbnail" content={pageImage} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      {imageWidth ? <meta property="og:image:width" content={String(imageWidth)} /> : null}
      {imageHeight ? <meta property="og:image:height" content={String(imageHeight)} /> : null}
      <meta property="og:image:alt" content={pageImageAlt} />
      <meta property="og:site_name" content="NovaDesk" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageImageAlt} />

      {!noindex ? <link rel="canonical" href={pageUrl} /> : null}

      {children}

      {/* JSON-LD Schemas — one <script> per schema for Google compliance */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
