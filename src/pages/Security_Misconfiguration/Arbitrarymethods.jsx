import React from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'
const Arbitrarymethods = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const postSessionData=useDataFetch(`SecurityMisconfiguration/arbitrary-methods?domain=${UserData.domain}`,[UserData.domain])
    console.log("postSessionData", postSessionData)
  return (
    <div>
    {postSessionData.errors.loading ? <LoadingSpinner /> : postSessionData.errors.error ? <span className='error'>{postSessionData.errors.message}</span> :
     <table className="table table-striped">
     <tbody>
       {postSessionData.data && postSessionData.data.length > 0 ? (
        <>
        <tr>
         Arbitary  Methods Enabled
        </tr>
        {
           postSessionData.data.map((obj, index) => (
            <tr key={index}>
              {Object.entries(obj).map(([key, value]) => (
                <React.Fragment key={key}>
                  <td><strong className="text-capitalize">{key}</strong></td>
                  <td>{value}</td>
                </React.Fragment>
              ))}
            </tr>
          ))
        }
        </>
       ) : (
         <tr>
           <td colSpan="2">Arbitary Methods Not Found</td>
         </tr>
       )}
     </tbody>
   </table>
    }
  </div>
  )
}

export default Arbitrarymethods