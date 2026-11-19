/**
 * NovaRocket™ Speculative Speed Booster & Instant Page Transition Engine
 * ────────────────────────────────────────────────────────────────────────
 * Delivers instantaneous (0ms - 16ms) navigation transitions on both Desktop & Mobile
 * through intelligent speculative prefetching and Vite route chunk warming.
 *
 * Capabilities:
 *  1. Desktop: Hover intent prefetching (>65ms dwell) & mousedown instant trigger.
 *  2. Mobile: Touchstart immediate chunk loading (bridges 100-300ms tap-to-click gap).
 *  3. Idle Warming: RequestIdleCallback warms priority conversion routes without main thread contention.
 *  4. Connection Aware: Respects navigator.connection.saveData and 2G/slow-2G data saver modes.
 *  5. Zero Duplicate Overhead: In-memory cache ensures each route chunk is only prefetched once.
 */

// Route chunk loaders matching App.jsx lazy imports
const ROUTE_LOADERS = {
  '/': () => import('../pages/Home'),
  '/about-us': () => import('../pages/AboutUs'),
  '/case-studies': () => import('../pages/CaseStudies'),
  '/contact-us': () => import('../pages/ContactUs'),
  '/forge-ai': () => import('../pages/ForgeAI'),
  '/blog': () => import('../pages/blog/BlogListPage'),
  '/get-a-free-quote': () => import('../pages/GetAFreeQuote'),
  '/privacy-policy': () => import('../pages/PrivacyPolicy'),
  '/terms': () => import('../pages/TermsConditions'),
  // Commercial Priority Services
  '/services/web-development': () => import('../pages/services/WebDevelopment'),
  '/services/ai-development': () => import('../pages/services/AiDevelopment'),
  '/services/ecommerce-development': () => import('../pages/services/EcommerceDevelopment'),
  '/services/ui-ux-design': () => import('../pages/services/UiUxDesign'),
  '/services/seo-services': () => import('../pages/services/SeoServices'),
  '/services/website-maintenance': () => import('../pages/services/WebsiteMaintenance'),
  // Specialized Services
  '/services/chatbot-development': () => import('../pages/services/ChatbotDevelopment'),
  '/services/gen-ai-development': () => import('../pages/services/GenAiDevelopment'),
  '/services/ai-integrated-software': () => import('../pages/services/AiIntegratedSoftware'),
  '/services/conversational-ai': () => import('../pages/services/ConversationalAi'),
  '/services/web-application-development': () => import('../pages/services/WebApplicationDevelopment'),
  '/services/full-stack-development': () => import('../pages/services/FullStackDevelopment'),
  '/services/mvp-development': () => import('../pages/services/MvpDevelopment'),
  '/services/saas-development': () => import('../pages/services/SaasDevelopment'),
  '/services/custom-software-development': () => import('../pages/services/CustomSoftwareDevelopment'),
  '/services/erp-software-development': () => import('../pages/services/ErpSoftwareDevelopment'),
  '/services/crm-systems-development': () => import('../pages/services/CrmSystemsDevelopment'),
  '/services/enterprise-software-development': () => import('../pages/services/EnterpriseSoftwareDevelopment'),
  '/services/android-development': () => import('../pages/services/AndroidDevelopment'),
  '/services/ios-development': () => import('../pages/services/IosDevelopment'),
  '/services/mobile-app-development': () => import('../pages/services/MobileAppDevelopment'),
  '/services/react-native-development': () => import('../pages/services/ReactNativeDevelopment'),
  '/services/php-development': () => import('../pages/services/PhpDevelopment'),
  '/services/cms-development': () => import('../pages/services/CmsDevelopment'),
  '/services/wordpress-development': () => import('../pages/services/WordPressDevelopment'),
  '/services/shopify-development': () => import('../pages/services/ShopifyDevelopment'),
  '/services/woocommerce-development': () => import('../pages/services/WoocommerceDevelopment'),
  '/services/ecommerce-design': () => import('../pages/services/EcommerceDesign'),
  '/services/ecommerce-implementation': () => import('../pages/services/EcommerceImplementation'),
  // Industry pages
  '/industries/fintech': () => import('../pages/industries/Fintech'),
};

const prefetchedPaths = new Set();
let isInitialized = false;

/**
 * Checks whether user has enabled Data Saver or is on a constrained cellular network
 */
