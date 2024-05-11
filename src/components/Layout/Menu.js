import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../helpers/dashboard"
export default function Menu() {
  const userreducerDetails = useSelector((state) => state.UserReducer)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState([]);

  const toggleSubMenu = (name) => {
    let temp = [...isSubMenuOpen];
    // eslint-disable-next-line array-callback-return
    temp.map((item)=>{
      if(item.name === name){
        item.isOpen = !item.isOpen;
      }
    })
    setIsSubMenuOpen(temp);
    
  };
  const isOpen = (name) => {
   let isOpen = false;
   // eslint-disable-next-line array-callback-return
   isSubMenuOpen.find((item)=>{
      if(item.name === name){
        isOpen = item.isOpen;
      }
    })
    return isOpen;
  };
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
          {/*  eslint-disable-next-line */}
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="photo"
            />
          </div>
          <div className="info">
            <Link className="d-block">
              {userreducerDetails.isAuthenticated && userreducerDetails?.email}
            </Link>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar nav-legacy flex-column" data-widget="treeview" role="menu">
            <li className="nav-header">NAVIGATION</li>
            <li className="nav-item ">
              <Link to="/dashboard" className="nav-link ">
                <i className="fas fa-info-circle" />&nbsp; <p>Dashboard</p>
              </Link>
            </li>
           
            <li className="nav-header">SECURITY</li>
          
            <li className="nav-header">TOOLS</li>
            {data.map((category, index) => (
              <li key={index} className={`nav-item ${isOpen(`category-${index}`) ? 'menu-open' : ''}`}>
               {
                category.link? <Link to={`${category.link}`} className="nav-link">
                <i className="fas fa-flag" />&nbsp; <p>{category.Category} <i className="fas fa-angle-right right" /></p>
              </Link> :<Link  className="nav-link" onClick={() => toggleSubMenu(`category-${index}`)}>
                  <i className="fas fa-flag" />&nbsp; <p>{category.Category} <i className="fas fa-angle-right right" /></p>
                </Link>
               }
                
                <ul className="nav nav-treeview">
                  {category.UseCases.map((useCase, i) => (
                    <li key={i} className="nav-item">
                      <Link to={`${useCase.link}`} className="nav-link">
                        <i className="far fa-file-alt" />&nbsp; <p>{useCase.label}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
