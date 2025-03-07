# 📌 Middleware & POST Requests in Express

## ✅ What is Middleware?
Middleware functions process requests **before** they reach the final route.

## 🚀 Built-in Middleware in Express
1️⃣ `express.json()` → Parses JSON requests  
2️⃣ `express.urlencoded({ extended: true })` → Parses form data  
3️⃣ **Custom Middleware Example**:
```js
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});
