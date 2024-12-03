import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchHospitalInfo, selectHospitalInfo } from "../../features/hospitalinfoSlice";

const HospitalInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation(); // Access the location object to retrieve passed state
  const { hospitalId } = location.state || {}; // Get the hospitalId from the passed state
   console.log(hospitalId)  
  // Fetch hospital information from Redux
  const { data: hospitalInfo, loading, error } = useSelector(selectHospitalInfo);


  useEffect(() => {
    if (hospitalId) {
      dispatch(fetchHospitalInfo(hospitalId)); // Pass the hospitalId to the thunk action
    } else {
      console.error("Hospital ID not found in location state.");
    }
  }, [hospitalId, dispatch]); // Only rerun effect if hospitalId changes

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-10">
        <p className="text-red-800 font-bold">Loading hospital information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-10">
        <p className="text-red-800 font-bold">Error: {error}</p>
      </div>
    );
  }

  if (!hospitalInfo || Object.keys(hospitalInfo).length === 0) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-10">
        <p className="text-red-800 font-bold">No hospital information available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-10">
      <div className="bg-red-200 p-10 w-11/12 md:w-4/5 lg:w-2/3 rounded-lg shadow-md">
        {/* Hospital Information Section */}
        <div className="mb-6">
          <h2 className="text-red-800 font-bold mb-4">HOSPITAL INFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">Name:</span> {hospitalInfo.hospitalName}
            </p>
            <p>
              <span className="font-semibold">Joined Since:</span> {hospitalInfo.joinedSince}
            </p>
            <p>
              <span className="font-semibold">License Number:</span> {hospitalInfo.licenseNumber}
            </p>
            <p>
              <span className="font-semibold">Contact Info:</span> {hospitalInfo.contactInfo}
            </p>
          </div>
        </div>

        {/* Logistics Section */}
        <div className="mb-6">
          <h2 className="text-red-800 font-bold mb-4">LOGISTICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">Beds:</span> {hospitalInfo.numberOfBeds}
            </p>
            <p>
              <span className="font-semibold">Wards:</span> {hospitalInfo.numberOfWards}
            </p>
            <p>
              <span className="font-semibold">Emergency Ward:</span> {hospitalInfo.emergencyWard}
            </p>
            <p>
              <span className="font-semibold">Overall Feedback:</span> {hospitalInfo.overallFeedback}
            </p>
            <p>
              <span className="font-semibold">Hospital Timings:</span> {hospitalInfo.hospitalTimings}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {hospitalInfo.phone}
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center">
          <button className="bg-red-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-900">
            VIEW BLOOD BANK
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalInfo;
