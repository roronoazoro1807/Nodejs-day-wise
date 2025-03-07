import express from "express";
import routes from "./routes.js";

const app = express();
const PORT = 3000;

// Middleware: log every request
app.use((req, res, next) => {
  console.log(`[${req.method}] [${req.url}]`);
  next();
});

// Middleware: Parses JSON request Bodies
app.use(express.json());

// use routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
