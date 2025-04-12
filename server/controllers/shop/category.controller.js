import cloudinary from "../../config/cloudinary.js";
import { Category } from "../../models/shop/category.model.js";
import fs from "fs";

export const createCategory = async (req, res) => {
  try {
    const { name, itemsCount } = req.body;
    const file = req.file;

    if (!name || !file) {
      return res.status(400).json({ message: "Name and image are required" });
    }

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "categories",
    });

    fs.unlinkSync(file.path);

    const category = {
      name,
      imageUrl: result.secure_url,
      itemsCount: itemsCount || 0,
    };

    const newCategory = await Category.create(category);
    if (!newCategory) {
      return res.status(500).json({ message: "Category creation failed" });
    }

    res.status(200).json({ message: "Category created", category });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
