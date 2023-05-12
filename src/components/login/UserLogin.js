import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
export default function UserLogin()  {
  // const history=useNavigate()
  const [email, setEmail] = useState('shivam@mail.com')
  const [password, setPassword] = useState('1234')
  console.log(email,password)
  const handleSubmit=async()=>{ 
    // eslint-disable-next-line
    if(email==''){
      toast.error('please enter email')
    }
   // eslint-disable-next-line
    else if(password==''){
      toast.error("please enter password")
    }else{
      await axios.post(`auth/login`,{email,password},{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response)=>{
        const {data,message,statusCode}=response
        console.log("data")
        if(statusCode===200){
          toast.success(message)
          sessionStorage.setItem('token',JSON.stringify(data));
          window.location.replace('/')
        }else if(statusCode===404){
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
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
            
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
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
