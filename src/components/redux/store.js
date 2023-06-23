import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice';
import {authReducer} from '../redux/auth/authSlice'

export const store = configureStore({
  reducer: {
    friend: contactsSlice.reducer, 
    auth: authReducer,

  },

});

