// Install the service worker
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("myapp-v1").then(function (cache) {
      return cache.addAll([
        "/",
        "/all-pins.html",
        "/all-pins.css",
        "/allPins.js",
      ]);
    })
  );
});

// Fetch the cached resources
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
