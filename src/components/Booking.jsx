import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "react-router-dom";

const Booking = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "", 
    preferredDate: "",
    preferredTime: "",
    lessonType: "Package #1",
    message: "",
    paymentOption: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [lastPaymentOption, setLastPaymentOption] = useState("");

  useEffect(() => {
    // Get URL parameters
    const packageFromUrl = searchParams.get("package");
    const hourlyFromUrl = searchParams.get("hourly");
    const roadTestFromUrl = searchParams.get("roadtest");

    // Set the appropriate lesson type based on URL parameters
    if (packageFromUrl) {
      setFormData((prev) => ({
        ...prev,
        lessonType: packageFromUrl,
      }));
    } else if (hourlyFromUrl) {
      setFormData((prev) => ({
        ...prev,
        lessonType: `Hourly (${hourlyFromUrl} Hour${hourlyFromUrl === "1" ? "" : "s"})`,
      }));
    } else if (roadTestFromUrl) {
      // Handle different road test packages
      if (roadTestFromUrl === "Out of Town") {
        setFormData((prev) => ({
          ...prev,
          lessonType: "Road Test (Out of Town)",
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          lessonType: `Road Test (${roadTestFromUrl} Hours)`,
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

  const formatTime = (time) => {
    const times = {
      morning: "Morning (8AM - 12PM)",
      afternoon: "Afternoon (12PM - 5PM)",
      evening: "Evening (5PM - 8PM)",
    };
    return times[time] || time;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

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
Address: ${formData.address}
Preferred Date: ${formattedDate}
Preferred Time: ${formatTime(formData.preferredTime)}
Package Selected: ${formData.lessonType}
Payment Option: ${formData.paymentOption || "Not specified"}

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
        address: "",
        preferredDate: "",
        preferredTime: "",
        lessonType: "Package #1",
        message: "",
        paymentOption: "",
      });
      setTermsAccepted(false);
      setLastPaymentOption(formData.paymentOption);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
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

            <div className="form-group">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer"
              >
                Address
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  value={formData.address}
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
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
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
                  {/* Certificate Packages */}
                  <option value="Package #1">Package #1 ($539.99 +HST)</option>
                  <option value="Package #2">Package #2 ($679.99 +HST)</option>
                  <option value="Package #3">Package #3 ($769.99 +HST)</option>
                  <option value="Package #4">Package #4 ($910 +HST)</option>

                  {/* Hourly Packages */}
                  <option value="Hourly (1 Hour)">
                    Hourly (1 Hour - $45 +HST)
                  </option>
                  <option value="Hourly (2 Hours)">
                    Hourly (2 Hours - $90 +HST)
                  </option>
                  <option value="Hourly (4 Hours)">
                    Hourly (4 Hours - $160 +HST)
                  </option>
                  <option value="Hourly (6 Hours)">
                    Hourly (6 Hours - $260 +HST)
                  </option>
                  <option value="Hourly (8 Hours)">
                    Hourly (8 Hours - $350 +HST)
                  </option>
                  <option value="Hourly (10 Hours)">
                    Hourly (10 Hours - $440 +HST)
                  </option>

                  {/* Road Test Packages */}
                  <option value="Road Test (1 Hour)">
                    Road Test (1 Hour - $140 +HST)
                  </option>
                  <option value="Road Test (2 Hours)">
                    Road Test (2 Hours - $180 +HST)
                  </option>
                  <option value="Road Test (4 Hours)">
                    Road Test (4 Hours - $320 +HST)
                  </option>
                  <option value="Road Test (6 Hours)">
                    Road Test (6 Hours - $410 +HST)
                  </option>
                  <option value="Road Test (Out of Town)">
                    Road Test (Out of Town - $280 +HST)
                  </option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="paymentOption"
                className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer"
              >
                Payment Option
                <select
                  name="paymentOption"
                  id="paymentOption"
                  required
                  value={formData.paymentOption}
                  onChange={handleChange}
                  // (e) => setPaymentOption(e.target.value)
                  className={selectClassName}
                >
                  <option value="">Select a payment option</option>
                  <option value="E-transfer">E-transfer</option>
                  <option value="Cash">Cash</option>
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

            <div className="form-group">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={toggleTerms}
                      className="text-blue-600 hover:text-blue-800 focus:outline-none underline"
                    >
                      terms and conditions
                    </button>
                  </label>
                </div>
              </div>

              {showTerms && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Terms and Conditions
                    </h3>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-900">
                      Privacy and Information
                    </h4>
                    <p className="mt-1 text-sm text-gray-700">
                      Any and all personal information shared between the
                      student and London Elite Driving will not be shared to any
                      third party to the best of our ability. The information we
                      gather will only be used to contact the student.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-900">
                      Refund Policy
                    </h4>
                    <p className="mt-1 text-sm text-gray-700">
                      Bookings are non-refundable, and can carry additional
                      charges if cheques are dishonoured. Students must give
                      24-hour notice to our office or their instructor to
                      reschedule, otherwise there will be a $45 cancellation
                      fee.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900">
                      Terms and Conditions
                    </h4>
                    <ul className="mt-1 text-sm text-gray-700 list-disc pl-5 space-y-1">
                      <li>
                        Students must obtain their G1 driving license to start
                        lessons.
                      </li>
                      <li>
                        Students must finish both the online and in-car lessons
                        within a year, otherwise they cannot be certified and
                        will have to pay the full amount to restart.
                      </li>
                      <li>
                        Students from out of town must either pay at increased
                        rates or must meet with instructors in local areas to
                        accommodate instructors for their time.
                      </li>
                      <li>
                        Students may not schedule more than 2 hours of practice in a single day. 
                        Packages with more than 2 hours will be spread out over multiple days 
                        according to both student and instructor availability.
                      </li>
                      <li>
                        London Elite Driving does not issue certificates, only
                        the MTO can distribute certificates. Students may
                        request their driver's licence history from their local
                        vehicle licensing office.
                      </li>
                      <li>
                        London Elite Driving has the right to potentially delay
                        or cancel due to road and/or traffic conditions.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={toggleTerms}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4  border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking"}
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="mt-4 text-green-600 text-center">
                Booking request submitted successfully! We'll get back to you soon.<br /><br />
                {lastPaymentOption === "E-transfer" && (
                  <p>
                    Upon confirmation, please send your e-transfer to <b>londonelitedriving@gmail.com</b>.<br />
                    Your booking will be confirmed once payment is received.
                  </p>
                )}
                {lastPaymentOption === "Cash" && (
                  <p>
                    Upon confirmation, please have the cash ready for your instructor on the day of your lesson.
                  </p>
                )}
              </div>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-600 text-center">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;