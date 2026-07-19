import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatReadTime } from '../../utils/blogSeo.js';

/**
 * LatestBlogs — sidebar or section showing the most recent blog posts.
 * Used as a compact list, not a card grid.
 *
 * @param {import('../../types/blog').BlogPost[]} blogs
 * @param {string} title - Section heading
 */
export function LatestBlogs({ blogs = [], title = 'Latest Articles' }) {
  if (!blogs.length) return null;

  return (
    <aside className="latest-blogs" aria-label="Latest blog posts">
      <h3 style={{
        fontSize: '13px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--color-text-muted)',
        marginBottom: '16px',
      }}>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {blogs.map((blog) => (
          <li key={blog.slug} style={{ marginBottom: '20px' }}>
            <Link
              to={`/blog/${blog.slug}`}
              style={{ display: 'flex', gap: '12px', textDecoration: 'none', color: 'inherit' }}
            >
              {/* Thumbnail */}
              <div style={{
                width: '72px',
                height: '56px',
                borderRadius: '8px',
                overflow: 'hidden',
                flexShrink: 0,
                background: 'var(--color-light-bg)',
              }}>
                <img
                  src={blog.thumbnail || blog.coverImage}
                  alt={blog.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: 'var(--color-text-dark)',
                  lineHeight: '1.35',
                  marginBottom: '4px',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}>
                  {blog.title}
                </p>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>
                  {formatDate(blog.publishDate)} · {formatReadTime(blog.readTime)}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default LatestBlogs;
