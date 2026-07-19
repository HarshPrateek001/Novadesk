/**
 * NovaDesk Blog Management System — Blog Service
 *
 * ARCHITECTURE:
 * ─────────────
 * This is the single source of truth for all blog data operations.
 * It sits between the Provider (data source) and the UI (React components).
 *
 * UI components call methods on this service — they never touch the provider.
 * This enables:
 *   - Clean separation of business logic from UI
 *   - Easy testing (mock the service, not the UI)
 *   - Provider swaps without any UI changes
 *
 * Usage:
 *   import { blogService } from './blogService';
 *   const posts = await blogService.getAllBlogs();
 */

import { JsonBlogProvider } from './jsonBlogProvider.js';

class BlogService {
  constructor() {
    /**
     * PROVIDER INJECTION POINT
     * ─────────────────────────
     * To swap data sources in the future, change ONLY this line:
     *
     *   Current:  new JsonBlogProvider()
     *   Future:   new SupabaseBlogProvider()
     *   Future:   new ApiProvider({ baseUrl: '...' })
     *   Future:   new ContentfulProvider({ spaceId: '...' })
     */
    this.provider = new JsonBlogProvider();

    // In-memory cache to avoid redundant provider calls within a session
    this._cache = null;
  }

  /**
   * Internal: fetch and cache all blogs from provider.
   * @returns {Promise<BlogPost[]>}
   */
  async _getAll() {
    if (!this._cache) {
      this._cache = await this.provider.getAllBlogs();
    }
    return this._cache;
  }

  /**
   * Invalidate cache (useful if provider supports mutations)
   */
  clearCache() {
    this._cache = null;
  }

  // ─────────────────────────────────────────────
  // CORE QUERIES
  // ─────────────────────────────────────────────

  /**
   * Get all published blogs sorted newest-first.
   * @returns {Promise<BlogPost[]>}
   */
  async getAllBlogs() {
    return this._getAll();
  }

  /**
   * Get a single blog post by slug. Returns null if not found.
   * @param {string} slug
   * @returns {Promise<BlogPost | null>}
   */
  async getBlogBySlug(slug) {
    return this.provider.getBlogBySlug(slug);
  }

  // ─────────────────────────────────────────────
  // FEATURED & LATEST
  // ─────────────────────────────────────────────

  /**
   * Get all blogs marked as featured.
   * @returns {Promise<BlogPost[]>}
   */
  async getFeaturedBlogs() {
    const all = await this._getAll();
    return all.filter((b) => b.featured);
  }

  /**
   * Get the N most recently published blogs.
   * @param {number} count — defaults to 6
   * @returns {Promise<BlogPost[]>}
   */
  async getLatestBlogs(count = 6) {
    const all = await this._getAll();
    return all.slice(0, count);
  }

  // ─────────────────────────────────────────────
  // FILTERING & SEARCH
  // ─────────────────────────────────────────────

  /**
   * Get all blogs in a given category (case-insensitive).
   * @param {string} category
   * @returns {Promise<BlogPost[]>}
   */
  async getBlogsByCategory(category) {
    const all = await this._getAll();
    return all.filter(
      (b) => b.category.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * Get all blogs that include a specific tag (case-insensitive).
   * @param {string} tag
   * @returns {Promise<BlogPost[]>}
   */
  async getBlogsByTag(tag) {
    const all = await this._getAll();
    return all.filter((b) =>
      b.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
  }

  /**
   * Full-text search across title, description, excerpt, tags.
   * Returns results sorted by relevance (title match ranked highest).
   * @param {string} query
   * @returns {Promise<BlogPost[]>}
   */
  async searchBlogs(query) {
    if (!query || query.trim().length < 2) return [];
    const all = await this._getAll();
    const q = query.toLowerCase().trim();

    return all
      .map((b) => {
        let score = 0;
        if (b.title.toLowerCase().includes(q)) score += 3;
        if (b.description.toLowerCase().includes(q)) score += 2;
        if (b.excerpt.toLowerCase().includes(q)) score += 1;
        if (b.tags.some((t) => t.toLowerCase().includes(q))) score += 1;
        if (b.category.toLowerCase().includes(q)) score += 1;
        return { blog: b, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.blog);
  }

  /**
   * Get blogs related to a given post (same category + overlapping tags).
   * Excludes the post itself. Returns up to `count` results.
   * @param {BlogPost} blog - The current blog post
   * @param {number} count - Max number of related posts (default 3)
   * @returns {Promise<BlogPost[]>}
   */
  async getRelatedBlogs(blog, count = 3) {
    const all = await this._getAll();
    return all
      .filter((b) => b.slug !== blog.slug)
      .map((b) => {
        let score = 0;
        if (b.category === blog.category) score += 2;
        const sharedTags = b.tags.filter((t) => blog.tags.includes(t));
        score += sharedTags.length;
        return { blog: b, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, count)
      .map((r) => r.blog);
  }

  // ─────────────────────────────────────────────
  // TAXONOMY
  // ─────────────────────────────────────────────

  /**
   * Get sorted list of all unique categories across all blogs.
   * @returns {Promise<string[]>}
   */
  async getAllCategories() {
    const all = await this._getAll();
    const cats = new Set(all.map((b) => b.category));
    return [...cats].sort();
  }

  /**
   * Get sorted list of all unique tags across all blogs.
   * @returns {Promise<string[]>}
   */
  async getAllTags() {
    const all = await this._getAll();
    const tags = new Set(all.flatMap((b) => b.tags));
    return [...tags].sort();
  }

  // ─────────────────────────────────────────────
  // PAGINATION
  // ─────────────────────────────────────────────

  /**
   * Paginate a list of blogs.
   * @param {BlogPost[]} blogs
   * @param {number} page - 1-indexed page number
   * @param {number} pageSize - Items per page (default 9)
   * @returns {{ blogs: BlogPost[], total, page, pageSize, totalPages }}
   */
  paginate(blogs, page = 1, pageSize = 9) {
    const total = blogs.length;
    const totalPages = Math.ceil(total / pageSize);
    const safePage = Math.max(1, Math.min(page, totalPages || 1));
    const start = (safePage - 1) * pageSize;
    return {
      blogs: blogs.slice(start, start + pageSize),
      total,
      page: safePage,
      pageSize,
      totalPages,
    };
  }

  /**
   * Apply filters and return paginated results.
   * @param {import('../types/blog').BlogFilter} filter
   * @returns {Promise<import('../types/blog').PaginatedBlogs>}
   */
  async getFilteredBlogs(filter = {}) {
    let blogs = await this._getAll();

    if (filter.category) {
      blogs = blogs.filter(
        (b) => b.category.toLowerCase() === filter.category.toLowerCase()
      );
    }
    if (filter.tag) {
      blogs = blogs.filter((b) =>
        b.tags.some((t) => t.toLowerCase() === filter.tag.toLowerCase())
      );
    }
    if (filter.query && filter.query.trim().length >= 2) {
      const q = filter.query.toLowerCase().trim();
      blogs = blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return this.paginate(blogs, filter.page || 1, filter.pageSize || 9);
  }
}

/**
 * Singleton instance — import this throughout the app.
 * Do not instantiate BlogService directly in components.
 */
export const blogService = new BlogService();
