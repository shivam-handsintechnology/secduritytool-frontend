import React, { Component } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { Chart } from "react-google-charts";
import DataTable from 'react-data-table-component';
import data from './data.json';
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
export default class Badwords extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }
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
                                    <div className="card card-solid card-success">
                                        <div className="card-header">
                                            <h3 className="card-title">Bad Bots - Protection Module</h3>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="pm_enabled">
                                                <i className="fas fa-check-circle" /> Enabled
                                            </h1>
                                            <p>
                                                The website is protected from <strong>Bad Bots</strong>
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
                                                    <i className="fas fa-shield-alt" /> Protection Options
                                                </h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="card card-body bg-light">
                                                            <center>
                                                                <h5>Bad Bots</h5>
                                                                <hr />
                                                                Detects the <b>bad bots</b> and blocks their access to
                                                                the website
                                                                <br />
                                                                <br />
                                                                <Switch onChange={this.handleChange} checked={this.state.checked} />
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
                                                    <div className="col-md-4">
                                                        <div className="card card-body bg-light">
                                                            <center>
                                                                <h5>Fake Bots</h5>
                                                                <hr />
                                                                Detects the <b>fake bots</b> and blocks their access to
                                                                the website
                                                                <br />
                                                                <br />
                                                                <input
                                                                    type="checkbox"
                                                                    name="protection2"
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
                                                    <div className="col-md-4">
                                                        <div className="card card-body bg-light">
                                                            <center>
                                                                <h5>Anonymous Bots</h5>
                                                                <hr />
                                                                Detects the <b>anonymous bots</b> and blocks their
                                                                access to the website
                                                                <br />
                                                                <br />
                                                                <br />
                                                                <input
                                                                    type="checkbox"
                                                                    name="protection3"
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
                                                        className="btn btn-flat btn-md btn-block btn-primary mar-top"
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
                                                <i className="fas fa-info-circle" /> What is Bad Bot
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <strong>Bad</strong>, <strong>Fake</strong> and{" "}
                                            <strong>Anonymous Bots</strong> are bots that consume bandwidth,
                                            slow down your server, steal your content and look for
                                            vulnerability to compromise your server.
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
                                                            Receive email notifications when threat of this type is
                                                            detected
                                                        </span>
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
