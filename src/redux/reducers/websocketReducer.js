import { createSlice } from "@reduxjs/toolkit";

let ws;
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

                ws.onmessage = async (event) => {

                    const message = await event.data;
                    // const formattedMessage = `${userId}: ${message}`;
                    // messageChannel.postMessage(formattedMessage);
                    // Dispatch action to handle received message
                    // Assuming state.messages is an array
                    // return {
                    //     ...state,
                    //     messages: state.messages.push(message) || [...state.messages, message]
                    // };

                    return messageValue.push(message)
                };

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
    },
});

export const { WEBSOCKET_CONNECT, WEBSOCKET_SEND_MESSAGE } = webSocketSlice.actions;

export default webSocketSlice.reducer;
