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
import Failure from "../pages/GoogleLoginCallback/Failure/Failure";
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
  },
]);
export default routes;
