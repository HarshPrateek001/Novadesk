import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Accessible Breadcrumb Component
 * Conforms to WCAG 2.2 AA and Schema.org BreadcrumbList guidelines.
 * 
 * @param {Array<{name: string, url: string}>} items - list of breadcrumb items
 */
export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="nd-breadcrumb-nav">
      <style>{`
        .nd-breadcrumb-nav {
          padding: 16px 0 8px 0;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
        }
        .nd-breadcrumb-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nd-breadcrumb-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
        }
        .nd-breadcrumb-item a {
          color: #2E29FF;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .nd-breadcrumb-item a:hover {
          color: #1a16d9;
          text-decoration: underline;
        }
        .nd-breadcrumb-item a:focus-visible {
          outline: 2px solid #2E29FF;
          outline-offset: 2px;
          border-radius: 2px;
        }
        .nd-breadcrumb-sep {
          color: #94a3b8;
          font-size: 11px;
          user-select: none;
        }
        .nd-breadcrumb-current {
          color: #0f172a;
          font-weight: 700;
        }
      `}</style>

      <ol className="nd-breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="nd-breadcrumb-item">
              {isLast ? (
                <span className="nd-breadcrumb-current" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link to={item.url}>{item.name}</Link>
                  <span className="nd-breadcrumb-sep" aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
