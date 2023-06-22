import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';


const instance = axios.create({baseUrl: 'https://connections-api.herokuapp.com'})

export const signUp = async body => {
    return await instance.post('/users/signup', body)
};

// export const login = createAsyncThunk('auth/login', async body => {
//   try {
//     const { data } = await axios.post('/users/signup', body);
//     return data;
//   } catch (error) {
//     // обработка ошибки
//   }
// });
