import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const websocketUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_WEBSOCKET_BASEURL
    : process.env.REACT_APP_PRODUCTION_WEBSOCKET_BASEURL;
    const socket = io.connect(websocketUrl, {
      transports: ['websocket'],
      reconnection: true, // Enable reconnection
      reconnectionAttempts: Infinity, // Infinite reconnection attempts
      reconnectionDelay: 1000, // Delay before attempting reconnection (1 second)
      reconnectionDelayMax: 5000, // Maximum delay (5 seconds)
      timeout: 20000 // Connection timeout before failing (20 seconds)
    });




export const useSocketIoData = (event) => {
    const [data, setData] = useState(null);
  
      useEffect(() => {
        // Connect to the WebSocket server
        socket.on("connect", () => {
          console.log("Connected to the WebSocket server");
        });
        socket.on("disconnect", () => {
            console.log("Disconnected from the WebSocket server");
            });

      }, []);
    useEffect(() => {
        socket && socket.on(event, (receivedData) => {
            setData(receivedData);
        });

     
    }, [socket]);

    return {data,socket};
};


