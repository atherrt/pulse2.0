import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchViewHospital } from '../../features/viewhopitalSlice';

const HospitalCards = () => {
  const dispatch = useDispatch();

  // Correctly reference the `viewhospital` state slice
  const { hospitals, loading, error } = useSelector((state) => state.viewhospital);

  useEffect(() => {
    dispatch(fetchViewHospital()); // Use the correct thunk function
  }, [dispatch]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="bg-pink-200 min-h-screen flex flex-col items-center justify-center">
      {hospitals.map((hospital) => (
        <div key={hospital.id} className="bg-white p-6 rounded-md shadow-md mb-4 w-80 md:w-96">
          <h1 className="text-xl font-bold text-red-600">{hospital.name}</h1>
          <p className="mt-2 text-gray-700">{hospital.address}</p>
          <p className="mt-2 text-green-600 font-semibold">STATUS: {hospital.status}</p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default HospitalCards;
