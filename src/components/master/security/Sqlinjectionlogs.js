import React from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
const Sqlinjectionlogs = () => {
  const [Actions, setActions] = useState([]);
  const [data, setData] = useState([]);
  const [iparray, setIparray] = useState([]);
  async function AddIpaddres(body) {
    await axios
      .post(`security/ip/blacklist/add`, body)
      .then((response) => {
        toast.success(response.message);
        return response;
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  async function deleteAllSqllLogs() {
    await axios
      .post(`security/sqllogs/deleteall`, { ip: iparray })
      .then((response) => {
        toast.success(response.message);
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
  function deleteSingleSqllLogs(body) {
    axios
      .post(`security/sqllogs/deletesingle`, body)
      .then((response) => {
        const { message, statusCode } = response;
        if (statusCode === 200) {
          toast.success(message);
        }
      })
      .catch((error) => {
        const { message } = error;
        toast.error(message);
      });
  }
  const getAllSqllLogs = async () => {
    await axios
      .get(`security/sqllogs`)
      .then((response) => {
        const { data } = response;
        let ArrayOfdta = [];
        data.map((value) => {
          setIparray(value.ip);
          ArrayOfdta.push({
            ip: value.ip,
            browser: value.browser,
            country: value.country,
            date: value.date,
            os: value.os,
            Actions,
          });
        });
        setData(ArrayOfdta);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const history = useNavigate();
  useEffect(() => {
    getAllSqllLogs();
  }, []);
  const columns = [
    {
      name: "Ip",
      selector: "ip",
      sortable: true,
    },
    {
      name: "Browser",
      selector: "browser",
      sortable: true,
    },
    {
      name: "Country",
      selector: "country",
      sortable: true,
    },
    {
      name: "Date",
      selector: "date",
    },
    {
      name: "Os",
      selector: "os",
    },
    {
      name: "Action",
      selector: (params) => [
        <Link to={"/Visitordetails/" + params.ip} className="btn btn-primary">
          Details
        </Link>,
        <Button
          variant="danger acasd"
          onClick={() => {
            deleteSingleSqllLogs({ ip: params.ip });
            getAllSqllLogs();
          }}
        >
          Delete
        </Button>,
        <Button
          variant="danger acasd"
          onClick={() => {
            AddIpaddres({ ip: params.ip });

            getAllSqllLogs();
          }}
        >
          Add To Black List
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
                  <i className="fas fa-align-justify" /> SQL Injection Logs
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
                    {" "}
                    SQL Injection Logs
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
              <div className="col-md-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">SQL Injection Logs</h3>
                    <button
                      onClick={() => {
                        deleteAllSqllLogs();
                      }}
                      className="btn btn-flat btn-danger btn-sm float-sm-right"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Delete all Spammer logs"
                    >
                      <i className="fas fa-trash" /> Delete All
                    </button>
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
};

export default Sqlinjectionlogs;
