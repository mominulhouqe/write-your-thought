/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { jwtDecode } from "jwt-decode";
import {
  logout,
  setUser,
  setUserInfo,
} from "../../redux/features/auth/authSlice";
import {
  useFetchCurrentUserMutation,
  useFetchLoginSuccessQuery,
} from "../../redux/features/user/userApi";
import { useEffect } from "react";

const GoogleLoginCallback = () => {
  const { data: loginInfo } = useFetchLoginSuccessQuery({});

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [fetchCurrentUser] = useFetchCurrentUserMutation();

  const mainTainUser = async () => {
    if (loginInfo?.data?.user_id) {
      const token = loginInfo?.accessToken;
      const decoded = jwtDecode(token);

      const user = {
        user: decoded,
        token: token,
      };

      dispatch(setUser(user));
      try {
        const userInfoRes = await fetchCurrentUser({}).unwrap();
        dispatch(setUserInfo(userInfoRes?.data));
        navigate("/");
      } catch (error) {
        dispatch(logout());
        console.log(error);
      }
    }
  };

  useEffect(() => {
    mainTainUser();
  }, [loginInfo?.data?.user_id]);

  return <div>Loading...</div>;
};

export default GoogleLoginCallback;
