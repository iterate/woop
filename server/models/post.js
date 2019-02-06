import Sequelize from "sequelize";
import { sequelize } from "../database";
import { User } from "./user";

export const Post = sequelize.define("post", {
  content: {
    type: Sequelize.STRING
  }
});

Post.belongsTo(User);

Post.sync();
