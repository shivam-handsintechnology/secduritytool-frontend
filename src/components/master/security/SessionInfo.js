import React, { useEffect, useState } from 'react'
import useFetchApi from '../../../customhooks/useFetchApi'
import LoadingSpinner from '../../../loader'
import { GetSessionInfo, GetJwtMessageInfo, SessionHijacking, CookiesGetAPi } from '../../../Services/AxiosRoutes'
import Header from '../Header'
import Menu from '../Menu'
const SessionInfo = () => {
    const [SessionHijackdata, SetSessionHijackdata] = useState("")
    const [Cookiesdata, SetCookiesdata] = useState({})

    useEffect(() => {
        (async () => {
            await SessionHijacking().then(res => SetSessionHijackdata(res.data.message)).catch(err => console.error(err))
            await CookiesGetAPi().then(res => SetCookiesdata(res.data.type)).catch(err => console.error(err))
        })()
    }, [])
    console.log(SessionHijackdata, Cookiesdata)
    const [sessionData, sessionLoading] = useFetchApi(GetSessionInfo);
    const [messageData, messageLoading] = useFetchApi(GetJwtMessageInfo)
    const loading = sessionLoading || messageLoading;

    let data = {};
    if (sessionData && messageData) {
        data = {
            sessiondata: sessionData,
            message: messageData.TokenMessage.message,
            servertimeout: messageData.servertimeout,

        };
    }

    console.log(data, loading);
    return (
        <div>
            {/* <Header />
            <Menu /> */}

            <div className="content-wrapper">
                {/*CONTENT CONTAINER*/}
                {/*===================================================*/}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 ">
                                    <i class="fa-brands fa-expeditedssl" /> Session Info
                                </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="dashboard.php">
                                            <i className="fas fa-home" /> Admin Panel
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active"> Session</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Page content*/}
                {/*===================================================*/}
                <div className="content">

                    {
                        loading ? <LoadingSpinner /> : <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <p><b style={{color:"black"}}>Session Tieout:</b> {data.sessiondata.sessiontimeout}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <p><b style={{color:"black"}}>Session Fixation: </b> {data.sessiondata.sessionfixation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                           
                                            <p> <b style={{color:"black"}}>Sesion Infinite Or Not:-</b> {data.sessiondata.checksessioninfinite}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                       
                                            <p><b style={{color:"black"}}> Session Token is Passed in Other area:-</b> {data.message}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                        
                                            <p> <b style={{color:"black"}}>Server time Out Exist Or Not:-</b> {data.servertimeout}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                       
                                            <p><b style={{color:"black"}}>Session Highjacking:-</b> {SessionHijackdata}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2>Cookies</h2>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Availability</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(Cookiesdata).map((key) => (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td> {Cookiesdata[key] === true ? "Yes" : "No"}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    }

                </div>
                {/*===================================================*/}
                {/*End page content*/}
            </div>
        </div>
    )
}

export default SessionInfo
