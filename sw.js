// A simple Service Worker to make the app installable
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('humaymud-store').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './logo.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});