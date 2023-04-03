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
export default class Loginsecurity extends Component {
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
                                    <h1 className="m-0">
                                        <i className="fas fa-info-circle" /> Login History
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to="/">
                                                <i className="fas fa-home" /> Admin Panel
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Login History</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Page content*/}
                    {/*===================================================*/}
                    <div className="content">
                        <div className="container-fluid">
                            <DataTable
                                title="Login History"
                                columns={columns}
                                data={data}
                                pagination
                                highlightOnHover
                            />
                        </div>
                        {/*===================================================*/}
                        {/*End page content*/}
                    </div>
                    {/*===================================================*/}
                    {/*END CONTENT CONTAINER*/}
                </div>

                <Footer />
            </div>
        );
    }
}
