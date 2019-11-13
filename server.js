const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api", (req, res) => {
  setTimeout(() => {
    res.send({
      message: "From Server"
    });
  }, (Math.floor(Math.random() * 10) + 1) * 1000);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
