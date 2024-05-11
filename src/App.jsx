import React, { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { RoutePages } from "./routes";
import { socket } from "./hooks/useSocket.io.data";

export default function App() {
  useEffect(() => {
    // Connect to the WebSocket server
    socket.on("connect", () => {
      console.log("Connected to the WebSocket server");
    });
    if(!socket.connected){
      socket.connect()
    }
    // Disconnect from the WebSocket server
    return () => {
      socket.disconnect();
    };
    // Handle messages from the WebSocket server
  }, []);
  // Function to send a message to the WebSocket server
  return (
    <div>
      <RoutePages />
    </div>
  );
}
