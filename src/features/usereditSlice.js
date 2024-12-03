import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Dummy data to prefill the form
const dummyData = {
  fullName: "John Doe",
  dob: "1998-01-01",
  phoneNumber: "03054628733",
  emergencyContact: "03051234567", // Changed from dropdown to text
  bloodGroup: "A+",
  email: "john@gmail.com",
  weight: "70",
  height: "180",
  cnic: "123456789", // Changed from dropdown to text
  address: "123 Street, City, Country",
};

// Async thunk to save the updated data via API
export const saveUserInfo = createAsyncThunk(
  'registration/saveUserInfo',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/userInfo', userData); // Replace with actual API endpoint
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to save user information');
    }
  }
);

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    data: dummyData, // Prefilled form data
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // Reducer to update form fields locally
    updateFormField(state, action) {
      const { field, value } = action.payload;
      state.data[field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveUserInfo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(saveUserInfo.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(saveUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { updateFormField } = registrationSlice.actions;
export default registrationSlice.reducer;
