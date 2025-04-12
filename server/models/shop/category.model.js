import mongoose from "mongoose";

import { configDotenv } from "dotenv";

configDotenv();

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  itemsCount: {
    type: Number,
    required: true,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model("Category", categorySchema);
