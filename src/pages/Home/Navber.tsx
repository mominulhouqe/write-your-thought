import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout, useUserInfo } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutReqMutation } from "../../redux/features/auth/authApi";
import { UserAddOutlined, LogoutOutlined } from "@ant-design/icons";
import { DrawerProps, RadioChangeEvent } from "antd";
import CustomDrawer from "../../components/CustomDrawer";

const Navber: React.FC = () => {
  const [open, setOpen] = useState(false);
  const userInfo = useAppSelector(useUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutReq] = useLogoutReqMutation();

  const handleLogout = async () => {
    try {
      await logoutReq({}).unwrap();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-100 px-2 shadow-md py-2 fixed w-full top-0 z-30 font-bold ">
        <Link to="/">
          <h4 className="md:text-4xl text-2xl font-semibold">Thoughts</h4>
        </Link>
        <ul className="hidden md:flex items-center text-lg">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/post-view">Blogs</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
          {userInfo?.email ? (
            <li className="relative mx-2 flex items-center">
              {/* Profile Image */}
              <Link to="/profile">
                {userInfo?.avatar?.url ? (
                  <img
                    src={userInfo?.avatar?.url}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border p-0.5 border-blue-500"
                  />
                ) : (
                  <UserAddOutlined className="text-2xl" />
                )}
              </Link>
              <button
                onClick={handleLogout}
                className="ml-2 flex items-center text-base"
              >
                <LogoutOutlined
                  className="text-3xl text-red-600 font-bold mx-2"
                  title="logout"
                ></LogoutOutlined>
              </button>
            </li>
          ) : (
            <li
              onClick={() => navigate("/login")}
              className="mx-2 cursor-pointer border px-3 py-2 text-lg font-bold rounded-md shadow-sm bg-blue-500 text-white "
            >
              <a href="#">Login</a>
            </li>
          )}
        </ul>
        <button
          type="button"
          onClick={showDrawer}
          className="bg-rose-400 p-2 rounded-full cursor-pointer block md:hidden text-white"
        >
          Menu
        </button>
      </div>

      <CustomDrawer
        title="Basic Drawer"
        placement={placement}
        open={open}
        onClose={onClose}
        onOpen={showDrawer}
        onPlacementChange={onChange}
      >
        <ul className="flex flex-col items-center text-lg">
          <li className="my-2">
            <Link to="/">Home</Link>
          </li>
          <li className="my-2">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="my-2">
            <Link to="/about">About</Link>
          </li>
          {userInfo?.email ? (
            <li className="mx-2 my-2 cursor-pointer flex justify-center items-center">
              <Link to="/profile">
                {/* Profile Image */}
                {userInfo?.avatar?.url ? (
                  <img
                    src={userInfo?.avatar?.url}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border p-0.5 border-blue-500"
                  />
                ) : (
                  <UserAddOutlined className="text-2xl" />
                )}
              </Link>
              <LogoutOutlined
                onClick={handleLogout}
                className="text-3xl text-red-600 font-bold mx-2"
                title="logout"
              ></LogoutOutlined>
            </li>
          ) : (
            <li
              onClick={() => navigate("/login")}
              className="mx-2 cursor-pointer border px-3 py-2 text-lg font-bold rounded-md shadow-sm bg-blue-500 text-white "
            >
              <a href="#">Login</a>
            </li>
          )}
        </ul>
      </CustomDrawer>
    </div>
  );
};

export default Navber;
