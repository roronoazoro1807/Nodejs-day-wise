import express from "express";

const router = express.Router();

let users = [
  { id: 1, name: "Ritika Singh" },
  { id: 2, name: "Amit Kumar" },
];

// GET all users
router.get("/users", (req, res) => {
  res.json(users);
});

// POST a new user
router.post("/users", (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ eroor: "ID and Name are required!" });
  }
  users.push({ id, name });
  res.status(201).json({ message: "User added!", users });
});

// PUT method to update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).json({ eroor: "User not found!" });
  }
  user.name = name;
  res.json({ mesaage: "User updated", users });
});

// DELETE a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id == id);

  if (index === -1) {
    return res.status(404).json({ eroor: "User not found!" });
  }
  users.splice(index, 1);
  res.json({ message: "user deleted Successfully!", users });
});

export default router;
