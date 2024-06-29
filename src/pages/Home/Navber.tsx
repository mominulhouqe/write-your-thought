import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout, useUserInfo } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useLogoutReqMutation } from "../../redux/features/auth/authApi";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const userInfo = useAppSelector(useUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logoutReq, { isLoading }] = useLogoutReqMutation();

  const handleLogout = async () => {
    try {
      const res = await logoutReq({}).unwrap();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-100 px-2 shadow-md py-2 fixed w-full top-0 z-30 ">
        <h4 className="md:text-4xl text-2xl font-semibold">Thoughts</h4>
        <ul className="hidden md:flex">
          <li className="mx-2">
            <a href="#">Home</a>
          </li>
          <li className="mx-2">
            <a href="#">Blogs</a>
          </li>
          <li className="mx-2">
            <a href="#">About</a>
          </li>
          {userInfo?.email ? (
            <li onClick={handleLogout} className="mx-2">
              <a href="#">Logout</a>
            </li>
          ) : (
            <li onClick={() => navigate("/login")} className="mx-2">
              <a href="#">Login</a>
            </li>
          )}
        </ul>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="bg-rose-400 p-2 rounded-full cursor-pointer block md:hidden text-white"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-100 py-4 mt-12">
          <ul className="flex flex-col items-center">
            <li className="mx-2">
              <a href="#">Home</a>
            </li>
            <li className="mx-2">
              <a href="#">Blogs</a>
            </li>
            <li className="mx-2">
              <a href="#">About</a>
            </li>
            {userInfo?.email ? (
              <li onClick={() => dispatch(logout())} className="mx-2">
                <a href="#">Logout</a>
              </li>
            ) : (
              <li onClick={() => navigate("/login")} className="mx-2">
                <a href="#">Login</a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navber;
