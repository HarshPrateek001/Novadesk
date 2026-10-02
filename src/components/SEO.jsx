import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url, schema, author, breadcrumbs, noindex = false }) {
  const siteTitle = "NovaDesk | Computer Software Developers, Mobile Application & ERP Development";
  const defaultDescription = "Founded by Harsh Prateek, NovaDesk is a premier computer software development company specializing in mobile application developers, ecommerce website development services, ERP & CRM software solutions across India.";
  const defaultImage = "https://www.novadesk.site/novadesk_team_5_members_hero.webp";
  
  const pageTitle = title 
    ? (title.includes('NovaDesk') ? title : `${title} | NovaDesk`) 
    : siteTitle;
  const pageDescription = description || defaultDescription;
  
  const defaultKeywords = [
    "Internet Website Developers",
    "Mobile Application Developers",
    "Computer Software Developers",
    "Computer Software Dealers",
    "Computer Software Development Companies",
    "Ecommerce Website Development Services",
    "Computer Software Developers For ASP Dot Net",
    "ERP Computer Software Dealers-Tally",
    "Salon & Spa Computer Software Dealers",
    "Computer Software Solution Providers",
    "ERP Computer Software Dealers",
    "Computer Software Developers For Multi Level Marketing",
    "Computer Software Developers For PHP",
    "Computer Software Engineers",
    "ERP Computer Software Developers",
    "Inventory Management Computer Software Dealers",
    "Crm Computer Software Developers",
    "Computer Software Developers In Wap",
    "Computer Software Developers For Embedded System",
    "Corporate Companies For Computer Software",
    "Barcode Computer Software Dealers",
    "Computer Software Developers For School",
    "Computer Software Developers For Hospital",
    "Medical Computer Software Dealers",
    "Computer Software Developers For Medical",
    "Crm Computer Software Dealers",
    "Computer Software Developers For Freelance",
    "Deoghar",
    "Patna",
    "Ranchi",
    "Jamshedpur",
    "Kolkata",
    "Siliguri",
    "Asansol",
    "Durgapur",
    "Delhi",
    "Harsh Prateek",
    "NovaDesk"
  ].join(', ');

  const pageKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const pageUrl = url ? (url.startsWith('http') ? url : `https://www.novadesk.site${url}`) : "https://www.novadesk.site";
  const pageImage = image || defaultImage;
  const pageAuthor = author || "Harsh Prateek";

  // Support both single schema object and array of schemas
  const schemas = schema ? (Array.isArray(schema) ? [...schema] : [schema]) : [];

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

      {/* Regional & National Geographic Meta Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="Deoghar, Patna, Ranchi, Kolkata, Siliguri, Delhi, Asansol, Durgapur, India" />
      <meta name="coverage" content="National: Deoghar, Patna, Ranchi, Jamshedpur, Kolkata, Islampur, Malda, Siliguri, Midnapore, South 24 Parganas, Hooghly, Bolpur, Delhi, Bhubaneshwar, Cuttack, and 40+ Indian Regions" />
      
      {/* Thumbnail & Image Links for Search Engine Snippets */}
      <link rel="image_src" href={pageImage} />
      <meta name="thumbnail" content={pageImage} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content="NovaDesk - Computer Software Developers & AI Studio" />
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
