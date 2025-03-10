// db.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "your_database_name", // Replace!
  username: "your_username", // Replace!
  password: "your_password", // Replace!
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

export default sequelize;
