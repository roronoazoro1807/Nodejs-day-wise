// db.js
import { Sequelize } from "sequelize";

// Option 1: Passing parameters separately (Recommended for clarity)
const sequelize = new Sequelize({
  database: "your_database_name", // Replace with your actual database name
  username: "your_username", // Replace with your PostgreSQL username
  password: "your_password", // Replace with your PostgreSQL password
  host: "localhost", // Usually 'localhost' for local development
  port: 5432, // Default PostgreSQL port is 5432
  dialect: "postgres", // Tell Sequelize we are using PostgreSQL
});

// Option 2: Using a connection URI (Less readable for beginners, but can be useful later)
// const sequelize = new Sequelize('postgres://user:password@host:port/database');

export default sequelize;
