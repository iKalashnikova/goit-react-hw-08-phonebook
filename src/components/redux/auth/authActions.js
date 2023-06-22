import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.default.baseUrl = 'https://connections-api.herokuapp.com'


const register  = createAsyncThunk('auth/register', async credentials => {
    try{
        const {data} = await axios.post('/users/signup', credentials ); 
        return data;
    
    } catch (error) {
        // обработка ошибки
    }
})

const login  = createAsyncThunk('auth/login', async credentials => {
    try{
        const {data} = await axios.post('/users/signup', credentials ); 
        return data;
    
    } catch (error) {
        // обработка ошибки
    }
})