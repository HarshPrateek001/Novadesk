import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url, schema, author }) {
  const siteTitle = "NovaDesk | Custom Software & AI Development Agency by Harsh Prateek";
  const defaultDescription = "Founded by Harsh Prateek, NovaDesk is a premier software engineering studio specializing in custom full-stack web applications, mobile platforms, and enterprise AI integrations.";
  const defaultImage = "https://www.novadesk.site/novadesk_team_5_members_hero.png";
  
  const pageTitle = title 
    ? (title.includes('NovaDesk') ? title : `${title} | NovaDesk`) 
    : siteTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || "Harsh Prateek, Harsh Prateek NovaDesk, Harsh Prateek Developer, Harsh Prateek AI Engineer, NovaDesk, software development agency in India, AI app developers, custom SaaS development, Web app development company, hire offshore developers";
  const pageUrl = url ? (url.startsWith('http') ? url : `https://www.novadesk.site${url}`) : "https://www.novadesk.site";
  const pageImage = image || defaultImage;
  const pageAuthor = author || "Harsh Prateek";

  // Support both single schema object and array of schemas
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={pageAuthor} />
      
      {/* Thumbnail & Image Links for Search Engine Snippets */}
      <link rel="image_src" href={pageImage} />
      <meta name="thumbnail" content={pageImage} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content="Harsh Prateek - Founder & Lead Engineer at NovaDesk" />
      <meta property="og:site_name" content="NovaDesk" />
      <meta property="profile:first_name" content="Harsh" />
      <meta property="profile:last_name" content="Prateek" />

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

