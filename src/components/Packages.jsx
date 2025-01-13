import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const PricingCard = ({ tier, price, features }) => {
  return (
    <div className="flex flex-col p-6 mx-4 max-w-lg bg-white rounded-lg border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-blue-600">{tier}</h3>
      <div className="mt-4 text-5xl font-extrabold">${price}</div>
      <p className="mt-1 text-lg text-gray-500">+HST</p>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex">
            <CheckIcon className="flex-shrink-0 w-6 h-6 text-blue-500" />
            <span className="ml-3 text-gray-500">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Book Now
      </button>
    </div>
  );
};

const Packages = () => {
  const packages = [
    {
      tier: "Base Package",
      price: 599,
      features: [
        "20 hours online training",
        "10 hours in-car training",
        "Flexible scheduling",
      ],
    },
    {
      tier: "Premium Package",
      price: 720,
      features: [
        "20 hours online training",
        "10 hours in-car training",
        "1 hour road test included",
        "Flexible scheduling",
      ],
    },
    {
      tier: "Ultimate Package",
      price: 760,
      features: [
        "20 hours online training",
        "10 hours in-car training",
        "2 hours road test included",
        "Flexible scheduling",
      ],
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Package
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Select the package that best fits your needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>

        <div className="mt-12 space-y-4 text-center">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
            <h3 className="text-xl font-bold text-blue-600">
              Additional Services
            </h3>
            <div className="mt-4 space-y-2">
              <p>Hourly Rate: $50/hour +HST</p>
              <p>Out of Town Road Tests: $350 +HST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
