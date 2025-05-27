import React from "react";
import { CheckIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import "./Packages.css";

const PricingCard = ({ tier, price, features }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking?package=${encodeURIComponent(tier)}`);
  };

  return (
    <div className="pricing-card-parent h-full">
      <div className="pricing-card flex flex-col h-full">
        <div className="glass"></div>
        <div className="content flex-grow">
          <div className="title-section">
            <h3 className="text-2xl font-bold text-gray-900">{tier}</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-[45px] font-extrabold text-gray-900">
                ${price}
              </span>
              <span className="ml-1 text-xl text-gray-500">+HST</span>
            </div>
          </div>
          <ul className="mt-6 space-y-4 features-list">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start feature-item">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-emerald-500" />
                <span className="ml-3 text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-bottom mt-auto pt-8">
          <button onClick={handleBookNow} className="book-now-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const HourlyPackageCard = ({ hours, price, onClick }) => {
  return (
    <div className="service-card-wrapper perspective-1000">
      <div className="service-card group relative h-full w-full rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-px transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative h-full rounded-xl bg-white p-6">
          <div className="flex flex-col items-center text-center">
            <ClockIcon className="h-12 w-12 text-blue-600" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              {hours} {parseInt(hours) === 1 ? "Hour" : "Hours"}
            </h4>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              ${price}{" "}
              <span className="text-base font-normal text-gray-600">+HST</span>
            </p>
            <button
              onClick={onClick}
              className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoadTestPackageCard = ({ title, hours, price, onClick }) => {
  return (
    <div className="service-card-wrapper perspective-1000">
      <div className="service-card group relative h-full w-full rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-px transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative h-full rounded-xl bg-white p-6">
          <div className="flex flex-col items-center text-center">
            <MapPinIcon className="h-12 w-12 text-blue-600" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">{title}</h4>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              ${price}{" "}
              <span className="text-base font-normal text-gray-600">+HST</span>
            </p>
            <button
              onClick={onClick}
              className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  const navigate = useNavigate();

  const handlePackageBooking = (packageType) => {
    navigate(`/booking?package=${encodeURIComponent(packageType)}`);
  };

  const handleHourlyBooking = (hours) => {
    navigate(`/booking?hourly=${encodeURIComponent(hours)}`);
  };

  const handleRoadTestBooking = (type) => {
    navigate(`/booking?roadtest=${encodeURIComponent(type)}`);
  };

  const packages = [
    {
      tier: "Package #1",
      price: 549.99,
      features: [
        "MTO Certified Online Course",
        "20 Hours Online Class", 
        "10 Hours of Online Homework",
        "10 Hours in Car Training",
        "4 Month Reduction to Obtain your G2 Road Test Faster",
        "One on one in vehicle training flexible appointments",
        "Pick up and drop off services in London",
        "Vehicle Not Provided for Road Test",
      ],
    },
    {
      tier: "Package #2",
      price: 699.99,
      features: [
        "MTO Certified Online Course",
        "20 Hours Online Class", 
        "10 Hours of Online Homework",
        "10 Hours in Car Training", // can I bold this to show difference between packages?
        "1.5 Hours Practice Before Road Test", // can I bold this to show difference between packages?
        "4 Month Reduction to Obtain your G2 Road Test Faster",
        "One on one in vehicle training flexible appointments",
        "Pick up and drop off services in London",
        "Vehicle Provided for Road Test", // can I bold this to show difference between packages?
      ],
    },
    {
      tier: "Package #3",
      price: 799.99,
      features: [
        "MTO Certified Online Course",
        "20 Hours Online Class", 
        "10 Hours of Online Homework",
        "12 Hours in Car Training", // can I bold this to show difference between packages?
        "2 Hours Practice Before Road Test", // can I bold this to show difference between packages?
        "4 Month Reduction to Obtain your G2 Road Test Faster",
        "One on one in vehicle training flexible appointments",
        "Pick up and drop off services in London",
        "Vehicle Provided for Road Test", // can I bold this to show difference between packages?
      ],
    },
    {
      tier: "Package #4",
      price: 930,
      features: [
        "MTO Certified Online Course",
        "20 Hours Online Class", 
        "10 Hours of Online Homework",
        "15 Hours in Car Training", // can I bold this to show difference between packages?
        "2 Hours Practice Before Road Test", // can I bold this to show difference between packages?
        "4 Month Reduction to Obtain your G2 Road Test Faster",
        "One on one in vehicle training flexible appointments",
        "Pick up and drop off services in London",
        "Vehicle Provided for Road Test", // can I bold this to show difference between packages?
      ],
    },
  ];

  const hourlyPackages = [
    { hours: "1", price: 45 },
    { hours: "2", price: 90 },
    { hours: "4", price: 180 },
    { hours: "6", price: 270 },
    { hours: "8", price: 360 },
    { hours: "10", price: 450 },
  ];

  const roadTestPackages = [
    { title: "1 Hour + Road Test", hours: "1.5", price: 140 },
    { title: "2 Hours + Road Test", hours: "2", price: 230 },
    { title: "4 Hours + Road Test", hours: "4", price: 320 },
    { title: "6 Hours + Road Test", hours: "6", price: 410 },
    { title: "Out of Town", hours: "Out of Town", price: 300 },
  ];

  return (
    <div className="py-16 bg-gray-50" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            MTO Certificate Packages
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect package for your learning journey
          </p>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-medium">Local Areas:</span> London, Byron,
            Lambeth, Kilworth and Arva
            <br />
            <span className="font-medium">
              Out of Town (See Terms and Conditions):
            </span>{" "}
            Ilderton, Komoka, and Delaware
          </p>
        </div>

        {/* Updated grid layout for MTO Certificate Packages */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>

        {/* Hourly Packages Section with improved layout */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Hourly Packages without Certificate
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Flexible training options without MTO certification
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hourlyPackages.map((pkg, index) => (
              <HourlyPackageCard
                key={index}
                hours={pkg.hours}
                price={pkg.price}
                onClick={() => handleHourlyBooking(pkg.hours)}
              />
            ))}
          </div>
        </div>

        {/* Road Test Packages Section with improved layout */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Road Test Packages
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Refresher practice sessions prior to a road test
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadTestPackages.map((pkg, index) => (
              <RoadTestPackageCard
                key={index}
                title={pkg.title}
                hours={pkg.hours}
                price={pkg.price}
                onClick={() => handleRoadTestBooking(pkg.hours)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;