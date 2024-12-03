import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux to store the user's role

const ProtectedRoute = ({ requiredRole, children }) => {
  // Assuming you have the user's role in the Redux store
  const userRole = useSelector(state => state.auth.roleId); // Adjust according to your state structure
  console.log(userRole);

  if (userRole !== requiredRole) {
    // Redirect to a page if the user doesn't have the required role
    return <Navigate to="/unauthorized" />; // Or any other redirect path
  }

  return children;
};

export default ProtectedRoute;
