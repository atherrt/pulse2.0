import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for your JSON server
const API_URL = 'http://localhost:5000/hospitals';

// Fetch hospital data (async thunk)
export const fetchHospitalData = createAsyncThunk(
  'hedit/fetchHospitalData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/1`); // Assuming `1` is the hospital ID for demo purposes
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update hospital data (async thunk)
export const updateHospitalData = createAsyncThunk(
  'hedit/updateHospitalData',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/1`, formData); // Assuming `1` is the hospital ID
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice definition
const heditSlice = createSlice({
  name: 'hedit',
  initialState: {
    hospitalData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch data cases
      .addCase(fetchHospitalData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHospitalData.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitalData = action.payload;
      })
      .addCase(fetchHospitalData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update data cases
      .addCase(updateHospitalData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateHospitalData.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitalData = action.payload;
      })
      .addCase(updateHospitalData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default heditSlice.reducer;
