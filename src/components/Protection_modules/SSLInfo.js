import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../loader'
import { GetSysteminfo } from '../../Services/AxiosRoutes'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLogsData } from '../../redux/reducers/LogsDataReducer'
const SSLInfo = () => {
    const userData = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [Headers, setHeaders] = useState([])
    const [RawHeaders, setRawHeaders] = useState(null)
    // securityheaders
    const site = `https://${userData.domain}/`
    useEffect(() => {
        SSlInfo(userData.domain)
        SecureHeaders(`https://${userData.domain}/`)
    }, [])
    const SSlInfo = async (url) => {
        setLoading(true)
        const res = await GetSysteminfo(url)
            .then((res) => {
                setLoading(false)
                dispatch(setLogsData({ cookieSecureFlag: res.data?.cookieSecureFlag }))
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
        <React.Fragment>


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
                        <div className="col-sm-3 col-lg-3">
                            <div className="small-box bg-primary">
                                <div className="inner">
                                    {/* <h3 /> */}
                                    <p className='mb-0' id="">{data ? data.cookieSecureFlag : ""}</p>
                                    {/* <p>No SSL cookie found.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3 ">
                            <div className="small-box bg-success">
                                <div className="inner">

                                    <p className='mb-0'>{data ? data.expired : ""}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }

        </React.Fragment>



    )
}

export default SSLInfo
