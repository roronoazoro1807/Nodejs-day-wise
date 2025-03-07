import express from "express";

const router = express.Router();
let users = [
  { id: 1, name: "Ritika Singh" },
  { id: 2, name: "Amit Kumar" },
];

// GET users
router.get("/users", (req, res) => {
  res.json(users);
});

// POST new user
router.post("/users", (req, res) => {
  const { id, name } = req.body; // Get data from request

  if (!id || !name) {
    return res.status(400).json({ error: "ID and Name are required!" });
  }

  users.push({ id, name });
  res.status(201).json({ message: "User added successfully!", users });
});

export default router;
