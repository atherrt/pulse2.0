import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch hospitals from json-server (backend)
export const fetchUserHospitals = createAsyncThunk(
  'giverating/fetchUserHospitals',
  async () => {
    const response = await fetch('http://localhost:5000/hospitals'); // Your json-server endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch hospitals');
    }
    return response.json(); // Parse the JSON response
  }
);

// Submit rating and review to json-server
export const submitHospitalRating = createAsyncThunk(
  'giverating/submitHospitalRating',
  async ({ hospitalId, rating, review }) => {
    // Create the new rating data
    const ratingData = { hospitalId, rating, review };

    const response = await fetch(`http://localhost:5000/hospitals/{id}/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ratingData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit rating');
    }
    return response.json(); // Return the response data
  }
);

const giveratingSlice = createSlice({
  name: 'giverating',
  initialState: {
    hospitals: [],
    loading: false,
    error: null,
    submissionStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchUserHospitals
      .addCase(fetchUserHospitals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserHospitals.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitals = action.payload;
      })
      .addCase(fetchUserHospitals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle submitHospitalRating
      .addCase(submitHospitalRating.pending, (state) => {
        state.submissionStatus = 'loading';
      })
      .addCase(submitHospitalRating.fulfilled, (state) => {
        state.submissionStatus = 'success';
      })
      .addCase(submitHospitalRating.rejected, (state, action) => {
        state.submissionStatus = 'error';
        state.error = action.error.message;
      });
  },
});

export default giveratingSlice.reducer;
