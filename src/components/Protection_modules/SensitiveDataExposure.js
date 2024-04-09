import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDataFetch from '../../hooks/DataFetchHook'
import { Container } from 'react-bootstrap'
const SensitiveDataExposure = () => {
  const site="jhkjh"
    const userData = useSelector(state => state.UserReducer)
    const SecureHeaders = useDataFetch(`client/securityheaders?domain=${userData?.domain}`, [userData?.domain])
    console.log("SecureHeaders",SecureHeaders)

    const data = SecureHeaders?.data
    const Headers = data?.headersinfo
    const RawHeaders = data?.rawHeaders




    return (
        <>
       
           <React.Fragment>
              <div className="container">
           <div className="row">
             <div className="12u">
               <div className="reportSection push-top">
                 <div className="reportTitle">Security Report Summary</div>
                 <div className="reportBody">
                   <div className="row">
                     <div className="2u">
                       <div className="score">
                         <div className="score_red">
                           <span>F</span>
                         </div>
                       </div>
                     </div>
                     <div className="10u push-left">
                       <table className="reportTable">
                         <colgroup>
                           <col className="col1" />
                           <col className="col2" />
                         </colgroup>
                         <tbody>
                           <tr className="tableRow">
                             <th className="tableLabel">Site:</th>
                             <td className="tableCell">
                               <a
                                 href={site}
                                 target="_blank"
                                 rel="nofollow noreferrer noopener"
                               >
                                 {site}
                               </a>
                             </td>
                           </tr>
                           <tr className="tableRow">
                             {/* <th className="tableLabel">IP Address:</th>
                             <td className="tableCell">192.185.129.169 </td> */}
                           </tr>
                           <tr className="tableRow">
                             <th className="tableLabel">Report Time:</th>
                             <td className="tableCell">{new Date().toLocaleString()}</td>
                           </tr>
                           <tr className="tableRow">
                             <th className="tableLabel">Headers:</th>
                             <td className="tableCell">
                               <ul className="pillList">
                                 {Headers && Headers.length > 0 ? (
                                   <React.Fragment>
                                     {Headers.map((item, index) => {
                                       return item.msg.availableFields ?
                                         <li className="headerItem pill pill-green">
                                           <i className="fa fa-times" />
                                           {item.msg.availableFields}
                                         </li>
                                         : item.msg.Missing_field ?
                                           <li className="headerItem pill pill-red">
                                             <i className="fa fa-times" />
                                             {item.msg.Missing_field}
                                           </li>
                                           : <React.Fragment></React.Fragment>
                                     })}
                                   </React.Fragment>
                                 ) : (
                                   <React.Fragment></React.Fragment>
                                 )}
     
                               </ul>
                             </td>
                           </tr>
                           <tr className="tableRow">
                             <th className="tableLabel">Advanced:</th>
                             <td className="tableCell">
                               <table>
                                 <tbody>
                                   <tr>
                                     <td id="demo-button" width="80%">
                                       Ouch, you should work on your security posture
                                       immediately:{" "}
                                     </td>
                                     <td id="demo-button" width="20%">
                                       <a
                                         href="https://prbly.us/3o8vetV"
                                         target="_blank"
                                       >
                                         <input
                                           className="button"
                                           defaultValue="Start Now"
                                           type="submit"
                                         />
                                       </a>
                                     </td>
                                   </tr>
                                 </tbody>
                               </table>{" "}
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="reportSection">
                 <div className="reportTitle">Missing Headers</div>
                 <div className="reportBody">
                   <table className="reportTable">
                     <colgroup>
                       <col className="col1" />
                       <col className="col2" />
                     </colgroup>
                     <tbody>
                     {Headers && Headers.length > 0 ? (
                    <React.Fragment>
                      {Headers?.map((item, index) => {
                        console.log(item.msg.Missing_field)
                        return item.msg.Missing_field ? <React.Fragment>  <tr className="tableRow">
                          {/* <th className="tableLabel table_red">
                            {item.msg.Missing_field}
                          </th> */}
                          <td className="tableCell">
                            {item.msg.Missing_field}
                          </td>
                        </tr></React.Fragment> : <React.Fragment></React.Fragment>;
                      })}
                    </React.Fragment>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
     
                     </tbody>
                   </table>
                 </div>
               </div>
               <div className="reportSection">
                 <div className="reportTitle">Raw Headers</div>
                 <div className="reportBody">
                   <table className="reportTable">
                     <colgroup>
                       <col className="col1" />
                       <col className="col2" />
                     </colgroup>
                     <tbody>
                     {RawHeaders ? (
                    <React.Fragment>
                      {Object.keys(RawHeaders).map((item, index) => {
                        return <React.Fragment>
                          <tr className="tableRow">
                            <th className="tableLabel table_#696E76">{item}</th>
                            <td className="tableCell">{RawHeaders[item]}</td>
                          </tr>
                          {" "}
                        </React.Fragment>
                      })}
                    </React.Fragment>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                     </tbody>
                   </table>
                 </div>
               </div>
     
               {/* <div className="reportSection">
                 <div className="reportTitle">Additional Information</div>
                 <div className="reportBody">
                   <table className="reportTable">
                     <colgroup>
                       <col className="col1" />
                       <col className="col2" />
                     </colgroup>
                     <tbody>
     
                      
                     </tbody>
                   </table>
                 </div>
               </div> */}
             </div>
           </div>
            
            </div>
         </React.Fragment>
         </>
    )
}

export default SensitiveDataExposure