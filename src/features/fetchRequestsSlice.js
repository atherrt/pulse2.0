import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch requests from the mock API (GET request)
export const fetchRequests = createAsyncThunk('requests/fetchRequests', async () => {
  try {
    const response = await axios.get('http://localhost:5000/requests'); // API endpoint served by json-server
    return response.data; // Return the requests data
  } catch (error) {
    throw Error('Failed to fetch requests');
  }
});

// Async thunk to post a new request to the mock API (POST request)
export const addRequest = createAsyncThunk('requests/addRequest', async (newRequest) => {
  try {
    const response = await axios.post('http://localhost:5000/requests', newRequest); // API endpoint for adding requests
    return response.data; // Return the newly created request data
  } catch (error) {
    throw Error('Failed to add request');
  }
});

const fetchRequestsSlice = createSlice({
  name: 'requests',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle GET request (fetching requests)
      .addCase(fetchRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle POST request (adding a new request)
      .addCase(addRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Append the new request to the state
      })
      .addCase(addRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchRequestsSlice.reducer;
