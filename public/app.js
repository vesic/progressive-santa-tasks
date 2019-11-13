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

let result = document.querySelector("#result");

let count = 1;

result.innerHTML = count;

// Start timer
let interval = setInterval(() => {
  result.innerHTML = count++;
}, 1000);

// Stop the timer when response returns
fetch("http://localhost:3000/api")
  .then(res => res.json())
  .then(json => {
    clearInterval(interval);
    result.innerHTML = json.message;
  });
