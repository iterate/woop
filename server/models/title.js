import Sequelize from "sequelize";
import { sequelize } from "../database";
import { User } from "./user";

export const Title = sequelize.define("title", {
  text: {
    type: Sequelize.STRING
  }
});

Title.belongsTo(User);

Title.sync();
