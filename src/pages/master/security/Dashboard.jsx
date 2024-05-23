import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import SSLInfo from "../../../components/Protection_modules/SSLInfo";
import SessionManagement from "../../../components/Protection_modules/SessionManagement";
import InjectionVulnurabilities from "../../../components/Protection_modules/InjectionVulnurabilities";
import DirectObjectReferenceProtection from "../../../components/Protection_modules/DirectObjectReferenceProtection";
import SecurityMisconfiguration from "../../../components/Protection_modules/SecurityMisconfiguration";
import SensitiveDataExposure from "../../../components/Protection_modules/SensitiveDataExposure";
import UnvalidatedRedirectsForwards from "../../../components/Protection_modules/UnvalidatedRedirectsForwards";
import CrossSiteScriptingXSS from "../../../components/Protection_modules/CrossSiteScriptingXSS";
import ServerErrorMessage from "../../Error Message/ServerErrorMessage";
import ErrorBoundary from "../../../utils/ErrorBoundary";
import LoadingSpinner from "../../../components/LoaderAndError/loader";

export default function Dashboard() {
  console.log(process.env);

  return (
    <React.Fragment>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <div>
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Dashboard</h1>
                  </div>
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
                </div>
              </div>
            </div>
            <div className="content">
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <SessionManagement />
                </Suspense>
              </ErrorBoundary>

              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <InjectionVulnurabilities />
                </Suspense>
              </ErrorBoundary>

              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( SSL Information)</h5>
                </div>
                <div className="card-body">
                  <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                      <SSLInfo />
                    </Suspense>
                  </ErrorBoundary>
                </div>
              </div>

              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( Error Messages)</h5>
                </div>
                <div className="card-body">
                  <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                      <ServerErrorMessage />
                    </Suspense>
                  </ErrorBoundary>
                </div>
              </div>

              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <DirectObjectReferenceProtection />
                </Suspense>
              </ErrorBoundary>

              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <SecurityMisconfiguration />
                </Suspense>
              </ErrorBoundary>

              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <SensitiveDataExposure />
                </Suspense>
              </ErrorBoundary>

              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <UnvalidatedRedirectsForwards />
                </Suspense>
              </ErrorBoundary>

              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <CrossSiteScriptingXSS />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}
