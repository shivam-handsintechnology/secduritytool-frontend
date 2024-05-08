import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { usePostData, useDataFetch, useDeleteData } from "../../../hooks/DataFetchHook";
import { PaginationComponent } from "../../../hooks/PaginationComponent";
import LoadingSpinner from "../../../components/LoaderAndError/loader";
import { useDispatch, useSelector } from "react-redux";

import { WEBSOCKET_CONNECT,RECEIVE_MESSAGE,WEBSOCKET_SEND_MESSAGE, socket } from "../../../redux/reducers/websocketReducer";
const AllLogs = () => {
  const [limit, setLimit] = useState(5)
  const [pageNumber, setPageNumber] = useState(1)
  const PostDomain = usePostData()
  const { handleSubmit, Data } = useDeleteData()
  const { type } = useParams()

  let columns = [
    { name: "Id", selector: "_id", sortable: true },
    { name: "Ip", selector: "ip", sortable: true },
    { name: "Browser", selector: "browser", sortable: true },
    { name: "Country", selector: "country", sortable: true },
    { name: "Date", selector: "date" },
    { name: "Os", selector: "os" },
    {
      name: "Action",
      cell: (rowData) => (
        <>
          <Link to={`/Visitordetails/${rowData.ip}`} className="btn btn-success mr-1">
            Details
          </Link>

          <Button
            variant="danger acasd mr-1"
            onClick={(e) => handleSubmit(`injections/${rowData.ip}`)}
          >
            Delete
          </Button>


          <Button
            variant="btn btn-primary acasd"
            onClick={(e) => {
              PostDomain.handleSubmit(e, `security/blacklist/`, { ip: rowData.ip });
            }}
          >
            Add To Black List
          </Button>

        </>
      ),
      width: "28%",
    },
  ]
  const { domain } = useSelector((state) => state.UserReducer)
  const getAlLLogs = useDataFetch(`injections?limit=${limit}&&type=${type}&page=${pageNumber}`, [pageNumber, domain, type, PostDomain.Data, Data])
  const { connection, messages } = useSelector((state) => state.websocketReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(WEBSOCKET_CONNECT());
  }, []);
  useEffect(() => {
    dispatch(WEBSOCKET_CONNECT());
    socket &&   socket.on("sql-injection", (message) => {
      dispatch(RECEIVE_MESSAGE(message));
    }
    );
  }, [socket]);
  

  const handleNavigate = (path) => {
    // Close the WebSocket connection before navigating to the new page
  
    // Navigate to the new page
    navigate(path);
  };
console.log(messages,"messages")

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
                  <i className="fas fa-align-justify text-capitalize" /> {type} Logs
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
                    {type} Logs
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
            {type === "SQLI" ? (
              <>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-primary card-outline">
                      <div className="card-header">
                        <h3 className="card-title heading-title text-capitalize">
                          {type} Injection Logs
                        </h3>
                        <button
                          onClick={() => {
                            socket && socket.emit('sql-injection',`https://${domain}`);
                          }}
                        >
                        Scan Website
                        </button>
                     
                      </div>
                      <div className="card-body ">
                        {
                          messages.length > 0 && messages.map((message, index) => {
                            return <div key={index}>{message}</div>;
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ):
            (
            <>
             <div className="row">
              <div className="col-md-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title heading-title text-capitalize">{type} Injection Logs</h3>
                    {type=="SQLI" &&          <button type="button" onClick={() =>dispatch(WEBSOCKET_SEND_MESSAGE('https://mlsdev.sblcorp.com')) }>Send Message</button>
}
                    {/* <button
                      onClick={() => {
                        deleteAllSqllLogs();
                      }}
                      className="btn btn-flat btn-danger btn-sm float-sm-right p-2" style={{ fontSize: "17px" }}
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Delete all Spammer logs"
                    >
                      <i className="fas fa-trash" /> Delete All
                    </button> */}
                  </div>
                  <div className="card-body ">
                    
                    {
                      getAlLLogs.errors.loading ? (
                        <LoadingSpinner />
                      ) : getAlLLogs.errors.error ? (
                        <span className="error">{getAlLLogs.errors.message}</span>
                      ) :
                        getAlLLogs.data && getAlLLogs.data.data.length > 0 ? (
                          <div>
                            {
                              type === "html" && <>
                                <p><strong>Warning:</strong> When sending HTML data, please be aware of the risks associated with HTML injection attacks. HTML injection occurs when malicious code is injected into HTML content, potentially leading to security vulnerabilities such as cross-site scripting (XSS). To mitigate these risks:</p>
                                <ol>
                                  <li>Sanitize user input: Use libraries or functions to remove any HTML tags or special characters that could be exploited for injection.</li>
                                  <li>Encode output: Encode HTML content before displaying it to users to prevent the browser from interpreting it as executable code.</li>
                                  <li>Consider encryption: If transmitting sensitive HTML data, encrypt it to ensure confidentiality and protect against unauthorized access.</li>
                                </ol>
                                <p>By following these best practices, you can enhance the security of your data and applications. If you have any questions or need assistance with secure data handling, feel free to reach out.</p>
                              </>
                            }
                            {/* Render pagination component */}

                            <PaginationComponent
                              columns={columns}
                              data={getAlLLogs.data.data}
                              pageNumber={pageNumber}
                              setPageNumber={setPageNumber}
                              totalPages={getAlLLogs.data.totalPages}
                              showData={true}
                            />
                          </div>
                        ) : (
                          <h1>No Data Found</h1>
                        )}
                  </div>
                </div>
              </div>
            </div>
            </>
            )
            }
           
          </div>
        </div>
        {/*===================================================*/}
        {/*End page content*/}
      </div>

    </div>
  );
};

export default AllLogs;
