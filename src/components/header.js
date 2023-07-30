import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <h1>COMPRIX TECHNOLOGY</h1>
      </div>
      <div className="header-right">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </header>
  );
};

export default Header;
