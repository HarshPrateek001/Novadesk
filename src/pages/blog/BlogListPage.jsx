/**
 * NovaDesk Blog Management System — Blog Listing Page (/blog)
 *
 * AUTOMATIC WORKFLOW:
 * ──────────────────
 * 1. Developer drops a new JSON file into src/blogs/
 * 2. Pushes to GitHub
 * 3. Vercel rebuilds
 * 4. This page auto-includes the new post — ZERO code changes
 *
 * Features:
 *  - Featured posts section
 *  - Search bar (debounced)
 *  - Category filter
 *  - Paginated blog grid (9 per page)
 *  - Newsletter section
 *  - Full SEO meta tags
 *  - Skeleton loading
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useBlogs } from '../../context/BlogContext.jsx';

// Components
import { FeaturedCard } from '../../components/blog/FeaturedCard.jsx';
import { BlogCard } from '../../components/blog/BlogCard.jsx';
import { SearchBar } from '../../components/blog/SearchBar.jsx';
import { CategoryBadge } from '../../components/blog/CategoryBadge.jsx';
import { Pagination } from '../../components/blog/Pagination.jsx';
import { NewsletterSection } from '../../components/blog/NewsletterSection.jsx';
import { BlogSkeleton } from '../../components/blog/BlogSkeleton.jsx';

// CSS
import '../../components/blog/blog.css';

const SITE_URL = 'https://www.novadesk.site';
const PAGE_SIZE = 9;

export default function BlogListPage() {
  const { allBlogs, categories, isLoading, getFilteredBlogs, getFeaturedBlogs } = useBlogs();

  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [filteredResult, setFilteredResult] = useState({ blogs: [], total: 0, totalPages: 1 });

  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // ── Load featured blogs on mount
  useEffect(() => {
    if (!isLoading) {
      getFeaturedBlogs().then(setFeaturedBlogs);
    }
  }, [isLoading, getFeaturedBlogs]);

  // ── Re-run filter whenever search/category/page changes
  useEffect(() => {
    if (isLoading) return;
    getFilteredBlogs({
      query: searchQuery,
      category: activeCategory,
      page: currentPage,
      pageSize: PAGE_SIZE,
    }).then(setFilteredResult);
  }, [isLoading, searchQuery, activeCategory, currentPage, getFilteredBlogs]);

  // ── When filters change, reset to page 1
  const handleSearch = useCallback((q) => {
    setSearchQuery(q);
    setCurrentPage(1);
  }, []);

  const handleCategory = useCallback((cat) => {
    setActiveCategory((prev) => (prev === cat ? '' : cat));
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((p) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ── Whether any filter is active
  const hasFilters = searchQuery || activeCategory;

  return (
    <>
      {/* ─── SEO ─── */}
      <Helmet>
        <title>Blog | NovaDesk — Software Development & AI Insights</title>
        <meta
          name="description"
          content="Expert insights on software development, AI, web applications, and digital strategy from the NovaDesk engineering team."
        />
        <meta property="og:title" content="NovaDesk Blog" />
        <meta property="og:description" content="Expert insights on software, AI, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <link rel="alternate" type="application/rss+xml" title="NovaDesk Blog RSS" href={`${SITE_URL}/rss.xml`} />
      </Helmet>

      <div className="blog-page">
        {/* ─── Hero Banner ─── */}
        <div className="blog-page-hero">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="blog-page-hero__tag">📝 NovaDesk Blog</span>
            <h1 className="blog-page-hero__title">
              Insights for the{' '}
              <span style={{ color: 'var(--color-accent)' }}>Digital Age</span>
            </h1>
            <p className="blog-page-hero__subtitle">
              Expert perspectives on software engineering, AI development, and building
              products that scale.
            </p>
          </div>
        </div>

        <div className="container">
          {/* ─── Featured Posts ─── */}
          {!hasFilters && featuredBlogs.length > 0 && (
            <section className="blog-featured-section">
              <h2 className="blog-featured-section__title">Featured</h2>
              {featuredBlogs.slice(0, 1).map((blog) => (
                <FeaturedCard key={blog.slug} blog={blog} />
              ))}
            </section>
          )}

          {/* ─── Search + Filters ─── */}
          <div className="blog-filters">
            <div className="blog-filters__search">
              <SearchBar
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search articles by topic, keyword..."
              />
            </div>
            <div className="blog-filters__categories">
              <CategoryBadge
                category="All"
                active={!activeCategory}
                onClick={() => handleCategory('')}
              />
              {categories.map((cat) => (
                <CategoryBadge
                  key={cat}
                  category={cat}
                  active={activeCategory === cat}
                  onClick={() => handleCategory(cat)}
                />
              ))}
            </div>
          </div>

          {/* ─── Results info ─── */}
          {hasFilters && !isLoading && (
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
              {filteredResult.total} article{filteredResult.total !== 1 ? 's' : ''} found
              {searchQuery ? ` for "${searchQuery}"` : ''}
              {activeCategory ? ` in "${activeCategory}"` : ''}
            </p>
          )}

          {/* ─── Blog Grid ─── */}
          <div className="blog-grid">
            {isLoading ? (
              <BlogSkeleton count={PAGE_SIZE} />
            ) : filteredResult.blogs.length > 0 ? (
              filteredResult.blogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))
            ) : (
              <div className="blog-no-results">
                <div className="blog-empty">
                  <div className="blog-empty__icon">🔍</div>
                  <h3 className="blog-empty__title">No articles found</h3>
                  <p className="blog-empty__text">
                    {hasFilters
                      ? 'Try adjusting your search or clearing the filters.'
                      : 'No published articles yet. Check back soon!'}
                  </p>
                  {hasFilters && (
                    <button
                      style={{ marginTop: '16px' }}
                      className="btn-secondary"
                      onClick={() => { setSearchQuery(''); setActiveCategory(''); setCurrentPage(1); }}
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ─── Pagination ─── */}
          {!isLoading && filteredResult.totalPages > 1 && (
            <Pagination
              page={currentPage}
              totalPages={filteredResult.totalPages}
              onPageChange={handlePageChange}
            />
          )}

          {/* ─── Newsletter ─── */}
          <NewsletterSection />
        </div>
      </div>
    </>
  );
}
