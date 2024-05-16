import React from 'react'
import { useDataFetch } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'
const Adversaryemailidsspaming = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const emailHarvesting = useDataFetch(`SensitiveDataExposure/email-harvesting?domain=${UserData.domain}&&complete=true`, [UserData.domain],[]);
  console.log("emailHarvesting", emailHarvesting)
  return (
    <div>
      {
        emailHarvesting.errors.loading ? <LoadingSpinner /> : emailHarvesting.data.length > 0 ? <div>
          <h1>Email Harvesting</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {
                emailHarvesting.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item._id}</td>
                      <td>{item.count}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div> : <div>
          <h1>Email Harvesting</h1>
          <p>No Data Found</p>
        </div>
      }
    </div>
  )
}

export default Adversaryemailidsspaming