/* eslint-disable no-console */

const express = require("express");
const cookieSession = require("cookie-session");
const { initialize: initializeAuth } = require("./auth");

const app = express();

app.use(express.static("dist"));

// store session state in browser cookie
app.use(
  cookieSession({
    keys: ["keyboard cat", "secret2"]
  })
);

initializeAuth(app);

app.get("/", (req, res) => {
  if (req.user) {
    res.send(`Hello ${req.user.name}. <a href="/logout">Log out</a>`);
  } else {
    res.send(`<a href="/auth/google">Sign In with Google</a>`);
  }
});

app.listen(1234);

console.log("Serving a http://localhost:1234");
