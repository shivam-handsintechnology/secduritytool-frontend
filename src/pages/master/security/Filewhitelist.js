import React, { useEffect, useState } from "react";
import Headers from "../../../components/Layout/Header";
import Menu from "../../../components/Layout/Menu";
import Footer from "../../../components/Layout/Footer";
import DataTable from "react-data-table-component";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import UseCustomTable from "../../../utils/DataTable";
export default function FileWhitelist() {
  const [ipaddress, setipaddress] = useState("");
  const [data, setData] = useState([]);
  const [isError, setisError] = useState(false);
  const [isErrorMessage, setisErrorMessage] = useState("");
  const [isApiCall, setisAPiCall] = useState(null)
  const [NoOfPagesFromApi, setNumberOfPagesFromAPi] = useState(null);
  async function AddIpaddres(e) {
    e.preventDefault();
    await axios
      .post(`security/blacklist`, { ip: ipaddress })
      .then((response) => {
        toast.success(response.message);
        setisAPiCall(response)
        return response;
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  async function deleteSingleSqllLogs(body) {
    console.log(body.ip);
    await axios
      .delete(`security/blacklist?ip=${body.ip}`)
      .then((response) => {
        const { message, statusCode } = response;
        if (statusCode === 200) {
          toast.success(message);
          setisAPiCall(response)
        }
      })
      .catch((error) => {
        const { message } = error;
        toast.error(message);
      });
  }
  const getAllSqllLogs = async () => {
    await axios
      .get(`security/blacklist`)
      .then((response) => {
        const { data, message, statusCode } = response;
        if (statusCode === 404) {
          setisError(true);
          setisErrorMessage(message);
        }
        let ArrayOfdta = [];
        data.map((value) => ArrayOfdta.push({ ip: value.ip }));
        setData(ArrayOfdta);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const history=useNavigate()
  useEffect(() => {
    getAllSqllLogs();
  }, [isApiCall]);
  const columns = [
    {
      name: "Ip",
      selector: "ip",
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => [
        <Button
          variant="danger acasd"
          onClick={() => {
            deleteSingleSqllLogs({ ip: row.ip });
            // history("/")
          }}
        >
          Delete
        </Button>,
      ],
      width: "28%",
    },
  ];
  const { table, pageNumber, limit, setLimit } = UseCustomTable(columns, data, NoOfPagesFromApi)
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
                  <i className="fas fa-flag" /> IP Blacklist
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="dashboard.php">
                      <i className="fas fa-home" /> Admin Panel
                    </a>
                  </li>
                  <li className="breadcrumb-item active">IP Blacklist</li>
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
                    {isError ? (
                      isErrorMessage
                    ) : table
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
                    <form className="form-horizontal" onSubmit={AddIpaddres}>
                      <div className="form-group">
                        <label className="control-label">IP Address: </label>
                        <input
                          type="text"
                          onChange={(e) => {
                            setipaddress(e.target.value);
                          }}
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


    </div>
  );
}
