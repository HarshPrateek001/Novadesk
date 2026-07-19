import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * BlogNotFound — 404 page shown when a blog slug doesn't match any JSON file.
 *
 * Renders a friendly error with navigation back to the blog listing.
 * This is NEVER shown for valid slugs — it's purely a safety net.
 */
export default function BlogNotFound() {
  return (
    <>
      <Helmet>
        <title>Article Not Found | NovaDesk Blog</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="blog-not-found">
        <div className="blog-not-found__code" aria-hidden="true">404</div>
        <h1 className="blog-not-found__title">Article Not Found</h1>
        <p className="blog-not-found__text">
          The blog post you're looking for doesn't exist or may have been moved.
          Browse our latest articles below.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/blog" className="btn-primary">
            Browse All Articles
          </Link>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
