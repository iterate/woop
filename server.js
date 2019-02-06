/* eslint-disable no-console */

const express = require("express");
const { initialize } = require("./auth");

const app = express();

app.use(express.static("dist"));

initialize(app);

app.get("/", (req, res) => {
  res.send(`<a href="/auth/google">Sign In with Google</a>`);
});

app.listen(1234);

console.log("Serving a http://localhost:1234");
