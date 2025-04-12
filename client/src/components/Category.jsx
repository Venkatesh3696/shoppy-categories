import React, { useEffect, useState,  } from "react";
import API from "../api/axios";
import CategoryItem from "./CategoryItem";

const Category = () => {
    const [categories, setCategories] useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await API.get("/categories");
      if( response.status === 200){
    setCategories(response.data)
    }
    };      
    fetchCategories();
  }, []);
  return (
    <div className="w-full h-full bg-red-400">
      <div>
        <h1>Category</h1>
        <button>+ Add Category</button>
      </div>
      <div>
        {
            categories.map((each,i)=>(
                <CategoryItem details = {each} key={`id ${i}`} />
            ))
        }
      </div>
    </div>
  );
};

export default Category;
