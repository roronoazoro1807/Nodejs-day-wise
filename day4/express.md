# 📌 Express.js Basics

## ✅ What is Express.js?
Express.js is a **fast, minimal** web framework for building APIs & web apps.

## 🚀 Install & Set Up
1️⃣ Install: `npm install express`  
2️⃣ Create a simple server:
```js
import express from "express";
const app = express();
app.get("/", (req, res) => res.send("Hello Express!"));
app.listen(3000, () => console.log("Server running"));
