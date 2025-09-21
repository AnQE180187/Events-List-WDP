import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray">&copy; 2025 AIFShop. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray hover:text-white transition">Home</Link>
            <Link to="/catalog" className="text-gray hover:text-white transition">Catalog</Link>
            <Link to="/about" className="text-gray hover:text-white transition">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;