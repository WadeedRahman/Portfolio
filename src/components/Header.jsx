import React from "react";
import "../index.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Wadeed Ur Rahman</div>
      <nav className="nav">
      <Link to="/">Home</Link>
        <Link to="/AboutSection">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        
      </nav>
    </header>
  );
};

export default Header;