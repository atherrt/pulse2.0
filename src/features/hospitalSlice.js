// hospitalslice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for hospital registration (as you already have)
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
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState: {
    hospitals: [],
    selectedHospitalId: null, // Store the selected hospital's ID here
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedHospitalId: (state, action) => {
      state.selectedHospitalId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerHospital.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerHospital.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitals.push(action.payload);
      })
      .addCase(registerHospital.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedHospitalId } = hospitalSlice.actions;

// Export the reducer
export default hospitalSlice.reducer;
