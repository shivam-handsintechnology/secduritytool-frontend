import React from 'react'

const SensitiveDataExposure = () => {
    return (
        <React.Fragment>
            <div className="card card-primary card-outline">
                <div className="card-header">
                    <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules (Sensitive Data Exposure)</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <ul>
                                <li><span><b>An adversary can harvest email ids for spamming:</b></span></li>
                                {/* <li><span><b>Password is encrypted/encoded using weak algorithm :</b></span></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SensitiveDataExposure