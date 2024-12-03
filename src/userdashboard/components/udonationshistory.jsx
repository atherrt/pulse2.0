import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonationHistory } from "../../features/Donations"; // Import the action

const DonationHistory = () => {
  const dispatch = useDispatch();
  const { donations, loading, error } = useSelector((state) => state.donationHistory);

  useEffect(() => {
    dispatch(fetchDonationHistory());
  }, [dispatch]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-700 py-8">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-bold">Donation Date</th>
              <th className="px-4 py-2 text-left text-gray-700 font-bold">Hospital Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-bold">Address</th>
              <th className="px-4 py-2 text-left text-gray-700 font-bold">Number of Bottles</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-gray-700">{donation.date}</td>
                <td className="px-4 py-2 text-red-600 font-medium">{donation.hospitalName}</td>
                <td className="px-4 py-2 text-gray-700">{donation.address}</td>
                <td className="px-4 py-2 text-gray-700">{donation.bottles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistory;
