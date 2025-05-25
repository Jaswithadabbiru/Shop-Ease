import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">Dual Lotion</div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="font-medium">Home</a>
        <a href="#" className="font-medium">Shop</a>
        <a href="#" className="font-medium">Access</a>
        <a href="#" className="font-medium">Boughs</a>
      </div>
      <div className="md:hidden">☰</div>
    </nav>
  );
};

export default Navbar;