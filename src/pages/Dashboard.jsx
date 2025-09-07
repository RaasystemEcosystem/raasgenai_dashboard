import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-raasWhite text-raasBlack">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

