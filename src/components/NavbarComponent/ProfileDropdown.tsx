import React from "react";
import {  Dropdown, MenuProps } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProfileDropdownProps {
  onLogout: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onLogout }) => {
  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Link to="/user-profile">
          <UserOutlined /> Profile
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link to="/settings">
          <SettingOutlined /> Settings
        </Link>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: (
        <div onClick={onLogout}>
          <LogoutOutlined /> Logout
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <motion.a
        onClick={(e) => e.preventDefault()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DownOutlined className="ml-2" />
      </motion.a>
    </Dropdown>
  );
};

export default ProfileDropdown;
