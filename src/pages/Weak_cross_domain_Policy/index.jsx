import React from 'react';
import useDataFetch from '../../hooks/DataFetchHook';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/LoaderAndError/loader';

const WeakCrossDomainPolicy = () => {
    const Userdata = useSelector((state) => state.UserReducer);
    const OriginHeaderValidation = useDataFetch(
        `WeakCrossDomainPolicy/OriginHeaderValidation?domain=${Userdata.domain}`,
        [Userdata.domain],
        ''
    );
    const AccessControlAllowOriginHeaderSecure = useDataFetch(
        `WeakCrossDomainPolicy/AccessControlAllowOriginHeaderSecure?domain=${Userdata.domain}`,
        [Userdata.domain],
        ''
    );

    return (
        <div>
            {AccessControlAllowOriginHeaderSecure.errors.loading ? (
                <LoadingSpinner />
            ) : AccessControlAllowOriginHeaderSecure.errors.error ? (
                <span className="alert alert-danger">
                    {AccessControlAllowOriginHeaderSecure.errors.message}
                </span>
            ) : (
                <ul className="table table-bordered">

                    <li className='list-unstyled'>Is "Origin" header in client request validated at the server? : {OriginHeaderValidation.data}</li>
                    <li className='list-unstyled'>Is "Access-Control-Allow-Origin" header in server response set securely? :{AccessControlAllowOriginHeaderSecure.data}</li>
                </ul>
            )}
        </div>
    );
};

export default WeakCrossDomainPolicy;
