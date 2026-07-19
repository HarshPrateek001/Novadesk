/**
 * NovaDesk Blog Management System — Abstract Blog Provider
 *
 * ARCHITECTURE:
 * This is the abstract base class for all blog data providers.
 * The Provider Pattern ensures UI components never know where data comes from.
 *
 * Today  → JsonBlogProvider   (reads static JSON files via Vite glob)
 * Future → SupabaseBlogProvider
 * Future → ApiProvider (REST/GraphQL)
 * Future → CMSProvider (Contentful, Sanity, etc.)
 *
 * To migrate data sources: create a new provider, swap it in BlogService.
 * Zero UI component changes required.
 */

export class BlogProvider {
  /**
   * Return all blog posts from the data source.
   * @returns {Promise<import('../types/blog').BlogPost[]>}
   */
  async getAllBlogs() {
    throw new Error('BlogProvider.getAllBlogs() must be implemented by a subclass.');
  }

  /**
   * Return a single blog post by its URL slug, or null if not found.
   * @param {string} slug
   * @returns {Promise<import('../types/blog').BlogPost | null>}
   */
  async getBlogBySlug(slug) {
    throw new Error('BlogProvider.getBlogBySlug() must be implemented by a subclass.');
  }
}
