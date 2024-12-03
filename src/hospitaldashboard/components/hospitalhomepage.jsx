import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHospitalInfo, selectHospitalInfo } from "../../features/hospitalinfoSlice";

// Assuming the `hospital` slice has an `id` in the state
const HospitalInfo = () => {
  const dispatch = useDispatch();

  // Fetch the selected hospital ID from the Redux store directly
  const selectedHospitalId = useSelector((state) => state.hospital.id);

  // Fetch hospital information from Redux
  const { data: hospitalInfo, loading, error } = useSelector(selectHospitalInfo);

  // Fetch hospital info when `selectedHospitalId` changes
  useEffect(() => {
    if (selectedHospitalId) {
      dispatch(fetchHospitalInfo(selectedHospitalId));
    }
  }, [selectedHospitalId, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-blue-600 font-bold">Loading hospital information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 font-bold">Error: {error}</p>
      </div>
    );
  }

  if (!hospitalInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 font-bold">No hospital information available.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white p-10 w-11/12 md:w-3/4 lg:w-2/3 rounded-lg shadow-md">
        {/* Hospital Information Section */}
        <h2 className="text-blue-600 font-bold text-2xl mb-4">Hospital Information</h2>
        <p><strong>Name:</strong> {hospitalInfo.name}</p>
        <p><strong>Address:</strong> {hospitalInfo.address}</p>
        <p><strong>Contact:</strong> {hospitalInfo.contact}</p>
        <p><strong>Email:</strong> {hospitalInfo.email}</p>
        <p><strong>License Number:</strong> {hospitalInfo.licenseNumber}</p>
        <p><strong>License Expiry:</strong> {hospitalInfo.licenseExpiryDate}</p>
        <p><strong>Website:</strong> <a href={hospitalInfo.websiteURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{hospitalInfo.websiteURL}</a></p>

        {/* Specialties Section */}
        <h3 className="text-blue-600 font-bold text-xl mt-6 mb-4">Specialties</h3>
        <ul className="list-disc ml-6">
          {hospitalInfo.specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HospitalInfo;
