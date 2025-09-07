import React from "react";

export default function Card({ title, value }) {
  return (
    <div className="bg-raasWhite shadow-md rounded-2xl p-6 border border-raasGold">
      <h2 className="text-gray-700 font-semibold">{title}</h2>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

