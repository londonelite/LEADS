import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add useEffect to handle message dismissal
  useEffect(() => {
    let timeoutId;

    if (submitStatus === "success" || submitStatus === "error") {
      timeoutId = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000); // 5 seconds
    }

    // Cleanup function to clear timeout if component unmounts or status changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [submitStatus]); // Only run effect when submitStatus changes

  const businessHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { days: "Saturday - Sunday", hours: "8:00 AM - 3:00 PM" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("pending");

    const formattedMessage = `
From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const templateParams = {
      message: formattedMessage,
    };

    try {
      await emailjs.send(
        "service_sktyzkg",
        "template_m6v3319",
        templateParams,
        "RInHbSGYfFbhM8V1B"
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
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
                      <p className="font-medium text-gray-900">
                        {schedule.days}
                      </p>
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

          {/* Right Column - Contact Form */}
          <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        There was an error sending your message. Please try
                        again.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
