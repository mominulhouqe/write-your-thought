import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserAddOutlined, LoginOutlined } from "@ant-design/icons";

const LoginPrompt: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center h-full text-center p-4"
    >
      <div className="text-2xl mb-4">
        <UserAddOutlined className="text-6xl text-gray-500" />
      </div>
      <h2 className="text-xl font-semibold mb-2">
        Welcome to Thoughts!
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Please log in or register to access all features.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          <LoginOutlined className="mr-2" />
          Log In
        </Link>
        <Link
          to="/register"
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          <UserAddOutlined className="mr-2" />
          Register
        </Link>
      </div>
    </motion.div>
  );
};

export default LoginPrompt;
