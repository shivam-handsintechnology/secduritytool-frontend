// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react'
// import { toast } from 'react-toastify';
// import { API } from '../config';
// const MiddlewareAppContext=React.createContext();
// const  MiddlewareAppProvider = ({children}) => {
//   // const [BadBotsChecked, setBadBotsChecked] = useState(false);
//   // const [ChangeBadBotsValue, setChangeBadBotsValue] = useState()
//   // const [SpamChecked, setSpamChecked] = useState(false);
//   // const [ChangeSpamValue, setChangeSpamValue] = useState()
//   // const [BadWordsChecked, setBadWordsChecked] = useState(false);
//   // const [ChangeBadWordsValue, setChangeBadWordsValue] = useState()
//   // const [NosqlDetectorChecked, setNosqlDetectorChecked] = useState();
//   // const [ChangeNosqlDetectorValue, setChangeNosqlDetectorValue] = useState()
//   const [SQLChecked, setSQLChecked] = useState();
//   const [ChangeSqlValue, setChangeSqlValue] = useState()
//   const [HTMLChecked, setHTMLChecked] = useState();
//   const [ChangeHTMLValue, setChangeHTMLValue] = useState()
//   const [XSSChecked, setXSSChecked] = useState();
//   const [ChangeXSSValue, setChangeXSSValue] = useState()
//   const [ProxyChecked, setProxyChecked] = useState();
//   const [ChangeProxyValue, setChangeProxyValue] = useState()
//   const [HtmlSanitizerChecked, setHtmlSanitizerChecked] = useState();
//   const [ChangeHtmlSanitizerValue, setChangeHtmlSanitizerValue] = useState()
//   const [CommandLineinjectionChecked, setCommandLineinjectionChecked] = useState();
//   const [ChangeCommandLineinjectionValue, setChangeCommandLineinjectionValue] = useState()
   
//   useEffect(()=>{
//     const getmiddlwares = async() => {
//       await axios.get('security/middlwares').then((response) => {
//         console.log(response.data)
//         //  setNosqlDetectorChecked(response.data.NosqlDetectorMiddlware)
//         setSQLChecked((response.data.SqlDetectorMiddlware))
//          setHTMLChecked((response.data.checkHTMLMiddlware))
//          setXSSChecked(response.data.xssInjectionDetectorMiddlware)
//          setProxyChecked(response.data.VpnProtectMiddlware)
//          setHtmlSanitizerChecked(response.data.SanitizeinputMiddleware)
//          setCommandLineinjectionChecked(response.data.commandlineinjectionMiddlware)
//        }
//        ).catch((error) => {
//          console.error(error)
//        })
//      }
//      getmiddlwares()
//   })
//   const updateSqlmiddleware =(value) => {
//     console.log({value})
//     axios.post('security/middlwares/switch',value).then((response) => {
//       console.log(response)
//     }).catch((error) => {
//       // console.error(error)
//     })
// }
//   // all Statse
//     const state={
//        updateSqlmiddleware,
//       //  sqlChecked
//        SQLChecked,ChangeSqlValue, setChangeSqlValue
//       //  html check
//       ,ChangeHTMLValue,HTMLChecked,setChangeHTMLValue,
//       // proxyChange
//        ChangeProxyValue, setChangeProxyValue,ProxyChecked,
//       // xss check
//        ChangeXSSValue, setChangeXSSValue,XSSChecked,
//       //  html sanitization
//       ChangeHtmlSanitizerValue, setChangeHtmlSanitizerValue,HtmlSanitizerChecked,
//       //  commandline 
//       ChangeCommandLineinjectionValue, setChangeCommandLineinjectionValue,CommandLineinjectionChecked
//       //  NosqlDetectorChecked, setNosqlDetectorChecked,ChangeNosqlDetectorValue, setChangeNosqlDetectorValue
    
//     }
//   return (
//   <MiddlewareAppContext.Provider value={state}>{children}</MiddlewareAppContext.Provider>
//       )
// }
// const UseMiddlewaresContext=()=>{
//     return useContext(MiddlewareAppContext);
// }
// export {MiddlewareAppContext,MiddlewareAppProvider,UseMiddlewaresContext}
