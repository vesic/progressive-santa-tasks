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

let deferredPrompt;

window.addEventListener("beforeinstallprompt", e => {
  deferredPrompt = e;
});

document.querySelector("button").addEventListener("click", e => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    deferredPrompt = null;
  });
});

// Extra points for statistics
window.addEventListener("appinstalled", evt => {
  console.log("App installed");
});
