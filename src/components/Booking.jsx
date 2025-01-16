import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "react-router-dom";

const Booking = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    lessonType: "Basic Package",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const packageFromUrl = searchParams.get("package");
    const serviceFromUrl = searchParams.get("service");

    if (packageFromUrl) {
      setFormData((prev) => ({
        ...prev,
        lessonType: packageFromUrl,
      }));
    } else if (serviceFromUrl) {
      const serviceMapping = {
        hourly: "Hourly",
        "out-of-town": "Out of Town",
      };

      const mappedService = serviceMapping[serviceFromUrl];
      if (mappedService) {
        setFormData((prev) => ({
          ...prev,
          lessonType: mappedService,
        }));
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatLessonType = (type) => {
    const types = {
      "Basic Package": "Basic Package ($599 +HST)",
      "Premium Package": "Premium Package ($720 +HST)",
      "Ultimate Package": "Ultimate Package ($760 +HST)",
      Hourly: "Hourly Rate ($50/hour +HST)",
      "Out of Town": "Out of Town Test ($350 +HST)",
    };
    return types[type] || type;
  };

  const formatTime = (time) => {
    const times = {
      morning: "Morning (9AM - 12PM)",
      afternoon: "Afternoon (12PM - 4PM)",
      evening: "Evening (4PM - 6PM)",
    };
    return times[time] || time;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("pending");

    const formattedDate = new Date(formData.preferredDate).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    const formattedMessage = `
Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formattedDate}
Preferred Time: ${formatTime(formData.preferredTime)}
Package Selected: ${formatLessonType(formData.lessonType)}

Additional Notes:
${formData.message || "No additional notes provided"}`;

    const templateParams = {
      to_email: "londonelitedriving@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      booking_details: formattedMessage,
    };

    try {
      await emailjs.send(
        "service_p0mu1fw",
        "template_rua52jb",
        templateParams,
        "7oKSxgrekWr_NUYxm"
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        lessonType: "Basic Package",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-3 py-2 bg-white";
  const selectClassName =
    "mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-3 py-2 bg-white";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Book Your Driving Lesson
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer"
              >
                Full Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer"
              >
                Email Address
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer"
              >
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </label>
            </div>

            <div className="form-group relative">
              <label
                htmlFor="preferredDate"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer w-full"
              >
                Preferred Date
                <div
                  className="relative mt-1"
                  onClick={() =>
                    document.getElementById("preferredDate").showPicker()
                  }
                >
                  <input
                    type="date"
                    name="preferredDate"
                    id="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClassName}
                  />
                </div>
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="preferredTime"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer"
              >
                Preferred Time
                <select
                  name="preferredTime"
                  id="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className={selectClassName}
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 6PM)</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="lessonType"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer"
              >
                Package Type
                <select
                  name="lessonType"
                  id="lessonType"
                  required
                  value={formData.lessonType}
                  onChange={handleChange}
                  className={selectClassName}
                >
                  <option value="Basic Package">
                    Basic Package ($599 +HST)
                  </option>
                  <option value="Premium Package">
                    Premium Package ($720 +HST)
                  </option>
                  <option value="Ultimate Package">
                    Ultimate Package ($760 +HST)
                  </option>
                  <option value="Hourly">Hourly Rate ($50/hour +HST)</option>
                  <option value="Out of Town">
                    Out of Town Test ($350 +HST)
                  </option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer"
              >
                Additional Notes
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Book Now"}
              </button>
            </div>

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
                      Booking request submitted successfully! We'll contact you
                      shortly.
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
                      There was an error submitting your booking. Please try
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
  );
};

export default Booking;
