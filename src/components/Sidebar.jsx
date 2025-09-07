import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChartLine, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-raasBlack text-raasGold flex flex-col p-4 gap-6">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-raasGold hover:text-raasBlack ${
            isActive ? "bg-raasGold text-raasBlack" : ""
          }`
        }
      >
        <FaHome /> Home
      </NavLink>
      <NavLink
        to="/analytics"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-raasGold hover:text-raasBlack ${
            isActive ? "bg-raasGold text-raasBlack" : ""
          }`
        }
      >
        <FaChartLine /> Analytics
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-raasGold hover:text-raasBlack ${
            isActive ? "bg-raasGold text-raasBlack" : ""
          }`
        }
      >
        <FaCog /> Settings
      </NavLink>
    </aside>
  );
}
