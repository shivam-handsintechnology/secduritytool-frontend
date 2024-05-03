import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
import LogDataReducer from "./reducers/LogsDataReducer";
import { setupListeners } from '@reduxjs/toolkit/query'
import websocketReducer from "./reducers/websocketReducer";

export const store = configureStore({
  reducer: {
    UserReducer,
    LogDataReducer,websocketReducer
  },
});
setupListeners(store.dispatch)