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
import { Drawer, Badge, Input, Dropdown, Menu, Switch } from "antd";


interface NavbarProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}


const Navbar: React.FC <NavbarProps> = ({ darkMode, handleThemeChange,  })  => {
  const userInfo = useAppSelector(useUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);
 

  const [logoutReq] = useLogoutReqMutation();

  const handleLogout = async () => {
    try {
      await logoutReq({}).unwrap();
      dispatch(logout());
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


  const profileMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/user-profile">
          <UserOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/profile-setting">
          <SettingOutlined /> Settings
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={handleLogout}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="sticky top-0 z-50 bg-slate-100 shadow-md">
      <div  className="flex justify-between items-center px-4 py-2 font-bold">
        <Link to="/">
          <h4 className="md:text-4xl text-2xl font-semibold text-blue-500">
            Thoughts
          </h4>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            className="w-64"
          />
          <Link to="/">
            <span className="mx-4 hover:text-blue-500">Home</span>
          </Link>
          <Link to="/blogs">
            <span className="mx-4 hover:text-blue-500">Blogs</span>
          </Link>
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
              <Dropdown overlay={profileMenu} trigger={['click']}>
                <a onClick={e => e.preventDefault()}>
                  <img
                    src={userInfo?.avatar?.url || ""}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border p-0.5 border-blue-500"
                  />
                  <DownOutlined className="ml-2" />
                </a>
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
              Login
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={showDrawer}
          className="rounded-full cursor-pointer block md:hidden"
        >
          <MenuFoldOutlined className="text-2xl" />
        </button>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {userInfo?.email ? (
            <>
              <li className="cursor-pointer flex items-center space-x-2">
                <Badge count={3}>
                  <MessageOutlined className="text-2xl text-gray-700" />
                </Badge>
              </li>
              <li className="cursor-pointer flex items-center space-x-2">
                <Badge count={5}>
                  <BellOutlined className="text-2xl text-gray-700" />
                </Badge>
              </li>
              <li className="cursor-pointer flex justify-center items-center space-x-2">
                <Link to="/user-profile">
                  <img
                    src={userInfo?.avatar?.url || ""}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border p-0.5 border-blue-500"
                  />
                </Link>
                <LogoutOutlined
                  onClick={handleLogout}
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
              onClick={() => navigate("/register")}
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
