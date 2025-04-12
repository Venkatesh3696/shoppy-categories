import express from "express";
import multer from "multer";

import {
  createCategory,
  getCategories,
} from "../../controllers/shop/category.controller.js";

const router = express.Router();

// const storage = multer.memoryStorage();

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), createCategory);
router.get("/", getCategories);

export default router;
