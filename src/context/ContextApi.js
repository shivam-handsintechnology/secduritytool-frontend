
import React, { useContext } from 'react'
const AppContext=React.createContext();
const  ContextAppProvider = ({children}) => {
  

      // all States
    const state={
 data:"ff"
    }
  return (
    <AppContext.Provider value={state}>{children}</AppContext.Provider>
      )
}
const UseSqlLogsContext=()=>{
    return useContext(AppContext);
}
export {AppContext,ContextAppProvider,UseSqlLogsContext}
