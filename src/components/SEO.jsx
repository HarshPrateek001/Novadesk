import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url, schema }) {
  const siteTitle = "NovaDesk — Premium Tech Pods & Software Agency";
  const defaultDescription = "NovaDesk is a premier software engineering agency. We configure highly optimized offshore teams for businesses requiring custom Web apps, mobile systems, and AI deployments.";
  const defaultImage = "https://www.novadesk.site/hero-my-image.png"; // Fallback image
  
  const pageTitle = title ? `${title} | NovaDesk` : siteTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || "NovaDesk, software agency, custom web development, mobile app development, AI solutions";
  const pageUrl = url ? `https://www.novadesk.site${url}` : "https://www.novadesk.site";
  const pageImage = image || defaultImage;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="NovaDesk" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />

      <link rel="canonical" href={pageUrl} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
