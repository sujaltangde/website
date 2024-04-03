import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import ComingSoon from "./components/ComingSoon";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import EventReport from "./pages/EventReport";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/cs" element={<ComingSoon />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/upcoming" element={<Event />} />
        <Route path="/events/report" element={<EventReport />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
