import { Outlet } from "react-router-dom";

import Navber from "./pages/Home/Navber";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Navber />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
