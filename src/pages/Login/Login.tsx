import React from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { GoogleOutlined } from "@ant-design/icons";
import AuthLayout from "../../components/AuthLayout";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // Handle login logic here
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign-In logic here
  };

  return (
    <AuthLayout>
      <motion.div
        className="max-w-xl w-full space-y-8 border rounded-lg shadow-lg bg-[#F0F2F5] bg-opacity-45  p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              {...register("password", { required: true })}
            />
          </div>
          <div>
            <Button htmlType="submit" type="primary" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <div className="text-gray-500">or</div>
        </div>
        <Button
          type="default"
          icon={<GoogleOutlined />}
          className="w-full mt-2"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>
      </motion.div>
    </AuthLayout>
  );
};

export default Login;
