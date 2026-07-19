import React from 'react';
import { BlockRenderer } from './BlockRenderer.jsx';

/**
 * BlogContent — renders the full array of content blocks for a blog post.
 *
 * This component is intentionally thin — it delegates all rendering
 * to BlockRenderer. The BlogContent wrapper adds the CSS class and
 * semantic article element.
 *
 * @param {import('../../types/blog').ContentBlock[]} blocks
 */
export function BlogContent({ blocks = [] }) {
  if (!blocks.length) {
    return (
      <div className="blog-content">
        <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
          No content available for this post.
        </p>
      </div>
    );
  }

  return (
    <article className="blog-content" aria-label="Blog post content">
      {blocks.map((block, idx) => (
        <BlockRenderer key={`${block.type}-${idx}`} block={block} />
      ))}
    </article>
  );
}

export default BlogContent;
