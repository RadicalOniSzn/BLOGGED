import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Culture from "./pages/Culture";
import Politics from "./pages/Politics";
import Technology from "./pages/Technology";
import Card from './components/Card';
import "./App.css";




function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/politics/article-1" element={<Politics />} />
        <Route path="/politics/article-2" element={<Card />} />
        <Route path="/technology" element={<Technology />} />

      </Routes>
      

    </div>
  )
}

export default App;
