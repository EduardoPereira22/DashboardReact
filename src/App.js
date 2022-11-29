import "./App.css";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Principal from "./components/Principal/Principal";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Principal />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};
export default App;
