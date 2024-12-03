import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch hospitals and reviews from db.json
export const fetchReviews = createAsyncThunk("ratings/fetchReviews", async () => {
  // Fetch hospitals and reviews from the db.json API
  const responseHospitals = await fetch("http://localhost:5000/hospitals");
  const responseReviews = await fetch("http://localhost:5000/reviews");

  const hospitals = await responseHospitals.json();
  const reviews = await responseReviews.json();

  // Combine reviews with their corresponding hospitals based on hospitalId
  const hospitalReviews = hospitals.map((hospital) => {
    const hospitalRatings = reviews.filter((review) => review.hospital === hospital.name);
    return {
      hospital: hospital.name,
      ratings: hospitalRatings,
    };
  });

  return hospitalReviews;
});

const ratingSlice = createSlice({
  name: "ratings",
  initialState: {
    hospitalReviews: [], // List of hospital reviews
    loading: false, // Loading state
    error: null, // Error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitalReviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ratingSlice.reducer;
