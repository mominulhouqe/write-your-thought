/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AuthLayout from "../../components/AuthLayout";
import GoogleSign from "../../components/GoogleSign";
import AnimationThought from "../../components/AnimationThought";
import BorderCircle from "../../components/BorderCicle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../../hooks/hooks";
import {
  logout,
  setUser,
  setUserInfo,
} from "../../redux/features/auth/authSlice";
import { useFetchCurrentUserMutation } from "../../redux/features/user/userApi";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { baseUrl } from "../../redux/features/api/baseApi";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [hideGoogle, setHideGoogle] = useState<boolean>(false);
  const location = useLocation();

  const [login, { isLoading }] = useLoginMutation();
  const [fetchCurrentUser] = useFetchCurrentUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await login(userInfo).unwrap();
      const token = res?.accessToken;
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
      } catch (error: any) {
        dispatch(logout());
        setErrorMessage(error?.data?.message);
      }
    } catch (error: any) {
      setErrorMessage(error?.data?.message || error?.message);
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = `${baseUrl}/users/google`;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const error = searchParams.get("error");
    if (error == "duplicate_email") {
      setHideGoogle(true);
      setErrorMessage("Login failed. Please try without google.");
    }
  }, [location]);
  return (
    <AuthLayout>
      <div className="abs z-0 flex overflow-hidden">
        <AnimationThought></AnimationThought>
        <BorderCircle />
      </div>
      <motion.div
        className="max-w-xl w-full overflow-hidden space-y-8 border rounded-lg shadow-lg bg-white bg-opacity-45  p-6"
        initial={{ translateY: 1000 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Welcom in <span className="text-blue-600 underline">Thought</span>{" "}
          Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email..."
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 "
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password..."
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              {...register("password", { required: true })}
            />
          </div>
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

          <div>
            <Button
              disabled={isLoading}
              htmlType="submit"
              type="primary"
              className="w-full"
            >
              {isLoading ? "Please wait..." : "Sign In"}
            </Button>
          </div>
        </form>
        {!hideGoogle && (
          <>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <div className="text-gray-500">or</div>
            </div>
            <button className="w-full" disabled={isLoading}>
              <GoogleSign onClick={handleGoogleSignIn} className="mt-2" />
            </button>
          </>
        )}

        <div className="my-4">
          Don't have account? <Link to="/register">Register</Link>
        </div>
      </motion.div>
    </AuthLayout>
  );
};

export default Login;
