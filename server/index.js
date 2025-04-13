import express from "express";
import { configDotenv } from "dotenv";
import morgan from "morgan";
import cors from "cors";

import { corsOptions } from "./config/corsConfig.js";
import { connectDB } from "./config/connectDb.js";
import userRoutes from "./routes/users.route.js";
import categoryRoutes from "./routes/shop/category.route.js";

configDotenv();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(morgan("dev"));

app.use("/api/users", userRoutes);

app.use("/api/shop/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
