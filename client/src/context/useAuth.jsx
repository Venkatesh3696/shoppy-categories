import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";
import { loginUser } from "../api/requests/login";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  console.log(JSON.stringify(user, null, 2), "user in auth context");
  console.log(isAuthenticated, "isAuthenticated in auth context");

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      console.log(response, "response in auth context");
      setIsAuthenticated(true);
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("user");
      return { success: false, error: error.response || error.message };
    }
  };

  const logout = async () => {
    try {
      await API.post("/users/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setIsAuthenticated(true);
          setUser(JSON.parse(storedUser));
        } else {
          const response = await API.get("/api/users/check-user");
          if (response.status === 200) {
            setIsAuthenticated(true);
            setUser(response.data.user);
          } else {
            setIsAuthenticated(false);
            setUser(null);
          }
        }
        if (isAuthenticated) {
          navigate;
        }
      } catch (error) {
        console.error(
          "Authentication check failed:",
          error.response?.data || error.message
        );
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
