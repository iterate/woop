import express from "express";
import { Post } from "../models/post";
import sequelize from "sequelize";
import { User } from "../models/user";
import { mapPost } from "./post";

const router = express.Router();

router.post("/:post", async (req, res) => {
  const post = await Post.update(
    { woops: sequelize.literal("woops + 1") },
    { where: { id: req.params.post } },
    { include: [User] }
  );
  res.json({ success: post[0] > 0 });
});

export default router;
