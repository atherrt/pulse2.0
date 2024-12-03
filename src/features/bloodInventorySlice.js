import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch blood inventory data from the json-server API
export const fetchBloodInventory = createAsyncThunk(
  'bloodInventory/fetchBloodInventory',
  async () => {
    const response = await fetch('http://localhost:5000/bloodInventory');
    const data = await response.json();
    return data;
  }
);

const bloodInventorySlice = createSlice({
  name: 'bloodInventory',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBloodInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBloodInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBloodInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bloodInventorySlice.reducer;
