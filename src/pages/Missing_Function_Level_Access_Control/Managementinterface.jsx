import React from 'react'
import { useSelector } from 'react-redux'
import useDataFetch from '../../hooks/DataFetchHook'
import LoadingSpinner from '../../components/LoaderAndError/loader'

const Managementinterface = () => {
    const { webdomain } = useSelector((state) => state.UserReducer)
    const { data, errors, } = useDataFetch(`MissingFunctionLevelAccessControl/Managementinterface?domain=${webdomain}`,[webdomain])
    console.log("data", data)
    console.log("errors", errors)
    return (
        <div>
            Is the management interface restricted to specific IPs:{errors.loading ? <LoadingSpinner /> : errors.error ? <span className='error'>{errors.message}</span> : <span>
            {data}
            </span>
            }


        </div>
    )
}

export default Managementinterface