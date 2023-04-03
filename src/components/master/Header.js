import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      
      <Link to="/apitest">ApiTesting</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>  
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#" style={{ paddingTop: '3px' }}>
            <div className="user-panel pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                  style={{ height: "auto", width: "2.1rem" }}
                />
              </div>
              <div className="info">
                <a href="#" className="d-block" style={{ color: 'rgb(92 92 92)' }}>
                  Vishal Kunwar <i class="fa fa-caret-down" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <Link to="/Account" className="dropdown-item">
              <i className="fa fa-sign-out" aria-hidden="true" />Account
            </Link>
            <Link to="/Header.js" className="dropdown-item">
              <i className="fa fa-sign-out" aria-hidden="true" />Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
