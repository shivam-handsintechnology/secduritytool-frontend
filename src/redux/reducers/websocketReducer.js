import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
export const ws = new WebSocket("ws://localhost:20000");

let messageChannel;
let isEventListenerSetup = false;

const userId = Math.random().toString(36).substring(7);
const initialState = {
    connection: null,
    messages: []
};

const webSocketSlice = createSlice({
    name: "WebSocket",
    initialState: initialState,
    reducers: {
        WEBSOCKET_CONNECT: (state, action) => {
            if (!ws || ws.readyState === WebSocket.CLOSED) {
                ws = new WebSocket('ws://localhost:20000');
                ws.onopen = () => {
                    console.log('WebSocket connected successfully!');
                };

                console.log(Object.keys(state), state.messages,"check data")

                const messageValue=[]
                console.log("check data", messageValue)

                ws.onerror = (error) => {
                    console.error('WebSocket error:', error);
                };

                ws.onclose = () => {
                    console.log('WebSocket connection closed.');
                    // Reset the ws variable to null
                    ws = null;
                };

                console.log('WebSocket:', ws);
            }



        },
        WEBSOCKET_SEND_MESSAGE: (state, action) => {
            try {
                const message = action.payload;
                console.log('Sending message:', message);
                ws.send(message);
                // Dispatch action to handle sent message
                state.messages.push(`Sent: ${message}`);
            } catch (error) {
                console.log('Error sending message:', error);
            }
        },
        RECEIVE_MESSAGE: (state, action) => {
            const message = action.payload;
            // Update the state with the received message
            return {
              ...state,
              messages: [...state.messages, message]
            };
          }
    },
});

export const { WEBSOCKET_CONNECT,RECEIVE_MESSAGE, WEBSOCKET_SEND_MESSAGE } = webSocketSlice.actions;
// Dispatch the action from the event handler
export default webSocketSlice.reducer;
