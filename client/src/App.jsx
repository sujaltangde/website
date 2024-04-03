import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import ComingSoon from "./components/ComingSoon";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/cs" element={<ComingSoon />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
