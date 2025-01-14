import React from "react";

const Hero = () => {
  const scrollToPackages = (e) => {
    e.preventDefault();
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      // Get the navbar height to offset the scroll position
      // Adjust this value or get it dynamically if your navbar height is different
      const navbarHeight = 80; // Example height in pixels

      const targetPosition =
        packagesSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Master the Road with Confidence
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            Premium driving instruction in London with certified instructors and
            flexible learning packages
          </p>
          <div className="mt-10 space-x-4">
            <a
              href="#packages"
              onClick={scrollToPackages}
              className="slide-button type1 inline-flex items-center text-base font-medium rounded-md text-white uppercase tracking-wide"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
