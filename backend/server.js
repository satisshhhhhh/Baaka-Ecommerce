import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import products from "./data/products.js";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

// initializing express with variable app
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} 
  mode on port ${PORT}`.yellow.bold
  )
);
