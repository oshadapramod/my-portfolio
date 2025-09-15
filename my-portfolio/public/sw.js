// Service Worker (production only). Uses network-first for HTML, cache-first for static assets.
// Bump the version to invalidate old caches after deploying changes.
const CACHE_VERSION = 'v2';
const STATIC_CACHE = `portfolio-static-${CACHE_VERSION}`;
const STATIC_ASSETS = [
  '/',
  '/logo.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== STATIC_CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

function isHTML(request) {
  return request.destination === 'document' || (request.headers.get('accept') || '').includes('text/html');
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  if (isHTML(request)) {
    // Network-first: always try to get the latest HTML (ensures new bundles load)
    event.respondWith(
      fetch(request)
        .then(res => {
          const copy = res.clone();
          caches.open(STATIC_CACHE).then(c => c.put(request, copy));
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for other same-origin assets
  if (request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(res => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(STATIC_CACHE).then(c => c.put(request, copy));
          }
          return res;
        });
      })
    );
  }
});
