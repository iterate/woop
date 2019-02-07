import express from "express";

const router = express.Router();

router.get("/", async ({ query: { post } }, res) => {
  res.setHeader("X-XSS-Protection", "0");
  res.send(post);
});

export default router;
