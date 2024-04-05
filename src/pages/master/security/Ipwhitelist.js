import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { usePostData,useDeleteData,useDataFetch } from "../../../hooks/DataFetchHook";
import { PaginationComponent } from "../../../hooks/PaginationComponent";
export default function Ipwhitelist() {
    const [ipaddress, setipaddress] = useState("")
    const [limit, setLimit] = useState(5)
    const [pageNumber, setPageNumber] = useState(1)
    const PostBlackList = usePostData()
    const DeleteBlackList = useDeleteData()
    const GetWhitelistIp = useDataFetch(`security/ip?limit=${limit}&&page=${pageNumber}`, [pageNumber, PostBlackList.Data,DeleteBlackList.Data])
    const columns = [
        {
            name: 'Ip',
            selector: 'ip',
            sortable: true,
        },

        {
            name: "Action",
            cell: (row) => [
                <Button
                    variant="danger acasd"
                    onClick={() => DeleteBlackList.handleSubmit(`security/ip?ip=${row.ip}`) }
                >
                    Delete
                </Button>,
            ],
            width: "28%",
        },
    ];
    console.log("GetWhitelistIp", GetWhitelistIp)
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
                                    {GetWhitelistIp.Data && GetWhitelistIp.Data.data.length > 0 ? (
                      <div>
                        {/* Render pagination component */}

                        <PaginationComponent
                          columns={columns}
                          data={GetWhitelistIp.Data.data}
                          pageNumber={pageNumber}
                          setPageNumber={setPageNumber}
                          totalPages={GetWhitelistIp.Data.totalPages}
                          showData={true}
                        />
                      </div>
                    ) : (
                      <h1>No Data Found</h1>
                    )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h3 className="card-title">Add IP Address</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className="form-horizontal" onSubmit={(e)=>PostBlackList.handleSubmit(e,`security/ip`, { ip: ipaddress })} >
                                            <div className="form-group">
                                                <label className="control-label">IP Address: </label>
                                                <input
                                                    type="text"
                                                    onChange={(e) => { setipaddress(e.target.value) }}
                                                    className="form-control"
                                                    required=""
                                                />
                                            </div>
                                            <div className="card-footer">
                                                <button
                                                    className="btn btn-block btn-flat btn-primary"
                                                    name="add"
                                                    type="button"
                                                    onClick={(e)=>PostBlackList.handleSubmit(e,`security/ip`, { ip: ipaddress })}
                                                >
                                                    <i className="fas fa-plus-square" /> Add
                                                </button>
                                            </div>
                                        </form>
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
