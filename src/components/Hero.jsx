const Hero = () => {
  return (
    <div className="relative bg-primary">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Learn to Drive with Confidence
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
            Professional driving instruction with flexible packages to suit your
            needs
          </p>
          <div className="mt-10">
            <a
              href="#packages"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
            >
              View Our Packages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
