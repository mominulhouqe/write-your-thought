import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { logout, useToken } from "../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { message } from "antd";

const ProtectedRoute = ({ children, role }) => {
  const location = useLocation();

  const token = useAppSelector(useToken);
  let user;
  if (token) {
    user = jwtDecode(token);
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
  return children;
};

export default ProtectedRoute;
