import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Replace with your API client

// Async thunk to send password reset request
export const resetPassword = createAsyncThunk(
  "password/resetPassword",
  async ({ password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/reset-password", { password }); // Update endpoint URL
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Failed to reset password");
    }
  }
);

const passwordSlice = createSlice({
  name: "password",
  initialState: {
    isLoading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default passwordSlice.reducer;
