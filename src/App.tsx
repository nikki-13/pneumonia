import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Predict from "./pages/Predict";
import Team from "./pages/team";
import Implementation from "./pages/Implementation";
import "./app.css";

  function App() {
    return (
      <div className="bg-gray-800 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    );
  }

  export default App;
