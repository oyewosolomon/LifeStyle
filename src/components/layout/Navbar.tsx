import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, User, Briefcase, Globe, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for services dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">
              LifeStyle<span className="text-blue-600">Concierge</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition duration-200">
              Home
            </a>
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-48"
                >
                  <a
                    href="/#services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Appointment Management
                  </a>
                  <a
                    href="/#services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Travel Planning
                  </a>
                  <a
                    href="/#services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Lifestyle Services
                  </a>
                </motion.div>
              )}
            </div>
            <a href="/#about" className="text-gray-700 hover:text-blue-600 transition duration-200">
              About Us
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition duration-200">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/#login"
              className="flex items-center text-gray-700 hover:text-blue-600 transition duration-200"
            >
              <User className="w-5 h-5 mr-2" />
              Login
            </a>
            <a
              href="/#signup"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>
            <button
              onClick={toggleServicesDropdown}
              className="flex items-center text-gray-700 hover:text-blue-600 w-full"
            >
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-2">
                <a
                  href="/#services"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Appointment Management
                </a>
                <a
                  href="/#services"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Travel Planning
                </a>
                <a
                  href="/#services"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Lifestyle Services
                </a>
              </div>
            )}
            <a href="/#about" className="block text-gray-700 hover:text-blue-600">
              About Us
            </a>
            <a href="/#contact" className="block text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <a href="/#login" className="block text-gray-700 hover:text-blue-600">
              Login
            </a>
            <a
              href="/#signup"
              className="block bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;