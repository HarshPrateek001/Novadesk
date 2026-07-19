import React from 'react';

/**
 * AuthorCard — displays author bio section at the bottom of a blog post.
 *
 * @param {import('../../types/blog').Author} author
 */
export function AuthorCard({ author }) {
  if (!author) return null;

  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  const LinkedInIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );

  return (
    <div className="author-card">
      {/* Avatar */}
      <div className="author-card__avatar">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: '50%',
              display: 'block',
            }}
          />
        ) : (
          <span>{getInitials(author.name)}</span>
        )}
      </div>

      {/* Info */}
      <div className="author-card__info">
        <p className="author-card__label">Written by</p>
        <h3 className="author-card__name">{author.name}</h3>
        {author.role && (
          <p className="author-card__role">{author.role}</p>
        )}
        {author.bio && (
          <p className="author-card__bio">{author.bio}</p>
        )}

        {/* Social Links */}
        <div className="author-card__links">
          {author.linkedin && (
            <a
              href={author.linkedin}
              className="author-card__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${author.name} on LinkedIn`}
            >
              <LinkedInIcon /> LinkedIn
            </a>
          )}
          {author.twitter && (
            <a
              href={author.twitter}
              className="author-card__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${author.name} on Twitter`}
            >
              <TwitterIcon /> Twitter
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
