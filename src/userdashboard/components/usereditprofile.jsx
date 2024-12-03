import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormField, saveUserInfo } from "../../features/usereditSlice";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.registration);

  // Handle input change
  const handleChange = (field, value) => {
    dispatch(updateFormField({ field, value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUserInfo(data)); // Save the updated data
  };

  useEffect(() => {
    if (status === "succeeded") {
      alert("Changes saved successfully!");
    } else if (status === "failed") {
      alert("Failed to save changes!");
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6"
      >
        {/* Form Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">Full Name</label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">DOB</label>
            <input
              type="date"
              value={data.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">Phone Number</label>
            <input
              type="text"
              value={data.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">Emergency Contact</label>
            <input
              type="text"
              value={data.emergencyContact}
              onChange={(e) => handleChange("emergencyContact", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">Blood Group</label>
            <select
              value={data.bloodGroup}
              onChange={(e) => handleChange("bloodGroup", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            >
              <option>A+</option>
              <option>O+</option>
              <option>B+</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">Weight</label>
            <input
              type="text"
              value={data.weight}
              onChange={(e) => handleChange("weight", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">Height</label>
            <input
              type="text"
              value={data.height}
              onChange={(e) => handleChange("height", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {/* CNIC */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">CNIC</label>
            <input
              type="text"
              value={data.cnic}
              onChange={(e) => handleChange("cnic", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {/* Address */}
          <div className="col-span-3">
            <label className="block text-gray-700 font-bold mb-1">Address</label>
            <input
              type="text"
              value={data.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded shadow-lg hover:bg-red-700 focus:outline-none"
          >
            {status === "loading" ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
