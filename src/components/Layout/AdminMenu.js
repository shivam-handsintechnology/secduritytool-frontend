import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AdminMenu(props) {
  const userreducerDetails = useSelector((state) => state.UserReducer)
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/" className="brand-link">
        <img
          src="http://handsintechnology.in/1assets/images/bg/shapes/logo12.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "1" }}
        />
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {userreducerDetails.isAuthenticated && userreducerDetails?.email}
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar nav-legacy flex-column" data-widget="treeview" role="menu">
            <li className="nav-item active">
              <Link to="/Websites" className="nav-link">
                <i className="fas fa-home" />&nbsp; <p>Websites</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Systeminfo" className="nav-link ">
                <i className="fas fa-info-circle" />&nbsp; <p>System Information</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
