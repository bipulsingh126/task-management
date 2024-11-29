import React from "react";
const Footer = () => {
  return (
    <footer className=" mt-3 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 xl:mt-0">
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Task Managment
          </h3>
          <p className="mt-4 text-base text-gray-300">
            Stay focused, organized, and calm with Task Management .
          </p>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2023 Task Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
