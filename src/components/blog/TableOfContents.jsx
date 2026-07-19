import React, { useState, useEffect, useRef } from 'react';

/**
 * TableOfContents — auto-generates a sticky TOC from heading blocks.
 *
 * Extracts all heading blocks with IDs from the content array.
 * Uses IntersectionObserver to highlight the currently visible section.
 *
 * @param {import('../../types/blog').ContentBlock[]} blocks - All content blocks
 */
export function TableOfContents({ blocks = [] }) {
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef(null);

  // Extract heading blocks that have an ID (used as TOC anchor)
  const headings = blocks.filter(
    (b) => b.type === 'heading' && b.id && b.level <= 4
  );

  // Intersection observer — highlights the heading currently in viewport
  useEffect(() => {
    if (!headings.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings.length]);

  if (!headings.length) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Offset for sticky header (~80px)
      window.scrollBy(0, -90);
      setActiveId(id);
    }
  };

  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc__title">Table of Contents</p>
      <ol className="toc__list" style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'toc-counter' }}>
        {headings.map((heading) => (
          <li key={heading.id} className="toc__item">
            <a
              href={`#${heading.id}`}
              className={`toc__link toc__link--level-${heading.level} ${activeId === heading.id ? 'toc__link--active' : ''}`}
              onClick={(e) => handleClick(e, heading.id)}
              aria-current={activeId === heading.id ? 'location' : undefined}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default TableOfContents;
