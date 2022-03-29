import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: "error",
  message: "",
};

export const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    showNotif: (state, action) => {
      state.open = true;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
    },
    closeNotif: (state) => {
      state.open = false;
    },
  },
});

export const { showNotif, closeNotif } = notifSlice.actions;

export default notifSlice.reducer;
