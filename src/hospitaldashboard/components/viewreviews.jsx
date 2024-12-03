import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews } from "../../features/ratingslice"; // Import the fetchReviews thunk

const Reviews = ({ hospitalName = "City Hospital" }) => {
  const dispatch = useDispatch();

  // Fetch data from Redux store
  const { reviews, loading, error } = useSelector((state) => state.ratings);

  // Fetch reviews for the specified hospital
  useEffect(() => {
    dispatch(fetchReviews(hospitalName));
  }, [dispatch, hospitalName]);

  return (
    <div className="min-h-screen bg-[#d9a8a8] flex flex-col items-center py-8">
      {/* Page Header */}
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Reviews for {hospitalName}
      </h1>

      {/* Content */}
      <div className="w-full max-w-2xl p-4 space-y-4 bg-white rounded-lg shadow-md">
        {loading ? (
          <p className="text-gray-600 text-center">Loading reviews...</p>
        ) : error ? (
          <p className="text-red-600 text-center">Error: {error}</p>
        ) : reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 rounded-lg shadow-md border border-gray-200"
            >
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-medium text-gray-700">Rating:</span>
                <span className="text-yellow-500">
                  {"★".repeat(Math.round(review.rating))}
                  {"☆".repeat(5 - Math.round(review.rating))}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">
            No reviews available for {hospitalName}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
