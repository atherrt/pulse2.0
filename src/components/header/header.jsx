import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/logo.svg" alt="Pulse Logo" className="h-8 w-auto" />
          </Link>
          <Link to="/" className="text-lg font-bold text-red-600">
            PULSE
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/community"
            className="text-gray-600 hover:text-red-500 transition duration-150"
          >
            Community
          </Link>
          <Link
            to="/resources"
            className="text-gray-600 hover:text-red-500 transition duration-150"
          >
            Resources
          </Link>
          <Link
            to="/pricing"
            className="text-gray-600 hover:text-red-500 transition duration-150"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-red-500 transition duration-150"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="hidden md:block text-sm font-medium text-gray-600 hover:text-red-500"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-red-700 transition duration-150"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-red-500"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
