import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url =
  process.env.REACT_APP_ENV && process.env.REACT_APP_ENV.trim() === "production"
    ? "https://shoppy-categories.onrender.com/"
    : "http://localhost:5000/";

console.log(url, "base url ");

export const API = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default API;
