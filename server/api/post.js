import express from "express";
import { Post } from "../models/post";
import { User } from "../models/user";

const router = express.Router();

const mapPost = ({ id, user, content, createdAt, updatedAt }) => ({
  id,
  user: user && {
    id: user.id,
    name: user.name,
    photo: user.photo
  },
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
  res.json(mapPost({ ...post.get({ plain: true }), user: req.user }));
});

router.get("/", async (req, res) => {
  const posts = await Post.findAll({ include: [User] });
  res.json(posts.map(mapPost));
});

export default router;
