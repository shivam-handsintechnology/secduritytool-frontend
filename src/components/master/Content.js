import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useState,useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
export default function Content() {   
            const [sqlData, setsqlData] = useState(null)
            const [BotData, setBotData] = useState(null)
            const [ProxyData, setProxyData] = useState(null)
            const [SpamData, setSpamData] = useState(null)
            const [installation, setinstallation] = useState(null)
            const [checkdependency, setcheckdependency] = useState(null)
 useEffect(()=>{
      const  GetallSqllogsCount=(async()=> {
      await axios.get(`security/sqllogs/count`).then((response)=>
      {
        const {data,statusCode}=response
        if(statusCode===404){
          localStorage.setItem('botCount',0)
        }else if(statusCode===200){
          setsqlData(data)
    
          localStorage.setItem('sqlCount',sqlData)
        }
      }
      
      ).catch((error)=>{console.log(error)})
      })
      const  GetallBotogsCount=(async()=> {
      await axios.get(`security/botlogs/count`).then((response)=>
      {
       const {data,statusCode}=response
    
       if(statusCode===404){
         localStorage.setItem('botCount',0)
         setBotData(0)
       }else if(statusCode===200){
        localStorage.setItem('botCount',BotData)
        setBotData(data)
        console.log(data)
       }
      }
      ).catch((error)=>{console.log(error)})
      })
      const  GetallProxyogsCount=(async()=> {
      await axios.get(`security/proxylogs/count`).then((response)=>
      {
      const {data,statusCode}=response
      if(statusCode===404){
        setProxyData(0)
        localStorage.setItem('proxyCount',0)
      }else if(statusCode===200){
          setProxyData(data)
       localStorage.setItem('proxyCount',ProxyData)
      }
    }
      
      ).catch((error)=>{console.log(error)})
      })
      const  GetallSpamogsCount=(async()=> {
      await axios.get(`security/spamlogs/count`).then((response)=>
      {
   
      const {data,statusCode}=response
      if(statusCode===404){
        setSpamData(0)
        localStorage.setItem('spamCount',0)
      }else if(statusCode===200){
            setSpamData(data)
       localStorage.setItem('spamCount',SpamData)
      }
      }
      ).catch((error)=>{console.log(error)})
      })
      GetallSpamogsCount()
      GetallSqllogsCount()
      GetallProxyogsCount()
      GetallBotogsCount()
 },[])
 const [messagelistner, setMessagelistner] = useState(null);
 const [NosqlDetectorChecked, setNosqlDetectorChecked] = useState();
 const [SQLChecked, setSQLChecked] = useState();
 const [HTMLChecked, setHTMLChecked] = useState();
 const [XSSChecked, setXSSChecked] = useState();
 const [ProxyChecked, setProxyChecked] = useState();
 const [CommandLineinjectionChecked, setCommandLineinjectionChecked] = useState();
 const [BotChecked, setBotChecked] = useState();
 const [SpamChecked, setSpamChecked] = useState();
 const [LdapChecked, setLdapChecked] = useState();
 
 useEffect(()=>{
      axios.get('security/middlwares').then((response) => {
      //  console.log(response.data)
        setNosqlDetectorChecked(response.data.NosqlDetectorMiddlware)
        setSpamChecked(response.data.SpamMiddleware)
        setBotChecked(response.data.BotMiddleware)
        setSQLChecked((response.data.SqlDetectorMiddlware))
        setHTMLChecked((response.data.checkHTMLMiddlware))
        setXSSChecked(response.data.xssInjectionDetectorMiddlware)
        setProxyChecked(response.data.VpnProtectMiddlware)
        setCommandLineinjectionChecked(response.data.commandlineinjectionMiddlware)
        setLdapChecked(response.data.ldapInjectionDetectorMiddlware)
      }
      ).catch((error) => {
        console.error(error)
      })
    
 })

const updatemiddleware = useCallback(
 (value) => {
   axios
     .post('security/middlwares/switch', value)
     .then((response) => {
      //  console.log(response.message);
       setMessagelistner(response.message)
       toast.success(messagelistner)
     })
     .catch((error) => {
       console.error(error.message);
       toast.error(error.message);
     });
 },
 [],
);

const handleSqlChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setSQLChecked(isChecked);
   updatemiddleware({ SqlDetectorMiddlware: isChecked });
 },
 [updatemiddleware],
);
const handleLdapChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setLdapChecked(isChecked);
   updatemiddleware({ ldapInjectionDetectorMiddlware: isChecked });
 },
 [updatemiddleware],
);
const handleSpamChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setSpamChecked(isChecked);
   updatemiddleware({ SpamMiddleware: isChecked });
 },
 [updatemiddleware],
);
const handleBotChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setBotChecked(isChecked);
   updatemiddleware({ BotMiddleware: isChecked });
 },
 [updatemiddleware],
);
const handleHtmlChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setHTMLChecked(isChecked);
   updatemiddleware({ checkHTMLMiddlware: isChecked });
 },
 [updatemiddleware],
);
const handleXSSChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setXSSChecked(isChecked);
   updatemiddleware({ xssInjectionDetectorMiddlware: isChecked });
 },
 [updatemiddleware],
);

const handleVpnChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setProxyChecked(isChecked);
   updatemiddleware({ VpnProtectMiddlware: isChecked });
 },
 [updatemiddleware],
);
const handleCommandLineChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setCommandLineinjectionChecked(isChecked);
   updatemiddleware({ commandlineinjectionMiddlware: isChecked });
 },
 [updatemiddleware],
);
const handleNosqlChange = useCallback(
 (event) => {
   const isChecked = event.target.checked;
   setNosqlDetectorChecked(isChecked);
   updatemiddleware({ NosqlDetectorMiddlware: isChecked });
 },
 [updatemiddleware],
);
const ScannerHandler=async()=>{
   axios.get('/client/logsdata?sid=localhost')
  .then((session)=>{
      setinstallation(session)
    
  }).catch((e)=>{
      console.log(e)
  })
}

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1> 
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <i className="fas fa-home" /> Admin Panel
                  </Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
        
          <h4> <a className="btn btn-primary" onClick={ScannerHandler}>Test All installed node modules files</a></h4>
          {installation?
        installation.map((k,v)=>{
            
            return (
              <div className="row">
              <table class="table">
                <tbody>
                  {
                    Object.keys(k).map((l, i) => {
                      const value = k[l];
                      return (
                        <tr key={l}>
                          <th scope="row">{l}</th>
                          <td>{value}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
            
            )
          })
          
          :<div>not found</div>}
          <div className="row">
            {/* 4 columns start*/}
            <div className="col-sm-6 col-lg-3">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{sqlData}</h3>
                  <p>SQLi Attacks</p>
                   
                </div>
                <div className="icon">
                  <i className="fas fa-code" />
                </div>
                {sqlData===0?<a className="small-box-footer" >No Logs </a>: <Link to="Sqlinjectionlogs" className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>}
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>{BotData}</h3>
                  <p>Bad Bots</p>
                </div>
                <div className="icon">
                  <i className="fas fa-robot" />
                </div>
                {BotData===0?<a className="small-box-footer" >No Logs </a>: <Link to="/Badbotlogs" className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
}
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>{ProxyData}</h3>
                  <p>Proxies</p>
                </div>
                <div className="icon">
                  <i className="fas fa-globe" />
                </div>
              {ProxyData===0?<a className="small-box-footer" >No Logs </a>: <Link to='/Proxylogs' className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>}  
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{SpamData}</h3>
                  <p>Spammers</p>
                </div>
                <div className="icon">
                  <i className="fas fa-keyboard" />
                </div>
                {SpamData===0?<a className="small-box-footer" >No Logs </a>: <Link to="/Spammerlogs" className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
                   }
              </div>
            </div>
            {/* 4 columns end */}
          
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}

        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title"><i className="fas fa-stream" /> Modules Status</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-body bg-light">
                  <center>
                    <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules</h5>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-code" /> SQLi</strong><br />Protection<hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={SQLChecked} onChange={handleSqlChange} />
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-robot" /> Bad Bots</strong><br />Protection<hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={BotChecked} onChange={handleBotChange} />
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-globe" /> Proxy</strong><br />Protection<br /><hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={ProxyChecked} onChange={handleVpnChange} />
                   
                    <h4><span className="badge badge-danger"><i className="fas fa-times" /> OFF</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-keyboard" /> Spam</strong><br />Protection<br /><hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={SpamChecked} onChange={handleSpamChange} />
                    <h4><span className="badge badge-danger"><i className="fas fa-times" /> OFF</span></h4>
                  </center>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-body bg-light">
                  <center>
                    <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules</h5>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-code" /> Commandline</strong><br />Protection<hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={CommandLineinjectionChecked} onChange={handleCommandLineChange} />
             
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-robot" /> No Sql</strong><br />Protection<hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={NosqlDetectorChecked} onChange={handleNosqlChange} />
             
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-globe" /> Html</strong><br />Protection<br /><hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={HTMLChecked} onChange={handleHtmlChange} />
                   
                    <h4><span className="badge badge-danger"><i className="fas fa-times" /> OFF</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-keyboard" /> Xss</strong><br />Protection<br /><hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={XSSChecked} onChange={handleXSSChange} />
                    <h4><span className="badge badge-danger"><i className="fas fa-times" /> OFF</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-keyboard" /> Ldap</strong><br />Protection<br /><hr />
                    <input style={{marginTop: "15px",float:"right"}} className="form-check-input" type="checkbox" id="sqlCheckbox" checked={LdapChecked} onChange={handleLdapChange} />
                    <h4><span className="badge badge-danger"><i className="fas fa-times" /> OFF</span></h4>
                  </center>
                </div>
              </div>
            </div>
         
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <div className="card card-primary card-outline">
                <div className="card-body text-center">
                  <p className="text-uppercase mar-btm text-lg">SQL Injections</p>
                  <i className="fas fa-code fa-2x" />
                  <hr />
                  <p className="h3 text-thin">{sqlData}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="card card-danger card-outline">
                <div className="card-body text-center">
                  <p className="text-uppercase mar-btm text-lg">Bad Bots</p>
                  <i className="fas fa-robot fa-2x" />
                  <hr />
                  <p className="h3 text-thin">{BotData}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="card card-success card-outline">
                <div className="card-body text-center">
                  <p className="text-uppercase mar-btm text-lg">Proxies</p>
                  <i className="fas fa-globe fa-2x" />
                  <hr />
                  <p className="h3 text-thin">{ProxyData}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="card card-warning card-outline">
                <div className="card-body text-center">
                  <p className="text-uppercase mar-btm text-lg">Spammers</p>
                  <i className="fas fa-keyboard fa-2x" />
                  <hr />
                  <p className="h3 text-thin">{SpamData}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="info-box">
              <span className="info-box-icon bg-dark"><i className="fas fa-globe" /></span>
              <div className="info-box-content">
                <span className="info-box-text">GeoIP API Status</span>
                <span className="info-box-number"><font color="green">Online</font></span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box">
              <span className="info-box-icon bg-dark"><i className="fas fa-cloud" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Proxy Detection API Status</span>
                <span className="info-box-number"><font color="red">Disabled</font></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-primary card-outline">
              <div className="card-header with-border">
                <h3 className="card-title">Recent Logs</h3>
                <a href="all-logs.php" className="btn btn-flat btn-primary btn-sm float-sm-right"><i className="fas fa-list" /> View All</a>
              </div>
              <div className="card-body">
                <div className="callout callout-info"><p>There are no recent <b>Logs</b></p></div>            			      </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary card-outline">
              <div className="card-header with-border">
                <h3 className="card-title">Recent IP Bans</h3>
                <a href="bans-ip.php" className="btn btn-flat btn-primary btn-sm float-sm-right"><i className="fas fa-list" /> View All</a>
              </div>
              <div className="card-body">
                <div className="callout callout-info"><p>There are no recent <b>IP Bans</b></p></div>            			      </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary card-outline">
              <div className="card-header with-border">
                <h3 className="card-title">Statistics</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-hover">
                  <thead className="thead-dark">
                    <tr className="active">
                      <th><i className="fas fa-list" /> Threat Logs</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Today</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>This month</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>This year</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                  <thead className="thead-dark">
                    <tr className="active">
                      <th><i className="fas fa-ban" /> IP Bans</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Today</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>This month</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>This year</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /.content */}
    </div>
  );
}
