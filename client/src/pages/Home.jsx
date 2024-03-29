import React from "react";
import { Hero } from "../components/Home/Hero";
import About from "../components/Home/About";

export const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 pt-20">
        <Hero />
      </div>
      <div className="min-h-screen bg-gray-900 pt-20">
        <About />
      </div>
    </>
  );
};
