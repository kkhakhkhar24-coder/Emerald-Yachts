export function getLeadSource() {
  if (typeof window === 'undefined') {
    return { sourcePage: '', landingPage: '' };
  }
  const searchParams = new URLSearchParams(window.location.search);
  const sourcePage = searchParams.get('source_page') || (typeof document !== 'undefined' ? document.referrer : '') || '';
  const landingPage = searchParams.get('landing_page') || window.location.pathname || '';
  return { sourcePage, landingPage };
}
