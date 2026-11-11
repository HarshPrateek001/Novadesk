import React from 'react';

const TICKER_ITEMS = ['iTHINK', 'iFORGE', 'iEVOLVE'];

function BlueStarMark() {
  return (
    <svg viewBox="0 0 36 36" className="forge-ticker-spark" aria-hidden="true">
      <path
        d="M18 2 L21.8 14.2 L34 18 L21.8 21.8 L18 34 L14.2 21.8 L2 18 L14.2 14.2 Z"
        fill="url(#forgeBlueSpark)"
      />
      <defs>
        <linearGradient id="forgeBlueSpark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="55%" stopColor="#4F75FF" />
          <stop offset="100%" stopColor="#2E29FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Full-width kinetic marquee ticker placed immediately beneath Hero in Black, Royal Blue & White.
 */
export default function ForgeTicker() {
  return (
    <section className="forge-ticker-band" aria-label="FORGE Pillars Ticker">
      <div className="forge-marquee-container">
        <div className="forge-marquee-track">
          {[0, 1, 2, 3].map((copyIdx) =>
            TICKER_ITEMS.map((item) => (
              <div key={`${copyIdx}-${item}`} className="forge-marquee-item">
                <span>{item}</span>
                <BlueStarMark />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

