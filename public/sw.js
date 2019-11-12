
var CACHE_NAME = 'v1';
var urlsToCache = [
  'index.html',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
// self.addEventListener("install", function(event) {
//   console.log("install");
// });

self.addEventListener("activate", function(event) {
  console.log("activate");
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(
      r => r || fetch(event.request)
    )
  )
  // return fetch(event.request);
});