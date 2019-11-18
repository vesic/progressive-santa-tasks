window.addEventListener("load", function(event) {
  Notification.requestPermission().then(function(permission) {
    console.log("permission", permission);
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(
    function(registration) {
      console.log("registration", registration.scope);
    },
    function(error) {
      console.log("error", error);
    }
  );
}
