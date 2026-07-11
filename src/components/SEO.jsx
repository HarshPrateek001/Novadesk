import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, schema }) {
  const siteTitle = "NovaDesk — Premium Tech Pods & Software Agency";
  const defaultDescription = "NovaDesk is a premier software engineering agency. We configure highly optimized offshore teams for businesses requiring custom Web apps, mobile systems, and AI deployments.";
  
  const pageTitle = title ? `${title} | NovaDesk` : siteTitle;
  const pageDescription = description || defaultDescription;
  const pageUrl = url ? `https://www.novadesk.site${url}` : "https://www.novadesk.site";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />

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
