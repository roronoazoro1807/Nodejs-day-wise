import express from "express";

const router = express.Router();

// Sample API points
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ritika Singh" },
    { id: 2, name: "Amit Kumar" },
  ]);
});

router.get("/products", (req, res) => {
  res.json([
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mobile" },
  ]);
});

export default router;
