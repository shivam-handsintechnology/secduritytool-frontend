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
                <ul className="table table-bordered p-4">

                            <li className='list-unstyled mb-2 '><i class="fa fa-check" style={{
                                background: "#002446", borderRadius: "50%",
                                padding: "3px", marginRight: "5px", color: 'white', marginLeft: "5px",
                            }}></i>Is "Origin" header in client request validated at the server? : {OriginHeaderValidation.data}</li>
                            <li className='list-unstyled'><i class="fa fa-check" style={{
                                background: "#002446", borderRadius: "50%",
                                padding: "3px", marginRight: "5px", color: 'white', marginLeft: "5px",
                            }}></i>Is "Access-Control-Allow-Origin" header in server response set securely? :{AccessControlAllowOriginHeaderSecure.data}</li>
                </ul>
            )}
        </div>
    );
};

export default WeakCrossDomainPolicy;
