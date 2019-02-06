import Sequelize from "sequelize";

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  // SQLite only
  storage: "./database.sqlite",

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
