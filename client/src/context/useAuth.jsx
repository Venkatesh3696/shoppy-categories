import { createContext, useContext, useEffect, useState, useMemo } from "react";
import API from "../api/axios";
import { loginUser } from "../api/requests/login";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      setIsAuthenticated(true);
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("user");
      return { success: false, error: error.response?.data || error.message };
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
          const response = await API.get("/api/users/check-user", {
            withCredentials: true,
          });
          if (response.status === 200) {
            setIsAuthenticated(true);
            setUser(response.data.user);
            localStorage.setItem("user", JSON.stringify(response.data.user));
          } else {
            setIsAuthenticated(false);
            setUser(null);
          }
        }
      } catch (error) {
        console.error(
          "Authentication check failed:",
          error.response?.data || error.message
        );
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("user");
      }
    };

    checkAuth();
  }, []);

  const contextValue = useMemo(
    () => ({ isAuthenticated, user, login, logout }),
    [isAuthenticated, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
