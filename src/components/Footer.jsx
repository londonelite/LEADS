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
              surrounding areas since 2025.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-200"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
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
