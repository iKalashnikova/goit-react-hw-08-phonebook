import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const dellToken = token => {
axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const {data} = await axios.post('/users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logOut = createAsyncThunk('auth/logout',
async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    dellToken()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_,thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if(!persistedToken) {return thunkAPI.rejectWithValue('Unable to fetch user')};

  try {
    setToken(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
} )

