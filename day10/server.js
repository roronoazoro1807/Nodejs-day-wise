// server.js
import express from "express";
import sequelize from "./db.js";
import User from "./User.js"; // Import User model

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Day 10: User Model & Password Hashing!");
});

// --- User Registration Route ---
app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body); // User.create now handles password hashing in the model hook
    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser.id });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Function to test database connection and sync models (from previous days)
const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established.");
    await sequelize.sync({ force: false });
    console.log("✅ Database synced.");
  } catch (error) {
    console.error("❌ Unable to connect:", error);
  }
};

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  testDatabaseConnection();
});
