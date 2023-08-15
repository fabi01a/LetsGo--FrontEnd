import React from "react";
import {  Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";


function RequireAuth({ children }) {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: navigate }} replace />;
  }
  return children;
}

export default RequireAuth;