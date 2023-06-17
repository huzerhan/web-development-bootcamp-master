const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("console started on 3000");
});

app.get("/", function (request, response) {
  //   console.log(request);
  response.send("<h1> boook</h1> bok");
});
