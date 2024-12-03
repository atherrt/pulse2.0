import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHospitalData, updateHospitalData } from "../../features/heditSlice";

const HospitalEditProfile = () => {
  const dispatch = useDispatch();
  const { hospitalData, loading } = useSelector((state) => state.hedit);

  const [formData, setFormData] = useState({
    ownerName: "",
    hospitalName: "",
    phoneNumber: "",
    hospitalType: "",
    email: "",
    licenseNumber: "",
    emergencyContact: "",
    websiteURL: "",
    address: "",
    licenseExpiryDate: "",
  });

  // Fetch hospital data on component mount
  useEffect(() => {
    dispatch(fetchHospitalData());
  }, [dispatch]);

  // Sync Redux state to form state
  useEffect(() => {
    if (hospitalData) {
      setFormData(hospitalData);
    }
  }, [hospitalData]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateHospitalData(formData));
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-8">
          Edit Hospital Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/** Owner Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Owner Name</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/** Hospital Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/** Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/** Hospital Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Hospital Type</label>
              <select
                name="hospitalType"
                value={formData.hospitalType}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>
            {/** Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/** License Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/** Emergency Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/** Website URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Website URL</label>
              <input
                type="text"
                name="websiteURL"
                value={formData.websiteURL}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/** Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/** License Expiry Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">License Expiry Date</label>
              <input
                type="date"
                name="licenseExpiryDate"
                value={formData.licenseExpiryDate}
                onChange={handleChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/** Save Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HospitalEditProfile;
