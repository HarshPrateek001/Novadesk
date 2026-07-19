import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryBadge } from './CategoryBadge.jsx';
import { formatDate, formatReadTime } from '../../utils/blogSeo.js';

/**
 * BlogCard — standard blog post card for the listing grid.
 *
 * Renders:
 *  - Thumbnail image (lazy-loaded)
 *  - Category badge
 *  - Title, excerpt
 *  - Author avatar + name
 *  - Date, read time
 *  - "Read More" arrow
 *
 * @param {import('../../types/blog').BlogPost} blog
 */
export function BlogCard({ blog }) {
  /** Generate initials for avatar fallback */
  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  return (
    <Link to={`/blog/${blog.slug}`} className="blog-card" aria-label={`Read: ${blog.title}`} style={{ display: 'flex', flexDirection: 'column' }}>
      {/* ─── Thumbnail ─── */}
      <div className="blog-card__image-wrap">
        <img
          className="blog-card__image"
          src={blog.thumbnail || blog.coverImage}
          alt={blog.title}
          loading="lazy"
          decoding="async"
          width="400"
          height="225"
        />
        <div className="blog-card__category-pill">
          <CategoryBadge category={blog.category} active />
        </div>
      </div>

      {/* ─── Body ─── */}
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <time dateTime={blog.publishDate}>{formatDate(blog.publishDate)}</time>
          <span className="blog-card__meta-sep" aria-hidden="true" />
          <span>{formatReadTime(blog.readTime)}</span>
        </div>

        <h2 className="blog-card__title">{blog.title}</h2>
        <p className="blog-card__excerpt">{blog.excerpt}</p>

        {/* ─── Footer ─── */}
        <div className="blog-card__footer">
          <div className="blog-card__author">
            {blog.author.avatar ? (
              <img
                className="blog-card__author-avatar"
                src={blog.author.avatar}
                alt={blog.author.name}
                loading="lazy"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            ) : (
              <div className="blog-card__author-avatar">
                {getInitials(blog.author.name)}
              </div>
            )}
            <span className="blog-card__author-name">{blog.author.name}</span>
          </div>
          <span className="blog-card__read-more" aria-hidden="true">
            Read More <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
