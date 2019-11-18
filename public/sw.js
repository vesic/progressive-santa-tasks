self.addEventListener("install", function(event) {
  console.log("install");
});

self.addEventListener("activate", function(event) {
  console.log("activate");
});

self.addEventListener("fetch", function(event) {
  return fetch(event.request);
});

self.addEventListener("push", function(event) {
  event.waitUntil(
    registration.showNotification("hello", {
      actions: [
        { action: "foo", title: "Foo" },
        { action: "bar", title: "Bar" }
      ]
    })
  );
});

self.addEventListener("notificationclick", function(event) {
  if (event.action === "foo") {
    // we can
    // clients.openWindow("http://localhost:3000/");
    // or client focus
    foo();
  } else {
    // clients.openWindow("http://localhost:3000/");
    bar();
  }
});

function foo() {
  // do something here
  console.log('foo');
}

function bar() {
  // do something here
  console.log('bar');
}
