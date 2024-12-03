import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to handle hospital registration
export const registerHospital = createAsyncThunk(
  'hospital/registerHospital',
  async (hospitalData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/hospitals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hospitalData),
      });

      if (!response.ok) {
        throw new Error('Failed to register hospital');
      }

      const data = await response.json();
      return data; // Return the hospital data
    } catch (error) {
      return rejectWithValue(error.message); // Return error message if failure occurs
    }
  }
);

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState: {
    hospitals: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerHospital.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerHospital.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitals.push(action.payload); // Add the newly registered hospital to the list
      })
      .addCase(registerHospital.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default hospitalSlice.reducer;
