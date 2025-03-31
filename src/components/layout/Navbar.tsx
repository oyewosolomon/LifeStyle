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
          <div className="flex-shrink-0 flex gap-3">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.71597 3.20277C8.98843 2.93241 9.43017 2.93241 9.70263 3.20277L11.5631 5.04893C11.7626 5.24692 11.8223 5.5447 11.7143 5.8034C11.6063 6.06209 11.352 6.23077 11.0698 6.23077H9.2093C5.99834 6.23077 3.39535 8.81374 3.39535 12C3.39535 15.1862 5.99857 17.7692 9.20956 17.7692H9.67442C10.0597 17.7692 10.3721 18.0792 10.3721 18.4615C10.3721 18.8439 10.0597 19.1538 9.67442 19.1538H9.20956C5.22801 19.1538 2 15.951 2 12C2 8.04904 5.22771 4.84615 9.2093 4.84615H9.38543L8.71597 4.18184C8.44351 3.91148 8.44351 3.47314 8.71597 3.20277Z" fill="#2563eb"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6279 5.53846C13.6279 5.15611 13.9403 4.84615 14.3256 4.84615H14.7907C18.7723 4.84615 22 8.04904 22 12C22 15.951 18.7723 19.1538 14.7907 19.1538H14.6146L15.284 19.8182C15.5565 20.0885 15.5565 20.5269 15.284 20.7972C15.0116 21.0676 14.5698 21.0676 14.2974 20.7972L12.4369 18.9511C12.2374 18.7531 12.1777 18.4553 12.2857 18.1966C12.3937 17.9379 12.648 17.7692 12.9302 17.7692H14.7907C18.0017 17.7692 20.6047 15.1863 20.6047 12C20.6047 8.81374 18.0017 6.23077 14.7907 6.23077H14.3256C13.9403 6.23077 13.6279 5.92081 13.6279 5.53846Z" fill="#2563eb"></path> <path d="M5.48837 12C5.48837 9.96079 7.15429 8.30769 9.2093 8.30769H14.7907C16.8457 8.30769 18.5116 9.96079 18.5116 12C18.5116 14.0392 16.8457 15.6923 14.7907 15.6923H9.2093C7.15429 15.6923 5.48837 14.0392 5.48837 12Z" fill="#2563eb"></path> </g></svg>
            <a href="/" className="text-2xl font-bold text-gray-900">
              LifeStyle <span className="text-blue-600">Concierge</span>
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