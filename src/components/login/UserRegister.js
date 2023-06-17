import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function UserRegister()  {
  const navigate=useNavigate()
  // const history=useNavigate()
  const [domain, setdomain] = useState(null)
  const [password, setPassword] = useState(null)
  console.log(domain,password)
  const handleSubmit=async()=>{ 
    // eslint-disable-next-line
    if(domain==''){
      toast.error('please enter domain')
    }
   // eslint-disable-next-line
    else if(password==''){
      toast.error("please enter password")
    }else{
      await axios.post(`auth/register`,{domain,password},{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response)=>{
        const {data,message,statusCode}=response
        if(statusCode===200){
          toast.success(message)
          sessionStorage.setItem('token',JSON.stringify(data));
          window.location.replace('/')
        }else if(statusCode>=400){
          toast.error(message)
        } 
      })  
      .catch((error)=>{
        toast.error(error.response.data)
        console.log(error.response.data)
      })
    }

  }
    return (
      <body class="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Register</p>
                <div className="input-group mb-3">
                  <input
                    type="domain"
                    className="form-control"
                    value={domain}
                    onChange={(e)=>{setdomain(e.target.value)}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                   value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
             
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
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
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
