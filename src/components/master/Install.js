import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import usePostRequest from '../../customhooks/usePostApi';
import {IntallationcreatePost} from "../../Services/AxiosRoutes"
const Install = () => {
  const [formObj, setformObj] = useState({})
console.log("Installing",formObj.username)
  const handleChange=(e)=>{
      setformObj({...formObj, [e.target.name]: e.target.value})
  }
  const { execute, data, error, isLoading }= usePostRequest(IntallationcreatePost); 
  const handleClick = () => {
    console.log('handleClick',formObj.username)
    if(formObj.username===undefined && formObj.cluster===undefined && formObj.password===undefined && formObj.dbname===undefined ){
      toast.error("please enter all fields ")
    }else{
      execute({username:formObj.username,password:formObj.password,cluster:formObj.cluster,dbname:formObj.dbname});
    }
};  
  return (
    <div className="container"><br />
  <div className="card bg-light">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-10">
        <br /><center><h3><i className="fab fa-get-pocket" /> Project SECURITY - Installation Wizard</h3></center><br />
        <div className="jumbotron">
          <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
              <a className="nav-link active"><i className="fas fa-database" /> Database Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link "><i className="fas fa-user" /> Administrator Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link "><i className="fas fa-check-square" /> Completed</a>
            </li>
          </ul><br />
          <div className="tab-content" id="TabContent">
            <center><h6>Enter your database connection details. If you’re not sure about them, contact your hosting provider.</h6></center><hr />
            <div className="form-horizontal row-border"> 
              <div className="form-group row">
                <p className="col-sm-3"> UserName: </p>
                <div className="col-sm-8">
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="fas fa-database" />
                    </div>
                    <input type="text" onChange={handleChange}  name='username' className="form-control" placeholder="localhost"  required />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <p className="col-sm-3"> Password: </p>
                <div className="col-sm-8">
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="fas fa-list-alt" />
                    </div>
                    <input type="text" onChange={handleChange} name="password" className="form-control" placeholder="security"  required />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <p className="col-sm-3"> Cluster name: </p>
                <div className="col-sm-8">
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="fas fa-user" />
                    </div>
                    <input type="text" onChange={handleChange} name="cluster" className="form-control" required />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <p className="col-sm-3"> Database Name: </p>
                <div className="col-sm-8">
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="fas fa-key" />
                    </div>
                    <input type="text" onChange={handleChange} name="dbname" className="form-control" placeholder defaultValue />
                  </div>
                </div>
              </div><br />		
              <input className="btn-primary btn col-12"  onClick={handleClick} name="submit" defaultValue="Next" /><br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Install
