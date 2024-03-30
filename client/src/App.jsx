import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./components/ComingSoon";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/cs" element={<ComingSoon />} />
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <ComingSoon/> */}
    </>
  );
}

export default App;
