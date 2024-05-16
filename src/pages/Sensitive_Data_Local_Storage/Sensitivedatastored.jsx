import React from 'react'
import { useDataFetch } from '../../hooks/DataFetchHook'
import LoadingSpinner from '../../components/LoaderAndError/loader'

const Sensitivedatastored = () => {
  const SensitiveStorageLocalStorage = useDataFetch(`SensitiveStorageLocalStorage`, [], [])
  console.log("SensitiveStorageLocalStorage", SensitiveStorageLocalStorage)
  return (
    <div>
      {
        SensitiveStorageLocalStorage.errors.loading ? (
          <LoadingSpinner />
        ) : SensitiveStorageLocalStorage.errors.error ? (
          <span className='error'>{SensitiveStorageLocalStorage.errors.message}</span>
        ) :
          (
            <>
              {/* <span>
                Sensitive data is stored in local storage: {SensitiveStorageLocalStorage.data && SensitiveStorageLocalStorage.data[0].SensitiveStorageLocalStorage}
              </span> */}
              <table className="table table-striped">
                <tbody>
                  {SensitiveStorageLocalStorage.data && SensitiveStorageLocalStorage.data.length > 0 ? (
                    SensitiveStorageLocalStorage.data.map((obj, index) => (
                      <tr key={obj._id}>
                        <th>
                          <i className="fa fa-check" style={{
                            background: "#002446", borderRadius: "50%",
                            padding: "3px", color: 'white'
                          }}></i>
                          {obj.key}
                        </th>
                        <td>
                          <strong className="text-capitalize">Sensitive data is stored in local storage</strong>
                          <br />
                          {obj.value && obj.value.length > 0 && (
                            <ul>
                              {obj.value.map((item, index) => (
                                <li className='list-unstyled' key={index}>
                                  <span className="font-weight-bold">{item}</span> 
                                </li>
                              ))}
                            </ul>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )
      }
    </div>
  )
}

export default Sensitivedatastored