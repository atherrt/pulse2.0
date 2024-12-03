import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerHospital } from "../../features/hospitalSlice";

const HospitalRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve user details from Redux store
  const { user } = useSelector((state) => state.auth);
  const userId = user?.id || 0; // Default to 0 if user is not found
  const username = user?.username || "";
  console.log(userId);

  // State to hold form data
  const [formData, setFormData] = useState({
    userId,
    roleId: 1,
    fullName: username,
    phoneNumber: "",
    emergencyContact: "",
    address: "",
    hospitalName: "",
    websiteURL: "",
    licenseNumber: "",
    licenseExpiryDate: "",
  });

  const { loading, error } = useSelector((state) => state.hospital);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare hospital data for dispatch
    const hospitalData = { ...formData, userId, roleId: 1 }; // Ensure roleId is passed
    dispatch(registerHospital(hospitalData));
  };

  if (!loading && !error && formData.hospitalName) {
    navigate("/dashboard");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Hospital Registration</h2>

        {loading && <div className="text-center text-xl text-gray-600">Loading...</div>}
        {error && <div className="text-center text-red-600">{error}</div>}

        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Owner Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Owner Name
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              required
            />
          </div>

          {/* Hospital Name */}
          <div>
            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700">
              Hospital Name
            </label>
            <input
              type="text"
              id="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter hospital name"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter phone number"
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
              Emergency Contact
            </label>
            <input
              type="text"
              id="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter emergency contact"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter address"
            />
          </div>

          {/* Website URL */}
          <div>
            <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-700">
              Website URL
            </label>
            <input
              type="text"
              id="websiteURL"
              value={formData.websiteURL}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter website URL"
            />
          </div>

          {/* License Number */}
          <div>
            <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">
              License Number
            </label>
            <input
              type="text"
              id="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter license number"
            />
          </div>

          {/* License Expiry Date */}
          <div>
            <label htmlFor="licenseExpiryDate" className="block text-sm font-medium text-gray-700">
              License Expiry Date
            </label>
            <input
              type="date"
              id="licenseExpiryDate"
              value={formData.licenseExpiryDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="mt-4 w-full bg-rose-700 text-white py-2 px-4 rounded-md">
            Register Hospital
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalRegistration;
