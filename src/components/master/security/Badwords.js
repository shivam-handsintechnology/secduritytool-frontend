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
export default class Badwords extends Component {

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
                                        <i className="fas fa-filter" /> Protection Module
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
                                            <h3 className="card-title">Bad Words - Protection Module</h3>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="pm_enabled">
                                                <i className="fas fa-check-circle" /> Enabled
                                            </h1>
                                            <p>
                                                The bad words are <strong>Filtered</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Bad Words</h3>
                                            <button
                                                data-target="#add"
                                                data-toggle="modal"
                                                className="btn btn-flat btn-primary btn-sm float-sm-right"
                                            >
                                                <i className="fas fa-plus-circle" /> Add Bad Word
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <form
                                                action=""
                                                method="post"
                                                className="form-horizontal form-bordered"
                                            >
                                                <div className="form-group">
                                                    <label className="control-label">
                                                        <i className="fas fa-pen-square" /> Replacement Word
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="badword-replace"
                                                        defaultValue="[Censored]"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <button
                                                    type="button submit"
                                                    name="save"
                                                    className="mb-xs mt-xs mr-xs btn btn-flat btn-success btn-sm btn-block"
                                                >
                                                    <i className="fas fa-save" />
                                                    &nbsp;&nbsp;Save
                                                </button>
                                            </form>
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
                                <div className="col-md-4">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-info-circle" /> About Bad Words Filtering
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            This module can be used to censore (hide, replace) bad words,
                                            links and sentences.
                                            <br />
                                            <br />
                                            If there are no bad words added the module is automatically
                                            disabled.
                                            <br />
                                            <br />
                                            The module is working in two ways:
                                            <ul>
                                                <li>
                                                    Filtering bad words in real-time before Output (Page
                                                    Rendering)
                                                </li>
                                                <li>Filtering bad words after POST data is submitted</li>
                                            </ul>
                                            <strong>Replacement Word</strong> - Text (Word) that will be
                                            displayed instead the bad word
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
