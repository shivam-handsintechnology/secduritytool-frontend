import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import UserRegister from "./UserRegister";
import { Link } from "react-router-dom";
export default function UserLogin() {

  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email, password)
  const navigateToRegister = () => {
    window.location.assign('/register')
  }
  const handleSubmit = async () => {
    // eslint-disable-next-line
    if (email == '') {
      toast.error('please enter email')
    }
    // eslint-disable-next-line
    else if (password == '') {
      toast.error("please enter password")
    } else {
      await axios.post(`auth/login`, { email: email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        const { data, message, statusCode } = response
        console.log("data")
        if (statusCode === 200) {
          toast.success(message)
          sessionStorage.setItem('token', JSON.stringify(data));
          window.location.replace('/')
        } else if (statusCode >= 400) {
          toast.error(message)
        }
      })
        .catch((error) => {
          toast.error(error.response.data)
          console.log(error.response.data)
        })
    }

  }
  return (
    <body className="hold-transition login-page">
      <div className="login-box">

        {/* /.login-logo */}
        <div className="card login-card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to Start Your Session</p>

            <div className="input-group mb-4">
              <input
                type="email"
                className="form-control input-signin"
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-4">
              <input
                type="password"
                className="form-control input-signin"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div> */}
              {/* /.col */}
              <div className="col-6">
                <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block button-sign">
                  Sign In
                </button>
              </div>
              <div className="col-6">
                <button onClick={navigateToRegister} type="submit" className="btn btn-primary btn-block button-sign">
                  Register
                </button>
              </div>

            </div>
            {/* /.col */}


            {/* <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using
                  Google+
                </a>
              </div> */}
            {/* /.social-auth-links */}
            {/* <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p> */}
            {/* <p className="mb-0">
                <a href="register.html" className="text-center">
                  Register a new membership
                </a>
              </p> */}
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </body >
  );

}
