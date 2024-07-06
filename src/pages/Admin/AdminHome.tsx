import { Typography } from "antd";
import SideNavbar from "./SideNavbar/SideNavbar";
import { Outlet } from "react-router-dom";

const { Title } = Typography;

const AdminHome = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen lg:grid grid-cols-4">
      <div>
        <SideNavbar />
      </div>
      <div className="col-span-3 mt-16 md:mt-2">
        <Title
          level={2}
          className="text-center sm:block hidden  bg-white py-3 rounded-lg"
        >
          Admin Dashboard
        </Title>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminHome;
