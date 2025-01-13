const Hero = () => {
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
