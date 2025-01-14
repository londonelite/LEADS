import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactCard = ({ title, children, icon: Icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:20px_20px]" />

      {/* Floating icon background */}
      <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform opacity-5 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-32 w-32" strokeWidth={0.5} />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-blue-900">
          <Icon className="h-5 w-5" />
          {title}
        </h3>
        <div className="space-y-3">{children}</div>
      </div>
    </div>
  );
};

const InputField = ({ label, id, ...props }) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      className="w-full rounded-lg border-gray-200 bg-white px-4 py-2.5 shadow-sm transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500"
      {...props}
    />
  </div>
);

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { days: "Saturday - Sunday", hours: "8:00 AM - 3:00 PM" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-blue-900">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We're here to help you start your journey to becoming a confident
            driver. Reach out to us anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            <ContactCard title="Contact Details" icon={Phone}>
              <a
                href="tel:+12262248256"
                className="flex items-center gap-3 rounded-lg p-2 transition-colors duration-200 hover:bg-blue-100"
              >
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 hover:text-blue-700">
                  +1 (226) 224-8256
                </span>
              </a>
              <a
                href="mailto:londonelitedriving@gmail.com"
                className="flex items-center gap-3 rounded-lg p-2 transition-colors duration-200 hover:bg-blue-100"
              >
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 hover:text-blue-700">
                  londonelitedriving@gmail.com
                </span>
              </a>
              <div className="flex items-start gap-3 rounded-lg p-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">
                  835 Mapleridge Street, London ON, N6H 0A4
                </span>
              </div>
            </ContactCard>

            <ContactCard title="Business Hours" icon={Clock}>
              {businessHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg p-2"
                >
                  <Clock className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{schedule.days}</p>
                    <p className="text-gray-600">{schedule.hours}</p>
                  </div>
                </div>
              ))}
            </ContactCard>

            <ContactCard title="Payment Information" icon={Mail}>
              <p className="rounded-lg p-2 text-gray-700">
                We accept e-transfer payments for your convenience. Payment
                details will be provided upon booking confirmation. Full payment
                is required to secure your booking.
              </p>
            </ContactCard>
          </div>

          {/* Right Column - Contact Form */}
          <div className="overflow-hidden rounded-xl bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-xl font-semibold text-blue-900">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Full Name"
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <InputField
                label="Email Address"
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-200 bg-white px-4 py-2.5 shadow-sm transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
              >
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </span>
              </button>

              {/* Status Messages */}
              {submitStatus && (
                <div
                  className={`rounded-lg p-4 ${
                    submitStatus === "success" ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {submitStatus === "success" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                    <p
                      className={`text-sm font-medium ${
                        submitStatus === "success"
                          ? "text-green-800"
                          : "text-red-800"
                      }`}
                    >
                      {submitStatus === "success"
                        ? "Message sent successfully! We'll get back to you soon."
                        : "There was an error sending your message. Please try again."}
                    </p>
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
