import axios from "axios";

const url = "https://shoppy-categories.onrender.com/";

export const API = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default API;
