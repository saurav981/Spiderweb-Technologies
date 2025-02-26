import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import GradientBackground from "./components/GradientBackground";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-blue-950/20">
      <GradientBackground />
      <Navbar />

      <div className="flex gap-4 h-full overflow-auto p-3">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
