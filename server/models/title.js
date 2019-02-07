import Sequelize from "sequelize";
import sequelize from "../database";
import User from "./user";

const Title = sequelize.define("title", {
  text: {
    type: Sequelize.STRING
  }
});

Title.belongsTo(User);

Title.sync();

export default Title;
