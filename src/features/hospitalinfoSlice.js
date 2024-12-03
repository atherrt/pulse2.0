import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Backend URL
const BACKEND_URL = "http://localhost:5000/hospitals";

// Async thunk to fetch hospital information by ID
export const fetchHospitalInfo = createAsyncThunk(
  "hospitalInfo/fetchHospitalInfo",
  async (hospitalId, { rejectWithValue }) => {
    try {
      if (!hospitalId) throw new Error("Hospital ID is required");
      const response = await axios.get(`${BACKEND_URL}/${hospitalId}`);
      console.log(response.data);
      return response.data; // Assumes your backend returns the full payload
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Failed to fetch hospital info"
      );
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const hospitalInfoSlice = createSlice({
  name: "hospitalInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHospitalInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHospitalInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHospitalInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Selector to access hospital information
export const selectHospitalInfo = (state) => state.hospitalInfo;

// Export the reducer
export default hospitalInfoSlice.reducer;
