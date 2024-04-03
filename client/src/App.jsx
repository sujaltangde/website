import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./components/ComingSoon";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/cs" element={<ComingSoon />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
