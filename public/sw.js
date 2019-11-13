importScripts("/localforage.js");

const color = "papayawhip";
const key = 'color';

self.addEventListener("install", async function(event) {
  await localforage.setItem(key, color);
});

self.addEventListener("activate", async function(event) {
  console.log("activate");
});

self.addEventListener("fetch", function(event) {
  if (event.request.url.includes("styles.css")) {
    event.respondWith(
      // intercept styles request
      // and generate custom response
      // including color stored in indexDB
      (async function() {
        let color = await localforage.getItem(key);
        return new Response(
          `body {background: ${color}!important;}`, 
          {headers: { "Content-Type": "text/css" }
        });
      })()
    );
  }
});
