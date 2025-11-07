import { useEffect } from 'react';

const logInDev = (...args) => {
  if (import.meta.env.DEV) {
    console.debug(...args);
  }
};

function trackPageview(pathname) {
  const urlPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const plausible = window?.plausible;
  const gtag = window?.gtag;

  if (typeof plausible === 'function') {
    plausible('pageview', { url: urlPath });
  }

  if (typeof gtag === 'function') {
    gtag('event', 'page_view', { page_path: urlPath });
  }

  if (!plausible && !gtag) {
    logInDev('[analytics] page_view', urlPath);
  }
}

export default function usePageTracking(pathname, search = '') {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    trackPageview(`${pathname}${search}`);
  }, [pathname, search]);
}
