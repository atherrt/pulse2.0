import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBloodBankRequests } from '../../features/manageBloodBankSlice';

const ManageBloodBank = () => {
  const dispatch = useDispatch();
  const { data: requests, loading, error } = useSelector(
    (state) => state.manageBloodBank
  );

  useEffect(() => {
    dispatch(fetchBloodBankRequests());
  }, [dispatch]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center text-red-700 py-8">Error: {error}</div>;

  return (
    <div className="bg-pink-200 min-h-screen flex flex-col items-center py-8">
      {requests.map((request, index) => (
        <div
          key={index}
          className="bg-white w-11/12 md:w-1/2 rounded-lg shadow-md p-4 mb-4"
        >
          <h2 className="text-lg font-semibold text-red-700">
            Name: {request.name}
          </h2>
          <p className="text-gray-700">Blood group: {request.bloodGroup}</p>
          <p className="text-gray-700">Type: {request.type}</p>
          <p className="text-gray-700">Date of donation: {request.dateOfDonation}</p>
          <p className="text-gray-700">Time of donation: {request.timeOfDonation}</p>
          <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800">
            Add to blood bank
          </button>
        </div>
      ))}

      {/* View Blood Bank Button */}
      <button className="mt-8 bg-red-700 text-white py-3 px-6 rounded hover:bg-red-800">
        View Blood Bank
      </button>
    </div>
  );
};

export default ManageBloodBank;
