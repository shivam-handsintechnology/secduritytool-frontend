import React, { Component } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
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
export default class Bansip extends Component {

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
                                        <i className="fas fa-user" /> IP Bans
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">IP Bans</li>
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
                                            <h3 className="card-title">IP Bans</h3>
                                            <a
                                                href="?delete-all"
                                                className="btn btn-flat btn-danger btn-sm float-sm-right"
                                                data-toggle="tooltip"
                                                title=""
                                                data-original-title="Delete all IP Bans"
                                            >
                                                <i className="fas fa-trash" /> Delete All
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <DataTable
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
                                            <h3 className="card-title">Ban IP Address</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal" action="" method="post">
                                                <div className="form-group">
                                                    <label className="control-label">IP Address: </label>
                                                    <input
                                                        name="ip"
                                                        className="form-control"
                                                        type="text"
                                                        defaultValue=""
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Reason: </label>
                                                    <input
                                                        name="reason"
                                                        className="form-control"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">
                                                        Redirecting to page / site:{" "}
                                                    </label>
                                                    <select name="redirect" className="form-control" required="">
                                                        <option value={0} selected="">
                                                            No
                                                        </option>
                                                        <option value={1}>Yes</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Redirect URL: </label>
                                                    <input
                                                        name="url"
                                                        className="form-control"
                                                        type="url"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer">
                                            <button
                                                className="btn btn-block btn-flat btn-danger"
                                                name="ban-ip"
                                                type="submit"
                                            >
                                                Ban
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
