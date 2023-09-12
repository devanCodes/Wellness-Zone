import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navigation = () => {
  // initializes a state variable 'isMenuOpen' using the 'useState' hook, which will be used to determine whether the mobile menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // this toggles the value of 'isMenuOpen' when called; used to open and close the mobile menu when the button is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-turqoise">
      <button
        className="text-3xl sm:hidden absolute right-2 top-[155px] pt-2 cursor-pointer"
        onClick={toggleMenu} // event handler that triggers the toggleMenu function when clicked
      >
        {/* button displays either the RxCross1 icon (if opened) or the RxHamburgerMenu icon (if closed) based on the 'isMenuOpen' state */}
        {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />} 
      </button>
      {/* conditionally rendering the menu only when 'isMenuOpen' is 'true'; provides links to the 'Home', 'About', and 'Contact' pages using 'Link' components from the React router */}
      {isMenuOpen && (
        // this menu will only be displayed on xs (mobile) screens
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
