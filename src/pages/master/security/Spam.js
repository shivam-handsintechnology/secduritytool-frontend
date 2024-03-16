import React, { Component } from "react";
import Headers from "../../../components/Layout/Header";
import Menu from "../../../components/Layout/Menu";
import Footer from "../../../components/Layout/Footer";
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
export default class Spam extends Component {

    render() {
        return (
            <div>
                {/* <Headers />
                <Menu /> */}
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
                                            <h3 className="card-title">Spam - Protection Module</h3>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="pm_disabled">
                                                <i className="fas fa-times-circle" /> Disabled
                                            </h1>
                                            <p>
                                                The website is not protected from <strong>Spammers</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-server" /> Spam Databases (DNSBL)
                                            </h3>
                                            <button
                                                data-target="#add"
                                                data-toggle="modal"
                                                className="btn btn-flat btn-primary btn-sm float-sm-right"
                                            >
                                                <i className="fas fa-plus-circle" /> Add Spam Database (DNSBL)
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal mb-lg" method="POST">
                                                <div
                                                    className="modal fade"
                                                    id="add"
                                                    tabIndex={-1}
                                                    aria-labelledby="add"
                                                    aria-hidden="true"
                                                    style={{ display: "none" }}
                                                >
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h6 className="modal-title">
                                                                    Add Spam Database (DNSBL)
                                                                </h6>
                                                                <button
                                                                    data-dismiss="modal"
                                                                    className="close"
                                                                    type="button"
                                                                >
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="form-group">
                                                                    <label className="control-label">
                                                                        <i className="fas fa-database" /> Spam Database
                                                                        (DNSBL):
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="database"
                                                                        required=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <input
                                                                    className="btn btn-block btn-flat btn-primary"
                                                                    name="add-database"
                                                                    type="submit"
                                                                    defaultValue="Add"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <i className="fas fa-database" /> DNSBL Database
                                                            </th>
                                                            <th>
                                                                <i className="fas fa-cog" /> Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>sbl.spamhaus.org</td>
                                                            <td>
                                                                <a
                                                                    href="?delete-id=1"
                                                                    className="btn btn-flat btn-danger btn-sm btn-block"
                                                                >
                                                                    <i className="fas fa-trash" /> Delete
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>xbl.spamhaus.org</td>
                                                            <td>
                                                                <a
                                                                    href="?delete-id=2"
                                                                    className="btn btn-flat btn-danger btn-sm btn-block"
                                                                >
                                                                    <i className="fas fa-trash" /> Delete
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-info-circle" /> What is Spam &amp; DNSBL
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <strong>Electronic Spamming</strong> is the use of electronic
                                            messaging systems to send unsolicited messages (spam), especially
                                            advertising, as card card-body bg-light as sending messages
                                            repeatedly on the same site.
                                            <br />
                                            <br />A <strong>DNS-based Blackhole List (DNSBL)</strong> or{" "}
                                            <strong>Real-time Blackhole List (RBL)</strong> is a list of IP
                                            addresses which are most often used to publish the addresses of
                                            computers or networks linked to spamming.
                                            <br />
                                            <br />
                                            All <strong>Blacklists</strong> can be found here:{" "}
                                            <strong>
                                                <a href="https://www.dnsbl.info/dnsbl-list.php" target="_blank">
                                                    https://www.dnsbl.info/dnsbl-list.php
                                                </a>
                                            </strong>
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
                                                            defaultValue="http://psec22.byethost22.com/security/pages/spammer.php"
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


            </div>
        );
    }
}
