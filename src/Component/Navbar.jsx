
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>Home</Link>
      <Link to={'/product'}>Product</Link>
      <Link to={'/addproduct'}>Addproduct</Link>
      <Link to={'/addcart'}>Add to Cart</Link>
    </div>
  );
};

export default Navbar;