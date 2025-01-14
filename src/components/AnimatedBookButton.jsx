import React from "react";
import { Link } from "react-router-dom";

const AnimatedBookButton = ({ href, className = "" }) => {
  return (
    <Link
      to={href}
      className={`
        group
        relative inline-flex items-center justify-center
        px-6 py-3 bg-blue-900 hover:scale-105
        transition-all duration-500 ease-in-out
        w-fit decoration-none
        hover:rounded-none rounded-lg
        ${className}
      `}
    >
      {/* Animated Border */}
      <div
        className={`
          absolute inset-0 border-2 border-blue-500 opacity-0
          transition-all duration-500 ease-in-out rotate-3
          group-hover:inset-2 group-hover:opacity-100 group-hover:rotate-0
        `}
      />

      {/* Button Content */}
      <div className="relative transition-all duration-500 ease-in-out">
        <div className="relative flex items-center h-6 overflow-hidden">
          {/* Main Text */}
          <span className="text-sm font-medium text-white">Book</span>

          {/* Reveal Text */}
          <span
            className={`
            text-sm font-medium text-white
            max-w-0 opacity-0 overflow-hidden
            transition-all duration-500 ease-in-out
            group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-1
          `}
          >
            Now
          </span>

          {/* Animated Trail */}
          <div
            className={`
            absolute right-0 h-full w-full opacity-0
            group-hover:animate-trail
          `}
          />
        </div>
      </div>
    </Link>
  );
};

export default AnimatedBookButton;
