import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to handle donor registration API call
export const registerDonor = createAsyncThunk(
  'donor/register',
  async (donorData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/donors', // Update to point to json-server endpoint
        donorData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const donorSlice = createSlice({
  name: 'donor',
  initialState: {
    donor: null,
    role: 2, // Default role set to 2 for donor
    loading: false,
    error: null,
  },
  reducers: {
    setDonorRole: (state, action) => {
      state.role = action.payload; // Allow updating role
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerDonor.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerDonor.fulfilled, (state, action) => {
        state.loading = false;
        state.donor = action.payload; // Store the response data (e.g., donor information)
        state.role = 2; // Default role for donor is 2 (this can be dynamic based on response)
      })
      .addCase(registerDonor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store the error message
      });
  },
});

export const { setDonorRole } = donorSlice.actions;

export default donorSlice.reducer;
