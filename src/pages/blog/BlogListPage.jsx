/**
 * NovaDesk Blog Management System — Editorial Insights Listing Page (/blog)
 *
 * Faithful 1:1 Experion Insights layout (unified dark-blue glow canvas,
 * interactive collapsible Category/Topic pill drawers, 24-column asymmetric
 * bento grid, alternating title slots, Load More pill) styled strictly in
 * NovaDesk's Blue & White combination (#070B2A, #2E29FF, #FFFFFF).
 *
 * Automatic JSON ingestion remains intact via BlogContext (`src/blogs/*.json`).
 */

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useBlogs } from '../../context/BlogContext.jsx';
import { formatReadTime } from '../../utils/blogSeo.js';
import { NewsletterSection } from '../../components/blog/NewsletterSection.jsx';
import '../../components/blog/blog.css';
import '../../components/blog/insights.css';

const SITE_URL = 'https://www.novadesk.site';
const BATCH_SIZE = 7; // 1 complete 4+3 Experion bento block per batch

// Map verified local WebP insight covers for consistent editorial bento framing
const SLUG_INSIGHT_COVER = {
  'ai-integration-in-healthcare-software': '/insights/healthcare-ai.webp',
  'cybersecurity-and-compliance-in-fintech': '/insights/fintech-cybersecurity.webp',
  'cloud-application-modernization-guide': '/insights/cloud-modernization.webp',
  'enterprise-automation-and-data-engineering': '/insights/data-automation.webp',
  'accelerating-dev-with-generative-ai': '/insights/generative-ai-dev.webp',
  'custom-saas-architecture': '/insights/multi-tenant-saas.webp',
  'hiring-react-js-development-company': '/insights/react-engineering.webp',
  'saas-vs-custom-software-which-is-right-for-your-business': '/insights/saas-vs-custom.webp',
  'why-startups-choose-nodejs-for-backend': '/insights/nodejs-backend.webp',
  'how-much-does-custom-software-development-cost': '/insights/software-cost-guide.webp',
  'seo-guide-2026': '/insights/tech-seo-growth.webp',
  'why-your-business-needs-a-website': '/insights/business-web-platform.webp',
};

/**
 * Compute per-card desktop bento column span and alternating title slot
 * so every 24-column row fills completely across full 7-card blocks and trailing rows.
 */
