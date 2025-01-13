// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">Driving School</h3>
            <p className="mt-4 text-gray-300">
              Professional driving instruction serving [Your Area]
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/packages" className="text-gray-300 hover:text-white">
                  Packages
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-300">[Your Address]</li>
              <li className="text-gray-300">[Your Phone]</li>
              <li className="text-gray-300">[Your Email]</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Driving School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
