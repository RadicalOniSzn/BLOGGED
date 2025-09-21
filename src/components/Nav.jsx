import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        
        <div className="text-xl font-bold">
          <p className="text-blue-600">
            {`>>BLOGGED `}
            <span className="text-black">-IN</span>
          </p>
        </div>

        
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
            Home
          </Link>
          <Link to="/politics" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
            Politics
          </Link>
          <Link to="/technology" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
            Technology
          </Link>
          <Link to="/business" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
            Business
          </Link>
          <Link to="/culture" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
            Culture
          </Link>
        </div>

        
        <div className="md:hidden">
          <button
            className="text-gray-700 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md"
            onClick={toggleMenu}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-gray-50 border-t">
          <Link to="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/politics" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>
            Politics
          </Link>
          <Link to="/technology" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>
            Technology
          </Link>
          <Link to="/business" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>
            Business
          </Link>
          <Link to="/culture" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>
            Culture
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

