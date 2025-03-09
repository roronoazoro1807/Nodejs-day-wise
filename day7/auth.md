# 📌 User Authentication in Express.js

## ✅ What is Authentication?
Authentication verifies a user's identity using username & password.

## 🔹 Steps:
1️⃣ User **Registers** → Password is **hashed** with bcrypt  
2️⃣ User **Logs in** → Password is **verified**  
3️⃣ JWT **token is generated** for authentication  

## 🚀 Express Authentication Routes
1️⃣ **POST /api/auth/register** → Register a new user  
2️⃣ **POST /api/auth/login** → Login & receive JWT token  

## 📌 Example: Register a User
```js
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "User registered successfully" });
});
