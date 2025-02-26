import { useState } from "react";
import { ChevronUp, ChevronDown, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import CurvyLine from "./CurvyLine";

const menuItems = [
  {
    menu: "Events",
    path: ["/event-requests", "/event-name"],
    subMenus: ["New Requests", "Events", "Estimate", "Partial Requests"],
  },
  { menu: "Positions" },
  { menu: "Contractors" },
  { menu: "Users", subMenus: ["Admins", "Clients", "Coordinators"] },
  { menu: "Profile" },
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="border-normal p-3 min-w-[16rem] 2xl:w-[16%] flex flex-col justify-between bg-background/50 overflow-auto shadow-normal">
      <div>
        {menuItems.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => item.subMenus && toggleMenu(item.menu)}
              className="flex items-center justify-between w-full px-3 p-2 hover:bg-white/10 rounded"
            >
              <span className="text-lg font-semibold text-white/90  ">
                {item.menu}
              </span>
              {item.subMenus && (
                <span>
                  {openMenus[item.menu] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              )}
            </button>
            {item.subMenus && openMenus[item.menu] && (
              <div className="ml-6 mt-1 relative pl-2">
                {/* This creates the vertical line */}
                <div className="absolute left-0 top-0 h-[calc(100%-38px)] w-0.5 bg-white"></div>
                {item.subMenus.map((subItem, index) => (
                  <div className="relative" key={index}>
                    <Link
                      to={
                        subItem === "New Requests"
                          ? item.path[0]
                          : subItem === "Events"
                          ? item.path[1]
                          : "/"
                      }
                    >
                      {/* Curvy SVG */}
                      <div className="absolute -left-1.5 bottom-4">
                        <CurvyLine />
                      </div>
                      <button className="text-left px-3 p-2 text-white/70 hover:text-white w-[calc(100%-0.75rem)] ml-3 hover:bg-white/10 rounded text-sm">
                        {subItem}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="mt-4 btn-normal bg-black flex items-center justify-center gap-2 w-full">
        <LogOut size={19} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
