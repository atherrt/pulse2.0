import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default AppLayout;
