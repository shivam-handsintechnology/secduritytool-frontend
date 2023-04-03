import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { UseSqlLogsContext } from "../../context/SqlllogsContextApi";
export default function Content() {   
            const [sqlData, setsqlData] = useState(0)
            const [BotData, setBotData] = useState(0)
            const [ProxyData, setProxyData] = useState(0)
            const [SpamData, setSpamData] = useState(0)
 useEffect(()=>{
      const  GetallSqllogsCount=(async()=> {
      await axios.get(`security/sqllogs/count`).then((response)=>
      {
       const {data,message}=response
       setsqlData(data)
      }
      ).catch((error)=>{console.log(error)})
      })
      const  GetallBotogsCount=(async()=> {
      await axios.get(`security/botlogs/count`).then((response)=>
      {
       const {data,message}=response
       setBotData(data)
      }
      ).catch((error)=>{console.log(error)})
      })
      const  GetallProxyogsCount=(async()=> {
      await axios.get(`security/proxylogs/count`).then((response)=>
      {
       const {data,message}=response
       setProxyData(data)
      }
      ).catch((error)=>{console.log(error)})
      })
      const  GetallSpamogsCount=(async()=> {
      await axios.get(`security/spamlogs/count`).then((response)=>
      {
       const {data,message}=response
       setSpamData(data)
      }
      ).catch((error)=>{console.log(error)})
      })
      GetallSpamogsCount()
      GetallSqllogsCount()
      GetallProxyogsCount()
      GetallBotogsCount()
 },[])
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
                <Link to="Sqlinjectionlogs" className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
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
                <Link to="/Badbotlogs" className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
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
                <Link to='/Proxylogs' className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
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
                <Link to="/Spammerlogs" className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>
            {/* 4 columns end */}
            {/* 4 columns start*/}
            <div className="col-sm-6 col-lg-3">
              <div className="small-box bg-info">
                <div className="inner">
                  <p>SessionInfo</p>
                </div>
                <div className="icon">
                  <i className="fas fa-code" />
                </div>
                <Link to="/sessioninfo" className="small-box-footer">View More <i className="fas fa-arrow-circle-right" /></Link>
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
                <Link to="/Badbotlogs" className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
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
                <Link to='/Proxylogs' className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
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
                <Link to="/Spammerlogs" className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>
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
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-robot" /> Bad Bots</strong><br />Protection<hr />
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-globe" /> Proxy</strong><br />Protection<br /><hr />
                    <h4><span className="badge badge-danger"><i className="fas fa-times" /> OFF</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-keyboard" /> Spam</strong><br />Protection<br /><hr />
                    <h4><span className="badge badge-danger"><i className="fas fa-times" /> OFF</span></h4>
                  </center>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-body bg-light">
                  <center>
                    <h5><i className="fas fa-list-ul" /> &nbsp;Logging Settings</h5>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-code" /> SQLi</strong><br />Logging<hr />
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-robot" /> Bad Bots</strong><br />Logging<hr />
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-globe" /> Proxy</strong><br />Logging <br /><hr />
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
                  </center>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card card-body bg-light">
                  <center>
                    <strong><i className="fas fa-keyboard" /> Spam</strong><br />Logging<br /><hr />
                    <h4><span className="badge badge-success"><i className="fas fa-check" /> ON</span></h4>
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
                  <p className="h3 text-thin">1</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="card card-danger card-outline">
                <div className="card-body text-center">
                  <p className="text-uppercase mar-btm text-lg">Bad Bots</p>
                  <i className="fas fa-robot fa-2x" />
                  <hr />
                  <p className="h3 text-thin">1</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="card card-success card-outline">
                <div className="card-body text-center">
                  <p className="text-uppercase mar-btm text-lg">Proxies</p>
                  <i className="fas fa-globe fa-2x" />
                  <hr />
                  <p className="h3 text-thin">0</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="card card-warning card-outline">
                <div className="card-body text-center">
                  <p className="text-uppercase mar-btm text-lg">Spammers</p>
                  <i className="fas fa-keyboard fa-2x" />
                  <hr />
                  <p className="h3 text-thin">0</p>
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
