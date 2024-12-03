import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../features/resetpasswordSlice"; // Update path as needed

const ResetPassword = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Dispatch action to send data to the backend
    dispatch(resetPassword({ password }))
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setError("Failed to reset the password. Try again.");
      });
  };

  return (
    <div className="bg-red-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Reset Password
        </h2>

        {error && (
          <div className="bg-red-100 text-red-800 text-sm p-2 rounded mb-4">
            {error}
          </div>
        )}

        {success ? (
          <div className="bg-green-200 text-green-800 text-sm p-4 rounded mb-4">
            Password reset successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Enter new password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter new password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition duration-150"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
