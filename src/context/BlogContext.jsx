/**
 * NovaDesk Blog Management System — Blog Context
 *
 * Provides blog data and operations to all React components via Context.
 * Components use the `useBlog` hook — they never import the service directly.
 *
 * This separation means that in the future, swapping to a different provider
 * only requires updating BlogService — no component changes.
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { blogService } from '../services/blogService.js';

// ─────────────────────────────────────────────
// CONTEXT DEFINITION
// ─────────────────────────────────────────────

const BlogContext = createContext(null);

// ─────────────────────────────────────────────
// PROVIDER COMPONENT
// ─────────────────────────────────────────────

/**
 * Wrap your app (or just the blog section) with <BlogProvider>.
 * In App.jsx, wrap only the blog routes for optimal performance.
 */
export function BlogProvider({ children }) {
  const [allBlogs, setAllBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initialize() {
      try {
        setIsLoading(true);
        const [blogs, cats, tagList] = await Promise.all([
          blogService.getAllBlogs(),
          blogService.getAllCategories(),
          blogService.getAllTags(),
        ]);
        setAllBlogs(blogs);
        setCategories(cats);
        setTags(tagList);
      } catch (err) {
        console.error('[BlogContext] Failed to initialize blog data:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    initialize();
  }, []);

  // ── Exposed methods (memoized for stable references)

  const getBlogBySlug = useCallback(
    (slug) => blogService.getBlogBySlug(slug),
    []
  );

  const getFeaturedBlogs = useCallback(
    () => blogService.getFeaturedBlogs(),
    []
  );

  const getLatestBlogs = useCallback(
    (count) => blogService.getLatestBlogs(count),
    []
  );

  const getRelatedBlogs = useCallback(
    (blog, count) => blogService.getRelatedBlogs(blog, count),
    []
  );

  const searchBlogs = useCallback(
    (query) => blogService.searchBlogs(query),
    []
  );

  const getFilteredBlogs = useCallback(
    (filter) => blogService.getFilteredBlogs(filter),
    []
  );

  const getBlogsByCategory = useCallback(
    (category) => blogService.getBlogsByCategory(category),
    []
  );

  const getBlogsByTag = useCallback(
    (tag) => blogService.getBlogsByTag(tag),
    []
  );

  const value = {
    // State
    allBlogs,
    categories,
    tags,
    isLoading,
    error,
    // Methods
    getBlogBySlug,
    getFeaturedBlogs,
    getLatestBlogs,
    getRelatedBlogs,
    searchBlogs,
    getFilteredBlogs,
    getBlogsByCategory,
    getBlogsByTag,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

// ─────────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────────

/**
 * useBlogs() — the primary hook for consuming blog data in components.
 *
 * Example usage:
 *   const { allBlogs, isLoading, getFeaturedBlogs } = useBlogs();
 */
export function useBlogs() {
  const ctx = useContext(BlogContext);
  if (!ctx) {
    throw new Error('useBlogs() must be called inside a <BlogProvider>');
  }
  return ctx;
}
