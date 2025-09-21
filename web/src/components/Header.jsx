import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          AIFShop
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/catalog" className="text-white hover:text-primary transition">Catalog</Link>
          <Link to="/cart" className="text-white hover:text-primary transition">Cart</Link>
          <Link to="/profile" className="text-white hover:text-primary transition">Profile</Link>
          <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;