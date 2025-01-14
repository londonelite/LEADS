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
    <div className="pricing-card-parent">
      <div className="pricing-card">
        <div className="glass"></div>
        <div className="content">
          <div className="title-section">
            <h3 className="text-2xl font-bold text-gray-900">{tier}</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-extrabold text-gray-900">
                ${price}
              </span>
              <span className="ml-1 text-xl text-gray-500">+HST</span>
            </div>
          </div>
          <ul className="mt-8 space-y-4 features-list">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start feature-item">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-emerald-500" />
                <span className="ml-3 text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-bottom">
          <button onClick={handleBookNow} className="book-now-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  const packages = [
    {
      tier: "Basic Package",
      price: 599,
      features: [
        "20 hours online training",
        "10 hours in-car training",
        "Flexible scheduling",
        "Practice tests included",
      ],
    },
    {
      tier: "Premium Package",
      price: 720,
      features: [
        "20 hours online training",
        "10 hours in-car training",
        "1 hour road test preparation",
        "Flexible scheduling",
        "Practice tests included",
        "Priority booking",
      ],
    },
    {
      tier: "Ultimate Package",
      price: 760,
      features: [
        "20 hours online training",
        "10 hours in-car training",
        "2 hours road test preparation",
        "Flexible scheduling",
        "Practice tests included",
        "Priority booking",
        "Free refresher lesson",
      ],
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Learning Packages
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect package for your learning journey
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Additional Services
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Hourly Rate
                </h4>
                <p className="text-gray-600">$50/hour +HST</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Out of Town Tests
                </h4>
                <p className="text-gray-600">$350 +HST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
