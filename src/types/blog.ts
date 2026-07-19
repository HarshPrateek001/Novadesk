/**
 * NovaDesk Blog Management System — Type Definitions
 *
 * This is the canonical type layer. All providers (JSON, Supabase, API, CMS)
 * must return data conforming to these interfaces.
 *
 * Architecture: UI components only depend on these types, never on the provider.
 * To swap data sources, only the provider changes — zero UI changes required.
 */

// ─────────────────────────────────────────────
// CONTENT BLOCK TYPES
// ─────────────────────────────────────────────

/** All supported content block types in the blog engine */
export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'image'
  | 'quote'
  | 'list'
  | 'ordered-list'
  | 'code'
  | 'divider'
  | 'button'
  | 'callout'
  | 'table'
  | 'faq'
  | 'embed';

/** Heading block — renders H1–H6 */
export interface HeadingBlock {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  id?: string; // anchor ID for table of contents
}

/** Paragraph block — supports inline HTML-free text */
export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

/** Image block — lazy-loaded with alt and optional caption */
export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

/** Pull quote block */
export interface QuoteBlock {
  type: 'quote';
  text: string;
  author?: string;
  role?: string;
}

/** Unordered list block */
export interface ListBlock {
  type: 'list';
  items: string[];
}

/** Ordered list block */
export interface OrderedListBlock {
  type: 'ordered-list';
  items: string[];
}

/** Syntax-highlighted code block */
export interface CodeBlock {
  type: 'code';
  language: string;
  code: string;
  filename?: string;
}

/** Horizontal divider */
export interface DividerBlock {
  type: 'divider';
}

/** CTA button block */
export interface ButtonBlock {
  type: 'button';
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  openInNewTab?: boolean;
}

/** Highlighted callout box */
export interface CalloutBlock {
  type: 'callout';
  variant: 'info' | 'warning' | 'success' | 'error' | 'tip';
  title?: string;
  text: string;
}

/** Table block */
export interface TableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
  caption?: string;
}

/** FAQ accordion block */
export interface FAQItem {
  question: string;
  answer: string;
}
export interface FAQBlock {
  type: 'faq';
  title?: string;
  items: FAQItem[];
}

/** Embed block (YouTube, Loom, Codepen, etc.) */
export interface EmbedBlock {
  type: 'embed';
  src: string;
  title?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
}

/** Union type of all content blocks */
export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | QuoteBlock
  | ListBlock
  | OrderedListBlock
  | CodeBlock
  | DividerBlock
  | ButtonBlock
  | CalloutBlock
  | TableBlock
  | FAQBlock
  | EmbedBlock;

// ─────────────────────────────────────────────
// BLOG POST
// ─────────────────────────────────────────────

/** Publication status */
export type BlogStatus = 'published' | 'draft' | 'archived';

/** Author metadata */
export interface Author {
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

/** Complete blog post structure — every JSON file must match this shape */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  author: Author;
  publishDate: string; // ISO 8601 e.g. "2026-07-18"
  updatedDate?: string;
  category: string;
  tags: string[];
  coverImage: string;  // Full hero image URL
  thumbnail: string;   // Card thumbnail URL (smaller)
  readTime: number;    // In minutes
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  status: BlogStatus;
  content: ContentBlock[];
}

/** Lightweight metadata for listing pages (no content blocks) */
export type BlogMeta = Omit<BlogPost, 'content'>;

// ─────────────────────────────────────────────
// PROVIDER INTERFACE
// ─────────────────────────────────────────────

/**
 * The abstract contract every data provider must implement.
 * Today: JsonBlogProvider. Future: SupabaseBlogProvider, ApiProvider, CMSProvider.
 * UI never imports a provider directly — only this interface via BlogService.
 */
export interface IBlogProvider {
  getAllBlogs(): Promise<BlogPost[]>;
  getBlogBySlug(slug: string): Promise<BlogPost | null>;
}

// ─────────────────────────────────────────────
// SERVICE RETURN TYPES
// ─────────────────────────────────────────────

/** Paginated result from the blog service */
export interface PaginatedBlogs {
  blogs: BlogPost[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** Search / filter options */
export interface BlogFilter {
  category?: string;
  tag?: string;
  query?: string;
  status?: BlogStatus;
  page?: number;
  pageSize?: number;
}
