/**
 * NovaDesk Blog Management System — JSON File Provider
 *
 * HOW AUTOMATIC BLOG LOADING WORKS:
 * ─────────────────────────────────
 * Vite's import.meta.glob() scans the filesystem at BUILD TIME and
 * creates a bundled import map of every matching file.
 *
 * When a developer:
 *   1. Drops `src/blogs/new-blog.json` into the folder
 *   2. Pushes to GitHub
 *   3. Vercel triggers a rebuild
 *
 * The new blog is automatically included — zero React code changes.
 *
 * This is the ONLY file that needs to change when migrating to
 * a different data source (Supabase, API, CMS).
 */

import { BlogProvider } from './blogProvider.js';

/**
 * Vite glob import — loads ALL JSON files from src/blogs/ at build time.
 * { eager: true } means imports are resolved synchronously at module load.
 *
 * The result is an object like:
 * {
 *   '../../blogs/why-business-needs-website.json': { default: { id, slug, title, ... } },
 *   '../../blogs/seo-guide-2026.json': { default: { id, slug, title, ... } },
 * }
 */
const blogModules = import.meta.glob('../blogs/*.json', { eager: true });

/**
 * Convert the Vite glob module map into a flat array of BlogPost objects.
 * Filters out any entries that are not 'published' so drafts stay hidden.
 */
function loadAllBlogsFromGlob() {
  return Object.values(blogModules)
    .map((mod) => mod.default ?? mod)
    .filter((blog) => blog && blog.status === 'published');
}

export class JsonBlogProvider extends BlogProvider {
  constructor() {
    super();
    // Cache the blogs in memory — the glob result never changes at runtime
    this._blogs = loadAllBlogsFromGlob();
  }

  /**
   * Returns all published blogs, sorted newest-first.
   * O(n log n) — sorts by publishDate descending.
   */
  async getAllBlogs() {
    return [...this._blogs].sort(
      (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
    );
  }

  /**
   * Returns a single published blog by its slug, or null.
   * O(n) linear scan — acceptable for thousands of posts at static-site scale.
   */
  async getBlogBySlug(slug) {
    return this._blogs.find((b) => b.slug === slug) ?? null;
  }
}
