import React, { Component } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import DataTable from 'react-data-table-component';
import data from './data.json';
import { Link } from "react-router-dom";
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
export default class Errormonitoring extends Component {
    render() {
        return (
            <div>
                <Headers />
                <Menu />
                <div className="content-wrapper">
                    {/*CONTENT CONTAINER*/}
                    {/*===================================================*/}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 ">
                                        <i className="fas fa-exclamation-circle" /> Error Monitoring
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">Error Monitoring</li>
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
                                <div className="col-md-9">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-cogs" /> Settings
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <form method="post">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>
                                                            <i className="fas fa-bug" /> Error Reporting
                                                        </label>
                                                        <select className="form-control" name="erselect">
                                                            <option value={1}>Turned Off</option>
                                                            <option value={2}>Report simple running errors</option>
                                                            <option value={3}>
                                                                Report simple running errors + notices
                                                            </option>
                                                            <option value={4} selected="selected">
                                                                Report all errors except notices
                                                            </option>
                                                            <option value={5}>Report all errors (Recommended)</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>
                                                            <i className="fas fa-eye" /> Errors Visibility
                                                        </label>
                                                        <select className="form-control" name="deselect">
                                                            <option value={0}>Hide Errors (Recommended)</option>
                                                            <option value={1} selected="selected">
                                                                Display Errors
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                <input
                                                    className="btn btn-primary btn-block btn-flat"
                                                    type="submit"
                                                    name="ersave"
                                                    defaultValue="Save"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-clipboard-list" /> Error Monitoring
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <DataTable
                                                title="Login History"
                                                columns={columns}
                                                data={data}
                                                pagination
                                                highlightOnHover
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-info-circle" /> Information &amp; Tips
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            Logging errors is recommended best practice, even for production
                                            site. Checking those logs however might seem like a chore. The
                                            error monitoring brings all entries from error log on this page.
                                            <br />
                                            <br />
                                            <ul style={{paddingLeft:'20px'}}>
                                                <li>
                                                    The log file is detected automatically from the configuration
                                                    of the server
                                                </li>
                                                <li>
                                                    Only the end of file is read - no memory overflow issues, safe
                                                    for large logs
                                                </li>
                                                <li>
                                                    Optimized to work card card-body bg-light even with very large
                                                    log files
                                                </li>
                                            </ul>
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
