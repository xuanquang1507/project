import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Navigate } from "react-router-dom";

export default function PrivateComponent({ component: Component }) {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? (
    <AdminLayout>
      <Component />
    </AdminLayout>
  ) : (
    <Navigate to="/login" />
  );
}
