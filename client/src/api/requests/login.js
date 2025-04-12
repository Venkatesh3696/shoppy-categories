import API from "../axios";

export const loginUser = async (credentials) => {
  const response = await API.post("/api/users/login", credentials);
  console.log(response, "response in loginUser function");
  return response.data;
};
