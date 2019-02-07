import express from "express";
import Post from "../models/post";
import User from "../models/user";

const router = express.Router();

export const mapPost = ({ id, user, createdAt, updatedAt, woops }) => ({
  id,
  user: user && {
    id: user.id,
    name: user.name,
    photo: user.photo
  },
  createdAt,
  updatedAt,
  woops
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

router.get("/:id", async ({ params: { id } }, res) => {
  const post = await Post.findById(id);
  if (post) {
    res.send(post.content);
  } else {
    res.send(null);
  }
});

export default router;
