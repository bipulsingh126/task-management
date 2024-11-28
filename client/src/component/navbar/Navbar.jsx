import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from 'lucide-react'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
      setIsOpen(!isOpen)
    }
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">
                    Task Management
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/login"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleNavbar}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-500" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="">
            <li>
              <Link
                href="/"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
