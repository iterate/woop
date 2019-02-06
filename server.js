/* eslint-disable no-console */

const express = require("express");

const app = express();

app.use(express.static("dist"));

app.listen(1234);

console.log("Serving a http://localhost:1234");
