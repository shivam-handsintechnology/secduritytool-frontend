import React from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'
const Serverreturnserror = (props) => {
  const UserData = useSelector((state) => state.UserReducer)

  const postSessionData=useDataFetch(`ErrorMessage/403error-message?domain=${UserData.domain}`,[UserData.domain])
    console.log("postSessionData", postSessionData)
  return (
    <div>
      {props.Goback}
      {postSessionData.errors.loading ? (
        <LoadingSpinner />
      ) : postSessionData.errors.error ? (
        <p>{postSessionData.errors.message}</p>
      ) : (
        <>
        <div className='m-2'>
                <h1>Server returns 403 error message: {postSessionData.data && postSessionData.data.length > 0 ? "Yes" : "No"}</h1>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th>Name</th>
                    </tr>
                    {postSessionData.data && postSessionData.data.length > 0 ? postSessionData.data.map((item, index) => (
                      <tr key={index}>
                        <td><i class="fa fa-check" style={{
                          background: "#002446", borderRadius: "50%",
                          padding: "3px", marginRight: "5px", color: 'white', marginLeft: "5px",
                        }}></i>{item.name}</td>
                      </tr>
                    )) : <tr>
                      <td colSpan="2">No data available</td>
                    </tr>}
                  </tbody>
                </table>
        </div>
        </>
      )}
    </div>
  )
}

export default Serverreturnserror