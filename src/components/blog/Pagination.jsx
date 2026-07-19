import React from 'react';

/**
 * Pagination — page navigation for the blog listing.
 *
 * Shows: Prev | 1 2 3 ... N | Next
 * Max 5 page buttons visible at once, with ellipsis for large ranges.
 *
 * @param {number} page - Current page (1-indexed)
 * @param {number} totalPages - Total number of pages
 * @param {(page: number) => void} onPageChange
 */
export function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const PrevIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );

  const NextIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  // Generate page numbers with ellipsis logic
  const getPages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = [];
    if (page <= 4) {
      // Show 1-5, ..., last
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    } else if (page >= totalPages - 3) {
      // Show 1, ..., last-4 to last
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      // Show 1, ..., page-1, page, page+1, ..., last
      pages.push(1);
      pages.push('...');
      pages.push(page - 1);
      pages.push(page);
      pages.push(page + 1);
      pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className="pagination" aria-label="Blog pagination">
      {/* Previous */}
      <button
        className={`pagination__btn pagination__btn--arrow ${page <= 1 ? 'pagination__btn--disabled' : ''}`}
        onClick={() => page > 1 && onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <PrevIcon />
      </button>

      {/* Page numbers */}
      {getPages().map((p, idx) =>
        p === '...' ? (
          <span key={`ellipsis-${idx}`} className="pagination__info">…</span>
        ) : (
          <button
            key={p}
            className={`pagination__btn ${p === page ? 'pagination__btn--active' : ''}`}
            onClick={() => onPageChange(p)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? 'page' : undefined}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        className={`pagination__btn pagination__btn--arrow ${page >= totalPages ? 'pagination__btn--disabled' : ''}`}
        onClick={() => page < totalPages && onPageChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        <NextIcon />
      </button>
    </nav>
  );
}

export default Pagination;
