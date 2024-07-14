import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout, useUserInfo } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutReqMutation } from "../../redux/features/auth/authApi";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  BellOutlined,
  SearchOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  Drawer,
  Badge,
  Input,
  Dropdown,
  Switch,
  MenuProps,
  Button,
} from "antd";

interface NavbarProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}

type MenuItem = Required<MenuProps>["items"][number];

const Navbar: React.FC<NavbarProps> = ({ darkMode, handleThemeChange }) => {
  const userInfo = useAppSelector(useUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [logoutReq] = useLogoutReqMutation();

  const handleLogout = async () => {
    try {
      await logoutReq({}).unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const items: MenuItem[] = [
    {
      key: "0",
      label: (
        <Link to="/user-profile" onClick={onClose}>
          <UserOutlined /> Profile
        </Link>
      ),
    },
    {
      key: "1",
      label: (
        <Link to="/profile-setting" onClick={onClose}>
          <SettingOutlined /> Settings
        </Link>
      ),
    },
    { type: "divider" },
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            handleLogout();
            onClose();
          }}
        >
          <LogoutOutlined /> Logout
        </div>
      ),
    },
  ];

  return (
    <div className="sticky top-0 z-30 bg-slate-100 shadow-md w-full">
      <div className="flex justify-between items-center px-4 py-2 font-bold">
        <Link to="/">
          <h4 className="md:text-4xl text-2xl font-semibold text-blue-500">
            Thoughts
          </h4>
        </Link>
        <div className="hidden lg:flex items-center space-x-4">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            className="w-64"
          />
          <Link to="/">
            <span className="mx-4 hover:text-blue-500">Home</span>
          </Link>
          {/* <Link to="/blogs">
            <span className="mx-4 hover:text-blue-500">Blogs</span>
          </Link> */}
          <Link to="/about">
            <span className="mx-4 hover:text-blue-500">About</span>
          </Link>
          {userInfo?.email ? (
            <div className="relative flex items-center space-x-4">
              <Badge count={3}>
                <MessageOutlined className="text-2xl text-gray-700" />
              </Badge>
              <Badge count={5}>
                <BellOutlined className="text-2xl text-gray-700" />
              </Badge>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center cursor-pointer"
                >
                  <img
                    src={userInfo?.avatar?.url || ""}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border p-0.5 border-blue-500"
                  />
                  <DownOutlined className="ml-2" />
                </div>
              </Dropdown>
              <Switch
                checkedChildren="Dark"
                unCheckedChildren="Light"
                checked={darkMode}
                onChange={handleThemeChange}
              />
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer border px-4 py-2 text-lg font-bold rounded-md shadow-sm bg-blue-500 text-white"
            >
              <p>Login</p>
            </button>
          )}
        </div>
        <Button
          type="primary"
          onClick={showDrawer}
          className="rounded-full cursor-pointer block lg:hidden"
        >
          <MenuFoldOutlined className="text-2xl" />
        </Button>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={drawerVisible}
        width={250}
      >
        <ul className="flex flex-col items-center text-lg space-y-4">
          <li>
            <Input
              placeholder="Search..."
              prefix={<SearchOutlined />}
              className="w-full"
            />
          </li>
          <li>
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={onClose}>
              About
            </Link>
          </li>
          {userInfo?.email ? (
            <>
              <li
                className="cursor-pointer flex items-center space-x-2"
                onClick={onClose}
              >
                <Badge count={3}>
                  <MessageOutlined className="text-2xl text-gray-700" />
                </Badge>
              </li>
              <li
                className="cursor-pointer flex items-center space-x-2"
                onClick={onClose}
              >
                <Badge count={5}>
                  <BellOutlined className="text-2xl text-gray-700" />
                </Badge>
              </li>
              <li className="cursor-pointer flex justify-center items-center space-x-2">
                <Link to="/user-profile" onClick={onClose}>
                  <img
                    src={userInfo?.avatar?.url || ""}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border p-0.5 border-blue-500"
                  />
                </Link>
                <LogoutOutlined
                  onClick={() => {
                    handleLogout();
                    onClose();
                  }}
                  className="text-3xl text-red-600 font-bold"
                  title="Logout"
                />
              </li>
              <li className="flex items-center">
                <Switch
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                  checked={darkMode}
                  onChange={handleThemeChange}
                />
              </li>
            </>
          ) : (
            <li
              onClick={() => {
                navigate("/register");
                onClose();
              }}
              className="cursor-pointer border px-4 py-2 text-lg font-bold rounded-md shadow-sm bg-blue-500 text-white"
            >
              Register
            </li>
          )}
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;
