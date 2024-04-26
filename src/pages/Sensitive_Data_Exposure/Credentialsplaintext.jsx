import React from 'react'
import useDataFetch from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'
const CredentialsPlaintext = () => {
    const UserData = useSelector((state) => state.UserReducer)
    const Cleartextpassword = useDataFetch(`SensitiveDataExposure/server-plain-text?domain=${UserData.domain}`, [UserData.domain])
    console.log("Cleartextpassword", Cleartextpassword)
    return (
        <div>
            {
                Cleartextpassword.errors.loading ? <LoadingSpinner /> :
                    Cleartextpassword.errors.error ? <span className='error'>{Cleartextpassword.errors.message}</span> :
                        <div>{Cleartextpassword.data ? (
                            <>
                                {Cleartextpassword.data.key.length > 0 ? <div className='text-center'>Sensitive data is transmitted to server in plain text:Yes</div>:<div className='text-center'>Sensitive data is transmitted to server in plain text:No</div>}
                                {
                                    Cleartextpassword.data.key.length > 0 &&
                                    Cleartextpassword.data.key.map((item, index) => (
                                        <div key={index}>
                                            <div>{item}</div>
                                        </div>
                                    ))

                                }
                            </>
                        ) : <div>No Data</div>
                        }</div>
            }
        </div>
    )
}

export default CredentialsPlaintext