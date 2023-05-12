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
export default class Banscountry extends Component {

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
                                        <i className="fas fa-globe" /> Country Bans
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">Country Bans</li>
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
                                            <h3 className="card-title">Country Bans</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="callout callout-info" role="alert">
                                                Only one country ban mode can be selected. The countries table
                                                is common for the both ban modes. Redirecting option is not used
                                                when Whitelist country ban mode is selected.
                                            </div>
                                            Ban Mode :
                                            <a
                                                href="?blacklist"
                                                className="btn btn-md btn-rounded btn-danger ml-2 mr-2"
                                            >
                                                Blacklist
                                            </a>
                                            <a
                                                href="?whitelist"
                                                className="btn btn-md btn-rounded btn-default"
                                            >
                                                Whitelist
                                            </a>
                                            <hr />
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
                                            <h3 className="card-title">Add Country</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal" action="" method="post">
                                                <div className="form-group" data-select2-id={5}>
                                                    <label className="control-label">Country: </label>
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
                                                    <input name="url" className="form-control" type="url" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer">
                                            <button
                                                className="btn btn-flat btn-danger btn-block"
                                                name="add-country"
                                                type="submit"
                                            >
                                                Add
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
