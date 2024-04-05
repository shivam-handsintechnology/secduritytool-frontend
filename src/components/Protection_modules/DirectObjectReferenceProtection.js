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
        DirectryListing: [],
        robottxt: {
            succces: false,data:""
        },
        httpparameterpollution: {
                succces: false,data:""
        }
    })

    const GetallDirectryferenceData = async () => {
        // await axios.get(`client/directory_listing_is_enabled_on_the_server?url=https://${userData.domain}/`).then((response) => {
        await axios.get(`http://${userData.domain}/DirectoryListingEnable`).then((response) => {
            console.log("DirectoryListingEnable",response)
            const { data, statusCode } = response
            console.log("DirectoryListingEnable", data)
            if (statusCode === 200) {
                setObj((prev) => ({ ...prev, DirectryListing: data }))
                setisloading(false)
            }
        }
        ).catch((error) => {
            console.log(error)
            setisloading(false)

            setObj((prev) => ({ ...prev, DirectryListing: [] }))
        })
    }
    const GetallRobottxtData = async () => {
        await axios.get(`security/test/robottxt?domain=${userData.domain}`).then((response) => {
            const { data, statusCode,message } = response
     
            setisloading(false)
            if (statusCode === 200) {
                setObj((prev) => ({ ...prev, robottxt: {succces:data.includes("not")?false:true,data:data} }))
              
            }else if(statusCode===422){
                setObj((prev) => ({ ...prev, robottxt: {succces:false,data:message} }))
            }
        }
        ).catch((error) => {
        console.log("errorrrrrrrr>>>",error)
            setisloading(false)
            setObj((prev) => ({ ...prev, robottxt: null }))
        })
    }
    const getrameterpolution = async () => {
        await axios.get(`client/httpparameterpollution?domain=${userData.domain}`).then((response) => {
            const { data, statusCode, message } = response
            if (statusCode === 200) {
                setObj((prev) => ({ ...prev, httpparameterpollution: {succces:data.includes("Yes")?false:true,data:data} }))
              
            }else if(statusCode===422){
                setObj((prev) => ({ ...prev, httpparameterpollution: {succces:false,data:message} }))
            }
            setisloading(false)
        }
        ).catch((error) => {
            console.log(error)
            setisloading(false)
            setObj((prev) => ({ ...prev, httpparameterpollution: error?.response?.data?.message }))
        })
    }

    useEffect(() => {
        if (userData.domain) {
            GetallRobottxtData()
            getrameterpolution()
            GetallDirectryferenceData()
        }
    }, [userData.domain])
    console.log("robottxt", obj.robottxt)
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
                                {/* <li><span><b>Directry Listing :</b></span>{obj.DirectryListing ? obj.DirectryListing : ""}</li> */}
                                <li><b>The remote server contains a ‘robots.txt’ file</b>:<span className={!obj.robottxt.succces?"error":""}> {obj.robottxt.data}</span></li>
                                <li><b>HTTP parameter pollution</b>:<span className={!obj.httpparameterpollution.succces?"error":""}> {obj.httpparameterpollution.data}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DirectObjectReferenceProtection