import {configureStore} from '@reduxjs/toolkit';
import { loginReducer } from './loginSlice';
// import { postReducer } from './postSlice';

export const store = configureStore({
  reducer: {
    // posts: postReducer,
    login: loginReducer,
  }
})
