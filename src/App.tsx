import { Outlet } from "react-router-dom";
import "./App.css";

import Navber from "./pages/Home/Navber";

function App() {
  return (
    <div className="bg-gray-200 h-full">
      <Navber />
      <Outlet />
    </div>
  );
}

export default App;
