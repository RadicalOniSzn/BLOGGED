import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";


const Nav = () => {
  

  return (
    <div className="nav-container" >
      <div className="nav-left">
        <p>{`>>BLOGGED   `}<span>-IN</span></p>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/politics" className="nav-link">
          Politics
        </Link>
        <Link to="/technology" className="nav-link">
          Technology
        </Link>
        <Link to="/business" className="nav-link">
          Business
        </Link>
        <Link to="/culture" className="nav-link">
          Culture
        </Link>
      </div>
    </div>
  );
};

export default Nav;
