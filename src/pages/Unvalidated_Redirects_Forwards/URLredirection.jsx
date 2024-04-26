import React from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'

const URLredirection = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const UnvalidatedRedirects=useDataFetch(`UnvalidatedRedirects?domain=${UserData.domain}`,[UserData.domain],[])
    console.log("UnvalidatedRedirects", UnvalidatedRedirects)
  return (
    <div>{
      UnvalidatedRedirects.errors.loading? <LoadingSpinner />:
      UnvalidatedRedirects.errors.error? <span className='error'>{UnvalidatedRedirects.errors.message}</span>:
      UnvalidatedRedirects.data && UnvalidatedRedirects.data.length>0?
      <div>
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>Redirect URL</th>
            </tr>
          </thead>
          <tbody>
            {UnvalidatedRedirects.data.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:
      <div>No data found</div>
      }</div>
  )
}

export default URLredirection