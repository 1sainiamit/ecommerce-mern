import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const DashboardPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="flex-1 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardPage;
