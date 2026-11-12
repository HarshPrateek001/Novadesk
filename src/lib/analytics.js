/**
 * Pushes structured events to Google Tag Manager's dataLayer for GA4 and Google Ads.
 *
 * @param {string} eventName - Custom event identifier configured as a GTM trigger.
 * @param {Record<string, unknown>} [params] - Event payload attributes.
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || !eventName) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

/**
 * Emits a virtual pageview event for client-side React Router navigation.
 *
 * @param {string} pathname - Current route pathname.
 * @param {string} [search] - Optional query string.
 */
export function trackPageView(pathname, search = '') {
  if (typeof window === 'undefined') return;
  const pagePath = `${pathname || '/'}${search || ''}`;

  trackEvent('virtual_pageview', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: typeof document !== 'undefined' ? document.title : '',
  });
}

