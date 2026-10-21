/* Offline support for the single-file app: precache index.html, serve cache-first, refresh in background. */
const VERSION = 'v14';                      // bump when index.html changes to force an update
const CACHE = 'morse-trainer-' + VERSION;
const ASSETS = [
  './',
  './index.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(ASSETS.map((url) => fetch(url, { cache: 'reload' }).then((res) => c.put(url, res)))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Direct network-first bypass with cache refresh for cache-busting check requests
  if (url.searchParams.has('_cb') && url.origin === location.origin) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' }).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => {
            c.put('./index.html', copy.clone());
            c.put('./', copy);
          });
        }
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      const net = fetch(e.request).then((res) => {
        if (res && res.ok && url.origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
