import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserHospitals, submitHospitalRating } from '../../features/giveratingSlice';

const GiveRating = () => {
  const dispatch = useDispatch();
  const { hospitals, loading, error, submissionStatus } = useSelector(
    (state) => state.giverating
  );

  const [formData, setFormData] = useState({
    hospitalId: '',
    rating: '',
    review: '',
  });

  useEffect(() => {
    dispatch(fetchUserHospitals());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitHospitalRating(formData));
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="bg-pink-200 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-80 md:w-96">
        <h1 className="text-2xl font-bold text-red-600 text-center mb-6">
          Rate and Review a Hospital
        </h1>

        {submissionStatus === 'success' && (
          <p className="text-green-600 text-center mb-4">Review submitted successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-red-600 text-center mb-4">Error submitting review.</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="hospitalId" className="block text-gray-700 font-semibold mb-1">
              Choose Hospital
            </label>
            <select
              id="hospitalId"
              name="hospitalId"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
              value={formData.hospitalId}
              onChange={handleChange}
            >
              <option value="">Select Hospital</option>
              {hospitals.map((hospital) => (
                <option key={hospital.id} value={hospital.id}>
                  {hospital.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="rating" className="block text-gray-700 font-semibold mb-1">
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
              value={formData.rating}
              onChange={handleChange}
            >
              <option value="">Select Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>

          <div>
            <label htmlFor="review" className="block text-gray-700 font-semibold mb-1">
              Review:
            </label>
            <textarea
              id="review"
              name="review"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
              rows="4"
              placeholder="Message"
              value={formData.review}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            disabled={submissionStatus === 'loading'}
          >
            {submissionStatus === 'loading' ? 'Submitting...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GiveRating;
