import React from "react";
import Card from "../components/Card.jsx";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Users" value="1,234" />
      <Card title="Revenue" value="$56,789" />
      <Card title="Active Sessions" value="345" />
    </div>
  );
}

