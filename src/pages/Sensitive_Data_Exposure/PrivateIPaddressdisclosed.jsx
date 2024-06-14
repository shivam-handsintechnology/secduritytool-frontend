import React from 'react'
import { useSelector } from "react-redux";
import useDataFetch from "../../hooks/DataFetchHook";
import LoadingSpinner from '../../components/LoaderAndError/loader';
const PrivateIPaddressdisclosed = () => {
    const userreducerDetails = useSelector((state) => state.UserReducer);
    const PrivateIPaddress = useDataFetch(`SensitiveDataExposure/Private-IP-address-disclosed?domain=${userreducerDetails.domain}`, [userreducerDetails.domain],)

    return (
        <>
            {
                PrivateIPaddress.errors.loading ? <LoadingSpinner /> :
                    PrivateIPaddress.errors.error ? <span className='error'>{PrivateIPaddress.errors.message}</span> :
                        <div>{PrivateIPaddress.data && PrivateIPaddress.data ? (
                            <>
                                Private IP address disclosed:
                                {PrivateIPaddress.data && PrivateIPaddress.data.private ? "Yes" : "No"}
                            </>
                        ) : <div>Password Related Information Not Fund</div>
                        }</div>
            }
        </>
    )
}

export default PrivateIPaddressdisclosed
