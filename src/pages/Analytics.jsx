import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from "../components/Card.jsx";

const data = [
  { name: "Jan", users: 400, revenue: 2400, sessions: 2400 },
  { name: "Feb", users: 800, revenue: 1398, sessions: 2210 },
  { name: "Mar", users: 600, revenue: 9800, sessions: 2290 },
  { name: "Apr", users: 1200, revenue: 3908, sessions: 2000 },
  { name: "May", users: 900, revenue: 4800, sessions: 2181 },
  { name: "Jun", users: 1500, revenue: 3800, sessions: 2500 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Users" value="12,345" />
        <Card title="Total Revenue" value="$123,456" />
        <Card title="Active Sessions" value="4,567" />
      </div>

      <div className="bg-raasWhite shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">User Growth Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            <Line type="monotone" dataKey="sessions" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
