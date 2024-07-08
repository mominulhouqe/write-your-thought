/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import TabContent from "./TabContent";

interface SettingsTabsProps {
  isDarkMode: boolean;
  settings: any;
  posts: any[];
  onChange: (key: string) => void;
}

const SettingsTabs: React.FC<SettingsTabsProps> = ({settings, posts, onChange }) => {
  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: "Overview",
      children: <TabContent type="overview" />,
    },
    {
      key: '2',
      label: "Posts",
      children: <TabContent type="posts" posts={posts} />,
    },
    {
      key: '3',
      label: "Settings",
      children: <TabContent type="settings" settings={settings} />,
    },
  ];

  return (
    <div className="w-full mt-8">
      <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />
    </div>
  );
};

export default SettingsTabs;
