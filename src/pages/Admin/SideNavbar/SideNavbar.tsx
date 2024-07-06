import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
  UserAddOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, Drawer } from "antd";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppSelector } from "../../../hooks/hooks";
import { useUserInfo } from "../../../redux/features/auth/authSlice";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Posts Management",
    icon: <MailOutlined />,
    children: [
      { key: "1", label: <NavLink to="all-posts">All Post</NavLink> },
      { key: "2", label: "Restics Post" },
      { key: "3", label: "Report's Post" },
    ],
  },
  {
    key: "sub2",
    label: "User Management",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: <NavLink to="all-users">All User's</NavLink> },

      { key: "7", label: "Reported User's" },
      { key: "8", label: "Blocked User's" },
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
    key: "9",
    icon:<HistoryOutlined></HistoryOutlined>,
    label: <NavLink to="activitis">Activitis</NavLink>,
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
      <div className="fixed top-0 z-50 w-full lg:w-72 lg:min-h-screen bg-white border-r border-gray-200 shadow-md">
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
            defaultSelectedKeys={["1"]}
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
            <span className="text-sm text-gray-600">
              Role: {userInfo?.role}
            </span>
          </div>

          {/* Menu */}
          <Menu
            defaultSelectedKeys={["1"]}
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
