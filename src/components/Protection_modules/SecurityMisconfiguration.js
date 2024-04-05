import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useDataFetch from '../../hooks/DataFetchHook'
// import Chart from 'chart.js/auto';
import Chart1 from '../Charts/Chart1';
import MyChart from '../Charts/Mychart';

const SecurityMisconfiguration = (props) => {
    const userData = useSelector((state) => state.UserReducer)
    const arbitraryMethods=useDataFetch(`SecurityMisconfiguration/arbitrary-methods?domain=${userData.domain}`,[userData.domain],null,false)
    const passwordTestHash=useDataFetch(`SecurityMisconfiguration/passwords-insecure?domain=${userData.domain}`,[userData.domain],null,false)
  console.log("passwordTestHash",passwordTestHash)
    return (
        <React.Fragment>
            <div className="card card-primary card-outline">
                <div className="card-header">
                    <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules (Security Misconfiguration)</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                         {arbitraryMethods.data && arbitraryMethods.data.length > 0 &&  
                         <Chart1 data={arbitraryMethods.data}/> }  
                         {/* <MyChart/> */}
                            {/* <canvas id="dangerousMethodsChart" width="400" height="200"></canvas> */}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <ul>
                                <li><span><b>Application database stores password in plain text :</b></span>{passwordTestHash.data?passwordTestHash.data : ""}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SecurityMisconfiguration