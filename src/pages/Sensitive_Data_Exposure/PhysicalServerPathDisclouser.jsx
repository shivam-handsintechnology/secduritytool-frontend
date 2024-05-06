import React from 'react'
import { useSelector } from 'react-redux';
import useDataFetch from '../../hooks/DataFetchHook';
import LoadingSpinner from '../../components/LoaderAndError/loader';
const PhysicalServerPathDisclousere = () => {
    const UserData = useSelector((state) => state.UserReducer);
    const ServerPathDisclosure = useDataFetch(`SensitiveDataExposure/server-path-disclosure?domain=${UserData.domain}`, [UserData.domain], "")
    return (
        <div>
            <li className="list-unstyled">Physical server path disclosure: {ServerPathDisclosure.errors.loading ? <LoadingSpinner /> :
                ServerPathDisclosure.errors.error ? <span className='error'>{ServerPathDisclosure.errors.message}</span> : ServerPathDisclosure.data && ServerPathDisclosure.data
            }</li>
        </div>
    )
}

export default PhysicalServerPathDisclousere