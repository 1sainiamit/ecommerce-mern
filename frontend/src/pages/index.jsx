import Navbar from "@/components/Navbar";
import React from "react";
import MainSection from "./hero";
import Features from "./features";

const HomePage = () => {
  return (
    <div className="p-2">
      <MainSection />
      <Features />
    </div>
  );
};

export default HomePage;
