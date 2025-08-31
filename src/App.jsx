import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Culture from "./pages/Culture";
import Politics from "./pages/Politics";
import Technology from "./pages/Technology";
import "./App.css";




function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Business />} />
        <Route path="/blog" element={<Culture />} />
        <Route path="/contact" element={<Politics />} />
        <Route path="/privacy" element={<Technology />} />

      </Routes>
      

    </div>
  )
}

export default App;
