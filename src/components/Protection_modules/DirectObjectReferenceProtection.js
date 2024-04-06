import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDataFetch from '../../hooks/DataFetchHook'

const DirectObjectReferenceProtection = () => {
    const userData = useSelector((state) => state.UserReducer)
    const robottxt = useDataFetch(`security/test/robottxt?domain=${userData.domain}`, [userData.domain], null, false)
    const httpparameterpollution = useDataFetch(`client/httpparameterpollution?domain=${userData.domain}`, [userData.domain], null, false)
  console.log("robottxt",robottxt)
  console.log("httpparameterpollution",httpparameterpollution)
 
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
                               <li><b>The remote server contains a ‘robots.txt’ file</b>:<span className={robottxt.errors.error?"error":""}> {robottxt.errors.error ?robottxt.errors.message:robottxt?.data}</span></li>
                                <li><b>HTTP parameter pollution</b>:<span className={httpparameterpollution.errors.error?"error":""}> {httpparameterpollution.errors.error ?robottxt.errors.message:httpparameterpollution?.data?.data}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DirectObjectReferenceProtection