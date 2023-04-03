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
export default class Otherbans extends Component {

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
                                        <i className="fas fa-desktop" /> Other Bans
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">Other Bans</li>
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
                                <div className="col-md-6">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">Ban Browser, OS, ISP or Referrer</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal" action="" method="post">
                                                <div className="form-group">
                                                    <label className="control-label">
                                                        Browser, OS, ISP or Referrer:{" "}
                                                    </label>
                                                    <input
                                                        name="value"
                                                        className="form-control"
                                                        type="text"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Type: </label>
                                                    <select name="type" className="form-control" required="">
                                                        <option value="browser" selected="">
                                                            Browser
                                                        </option>
                                                        <option value="os">Operating System</option>
                                                        <option value="isp">Internet Service Provider</option>
                                                        <option value="referrer">Referrer</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer">
                                            <button
                                                className="btn btn-flat btn-block btn-danger"
                                                name="block"
                                                type="submit"
                                            >
                                                Ban
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                Blocked <strong>Internet Service Providers</strong>
                                            </h3>
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
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                Blocked <strong>Browsers</strong>
                                            </h3>
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
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                Blocked <strong>Operating Systems</strong>
                                            </h3>
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
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                Blocked <strong>Referrers</strong>
                                            </h3>
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
