import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, getProfile } from './authActions';

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
};
const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
};
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    profile: null
    // isRefreshing: false,
  },
  reducers: {
    logOut() {
      return {
        user: { name: null, email: null },
        profile: null,
        token: "",
      };
    }
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(getProfile.fulfilled, handleFulfilledProfile)
      .addMatcher(isAnyOf(login.pending, getProfile.pending), handlePending)
      .addMatcher(isAnyOf(login.rejected, getProfile.rejected), handleRejected)
});

export const authReducer = authSlice.reducer;
export const {logOut} = authSlice.actions;
