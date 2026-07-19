import React from 'react';

/**
 * BlogSkeleton — loading placeholder for blog cards.
 * Uses shimmer animation defined in blog.css.
 * @param {number} count - Number of skeleton cards to render
 */
export function BlogSkeleton({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="skeleton-card">
          <div className="skeleton skeleton-card__image" />
          <div className="skeleton-card__body">
            <div className="skeleton skeleton-line skeleton-line--short" style={{ marginBottom: '14px' }} />
            <div className="skeleton skeleton-line skeleton-line--title" />
            <div className="skeleton skeleton-line skeleton-line--full" />
            <div className="skeleton skeleton-line skeleton-line--full" />
            <div className="skeleton skeleton-line skeleton-line--medium" />
          </div>
        </div>
      ))}
    </>
  );
}

/**
 * BlogPostSkeleton — full post page loading skeleton
 */
export function BlogPostSkeleton() {
  return (
    <div style={{ padding: '60px 24px', maxWidth: '760px', margin: '0 auto' }}>
      <div className="skeleton skeleton-line" style={{ height: '14px', width: '30%', marginBottom: '24px' }} />
      <div className="skeleton skeleton-line" style={{ height: '48px', width: '90%', marginBottom: '16px' }} />
      <div className="skeleton skeleton-line" style={{ height: '48px', width: '75%', marginBottom: '28px' }} />
      <div className="skeleton skeleton-line" style={{ height: '20px', width: '100%', marginBottom: '10px' }} />
      <div className="skeleton skeleton-line" style={{ height: '20px', width: '95%', marginBottom: '10px' }} />
      <div className="skeleton skeleton-line" style={{ height: '20px', width: '88%', marginBottom: '40px' }} />
      <div className="skeleton" style={{ height: '360px', borderRadius: '16px', marginBottom: '40px' }} />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} style={{ marginBottom: '16px' }}>
          <div className="skeleton skeleton-line" style={{ height: '16px', width: `${[100, 95, 88, 70][i]}%` }} />
        </div>
      ))}
    </div>
  );
}

export default BlogSkeleton;
