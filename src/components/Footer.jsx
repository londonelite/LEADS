import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const businessHours = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 3:00 PM" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Top Wave SVG */}
      <div className="w-full">
        <svg
          className="w-full h-12 fill-current text-white"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path d="M0,48 C480,32 960,32 1440,48 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-white text-3xl font-bold tracking-tight">
                London Elite
              </h3>
              <h4 className="text-gray-300 text-lg font-medium italic">
                Driving Academy
              </h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your journey to becoming a confident and skilled driver starts
              here. Professional driving instruction serving London and
              surrounding areas since 2020.
            </p>
            <div className="flex space-x-4"></div>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">Business Hours</h3>
            <ul className="space-y-3">
              {businessHours.map((schedule) => (
                <li key={schedule.day} className="flex items-start space-x-3">
                  <ClockIcon className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="flex justify-between w-full pr-8">
                    <span className="text-white">{schedule.day}</span>
                    <span className="text-gray-400">{schedule.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-semibold">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+12262248256" className="flex items-center group">
                  <PhoneIcon className="h-5 w-5 text-gray-400 group-hover:text-white mr-3 transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    (226) 224-8256
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:londonelitedriving@gmail.com"
                  className="flex items-center group"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 group-hover:text-white mr-3 transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    londonelitedriving@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start group">
                <MapPinIcon className="h-5 w-5 text-gray-400 group-hover:text-white mr-3 transition-colors mt-1" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  835 Mapleridge Street,
                  <br />
                  London ON, N6H 0A4
                </span>
              </li>
            </ul>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.5046828846514!2d-81.29383012357721!3d42.97322089687042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2626a88ae8d%3A0x3c04b4ba92bb9e92!2s835%20Mapleridge%20St%2C%20London%2C%20ON%20N6H%200A4%2C%20Canada!5e0!3m2!1sen!2sca!4v1705161721813!5m2!1sen!2sca"
                className="w-full h-48"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
