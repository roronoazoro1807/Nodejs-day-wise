import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3000;

// connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MOngoBD & Mongoose Setup Complete");
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
