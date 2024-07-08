/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";

import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import SettingsTabs from "../../components/SettingsTabs";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useGetAllPostsByUserIdQuery } from "../../redux/features/post/postApi";

const UserProfileView: React.FC = () => {
  const userInfo = useAppSelector(useUserInfo);
  const [posts, setPosts] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // todo can pass limit, page and search value for filtering
  const { data, isLoading } = useGetAllPostsByUserIdQuery(
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
  }, []);

  const handleTabChange = (key: string) => {
    console.log("Selected Tab:", key);
  };

  return (
    <div className=" ">
      <div className="max-w-3xl w-full mx-auto mt-2 p-4 border rounded-lg  bg-white">
        <ProfileHeader userInfo={userInfo} />
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
