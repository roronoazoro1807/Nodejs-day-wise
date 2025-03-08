# 📌 CRUD Operations in Express

## ✅ What is CRUD?
CRUD stands for **Create, Read, Update, Delete**.

## 🚀 Express CRUD Routes
1️⃣ **GET /users** → Get all users  
2️⃣ **POST /users** → Add a new user  
3️⃣ **PUT /users/:id** → Update user data  
4️⃣ **DELETE /users/:id** → Remove a user  

## 📌 Example: Update a User
```js
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find((u) => u.id == id);
  if (!user) return res.status(404).json({ error: "User not found!" });
  user.name = name;
  res.json({ message: "User updated!", users });
});
