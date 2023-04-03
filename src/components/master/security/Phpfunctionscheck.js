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
export default class Phpfunctionscheck extends Component {

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
                                        <i className="fas fa-check" /> PHP Functions - Security Check
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            PHP Functions - Security Check
                                        </li>
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
                                    <div className="card">
                                        <div className="card-header">
                                            <ul className="nav nav-tabs card-header-tabs">
                                                <li className="nav-item active">
                                                    <a
                                                        href="#f1"
                                                        data-toggle="tab"
                                                        className="nav-link text-center active"
                                                    >
                                                        Command Execution
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="#f2"
                                                        data-toggle="tab"
                                                        className="nav-link text-center"
                                                    >
                                                        PHP Code Execution
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="#f3"
                                                        data-toggle="tab"
                                                        className="nav-link text-center"
                                                    >
                                                        Information Disclosure
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="#f4"
                                                        data-toggle="tab"
                                                        className="nav-link text-center"
                                                    >
                                                        Filesystem Functions
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        href="#f5"
                                                        data-toggle="tab"
                                                        className="nav-link text-center"
                                                    >
                                                        Other
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div id="f1" className="tab-pane fade active show">
                                                    <div className="card card-body bg-light">
                                                        Executing commands and returning the complete output
                                                    </div>
                                                    <br />
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> exec &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Returns last line of commands output
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> passthru &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Passes commands output directly to the browser
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> system &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Passes commands output directly to the browser and
                                                                returns last line
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> shell_exec &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Returns commands output</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> popen &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Opens read or write pipe to process of a command
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> proc_open &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Similar to popen() but greater degree of control
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> pcntl_exec &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Executes a program</pre>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div id="f2" className="tab-pane fade">
                                                    <div className="card card-body bg-light">
                                                        Apart from eval there are other ways to execute PHP code:
                                                        include/require can be used for remote code execution in the
                                                        form of Local File Include and Remote File Include
                                                        vulnerabilities.
                                                    </div>
                                                    <br />
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> assert &nbsp;&nbsp;
                                                            <span className="badge badge-danger">
                                                                Not Disabled
                                                            </span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Identical to eval()</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> create_function &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Create an anonymous (lambda-style) function
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> allow_url_fopen &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>{" "}
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                This option enables the URL-aware fopen wrappers that
                                                                enable accessing URL object like files - File inclusion
                                                                vulnerability
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> allow_url_include
                                                            &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                This option allows the use of URL-aware fopen wrappers
                                                                with the following functions: include, include, require,
                                                                require - File inclusion vulnerability
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div id="f3" className="tab-pane fade">
                                                    <div className="card card-body bg-light">
                                                        Most of these function calls are not sinks. But rather it
                                                        maybe a vulnerability if any of the data returned is
                                                        viewable to an attacker. If an attacker can see phpinfo() it
                                                        is definitely a vulnerability.
                                                    </div>
                                                    <br />
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> phpinfo &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Outputs information about PHP's configuration
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> expose_php &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Adds your PHP version to the response headers and this
                                                                could be used for security exploits
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> display_errors &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Shows PHP errors to the client and this could be used
                                                                for security exploits
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> display_startup_errors
                                                            &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Shows PHP startup sequence errors to the client and this
                                                                could be used for security exploits
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> posix_getlogin &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Return login name</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> posix_ttyname &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Determine terminal device name
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> getenv &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gets the value of an environment variable
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> get_current_user
                                                            &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gets the name of the owner of the current PHP script
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> proc_get_status &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Get information about a process opened by proc_open()
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> get_cfg_var &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gets the value of a PHP configuration option
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> getcwd &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gets the current working directory
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> getmygid &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Get PHP script owner's GID
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> getmyinode &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gets the inode of the current script
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> getmypid &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Gets PHP's process ID</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> getmyuid &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gets PHP script owner's UID
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div id="f4" className="tab-pane fade">
                                                    <div className="card card-body bg-light">
                                                        According to RATS all filesystem functions in PHP are nasty.
                                                        Some of these don't seem very useful to the attacker. Others
                                                        are more useful than you might think. For instance if
                                                        allow_url_fopen=On then a url can be used as a file path, so
                                                        a call to copy($_GET['s'], $_GET['d']); can be used to
                                                        upload a PHP script anywhere on the system. Also if a
                                                        website is vulnerable to a request send via GET everyone of
                                                        those file system functions can be abused to channel and
                                                        attack to another host through your server.
                                                    </div>
                                                    <br />
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> chgrp &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Changes file group</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> chmod &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Changes file mode</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> chown &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Changes file owner</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> lchgrp &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Changes group ownership of symlink
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> lchown &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Changes user ownership of symlink
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> link &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Create a hard link</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> symlink &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Creates a symbolic link</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> tempnam &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Create file with unique file name
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> touch &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Sets access and modification time of file
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> ftp_get &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Downloads a file from the FTP server
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> ftp_nb_get &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Read from filesystem</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> ftp_put &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Uploads a file to FTP server
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> ftp_nb_put &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Stores a file on FTP server (non-blocking)
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> filegroup &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Gets file group</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> fileinode &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Gets file inode</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> fileowner &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Gets file owner</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> fileperms &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Gets file permissions</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> linkinfo &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gets information about a link
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> stat &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gives information about a file
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> fstat &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gives information about a file
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> lstat &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Gives information about a file or symbolic link
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> readlink &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Returns target of a symbolic link
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> bzopen &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Opens a bzip2 compressed file
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> gzopen &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Open gz-file</pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> gzfile &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Read entire gz-file into an array
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> readgzfile &nbsp;&nbsp;
                                                            <span className="badge badge-danger">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">Output a gz-file</pre>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div id="f5" className="tab-pane fade">
                                                    <br />
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> extract &nbsp;&nbsp;
                                                            <span className="badge badge-warning">Not Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Opens the door for register_globals attacks
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> putenv &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Sets value of an environment variable
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> proc_nice &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Change the priority of current process
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> proc_terminate &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Kills a process opened by proc_open
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> proc_close &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Close a process opened by proc_open() and return the
                                                                exit code of that process
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> apache_child_terminate
                                                            &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Terminate apache process after request
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> posix_kill &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Send a signal to a process
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> posix_setpgid &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Set process group id for job control
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> posix_setsid &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Make current process a session leader
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                    <div className="callout callout-default">
                                                        <h6>
                                                            <i className="fas fa-code" /> posix_setuid &nbsp;&nbsp;
                                                            <span className="badge badge-success">Disabled</span>
                                                            <br />
                                                            <br />
                                                            <pre className="breadcrumb">
                                                                Set UID of current process
                                                            </pre>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-info-circle" /> Information &amp; Tips
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            On this page you can see which vulnerable PHP Functions are
                                            enabled on your host.
                                            <br />
                                            If you decide you can disable them from the php.ini file on your
                                            host.
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fab fa-php" /> How to Disable PHP Functions
                                            </h3>
                                        </div>
                                        <div className="card-body">
                                            <ol>
                                                <li>
                                                    Open the <b>php.ini</b> file of your website
                                                </li>
                                                <li>
                                                    Find <b>disable_functions</b> variable and set it as follows
                                                    for example: <br />
                                                    <br />
                                                    <pre className="breadcrumb">
                                                        disable_functions =
                                                        exec,passthru,shell_exec,system,proc_open,popen
                                                    </pre>
                                                </li>
                                                <li>
                                                    Save and close the file. Restart the HTTPD Server (Apache)
                                                </li>
                                            </ol>
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
