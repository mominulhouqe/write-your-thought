import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import GoogleLoginCallback from "../pages/GoogleLoginCallback/GoogleLoginCallback";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
