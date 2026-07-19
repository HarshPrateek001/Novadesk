/**
 * NovaDesk Blog Management System — Blog Post Page (/blog/:slug)
 *
 * AUTOMATIC ROUTING:
 * ──────────────────
 * This single route handles ALL blog posts dynamically.
 * - Reads :slug from the URL
 * - Loads the matching blog from the JSON provider
 * - Renders all content blocks via BlockRenderer
 * - Generates full SEO metadata automatically
 *
 * A developer NEVER creates a new page for a new blog post.
 * Only the JSON file needs to be added.
 *
 * Features:
 *  - Full Article JSON-LD schema
 *  - BreadcrumbList schema
 *  - Open Graph + Twitter Card meta
 *  - Canonical URL
 *  - Sticky Table of Contents sidebar
 *  - Author card
 *  - Share buttons
 *  - Related posts
 *  - Skeleton loading
 *  - 404 for invalid slugs
 */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useBlogs } from '../../context/BlogContext.jsx';

// Components
import { BlogHero } from '../../components/blog/BlogHero.jsx';
import { BlogContent } from '../../components/blog/BlogContent.jsx';
import { TableOfContents } from '../../components/blog/TableOfContents.jsx';
import { AuthorCard } from '../../components/blog/AuthorCard.jsx';
import { ShareButtons } from '../../components/blog/ShareButtons.jsx';
import { RelatedPosts } from '../../components/blog/RelatedPosts.jsx';
import { LatestBlogs } from '../../components/blog/LatestBlogs.jsx';
import { NewsletterSection } from '../../components/blog/NewsletterSection.jsx';
import { BlogPostSkeleton } from '../../components/blog/BlogSkeleton.jsx';
import BlogNotFound from './BlogNotFound.jsx';

// SEO utilities
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateSiteUrl,
} from '../../utils/blogSeo.js';

// CSS
import '../../components/blog/blog.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const { getBlogBySlug, getRelatedBlogs, getLatestBlogs } = useBlogs();

  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Fetch the blog post and related data whenever slug changes
  useEffect(() => {
    async function loadPost() {
      setIsLoading(true);
      setNotFound(false);
      setBlog(null);

      try {
        const post = await getBlogBySlug(slug);
        if (!post) {
          setNotFound(true);
          return;
        }

        setBlog(post);

        // Load related + latest in parallel
        const [related, latest] = await Promise.all([
          getRelatedBlogs(post, 3),
          getLatestBlogs(5),
        ]);
        setRelatedPosts(related);
        // Exclude current post from latest
        setLatestPosts(latest.filter((p) => p.slug !== slug));
      } catch (err) {
        console.error('[BlogPostPage] Error loading post:', err);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadPost();
  }, [slug, getBlogBySlug, getRelatedBlogs, getLatestBlogs]);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // ── Loading state
  if (isLoading) {
    return (
      <div className="blog-post-page">
        <BlogPostSkeleton />
      </div>
    );
  }

  // ── 404 state
  if (notFound || !blog) {
    return <BlogNotFound />;
  }

  // ── Generate SEO data
  const canonicalUrl = generateSiteUrl(`/blog/${blog.slug}`);
  const articleSchema = generateArticleSchema(blog);
  const breadcrumbSchema = generateBreadcrumbSchema(blog);

  return (
    <>
      {/* ─── SEO / Meta Tags ─── */}
      <Helmet>
        {/* Title */}
        <title>{blog.seoTitle || `${blog.title} | NovaDesk`}</title>

        {/* Standard Meta */}
        <meta name="description" content={blog.seoDescription || blog.description} />
        <meta name="keywords" content={blog.tags.join(', ')} />
        <meta name="author" content={blog.author.name} />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.seoTitle || blog.title} />
        <meta property="og:description" content={blog.seoDescription || blog.description} />
        <meta property="og:image" content={blog.coverImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="NovaDesk" />
        <meta property="article:published_time" content={blog.publishDate} />
        <meta property="article:modified_time" content={blog.updatedDate || blog.publishDate} />
        <meta property="article:author" content={blog.author.name} />
        <meta property="article:section" content={blog.category} />
        {blog.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.seoTitle || blog.title} />
        <meta name="twitter:description" content={blog.seoDescription || blog.description} />
        <meta name="twitter:image" content={blog.coverImage} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="blog-post-page">
        {/* ─── Hero ─── */}
        <BlogHero blog={blog} />

        {/* ─── Main Layout: Content + Sidebar ─── */}
        <div className="blog-post-layout">
          {/* ─── Main Content Column ─── */}
          <main>
            {/* Share Buttons — top */}
            <ShareButtons blog={blog} />

            {/* Article Content */}
            <BlogContent blocks={blog.content} />

            {/* Share Buttons — bottom */}
            <ShareButtons blog={blog} />

            {/* Author Bio */}
            <AuthorCard author={blog.author} />

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />

            {/* Newsletter */}
            <NewsletterSection />
          </main>

          {/* ─── Sidebar ─── */}
          <aside>
            {/* Table of Contents */}
            <TableOfContents blocks={blog.content} />

            {/* Latest Posts */}
            {latestPosts.length > 0 && (
              <div style={{ marginTop: '24px' }}>
                <LatestBlogs blogs={latestPosts} title="Latest Articles" />
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
