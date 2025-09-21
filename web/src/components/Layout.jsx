import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;