import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import notifReducer from "./reducers/notifSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notif: notifReducer
  },
});
