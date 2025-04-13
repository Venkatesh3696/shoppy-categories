import React, { useState } from "react";
import API from "../api/axios";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    image: null,
    itemsCount: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setCategory((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setCategory((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", category.name);
      formData.append("image", category.image);
      formData.append("itemsCount", category.itemsCount);

      const data = await API.post("/api/shop/categories", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.status === 200) {
        console.log("Category added successfully:", data);
        navigate("/category");
      }
    } catch (error) {
      console.error(
        "Error adding category:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Layout>
      <div className="p-5 w-full h-full flex flex-col justify-center items-center bg-gray-100">
        <h1>Add Category</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <label>Category name</label>
          <input
            type="text"
            placeholder="Category Name"
            value={category.name}
            onChange={handleChange}
            name="name"
            className="border border-gray-300 rounded-md p-2"
          />
          <label>Upload image</label>
          <input
            type="file"
            onChange={handleChange}
            className="border  border-gray-300 rounded-md p-2 cursor-pointer"
            name="image"
          />
          <input
            type="number"
            placeholder="Items Count"
            value={category.itemsCount}
            onChange={handleChange}
            name="itemsCount"
            className="border border-gray-300 rounded-md p-2"
          />
          <button className="cursor-pointer bg-blue-500 text-white p-3 rounded-2xl">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddCategory;
