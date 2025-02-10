import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Verificar si hay una sesión activa en sessionStorage
  const isAuthenticated = sessionStorage.getItem("userSession");

  return isAuthenticated ? <Outlet /> : <Navigate to="/404" />;
};

export default PrivateRoute;

