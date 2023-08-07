import { createSlice } from "@reduxjs/toolkit";
// import { queryServer } from "../utils/helpers";
import { Auth } from "../utils/Auth";

const initialState = {
  loggedIn: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    checkLogin: (state) => {
      if(!Auth.loggedIn()){
        Auth.logout();
        state.loggedIn = false;
      } else {
        state.loggedIn = true;
      }
    },
    loggedIn: (state,action) => {
      // console.log('hit');
      state.loggedIn = true;
      Auth.login(action.payload.token);
    },
    loggedOut: (state) => {
      Auth.logout();
      state.loggedIn = false;
    }
  }
})

export const {checkLogin,loggedIn,loggedOut} = loginSlice.actions

export const loginReducer = loginSlice.reducer;

