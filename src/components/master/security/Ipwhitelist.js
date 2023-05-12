import React, { Component, useEffect, useState } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import DataTable from 'react-data-table-component';
import data from './data.json';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
export default function Ipwhitelist() {
    const [ipaddress, setipaddress] = useState("")
    const [data, setData] = useState([])
    const [isError, setisError] = useState(false)
    const [isErrorMessage, setisErrorMessage] = useState("")
  async function  AddIpaddres(e) {
         e.preventDefault()
         await axios.post(`security/ip/add`,{ip:ipaddress}).then(response=>{
        toast.success(response.message)
         return response
        }).catch(error=>{
            toast.error(error.message)
        })
     }
  async function deleteSingleSqllLogs(body) {
    console.log(body.ip)
     await axios.delete(`security/ip?ip=${body.ip}`,
       ).then((response)=>{
          const {message,statusCode}=response
                 if(statusCode===200){
                      toast.success(message)
                  }
       }).catch((error)=>{
          const {message}=error
          toast.error(message)
       })
  }
  const  getAllSqllLogs=(async()=> {
      await axios.get(`security/ip/all`).then((response)=>
      {
       const {data,message,statusCode}=response
       if(statusCode===404) {
        setisError(true)
        setisErrorMessage(message)
       }
       let ArrayOfdta=[]
        data.map((value)=>{
        ArrayOfdta.push({ip:value.ip})
        })
        setData(ArrayOfdta)
      }
      ).catch((error)=>{
        console.log(error)
        // setisError(true)
        // setisErrorMessage(error.message)
    })
      })
 
    const history=useNavigate()
    useEffect(() => {
        getAllSqllLogs()
    }, [])
    const columns = [
        {
            name: 'Ip',
            selector: 'ip',
            sortable: true,
        },
       
        {
            name: "Action",

            selector: (row) => [
               <Button
               variant="danger acasd"
               onClick={() => { 
                deleteSingleSqllLogs({ip:row.ip}
                    )
                    // history("/")
            }}
             >
               Delete
             </Button>,
            ],
            width: "28%",
          },
    ];
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
                                            {
                                                isError?isErrorMessage: <DataTable
                                                title="Login History"
                                                columns={columns}
                                                data={data}
                                                pagination
                                                highlightOnHover
                                            />
                                            }
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">Add IP Address</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form-horizontal" onSubmit={AddIpaddres} >
                                                <div className="form-group">
                                                    <label className="control-label">IP Address: </label>
                                                    <input
                                                        type="text"
                                                        onChange={(e)=>{setipaddress(e.target.value)}}
                                                        className="form-control"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="card-footer">
                                            <button
                                                className="btn btn-block btn-flat btn-primary"
                                                name="add"
                                                type="submit"
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


                <Footer />
            </div>
        );
 
}
