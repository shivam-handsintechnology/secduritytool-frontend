import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { API } from '../config';
const SqlLogsAppContext=React.createContext();
const  SqlAppProvider = ({children}) => {
    const [sqlData, setsqlData] = useState(0)
    const [Actions, setActions] = useState([])
    const [data, setData] = useState([])
    const [iparray, setIparray] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // useefect
  
    // end UseEffetct 
    //     Delete            All           SqllLogs                        Data
    async function  deleteAllSqllLogs() {
         await axios.post(`security/sqllogs/deleteall`,{ip:iparray}).then(response=>{
        toast.success(response.message)
         return response
        }).catch(error=>{return error})
    
     }
     //    End               Delete         All           SqllLogs         Data
    //     Single            Sql           Delete                          Data
    function deleteSingleSqllLogs(body) {
      axios.post(`security/sqllogs/deletesingle`,
       body).then((response)=>{
          const {message,statusCode}=response
                 if(statusCode==200){
                      toast.success(message)
                  }
       }).catch((error)=>{
          const {data,message,statusCode}=error
          toast.error(message)
       })
  }
     //     End           Single            Sql         Delete              Data  
    //     Sql                                                             Count
  
    //     End                                  Sql                          Count
    //     Get                                  All                          SqllLogs
    const  getAllSqllLogs=(async()=> {
      await axios.get(`security/sqllogs`).then((response)=>
      {
       const {data,message}=response
       let ArrayOfdta=[]
        data.map((value)=>{
        setIparray(value.ip)
        ArrayOfdta.push( { ip:value.ip, browser:value.browser, country:value.country, date:value.date, os:value.os,Actions})
        })
        setData(ArrayOfdta)
      }
      ).catch((error)=>{console.log(error)})
      })
      //     Get                                  All                          SqllLogs
      //     Delete                               Single                       Sqlllogs
      async function  getSingleSqllLogs(body) {
        const response=await axios.post(`security/sqllogs/single`,body);
        console.log(response)
        return response
        }
      // End     Delete                               Single                       Sqlllogs
           

      // all States
    const state={
      sqlData,data,deleteSingleSqllLogs,deleteAllSqllLogs,getSingleSqllLogs,
      getAllSqllLogs,isAuthenticated, setIsAuthenticated
    }
  return (
    <SqlLogsAppContext.Provider value={state}>{children}</SqlLogsAppContext.Provider>
      )
}
const UseSqlLogsContext=()=>{
    return useContext(SqlLogsAppContext);
}
export {SqlLogsAppContext,SqlAppProvider,UseSqlLogsContext}
