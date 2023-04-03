import React, { Component } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { Chart } from "react-google-charts";
import DataTable from 'react-data-table-component';
import data from './data.json';
const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Phone',
        selector: 'phone',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'DOB',
        selector: 'dob',
    },
];
export default class Proxy extends Component {

    render() {
        return (
            <div>
                <Headers />
                <Menu />
                <div className="content-wrapper" style={{ minHeight: 511 }}>
                    {/*CONTENT CONTAINER*/}
                    {/*===================================================*/}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 ">
                                        <i className="fas fa-code" /> Protection Module
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">Protection Module</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Page content*/}
                    {/*===================================================*/}
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card card-solid card-danger">
                                        <div className="card-header">
                                            <h3 className="card-title">Proxy - Protection Module</h3>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="pm_disabled">
                                                <i className="fas fa-times-circle" /> Disabled
                                            </h1>
                                            <p>
                                                The website is not protected from <strong>Proxies</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card card-primary card-outline">
                                      
                                        <div className="card-body">
                                            <form
                                                className="form-horizontal form-bordered"
                                                action=""
                                                method="post"
                                            >
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card card-body bg-light">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <h5>Detection Method #1</h5>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="dropdown">
                                                                        <button
                                                                            className="btn btn-danger dropdown-toggle float-right"
                                                                            type="button"
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            Proxy Detection API{" "}
                                                                        </button>
                                                                        <div className="dropdown-menu" style={{}}>
                                                                            <a className="dropdown-item active" href="?api=0">
                                                                                Disabled
                                                                            </a>
                                                                            <div className="dropdown-divider" />
                                                                            <a className="dropdown-item " href="?api=1">
                                                                                IPHub
                                                                            </a>
                                                                            <a className="dropdown-item " href="?api=2">
                                                                                ProxyCheck
                                                                            </a>
                                                                            <a className="dropdown-item " href="?api=3">
                                                                                IPHunter
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            Connects to Proxy Detection API and verifies whether the
                                                            visitor is using a Proxy, VPN or TOR
                                                            <br />
                                                            <br />
                                                            <p>API Key</p>
                                                            <input
                                                                name="apikey"
                                                                className="form-control"
                                                                type="text"
                                                                disabled=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card card-body bg-light">
                                                            <div className="row">
                                                                <div className="col-md-10">
                                                                    <h5>Detection Method #2</h5>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="protection2"
                                                                        className="psec-switch"
                                                                        data-switchery="true"
                                                                        style={{ display: "none" }}
                                                                    />
                                                                    <span
                                                                        className="switchery switchery-default"
                                                                        style={{
                                                                            boxShadow: "red 0px 0px 0px 0px inset",
                                                                            borderColor: "red",
                                                                            backgroundColor: "red",
                                                                            transition:
                                                                                "border 0.4s ease 0s, box-shadow 0.4s ease 0s"
                                                                        }}
                                                                    >
                                                                        <small
                                                                            style={{
                                                                                left: 0,
                                                                                transition:
                                                                                    "background-color 0.4s ease 0s, left 0.2s ease 0s"
                                                                            }}
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            Checks the visitor's HTTP connection headers for Proxy
                                                            elements
                                                        </div>
                                                    </div>
                                                </div>
                                                <center>
                                                    <button
                                                        className="btn btn-flat btn-md btn-block btn-primary mar-top"
                                                        name="save2"
                                                        type="submit"
                                                    >
                                                        <i className="fas fa-save" /> Save
                                                    </button>
                                                </center>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-info-circle" /> What is Proxy
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <strong>Proxy</strong> or <strong>Proxy Server</strong> is
                                            basically another computer which serves as a hub through which
                                            internet requests are processed. By connecting through one of
                                            these servers, your computer sends your requests to the proxy
                                            server which then processes your request and returns what you were
                                            wanting.
                                        </div>
                                    </div>
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-cogs" /> Module Settings
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <form
                                                    className="form-horizontal form-bordered"
                                                    action=""
                                                    method="post"
                                                >
                                                    <li className="list-group-item">
                                                        <p>Logging</p>
                                                        <input
                                                            type="checkbox"
                                                            name="logging"
                                                            className="psec-switch"
                                                            defaultChecked="checked"
                                                            data-switchery="true"
                                                            style={{ display: "none" }}
                                                        />
                                                        <span
                                                            className="switchery switchery-default"
                                                            style={{
                                                                backgroundColor: "rgb(100, 189, 99)",
                                                                borderColor: "rgb(100, 189, 99)",
                                                                boxShadow: "rgb(100, 189, 99) 0px 0px 0px 16px inset",
                                                                transition:
                                                                    "border 0.4s ease 0s, box-shadow 0.4s ease 0s, background-color 1.2s ease 0s"
                                                            }}
                                                        >
                                                            <small
                                                                style={{
                                                                    left: 20,
                                                                    backgroundColor: "rgb(255, 255, 255)",
                                                                    transition:
                                                                        "background-color 0.4s ease 0s, left 0.2s ease 0s"
                                                                }}
                                                            />
                                                        </span>
                                                        <br />
                                                        <span className="text-muted">
                                                            Logs the detected threats
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p>Mail Notifications</p>
                                                        <input
                                                            type="checkbox"
                                                            name="mail"
                                                            className="psec-switch"
                                                            data-switchery="true"
                                                            style={{ display: "none" }}
                                                        />
                                                        <span
                                                            className="switchery switchery-default"
                                                            style={{
                                                                boxShadow: "red 0px 0px 0px 0px inset",
                                                                borderColor: "red",
                                                                backgroundColor: "red",
                                                                transition:
                                                                    "border 0.4s ease 0s, box-shadow 0.4s ease 0s"
                                                            }}
                                                        >
                                                            <small
                                                                style={{
                                                                    left: 0,
                                                                    transition:
                                                                        "background-color 0.4s ease 0s, left 0.2s ease 0s"
                                                                }}
                                                            />
                                                        </span>
                                                        <br />
                                                        <span className="text-muted">
                                                            Receive email notifications when threat of this type is
                                                            detected
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p>Redirect URL</p>
                                                        <input
                                                            name="redirect"
                                                            className="form-control"
                                                            type="text"
                                                            defaultValue="http://psec22.byethost22.com/security/pages/proxy.php"
                                                            required=""
                                                        />
                                                    </li>
                                                </form>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <button
                                                className="btn btn-flat btn-block btn-primary mar-top"
                                                name="save"
                                                type="submit"
                                            >
                                                <i className="fas fa-save" /> Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===================================================*/}
                    {/*End page content*/}
                </div>
                <Footer />
            </div>
        );
    }
}
