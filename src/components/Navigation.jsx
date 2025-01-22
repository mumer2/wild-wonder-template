import React from 'react';

const Navigation = () => {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-sky-500">
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Left Links */}
        <ul className="flex items-center space-x-8 text-white font-bold uppercase">
          <li className="group relative">
            <a href="#" className="hover:underline">
              Shop
            </a>
            <div className="absolute left-0 hidden group-hover:block mt-2 bg-white text-black p-2 shadow-lg">
              <a href="#" className="block px-4 py-2">Option 1</a>
              <a href="#" className="block px-4 py-2">Option 2</a>
            </div>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Bundles
            </a>
          </li>
        </ul>

        {/* Logo */}
        <div className="text-white font-extrabold text-2xl">
          wildwonder®
        </div>

        {/* Right Links */}
        <ul className="flex items-center space-x-8 text-white font-bold uppercase">
          <li>
            <a href="#" className="hover:underline">
              Learn
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Find Wildwonder
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <span className="material-icons">person</span>
            <span className="material-icons">shopping_cart</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
