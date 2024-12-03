import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBloodInventory } from '../../features/bloodInventorySlice';

const BloodInventory = () => {
  const dispatch = useDispatch();
  const { data: bloodGroups, loading, error } = useSelector(
    (state) => state.bloodInventory
  );

  // Fetch blood inventory data on component mount
  useEffect(() => {
    dispatch(fetchBloodInventory());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center py-8" aria-live="polite">
        <span className="text-lg text-red-700">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-700 py-8" aria-live="assertive">
        <span className="text-lg">{`Error: ${error}`}</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold text-red-700 mb-6">Blood Group Inventory</h1>
      <div className="w-11/12 md:w-3/4 bg-white rounded-lg shadow-md p-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-4 text-left text-red-700 font-semibold">
                Blood Group
              </th>
              <th className="border border-gray-300 p-4 text-left text-red-700 font-semibold">
                Bottles Available
              </th>
            </tr>
          </thead>
          <tbody>
            {bloodGroups.map((bloodGroup, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100`}
              >
                <td className="border border-gray-300 p-4">{bloodGroup.group}</td>
                <td className="border border-gray-300 p-4">
                  {bloodGroup.bottles}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodInventory;
