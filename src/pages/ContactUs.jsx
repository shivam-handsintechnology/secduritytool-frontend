import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <body className="hold-transition login-page justify-content-center">
                <div className="login-box justify-content-center">

                    {/* /.login-logo */}
                    <div className="card login-card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Contact Us</p>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className="form-control input-signin mt-0"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter email-id..."
                                    className="form-control input-signin mt-0"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="tel"
                                    placeholder='Enter phone no...'
                                    className="form-control input-signin mt-0"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="textarea"
                                    placeholder='Enter subject...'
                                    className="form-control input-signin mt-0"
                                   Row="4"
                                />
                                
                            </div>
                            <div className="row">


                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block button-sign">

                                        Submit
                                    </button>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </body >
        </div>
    )
}

export default ContactUs;
