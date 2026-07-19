import React from 'react';
import { BlogCard } from './BlogCard.jsx';

/**
 * RelatedPosts — grid of related blog posts shown below a post's content.
 *
 * @param {import('../../types/blog').BlogPost[]} posts - Related posts array
 * @param {string} title - Section heading
 */
export function RelatedPosts({ posts = [], title = 'Related Articles' }) {
  if (!posts.length) return null;

  return (
    <section className="related-posts" aria-label="Related articles">
      <h2 className="related-posts__title">{title}</h2>
      <div className="related-posts__grid">
        {posts.map((post) => (
          <BlogCard key={post.slug} blog={post} />
        ))}
      </div>
    </section>
  );
}

export default RelatedPosts;
