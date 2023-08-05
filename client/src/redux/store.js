import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import { postReducer } from './postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
  }
})


const fetchLogin = createAsyncThunk('users/login',async () => {
  
});