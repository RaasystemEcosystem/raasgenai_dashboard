import React from "react";
import Card from "../components/Card.jsx"; // Make sure this path is correct
import Navbar from "../components/Navbar.jsx"; // Import the Navbar

export default function Home() {
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
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Users" value="1,234" />
          <Card title="Revenue" value="$56,789" />
          <Card title="Active Sessions" value="345" />
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

