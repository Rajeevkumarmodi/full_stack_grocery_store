import express from "express";
import dotenv from "dotenv";
import categoryRoute from "./routes/category.route.js";
import productRoute from "./routes/product.route.js";
dotenv.config();
import "./db/db.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(PORT, () => {
  console.log(`server is start on port ${PORT}`);
});
