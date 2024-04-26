import React from "react";
import { Link } from "react-router-dom";
import SSLInfo from "../../../components/Protection_modules/SSLInfo";
import SessionManagement from "../../../components/Protection_modules/SessionManagement";
import InjectionVulnurabilities from "../../../components/Protection_modules/InjectionVulnurabilities";
import DirectObjectReferenceProtection from "../../../components/Protection_modules/DirectObjectReferenceProtection";
import SecurityMisconfiguration from "../../../components/Protection_modules/SecurityMisconfiguration";
import SensitiveDataExposure from "../../../components/Protection_modules/SensitiveDataExposure";
import useDataFetch from "../../../hooks/DataFetchHook";
import { useSelector } from "react-redux";
import ServerErrorMessage from "../../Error Message/ServerErrorMessage";
import UnvalidatedRedirectsForwards from "../../../components/Protection_modules/UnvalidatedRedirectsForwards";
import CrossSiteScriptingXSS from "../../../components/Protection_modules/CrossSiteScriptingXSS";


export default function Dashboard() {
  console.log(process.env)
   
  return (
    <React.Fragment>
      <div>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="fas fa-home" /> Admin Panel
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        <div className="content">
          {/* Select  Domains */}
          {/* Check if data is available */}
       
          {/* End Domains */}
          {/* Session modules */}
          <SessionManagement />
          {/* ENd  Session modules */}

          {/* injections modules */}
          <InjectionVulnurabilities />
          {/* ENd  injections modules */}
          {/* SSl Info */}
        
          <div className="card card-primary card-outline">
                <div className="card-header">
                <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( SSL Information)</h5>
                </div>
                <div className="card-body">
                <SSLInfo />
                </div>
            </div>
          {/* End SSl Info */}
          {/* Error Message */}
          <div className="card card-primary card-outline">
                <div className="card-header">
                <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( Error Messages)</h5>
                </div>
                <div className="card-body">
                <ServerErrorMessage/>
                </div>
            </div>
          {/* End Error Message */}
          {/* Insecure Direct Object References */}
          <DirectObjectReferenceProtection />
          {/* End Insecure Direct Object References */}
          {/* Security Misconfiguration */}
          <SecurityMisconfiguration />
          {/* End Security Misconfiguration */}
          {/* Sensiotive Data Expoture */}
          <SensitiveDataExposure />
          {/* End Sensiotive Data Expoture */}
          {/* Unvalidate Redirects */}
         <UnvalidatedRedirectsForwards/>
          {/* End Unvalidate Redirects */}

          {/* Cross-Site Scripting (XSS) */}
          <CrossSiteScriptingXSS />
          {/* End Cross-Site Scripting (XSS) */}
        </div>

        {/* /.content */}
      </div>
    </React.Fragment>
  );
}
