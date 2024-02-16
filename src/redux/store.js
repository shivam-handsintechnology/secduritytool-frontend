import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";

import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    UserReducer,
  },
});
setupListeners(store.dispatch)