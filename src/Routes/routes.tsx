import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ProfileCard from "../pages/ProfileSetting/ProfileCard";
import Home from "../pages/Home/Home";
import GoogleLoginCallback from "../pages/GoogleLoginCallback/GoogleLoginCallback";
import ErrorPage from "../components/ErrorPage";
import SingleViewPost from "../pages/Home/SingleViewPost";
import UserProfileView from "../pages/UserProfile/UserProfileView";
import AdminHome from "../pages/Admin/AdminHome";
import AuthenticatedRoute from "./AuthenticatedRoute";
import PostManagement from "../pages/Admin/PostManagement/PostManagement";
import AdminHomeLayout from "../pages/Admin/AdminHomeLayout";
import UserManagement from "../pages/Admin/UserManagement/UserManagement";
import AdminActions from "../pages/Admin/AdminAction/AdminAction";
import Failure from "../pages/GoogleLoginCallback/Failure/Failure";
import About from "../pages/Home/About/About";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile-setting",
        element: <ProfileCard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user-profile",
        element: (
          <AuthenticatedRoute>
            <UserProfileView />
          </AuthenticatedRoute>
        ),
      },

      {
        path: "post-view/:postId",
        element: <SingleViewPost />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/success",
    element: <GoogleLoginCallback />,
  },
  {
    path: "/login/failure",
    element: <Failure />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminHome />,
    children:[
      {
        index:true,
        element:<AdminHomeLayout />
      },
      {
        path:"all-posts",
        element:<PostManagement />
      },
      {
        path:"all-users",
        element:<UserManagement />
      },
      {
        path:"activitis",
        element:<AdminActions />
      },
    ]
  },
]);
export default routes;
