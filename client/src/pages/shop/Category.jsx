import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import CategoryItem from "../../components/CategoryItem";
import Layout from "../../layout/Layout";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await API.get("/api/shop/categories");
      if (response.status === 200) {
        setCategories(response.data);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Layout>
      <div className="w-full h-full  bg-gray-200">
        <div className="flex flex-row justify-between items-center p-4">
          <h1 className="text-xl">Categories</h1>
          <button
            className="cursor-pointer bg-blue-500 px-4 py-2 rounded text-white"
            onClick={() => navigate("/add-category")}
          >
            + Add Category
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {categories.length === 0 ? (
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1>No categories available! Please add</h1>
            </div>
          ) : (
            categories.map((each, i) => (
              <CategoryItem details={each} key={`id-${i}`} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
