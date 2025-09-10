import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx"; // Import Dashboard
import Home from "./pages/Home.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  // Temporary console logs to verify .env variables
  console.log("RABEX API URL:", import.meta.env.VITE_RABEX_API);
  console.log("RAASPAY API URL:", import.meta.env.VITE_RAASPAY_API);
  console.log("RAASWALLET API URL:", import.meta.env.VITE_RAASWALLET_API);
  console.log("RAASKOIN API URL:", import.meta.env.VITE_RAASKOIN_API);
  console.log("ORACLE API URL:", import.meta.env.VITE_ORACLE_API);
  console.log("WebSocket URL:", import.meta.env.VITE_WS_URL);

  return (
    <Routes>
      {/* Default entry point goes to Dashboard */}
      <Route path="/" element={<Dashboard />} />

      {/* Other pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />

      {/* Redirect any unknown route to Dashboard */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
