import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";
import Benefits from "../components/Home/Benefits";

export const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 pt-20">
        <Hero />

        <About />

        <Projects />

        <Benefits />
      </div>
    </>
  );
};
