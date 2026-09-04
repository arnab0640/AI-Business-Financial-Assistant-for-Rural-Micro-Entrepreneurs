/**
 * SNU BizSathi - Service Worker for Offline & Mobile PWA (Android / iOS / Windows)
 * Sister Nivedita University (SNU) | Team Code Catalyst | SIH 2026
 */

const CACHE_NAME = 'snu-bizsathi-v1.2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/data.js',
  './manifest.json',
  './assets/snu_bizsathi_logo.jpg',
  './assets/snu_bizsathi_logo.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png'
];

// Install Event - Pre-cache Core Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SNU BizSathi SW] Pre-caching offline assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean Up Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SNU BizSathi SW] Removing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Network First with Cache Fallback for Rural Offline Capability
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Clone and store successful responses
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache when network fails (Offline mode in remote villages)
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
