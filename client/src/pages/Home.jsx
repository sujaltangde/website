import React from 'react';
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";
import Benefits from "../components/Home/Benefits";

const Home = React.memo(() => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <Hero />
      <About />
      <Projects />
      <Benefits />
    </div>
  );
});

export default Home;
