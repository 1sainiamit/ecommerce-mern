import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const DashboardPage = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardPage;
