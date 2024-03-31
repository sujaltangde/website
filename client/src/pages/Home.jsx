import React from 'react';
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";
import Benefits from "../components/Home/Benefits";
import CommunityPartners from "../components/Home/CommunityPartners"
import Faq from '../components/Home/Faq';
import CodeAndContact from '../components/Home/CodeAndContact';
import Testimonials from '../components/Home/Testimonials';

const Home = React.memo(() => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <Hero />
      <About />
      <Projects />
      <Benefits />
      <CommunityPartners />
      <Testimonials />
      <Faq />
      <CodeAndContact />
    </div>
  );
});

Home.displayName = 'Home'; 

export default Home;
