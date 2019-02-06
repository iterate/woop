import express from "express";
import Title from "../models/title";

const router = express.Router();

router.post("/", async (req, res) => {
  const { body } = req;
  const title = await Title.create({
    text: body.text,
    userId: req.user.id
  });
  res.json(title);
});

router.get("/", async (req, res) => {
  const title = await Title.findAll({
    limit: 1,
    order: [["createdAt", "DESC"]]
  });
  if (title && title[0]) {
    res.json(title[0]);
  } else {
    res.json(null);
  }
});

export default router;
