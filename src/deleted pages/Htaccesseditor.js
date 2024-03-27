import React, { Component } from "react";
import Headers from "../../../components/Layout/Header";
import Menu from "../../../components/Layout/Menu";
import Footer from "../../../components/Layout/Footer";
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
export default class Htaccesseditor extends Component {
    render() {
        return (
            <div>
                {/* <Headers />
                <Menu /> */}
                <div>
                    {/*CONTENT CONTAINER*/}
                    {/*===================================================*/}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 ">
                                        <i className="fas fa-columns" /> .htaccess Editor
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">.htaccess Editor</li>
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
                                                <i className="far fa-file-code" />
                                                &nbsp; .htaccess Editor
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <form method="post">
                                                <div className="row">
                                                    <div
                                                        className="col-md-8"
                                                        data-quillbot-parent="LDp9XTbpjrztr5mWyANFp"
                                                    >
                                                        <textarea
                                                            className="form-control"
                                                            name="htaccess"
                                                            rows={20}
                                                            type="text"
                                                            data-gramm="false"
                                                            wt-ignore-input="true"
                                                            data-quillbot-element="LDp9XTbpjrztr5mWyANFp"
                                                            defaultValue={""}
                                                        />
                                                        <quillbot-extension
                                                            data-element-id="LDp9XTbpjrztr5mWyANFp"
                                                            style={{
                                                                position: "absolute",
                                                                top: 0,
                                                                left: 0,
                                                                pointerEvents: "none"
                                                            }}
                                                        />
                                                        <quillbot-extension-highlights
                                                            data-element-id="LDp9XTbpjrztr5mWyANFp"
                                                            data-element-type="text"
                                                            style={{
                                                                position: "absolute",
                                                                top: 0,
                                                                left: 0,
                                                                pointerEvents: "none"
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p>
                                                            Please double check them before saving as a mistake could
                                                            make your website inaccessible.
                                                        </p>
                                                        <ul className="description">
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    data-toggle="tooltip"
                                                                    title=""
                                                                    target="_blank"
                                                                    data-original-title="Search for htaccess tutorials"
                                                                >
                                                                    <img
                                                                        width="16px"
                                                                        src="http://google.com/favicon.ico"
                                                                        alt="google favicon"
                                                                    />{" "}
                                                                    htaccess tutorial
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    data-toggle="tooltip"
                                                                    title=""
                                                                    target="_blank"
                                                                    data-original-title="Read about htaccess at apache.org"
                                                                >
                                                                    <img
                                                                        width="16px"
                                                                        src="http://apache.org/favicon.ico"
                                                                        alt="apache favicon"
                                                                    />{" "}
                                                                    htaccess
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    data-toggle="tooltip"
                                                                    title=""
                                                                    target="_blank"
                                                                    data-original-title="Read about mod_rewrite at apache.org"
                                                                >
                                                                    <img
                                                                        width="16px"
                                                                        src="https://apache.org/favicon.ico"
                                                                        alt="apache favicon"
                                                                    />{" "}
                                                                    mod_rewrite
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-right">
                                            <input
                                                className="btn btn-block btn-primary"
                                                type="submit"
                                                name="ht-edit"
                                                defaultValue="Save all changes"
                                            />
                                        </div>
                                    </div>
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-receipt" /> Common Usage
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <ul>
                                                <li>
                                                    <strong>Authorization, authentication</strong>
                                                </li>
                                                A .htaccess file is often used to specify security restrictions
                                                for a directory, hence the filename "access". The .htaccess file
                                                is often accompanied by a .htpasswd file which stores valid
                                                usernames and their passwords.
                                                <li>
                                                    <strong>Rewriting URLs</strong>
                                                </li>
                                                Servers often use .htaccess to rewrite long, overly
                                                comprehensive URLs to shorter and more memorable ones.
                                                <li>
                                                    <strong>Blocking</strong>
                                                </li>
                                                Use allow/deny to block users by IP address or domain. Also, use
                                                to block bad bots, rippers and referrers. Often used to restrict
                                                access by Search Engine spiders
                                                <li>
                                                    <strong>SSI</strong>
                                                </li>
                                                Enable server-side includes.
                                                <li>
                                                    <strong>Directory listing</strong>
                                                </li>
                                                Control how the server will react when no specific web page is
                                                specified.
                                                <li>
                                                    <strong>Customized error responses</strong>
                                                </li>
                                                Changing the page that is shown when a server-side error occurs,
                                                for example HTTP 404 Not Found or, to indicate to a search
                                                engine that a page has moved, HTTP 301 Moved Permanently.
                                                <li>
                                                    <strong>MIME types</strong>
                                                </li>
                                                Instruct the server how to treat different varying file types.
                                                <li>
                                                    <strong>Cache Control</strong>
                                                </li>
                                                .htaccess files allow a server to control caching by web
                                                browsers and proxies to reduce bandwidth usage, server load, and
                                                perceived lag.
                                            </ul>
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
                                            A .htaccess (hypertext access) file is a directory-level
                                            configuration file supported by several web servers, that allows
                                            for decentralized management of web server configuration. They are
                                            placed inside the web tree, and are able to override a subset of
                                            the server's global configuration for the directory that they are
                                            in, and all sub-directories.
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
