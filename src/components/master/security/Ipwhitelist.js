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
export default class Ipwhitelist extends Component {
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
                                        <i className="fas fa-flag" /> IP Whitelist
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">IP Whitelist</li>
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
                                            <h3 className="card-title">IP Whitelist</h3>
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
                                            <h3 className="card-title">Add IP Address</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal" action="" method="post">
                                                <div className="form-group">
                                                    <label className="control-label">IP Address: </label>
                                                    <input
                                                        type="text"
                                                        name="ip"
                                                        className="form-control"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Notes: </label>
                                                    <textarea
                                                        rows={5}
                                                        name="notes"
                                                        className="form-control"
                                                        placeholder="Additional (descriptive) information can be added here"
                                                        data-gramm="false"
                                                        wt-ignore-input="true"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer">
                                            <button
                                                className="btn btn-block btn-flat btn-primary"
                                                name="add"
                                                type="submit"
                                            >
                                                <i className="fas fa-plus-square" /> Add
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
