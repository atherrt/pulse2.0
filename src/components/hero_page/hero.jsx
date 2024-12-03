// Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-red-100">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
        {/* Hero Text */}
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
          Be the <span className="text-red-600">Pulse</span> That Keeps Lives Beating
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:mt-6">
          Join our mission to connect donors, receivers, and hospitals, creating a seamless
          network to save lives.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            to="/signup"
            className="bg-red-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-red-700 transition duration-150"
          >
            Donate Now
          </Link>
          <Link
            to="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-300 transition duration-150"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
