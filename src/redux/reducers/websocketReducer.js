import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

let websocketurl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_WEBSOCKET_BASEURL
    : process.env.REACT_APP_PRODUCTION_WEBSOCKET_BASEURL;

console.log(websocketurl, "websocketurl");

export const socket = io.connect(websocketurl, {
  "transports": ['websocket']
});

// Define the initial state of the WebSocket connection
const initialState = {
  connection: null,
  messages: [],
};

// Create a slice for the WebSocket connection
const webSocketSlice = createSlice({
  name: "WebSocket",
  initialState,
  reducers: {
    WEBSOCKET_CONNECT: (state, action) => {
      socket.on("connect", () => {
        console.log("WebSocket connected successfully!");
      });

      socket.on("error", (error) => {
        console.error("WebSocket error:", error);
      });

      socket.on("disconnect", () => {
        console.log("WebSocket connection closed.");
    
      });
    },
    WEBSOCKET_SEND_MESSAGE: (state, action) => {
      try {
        const message = action.payload;
        console.log("Sending message:", message);
        socket.emit("message", message);
        state.messages.push(`Sent: ${message}`);
      } catch (error) {
        console.log("Error sending message:", error);
      }
    },
    RECEIVE_MESSAGE: (state, action) => {
      const message = action.payload;
      state.messages.push(message);
    },
  },
});

export const {
  WEBSOCKET_CONNECT,
  RECEIVE_MESSAGE,
  WEBSOCKET_SEND_MESSAGE,
} = webSocketSlice.actions;

// Dispatch the action from the event handler
export default webSocketSlice.reducer;