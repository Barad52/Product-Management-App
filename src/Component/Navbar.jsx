import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleNavbar}>
        
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to={'/'} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to={'/product'} onClick={() => setIsOpen(false)}>Product</Link>
        <Link to={'/addproduct'} onClick={() => setIsOpen(false)}>Addproduct</Link>
        <Link to={'/addcart'} onClick={() => setIsOpen(false)}>Add to Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
