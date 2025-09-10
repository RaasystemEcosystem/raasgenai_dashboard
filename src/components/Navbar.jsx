import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "block px-4 py-2 rounded hover:bg-raasGold hover:text-white transition";
  const activeClass = "bg-raasGold text-white";

  return (
    <nav className="bg-raasWhite shadow-md p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-raasBlack">RaasGenAI Dashboard</div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            Dashboard
          </NavLink>
          <NavLink to="/home" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            Home
          </NavLink>
          <NavLink to="/analytics" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            Analytics
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            Settings
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-1">
          <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`} onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="/home" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/analytics" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`} onClick={() => setIsOpen(false)}>
            Analytics
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`} onClick={() => setIsOpen(false)}>
            Settings
          </NavLink>
        </div>
      )}
    </nav>
  );
}
