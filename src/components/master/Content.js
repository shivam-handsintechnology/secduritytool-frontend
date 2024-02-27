import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
export default function Content() {
  const [sessionData, setSesion] = useState({})
  const [counts, setCounts] = useState([])
  const [installation, setinstallation] = useState(null)
  const [errors, setErrors] = useState({
    error: false,
    loading: true
  });

  const [middlewareState, setMiddlewareState] = useState({});

  const handleMiddlewareChange = async (event) => {
    try {
      const isChecked = event.target.checked;
      await axios.post("security/middlwares/switch", {
        [event.target.name]: isChecked
      }).then((response) => {
        setMiddlewareState(response.data);
      }).catch((error) => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  };

  const getAllMiddlewares = async () => {
    setErrors((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const response = await axios.get('security/middlwares');
      console.log("middlwares", response.data);
      setMiddlewareState(response.data);
      setErrors((prev) => ({ ...prev, loading: false, error: false }));
    } catch (error) {
      setMiddlewareState({});
      setErrors((prev) => ({ ...prev, loading: false, error: true }));
      console.error(error);
    }
  };


  const GetallInjectionscount = (async () => {
    await axios.get(`security/sqllogs/count`).then((response) => {
      const { data, statusCode } = response
      if (statusCode === 200) {
        // console.log("data>>>", data)
        setCounts(data)
      }
    }

    ).catch((error) => {
      console.log(error)
      setCounts([])
    })
  })
  const GetallLogsData = (async () => {
    await axios.get(`security/test/session-data`).then((response) => {
      const { data, statusCode } = response
      if (statusCode === 404) {

      } else if (statusCode === 200) {
        data.sessionobj && setSesion(data.sessionobj)
      }
    }
    ).catch((error) => { console.log(error) })
  })
  const ScannerHandler = async () => {
    axios.get('/client/logsdata?sid=localhost')
      .then((session) => {
        setinstallation(session)

      }).catch((e) => {
        console.log(e)
      })
  }
  useEffect(() => {
    GetallLogsData()
    GetallInjectionscount()
    getAllMiddlewares()
  }, [])



  return (
    <>
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

            {/* <h4> <a className="btn btn-primary" onClick={ScannerHandler}>Test All installed node modules files</a></h4> */}
            {/* {installation && installation.length > 0 ?
              installation.map((k, v) => {
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

              : <div>not found</div>} */}


          </div>
          {/* /.container-fluid */}
          {/* injections modules */}
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( Broken Authentication and Session Management)</h5>
            </div>
            <div className="card-body">
              <div className="row">

                <div className="col-md-12 col-lg-12">
                  <ul className="ul-styling">
                    {
                      Object.keys(sessionData).map((propertyname) => (
                        <li className="list-styling"><span className="text-capitalize">{propertyname + " "}</span>:{sessionData[propertyname]}</li>
                      ))

                    }
                  </ul>
                </div>

              </div>


            </div>
          </div>

          {/* ENd  injections modules */}
          {/* injections modules */}
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( Injections)</h5>
            </div>

            <div className="card-body">
              <div className="row">
                {
                  Object.keys(middlewareState).length > 0 ? Object.keys(middlewareState).map((propertyname) => (
                    <div className="col-md-3">
                      <div className="card card-body bg-light">
                        <center>

                          <strong><i className="fas fa-code" /> {`${propertyname == "SqlDetectorMiddlware" ? "SQL Injection" : propertyname == "BotMiddleware" ? "Bad Boats" : propertyname == "VpnProtectMiddlware" ? "Proxy" : propertyname == "SpamMiddleware" ? "Spams" : propertyname == "xssInjectionDetectorMiddlware" ? "Cross-Site Scripting" : propertyname == "checkHTMLMiddlware" ? "Html Injection" : propertyname == "NosqlDetectorMiddlware" ? "Nosql Injection" : propertyname == "commandlineinjectionMiddlware" ? "Command Line Injections" : "propertyname"}`}</strong><br />Protection<hr />
                          <div class="box-4">
                            <input type='checkbox' name={propertyname} id="sqlCheckbox" checked={middlewareState[propertyname]} onChange={handleMiddlewareChange} />
                            <span class="toogle"></span>
                          </div>
                        </center>
                      </div>
                    </div>

                  )) : <></>

                }

              </div>


            </div>
          </div>
          <div className="col-lg-12">
            <div className="row justify-content-center mt-3">
              {counts.length > 0 ? counts.map((item) => (
                <div className="col-sm-3 col-lg-3">
                  <div className="card card-primary card-outline" style={{ height: "165px" }}>
                    <div className="card-body text-center">

                      <p className="text-uppercase mar-btm ">{item?.title} Injections {" "}
                        {/* {sqlData === 0 ? <a className="small-box-footer" >No Logs </a> : <Link to={`/logs/${}`} className="small-box-footer">View Logs <i className="fas fa-arrow-circle-right" /></Link>} */}
                      </p>
                      <i className="fas fa-code fa-2x" />
                      <hr />
                      {/* <p className="h3 text-thin">{sqlData}</p> */}
                    </div>
                  </div>
                </div>
              )) : <></>}
            </div>
          </div>
          {/* ENd  injections modules */}
          <div className="row justify-content-center mt-1">
            <div className="col-md-5">
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
          <div className="row mt-0">
            <div className="col-md-6 justify-content-center  ">
              <div className="row justify-content-center ">
                <div className="col-md-7">
                  <div className="card card-primary card-outline">
                    <div className="card-header with-border">
                      <h3 className="card-title">Recent Logs</h3>
                      <a href="all-logs.php" className="btn btn-flat btn-primary btn-sm float-sm-right"><i className="fas fa-list" /> View All</a>
                    </div>
                    <div className="card-body">
                      <div className="callout callout-info"><p>There are no recent <b>Logs</b></p></div>            			      </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="card card-primary card-outline">
                    <div className="card-header with-border">
                      <h3 className="card-title">Recent IP Bans</h3>
                      <a href="bans-ip.php" className="btn btn-flat btn-primary btn-sm float-sm-right"><i className="fas fa-list" /> View All</a>
                    </div>
                    <div className="card-body">
                      <div className="callout callout-info"><p>There are no recent <b>IP Bans</b></p></div>            			      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card card-primary card-outline">
                <div className="card-header with-border">
                  <h3 className="card-title">Statistics</h3>
                </div>
                <div className="card-body p-0">
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
    </>
  );
}
