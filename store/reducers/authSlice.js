import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  accessToken: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.email = action.payload.email
      state.id = action.payload.id
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    removeAuthData: (state) => {
      state.email = ""
      state.id = ""
      state.accessToken = ""
      state.refreshToken = "" 
    },
  },
});

export const { setAuthData, removeAuthData } = authSlice.actions;

export default authSlice.reducer;
