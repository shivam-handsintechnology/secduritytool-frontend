
import React from 'react'
import { useSelector, } from 'react-redux'
import { useDataFetch } from '../../hooks/DataFetchHook'
import LoadingSpinner from '../LoaderAndError/loader'
const CrossSiteScriptingXSS = () => {
    const UserData = useSelector((state) => state.UserReducer)
    const CrossSiteScripting = useDataFetch(`CrossSiteScripting?domain=${UserData.domain}`, [UserData.domain], {})
    return (
        <div className="card card-primary card-outline">
        <div className="card-header">
        <h5><i className="fas fa-shield-alt" /> Cross-Site Scripting (XSS)</h5>
        </div>
        <div className="card-body">
     
        
            {
                CrossSiteScripting.errors.loading ? <LoadingSpinner /> :
                    CrossSiteScripting.errors.error ? <div className="error">{CrossSiteScripting.errors.message}</div> :
                    <>
                    <table className="table table-striped">
                            <tbody>
                                {CrossSiteScripting.data && Object.keys(CrossSiteScripting.data).length>0? (
                                 <>
                                 {
                                        Object.keys(CrossSiteScripting.data).map((key, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{key}</td>
                                                    <td>{CrossSiteScripting.data[key]}</td>
                                                </tr>
                                            )
                                        })
                                 }
                                 </>
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

export default CrossSiteScriptingXSS