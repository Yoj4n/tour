import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = sessionStorage.getItem("sessionActive"); // Verifica sesión activa

  return isAuthenticated ? <Outlet /> : <Navigate to="/404" replace />;
};

export default ProtectedRoute;
