import express from "express";
import sequelize from "sequelize";
import { Title } from "../models/title";
import { User } from "../models/user";

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
  res.json(title && title[0]);
});

export default router;
