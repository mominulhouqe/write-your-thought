import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ProfileCard from "../pages/ProfileCard/ProfileCard";
import Home from "../pages/Home/Home";
import GoogleLoginCallback from "../pages/GoogleLoginCallback/GoogleLoginCallback";
import ErrorPage from "../components/ErrorPage";
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
        path: "profile",
        element: <ProfileCard />,
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
    path: "/register",
    element: <Register />,
  },
]);
export default routes;
