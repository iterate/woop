import express from "express";
import { Post } from "../models/post";
import { User } from "../models/user";

const router = express.Router();

const mapPost = ({ id, userId, content, createdAt, updatedAt }) => ({
  id,
  userId,
  content,
  createdAt,
  updatedAt
});

router.post("/", async (req, res) => {
  const { body } = req;
  const post = await Post.create({
    content: body.content,
    userId: req.user.id
  });
  res.json(mapPost(post));
});

router.get("/", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts.map(mapPost));
});

export default router;
