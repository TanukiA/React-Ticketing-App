import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="App-footer">
      <nav>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </footer>
  );
};

export default Footer;