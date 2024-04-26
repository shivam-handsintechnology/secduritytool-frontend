import React from 'react'
import useDataFetch from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'

const SensitiveDataplain = () => {
    const UserData = useSelector((state) => state.UserReducer)
    const sensitiveDataPlain = useDataFetch(`SensitiveDataExposure/server-plain-text?domain=${UserData.domain}`, [UserData.domain])
    console.log("sensitiveDataPlain", sensitiveDataPlain)
    return (
        <div>
            {
                sensitiveDataPlain.errors.loading ? <LoadingSpinner /> :
                    sensitiveDataPlain.errors.error ? <span className='error'>{sensitiveDataPlain.errors.message}</span>  :
                        <div>{sensitiveDataPlain.data ? (
                            <>
                                {sensitiveDataPlain.data.key.length > 0 ? <div className='text-center'>Sensitive data is transmitted to server in plain text:Yes</div>:<div className='text-center'>Sensitive data is transmitted to server in plain text:No</div>}
                                {
                                    sensitiveDataPlain.data.key.length > 0 &&
                                    sensitiveDataPlain.data.key.map((item, index) => (
<li></li>                                                                                                                     
                                    ))

                                }
                            </>
                        ) : <div>No Data</div>
                        }</div>
            }
        </div>
    )
}

export default SensitiveDataplain