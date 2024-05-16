import React, { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { RoutePages } from "./routes";

export default function App() {

  // Function to send a message to the WebSocket server
  return (
    <div>
      <RoutePages />
    </div>
  );
}
