import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';


interface PostHeaderProps {
  userInfo: {
    name: string;
    avatar?: { url: string };
  };
  createdAt: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ userInfo, createdAt }) => (
  <div className="flex items-center mb-4">
    <Link to="/user-profile">
      <Avatar
        src={userInfo?.avatar?.url || "https://api.dicebear.com/7.x/miniavs/svg?seed=8"}
        size="large"
        className="border-2 border-blue-500"
      />
    </Link>
    <Link to="/user-profile" className="ml-4">
      <h4 className="font-medium text-lg capitalize">{userInfo?.name}</h4>
      <Tooltip title={format(new Date(createdAt), "PPPp")}>
        <span className="text-gray-500">{format(new Date(createdAt), "MMMM do, yyyy h:mm a")}</span>
      </Tooltip>
    </Link>
  </div>
);

export default PostHeader;
