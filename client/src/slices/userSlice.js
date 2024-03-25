import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isLogin: false,
    loginUser: {
     
    },
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false;
      state.isLogin = true;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state) => {
      state.loading = false;
      state.isLogin = true;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    isLoginRequest: (state) => {
      state.isLogin = false;
    },
    isLoginSuccess: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },
    isLoginFail: (state, action) => {
      state.error = action.payload;
    },

    getLogUser: (state, action) => {
      state.loginUser = action.payload;
    },

    clearStates:(state)=>{
        state.loginUser =  {}
    }
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  registerRequest,
  registerSuccess,
  registerFail,
  isLoginRequest,
  isLoginSuccess,
  isLoginFail,
  getLogUser,
  clearStates
} = userSlice.actions;

export default userSlice.reducer;