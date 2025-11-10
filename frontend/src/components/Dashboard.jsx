import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Footer } from "@/pages/footer";

const DashboardPage = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Outlet />
      <div className="min-h-screen w-full place-content-end pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
