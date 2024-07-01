/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";

import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import SettingsTabs from "../../components/SettingsTabs";
import { Button } from "antd";
import { Link } from "react-router-dom";

const UserProfileView: React.FC = () => {
  const userInfo = useAppSelector(useUserInfo);
  const [posts, setPosts] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const loadPosts = async () => {
      // Simulate fetching posts
      setPosts([{ id: 1, content: "Sample post" }]);
    };
    
    const loadSettings = async () => {
      // Simulate fetching settings
      setSettings({ theme: "dark", notifications: true });
      setIsDarkMode(true);
    };

    loadPosts();
    loadSettings();
  }, []);

  const handleTabChange = (key: string) => {
    console.log("Selected Tab:", key);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 border rounded-lg bg-gray-100">
      <ProfileHeader userInfo={userInfo}/>
      <div className="mt-8 flex flex-col items-center">
        <div className="text-center border-b my-2">
          <h1 className="text-3xl font-bold">{userInfo?.name}</h1>
          <p className="text-gray-600 mt-2">{userInfo?.email}</p>
          <Link to="/profile-setting" className="">
            <Button  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
              Edit Profile
            </Button>
          </Link>
        </div>
        <SettingsTabs
          isDarkMode={isDarkMode}
          settings={settings}
          posts={posts}
          onChange={handleTabChange}
          
        />
      </div>
    </div>
  );
};

export default UserProfileView;
