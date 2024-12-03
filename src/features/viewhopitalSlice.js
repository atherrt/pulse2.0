import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch hospital data from the API (json-server)
export const fetchViewHospital = createAsyncThunk(
  'viewhospital/fetchViewHospital',
  async () => {
    const response = await fetch('http://localhost:5000/hospitals'); // URL to your json-server endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch hospital data');
    }
    const data = await response.json(); // Parse the JSON response
    return data;
  }
);

const viewHospitalSlice = createSlice({
  name: 'viewhospital',
  initialState: {
    hospitals: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchViewHospital.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(fetchViewHospital.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitals = action.payload; // Update the state with fetched data
      })
      .addCase(fetchViewHospital.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle any error
      });
  },
});

export default viewHospitalSlice.reducer;
