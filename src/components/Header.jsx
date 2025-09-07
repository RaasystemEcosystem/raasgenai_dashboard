import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-raasBlack text-raasGold shadow-md p-4 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="RaasGenAI Logo" className="h-10 w-10" />
        <span className="font-extrabold text-xl">RaasGenAI Dashboard</span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-raasWhite border-b-2 border-raasGold pb-1"
              : "hover:text-raasGold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive
              ? "text-raasWhite border-b-2 border-raasGold pb-1"
              : "hover:text-raasGold"
          }
        >
          Analytics
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "text-raasWhite border-b-2 border-raasGold pb-1"
              : "hover:text-raasGold"
          }
        >
          Settings
        </NavLink>
      </nav>
    </header>
  );
}
