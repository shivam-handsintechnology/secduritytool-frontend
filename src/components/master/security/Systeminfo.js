import React, { useState, useEffect } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../../config";
import LoadingSpinner from "../../../loader";
export default function Systeminfo() {
    const [Serverinfo, setServerinfo] = useState({})
    // eslint-disable-next-line
    const [RobotFile, setRobotFile] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    console.log(Serverinfo)
    useEffect(() => {       
        const GetSysteminfo = async () => {
            setIsLoading(true);
            await axios.get(`${API.localurl}system`).then((response) => {
                setIsLoading(false);
                const { data } = response
                setServerinfo(data.syteminfo)
            })
         axios.get('test/robottxt')
        .then((response) => {
          const { message } = response
          console.log({ message })
          setRobotFile(message)
        })
        .catch((error) => {
          console.log(error)
        })
        }
        GetSysteminfo()
    }, [])
       const newversion=parseInt(Serverinfo.latest_version)
       const runversion=parseInt(Serverinfo.version)
    return (
        <div>
            <Headers />
            <Menu />

            <div className="content-wrapper" style={{ minHeight: 190 }}>
                {/*CONTENT CONTAINER*/}
                {/*===================================================*/}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">
                                    <i className="fas fa-info-circle" /> System Information
                                </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <Link to="/">
                                            <i className="fas fa-home" /> Admin Panel
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active">System Information</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Page content*/}
                {/*===================================================*/}
                {isLoading?<LoadingSpinner/>:<div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h3 className="card-title">{window.location.host}</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th>Site Stats &amp; Information</th>
                                                        <th />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Nodejs Configuration File (node.exe)</td>
                                                        <td>
                                                            <h5>
                                                                <span className="badge badge-warning">
                                                                    {Serverinfo.nodeenvronment}
                                                                </span>
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                 
                                                    <tr>
                                                        <td>Default Timezone</td>
                                                        <td>
                                                            <h5>
                                                                <span className="badge badge-primary">
                                                                    {Serverinfo.timezone}

                                                                </span>
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>  <span className="info-box-text">STORAGE</span></td>
                                                        <td>
                                                        <div className="info-box-content">
                                              
                                                <span className="info-box-number">Total:{Serverinfo.totalmem} Bytes</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar progress-bar-striped progress-bar-animated"
                                                        style={{ width: "NAN%" }}
                                                    />
                                                </div>
                                                <span className="progress-description">
                                                    Used: <span className="text-semibold">{Serverinfo.freemem} <b>Bytes</b></span>
                                                    <br />
                                                </span>
                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Robot</td>
                                                        <td> Host has Robot.txt or Not: <span className="text-semibold">{RobotFile}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Latest Version-: {Serverinfo.latest_version}</td>
                                                        <td> Host has Robot.txt or Not: <span className="text-semibold">{RobotFile}</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="mt-none">Host Information</h3>
                                <p>System information about the web host.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Domain IP</p>
                                                <i className="fas fa-user fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.query}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Country</p>
                                                <i className="fas fa-globe fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.country}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">ISP</p>
                                                <i className="fas fa-tasks fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.isp}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Server OS</p>
                                                <i className="fas fa-desktop fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.platform}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Nodejs Version</p>
                                                <i className="fas fa-file-code fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.version}</p>
                                            </div>
                                        </div>
                                    </div>
                              
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Server Port</p>
                                                <i className="fas fa-plug fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.serverport}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                   
                         
                                
                            </div>
                            <br />
                            <br />
                          
                        </div>
                    </div>
                    {/*===================================================*/}
                    {/*End page content*/}
                </div>}   
                {/*===================================================*/}
                {/*END CONTENT CONTAINER*/}
            </div>

            <Footer />
        </div>
    );

}
