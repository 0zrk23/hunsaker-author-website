import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { queryServer } from "../utils/helpers";

const initialState = {
  loggedIn: false,
}

const fetchLogin = createAsyncThunk('user/login', async () => {
  try{
    const response = queryServer()
  } catch {
    console.log(err.message);
  }
});