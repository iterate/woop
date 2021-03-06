import Sequelize from "sequelize";
import sequelize from "../database";
import User from "./user";

const Post = sequelize.define("post", {
  content: {
    type: Sequelize.STRING
  },
  woops: {
    type: Sequelize.BIGINT,
    defaultValue: 0
  }
});

Post.belongsTo(User);

Post.sync();

export default Post;
