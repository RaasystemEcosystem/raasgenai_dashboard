import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
