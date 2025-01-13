import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Book Now", href: "/booking" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/src/images/logo.png"
                alt="London Elite Driving Academy"
                style={{ height: "450px", width: "auto", marginLeft: "-60px" }}
              />
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center space-x-8">
            {navigation.map((item) =>
              item.name !== "Book Now" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  item.name === "Book Now"
                    ? "text-blue-600 hover:bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
