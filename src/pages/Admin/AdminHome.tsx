import React from "react";
import { Typography } from "antd";
import PostManagement from "./PostManagement";
import UserManagement from "./UserManagement";
import UserStatistics from "./UserStatistics";
import UserGrowth from "./UserGrowth/UserGrowth";
import ActiveUsers from "./ActiveUsers/ActiveUsers";
import PostStatistics from "./PostStatistics/PostStatistics";
import AdminActions from "./AdminAction/AdminAction";
import EngagementMetrics from "./EngagementMetrics/EngagementMetrics";
import SideNavbar from "./SideNavbar/SideNavbar";

const { Title } = Typography;

const AdminHome = () => {
  const posts = [
    { id: "1", content: "Sample Post 1" },
    { id: "2", content: "Sample Post 2" },
  ];

  const users = [
    { id: "1", name: "User 1" },
    { id: "2", name: "User 2" },
  ];

  const handleDeletePost = (postId: string) => {
    console.log("Post deleted:", postId);
  };

  const handleRestrictPost = (postId: string) => {
    console.log("Post restricted:", postId);
  };

  const handleDeleteUser = (userId: string) => {
    console.log("User deleted:", userId);
  };

  const handleMakeAdmin = (userId: string) => {
    console.log("User made admin:", userId);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen md:grid grid-cols-5">
      <div>
        <SideNavbar />
      </div>
      <div className="col-span-4">
        <Title level={2} className="text-center">
          Admin Dashboard
        </Title>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostManagement
            posts={posts}
            onDeletePost={handleDeletePost}
            onRestrictPost={handleRestrictPost}
          />
          <UserManagement
            users={users}
            onDeleteUser={handleDeleteUser}
            onMakeAdmin={handleMakeAdmin}
          />
          <UserStatistics />
          <UserGrowth />
          <ActiveUsers />
          <PostStatistics />
          <AdminActions />
          <EngagementMetrics />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
