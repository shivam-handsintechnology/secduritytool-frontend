import React, { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import './switch.css'
import "./App.css"
import { RoutePages } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import {  WEBSOCKET_CONNECT, WEBSOCKET_SEND_MESSAGE } from "./redux/reducers/websocketReducer";
export default function App() {
  const dispatch = useDispatch();
  // Dispatch action to connect to WebSocket server when component mounts
  useEffect(() => {
    dispatch(WEBSOCKET_CONNECT());
  }, []);

  // Function to send a message to the WebSocket server
  return (
    <div>
      <RoutePages />
    </div>
  );
}
