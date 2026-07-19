import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * SearchBar — debounced search input for the blog listing page.
 *
 * @param {string} value - Controlled value
 * @param {(q: string) => void} onChange - Called after debounce delay
 * @param {string} placeholder
 * @param {number} debounceMs - Debounce delay in ms (default 300)
 */
export function SearchBar({
  value = '',
  onChange,
  placeholder = 'Search articles...',
  debounceMs = 300,
}) {
  const [localValue, setLocalValue] = useState(value);
  const timerRef = useRef(null);

  // Sync external value changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Debounced change handler
  const handleChange = useCallback(
    (e) => {
      const q = e.target.value;
      setLocalValue(q);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onChange?.(q);
      }, debounceMs);
    },
    [onChange, debounceMs]
  );

  const handleClear = useCallback(() => {
    setLocalValue('');
    clearTimeout(timerRef.current);
    onChange?.('');
  }, [onChange]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );

  const XIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <div className="search-bar">
      <div className="search-bar__icon" aria-hidden="true">
        <SearchIcon />
      </div>
      <input
        type="search"
        className="search-bar__input"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Search blog articles"
        autoComplete="off"
        spellCheck="false"
      />
      {localValue && (
        <button
          className="search-bar__clear"
          onClick={handleClear}
          aria-label="Clear search"
          type="button"
        >
          <XIcon />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
