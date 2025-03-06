import express from "express";
import routes from "./routes.js";

const app = express();
const PORT = 3000;

// use routes
app.use("/api", routes);

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
