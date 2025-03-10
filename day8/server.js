// server.js
import express from "express";
import sequelize from "./db.js"; // Import Sequelize connection
import Product from "./Product.js"; // Import Product model (implicitly registers it with Sequelize)

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Day 8: PostgreSQL & Sequelize Basics!");
});

// Function to test database connection and sync models
const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection has been established successfully.");

    // Sync all models that are not already in the database
    await sequelize.sync({ force: false }); // 'force: false' keeps existing data, use 'true' to drop and re-create tables (for development, be careful in production!)
    console.log("✅ Database synced successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  testDatabaseConnection(); // Call the database test function when the server starts
});
