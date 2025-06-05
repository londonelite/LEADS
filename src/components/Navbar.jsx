import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AnimatedBookButton from "./AnimatedBookButton";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "/contact" },
    { name: "Reviews", href: "/reviews" },
    { name: "Book Now", href: "/booking" },
  ];

  const handleClick = (e) => {
    if (
      location.pathname === "/booking" &&
      (e.target.tagName === "INPUT" ||
        e.target.tagName === "SELECT" ||
        e.target.tagName === "TEXTAREA")
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <nav
      className="bg-white shadow-lg sticky top-0 z-50 relative"
      onClick={handleClick}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center pr-4">
            <img
              src = {logo}
              alt="London Elite Driving Academy"
              className="h-16 w-auto object-contain transition-all duration-300"
            />
          </div>
          <div className="hidden sm:flex sm:items-center space-x-8">
            {navigation.map((item) =>
              item.name !== "Book Now" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group relative px-3 py-2 text-sm font-semibold text-gray-700 transition-all duration-300"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                  <span className="absolute inset-0 w-full h-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-lg"></span>
                </Link>
              ) : (
                <AnimatedBookButton key={item.name} href={item.href} />
              )
            )}
          </div>
          <div className="sm:hidden flex items-center">
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
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium                     
                    ${
                      item.name === "Book Now"
                        ? "text-blue-600 hover:bg-blue-50"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;