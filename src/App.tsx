import { Outlet } from "react-router-dom";
import "./App.css";

import Navber from "./pages/Home/Navber";

function App() {
  return (
    <>
      <Navber />
      <Outlet />
    </>
  );
}

export default App;
