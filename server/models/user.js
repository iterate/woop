import Sequelize from "sequelize";
import { sequelize } from "../database";

export const User = sequelize.define("user", {
  id: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING
  }
});

User.sync();
