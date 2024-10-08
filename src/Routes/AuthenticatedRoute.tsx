/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { useUserInfo } from "../redux/features/auth/authSlice";

const AuthenticatedRoute = ({ children}:any) => {
  const userInfo = useAppSelector(useUserInfo);
  const location = useLocation();
  if (userInfo) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AuthenticatedRoute;
