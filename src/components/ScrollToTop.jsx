import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Avoid duplicating the initial hit already captured by GTM/GA4 on first page load
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const timer = window.setTimeout(() => {
      trackPageView(pathname, search);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [pathname, search]);

  return null;
}
