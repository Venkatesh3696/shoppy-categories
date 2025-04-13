import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full w-full bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/category")}
        >
          Go to Categories
        </button>
      </div>
    </Layout>
  );
};

export default Home;
