import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client"
const SocketContext = React.createContext();

const SocketContextAppProvider = ({ children }) => {
   const [socket,setSocket]=useState(null)
   useEffect(() => {
    const socket = io("http://localhost:5000",{query:{"agentone":""}});
  //   const socket = io("http://jdvchatbackend.handsintechnology.in/");
  setSocket(socket)
  socket.on("connect", () => {
      console.log("socket Connected")
      socket.emit("joinRoom",' location.state.room')
  })
   socket.on("data",(data)=>{
    console.log(data)
   })
  socket.on("disconnect", () => {
      return (() => {
          socket.disconnect()
       })
  });       
}, [])
  const state = {
    socket,
  };
  return <SocketContext.Provider value={state}>{children}</SocketContext.Provider>;
};
const UseSocketContext = () => {
  return useContext(SocketContext);
};
export { SocketContext, SocketContextAppProvider, UseSocketContext };
