import React, { useState } from 'react';
import { generateSiteUrl } from '../../utils/blogSeo.js';

/**
 * ShareButtons — social sharing buttons for a blog post.
 *
 * Supports:
 *  - Twitter/X share
 *  - LinkedIn share
 *  - Copy link to clipboard
 *
 * @param {import('../../types/blog').BlogPost} blog
 */
export function ShareButtons({ blog }) {
  const [copied, setCopied] = useState(false);

  const url = generateSiteUrl(`/blog/${blog.slug}`);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(blog.title);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback
      const el = document.createElement('input');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const TwitterIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const CopyIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div className="share-buttons" aria-label="Share this article">
      <span className="share-buttons__label">Share:</span>

      <a
        href={twitterUrl}
        className="share-btn share-btn--twitter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <TwitterIcon />
        Twitter
      </a>

      <a
        href={linkedinUrl}
        className="share-btn share-btn--linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <LinkedInIcon />
        LinkedIn
      </a>

      <button
        className="share-btn share-btn--copy"
        onClick={handleCopy}
        aria-label={copied ? 'Link copied!' : 'Copy link'}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}

export default ShareButtons;
