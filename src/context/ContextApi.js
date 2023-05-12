import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client"
const SocketContext = React.createContext();

const SocketContextAppProvider = ({ children }) => {
  const [userId, setuserType] = useState(null)
  const [userType, setType] = useState(null)
  const [socket,setSocket]=useState(null)
   useEffect(() => {
    if(sessionStorage.getItem('token')){
      var Id= JSON.parse(sessionStorage.getItem('token')).userId
      var TypeId= JSON.parse(sessionStorage.getItem('token')).userType
      if(Id){
        setuserType(Id)
        setType(TypeId)
      }
    }
    console.log({userId})
    if(userId!==null){
      // const socket = io("https://sercuritytool.handsintechnology.in",{query:{userId,userType}});
      //   const socket = io("http://jdvchatbackend.handsintechnology.in/");
    //   const socket = io("http://jdvchatbackend.handsintechnology.in/");
    setSocket(socket)
    }
 
  if(socket){
   
    socket.on("connect", () => {
      console.log("socket Connected")
  })
   
  socket.on("disconnect", () => {
    console.log(" socket disconneted")
      return (() => {
          socket.disconnect()
       })
  }); 
  }
 
}, [userId])
  const state = {
    socket,userId
  };
  return <SocketContext.Provider value={state}>{children}</SocketContext.Provider>;
};
const UseSocketContext = () => {
  return useContext(SocketContext);
};
export { SocketContext, SocketContextAppProvider, UseSocketContext };
