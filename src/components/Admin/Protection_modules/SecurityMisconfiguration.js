import React from 'react'
import { useSelector } from 'react-redux'

const SecurityMisconfiguration = (props) => {
    const data = useSelector((state) => state.LogDataReducer)

    return (
        <React.Fragment>
            <div className="card card-primary card-outline">
                <div className="card-header">
                    <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules (Security Misconfiguration)</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <ul>
                                <li><span><b>Dangerous HTTP methods are enabled on the server :</b></span>{data.dangerousemethodvulnerability ? data.dangerousemethodvulnerability?.map((item) => item) : ""}</li>
                                <li><span><b>OPTIONS method enabled :</b></span>{data.optionmethodvulnerability ? data.optionmethodvulnerability?.map((item) => item) : ""}</li>
                                <li><span><b>Password is encrypted/encoded using weak algorithm :</b></span>{data.passwordhashing ? data.passwordhashing?.map((item) => item) : ""}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SecurityMisconfiguration