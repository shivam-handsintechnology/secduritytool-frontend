import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import SSLInfo from "../../../components/Protection_modules/SSLInfo";
import SessionManagement from "../../../components/Protection_modules/SessionManagement";
import InjectionVulnurabilities from "../../../components/Protection_modules/InjectionVulnurabilities";
import DirectObjectReferenceProtection from "../../../components/Protection_modules/DirectObjectReferenceProtection";
import SecurityMisconfiguration from "../../../components/Protection_modules/SecurityMisconfiguration";
import SensitiveDataExposure from "../../../components/Protection_modules/SensitiveDataExposure";
import BusinessLogicFlow from "../../../components/Protection_modules/BusinessLogicFlow";
import ErrorMessages from "../../../components/Protection_modules/ErrorMessages";
import { useDataFetch } from "../../../hooks/DataFetchHook";
import { PaginationComponent } from "../../../hooks/PaginationComponent";
import { setUserDetails } from "../../../redux/reducers/UserReducer";

export default function Dashboard() {
   
  // Assishn All States
  const [limit, setLimit] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)
  // Assign All Funtions
  const dispatch = useDispatch()
  const getAllDomains = useDataFetch(`security/domain?limit=${limit}&page=${pageNumber}`, [pageNumber])

 // Add Columns/Rows
  const columns = [
    {
      name: "Domain",
      selector: "domain",

    },
    {
      name: "Action",
      cell: (row) => <Button onClick={() => dispatch(setUserDetails(row))} variant="primary">Select Domain</Button>,
    }
  ];
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
          {getAllDomains && getAllDomains.Data && getAllDomains.Data.data.length > 0 ? (
            <div>
              {/* Render pagination component */}
              <PaginationComponent
                columns={columns}
                data={getAllDomains.Data.data}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                totalPages={getAllDomains.Data.totalPages}
                showData={true}
              />
            </div>
          ) : (
            <h1>No Data Found</h1>
          )}
          {/* End Domains */}
          {/* Session modules */}
          <SessionManagement />
          {/* ENd  Session modules */}

          {/* injections modules */}
          <InjectionVulnurabilities />
          {/* ENd  injections modules */}
          {/* SSl Info */}
          <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( SSL Information)</h5>
          <SSLInfo />
          {/* End SSl Info */}
          {/* Business Logic Flow */}
          <BusinessLogicFlow />
          {/* End Business Logic Flow */}
          {/* Error Message */}
          <ErrorMessages />
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
        </div>

        {/* /.content */}
      </div>
    </React.Fragment>
  );
}
