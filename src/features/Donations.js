import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch donation history from the db.json using API call
export const fetchDonationHistory = createAsyncThunk(
  'donationHistory/fetchDonationHistory',
  async () => {
    const response = await fetch('http://localhost:5000/donations'); // This should be the endpoint where json-server serves the data
    const data = await response.json();
    return data; // Return the donations array
  }
);

const donationHistorySlice = createSlice({
  name: 'donationHistory',
  initialState: {
    donations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonationHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDonationHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.donations = action.payload; // Set the donations from the API
      })
      .addCase(fetchDonationHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error if API fails
      });
  },
});

export default donationHistorySlice.reducer;
