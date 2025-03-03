# 📌 Node.js Modules

## What are Modules?
Modules in Node.js allow us to **organize and reuse code** across multiple files.

## 🛠️ Types of Modules
1️⃣ **Built-in Modules** → (fs, path, os, http, etc.)  
2️⃣ **Custom Modules** → (Your own JavaScript files)  
3️⃣ **Third-party Modules** → (Installed using `npm`, e.g., Express.js)

## 📌 Using Built-in Modules
Example: `os` module
```js
const os = require("os");
console.log("OS Platform:", os.platform());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
