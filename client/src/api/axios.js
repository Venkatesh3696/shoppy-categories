import axios from "axios";

const url = "https://shoppy-categories.onrender.com/";
// const url = "http://localhost:5000/";

export const API = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default API;
