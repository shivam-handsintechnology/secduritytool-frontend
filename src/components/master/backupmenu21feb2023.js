import axios from "axios";
import React, { useEffect, useState,useCallback  } from "react";
import { Link } from "react-router-dom";
import { UseMiddlewaresContext } from "../../context/AuthApi";
export default function Menu() {
  const [isLoading, setisLoading] = useState(true)
  // const {  updateSqlmiddleware,
  //   //  sqlChecked
  //    SQLChecked,ChangeSqlValue, setChangeSqlValue
  //   //  html check
  //   ,ChangeHTMLValue,HTMLChecked,setChangeHTMLValue,
  //   // proxyChange
  //    ChangeProxyValue, setChangeProxyValue,ProxyChecked,
  //   // xss check
  //    ChangeXSSValue, setChangeXSSValue,XSSChecked,
  //   //  html sanitization
  //   ChangeHtmlSanitizerValue, setChangeHtmlSanitizerValue,HtmlSanitizerChecked,
  //   //  commandline 
  //   ChangeCommandLineinjectionValue, setChangeCommandLineinjectionValue,CommandLineinjectionChecked
  //       }=UseMiddlewaresContext()
  useEffect(() => {
    window.scrollTo(0, 0)
   
  }, [])
  
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
            <li className="nav-item ">
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
            </li>
            <li className="nav-header">SECURITY</li>
            <li className="nav-item " style={{display:'flex'}}>
            <Link to="/Sqlinjection" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>Sql Injection
                </p>
                </Link>
             
          <div class="button r" id="button-1">
            <input type="checkbox" checked={ChangeSqlValue?ChangeSqlValue:SQLChecked} onClick={updateSqlmiddleware({SqlDetectorMiddlware:ChangeSqlValue})}  onChange={(e)=>{ setChangeSqlValue(e.target.checked) 
               }} class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
            </li>
            <li className="nav-item " style={{display:'flex'}}>
            <Link to="/htmlcheck" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>Html Injection
                </p>
                </Link>
          <div class="button r" id="button-1">
            <input type="checkbox" checked={ChangeHTMLValue?ChangeHTMLValue:HTMLChecked} onClick={updateSqlmiddleware({checkHTMLMiddlware:ChangeHTMLValue})}  onChange={(e)=>{ setChangeHTMLValue(e.target.checked) 
               }} class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
            </li>
            <li className="nav-item " style={{display:'flex'}}>
            <Link to="/XSS" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>XSS Injection
                </p>
                </Link>
          <div class="button r" id="button-1">
            <input type="checkbox" checked={ChangeXSSValue?ChangeXSSValue:XSSChecked} onClick={updateSqlmiddleware({xssInjectionDetectorMiddlware:ChangeXSSValue})}  onChange={(e)=>{ setChangeXSSValue(e.target.checked) 
               }} class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
            </li>
            <li className="nav-item " style={{display:'flex'}}>
            <Link to="/XSS" className="nav-link ">
                <i className="fas fa-code" />&nbsp; <p>HTML Sanitizer
                </p>
                </Link>
          <div class="button r" id="button-1">
            <input type="checkbox" checked={ChangeHtmlSanitizerValue?ChangeHtmlSanitizerValue:HtmlSanitizerChecked} onClick={updateSqlmiddleware({SanitizeinputMiddleware:ChangeHtmlSanitizerValue})}  onChange={(e)=>{ setChangeHtmlSanitizerValue(e.target.checked) 
               }} class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
            </li>
            <li className="nav-item "  style={{display:'flex'}}>
              <Link to="/Proxy" className="nav-link ">
                <i className="fas fa-globe" />&nbsp; <p>Proxy Injection</p>
              </Link>
              <div class="button r" id="button-1">
            <input type="checkbox" checked={ChangeProxyValue?ChangeProxyValue:ProxyChecked} onClick={updateSqlmiddleware({VpnProtectMiddlware:ChangeProxyValue})}  onChange={(e)=>{ setChangeProxyValue(e.target.checked) 
               }} class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
            </li>
            {/* for no sql detector */}
            {/* <li className="nav-item "  style={{display:'flex'}}>
              <Link to="/Proxy" className="nav-link ">
                <i className="fas fa-globe" />&nbsp; <p>Proxy Injection</p>
              </Link>
              <div class="button r" id="button-1">
            <input type="checkbox" checked={ChangeProxyValue?ChangeProxyValue:ProxyChecked} onClick={updateSqlmiddleware({VpnProtectMiddlware:ChangeProxyValue})}  onChange={(e)=>{ setChangeProxyValue(e.target.checked) 
               }} class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
            </li> */}
            {/* for command line injection */}
            <li className="nav-item "  style={{display:'flex'}}>
              <Link to="/Proxy" className="nav-link ">
                <i className="fas fa-globe" />&nbsp; <p>Command Line</p>
              </Link>
              <div class="button r" id="button-1">
            <input type="checkbox" checked={ChangeCommandLineinjectionValue?ChangeCommandLineinjectionValue:CommandLineinjectionChecked} onClick={updateSqlmiddleware({commandlineinjectionMiddlware:ChangeCommandLineinjectionValue})}  onChange={(e)=>{ setChangeCommandLineinjectionValue(e.target.checked) 
               }} class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
            </li>
            <li className="nav-item ">
              <Link to="/Badbots" className="nav-link ">
                <i className="fas fa-user-secret" />&nbsp; <p>Bad Bots
                  <span className="right badge badge-success">ON</span>
                </p>
              </Link>

            </li>
        
            <li className="nav-item ">
              <Link to="/Spam" className="nav-link ">
                <i className="fas fa-keyboard" />&nbsp; <p>Spam
                  <span className="right badge badge-danger">OFF</span>
                </p>
              </Link>
            </li>
            <li className="nav-item has-treeview ">
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
            </li>
            <li className="nav-item has-treeview ">
              <a href="#" className="nav-link ">
                <i className="fas fa-ban" />&nbsp; <p>Bans <i className="fas fa-angle-right right" />
                </p></a>
              <ul className="nav nav-treeview">
                <li className="nav-item "><Link to="/Bansip" className="nav-link "><i className="fas fa-user" />&nbsp; <p>IP Bans <span className="badge right badge-secondary">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Banscountry" className="nav-link "><i className="fas fa-globe" />&nbsp; <p>Country Bans <span className="badge right badge-secondary">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Bansiprange" className="nav-link "><i className="fas fa-grip-horizontal" />&nbsp; <p>IP Range Bans <span className="badge right badge-secondary">0</span></p></Link></li>
                <li className="nav-item "><Link to="/Otherbans" className="nav-link "><i className="fas fa-desktop" />&nbsp; <p>Other Bans <span className="badge right badge-secondary">0</span></p></Link></li>
              </ul>
            </li>
            <li className="nav-item ">
              <Link to="/Badwords" className="nav-link ">
                <i className="fas fa-filter" />&nbsp; <p>Bad Words
                  <span className="right badge badge-success">ON</span></p>
              </Link>
            </li>
            <li className="nav-header">SECURITY CHECK</li>
            <li className="nav-item ">
              <Link to="/Phpfunctionscheck" className="nav-link ">
                <i className="fas fa-check" />&nbsp; <p>PHP Functions</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Phpconfigcheck" className="nav-link ">
                <i className="fab fa-php" />&nbsp; <p>PHP Configuration</p>
              </Link>
            </li>
            <li className="nav-header">ANALYTICS &nbsp;
              <span className="right badge badge-success">ON</span></li>
            <li className="nav-item ">
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
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
