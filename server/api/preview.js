import express from "express";

const router = express.Router();

router.get("/", async ({ query: { post } }, res) => {
  res.send(post);
});

export default router;
