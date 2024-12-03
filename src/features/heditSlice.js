import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Dummy API Data
const initialDummyData = {
  ownerName: "John Doe",
  hospitalName: "City Hospital",
  phoneNumber: "123-456-7890",
  hospitalType: "Private",
  email: "john@example.com",
  licenseNumber: "LIC123456",
  emergencyContact: "987-654-3210",
  websiteURL: "www.cityhospital.com",
  address: "123 Main St, Springfield",
  licenseExpiryDate: "2024-12-31",
};

// Thunk to fetch data from the API (Simulated)
export const fetchHospitalData = createAsyncThunk(
  "hedit/fetchHospitalData",
  async () => {
    // Simulate a delay for API fetch
    return new Promise((resolve) => {
      setTimeout(() => resolve(initialDummyData), 500);
    });
  }
);

// Thunk to post updated data to the API (Simulated)
export const updateHospitalData = createAsyncThunk(
  "hedit/updateHospitalData",
  async (updatedData) => {
    // Simulate a delay for API post
    return new Promise((resolve) => {
      setTimeout(() => resolve(updatedData), 500);
    });
  }
);

const heditSlice = createSlice({
  name: "hedit",
  initialState: {
    hospitalData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Hospital Data
      .addCase(fetchHospitalData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHospitalData.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitalData = action.payload;
      })
      .addCase(fetchHospitalData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch hospital data.";
      })

      // Update Hospital Data
      .addCase(updateHospitalData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateHospitalData.fulfilled, (state, action) => {
        state.loading = false;
        state.hospitalData = action.payload;
      })
      .addCase(updateHospitalData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to update hospital data.";
      });
  },
});

export default heditSlice.reducer;
