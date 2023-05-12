import React, { Component } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { Link } from "react-router-dom";
export default class Warningpages extends Component {
    render() {
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
                                        <i className="fas fa-file-text" /> Warning Pages
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <Link to="/">
                                                <i className="fas fa-home" /> Admin Panel
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Warning Pages</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Page content*/}
                    {/*===================================================*/}
                    <div className="content">
                        <div className="container-fluid">
                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <i className="fas fa-file-alt" /> Warning Pages
                                </div>
                                {/*Tabs Content*/}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div
                                                className="nav flex-column nav-tabs"
                                                aria-orientation="vertical"
                                            >
                                                <a
                                                    className="nav-link active"
                                                    data-toggle="tab"
                                                    href="#sqli-layout"
                                                    aria-selected="true"
                                                >
                                                    <i className="fas fa-bug" /> SQL Injection
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    href="#proxy-layout"
                                                    aria-selected="false"
                                                >
                                                    <i className="fas fa-globe" /> Proxy
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    href="#spam-layout"
                                                    aria-selected="false"
                                                >
                                                    <i className="fas fa-keyboard" /> Spam
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    href="#banned-layout"
                                                    aria-selected="false"
                                                >
                                                    <i className="fas fa-ban" /> Banned IP
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    href="#bannedc-layout"
                                                    aria-selected="false"
                                                >
                                                    <i className="fas fa-flag" /> Banned Country
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    href="#bannedbr-layout"
                                                    aria-selected="false"
                                                >
                                                    <i className="far fa-window-maximize" /> Blocked Browser
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    href="#bannedos-layout"
                                                    aria-selected="false"
                                                >
                                                    <i className="fas fa-tablet" /> Blocked OS
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    href="#bannedisp-layout"
                                                    aria-selected="false"
                                                >
                                                    <i className="fas fa-wifi" /> Blocked ISP
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    data-toggle="pill"
                                                    role="tab"
                                                    href="#bannedrfr-layout"
                                                    aria-selected="false"
                                                >
                                                    <i className="fas fa-link" /> Blocked Referrer
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <form action="" method="post">
                                                <div className="tab-content">
                                                    <div id="sqli-layout" className="tab-pane fade active show">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text2"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={"Malicious request was detected"}
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                    <div id="proxy-layout" className="tab-pane fade">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text3"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={
                                                                        "Access to the website via Proxy, VPN, TOR is not allowed (Disable Browser Data Compression if you have it enabled)"
                                                                    }
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                    <div id="spam-layout" className="tab-pane fade">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text4"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={
                                                                        "You are in the Blacklist of Spammers and you cannot continue to the website"
                                                                    }
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                    <div id="banned-layout" className="tab-pane fade">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={
                                                                        "You are banned and you cannot continue to the website"
                                                                    }
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                    <div id="bannedc-layout" className="tab-pane fade">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text5"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={
                                                                        "Sorry, but your country is banned and you cannot continue to the website"
                                                                    }
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                    <div id="bannedbr-layout" className="tab-pane fade">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text6"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={
                                                                        "Access to the website through your Browser is not allowed, please use another Internet Browser"
                                                                    }
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                    <div id="bannedos-layout" className="tab-pane fade">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text7"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={
                                                                        "Access to the website through your Operating System is not allowed"
                                                                    }
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                    <div id="bannedisp-layout" className="tab-pane fade">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text8"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={
                                                                        "Your Internet Service Provider is blacklisted and you cannot continue to the website"
                                                                    }
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                    <div id="bannedrfr-layout" className="tab-pane fade">
                                                        <fieldset>
                                                            <center>
                                                                <label>
                                                                    <i className="fas fa-file-alt" /> Page Text:
                                                                </label>
                                                                <textarea
                                                                    name="text9"
                                                                    className="form-control"
                                                                    rows={5}
                                                                    type="text"
                                                                    required=""
                                                                    data-gramm="false"
                                                                    wt-ignore-input="true"
                                                                    defaultValue={
                                                                        "Your referrer url is blocked and you cannot continue to the website"
                                                                    }
                                                                />
                                                            </center>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <br />
                                    <input
                                        type="submit"
                                        className="btn btn-flat btn-success btn-md btn-block"
                                        name="update"
                                        defaultValue="Save"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
