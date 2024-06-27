import React from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AuthLayout from "../../components/AuthLayout";
import GoogleSign from "../../components/GoogleSign";
import AnimationThought from "../../components/AnimationThought";
import BorderCircle from "../../components/BorderCicle";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  // const onSubmit = async (data: LoginFormInputs) => {
  //   const userInfo = {
  //     email: data.email,
  //     password: data.password,
  //   };
  // };
  // Handle login logic here

  const handleGoogleSignIn = () => {
    // Handle Google Sign-In logic here
    console.log("Signing in with Google...");
  };


  return (
    <AuthLayout>
      <div className="abs z-0 flex overflow-hidden">
<AnimationThought ></AnimationThought>
<BorderCircle />
</div>
      <motion.div
        className="max-w-xl w-full overflow-hidden space-y-8 border rounded-lg shadow-lg bg-[#F0F2F5] bg-opacity-45  p-6"
        initial={{ translateY: 1000,  }}
        animate={{ translateY: 0,  }}
        transition={{ duration: 0.8 , delay:1.2}}
      >
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Welcom in <span className="text-blue-600 underline">Thought</span> Account
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
        <GoogleSign onClick={handleGoogleSignIn} className="mt-2" />
      </motion.div>
    </AuthLayout>
  );
};

export default Login;
