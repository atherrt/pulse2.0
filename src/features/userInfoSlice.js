import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch user data from API
export const fetchUserInfo = createAsyncThunk(
  'userInfo/fetchUserInfo',
  async (Id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${Id}`); // Fetch user by ID
      return response.data; // Assuming response contains the user object
    } catch (error) {
      return rejectWithValue('Failed to fetch user information from the API');
    }
  }
);


// Redux slice
const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    data: null, // To store user data
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null, // To store error messages, if any
  },
  reducers: {
    // Optional reducer for manually resetting the state
    resetUserInfo(state) {
      state.data = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Store fetched user data
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
