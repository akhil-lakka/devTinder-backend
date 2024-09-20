const express = require("express");

const app = express();

app.use("/hello", function (req, res) {
  res.send("hellow from server");
});

app.use("/newRouter", function (req, res) {
  res.send("hellow from newRouter ");
});

app.listen(8080, () => {
  console.log("server is started");
});
