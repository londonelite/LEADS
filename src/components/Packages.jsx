import React from "react";
import { CheckIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import "./Packages.css";

const ServiceCard = ({ icon: Icon, title, price, onClick }) => {
  return (
    <div className="service-card-wrapper perspective-1000">
      <div className="service-card group relative h-full w-full rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-px transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative h-full rounded-xl bg-white p-6">
          <div className="flex flex-col items-center text-center">
            <Icon className="h-12 w-12 text-blue-600" />
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
  const navigate = useNavigate();

  const handleServiceBooking = (service) => {
    navigate(`/booking?service=${encodeURIComponent(service)}`);
  };

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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={ClockIcon}
              title="Hourly Rate"
              price="50"
              onClick={() => handleServiceBooking("hourly")}
            />
            <ServiceCard
              icon={MapPinIcon}
              title="Out of Town Tests"
              price="350"
              onClick={() => handleServiceBooking("out-of-town")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
