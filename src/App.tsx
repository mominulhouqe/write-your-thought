import { Outlet } from "react-router-dom";

import Navber from "./pages/Home/Navber";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <Navber darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
