import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import API from "../../api/axios";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await API.post("/api/users/login", loginForm);

      if (data.status === 200) {
        console.log("login success:", data);
        navigate("/");
      }
    } catch (error) {
      console.error("login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 p-5">
      <div className="h-4/5 aspect-3/4 flex flex-col justify-center items-start border border-gray-300 rounded-lg shadow-md p-6">
        <h1 className="self-center text-2xl">Login</h1>
        <div className="w-full  flex flex-col justify-between gap-5 p-3">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            <div className="flex flex-col justify-center gap-2">
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="bg-red-500 py-2 px-6 rounded-full cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
