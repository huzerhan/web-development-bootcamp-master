const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server started in port 3000");
});

app.get("/", function (request, response) {
  //   console.log(request);
  response.send("<h1> boook</h1> bok");
});

app.get("/contact", function (req, res) {
  res.send(`contact me at: sad;klsa`);
});

app.get("/about-me", function (request, response) {
  response.send("<h1> benim adim erhan</h1>");
});
app.get("/hobbies", function (request, response) {
  console.log(request);
  response.send("<h1>nodemon ile </h1>");
});
