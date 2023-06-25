import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './authActions';

const handlePending = (state, { payload }) => {
  state.isLoggedIn = false;
};
const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.error = '';
  state.token = payload.token;
};

const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = '';
};

const handleRefresh = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
};

const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
  state.error = '';
  state.token = null;
}
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(login.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(refreshUser.rejected, handleRejected)
});

export const authReducer = authSlice.reducer;

