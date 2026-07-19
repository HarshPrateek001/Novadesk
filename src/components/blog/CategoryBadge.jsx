import React from 'react';

/**
 * CategoryBadge — displays a blog category as a styled pill.
 * Supports active/inactive state for filter UI.
 */
export function CategoryBadge({ category, active = false, onClick }) {
  return (
    <span
      className={`category-badge ${active ? 'category-badge--active' : 'category-badge--default'}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      aria-pressed={onClick ? active : undefined}
    >
      {category}
    </span>
  );
}

export default CategoryBadge;
