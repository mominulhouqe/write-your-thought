// import React, { useState } from "react";
import { Tabs } from "antd";
import TabContent from "../../components/TabContent";


const { TabPane } = Tabs;

const ProfileSettings: React.FC = () => {
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // const [settings, setSettings] = useState<any>({
  //   notifications: true,
  // });



  return (
    <div className="profile-settings">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Overview" key="1">
          <TabContent
            type="overview"
           
       
          />
        </TabPane>
        <TabPane tab="Posts" key="2">
          <TabContent
            type="posts"
            posts={[{ id: 1, content: "Sample Post" }]}
            
           
          />
        </TabPane>
        <TabPane tab="Settings" key="3">
          <TabContent
            type="settings"
      
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProfileSettings;
