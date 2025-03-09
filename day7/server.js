import express from "express";
import authRoutes from "./authRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3000;

// Middleware to Parse JSON
app.use(express.json());

// use auth routes
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
