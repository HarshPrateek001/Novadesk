import React from 'react';
import { Breadcrumb } from './Breadcrumb.jsx';
import { CategoryBadge } from './CategoryBadge.jsx';
import { TagBadge } from './TagBadge.jsx';
import { formatDate, formatReadTime } from '../../utils/blogSeo.js';

/**
 * BlogHero — full-width hero section for a single blog post page.
 *
 * Renders:
 *  - Breadcrumb nav
 *  - Category badge + tags
 *  - Title + excerpt
 *  - Author, date, read time stats
 *  - Cover image with rounded corners
 *
 * @param {import('../../types/blog').BlogPost} blog
 */
export function BlogHero({ blog }) {
  const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const UserIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  return (
    <header className="blog-hero">
      <div className="blog-hero__inner">
        {/* Breadcrumb */}
        <div className="blog-hero__breadcrumb">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: blog.title },
            ]}
          />
        </div>

        {/* Category + Tags */}
        <div className="blog-hero__meta">
          <CategoryBadge category={blog.category} active />
          {blog.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        {/* Title */}
        <h1 className="blog-hero__title">{blog.title}</h1>

        {/* Excerpt */}
        <p className="blog-hero__excerpt">{blog.excerpt}</p>

        {/* Stats */}
        <div className="blog-hero__stats">
          <span className="blog-hero__stat">
            <UserIcon />
            {blog.author.name}
          </span>
          <span aria-hidden="true">·</span>
          <span className="blog-hero__stat">
            <CalendarIcon />
            <time dateTime={blog.publishDate}>{formatDate(blog.publishDate)}</time>
          </span>
          <span aria-hidden="true">·</span>
          <span className="blog-hero__stat">
            <ClockIcon />
            {formatReadTime(blog.readTime)}
          </span>
        </div>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="blog-hero__cover">
            <img
              src={blog.coverImage}
              alt={blog.title}
              loading="eager"
              decoding="async"
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default BlogHero;
