import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../features/ratingslice"; // Import the slice

const ViewRating = () => {
  const dispatch = useDispatch();
  const { hospitalReviews, loading, error } = useSelector((state) => state.ratings);

  // Local state to manage visibility of reviews
  const [showReviews, setShowReviews] = useState(false);

  // Fetch reviews and hospitals on component mount
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  // Function to toggle the visibility of reviews
  const toggleReviews = () => setShowReviews(!showReviews);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d9a8a8]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {loading ? (
          <p className="text-gray-600 text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-600 text-center">Error: {error}</p>
        ) : (
          <form>
            {/* Display Hospitals and their Reviews */}
            {hospitalReviews.length > 0 ? (
              hospitalReviews.map((hospitalReview, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-gray-700 font-semibold text-xl">{hospitalReview.hospital}</h2>
                  <div className="mb-2">
                    {/* Display Overall Rating */}
                    <p className="text-gray-700">
                      <strong>Average Rating: </strong>
                      {hospitalReview.ratings.reduce((sum, review) => sum + review.rating, 0) /
                        hospitalReview.ratings.length || 0}{" "}
                      Stars
                    </p>
                  </div>

                  {/* View Reviews Button */}
                  <div className="text-center mb-4">
                    <button
                      type="button"
                      onClick={toggleReviews}
                      className="bg-[#720000] text-white font-medium px-8 py-2 rounded-md hover:bg-[#580000] transition duration-200 shadow-md"
                    >
                      {showReviews ? "Hide Reviews" : "View Reviews"}
                    </button>
                  </div>

                  {/* Display Reviews if button is clicked */}
                  {showReviews && (
                    <div className="mt-4">
                      {hospitalReview.ratings.length > 0 ? (
                        hospitalReview.ratings.map((review, index) => (
                          <div key={index} className="mb-4 p-4 border-b border-gray-300">
                            <p className="text-gray-700 font-medium">Rating: {review.rating} Stars</p>
                            <p className="text-gray-600">{review.review}</p>
                          </div>
                        ))
                      ) : (
                        <p>No reviews available.</p>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No hospitals available.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ViewRating;
