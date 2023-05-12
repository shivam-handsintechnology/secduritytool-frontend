import axios from "axios";
import React, { useEffect, useState,useCallback  } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { UseMiddlewaresContext } from "../../context/AuthApi";
import SwitchComponent from "./Switch";
export default function Menu() {
  const [Middlewares, setaMiddlewares] = useState({});
  const [ChangeValue, setChangeValue] = useState()
  const [SQLChecked, setSQLChecked] = useState(Middlewares.SqlDetectorMiddlware);
  const [HTMLChecked, setHTMLChecked] = useState(Middlewares.checkHTMLMiddlware);
  const [XSSChecked, setXSSChecked] = useState(Middlewares.xssInjectionDetectorMiddlware);
  const [BadBotsChecked, setBadBotsChecked] = useState(false);
  const [ProxyChecked, setProxyChecked] = useState(false);
  const [SpamChecked, setSpamChecked] = useState(false);
  const [BadWordsChecked, setBadWordsChecked] = useState(false);
  const [ANALYTICSChecked, setANALYTICSChecked] = useState(false);
  const [ResponseData, setResponseData] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
    // getmiddlwares()


  }, [])
 
 
  // end UseEffetct 
    //     Delete                               Single                       Sqlllogs
  //   const getmiddlwares = async() => {
  //    await axios.get('security/middlwares').then((response) => {
  //       setaMiddlewares(response.data)
  //     }
  //     ).catch((error) => {
  //       console.error(error)
  //     })
      
      
  //   }
  //   // getmiddlwares()
  //   const updateSqlmiddleware =(value) => {
  //     axios.post('security/middlwares/switch',value).then((response) => {
  //       console.log(response)
  //      // getmiddlwares()
  //  
  //     }).catch((error) => {
  //       console.error(error)
  //     })
  // }
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/" className="brand-link">
        <img
          src="http://handsintechnology.in/1assets/images/bg/shapes/logo12.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "1" }}
        />
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Vishal Kunwar
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar nav-legacy flex-column" data-widget="treeview" role="menu">
            <li className="nav-header">NAVIGATION</li>
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />&nbsp; <p>Dashboard</p>
              </Link>
            </li>
            {/* <li className="nav-item ">
              <Link to="/Systeminfo" className="nav-link ">
                <i className="fas fa-info-circle" />&nbsp; <p>System Information</p>
              </Link>
            </li>
            <li className="nav-item has-treeview ">
              <a href="#" className="nav-link ">
                <i className="fas fa-flag" />&nbsp; <p>Whitelist <i className="fas fa-angle-right right" />
                </p></a>
              <ul className="nav nav-treeview">
                <li className="nav-item "><Link to="/Ipwhitelist" className="nav-link "><i className="fas fa-user" />&nbsp; <p>IP Whitelist</p></Link></li>
                <li className="nav-item "><Link to="/Filewhitelist" className="nav-link "><i className="far fa-file-alt" />&nbsp; <p>File Whitelist</p></Link></li>
              </ul>
            </li>
            <li className="nav-item ">
              <Link to="/Warningpages" className="nav-link ">
                <i className="fas fa-file-alt" />&nbsp; <p>Warning Pages</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Loginsecurity" className="nav-link ">
                <i className="fas fa-history" />&nbsp; <p>Login History</p>
              </Link>
            </li> */}
            <li className="nav-header">SECURITY</li>
            {/* <li className="nav-item ">
              <Link to="/Sqlinjection" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>SQL Injection
                  <span className="right badge badge-success"> <Switch onClick={
                    updateSqlmiddleware({SqlDetectorMiddlware: SQLChecked})  }  onChange={(checked) => { setSQLChecked(checked) }} checked={Middlewares.SqlDetectorMiddlware}/></span>
                </p></Link>
            </li> */}
            {/* <li className="nav-item ">
              <Link to="/Sqlinjection" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>SQL Injection
                  <span className="right badge badge-success"> <Switch onClick={
                    updateSqlmiddleware({SqlDetectorMiddlware: SQLChecked})  }  onChange={(checked) => { setSQLChecked(checked) }} checked={Middlewares.SqlDetectorMiddlware}/></span>
                </p></Link>
            </li> */}
            <li className="nav-item " style={{display:'flex'}}>
            <Link to="/Sqlinjection" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>M On off
                </p>
                </Link>
                <SwitchComponent Middlewares={Middlewares}  changeMiddlewarevalue={SqlDetectorMiddlware}  />
            </li>
            <li className="nav-item " style={{display:'flex'}}>
            <Link to="/Sqlinjection" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>M On off
                </p>
                </Link>
               
            </li>
          
            
            {/* <li className="nav-item ">
              <Link to="/Sqlinjection" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>HTML Injection
                  <span className="right badge badge-success"> <Switch  onClick={updateSqlmiddleware(
                    {checkHTMLMiddlware: HTMLChecked})} onChange={(checked) => { setHTMLChecked(checked); }} checked={Middlewares.checkHTMLMiddlware} /></span>
                </p></Link>
            </li>
            <li className="nav-item ">
              <Link to="/Sqlinjection" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>XSS Injection
                  <span className="right badge badge-success"> <Switch onClick={updateSqlmiddleware(
                    {xssInjectionDetectorMiddlware: XSSChecked})}  onChange={(checked) => { setXSSChecked(checked); }} checked={Middlewares.xssInjectionDetectorMiddlware} /></span>
                </p></Link>
            </li> */}
            {/* <li className="nav-item ">
              <Link to="/Badbots" className="nav-link ">
                <i className="fas fa-user-secret" />&nbsp; <p>Bad Bots
                  <span className="right badge badge-success"><Switch onChange={(checked)=> {setBadBotsChecked(checked);}} checked={BadBotsChecked} /></span>
                </p>
              </Link>
            </li> */}
            {/* <li className="nav-item ">
              <Link to="/Proxy" className="nav-link ">
                <i className="fas fa-globe" />&nbsp; <p>Proxy
                  <span className="right badge badge-danger"><Switch onChange={(checked)=> {setProxyChecked(checked);}} checked={ProxyChecked} /></span></p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Spam" className="nav-link ">
                <i className="fas fa-keyboard" />&nbsp; <p>Spam
                  <span className="right badge badge-danger"><Switch onChange={(checked)=> {setSpamChecked(checked);}} checked={SpamChecked} /></span>
                </p>
              </Link>
            </li> */}
            {/* <li className="nav-item has-treeview ">
              <a href="#" className="nav-link ">
                <i className="fas fa-align-justify" />&nbsp; <p>Logs <i className="fas fa-angle-right right" />
                </p></a>
              <ul className="nav nav-treeview">
                <li className="nav-item "><Link to="/Alllogs" className="nav-link "><i className="fas fa-align-justify" />&nbsp; <p>All Logs <span className="badge right badge-primary">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Sqlinjectionlogs" className="nav-link "><i className="fas fa-code" />&nbsp; <p>SQLi Logs <span className="badge right badge-info">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Badbotlogs" className="nav-link "><i className="fas fa-robot" />&nbsp; <p>Bad Bot Logs <span className="badge right badge-danger">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Proxylogs" className="nav-link "><i className="fas fa-globe" />&nbsp; <p>Proxy Logs <span className="badge right badge-success">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Spammerlogs" className="nav-link "><i className="fas fa-keyboard" />&nbsp; <p>Spam Logs <span className="badge right badge-warning">0</span></p></Link></li>
              </ul>
            </li> */}
            {/* <li className="nav-item has-treeview ">
              <a href="#" className="nav-link ">
                <i className="fas fa-ban" />&nbsp; <p>Bans <i className="fas fa-angle-right right" />
                </p></a>
              <ul className="nav nav-treeview">
                <li className="nav-item "><Link to="/Bansip" className="nav-link "><i className="fas fa-user" />&nbsp; <p>IP Bans <span className="badge right badge-secondary">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Banscountry" className="nav-link "><i className="fas fa-globe" />&nbsp; <p>Country Bans <span className="badge right badge-secondary">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Bansiprange" className="nav-link "><i className="fas fa-grip-horizontal" />&nbsp; <p>IP Range Bans <span className="badge right badge-secondary">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Otherbans" className="nav-link "><i className="fas fa-desktop" />&nbsp; <p>Other Bans <span className="badge right badge-secondary">0</span></p></Link></li>
              </ul>
            </li> */}
            {/* <li className="nav-item ">
              <Link to="/Badwords" className="nav-link ">
                <i className="fas fa-filter" />&nbsp; <p>Bad Words
                  <span className="right badge badge-success"><Switch onChange={(checked) => { setBadWordsChecked(checked); }} checked={BadWordsChecked} /></span></p>
              </Link>
            </li> */}
            {/* <li className="nav-header">ANALYTICS &nbsp;
              <span className="right badge badge-success"><Switch onChange={(checked) => { setANALYTICSChecked(checked); }} checked={ANALYTICSChecked} /></span></li> */}
            {/* <li className="nav-item ">
              <Link to="/Livetraffic" className="nav-link ">
                <i className="fas fa-globe" />&nbsp; <p>Live Traffic</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Visitanalytics" className="nav-link ">
                <i className="fas fa-chart-line" />&nbsp; <p>Visit Analytics</p>
              </Link>
            </li>
            <li className="nav-header">TOOLS</li>
            <li className="nav-item ">
              <Link to="/Errormonitoring" className="nav-link ">
                <i className="fas fa-exclamation-circle" />&nbsp; <p>Error Monitoring</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Htaccesseditor" className="nav-link ">
                <i className="fas fa-columns" />&nbsp; <p>.htacces Editor</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Portscanner" className="nav-link ">
                <i className="fas fa-search" />&nbsp; <p>Port Scanner</p>
              </Link>
            </li>
            <li className="nav-item ">
              <a href="hashing.php" className="nav-link ">
                <i className="fas fa-lock" />&nbsp; <p>Hashing</p>
              </a>
            </li> */}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
