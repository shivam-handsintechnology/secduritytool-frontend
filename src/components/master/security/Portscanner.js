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
export default function Portscanner() {
      
        return (
            <div>
                {/* <Headers />
                <Menu /> */}
                <div className="content-wrapper">
                    {/*CONTENT CONTAINER*/}
                    {/*===================================================*/}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 ">
                                        <i className="fas fa-search" /> Port Scanner
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">Port Scanner</li>
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
                                                <i className="fas fa-th-list" /> Scan results for{" "}
                                                <b>psec22.byethost22.com</b>
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover table-sm">
                                                    <thead className="<?php echo $thead; ?>">
                                                        <tr>
                                                            <th>
                                                                <i className="fas fa-dot" /> Port
                                                            </th>
                                                            <th>
                                                                <i className="fas fa-cogs" /> Service
                                                            </th>
                                                            <th>
                                                                <i className="fas fa-info-circle" /> Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>20</td>
                                                            <td>ftp-data</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>21</td>
                                                            <td>ftp</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>22</td>
                                                            <td>ssh</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>23</td>
                                                            <td>telnet</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>25</td>
                                                            <td>smtp</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>53</td>
                                                            <td>domain</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>79</td>
                                                            <td>finger</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>80</td>
                                                            <td>http</td>
                                                            <td>
                                                                <a
                                                                    href="#"
                                                                    target="_blank"
                                                                    className="badge badge-danger"
                                                                >
                                                                    <i className="fas fa-unlock" /> Open
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>110</td>
                                                            <td>pop3</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>115</td>
                                                            <td>sftp</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>119</td>
                                                            <td>nntp</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>135</td>
                                                            <td>epmap</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>137</td>
                                                            <td>netbios-ns</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>138</td>
                                                            <td>netbios-dgm</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>139</td>
                                                            <td>netbios-ssn</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>143</td>
                                                            <td>imap</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>194</td>
                                                            <td>irc</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>389</td>
                                                            <td>ldap</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>443</td>
                                                            <td>https</td>
                                                            <td>
                                                                <a
                                                                    href="#"
                                                                    target="_blank"
                                                                    className="badge badge-danger"
                                                                >
                                                                    <i className="fas fa-unlock" /> Open
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>445</td>
                                                            <td>microsoft-ds</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>465</td>
                                                            <td>urd</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>520</td>
                                                            <td>efs</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>548</td>
                                                            <td>afpovertcp</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>515</td>
                                                            <td>printer</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>587</td>
                                                            <td>submission</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>631</td>
                                                            <td>ipp</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>993</td>
                                                            <td>imaps</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>995</td>
                                                            <td>pop3s</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1080</td>
                                                            <td>socks</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1433</td>
                                                            <td>ms-sql-s</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1434</td>
                                                            <td>ms-sql-m</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1521</td>
                                                            <td>ncube-lm</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1701</td>
                                                            <td>l2tp</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>1723</td>
                                                            <td>pptp</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2082</td>
                                                            <td>infowave</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2086</td>
                                                            <td>gnunet</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2095</td>
                                                            <td>nbx-ser</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3306</td>
                                                            <td>mysql</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3389</td>
                                                            <td>ms-wbt-server</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5432</td>
                                                            <td>postgres</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5900</td>
                                                            <td>vnc-server</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8000</td>
                                                            <td>irdmi</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8080</td>
                                                            <td>webcache</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>11211</td>
                                                            <td>memcache</td>
                                                            <td>
                                                                <font className="badge badge-success">
                                                                    <i className="fas fa-lock" /> Closed
                                                                </font>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-info-circle" /> What is Port Scanning
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            Port Scanning is the name for the technique used to identify open
                                            ports and services available on a network host. Port Scanning is
                                            used to determine which ports are open and vulnerable to attacks.
                                            <br />
                                            <br />
                                            Port Scanning is a slow proccess and can take a while.
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
