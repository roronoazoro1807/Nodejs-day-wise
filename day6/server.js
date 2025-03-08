import express from "express";
import routes from "./routes.js";

const app = express();
const PORT = 3000;

app.use(express.json()); //Middleware to parse json

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
