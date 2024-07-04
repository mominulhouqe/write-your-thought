import { Link } from "react-router-dom";
import { UserAddOutlined, EditOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import { motion } from "framer-motion";
import { UserInfo } from "../types/types"; // Adjust the import path as necessary
import LoginPrompt from "../../components/LoginPromt";

const UserProfile: React.FC = () => {
  const userInfo = useAppSelector(useUserInfo) as unknown as UserInfo;

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (!userInfo?.email) {
    return <LoginPrompt />;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=" mx-auto bg-white rounded-lg shadow-lg p-3 mt-8 min-h-screen overflow-y-auto"
    >
      <div className="relative flex justify-center items-center">
        <Link to="/user-profile" className="block relative">
          {userInfo?.avatar?.url ? (
            <motion.img
              src={userInfo.avatar.url}
              alt="Profile"
              className="rounded-full object-cover border-4 border-blue-500 shadow-lg w-32 h-32"
              variants={itemVariants}
            />
          ) : (
            <motion.div
              className="rounded-full object-cover border-4 border-blue-500 shadow-lg w-32 h-32 flex items-center justify-center bg-gray-200"
              variants={itemVariants}
            >
              <UserAddOutlined className="text-4xl text-gray-500" />
            </motion.div>
          )}
        </Link>
        <Link to="/user-profile" className="absolute top-4 right-4" title="Edit profile">
          <motion.button
            className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
            variants={itemVariants}
          >
            <EditOutlined />
          </motion.button>
        </Link>
      </div>
      <motion.div className="text-center mt-6" variants={itemVariants}>
        <h4 className="mb-2 font-semibold text-2xl text-gray-800">
          {userInfo?.name || "Person Name"}
        </h4>
        <div className="text-sm text-gray-600">
          {userInfo?.bio || "No bio available"}
        </div>
      </motion.div>
      <motion.div
        className="border-b border-gray-300 my-4"
        variants={itemVariants}
      ></motion.div>
      <motion.div className="grid grid-cols-1  gap-4" variants={itemVariants}>
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Role:</span>{" "}
            {userInfo?.role || "No role available"}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Email:</span>{" "}
            {userInfo?.email || "No email available"}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Total Posts:</span>{" "}
            {userInfo?.postsCount || "No posts available"}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Followers:</span>{" "}
            {userInfo?.followers || "No followers available"}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Following:</span>{" "}
            {userInfo?.following || "No following available"}
          </p>
        </div>
      </motion.div>
      <motion.div
        className="border-b border-gray-300 my-4"
        variants={itemVariants}
      ></motion.div>
      {/* <motion.div className="p-4 bg-gray-50 rounded-lg shadow-inner" variants={itemVariants}>
        <h5 className="font-semibold mb-2 text-lg text-gray-800">Recent Activity</h5>
        <ul className="space-y-2 text-sm text-gray-700">
          {userInfo?.recentActivity?.length ? (
            userInfo.recentActivity.map((activity, index) => (
              <li key={index}>
                {activity}
              </li>
            ))
          ) : (
            <li>No recent activity</li>
          )}
        </ul>
      </motion.div> */}
    </motion.div>
  );
};

export default UserProfile;
