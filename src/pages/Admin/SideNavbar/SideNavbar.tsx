import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, Drawer } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppSelector } from "../../../hooks/hooks";
import { useUserInfo } from "../../../redux/features/auth/authSlice";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "1", label: "Option 1" },
      { key: "2", label: "Option 2" },
      { key: "3", label: "Option 3" },
      { key: "4", label: "Option 4" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
    ],
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];

const SideNavbar = () => {
  const [current, setCurrent] = useState("1");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const userInfo = useAppSelector(useUserInfo);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full lg:w-64 lg:min-h-screen bg-white border-r border-gray-200 shadow-md">
        {/* Mobile Menu Button */}
        <div className="lg:hidden p-4">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </div>

        {/* Drawer for Mobile */}
        <Drawer
          title="Menu"
          placement="left"
          onClose={onClose}
          open={drawerVisible}
          width={256}
        >
          <Menu
            defaultSelectedKeys={['1']}
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Drawer>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          {/* User Profile Section */}
          <div className="flex flex-col items-center p-4 border-b border-gray-200">
            <Link to="/user-profile">
              {userInfo?.avatar?.url ? (
                <motion.img
                  src={userInfo.avatar.url}
                  alt="Profile"
                  className="rounded-full w-20 h-20 border-2 border-blue-500"
                />
              ) : (
                <div className="rounded-full bg-gray-200 w-20 h-20 flex items-center justify-center border-2 border-blue-500">
                  <UserAddOutlined className="text-4xl text-gray-500" />
                </div>
              )}
            </Link>
            <span className="mt-2 text-lg font-semibold">{userInfo?.name}</span>
            <span className="text-sm text-gray-600">Role: {userInfo?.role}</span>
          </div>

          {/* Menu */}
          <Menu
            defaultSelectedKeys={['1']}
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
            className="mt-4"
          />
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
