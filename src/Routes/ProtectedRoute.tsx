import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { logout, useToken } from "../redux/features/auth/authSlice";

import { message } from "antd";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
  children: ReactNode;
  role?: string;
}

interface DecodedToken {
  role: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const location = useLocation();

  const token = useAppSelector(useToken);
  let user: DecodedToken | null = null;
  if (token) {
    user = jwtDecode<DecodedToken>(token);
  }

  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role !== undefined && role !== user?.role) {
    message.error("You are not permitted");
    dispatch(logout());
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
