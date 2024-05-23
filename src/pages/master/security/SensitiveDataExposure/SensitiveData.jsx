import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import { useDataFetch, useDeleteData } from "../../../../hooks/DataFetchHook";
import { PaginationComponent } from "../../../../hooks/PaginationComponent";
import LoadingSpinner from "../../../../components/LoaderAndError/loader";
const SensitiveData = () => {
  const [limit, setLimit] = useState(5)
  const [pageNumber, setPageNumber] = useState(1)
  const { type } = useParams()
  const UserData = useSelector((state) => state.UserReducer);
  let columns = [
    // { name: "Id", selector: "_id", sortable: true },
    { name: "Sensitive Data", selector: "sensitivekeys", sortable: true },
    { name: "Domain", selector: "domain", sortable: true },
    // {
    //   name: "Action",
    //   cell: (rowData) => (
    //     <>
    //       <Button
    //         variant="danger acasd mr-1"
    //         onClick={(e) =>alert(rowData._id)}
    //       >
    //         Delete
    //       </Button>
    //     </>
    //   ),
    //   width: "28%",
    // },
  ]
  const { handleSubmit, Data, errors } = useDeleteData()
  const sensitiveDataHttp = useDataFetch(`SensitiveDataExposure/sensitive-data?limit=${limit}&type=${type}&page=${pageNumber}&domain=${UserData.domain}`, [pageNumber, Data, type, UserData.domain])
  console.log("errors", errors)
  return (
    <div>
      {/* <Headers />
    <Menu /> */}
      <div>
        {/*CONTENT CONTAINER*/}
        {/*===================================================*/}

        {/*Page content*/}
        {/*===================================================*/}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title heading-title">{type == "url" ? "Critical information in URL" : "Sensitive information revealed in HTTP response"} </h3>
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
                      sensitiveDataHttp.errors.loading ? <LoadingSpinner /> : sensitiveDataHttp.errors.error ? <span className="error">{sensitiveDataHttp.errors.message}</span> : sensitiveDataHttp.data && sensitiveDataHttp.data.data && sensitiveDataHttp.data.data.length > 0 ? (
                        <div>
                          {/* Render pagination component */}


                          <div className="card card-primary card-outline">
                            <div className="card-header">
                              <h3 className="card-title heading-title">Sensitive Data</h3>
                            </div>
                            <div className="card-body">
                              <table className="table table-bordered table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Sensitive Key</th>
                                    <th scope="col">Action</th>

                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    sensitiveDataHttp.data.data.map((data, index) => {
                                      return (
                                        <tr key={index}>
                                          <td>{data}</td>
                                          <td><button className="btn btn-danger" disabled={errors.loading} onClick={() => handleSubmit(`SensitiveDataExposure/sensitive-data?type=${type}&key=${data}&domain=${UserData.domain}`)}>Delete</button></td>
                                        </tr>
                                      );
                                    }
                                    )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <h1>No Data Found</h1>
                      )}
                    {
                      sensitiveDataHttp.errors.loading ? <LoadingSpinner /> : sensitiveDataHttp.errors.error ? <span className="error">{sensitiveDataHttp.errors.message}</span> : sensitiveDataHttp.data && sensitiveDataHttp.data.data && sensitiveDataHttp.data.total > 0 ? (
                        <PaginationComponent
                          columns={columns}
                          data={sensitiveDataHttp.data.data}
                          pageNumber={pageNumber}
                          setPageNumber={setPageNumber}
                          totalPages={sensitiveDataHttp.data.total}
                          showData={false}
                        />) :
                        <></>
                    }
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
  )
}

export default SensitiveData