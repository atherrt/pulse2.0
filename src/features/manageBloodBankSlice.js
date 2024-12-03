import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Dummy API base URL (you should update this to your actual db.json endpoint)
const API_URL = 'http://localhost:3000/bloodBankRequests'; // Assuming db.json is served from here

// Async thunk to fetch blood bank requests (GET request)
export const fetchBloodBankRequests = createAsyncThunk(
  'manageBloodBank/fetchBloodBankRequests',
  async () => {
    try {
      const response = await axios.get(API_URL); // GET request to fetch data
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch blood bank requests');
    }
  }
);

// Async thunk to add a new request to the blood bank (POST request)
export const addBloodBankRequest = createAsyncThunk(
  'manageBloodBank/addBloodBankRequest',
  async (newRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newRequest); // POST request to add a new request
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to add blood bank request');
    }
  }
);

const manageBloodBankSlice = createSlice({
  name: 'manageBloodBank',
  initialState: {
    data: [],  // Stores the list of blood bank requests
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling the fetch request
      .addCase(fetchBloodBankRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBloodBankRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Store the fetched blood bank requests
      })
      .addCase(fetchBloodBankRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle fetch error
      })
      // Handling the add request
      .addCase(addBloodBankRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBloodBankRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Add the new request to the data list
      })
      .addCase(addBloodBankRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add blood bank request'; // Handle add request error
      });
  },
});

export default manageBloodBankSlice.reducer;
