import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../LoaderAndError/loader'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLogsData } from '../../redux/reducers/LogsDataReducer'
const SSLInfo = () => {
    const userData = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()
    const [data, setData] = useState({ data: null, succces: false, message: '' })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [Headers, setHeaders] = useState([])
    const [RawHeaders, setRawHeaders] = useState(null)
    // securityheaders

    useEffect(() => {
        userData.domain && SSlInfo()
        userData.domain && SecureHeaders(`https://${userData.domain}/`)
    }, [])
    const SSlInfo = async () => {
        setLoading(true)
        const res = await axios.get(`client/sslverify?hostname=${userData.domain}`)
            .then((res) => {
                setLoading(false)
                setData(res.data)
                dispatch(setLogsData({ cookieSecureFlag: res.data?.cookieSecureFlag }))
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
                loading ? <LoadingSpinner /> :  !data.succces ? <h1 className=' error text-center'>{data?.message}</h1> : <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <div className="small-box  bg-primary">
                                <div className="inner">
                                    <p>{data.data ? data.data.valid : ""}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <p>{data.data ? data.data.self : ""}</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="small-box bg-primary">
                                <div className="inner">
                                    {/* <h3 /> */}
                                    <p className='mb-0'>{data.data ? data.data.negotiatedProtocol : ""}</p>
                                    {/* <p>No SSL cookie found.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="small-box bg-primary">
                                <div className="inner">
                                    {/* <h3 /> */}
                                    <p className='mb-0' id="">{data.data ? data.data.cookieSecureFlag : ""}</p>
                                    {/* <p>No SSL cookie found.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3 ">
                            <div className="small-box bg-success">
                                <div className="inner">

                                    <p className='mb-0'>{data.data ? data.data.expired : ""}</p>
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
