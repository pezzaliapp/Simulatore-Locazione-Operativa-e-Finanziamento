// ============================================================
// SERVICE WORKER — SLOF v1.0.0
// Incrementa CACHE_VERSION ad ogni deploy → auto-update garantito
// ============================================================
const CACHE_VERSION = 'slof-v1.0.0';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.svg', './icon-512.svg'];

// INSTALL: pre-cache + skipWaiting immediato
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ACTIVATE: rimuovi cache vecchie + prendi controllo immediato
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// FETCH: Network-first, cache come fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(res => {
        if (res && res.status === 200) {
          caches.open(CACHE_VERSION).then(c => c.put(event.request, res.clone()));
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});

// Messaggio dal client → skip waiting manuale se necessario
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
