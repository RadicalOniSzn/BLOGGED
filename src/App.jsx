import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import BlogDetail from './pages/blogDetail';
import Culture from "./pages/Culture";
import Politics from "./pages/Politics";
import Technology from "./pages/Technology";
import Card from './components/Card';
import Register from './pages/auth/register';
import "./App.css";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BlogDetail />} />
        <Route path="/business" element={<Business />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/culture/article-1" element={<Culture />} />
        <Route path="/culture/article-2" element={<Card />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/politics/article-1" element={<Politics />} />
        <Route path="/politics/article-2" element={<Card />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/article-1" element={<Technology />} />
        <Route path="/technology/article-2" element={<Card />} />
      </Routes>
    </div>
  )
}

export default App;
