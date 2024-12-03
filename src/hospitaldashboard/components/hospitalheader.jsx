import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

const HospitalHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="path-to-logo.png" // Replace with your logo path
          alt="Pulse Logo"
          className="w-8 h-8"
        />
        <span className="ml-2 text-lg font-bold text-red-600">PULSE</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-8 text-sm">
        <a href="#nearby-hospitals" className="text-red-600 hover:underline">
          VIEW PULSE VERIFIED HOSPITALS
        </a>
        <a href="#donate" className="text-red-600 hover:underline">
          DONATE
        </a>
        <a href="#request-blood" className="text-red-600 hover:underline">
          REQUEST BLOOD
        </a>
        <a href="#give-rating" className="text-gray-700 hover:underline">
          Give Rating
        </a>
        <a href="#edit-profile" className="text-gray-700 hover:underline">
          Edit Profile
        </a>
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-red-800"
      >
        Logout
      </button>
    </header>
  );
};

export default HospitalHeader;
