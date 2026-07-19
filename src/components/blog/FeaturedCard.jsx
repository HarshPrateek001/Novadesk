import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryBadge } from './CategoryBadge.jsx';
import { formatDate, formatReadTime } from '../../utils/blogSeo.js';

/**
 * FeaturedCard — large, visually prominent card for featured blog posts.
 * Uses a side-by-side image + content layout on desktop.
 * Stacks vertically on mobile.
 *
 * @param {import('../../types/blog').BlogPost} blog
 */
export function FeaturedCard({ blog }) {
  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="featured-card"
      aria-label={`Featured: ${blog.title}`}
    >
      {/* ─── Image ─── */}
      <div className="featured-card__image-wrap">
        <img
          className="featured-card__image"
          src={blog.coverImage}
          alt={blog.title}
          loading="lazy"
          decoding="async"
        />
        <div className="featured-card__overlay" aria-hidden="true" />
        <span className="featured-card__badge">⭐ Featured</span>
      </div>

      {/* ─── Content ─── */}
      <div className="featured-card__content">
        <div className="featured-card__category">
          <CategoryBadge category={blog.category} active />
        </div>

        <h2 className="featured-card__title">{blog.title}</h2>
        <p className="featured-card__excerpt">{blog.excerpt}</p>

        <div className="featured-card__meta">
          <span>{blog.author.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={blog.publishDate}>{formatDate(blog.publishDate)}</time>
          <span aria-hidden="true">·</span>
          <span>{formatReadTime(blog.readTime)}</span>
        </div>

        <span className="featured-card__cta" aria-hidden="true">
          Read Article <span>→</span>
        </span>
      </div>
    </Link>
  );
}

export default FeaturedCard;
