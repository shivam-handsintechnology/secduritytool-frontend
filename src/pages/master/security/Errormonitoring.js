import React, { useEffect, useState } from "react";
import Headers from "../../../components/Layout/Header";
import Menu from "../../../components/Layout/Menu";
import Footer from "../../../components/Layout/Footer";
import DataTable from "react-data-table-component";
import data from "./data.json";
import axios from "axios";
const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Phone",
    selector: "phone",
    sortable: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
  },
  {
    name: "DOB",
    selector: "dob",
  },
];
export default function Errormonitoring() {
  const [ReadFile, setReadFile] = useState(null);
  const [PasswordValidatorController, setPasswordValidatorController] =
    useState(null);
  const [responsecodes, setresponsecodes] = useState(null);
  const [options, setoptions] = useState(null);
  const [reponsecodeslogin, setreponsecodeslogin] = useState(null);
  const [isClearPassword, setisClearPassword] = useState(null);
  const [
    DefaulusernameValidatorController,
    setDefaulusernameValidatorController,
  ] = useState(null);
  useEffect(() => {
    (async () => {
      // axios.get("/security/test/Servermonitor").then((res) => setReadFile(res));
      axios
        .get("/security/test/PasswordValidatorController")
        .then((res) => {
          setPasswordValidatorController(res.data.PasswordValidatordata)
          setisClearPassword(res.data.clear.isClearPassword)
        });
      axios
        .get("/security/test/responsecodes")
        .then((res) => setresponsecodes(res.data));
      axios
        .get("/security/test/reponsecodeslogin")
        .then((res) => setreponsecodeslogin(res.data));
      axios
        .get("/security/test/DefaulusernameValidatorController")
        .then((res) => setDefaulusernameValidatorController(res.data));
      axios.get("/security/test/options").then((res) => setoptions(res.data));
    })();
  }, []);
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
                  <i className="fas fa-exclamation-circle" /> Error Monitoring
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="dashboard.php">
                      <i className="fas fa-home" /> Admin Panel
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Error Monitoring</li>
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
                    <h3 className="card-title">
                      <i className="fas fa-cogs" /> Settings
                    </h3>
                  </div>
                  <div className="card-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Availability</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PasswordValidatorController ? (
                          Object.keys(PasswordValidatorController).map(
                            (key) => (
                              <tr key={key}>
                                <td>
                                  {key === "PasswordBlank"
                                    ? "Application is allowing blank / invalid passwords"
                                    : key}
                                </td>
                                <td>
                                  {" "}
                                  {key === "isWeakAlgorithm" ? PasswordValidatorController[key] :
                                    PasswordValidatorController[key] === true
                                      ? "Yes"
                                      : "No"}
                                </td>
                              </tr>
                            )

                          )

                        ) : (
                          <></>
                        )}
                        {isClearPassword ?
                          (<tr>
                            <td>Cleartext Password returned in login response</td>
                            <td>{isClearPassword}</td>
                          </tr>) : (<>
                          </>)
                        }
                        {options ? (
                          Object.keys(options).map((key) => (
                            <tr key={key}>
                              <td>
                                {key === "OPTIONSmethodallowed"
                                  ? "OPTIONS method"
                                  : key}
                              </td>
                              <td>
                                {" "}
                                {options[key] === true
                                  ? "OPTIONS method is allowed"
                                  : "OPTIONS method is not allowed"}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <></>
                        )}
                        {DefaulusernameValidatorController ? (
                          Object.keys(DefaulusernameValidatorController).map(
                            (key) => (
                              <tr key={key}>
                                <td>
                                  {key === "DefaultUsermessage"
                                    ? "Application supports default usernames  for logging in the application"
                                    : key && key === "Defaultpadswwordmessage"
                                      ? "Application supports default password  for logging in the application"
                                      : key}
                                </td>
                                <td>
                                  {" "}
                                  {DefaulusernameValidatorController[key] ===
                                    true
                                    ? "Yes"
                                    : "No"}
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
            <div className="row">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fas fa-clipboard-list" /> Runtime Errors
                  </h3>
                </div>
                <div style={{ overflow: "auto", height: "500px" }} className="card-body">
                  {ReadFile?.data !== "File Not Found" ? ReadFile : ReadFile?.data}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-info-circle" /> Server returns HTTP
                      error message
                    </h3>
                  </div>
                  <div style={{ overflow: "auto", height: "500px" }} className="card-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>StatusCodes</th>
                          <th>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {responsecodes ? (
                          responsecodes.map((val) => (
                            <tr>
                              <td>{val.ErrorStatuscode}</td>
                              <td> {val.message}</td>
                            </tr>
                          ))
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-info-circle" /> Helpful error message
                      displayed at login page
                    </h3>
                  </div>
                  <div style={{ overflow: "auto", height: "500px" }} className="card-body">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>StatusCodes</th>
                          <th>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reponsecodeslogin ? (
                          reponsecodeslogin.map((val) => (
                            <tr>
                              <td>{val.ErrorStatuscode}</td>
                              <td> {val.message}</td>
                            </tr>
                          ))
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
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