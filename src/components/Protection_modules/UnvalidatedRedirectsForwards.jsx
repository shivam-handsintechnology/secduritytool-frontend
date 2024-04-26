
import React from 'react'
import { useSelector, } from 'react-redux'
import { useDataFetch } from '../../hooks/DataFetchHook'
import LoadingSpinner from '../LoaderAndError/loader'
const UnvalidatedRedirectsForwards = () => {
    const UserData = useSelector((state) => state.UserReducer)
    const UnvalidatedRedirects = useDataFetch(`UnvalidatedRedirects?domain=${UserData.domain}`, [UserData.domain], [])
    console.log("UnvalidatedRedirects", UnvalidatedRedirects)
    return (
        <div className="card card-primary card-outline">
        <div className="card-header">
        <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules (Unvalidated Redirects and Forwards)</h5>
        </div>
        <div className="card-body">
     
        
            {
                UnvalidatedRedirects.errors.loading ? <LoadingSpinner /> :
                    UnvalidatedRedirects.errors.error ? <div className="error">{UnvalidatedRedirects.errors.message}</div> :
                    <>
                    <table className="table table-striped">
                            <tbody>
                                {UnvalidatedRedirects.data.length > 0 ? (
                                    UnvalidatedRedirects.data.map((item, index) => (
                                        <tr key={index}>
                                         <td>{item}</td>
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

            }
            </div>
    </div>
       

    )
}

export default UnvalidatedRedirectsForwards