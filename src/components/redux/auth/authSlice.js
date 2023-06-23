import { createSlice } from '@reduxjs/toolkit';
import { register } from './authActions';

const handlePending = (state, { payload }) => {
  state.isLoggedIn = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = '';
  state.token = payload.token;
};
const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = '';
};
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    // isRefreshing: false,
  },
  // reducers:{},
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
