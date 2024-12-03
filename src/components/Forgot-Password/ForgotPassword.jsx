import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return regex.test(email);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    // Email validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Environment variables for EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    // Debugging environment variables
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("User ID:", userId);

    // Check for missing configuration
    if (!serviceId || !templateId || !userId) {
      setError("Email service is not configured properly. Please try again later.");
      return;
    }

    // Prepare email template parameters
    const templateParams = {
      email, // Dynamic email address
    };

    setIsLoading(true); // Start loading

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setError("Failed to send the email. Please try again.");
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Forgot Password
          </h2>

          {isSubmitted ? (
            <div className="bg-green-200 text-green-800 text-sm p-4 rounded mb-4">
              If the email address is registered, a password reset link has been sent to your inbox.
            </div>
          ) : (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              {error && (
                <div className="bg-red-200 text-red-800 text-sm p-2 rounded mb-4">
                  {error}
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your registered email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition duration-150 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          )}

          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-gray-600 hover:text-red-500">
              Back to Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
