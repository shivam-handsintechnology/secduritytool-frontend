import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function UserRegister() {
  const navigate = useNavigate()
  // const history=useNavigate()
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [otp, setOtp] = useState("")
  const [isOtp, setIsOtp] = useState(false)
  const handleSubmit = async () => {
    // eslint-disable-next-line
    let obj = { email, password, name }

    if (name == '') {
      toast.error('please enter name')
    }
    if (email == '') {
      toast.error('please enter email')
    }
    // eslint-disable-next-line
    else if (password == '') {
      toast.error("please enter password")
    } else if (isOtp && otp == '') {
      toast.error("please enter otp")
    }
    if (isOtp && otp == '') {
      toast.error('please enter otp')
    }
    else {
      if (isOtp) {
        obj["otp"] = otp
      }
      await axios.post(`auth/register`, obj, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        const { data, message, statusCode } = response
        if (statusCode === 200) {
          setIsOtp(true)
          toast.success(message)
        } else if (statusCode === 201) {
          setIsOtp(false)
          toast.success(message)
          navigate('/login', { replace: true })
        }
      })
        .catch((error) => {
          toast.error(error.response.data)
          if (error.response.data.message) {
            toast.error(error.response.data.message)
          }
          toast.error(error.message)
          console.log(error.response.data)
        })
    }

  }
  return (
    <body class="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card login-card" >
          <div className="card-body login-card-body">
            <p className="login-box-msg">Register</p>
            <>
              {isOtp ? <>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control input-signin"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => { setOtp(e.target.value) }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
              </> : <>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control input-signin"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => { setName(e.target.value) }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-4">
                  <input
                    type="email"
                    placeholder="Email"
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
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
              </>
              }
            </>

            <div className="row">
              {/* <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div> */}

              <div className="col-12">
                <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block button-sign">
                  Register
                </button>
              </div>
            </div>


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
    </body>
  );

}
