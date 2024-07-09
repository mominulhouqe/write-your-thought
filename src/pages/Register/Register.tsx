import React, { useState } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AuthLayout from "../../components/AuthLayout";
import GoogleSign from "../../components/GoogleSign";
import AnimationThought from "../../components/AnimationThought";
import BorderCircle from "../../components/BorderCicle";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

interface RegisterFormInputs {
  email: string;
  name: string;
  password: string;
  avatar: FileList;
}

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterFormInputs>();
  const [registerUser, { isLoading: registerLoading }] =
    useRegisterUserMutation();
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: RegisterFormInputs) => {
    const userInfo = {
      email: data.email,
      name: data.name,
      password: data.password,
      avatar: data.avatar[0],
    };

    const formData = new FormData();
    formData.append("name", userInfo?.name);
    formData.append("email", userInfo?.email);
    formData.append("password", userInfo?.password);

    if (userInfo?.avatar) {
      formData.append("avatar", userInfo?.avatar);
    }
    // Handle registration logic here
    try {
      const res = await registerUser(formData).unwrap();
      setSuccessMessage(res?.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage((error as any)?.data?.message);
      setSuccessMessage("");
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = ".https://mominul-backend.vercel.app/api/v2/users/google";
  };

  return (
    <AuthLayout>
      <div className="relative   md:grid grid-cols-2 ">
        <div className="md:flex hidden ">
          <AnimationThought />
          <BorderCircle />
        </div>
        <motion.div
          className="container mx-auto w-full  border rounded-lg shadow-lg bg-white p-6  z-10"
          initial={{ translateY: 1000 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Create account on{" "}
            <span className="text-blue-600 underline">Thought</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name..."
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email..."
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password..."
                className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="Avatar"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Avatar
              </label>
              <input
                id="avatar"
                type="file"
                placeholder="avatar..."
                className=""
                {...register("avatar", { required: false })}
              />
            </div>
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
            {successMessage && (
              <div
                className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}
            <div>
              <Button
                disabled={registerLoading}
                htmlType="submit"
                type="primary"
                className="w-full py-2 rounded-md text-lg"
              >
                {registerLoading ? "Please wait..." : "Sign Up "}
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="text-gray-500">or</div>
          </div>
          <GoogleSign
            disabled ={registerLoading}
            onClick={handleGoogleSignIn}
            className="mt-4"
          />

          <div className="my-4 text-center">
            Already have an account?{" "}
            <Link className="hover:underline text-blue-500" to="/login">
              Login
            </Link>
          </div>
        </motion.div>
      </div>
    </AuthLayout>
  );
};

export default Register;
