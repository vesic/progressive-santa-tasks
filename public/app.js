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

window.addEventListener("load", function() {
  function updateOnlineStatus(event) {
    var isOnline = navigator.onLine;
    let icon = document.querySelector("i");
    if (isOnline) {
      icon.innerHTML = "signal_wifi_4_bar";
    } else {
      icon.innerHTML = "signal_wifi_off";
    }
  }

  updateOnlineStatus();

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
});
