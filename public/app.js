if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(function(registration) {
    console.log("registration", registration.scope);
  }, function(error) {
    console.log("error", error);
  });
}