function shouldThrottleNetwork() {
  if (typeof navigator === 'undefined') return false;
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!conn) return false;
  if (conn.saveData) return true;
  if (conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g') return true;
  return false;
}

/**
 * Clean path string to match routing registry
 */
function normalizePath(rawHref) {
  if (!rawHref) return null;
  try {
    const url = new URL(rawHref, window.location.origin);
    if (url.origin !== window.location.origin) return null; // external link
    let pathname = url.pathname.replace(/\/+$/, '') || '/';
    return pathname;
  } catch {
    return null;
  }
}

/**
 * Prefetch target route chunk and relevant assets
 */
export function prefetchRoute(pathname) {
  if (!pathname || prefetchedPaths.has(pathname) || shouldThrottleNetwork()) return;

  prefetchedPaths.add(pathname);

  // 1. Direct Vite chunk preloading
  if (ROUTE_LOADERS[pathname]) {
    ROUTE_LOADERS[pathname]().catch(() => {});
    return;
  }

  // 2. Pattern matching for dynamic routes
  if (pathname.startsWith('/blog/')) {
    import('../pages/blog/BlogPostPage').catch(() => {});
    return;
  }
  if (pathname.startsWith('/case-studies/')) {
    import('../pages/CaseStudyDetail').catch(() => {});
    return;
  }
  if (pathname.startsWith('/industries/')) {
    import('../pages/industries/IndustryPage').catch(() => {});
    return;
  }

  // 3. Fallback <link rel="prefetch"> for HTML or external resources
  try {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = pathname;
    link.as = 'document';
    document.head.appendChild(link);
  } catch {}
}

/**
 * Global listener initializing mouseenter, touchstart, and idle prefetching
 */
export function initSpeedBooster() {
  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;

  let hoverTimer = null;
  let hoveredAnchor = null;

  // Find nearest anchor tag with internal href
  function getInternalAnchor(target) {
    if (!target || !target.closest) return null;
    const anchor = target.closest('a');
    if (!anchor || !anchor.href) return null;
    // Skip downloads, tel, mailto, target="_blank", or anchors (#)
    if (anchor.target === '_blank' || anchor.hasAttribute('download')) return null;
    if (anchor.href.startsWith('mailto:') || anchor.href.startsWith('tel:') || anchor.href.startsWith('javascript:')) return null;
    const path = normalizePath(anchor.href);
    if (!path || path === window.location.pathname) return null;
    return { element: anchor, path };
  }

  // Desktop Hover intent (dwell for 65ms to filter accidental mouse sweeps)
  document.addEventListener('mouseover', (e) => {
    const match = getInternalAnchor(e.target);
    if (!match) {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
        hoveredAnchor = null;
      }
      return;
    }

    if (hoveredAnchor === match.element) return;
    hoveredAnchor = match.element;

    if (hoverTimer) clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      prefetchRoute(match.path);
      hoverTimer = null;
    }, 65);
  }, { passive: true });

  // Mouse leave resets hover timer
  document.addEventListener('mouseout', (e) => {
    if (hoveredAnchor && e.target === hoveredAnchor) {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      hoveredAnchor = null;
    }
  }, { passive: true });

  // Mousedown instant trigger (covers quick clicks without hover dwell)
  document.addEventListener('mousedown', (e) => {
    const match = getInternalAnchor(e.target);
    if (match) {
      prefetchRoute(match.path);
    }
  }, { passive: true });

  // Mobile Touchstart immediate trigger (bridges 100-300ms tap-to-click gap)
  document.addEventListener('touchstart', (e) => {
    const match = getInternalAnchor(e.target);
    if (match) {
      prefetchRoute(match.path);
    }
  }, { passive: true });

  // Idle Background Warming for Top Conversion Pages
  const idleWarmingRoutes = [
    '/about-us',
    '/services/web-development',
    '/services/ai-development',
    '/case-studies',
    '/forge-ai'
  ];

  function warmIdleRoutes() {
    if (shouldThrottleNetwork()) return;
    let idx = 0;
    function prefetchNext() {
      if (idx < idleWarmingRoutes.length) {
        prefetchRoute(idleWarmingRoutes[idx++]);
        setTimeout(prefetchNext, 800); // Gentle 800ms spacing to keep CPU cool
      }
    }
    prefetchNext();
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      setTimeout(warmIdleRoutes, 2500);
    }, { timeout: 4000 });
  } else {
    window.addEventListener('load', () => {
      setTimeout(warmIdleRoutes, 3000);
    });
  }
}
