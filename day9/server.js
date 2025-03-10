// server.js
import express from "express";
import sequelize from "./db.js";
import Product from "./Product.js"; // Import Product model
import productController from "./productController.js"; // Import product controller

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Day 9: Express & PostgreSQL CRUD Operations!");
});

// --- Product CRUD Routes ---

// Create a new product (POST)
app.post("/products", productController.createProduct);

// Get all products (GET)
app.get("/products", productController.getAllProducts);

// Get a product by ID (GET)
app.get("/products/:id", productController.getProductById);

// Update a product (PUT) - We'll use PUT for full updates
app.put("/products/:id", productController.updateProduct);

// Delete a product (DELETE)
app.delete("/products/:id", productController.deleteProduct);

// Function to test database connection and sync models (from Day 8)
const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection has been established successfully.");
    await sequelize.sync({ force: false }); // Keep existing data
    console.log("✅ Database synced successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  testDatabaseConnection();
});
