import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const ContactInfo = () => {
  const businessHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { days: "Saturday - Sunday", hours: "8:00 AM - 3:00 PM" },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-600">
            We're here to help you start your journey to becoming a confident
            driver
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900">Contact Details</h3>
            <div className="mt-6 space-y-6">
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">+1 (226) 224-8256</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">
                  londonelitedriving@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">
                  835 mapleridge Street, London ON, N6H 0A4
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
            <div className="mt-6 space-y-4">
              {businessHours.map((schedule) => (
                <div
                  key={schedule.days}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-600">{schedule.days}</span>
                  <span className="text-gray-900 font-medium">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-900">
            Payment Information
          </h3>
          <p className="mt-4 text-gray-600">
            We accept e-transfer payments for your convenience. Payment details
            will be provided upon booking confirmation. Full payment is required
            to secure your booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
