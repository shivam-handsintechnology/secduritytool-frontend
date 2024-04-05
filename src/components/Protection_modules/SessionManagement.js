import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setLogsData } from '../../redux/reducers/LogsDataReducer'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { Validators } from '../../utils/Validators/Validator'

const SessionManagement = () => {
    const data = useSelector((state) => state.LogDataReducer)
    const UserData = useSelector((state) => state.UserReducer)
    let validation = null
    const showErrorToast=true
    const postSessionData=useDataFetch(`security/test/session-data?hostname=${UserData.domain}&type=nodejs`,[UserData.domain],validation,showErrorToast)
    console.log("postSessionData", postSessionData)
   
    return (
        <div className="card card-primary card-outline">
            <div className="card-header">
                <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( Broken Authentication and Session Management)</h5>
            </div>
            <div className="card-body">
                <div className="row">

                    <div className="col-md-12 col-lg-12">
                        <ul className="ul-styling">
                            {
                                postSessionData.data && Object.keys(postSessionData.data).slice(0, 6).map((propertyname) => (
                                    <li className="list-styling"><span className="text-capitalize">{propertyname + " "}</span>:{postSessionData.data[propertyname]}</li>
                                ))

                            }
                        </ul>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SessionManagement