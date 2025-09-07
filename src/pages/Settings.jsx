import React, { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="flex items-center justify-between bg-raasWhite p-4 rounded-lg shadow border border-raasGold">
        <span>Enable Notifications</span>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="h-5 w-5"
        />
      </div>

      <div className="flex items-center justify-between bg-raasWhite p-4 rounded-lg shadow border border-raasGold">
        <span>Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="h-5 w-5"
        />
      </div>

      <div className="bg-raasWhite p-4 rounded-lg shadow text-gray-500 border border-raasGold">
        More settings coming soon...
      </div>
    </div>
  );
}


