import React from 'react';
import UserHeader from '../hospitaldashboard/components/hospitalheader'; // Adjust the path to where UserHeader is located
import HospitalHeader from '../hospitaldashboard/components/hospitalheader';

const HospitalLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <HospitalHeader />

      {/* Main Content */}
      <main className="px-4 py-6">
        {children}
      </main>
    </div>
  );
};

export default HospitalLayout;
