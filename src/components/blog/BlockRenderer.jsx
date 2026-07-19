/**
 * NovaDesk Blog Management System — Block Renderer
 *
 * The core rendering engine for blog content.
 * Maps every content block type to a React component.
 *
 * ARCHITECTURE:
 * ─────────────
 * - ZERO hardcoded HTML in blog posts
 * - Each block type is a pure, isolated renderer
 * - Adding a new block type = add one case here + update the JSON schema
 * - The blog author controls layout through JSON, not React code
 *
 * Supported block types:
 *   heading | paragraph | image | quote | list | ordered-list |
 *   code | divider | button | callout | table | faq | embed
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─────────────────────────────────────────────
// INDIVIDUAL BLOCK RENDERERS
// ─────────────────────────────────────────────

/** Heading block — H1 through H6 with anchor IDs for TOC */
function HeadingBlock({ block }) {
  const Tag = `h${block.level}`;
  return (
    <Tag
      id={block.id}
      className={`block-heading block-heading--h${block.level}`}
    >
      {block.text}
    </Tag>
  );
}

/** Paragraph block with basic text rendering */
function ParagraphBlock({ block }) {
  return (
    <p className="block-paragraph">{block.text}</p>
  );
}

/** Lazy-loaded image with optional caption */
function ImageBlock({ block }) {
  return (
    <figure className="block-image">
      <img
        src={block.src}
        alt={block.alt}
        loading="lazy"
        decoding="async"
      />
      {block.caption && (
        <figcaption className="block-image__caption">{block.caption}</figcaption>
      )}
    </figure>
  );
}

/** Pull quote with optional author attribution */
function QuoteBlock({ block }) {
  return (
    <blockquote className="block-quote">
      <p className="block-quote__text">{block.text}</p>
      {block.author && (
        <footer>
          <span className="block-quote__author">{block.author}</span>
          {block.role && (
            <span className="block-quote__role"> — {block.role}</span>
          )}
        </footer>
      )}
    </blockquote>
  );
}

/** Unordered bullet list */
function ListBlock({ block }) {
  return (
    <ul className="block-list">
      {block.items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

/** Numbered ordered list */
function OrderedListBlock({ block }) {
  return (
    <ol className="block-ordered-list">
      {block.items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ol>
  );
}

/** Code block with syntax highlighting header and copy button */
function CodeBlock({ block }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(block.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = block.code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="block-code">
      <div className="block-code__header">
        <span className="block-code__lang">{block.language}</span>
        {block.filename && (
          <span className="block-code__filename">{block.filename}</span>
        )}
        <button className="block-code__copy-btn" onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre><code>{block.code}</code></pre>
    </div>
  );
}

/** Horizontal rule divider */
function DividerBlock() {
  return <hr className="block-divider" />;
}

/** CTA button — uses Link for internal routes, <a> for external */
function ButtonBlock({ block }) {
  const isExternal = block.href.startsWith('http');
  const variantClass = `block-button--${block.variant || 'primary'}`;

  return (
    <div className="block-button">
      {isExternal ? (
        <a
          href={block.href}
          className={variantClass}
          target={block.openInNewTab ? '_blank' : '_self'}
          rel={block.openInNewTab ? 'noopener noreferrer' : undefined}
        >
          {block.label}
          <span aria-hidden="true">→</span>
        </a>
      ) : (
        <Link to={block.href} className={variantClass}>
          {block.label}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}

/** Callout / alert box with variant-based coloring */
const CALLOUT_ICONS = {
  info: 'ℹ️',
  tip: '💡',
  warning: '⚠️',
  error: '🚫',
  success: '✅',
};

function CalloutBlock({ block }) {
  return (
    <div className={`block-callout block-callout--${block.variant || 'info'}`}>
      <div className="block-callout__icon" aria-hidden="true">
        {CALLOUT_ICONS[block.variant] || CALLOUT_ICONS.info}
      </div>
      <div className="block-callout__body">
        {block.title && (
          <div className="block-callout__title">{block.title}</div>
        )}
        <p className="block-callout__text">{block.text}</p>
      </div>
    </div>
  );
}

/** Data table with headers and rows */
function TableBlock({ block }) {
  return (
    <div className="block-table">
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              {block.headers.map((h, idx) => (
                <th key={idx}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((cell, cIdx) => (
                  <td key={cIdx}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.caption && (
        <p className="block-table__caption">{block.caption}</p>
      )}
    </div>
  );
}

/** Animated accordion FAQ */
function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.question}
        <svg className="faq-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="faq-item__answer">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

function FAQBlock({ block }) {
  return (
    <div className="block-faq">
      {block.title && (
        <h3 className="block-faq__title">{block.title}</h3>
      )}
      {block.items.map((item, idx) => (
        <FAQItem key={idx} item={item} />
      ))}
    </div>
  );
}

/** Responsive iframe embed (YouTube, Loom, Codepen, etc.) */
function EmbedBlock({ block }) {
  const aspectClass = `block-embed__container--${block.aspectRatio || '16/9'}`;
  return (
    <div className="block-embed">
      {block.title && (
        <p className="block-embed__title">{block.title}</p>
      )}
      <div className={`block-embed__container ${aspectClass}`}>
        <iframe
          src={block.src}
          title={block.title || 'Embedded content'}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// BLOCK REGISTRY
// Maps block.type → renderer component
// ─────────────────────────────────────────────

const BLOCK_RENDERERS = {
  heading:       HeadingBlock,
  paragraph:     ParagraphBlock,
  image:         ImageBlock,
  quote:         QuoteBlock,
  list:          ListBlock,
  'ordered-list': OrderedListBlock,
  code:          CodeBlock,
  divider:       DividerBlock,
  button:        ButtonBlock,
  callout:       CalloutBlock,
  table:         TableBlock,
  faq:           FAQBlock,
  embed:         EmbedBlock,
};

// ─────────────────────────────────────────────
// BLOCK RENDERER (main export)
// ─────────────────────────────────────────────

/**
 * Renders a single content block.
 * If the block type is unrecognized, renders a dev warning (invisible in prod).
 */
export function BlockRenderer({ block }) {
  const Renderer = BLOCK_RENDERERS[block.type];

  if (!Renderer) {
    // Unknown block type — log warning in dev, render nothing in prod
    if (import.meta.env.DEV) {
      console.warn(`[BlockRenderer] Unknown block type: "${block.type}". Add it to BLOCK_RENDERERS.`);
      return (
        <div style={{ padding: '8px 12px', background: '#fff3cd', border: '1px solid #ffc107', borderRadius: '4px', fontSize: '12px', color: '#856404', margin: '8px 0' }}>
          ⚠️ Unknown block type: <code>{block.type}</code>
        </div>
      );
    }
    return null;
  }

  return <Renderer block={block} />;
}

export default BlockRenderer;
