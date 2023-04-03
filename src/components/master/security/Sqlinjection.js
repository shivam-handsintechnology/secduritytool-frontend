import React, { useState } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Switch from "react-switch";
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
export default  Sqlinjection =>{
    const[Checked,setChecked] = useState(false);
    const handleChange=(checked)=> {
      setChecked(checked);
    }
        return (
            <div>
                <Headers />
                <Menu />
                <div className="content-wrapper" style={{ minHeight: 190 }}>
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
                                    <div className="card card-solid card-success">
                                        <div className="card-header">
                                            <h3 className="card-title">SQL Injection - Protection Module</h3>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="pm_enabled">
                                                <i className="fas fa-check-circle" /> Enabled
                                            </h1>
                                            <p>
                                                The website is protected from{" "}
                                                <strong>SQL Injection Attacks (SQLi)</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <form
                                        className="form-horizontal form-bordered"
                                        action=""
                                        method="post"
                                    >
                                        <div className="card card-primary card-outline">
                                            <div className="card-header">
                                                <h3 className="card-title">
                                                    <i className="fas fa-shield-alt" /> Additional Protection
                                                    Options
                                                </h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="card card-body bg-light">
                                                            <center>
                                                                <h5>XSS Protection</h5>
                                                                <hr />
                                                                Sanitizes infected requests
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <span className="right badge badge-success"> <Switch onChange={handleChange} checked={Checked} /></span>
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card card-body bg-light">
                                                            <center>
                                                                <h5>Clickjacking Protection</h5>
                                                                <hr />
                                                                Detecting and blocking clickjacking attempts
                                                                <br />
                                                                <br />
                                                                <input
                                                                    type="checkbox"
                                                                    name="protection3"
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
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card card-body bg-light">
                                                            <center>
                                                                <h5>Hide PHP Information</h5>
                                                                <hr />
                                                                Hides the PHP version to remote requests
                                                                <br />
                                                                <br />
                                                                <input
                                                                    type="checkbox"
                                                                    name="protection6"
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
                                                                        boxShadow:
                                                                            "rgb(100, 189, 99) 0px 0px 0px 16px inset",
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
                                                            </center>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="card card-body bg-light">
                                                            <center>
                                                                <h5>MIME Mismatch Attacks Protection</h5>
                                                                <hr />
                                                                Prevents attacks based on MIME-type mismatch
                                                                <br />
                                                                <br />
                                                                <input
                                                                    type="checkbox"
                                                                    name="protection4"
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
                                                                        boxShadow:
                                                                            "rgb(100, 189, 99) 0px 0px 0px 16px inset",
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
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card card-body bg-light">
                                                            <center>
                                                                <h5>Secure Connection</h5>
                                                                <hr />
                                                                Forces the website to use secure connection (HTTPS)
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <input
                                                                    type="checkbox"
                                                                    name="protection5"
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
                                                            </center>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="callout callout-info">
                                                            <i className="far fa-arrow-alt-circle-down" />
                                                            Do NOT enable below options if your website is using CMS
                                                            (or Framework) to avoid PHP errors because they are
                                                            already integrated with such functionality.
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card card-body">
                                                            <center>
                                                                <h5>Data Filtering</h5>
                                                                <hr />
                                                                Basic sanitization of $_POST and $_GET variables based
                                                                on PHP FILTER_SANITIZE_SPECIAL_CHARS filter.
                                                                <br />
                                                                <br />
                                                                <input
                                                                    type="checkbox"
                                                                    name="protection7"
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
                                                                        boxShadow:
                                                                            "rgb(100, 189, 99) 0px 0px 0px 16px inset",
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
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card card-body">
                                                            <center>
                                                                <h5>Requests Sanitization</h5>
                                                                <hr />
                                                                Advanced sanitization of $_POST, $_GET, $_REQUEST,
                                                                $_COOKIE and $_SESSION variables based on custom
                                                                filters.
                                                                <br />
                                                                <br />
                                                                <input
                                                                    type="checkbox"
                                                                    name="protection8"
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
                                                                        boxShadow:
                                                                            "rgb(100, 189, 99) 0px 0px 0px 16px inset",
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
                                                            </center>
                                                        </div>
                                                    </div>
                                                </div>
                                                <center>
                                                    <button
                                                        className="btn btn-flat btn-md btn-block btn-primary"
                                                        name="save2"
                                                        type="submit"
                                                    >
                                                        <i className="fas fa-save" /> Save
                                                    </button>
                                                </center>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-info-circle" /> What is SQL Injection
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <strong>SQL Injection</strong> is a technique where malicious
                                            users can inject SQL commands into an SQL statement, via web page
                                            input. Injected SQL commands can alter SQL statement and
                                            compromise the security of a web application.
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
                                                        <p>Protection</p>
                                                        <input
                                                            type="checkbox"
                                                            name="protection"
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
                                                            If this protection module is enabled all threats of this
                                                            type will be blocked
                                                        </span>
                                                    </li>
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
                                                        <p>AutoBan</p>
                                                        <input
                                                            type="checkbox"
                                                            name="autoban"
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
                                                            Automatically bans the detected threats
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
                                                            You will receive email notification when threat of this
                                                            type is detected
                                                        </span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <p>Redirect URL</p>
                                                        <input
                                                            name="redirect"
                                                            className="form-control"
                                                            type="text"
                                                            defaultValue="http://psec22.byethost22.com/security/pages/blocked.php"
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
