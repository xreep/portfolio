/* Vercel Web Analytics for a hash-routed static site.
   Cookieless, first-party (/_vercel/insights), no personal data. Vercel's script ignores hash changes,
   so auto-tracking is off (data-disable-auto-track in index.html) and each route is reported here. */
(function () {
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  let last = '';
  function track() {
    const h = location.hash;
    if (h && !h.startsWith('#/')) return; /* in-page anchors like #contact */
    const parts = h.replace(/^#\/?/, '').split('/').filter(Boolean);
    const path = '/' + parts.join('/');
    if (path === last) return;
    last = path;
    const route = parts[0] === 'case' && parts[1] ? '/case/[slug]' : path;
    window.va('pageview', { route: route, path: path });
  }
  addEventListener('hashchange', track);
  track();
})();
