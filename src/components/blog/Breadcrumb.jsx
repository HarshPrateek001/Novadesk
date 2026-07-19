import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Breadcrumb — shows navigation path.
 * Supports two variants:
 *   - default (light on dark background, for blog hero)
 *   - dark (dark on light background)
 *
 * @param {Array} items - [{ label, href }] — last item is current page (no href)
 * @param {string} variant - 'default' | 'dark'
 */
export function Breadcrumb({ items = [], variant = 'default' }) {
  const ChevronRight = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`breadcrumb ${variant === 'dark' ? 'breadcrumb--dark' : ''}`} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {idx > 0 && (
                <span className="breadcrumb__sep" aria-hidden="true">
                  <ChevronRight />
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className="breadcrumb__item breadcrumb__item--current"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="breadcrumb__item">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
