import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

// Recharts imports
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Toggle for mock data
const USE_MOCKS = true;

// Mock data
const mockRevenue = [
  { time: "Week 1", value: 1200 },
  { time: "Week 2", value: 1800 },
  { time: "Week 3", value: 2400 },
];

const mockVolume = [
  { asset: "Raaskoin", volume: 10000 },
  { asset: "ETH", volume: 7000 },
  { asset: "BTC", volume: 5000 },
];

const mockLiquidity = [
  { name: "RABEX", value: 50 },
  { name: "Raaspay", value: 20 },
  { name: "Wallets", value: 30 },
];

export default function Dashboard() {
  const [revenue, setRevenue] = useState([]);
  const [volume, setVolume] = useState([]);
  const [liquidity, setLiquidity] = useState([]);
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    if (USE_MOCKS) {
      setRevenue(mockRevenue);
      setVolume(mockVolume);
      setLiquidity(mockLiquidity);
      setGoldPrice(1925.34);
    } else {
      fetch(import.meta.env.VITE_ORACLE_API + "/gold")
        .then((res) => res.json())
        .then((data) => setGoldPrice(data.price))
        .catch(() => setGoldPrice("N/A"));
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Revenue Trend */}
            <div className="p-4 bg-white rounded-2xl shadow min-h-[220px]">
              <h2 className="text-xl font-bold mb-2">Revenue Trend</h2>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenue}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Volume by Asset */}
            <div className="p-4 bg-white rounded-2xl shadow min-h-[220px]">
              <h2 className="text-xl font-bold mb-2">Volume by Asset</h2>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volume}>
                  <XAxis dataKey="asset" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="volume" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Liquidity Distribution */}
            <div className="p-4 bg-white rounded-2xl shadow min-h-[220px]">
              <h2 className="text-xl font-bold mb-2">Liquidity Distribution</h2>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={liquidity}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={80}
                    label
                  >
                    {liquidity.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={["#6366f1", "#f59e0b", "#10b981"][index % 3]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Chat */}
          <div className="p-4 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-2">RaasGenAI Chat</h2>
            <p className="text-sm text-gray-600">Type “Gold price” → mock response</p>
            <div className="p-2 mt-2 border rounded">
              <p>
                <strong>User:</strong> Gold price?
              </p>
              <p>
                <strong>AI:</strong> {goldPrice ? `$${goldPrice}` : "Fetching..."}
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
