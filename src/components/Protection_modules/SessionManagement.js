import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setLogsData } from '../../redux/reducers/LogsDataReducer'

const SessionManagement = () => {
    const data = useSelector((state) => state.LogDataReducer)
    const UserData = useSelector((state) => state.UserReducer)
    console.log("UserData>>>>>", UserData)
    const dispatch = useDispatch()
    const GetallLogsData = (async () => {
        await axios.get(`security/test/session-data`).then((response) => {
          const { data, statusCode } = response
          if (statusCode === 200) {
            console.log("data>>>>>>", data)
            dispatch(setLogsData(data))
          }
        }
        ).catch((error) => { console.log(error) })
      })
      // Assign Useffects 
      useEffect(() => {
        GetallLogsData()
      }, [UserData.domain])
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
                                data.sessionvulnerability && Object.keys(data.sessionvulnerability).slice(0, 6).map((propertyname) => (
                                    <li className="list-styling"><span className="text-capitalize">{propertyname + " "}</span>:{data.sessionvulnerability[propertyname]}</li>
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