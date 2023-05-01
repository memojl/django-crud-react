import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex justify-between py-3 mx-4">
      <h1 className="font-bold text-3xl">Tasks App</h1>
      <div className="flex justify-between">
        <Link to="/">Home</Link> |<Link to="/tasks">Tasks</Link> |
        <Link to="/tasks-create">Task Add</Link>
      </div>
    </div>
  );
}
