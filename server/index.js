import express from "express";
import cookieSession from "cookie-session";
import { initialize as initializeAuth } from "./auth";
/* eslint-disable no-console */

const app = express();

// store session state in browser cookie
app.use(
  cookieSession({
    keys: ["keyboard cat", "secret2"]
  })
);

initializeAuth(app);

app.use("*", (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/google");
  } else {
    next();
  }
});

app.use(express.static("dist"));

app.listen(1234);

console.log("Serving a http://localhost:1234");
