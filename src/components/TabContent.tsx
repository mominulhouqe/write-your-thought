/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Switch, Button, } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface TabContentProps {
  type: string;
  posts?: any[];
  isDarkMode?: boolean;
  settings?: any;
}

const TabContent: React.FC<TabContentProps> = ({ type, posts, isDarkMode, settings }) => {
  if (type === "overview") {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-blue-600">Achievements</h2>
        <p className="text-gray-700 mt-2">Completed 100+ Projects</p>
      </div>
    );
  }

  if (type === "posts") {
    return (
      <div>
        {posts && posts.length > 0 ? (
          posts.map(post => (
            <motion.div
              key={post.id}
              className="mb-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-800">{post.content}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600">No posts available.</p>
        )}
      </div>
    );
  }

  if (type === "settings") {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Settings</h2>
        <div className="mb-4">
          <Link to='/profile-setting'>
            <Button type="primary">Profile Setting</Button>
          </Link>
        </div>
        <div className="mb-4">
          <p className="text-gray-800">Dark Mode</p>
          <Switch checked={isDarkMode} onChange={() => {}} />
        </div>
        <div className="mb-4">
          <p className="text-gray-800">Notifications: {settings?.notifications ? "Enabled" : "Disabled"}</p>
          <Switch
            checked={settings?.notifications}
            onChange={(_checked) => {}}
          />
        </div>
  
        <div className="mb-4">
          <p className="text-gray-800">Privacy Settings</p>
          <Switch
            checked={settings?.privacy}
            onChange={(_checked) => {}}
          />
        </div>
        {/* Additional settings */}
      </div>
    );
  }

  return null;
};

export default TabContent;
