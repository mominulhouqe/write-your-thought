import React from "react";
import { motion } from "framer-motion";
import { UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UserInfo } from "../types/types";

interface ProfileHeaderProps {
  userInfo: UserInfo | null | undefined;
  isDarkMode: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userInfo, isDarkMode }) => {
  return (
    <motion.div
      className={`relative w-full h-64 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-4 rounded-full shadow-lg">
          <Link to="/user-profile">
            {userInfo?.avatar?.url ? (
              <motion.img
                src={userInfo.avatar.url}
                alt="Profile"
                className={`rounded-full w-44 border-2 ${isDarkMode ? 'border-blue-300' : 'border-blue-500'} shadow-md mx-auto`}
              />
            ) : (
              <motion.div className={`rounded-full object-cover border-2 ${isDarkMode ? 'border-blue-300' : 'border-blue-500'} shadow-md w-20 h-20 flex items-center justify-center`}>
                <UserAddOutlined className="text-2xl" />
              </motion.div>
            )}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
