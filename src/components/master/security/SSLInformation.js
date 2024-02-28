import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../../loader'
import { GetSysteminfo } from '../../../Services/AxiosRoutes'
import DemoJs from './DemoJs'
import axios from 'axios'
const SSLInformation = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [Headers, setHeaders] = useState([])
    const [RawHeaders, setRawHeaders] = useState(null)
    // securityheaders
    const site = "https://lmpapi.handsintechnology.in/"
    useEffect(() => {
        SSlInfo("autotest.handsintechnology.in")
        SecureHeaders("https://lmpapi.handsintechnology.in/")
    }, [])
    const SSlInfo = async (url) => {
        setLoading(true)
        const res = await GetSysteminfo(url)
            .then((res) => {
                setLoading(false)
                setData(res.data)
            })
            .catch((error) => {
                setLoading(false)
                setError(true)
            })

    }
    const SecureHeaders = async (hostname) => {
        setLoading(true)
        const res = await axios.get(`client/securityheaders?url=${hostname}`)
            .then((res) => {
                setLoading(false)
                setHeaders(res.headersinfo)
                setRawHeaders(res.rawHeaders)

                // setData(res.data)
            })
            .catch((error) => {
                setLoading(false)
                // setError(true)
            })

    }
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
                                <h1 className="m-0 heading">
                                    <i class="fa fa-expeditedssl" aria-hidden="true"></i> SSL
                                </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="dashboard.php">
                                            <i className="fas fa-home" /> Admin Panel
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active"> SSl</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Page content*/}
                {/*===================================================*/}
                <div className="content">

                    {
                        loading ? <LoadingSpinner /> : error ? <h1 className='heading ml-2'>Interval server error</h1> : <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-3 col-lg-3">
                                    <div className="small-box  bg-primary">
                                        <div className="inner">
                                            <p>{data ? data.valid : ""}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-lg-3">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <p>{data ? data.self : ""}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-lg-3">
                                    <div className="small-box bg-primary">
                                        <div className="inner">
                                            {/* <h3 /> */}
                                            <p className='mb-0'>{data ? data.negotiatedProtocol : ""}</p>
                                            {/* <p>No SSL cookie found.</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-lg-3 pt-5">
                                    <div className="small-box bg-success">
                                        <div className="inner">

                                            <p className='mb-0'>{data ? data.expired : ""}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    }
                    <DemoJs site={site} Headers={Headers} RawHeaders={RawHeaders} />
                </div>
                {/*===================================================*/}
                {/*End page content*/}
            </div>
        </div>
    )
}

export default SSLInformation
