import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-turqoise">
      <button
        className="text-3xl sm:hidden absolute right-2 top-52 pt-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
      {isMenuOpen && (
        <nav className="flex flex-col mx-auto py-4 sm:hidden font-medium">
          <Link
            to="/"
            className="hover:text-gray-500 hover:bg-turqoise_dark hover:duration-500 rounded-lg px-3 py-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-500 hover:bg-turqoise_dark hover:duration-500 rounded-lg px-3 py-2"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-500 hover:bg-turqoise_dark hover:duration-500 rounded-lg px-3 py-2"
          >
            Contact
          </Link>
        </nav>
      )}
      <nav className="relative container mx-auto space-x-8 py-4 hidden sm:flex justify-center bg-turqoise font-medium">
        <Link
          to="/"
          className="hover:text-gray-500 hover:bg-turqoise_dark hover:duration-500 rounded-lg px-3 py-2"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-gray-500 hover:bg-turqoise_dark hover:duration-500 rounded-lg px-3 py-2"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-500 hover:bg-turqoise_dark hover:duration-500 rounded-lg px-3 py-2"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
