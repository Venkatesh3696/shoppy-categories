import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated, "in proyected rouyte");

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
