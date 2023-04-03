import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function ApiTesting() {
  const [email, setEmail] = useState('shivam@handsintechnology.com')
  const [data, setData] = useState(null)
  const [password, setPassword] = useState('12345678')
  const [nosqlData, setnosqlData] = useState("")


  async function Run() {
    const inputData = {};
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      console.log(input.value);
      inputData[input.value] = input.value;
    });
    let result = await fetch('https://sercuritytool.handsintechnology.in/api/test', {
      method: 'post',
      body: JSON.stringify({inputData}),
      headers: {
        'Content-Type': 'application/json',
      },
    })

  

  }
  Run()
  useEffect(() => {

    (() => {
      axios.get('test/robottxt')
        .then((response) => {
          const { message } = response
          console.log({ message })
        })
        .catch((error) => {
          console.log(error)
        })
    })()
  }, [])
  const handleSubmit = async () => {

    let JSONDATA = nosqlData !== '' ? JSON.parse(nosqlData) : ""
    console.log({ JSONDATA })
    await axios.post(`test`, { data: email, password, JSONDATA }, {
      headers: {
        "iframerequest": "iframe"
      }
    }).then((response) => {
      const { data, message, statusCode } = response
      console.log({ statusCode })
      if (statusCode == 200) {
        setData(data)
      }
      if (statusCode == 406) {
        setData(data)
        toast.error(message)
      }

    })
      .catch((error) => {
        console.log(error)
        toast.error(error.message)
        console.log(error)
      })


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
              <label>Normal Input</label>
              <input
                type="text"
                className="form-control"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <label>NoSql Input</label>
              <input
                type="text"
                className="form-control"
                value={nosqlData}
                onChange={(e) => { setnosqlData(e.target.value) }}
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
            {JSON.stringify(data)}
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
