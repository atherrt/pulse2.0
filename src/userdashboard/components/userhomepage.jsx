import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo } from '../../features/userInfoSlice';

const UserInfoCard = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserInfo());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="bg-gray-100 p-4 min-h-screen flex items-center justify-center">
      {data && (
        <div className="bg-red-200 border border-red-300 rounded-lg w-full max-w-2xl shadow-lg">
          {/* Personal Information Section */}
          <div className="p-4 border-b border-red-300">
            <h2 className="font-bold text-lg text-gray-800">PERSONAL INFORMATION</h2>
            <div className="mt-2 grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>CNIC:</strong> {data.cnic}</p>
              </div>
              <div>
                <p><strong>Age:</strong> {data.age} Years</p>
                <p><strong>Phone:</strong> {data.phone}</p>
              </div>
              <div>
                <p><strong>Email:</strong> {data.email}</p>
              </div>
            </div>
          </div>

          {/* Medical Information Section */}
          <div className="p-4 border-b border-red-300">
            <h2 className="font-bold text-lg text-gray-800">MEDICAL INFORMATION</h2>
            <div className="mt-2 grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong>Blood Group:</strong> {data.bloodGroup}</p>
                <p><strong>Weight (kg):</strong> {data.weight}</p>
              </div>
              <div>
                <p><strong>Height (cm):</strong> {data.height}</p>
                <p><strong>Health Status:</strong> {data.healthStatus}</p>
              </div>
              <div>
                <p><strong>BMI:</strong> {data.bmi}</p>
              </div>
            </div>
          </div>

          {/* Contribution Information Section */}
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-800">CONTRIBUTION INFORMATION</h2>
            <div className="mt-2 grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong>Donations:</strong> {data.donations}</p>
                <p><strong>Feed Backs:</strong> {data.feedBacks}</p>
              </div>
              <div>
                <p><strong>Received:</strong> {data.received}</p>
                <p><strong>Badge Earned:</strong> {data.badgeEarned}</p>
              </div>
            </div>
          </div>

          {/* View Donation History Button */}
          <div className="p-4 flex justify-end">
            <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
              View Donation History
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoCard;
