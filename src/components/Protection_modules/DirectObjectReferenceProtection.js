import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLogsData } from '../../redux/reducers/LogsDataReducer'

const DirectObjectReferenceProtection = () => {
    const userData = useSelector((state) => state.UserReducer)
    let Logreducer = useSelector((state) => state.LogDataReducer)
    const dispatch = useDispatch()
    console.log("Logreducer", Logreducer)
    const [isloading, setisloading] = useState(true)
    const [obj, setObj] = useState({
        DirectryListing: null,
        robottxt: null,
        httpparameterpollution: null
    })

    const GetallDirectryferenceData = async () => {
        // await axios.get(`client/directory_listing_is_enabled_on_the_server?url=https://${userData.domain}/`).then((response) => {
        await axios.get(`client/directory_listing_is_enabled_on_the_server?url=https://${userData.domain}/`).then((response) => {
            const { data, statusCode } = response
            console.log("fsa", data)
            if (statusCode === 200) {
                setObj((prev) => ({ ...prev, DirectryListing: data }))
                setisloading(false)
            }
        }
        ).catch((error) => {
            console.log(error)
            setisloading(false)

            setObj((prev) => ({ ...prev, DirectryListing: null }))
        })
    }
    const GetallRobottxtData = async () => {
        await axios.get(`security/test/robottxt?domain=${userData.domain}`).then((response) => {
            const { data, statusCode } = response
            console.log("data", data, statusCode)
            if (statusCode === 200) {

                setObj((prev) => ({ ...prev, robottxt: data }))
                setisloading(false)
            }
        }
        ).catch((error) => {
            console.log(error)
            setisloading(false)
            setObj((prev) => ({ ...prev, robottxt: null }))
        })
    }
    const getrameterpolution = async () => {
        await axios.get(`client/httpparameterpollution?url=http://${userData.domain}`).then((response) => {
            const { data, statusCode, message } = response
            console.log("data", data, statusCode)
            if (statusCode === 200) {
                if (data) {
                    dispatch(setLogsData(data))
                }
                setObj((prev) => ({ ...prev, httpparameterpollution: message }))
                setisloading(false)
            }
        }
        ).catch((error) => {
            console.log(error)
            setisloading(false)
            setObj((prev) => ({ ...prev, httpparameterpollution: error?.response?.data?.message }))
        })
    }

    useEffect(() => {
        if (userData) {
            GetallDirectryferenceData()
            GetallRobottxtData()
            getrameterpolution()
        }
    }, [userData])
    console.log("obj", obj)
    return (
        <React.Fragment>
            <div className="card card-primary card-outline">
                <div className="card-header">
                    <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( Insecure Direct Object References)</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <ul>
                                <li><span><b>Directry Listing :</b></span>{obj.DirectryListing ? obj.DirectryListing : ""}</li>
                                <li>Direct Object Reference occurs when a developer exposes a reference to an internal implementation object, such as a file, directory, database record, or key, as a URL or form parameter. Attackers can manipulate those references to access other objects without authorization.</li>
                                <li>Protection: Use an access control list to prevent unauthorized users from accessing other users' data. Use an indirect reference map to map internal object references to external references. Use per-session indirect object references to prevent attackers from manipulating the references.</li>
                                <li><span><b>The remote server contains a ‘robots.txt’ file</b></span>: {obj.robottxt}</li>
                                <li><span><b>HTTP parameter pollution</b></span>: {obj.httpparameterpollution}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DirectObjectReferenceProtection