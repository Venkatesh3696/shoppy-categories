import axios from "axios";

const url =
  process.env.REACT_APP_ENV === "production"
    ? "https://shoppy-categories.onrender.com"
    : "http://localhost:5000/";
export const API = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default API;
