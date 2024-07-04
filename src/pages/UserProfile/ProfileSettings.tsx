// import React, { useState } from "react";
import { Tabs } from "antd";
import TabContent from "../../components/TabContent";


const { TabPane } = Tabs;

const ProfileSettings: React.FC = () => {


  return (
    <div className="profile-settings">
      <Tabs defaultActiveKey="2">
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
        <TabPane tab="Followers" key="3">
          <TabContent
            type="followers"
      
          />
        </TabPane>
        <TabPane tab="Engagement" key="4">
          <TabContent
            type="engagement"
      
          />
        </TabPane>
        <TabPane tab="Settings" key="5">
          <TabContent
            type="settings"
      
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProfileSettings;
