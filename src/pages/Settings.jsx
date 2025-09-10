import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx"; // Import the Navbar

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const envVars = {
    RABEX: import.meta.env.VITE_RABEX_API,
    RAASPAY: import.meta.env.VITE_RAASPAY_API,
    RAASWALLET: import.meta.env.VITE_RAASWALLET_API,
    RAASKOIN: import.meta.env.VITE_RAASKOIN_API,
    ORACLE: import.meta.env.VITE_ORACLE_API,
    WEBSOCKET: import.meta.env.VITE_WS_URL,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Settings</h1>

        {/* Notification toggle */}
        <div className="flex items-center justify-between bg-raasWhite p-4 rounded-lg shadow border border-raasGold">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="h-5 w-5"
          />
        </div>

        {/* Dark mode toggle */}
        <div className="flex items-center justify-between bg-raasWhite p-4 rounded-lg shadow border border-raasGold">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="h-5 w-5"
          />
        </div>

        {/* Placeholder settings */}
        <div className="bg-raasWhite p-4 rounded-lg shadow text-gray-500 border border-raasGold">
          More settings coming soon...
        </div>

        {/* .env Variables Display */}
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold mb-2">Current API / WebSocket URLs (.env)</h3>
          <ul className="list-disc list-inside text-sm">
            {Object.entries(envVars).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
