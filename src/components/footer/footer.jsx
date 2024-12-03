// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Use Cases Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Use Cases</h4>
            <ul className="space-y-2">
              <li>
                <a href="#ui-design" className="text-gray-600 hover:text-red-500">
                  UI Design
                </a>
              </li>
              <li>
                <a href="#ux-design" className="text-gray-600 hover:text-red-500">
                  UX Design
                </a>
              </li>
              <li>
                <a href="#wireframing" className="text-gray-600 hover:text-red-500">
                  Wireframing
                </a>
              </li>
              <li>
                <a href="#diagramming" className="text-gray-600 hover:text-red-500">
                  Diagramming
                </a>
              </li>
              <li>
                <a href="#brainstorming" className="text-gray-600 hover:text-red-500">
                  Brainstorming
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#design" className="text-gray-600 hover:text-red-500">
                  Design
                </a>
              </li>
              <li>
                <a href="#prototyping" className="text-gray-600 hover:text-red-500">
                  Prototyping
                </a>
              </li>
              <li>
                <a href="#dev-features" className="text-gray-600 hover:text-red-500">
                  Development Features
                </a>
              </li>
              <li>
                <a href="#design-systems" className="text-gray-600 hover:text-red-500">
                  Design Systems
                </a>
              </li>
              <li>
                <a href="#collaboration" className="text-gray-600 hover:text-red-500">
                  Collaboration Features
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="text-gray-600 hover:text-red-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#best-practices" className="text-gray-600 hover:text-red-500">
                  Best Practices
                </a>
              </li>
              <li>
                <a href="#colors" className="text-gray-600 hover:text-red-500">
                  Colors
                </a>
              </li>
              <li>
                <a href="#color-wheel" className="text-gray-600 hover:text-red-500">
                  Color Wheel
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-600 hover:text-red-500">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="text-gray-600 hover:text-red-500 text-xl"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#twitter"
                className="text-gray-600 hover:text-red-500 text-xl"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#linkedin"
                className="text-gray-600 hover:text-red-500 text-xl"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#youtube"
                className="text-gray-600 hover:text-red-500 text-xl"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © 2024 Pulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
