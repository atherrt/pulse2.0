import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequests, addRequest } from '../../features/fetchRequestsSlice'; // Make sure to import addRequest if needed

const ViewRequest = () => {
  const dispatch = useDispatch();
  const { data: requests, loading, error } = useSelector((state) => state.requests);

  useEffect(() => {
    // Fetch existing requests when the component mounts
    dispatch(fetchRequests());
  }, [dispatch]);

  const handleApprove = (requestId) => {
    // You can implement logic to handle approving a request here.
    // For example, updating the request status or sending another request.
    console.log(`Approved request with ID: ${requestId}`);
    // Example of adding a new request after approval (POST)
    const newRequest = {
      name: 'New Donor',
      bloodGroup: 'O+',
      type: 'Donation',
      dateOfDonation: '12-12-2024',
      timeOfDonation: '10:00',
    };
    dispatch(addRequest(newRequest));  // Dispatch POST request to add a new request
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center text-red-700 py-8">Error: {error}</div>;

  return (
    <div className="bg-pink-200 min-h-screen flex flex-col items-center py-8">
      {requests.length === 0 ? (
        <p className="text-center text-lg font-semibold text-gray-700 py-8">No requests available.</p>
      ) : (
        requests.map((request) => (
          <div
            key={request.id}
            className="bg-white w-11/12 md:w-1/2 rounded-lg shadow-md p-4 mb-4"
          >
            <h2 className="text-lg font-semibold text-red-700">
              Name: {request.name}
            </h2>
            <p className="text-gray-700">Blood group: {request.bloodGroup}</p>
            <p className="text-gray-700">Type: {request.type}</p>
            <p className="text-gray-700">Date of donation: {request.dateOfDonation}</p>
            <p className="text-gray-700">Time of donation: {request.timeOfDonation}</p>
            <button
              onClick={() => handleApprove(request.id)} // Trigger approval on click
              className="mt-4 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800"
            >
              Approve
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewRequest;
