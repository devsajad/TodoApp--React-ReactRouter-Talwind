import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login", { replace: true });
  }, [isAuthenticated, navigate]);

  return isAuthenticated && children;
};

export default ProtectedRoute;
