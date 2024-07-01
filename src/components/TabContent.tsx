/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Switch } from "antd";

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
        <h2 className="text-xl font-semibold">Achievements</h2>
        <p className="text-gray-700 mt-2">Completed 100+ Projects</p>
      </div>
    );
  }

  if (type === "posts") {
    return (
      <div>
        {posts && posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="mb-4 p-4 border rounded-lg">
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    );
  }

  if (type === "settings") {
    return (
      <div>
        <h2 className="text-xl font-semibold">Settings</h2>
        <div className="mb-4">
          <p>Dark Mode</p>
          <Switch checked={isDarkMode} onChange={() => {}} />
        </div>
        <div className="mb-4">
          <p>Notifications: {settings?.notifications ? "Enabled" : "Disabled"}</p>
          <Switch
            checked={settings?.notifications}
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
