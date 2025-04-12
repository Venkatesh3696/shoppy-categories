import API from "../axios";

export const signupUser = async (credentials) => {
  const response = await API.post("/api/users/signup", credentials);
  return response.data;
};
