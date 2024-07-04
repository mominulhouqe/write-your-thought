import React from "react";
import { Menu, Dropdown } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, DownOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProfileDropdownProps {
  onLogout: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/user-profile">
          <UserOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/settings">
          <SettingOutlined /> Settings
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={onLogout}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
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
