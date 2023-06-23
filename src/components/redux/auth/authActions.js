import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.default.baseUrl = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/signup', credentials);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    return data;
  } catch (error) {
    // обработка ошибки
  }
});
