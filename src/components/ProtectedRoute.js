import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ path, ...props }) => {
    const isAuthenticated = useSelector((state) => state.auth.token !== null);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    } 
    return <Route path={path} {...props} />;
};

export default ProtectedRoute;