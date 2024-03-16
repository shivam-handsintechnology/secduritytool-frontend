import React, { useEffect, useState } from "react";
import Headers from "../../../components/Layout/Header";
import Menu from "../../../components/Layout/Menu";
import Footer from "../../../components/Layout/Footer";
import axios from "axios";
import LoadingSpinner from "../../../loader";
export default function SocketChecker() {
  const [EmailHarvests, setEmailHarvests] = useState([]);
  const [EmailHarvestsError, setEmailHarvestsError] = useState(false);
  const [EmailHarvestsErrorMessage, setEmailHarvestsErrorMessage] = useState("");
  const [EmailHarvestsLoading, setEmailHarvestsLoading] = useState(false);
  // const [DefaultwebPageData, setDefaultwebPageData] = useState(null)
  const [OptionMethod, setOptionMethod] = useState(null)
  const [SensitiveInfoInUrl, setSensitiveInfoInUrl] = useState([])
  const [SensitiveInfoInBody, setSensitiveInfoInBody] = useState([])

  useEffect(() => {
    getSpamEmailData();
    // getDefaultPage();
    getSensitiveInfoInUrl()
    getSensitiveInfoInBody()
  }, []);
  const getSpamEmailData = () => {
    setEmailHarvestsLoading(true);
    axios
      .get("security/test/EmailHarvestingsData")
      .then((r) => {
        const { data, message, statusCode } = r;
        if (statusCode === 200) {
          setEmailHarvestsLoading(false);
          setEmailHarvests(data);
        } else if (statusCode === 404) {
          setEmailHarvestsLoading(false);
          setEmailHarvestsErrorMessage("records are not found");
          setEmailHarvestsError(true);
        }
      })
      .catch((e) => {
        setEmailHarvestsLoading(false);
        setEmailHarvestsErrorMessage("internal server error");
        setEmailHarvestsError(true);
      });
  };
  const getSensitiveInfoInUrl = () => {

    axios
      .get("security/test/sensitiveinfoinurl")
      .then((r) => {
        const { data, message, statusCode } = r;
        if (statusCode === 200) {

          setSensitiveInfoInUrl(data);
        } else if (statusCode === 404) {
          console.log("not found")
        }
      })
      .catch((e) => {
        console.log(e)
      });
  };
  const getSensitiveInfoInBody = () => {

    axios
      .get("security/test/sensitiveinfoinbody")
      .then((r) => {
        const { data, message, statusCode } = r;
        if (statusCode === 200) {
          setSensitiveInfoInBody(data);
        } else if (statusCode === 404) {
          console.log("not found")
        }
      })
      .catch((e) => {
        console.log(e)
      });
  };

  // const getDefaultPage = () => {
  //   axios
  //     .get("security/test/defaultwebpage")
  //     .then((r) => {
  //       const { data, message, statusCode } = r;
  //       if (statusCode === 200) {
  //         setDefaultwebPageData(data.DefaulWebPage)

  //       } else if (statusCode === 404) {
  //         setDefaultwebPageData("Not Found")
  //         console.log("data not found");
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  return (
    <div>
      <div>
        {/*CONTENT CONTAINER*/}
        {/*===================================================*/}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 ">
                  <i className="fas fa-exclamation-circle" /> Email Monitoring
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="dashboard.php">
                      <i className="fas fa-home" /> Admin Panel
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Email Monitoring </li>
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
              <div className="col-md-4">
                {EmailHarvestsLoading ? (
                  <LoadingSpinner />
                ) : EmailHarvestsError ? (
                  <div>{EmailHarvestsErrorMessage}</div>
                ) : (
                  <>
                    <h3>Spam Emails</h3>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Email</th>
                        </tr>
                      </thead>
                      {EmailHarvests.map((v, i) => {
                        return (
                          <tbody>
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>{v.email}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </>
                )}
              </div>
              <div className="col-md-4">
                {
                  SensitiveInfoInBody ? (<>
                    <h3>sansitive information in Http response</h3>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">sensitive words</th>
                        </tr>
                      </thead>
                      {SensitiveInfoInBody.map((v, i) => {
                        return (
                          <tbody>
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>{v?.sensitivekeys}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </>)
                    : (<div>

                    </div>)
                }
              </div>
              <div className="col-md-4">
                {
                  SensitiveInfoInUrl ? (<>
                    <h3>sansitive information in Http Url</h3>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">sensitive word</th>
                          <th scope="col">Url</th>
                        </tr>
                      </thead>
                      {SensitiveInfoInUrl.map((v, i) => {
                        return (
                          <tbody>
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>{v?.sensitiveWord}</td>
                              <td>{v?.url}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </>)
                    : (<div>

                    </div>)
                }
              </div>
            </div>
          </div>
        </div>
        {/*===================================================*/}

        {/*===================================================*/}
        {/*End page content*/}
      </div>

    </div>
  );
}
