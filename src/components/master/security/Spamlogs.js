import React, { useEffect, useState } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import DataTable from "react-data-table-component";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import useFetchApi from "../../../customhooks/useFetchApi";
import axios from "axios";
import { toast } from "react-toastify";
import UseCustomTable from "../../../utils/DataTable";
const SpamLogs = () => {
  const [data, setData] = useState([]);
  const [isApiCall, setisAPiCall] = useState(null)
  const [NoOfPagesFromApi, setNumberOfPagesFromAPi] = useState(null);
  const history = useNavigate();
  async function AddIpaddres(body) {
    await axios
      .post(`security/ip/blacklist/add`, body)
      .then((response) => {
        setisAPiCall(response)
        toast.success(response.message);
        return response;
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  useEffect(() => {
    AlbadBotlogs();
  }, [isApiCall]);
  const AlbadBotlogs = async () => {
    const response = await axios.get("security/spamlogs");
    console.log({ response: response.data });

    setData(response.data);
    setNumberOfPagesFromAPi(response.data.length)
  };
  //  console.log({bots:data})
  // const {data,deleteSingleSqllLogs,deleteAllSqllLogs}=UseSqlLogsContext()
  function deleteSingleSqllLogs(body) {
    axios
      .post(`security/spamlogs/deletesingle`, body)
      .then((response) => {
        const { message, statusCode } = response;
        if (statusCode == 200) {
          setisAPiCall(response)
          toast.success(message);
        }
      })
      .catch((error) => {
        const { data, message, statusCode } = error;
        toast.error(message);
      });
  }

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
      cell: (params) => [
        <Link to={"/Visitordetails/" + params.ip} className="btn btn-primary">
          Details
        </Link>,
        <Button
          variant="danger acasd"
          onClick={() => {
            deleteSingleSqllLogs({ ip: params.ip });

          }}
        >
          Delete
        </Button>,
        <Button
          variant="danger acasd"
          onClick={() => {
            AddIpaddres({ ip: params.ip });

          }}
        >
          Add To Blacklist
        </Button>,
      ],
      width: "28%",
    },
  ];
  const { table, } = UseCustomTable(columns, data, NoOfPagesFromApi)
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
                  <i className="fas fa-align-justify" /> Bad Bot Logs
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="dashboard.php">
                      <i className="fas fa-home" /> Admin Panel
                    </a>
                  </li>
                  <li className="breadcrumb-item active"> Bad Bot Logs</li>
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
                    <h3 className="card-title">Bad Bot Logs</h3>
                    <a
                      href="#"
                      className="btn btn-flat btn-danger btn-sm float-sm-right"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Delete all Spammer logs"
                    >
                      <i className="fas fa-trash" /> Delete All
                    </a>
                  </div>
                  <div className="card-body">
                    {table}
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
export default SpamLogs;
