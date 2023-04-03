import React from 'react'
import useFetchApi from '../../../customhooks/useFetchApi'
import LoadingSpinner from '../../../loader'
import { GetSessionInfo,GetJwtMessageInfo } from '../../../Services/AxiosRoutes'
import Header from '../Header'
import Menu from '../Menu'
const SessionInfo = () => {
    const [sessionData, sessionLoading] = useFetchApi(GetSessionInfo);
    const [messageData, messageLoading] = useFetchApi(GetJwtMessageInfo)
    const loading = sessionLoading || messageLoading;
    let data = {};
    if (sessionData && messageData) {
      data = {
        sessiondata: sessionData,
        message: messageData.TokenMessage.message,
        servertimeout:messageData.servertimeout
      };
    }
    
    console.log(data, loading);
  return (
    <div>
            <Header />
            <Menu />

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
                       loading? <LoadingSpinner /> : <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <p>Session Tieout: {data.sessiondata.sessiontimeout}</p>
                                        </div>
                                    </div>
                                </div>
                             
                              
                                <div className="col-sm-12 col-lg-12">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <p>Session Fixation: {data.sessiondata.sessionfixation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-12">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3 />
                                            <p>  {data.sessiondata.checksessioninfinite}</p>
                                        </div>          
                                    </div>      
                                </div>
                                <div className="col-sm-12 col-lg-12">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3 />
                                            <p> Session Token is Passed in Other area: {data.message}</p>
                                        </div>          
                                    </div>      
                                </div>
                                <div className="col-sm-12 col-lg-12">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3 />
                                            <p> Server time Out Exist Or Not: {data.servertimeout}</p>
                                        </div>          
                                    </div>      
                                </div>
                            </div>
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
