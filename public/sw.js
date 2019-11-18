self.addEventListener("install", function(event) {
  console.log("install");
});

self.addEventListener("activate", function(event) {
  console.log("activate");
});

self.addEventListener("fetch", function(event) {
  // if a request is an image
  if (/\.jpg$|.jpeg$|.png$/.test(event.request.url)) {
    var isSupported = false;
    if (event.request.headers.has("accept")) {
      // test if browser supports webp
      // i.e. if it sends accept webp headers
      isSupported = event.request.headers
        .get('accept')
        .includes('webp');
    }
    if (isSupported) {
      // req is an stream - it can be consumed only once
      var req = event.request.clone();
      var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".webp";
      event.respondWith(fetch(returnUrl));
    }
  } 
  return fetch(event.request);
});
