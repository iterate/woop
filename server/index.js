import express from "express";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import { initialize as initializeAuth } from "./auth";
import postRouter from "./api/post";
import woopRouter from "./api/woop";
/* eslint-disable no-console */

const app = express();

// store session state in browser cookie
app.use(
  cookieSession({
    keys: ["keyboard cat", "secret2"]
  })
);
const jsonParser = bodyParser.json();

initializeAuth(app);

app.use("*", (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/google");
  } else {
    next();
  }
});

app.use("/api/post", jsonParser, postRouter);
app.use("/api/woop", jsonParser, woopRouter);

app.use(express.static("dist"));

app.listen(1234);

console.log("Serving a http://localhost:1234");
