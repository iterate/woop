import express from "express";
import cookieSession from "cookie-session";
import { initialize as initializeAuth } from "./auth";
/* eslint-disable no-console */

const app = express();

app.get("/auth", (req, res) => {
  if (req.user) {
    res.send(`Hello ${req.user.name}. <a href="/logout">Log out</a>`);
  } else {
    res.send(`<a href="/auth/google">Sign In with Google</a>`);
  }
});

app.use(express.static("dist"));

// store session state in browser cookie
app.use(
  cookieSession({
    keys: ["keyboard cat", "secret2"]
  })
);

initializeAuth(app);

app.listen(1234);

console.log("Serving a http://localhost:1234");
