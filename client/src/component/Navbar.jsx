import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FcParallelTasks } from "react-icons/fc";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link to="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg flex items-center gap-2">
                    <FcParallelTasks className="text-2xl" /> Task Management
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  Home
                </Link>

                <Link
                  to="/task"
                  className=" px-2 py-4 text-gray-500  font-semibold hover:text-blue-400 transition duration-300"
                >
                  Task
                </Link>

                <Link
                  to="/about"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/profile">
                <FaUser className="text-xl text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer" />
              </Link>
              <Link
                to="/login"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
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
                to="/"
                className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
              >
                Task
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li></li>
            <li>
              <Link
                to="/login"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
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
