import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo } from '../../features/userInfoSlice';

const UserInfoCard = () => {
  const dispatch = useDispatch();

  // Ensure we handle undefined states
  const { data, status, error } = useSelector((state) => state.userInfo || {});

  useEffect(() => {
    if (status === 'idle' || !status) {
      dispatch(fetchUserInfo());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!data) return <p>No user data available.</p>;

  const user = Array.isArray(data) ? data[0] : data; // Adjust depending on API response

  return (
    <div className="bg-gray-100 p-4 min-h-screen flex items-center justify-center">
      <div className="bg-red-200 border border-red-300 rounded-lg w-full max-w-2xl shadow-lg">
        <div className="p-4 border-b border-red-300">
          <h2 className="font-bold text-lg text-gray-800">PERSONAL INFORMATION</h2>
          <div className="mt-2 grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>CNIC:</strong> {user.cnic}</p>
            </div>
            <div>
              <p><strong>Age:</strong> {user.age} Years</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </div>
            <div>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
