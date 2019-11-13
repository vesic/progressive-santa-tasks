self.addEventListener("install", function(event) {
  console.log("install");
});

self.addEventListener("activate", function(event) {
  console.log("activate");
});

self.addEventListener("fetch", function(event) {
  // if we hit api
  if (event.request.url.endsWith("/api")) {
    return event.respondWith(
      // Return first resolved
      Promise.race([
        timeout((Math.floor(Math.random() * 10) + 1) * 1000),
        fetch(event.request.url)
      ])
    );
  }
  return fetch(event.request);
});

function timeout(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(
        new Response(`{"message":"From Worker"}`, {
          headers: { "Content-Type": "application/json" }
        })
      );
    }, delay);
  });
}