function buildBentoLayouts(total) {
  const layouts = [];
  let offset = 0;

  while (offset < total) {
    const remaining = total - offset;

    if (remaining >= 7) {
      const block = [
        { spanClass: 'nd-span-6', slotMode: 'top' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-6', slotMode: 'top' },
        { spanClass: 'nd-span-9', slotMode: 'top' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-9', slotMode: 'bottom' },
      ];
      layouts.push(...block);
      offset += 7;
    } else if (remaining === 6) {
      layouts.push(
        { spanClass: 'nd-span-6', slotMode: 'top' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-6', slotMode: 'top' },
        { spanClass: 'nd-span-12', slotMode: 'top' },
        { spanClass: 'nd-span-12', slotMode: 'bottom' }
      );
      offset += 6;
    } else if (remaining === 5) {
      layouts.push(
        { spanClass: 'nd-span-9', slotMode: 'top' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-9', slotMode: 'bottom' },
        { spanClass: 'nd-span-12', slotMode: 'top' },
        { spanClass: 'nd-span-12', slotMode: 'bottom' }
      );
      offset += 5;
    } else if (remaining === 4) {
      layouts.push(
        { spanClass: 'nd-span-6', slotMode: 'top' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-6', slotMode: 'top' }
      );
      offset += 4;
    } else if (remaining === 3) {
      layouts.push(
        { spanClass: 'nd-span-9', slotMode: 'top' },
        { spanClass: 'nd-span-6', slotMode: 'bottom' },
        { spanClass: 'nd-span-9', slotMode: 'bottom' }
      );
      offset += 3;
    } else if (remaining === 2) {
      layouts.push(
        { spanClass: 'nd-span-12', slotMode: 'top' },
        { spanClass: 'nd-span-12', slotMode: 'bottom' }
      );
      offset += 2;
    } else {
      layouts.push({ spanClass: 'nd-span-24', slotMode: 'top' });
      offset += 1;
    }
  }

  return layouts;
}

export default function BlogListPage() {
  const { allBlogs, categories, tags, isLoading } = useBlogs();

  // Filter / search / sort / drawer states
  const [openDrawer, setOpenDrawer] = useState(null); // 'category' | 'topic' | null
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTopic, setActiveTopic] = useState('All');
  const [searchInput, setSearchInput] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent'); // 'recent' | 'alpha' | 'readTime'
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [isGridAnimating, setIsGridAnimating] = useState(false);

  const searchTimerRef = useRef(null);
  const animTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
    };
  }, []);

  const triggerGridTransition = useCallback((fn) => {
    if (animTimerRef.current) clearTimeout(animTimerRef.current);
    setIsGridAnimating(true);
    animTimerRef.current = setTimeout(() => {
      fn();
      requestAnimationFrame(() => setIsGridAnimating(false));
    }, 180);
  }, []);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchInput(val);
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => {
      setDebouncedQuery(val.trim());
      setVisibleCount(BATCH_SIZE);
    }, 220);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    setDebouncedQuery('');
    setVisibleCount(BATCH_SIZE);
  };

  const handleSelectCategory = (cat) => {
    const next = cat === activeCategory && cat !== 'All' ? 'All' : cat;
    triggerGridTransition(() => {
      setActiveCategory(next);
      setVisibleCount(BATCH_SIZE);
    });
  };

  const handleSelectTopic = (topic) => {
    const next = topic === activeTopic && topic !== 'All' ? 'All' : topic;
    triggerGridTransition(() => {
      setActiveTopic(next);
      setVisibleCount(BATCH_SIZE);
    });
  };

  const handleSortChange = (e) => {
    const nextSort = e.target.value;
    triggerGridTransition(() => {
      setSortBy(nextSort);
    });
  };

  const resetAllFilters = () => {
    triggerGridTransition(() => {
      setActiveCategory('All');
      setActiveTopic('All');
      setSearchInput('');
      setDebouncedQuery('');
      setSortBy('recent');
      setVisibleCount(BATCH_SIZE);
    });
  };

  // Curated topic list ordered by frequency across articles
  const topicOptions = useMemo(() => {
    if (!tags || tags.length === 0) return [];
    const counts = new Map();
    allBlogs.forEach((b) => {
      (b.tags || []).forEach((t) => {
        counts.set(t, (counts.get(t) || 0) + 1);
      });
    });
    return [...tags].sort((a, b) => (counts.get(b) || 0) - (counts.get(a) || 0) || a.localeCompare(b));
  }, [allBlogs, tags]);

  // Filter & sort pipeline
  const processedBlogs = useMemo(() => {
    let list = [...allBlogs];

    if (activeCategory !== 'All') {
      list = list.filter((b) => b.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (activeTopic !== 'All') {
      list = list.filter((b) =>
        (b.tags || []).some((t) => t.toLowerCase() === activeTopic.toLowerCase())
      );
    }

    if (debouncedQuery.length >= 2) {
      const q = debouncedQuery.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          (b.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'alpha') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'readTime') {
      list.sort((a, b) => (a.readTime || 0) - (b.readTime || 0));
    } else {
      list.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    }

    return list;
  }, [allBlogs, activeCategory, activeTopic, debouncedQuery, sortBy]);

  const visibleBlogs = useMemo(
    () => processedBlogs.slice(0, visibleCount),
    [processedBlogs, visibleCount]
  );

  const bentoLayouts = useMemo(() => buildBentoLayouts(visibleBlogs.length), [visibleBlogs.length]);

  const remainingCount = Math.max(0, processedBlogs.length - visibleBlogs.length);
  const hasFilters = activeCategory !== 'All' || activeTopic !== 'All' || debouncedQuery.length >= 2;

  return (
    <>
      {/* ─── SEO ─── */}
      <Helmet>
        <title>Blog &amp; Engineering Insights | NovaDesk</title>
        <meta
          name="description"
          content="Engineering intelligence and fresh perspectives on AI, cloud modernization, custom software, FinTech security, and digital growth from NovaDesk."
        />
        <meta property="og:title" content="NovaDesk Blog & Engineering Insights" />
        <meta property="og:description" content="Fresh thinking on AI, cloud, and digital business to help you decide what to build next." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <link rel="alternate" type="application/rss+xml" title="NovaDesk Blog RSS" href={`${SITE_URL}/rss.xml`} />
      </Helmet>

      <div className="nd-insights-page">
        {/* ─── Unified Experion Insights Canvas (NovaDesk Midnight + Royal Blue Glow & White Text) ─── */}
        <section className="nd-insights-wrap">
          <div className="nd-insights-bg-glow" aria-hidden="true" />
          <div className="nd-insights-bg-glow-secondary" aria-hidden="true" />

          <div className="container">
            <header className="nd-insights-header">
              <span className="nd-insights-eyebrow">NOVADESK INSIGHTS</span>
              <h1 className="nd-insights-title">
                Engineering Intelligence. Every Day.
              </h1>
              <p className="nd-insights-desc">
                Fresh thinking on AI, cloud engineering, custom software, and digital growth to help you decide what to build next.
              </p>
            </header>

            {/* ─── 4-Control Experion Interactive Filter Toolbar ─── */}
            <div className="nd-insights-filter-system">
              <div className="nd-main-filter-row">
                {/* 1. Category Trigger */}
                <div className={`nd-filter-box ${openDrawer === 'category' ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="nd-filter-trigger"
                    onClick={() => setOpenDrawer((prev) => (prev === 'category' ? null : 'category'))}
                    aria-expanded={openDrawer === 'category'}
                  >
                    <span>
                      Category
                      {activeCategory !== 'All' && (
                        <span className="nd-filter-dot" aria-hidden="true" />
                      )}
                    </span>
                    <span className="nd-filter-sign" aria-hidden="true">
                      {openDrawer === 'category' ? '−' : '+'}
                    </span>
                  </button>
                </div>

                {/* 2. Topic Trigger */}
                <div className={`nd-filter-box ${openDrawer === 'topic' ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="nd-filter-trigger"
                    onClick={() => setOpenDrawer((prev) => (prev === 'topic' ? null : 'topic'))}
                    aria-expanded={openDrawer === 'topic'}
                  >
                    <span>
                      Topic
                      {activeTopic !== 'All' && (
                        <span className="nd-filter-dot" aria-hidden="true" />
                      )}
                    </span>
                    <span className="nd-filter-sign" aria-hidden="true">
                      {openDrawer === 'topic' ? '−' : '+'}
                    </span>
                  </button>
                </div>

                {/* 3. Search Input */}
                <div className="nd-search-filter-box">
                  <input
                    type="search"
                    value={searchInput}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    aria-label="Search blog insights"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  {searchInput ? (
                    <button
                      type="button"
                      className="nd-search-clear-btn"
                      onClick={handleClearSearch}
                      aria-label="Clear search query"
                    >
                      ×
                    </button>
                  ) : (
                    <span className="nd-search-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </span>
                  )}
                </div>

                {/* 4. Sort Dropdown */}
                <div className="nd-sort-filter-box">
                  <select
                    className="nd-custom-sort-select"
                    value={sortBy}
                    onChange={handleSortChange}
                    aria-label="Sort blog articles"
                  >
                    <option value="recent">Sort by: Most Recent</option>
                    <option value="alpha">Sort by: Name (A–Z)</option>
                    <option value="readTime">Sort by: Quickest Read</option>
                  </select>
                  <span className="nd-sort-icon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* ─── Expandable Category Pill Drawer ─── */}
              <div
                className={`nd-filter-expanded-drawer ${openDrawer === 'category' ? 'open' : ''}`}
                aria-hidden={openDrawer !== 'category'}
              >
                <div className="nd-drawer-anim-wrapper">
                  <div className="nd-drawer-inner" role="group" aria-label="Filter by category">
                    <button
                      type="button"
                      tabIndex={openDrawer === 'category' ? 0 : -1}
                      className={`nd-tag-pill ${activeCategory === 'All' ? 'active' : ''}`}
                      onClick={() => handleSelectCategory('All')}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        tabIndex={openDrawer === 'category' ? 0 : -1}
                        className={`nd-tag-pill ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => handleSelectCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ─── Expandable Topic Pill Drawer ─── */}
              <div
                className={`nd-filter-expanded-drawer ${openDrawer === 'topic' ? 'open' : ''}`}
                aria-hidden={openDrawer !== 'topic'}
              >
                <div className="nd-drawer-anim-wrapper">
                  <div className="nd-drawer-inner" role="group" aria-label="Filter by topic">
                    <button
                      type="button"
                      tabIndex={openDrawer === 'topic' ? 0 : -1}
                      className={`nd-tag-pill ${activeTopic === 'All' ? 'active' : ''}`}
                      onClick={() => handleSelectTopic('All')}
                    >
                      All
                    </button>
                    {topicOptions.map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        tabIndex={openDrawer === 'topic' ? 0 : -1}
                        className={`nd-tag-pill ${activeTopic === topic ? 'active' : ''}`}
                        onClick={() => handleSelectTopic(topic)}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ─── Active Filter Chips & Result Count (Shown Only When Filtered) ─── */}
              {hasFilters && (
                <div className="nd-active-bar">
                  <div className="nd-insights-count">
                    Showing <strong>{visibleBlogs.length}</strong> of <strong>{processedBlogs.length}</strong> insights
                  </div>

                  <div className="nd-active-chips">
                    {activeCategory !== 'All' && (
                      <button
                        type="button"
                        className="nd-active-chip"
                        onClick={() => handleSelectCategory('All')}
                      >
                        Category: {activeCategory} <span aria-hidden="true">×</span>
                      </button>
                    )}
                    {activeTopic !== 'All' && (
                      <button
                        type="button"
                        className="nd-active-chip"
                        onClick={() => handleSelectTopic('All')}
                      >
                        Topic: {activeTopic} <span aria-hidden="true">×</span>
                      </button>
                    )}
                    {debouncedQuery.length >= 2 && (
                      <button
                        type="button"
                        className="nd-active-chip"
                        onClick={handleClearSearch}
                      >
                        Search: &ldquo;{debouncedQuery}&rdquo; <span aria-hidden="true">×</span>
                      </button>
                    )}
                    <button
                      type="button"
                      className="nd-reset-all-btn"
                      onClick={resetAllFilters}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ─── Asymmetric 24-Column Bento Grid ─── */}
            {isLoading ? (
              <div className="nd-insights-grid">
                {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
                  <div
                    key={idx}
                    className={`nd-insight-skeleton ${
                      idx < 4 ? 'nd-span-6' : idx === 5 ? 'nd-span-6' : 'nd-span-9'
                    }`}
                  />
                ))}
              </div>
            ) : visibleBlogs.length > 0 ? (
              <div className={`nd-insights-grid ${isGridAnimating ? 'nd-grid-fade' : ''}`}>
                {visibleBlogs.map((blog, idx) => {
                  const layout = bentoLayouts[idx] || { spanClass: 'nd-span-6', slotMode: 'top' };
                  const cardImage = SLUG_INSIGHT_COVER[blog.slug] || blog.coverImage || blog.thumbnail;

                  const TitleElement = (
                    <div className="nd-card-title-wrap">
                      <h2 className="nd-insight-card-title">{blog.title}</h2>
                    </div>
                  );

                  const BadgeElement = (
                    <div className="nd-card-badge-row">
                      <span className="nd-insight-card-badge">{blog.category}</span>
                      <span className="nd-insight-read-pill">
                        {formatReadTime(blog.readTime)}
                        <span className="nd-insight-card-arrow" aria-hidden="true">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  );

                  return (
                    <article
                      key={blog.slug}
                      className={`nd-insight-card ${layout.spanClass} ${
                        layout.slotMode === 'top' ? 'nd-layout-title-top' : 'nd-layout-title-bottom'
                      }`}
                      style={{ animationDelay: `${(idx % BATCH_SIZE) * 55}ms` }}
                    >
                      <div
                        className="nd-insight-card-bg"
                        style={{ backgroundImage: `url('${cardImage}')` }}
                      />
                      <div className="nd-insight-card-overlay" />

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="nd-insight-card-link"
                        aria-label={`Read article: ${blog.title}`}
                      />

                      <div className="nd-insight-slot-top">
                        {layout.slotMode === 'top' ? TitleElement : BadgeElement}
                      </div>

                      <div className="nd-insight-slot-bottom">
                        {layout.slotMode === 'top' ? BadgeElement : TitleElement}
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="nd-insights-empty-state">
                <div className="nd-empty-icon" aria-hidden="true">✦</div>
                <h3>No matching insights found.</h3>
                <p>We couldn&apos;t find any insights matching your selection. Try resetting the filters or a different keyword.</p>
                <button
                  type="button"
                  className="nd-load-more-btn nd-load-more-btn--solid"
                  onClick={resetAllFilters}
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* ─── Load More Outlined Pill (Experion Style) ─── */}
            {!isLoading && remainingCount > 0 && (
              <div className="nd-insights-load-more-wrap">
                <button
                  type="button"
                  className="nd-load-more-btn"
                  onClick={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
                >
                  <span>Load More ({remainingCount})</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ─── Lower White Transition Band + Blue/White Newsletter CTA ─── */}
        <section className="nd-insights-newsletter-band">
          <div className="container">
            <NewsletterSection />
          </div>
        </section>
      </div>
    </>
  );
}
