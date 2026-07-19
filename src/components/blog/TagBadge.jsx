import React from 'react';

/**
 * TagBadge — displays a single blog tag as a styled pill.
 * Clicking a tag filters the blog listing by that tag.
 */
export function TagBadge({ tag, onClick }) {
  return (
    <span
      className="tag-badge"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      #{tag}
    </span>
  );
}

export default TagBadge;
