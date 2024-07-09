/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { UserAddOutlined } from "@ant-design/icons";

import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import SettingsTabs from "../../components/SettingsTabs";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetAllPostsByUserIdQuery } from "../../redux/features/post/postApi";
import Loading from "../../components/Loading";

const UserProfileView: React.FC = () => {
  const userInfo = useAppSelector(useUserInfo);
  const [settings, setSettings] = useState<any>({});
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // todo can pass limit, page and search value for filtering
  const { data,isLoading } = useGetAllPostsByUserIdQuery(
    {
      userId: userInfo?.user_id,
      // searchValue: ,
      // pageValue: ,
      // limitValue: ,
    },
    { skip: !userInfo?.user_id }
  );
  
  useEffect(() => {
    const loadSettings = async () => {
      // Simulate fetching settings
      setSettings({ theme: "dark", notifications: true });
      setIsDarkMode(true);
    };
    loadSettings();
  }, [data?.data, userInfo]);

  const handleTabChange = (key: string) => {
    console.log("Selected Tab:", key);
  };

  if(isLoading){
    return <Loading />
  }
  return (
    <div className=" ">
      <div className="max-w-3xl w-full mx-auto mt-2 p-4 border rounded-lg  bg-white">
        <motion.div
          className={`relative w-full h-64 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg overflow-hidden ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
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
                    className={`rounded-full w-44 border-2  shadow-md mx-auto`}
                  />
                ) : (
                  <motion.div
                    className={`rounded-full object-cover border-2 shadow-md w-20 h-20 flex items-center justify-center`}
                  >
                    <UserAddOutlined className="text-2xl" />
                  </motion.div>
                )}
              </Link>
            </div>
          </div>
        </motion.div>
       
        <div className="mt-8 flex flex-col items-center">
          <div className="text-center border-b my-2">
            <h1 className="text-3xl font-bold">{userInfo?.name}</h1>
            <p className="text-gray-600 mt-2">{userInfo?.email}</p>
            <Link to="/profile-setting" className="">
              <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                Edit Profile
              </Button>
            </Link>
          </div>
          <SettingsTabs
            isDarkMode={isDarkMode}
            settings={settings}
            posts={data?.data}
            onChange={handleTabChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfileView;
