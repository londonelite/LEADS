const ContactInfo = () => {
  const businessHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { days: "Saturday - Sunday", hours: "8:00 AM - 3:00 PM" },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with us for any questions or to book your lessons
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">
              Contact Information
            </h3>
            <div className="mt-4 space-y-4">
              <p className="text-gray-600">
                <strong>Phone:</strong> [Phone Number]
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> [Email]
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> [Address]
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
            <div className="mt-4 space-y-4">
              {businessHours.map((schedule) => (
                <div key={schedule.days} className="flex justify-between">
                  <span className="text-gray-600">{schedule.days}</span>
                  <span className="text-gray-900 font-medium">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900">
            Payment Information
          </h3>
          <p className="mt-4 text-gray-600">
            Payment is accepted through e-transfer. Details will be provided
            upon booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
