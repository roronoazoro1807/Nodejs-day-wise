// server.js
import express from "express";
import sequelize from "./db.js";
import User from "./User.js";
import Role from "./models/Role.js"; // Import Role model
import authController from "./authController.js";
import {
  authenticateJWT,
  authorizeRole,
} from "./middlewares/authMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Day 12: Role-Based Access Control!");
});

// --- User Registration Route ---
app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser.id });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

// --- User Login Route ---
app.post("/login", authController.loginUser);

// --- Protected Route (Admin Only) ---
app.get("/admin", authenticateJWT, authorizeRole(["admin"]), (req, res) => {
  res.json({ message: "Admin route accessed successfully!", user: req.user });
});

// --- Protected Route (Authenticated Users) ---
app.get("/profile", authenticateJWT, (req, res) => {
  res.json({ message: "User profile accessed!", user: req.user });
});

// Function to test database connection and sync models
const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established.");

    // Sync all models (including the new Role model)
    await sequelize.sync({ force: false });

    // Create initial roles if they don't exist
    const [userRole, userRoleCreated] = await Role.findOrCreate({
      where: { name: "user" },
    });
    const [adminRole, adminRoleCreated] = await Role.findOrCreate({
      where: { name: "admin" },
    });

    if (userRoleCreated) console.log('✅ "user" role created.');
    if (adminRoleCreated) console.log('✅ "admin" role created.');

    console.log("✅ Database synced.");
  } catch (error) {
    console.error("❌ Unable to connect:", error);
  }
};

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  testDatabaseConnection();
});
