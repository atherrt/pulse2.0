import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for user registration
export const register = createAsyncThunk(
  'auth/register',
  async ({ username, email, password, roleId }, thunkAPI) => {
    try {
      // Post to /users to register a new user
      const response = await axios.post('http://localhost:5000/users', {
        username,
        email,
        password,
        roleId,  // roleId now passed from the signup page
      });

      // Save user details in localStorage
      const { id, username: userName, email: userEmail, roleId: userRoleId } = response.data;
      localStorage.setItem('user', JSON.stringify({ id, username: userName, email: userEmail, roleId: userRoleId }));

      return { id, username: userName, email: userEmail, roleId: userRoleId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Registration failed');
    }
  }
);

// Async thunk for user login
export const login = createAsyncThunk(
  'auth/login',
  async ({ UsernameOrEmail, password }, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      const user = response.data.find(
        (user) => (user.username === UsernameOrEmail || user.email === UsernameOrEmail) && user.password === password
      );

      if (!user) {
        return thunkAPI.rejectWithValue('Invalid credentials');
      }

      // Save user details in localStorage
      const { id, username, email, roleId } = user;
      localStorage.setItem('user', JSON.stringify({ id, username, email, roleId }));

      return { id, username, email, roleId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

// Async thunk for user logout
export const logout = createAsyncThunk('auth/logout', () => {
  localStorage.removeItem('user'); // Clear user data from localStorage
  return {}; // Return an empty object to reset state
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoading: false,
    error: null,
    success: false,
    roleId: null,
  },
  reducers: {
    clearState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    // Handling registration actions
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.user = action.payload;
        state.roleId = action.payload.roleId;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handling login actions
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.user = action.payload;
        state.roleId = action.payload.roleId;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handling logout actions
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.roleId = null;
        state.success = false;
      });
  }
});

export const { clearState } = authSlice.actions;

export default authSlice.reducer;
