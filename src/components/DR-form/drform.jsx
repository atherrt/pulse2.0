import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerDonor } from "../../features/donorSlice"; // Make sure this matches your file structure

const DonorRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access the Redux store for user data (assumed that it's stored in `user` object in state)
  const { userId, username } = useSelector((state) => state.user); // Replace `state.user` with correct path
  const { loading, error, donor } = useSelector((state) => state.donor);

  const [formData, setFormData] = useState({
    userId: userId || 0, // Get userId from Redux store
    roleId: 2, // Default role set to 2 for donor
    fullName: username || "", // Get username from Redux store
    phoneNumber: "",
    emergencyContact: "",
    address: "",
    patientId: 0,
    dateOfBirth: "",
    weight: 5,
    height: 5,
    cnic: "35202",
    bloodGroupId: 0,
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    // Dispatch the action to register the donor
    dispatch(registerDonor(formData));
  };

  useEffect(() => {
    if (donor) {
      // If donor is successfully registered, navigate to the dashboard or home page
      navigate("/");
    }
  }, [donor, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl border-2 border-blue-500">
        <form className="grid grid-cols-3 gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              DOB
            </label>
            <input
              type="date"
              id="dateOfBirth"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
              Emergency Contact
            </label>
            <input
              type="text"
              id="emergencyContact"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.emergencyContact}
              onChange={handleChange}
              placeholder="Enter emergency contact"
            />
          </div>

          <div>
            <label htmlFor="bloodGroupId" className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <select
              id="bloodGroupId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.bloodGroupId}
              onChange={handleChange}
              required
            >
              <option value={0}>Select blood group</option>
              <option value={1}>A+</option>
              <option value={2}>O+</option>
              <option value={3}>B+</option>
              <option value={4}>AB+</option>
              <option value={5}>A-</option>
              <option value={6}>O-</option>
              <option value={7}>B-</option>
              <option value={8}>AB-</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="col-span-3">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rose-700 hover:bg-rose-800 text-white py-2 px-4 rounded-md mt-6 col-span-3"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {error && (
            <div className="mt-4 text-red-500">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DonorRegistration;
