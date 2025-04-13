import express from "express";
import multer from "multer";

import {
  createCategory,
  getCategories,
} from "../../controllers/shop/category.controller.js";
import { upload } from "../../config/cloudinary.js";

const router = express.Router();

router.post("/", upload.single("image"), createCategory);
router.get("/", getCategories);

export default router;
