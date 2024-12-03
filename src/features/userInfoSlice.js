import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Toggle between using API or dummy data
const USE_DUMMY_DATA = true;

// Dummy Data
const dummyData = {
  name: "JOHN DOE",
  cnic: "3520278562465",
  age: 25,
  phone: "03054628733",
  email: "john@gmail.com",
  bloodGroup: "A+",
  weight: 52,
  height: 152,
  bmi: 25,
  healthStatus: "Healthy",
  donations: 10,
  received: 5,
  feedBacks: 10,
  badgeEarned: "GOLD",
};

// Async thunk to fetch user data from API
export const fetchUserInfo = createAsyncThunk('userInfo/fetchUserInfo', async (_, { rejectWithValue }) => {
  if (USE_DUMMY_DATA) {

    return dummyData;
  }

  try {
    const response = await axios.get('/api/userInfo'); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to fetch user information from API');
  }
});

// Redux slice
const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
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
        state.data = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
