import React, { useState, useEffect } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../../config";
import LoadingSpinner from "../../../loader";
export default Systeminfo => {
   
    const [dependesylist, setdependesylist] = useState([])
    const [Serverinfo, setServerinfo] = useState({})
    const [Files, setFiles] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    console.log(Serverinfo)
    useEffect(() => {       
        const GetSysteminfo = async () => {
            setIsLoading(true);
            await axios.get(`security/system`).then((response) => {
                setIsLoading(false);
                const { data, statusCode } = response
                const ArrayofFile = []
                Object.entries(data.files).forEach(([key, value]) => {
                    ArrayofFile.push({ fileextension: key, count: value })
                })
                setFiles(ArrayofFile)
                setdependesylist(data.dependencylist)
                setServerinfo(data.syteminfo)
                
            })
        }
        GetSysteminfo()
    }, [])

    return (
        <div>
            {/* <Headers />
            <Menu /> */}
          
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
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        Files.map((value, index) => {
                                            const { count, fileextension } = value
                                            const firstvalue = index == 0
                                            return <div className="col-md-6">
                                                <div className="small-box bg-primary">
                                                    <div className="inner">
                                                        <h3>{count}</h3>
                                                        <p>{fileextension} {firstvalue ? "Folders" : "Files"}</p>
                                                    </div>
                                                    <div className="icon">
                                                        <i className="fas fa-file" />
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                    <div className="col-md-12">
                                        <div className="info-box bg-info">
                                            <span className="info-box-icon">
                                                <i className="fas fa-hdd" />
                                            </span>
                                            <div className="info-box-content">
                                                <span className="info-box-text">STORAGE</span>
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
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <div className="col-md-6">
                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Installed Node_modules -{" "}
                                            <span className="badge badge-primary">46</span>
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <pre className="bg-light">
                                            <h1>Dependecy</h1>
                                            <ul>
                                                {
                                                    dependesylist.map((values, index) => {
                                                        return <li>{values}</li>
                                                    })
                                                }
                                            </ul>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="col-md-12">
                                <h3 className="mt-none">Host Information</h3>
                                <p>System information about the web host.</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Domain IP</p>
                                                <i className="fas fa-user fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.query}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Country</p>
                                                <i className="fas fa-globe fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.country}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">
                                                    Server Software
                                                </p>
                                                <i className="fas fa-database fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">Apache/ </p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">ISP</p>
                                                <i className="fas fa-tasks fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.isp}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Server OS</p>
                                                <i className="fas fa-desktop fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.platform}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">Nodejs Version</p>
                                                <i className="fas fa-file-code fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">{Serverinfo.version}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-3">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p className="text-uppercase mar-btm text-sm">
                                                    MySQL Version
                                                </p>
                                                <i className="fas fa-list-alt fa-3x" />
                                                <hr />
                                                <p className="h4 text-thin">5.5.5-10.3.27-MariaDB</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-md-4">
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
                                    {/* <div className="row">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p className="text-uppercase mar-btm text-sm">
                                                        OpenSSL Version
                                                    </p>
                                                    <i className="fas fa-lock fa-3x" />
                                                    <hr />
                                                    <p className="h4 text-thin">1.1.1g 21 Apr 2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p className="text-uppercase mar-btm text-sm">
                                                        cURL Extension
                                                    </p>
                                                    <i className="fas fa-link fa-3x" />
                                                    <hr />
                                                    <p className="h4 text-thin">7.71.1</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p className="text-uppercase mar-btm text-sm">
                                                        HTTP Protocol
                                                    </p>
                                                    <i className="fas fa-hdd fa-3x" />
                                                    <hr />
                                                    <p className="h4 text-thin">HTTP/1.0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p className="text-uppercase mar-btm text-sm">
                                                        Gateway Interface
                                                    </p>
                                                    <i className="fas fa-sitemap fa-3x" />
                                                    <hr />
                                                    <p className="h4 text-thin">CGI/1.1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                            </div>
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
