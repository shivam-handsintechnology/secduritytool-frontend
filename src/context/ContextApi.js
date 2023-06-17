import React, { useContext, useEffect, useState } from "react";
const SocketContext = React.createContext();
const SocketContextAppProvider = ({ children }) => {
  const [userId, setuserType] = useState(null)
   useEffect(() => {
    if(sessionStorage.getItem('token')){
      setuserType(JSON.parse(sessionStorage.getItem('token')).userId)
    }
}, [userId])
  const state = {
  };
  return <SocketContext.Provider value={state}>{children}</SocketContext.Provider>;
};
const UseSocketContext = () => {
  return useContext(SocketContext);
};
export {SocketContextAppProvider, UseSocketContext };
