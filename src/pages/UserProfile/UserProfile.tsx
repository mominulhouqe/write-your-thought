import { Link } from "react-router-dom";
import { UserAddOutlined, EditOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import { motion } from "framer-motion";
import { UserInfo } from "../types/types"; // Adjust the import path as necessary

const UserProfile: React.FC = () => {
  const userInfo = useAppSelector(useUserInfo) as UserInfo;

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
    return <p>Please login to access all feature</p>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="border rounded-lg w-full h-screen bg-slate-50 text-xs p-4"
    >
      <div className="">
        <Link to="/profile">
          {userInfo?.avatar?.url ? (
            <motion.img
              src={userInfo.avatar.url}
              alt="Profile"
              className="rounded-full object-cover border-2 border-blue-500 shadow-md w-20 h-20 mx-auto"
              variants={itemVariants}
            />
          ) : (
            <motion.div
              className="rounded-full object-cover border-2 border-blue-500 shadow-md w-20 h-20 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              variants={itemVariants}
            >
              <UserAddOutlined className="text-2xl" />
            </motion.div>
          )}
        </Link>
        <Link to="/profile" className="absolute top-2 right-2" title="setting">
          <motion.button
            className="bg-blue-500 text-white p-1 rounded-full"
            variants={itemVariants}
          >
            <EditOutlined />
          </motion.button>
        </Link>
      </div>
      <motion.div className="text-center mt-12" variants={itemVariants}>
        <h4 className="mb-2 font-medium text-lg">
          {userInfo?.name || "Person Name"}
        </h4>
        <div className="text-sm text-gray-600">
          {userInfo?.bio || "No bio available"}
        </div>
      </motion.div>
      <motion.div
        className="border-b border-gray-400 my-4"
        variants={itemVariants}
      ></motion.div>
      <motion.div className="p-2 space-y-2" variants={itemVariants}>
        <p className="p-2 border-b">
          <span className="font-medium">Role:</span>{" "}
          {userInfo?.role || "No role available"}
        </p>
        {/* <p className="p-2 border-b">
          <span className="font-medium">Setting:</span>{" "}
          {userInfo?.settings || "No settings available"}
        </p> */}
        <p className="p-2 border-b">
          <span className="font-medium">Email:</span>{" "}
          {userInfo?.email || "No email available"}
        </p>
        <p className="p-2 border-b">
          <span className="font-medium">Total Posts:</span>{" "}
          {userInfo?.postsCount || "No posts available"}
        </p>
        <p className="p-2 border-b">
          <span className="font-medium">Followers:</span>{" "}
          {userInfo?.followers || "No followers available"}
        </p>
        <p className="p-2 border-b">
          <span className="font-medium">Following:</span>{" "}
          {userInfo?.following || "No following available"}
        </p>
      </motion.div>
      <motion.div
        className="border-b border-gray-400 my-4"
        variants={itemVariants}
      ></motion.div>
      <motion.div className="p-2" variants={itemVariants}>
        <h5 className="font-medium mb-2">Recent Activity</h5>
        <ul className="space-y-2">
          {userInfo?.recentActivity?.map((activity, index) => (
            <li key={index} className="text-sm text-gray-700">
              {activity}
            </li>
          )) || <li className="text-sm text-gray-500">No recent activity</li>}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default UserProfile;
