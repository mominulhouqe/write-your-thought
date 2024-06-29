import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import {
  logout,
  setUser,
  setUserInfo,
} from "../../redux/features/auth/authSlice";
import { useFetchCurrentUserMutation } from "../../redux/features/user/userApi";

const GoogleLoginCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [fetchCurrentUser] = useFetchCurrentUserMutation();

  useEffect(() => {
    const handleGoogleLogin = async () => {
      const params = new URLSearchParams(location.search);
      const accessToken = params.get("accessToken");

      if (accessToken) {
        try {
          const decoded = jwtDecode(accessToken);
          const user = {
            user: decoded,
            token: accessToken,
          };

          dispatch(setUser(user));

          try {
            const userInfoRes = await fetchCurrentUser({}).unwrap();
            dispatch(setUserInfo(userInfoRes?.data));
            navigate("/");
          } catch (error) {
            dispatch(logout());
            console.log(error, "inside error");
            navigate("/login");
          }
        } catch (error) {
          navigate("/login");
          console.error("Error during Google login:", error);
        }
      } else {
        navigate("/login");
      }
    };

    handleGoogleLogin();
  }, [location, dispatch, navigate]);
  return <div>Loading...</div>;
};

export default GoogleLoginCallback;
