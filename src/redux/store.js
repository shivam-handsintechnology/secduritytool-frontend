import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
import { setupListeners } from '@reduxjs/toolkit/query'
import websocketReducer from "./reducers/websocketReducer";

export const store = configureStore({
  reducer: {
    UserReducer,websocketReducer
  },
});
setupListeners(store.dispatch)