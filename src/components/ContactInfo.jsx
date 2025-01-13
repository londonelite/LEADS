import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const businessHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { days: "Saturday - Sunday", hours: "8:00 AM - 3:00 PM" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help you start your journey to becoming a confident
            driver
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a
                  href="tel:+12262248256"
                  className="text-gray-700 hover:text-blue-600"
                >
                  +1 (226) 224-8256
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:londonelitedriving@gmail.com"
                  className="text-gray-700 hover:text-blue-600"
                >
                  londonelitedriving@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  835 mapleridge Street, London ON, N6H 0A4
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">
              Business Hours
            </h3>
            <div className="space-y-4">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{schedule.days}</p>
                    <p className="text-gray-700">{schedule.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">
              Payment Information
            </h3>
            <p className="text-gray-700">
              We accept e-transfer payments for your convenience. Payment
              details will be provided upon booking confirmation. Full payment
              is required to secure your booking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
