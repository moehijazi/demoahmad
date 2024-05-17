import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth/AuthWrapper";

const AdminRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to="/login" />;
  return user.user.admin ? <Outlet /> : <Navigate to = "/" />;
};

export default AdminRoute;