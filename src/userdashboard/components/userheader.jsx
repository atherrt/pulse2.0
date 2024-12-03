import React from 'react';
import { Link} from 'react-router-dom'; // Import Link and useHistory for routing

const UserHeader = () => {
  

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
        <Link to="#nearby-hospitals" className="text-red-600 hover:underline">
          VIEW PULSE VERIFIED HOSPITALS
        </Link>
        <Link to='/donate' className="text-red-600 hover:underline">
          DONATE
        </Link>
        <Link to="/request-blood" className="text-red-600 hover:underline">
          REQUEST BLOOD
        </Link>
        <Link to="/give-rating" className="text-gray-700 hover:underline">
          Give Rating
        </Link>
        <Link to="/edit-profile" className="text-gray-700 hover:underline">
          Edit Profile
        </Link>
      </nav>

      {/* Logout Button */}
      <button 
       // onClick={handleLogout} 
        className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-red-800"
      >
        Logout
      </button>
    </header>
  );
};

export default UserHeader;
