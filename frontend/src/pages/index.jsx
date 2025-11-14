import Navbar from "@/components/Navbar";
import React from "react";
import MainSection from "./hero";
import Features from "./features";
import { Footer } from "./footer";

const HomePage = () => {
  return (
    <div className="p-2">
      <MainSection />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
