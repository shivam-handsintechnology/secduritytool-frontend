import React from 'react'
import { useDataFetch } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'


const ArbitraryMethods = () => {
  const UserData = useSelector((state) => state.UserReducer);
  
  const postSessionData = useDataFetch(`SecurityMisconfiguration/arbitrary-methods?domain=${UserData.domain}`, [UserData.domain]);
  console.log("postSessionData", postSessionData);

  return (
    <div>
      {postSessionData.errors.loading ? (
        <LoadingSpinner />
      ) : postSessionData.errors.error ? (
        <span className='error'>{postSessionData.errors.message}</span>
      ) : 
      postSessionData.data && postSessionData.data.isAccessControlAllowMethods?
      (
        <table className="table table-striped">
          <tbody>
            {postSessionData.data && postSessionData.data.results && postSessionData.data.results.length > 0 ? (
              <>
                <tr>
                  <td colSpan="2">Arbitrary Methods Enabled</td>
                </tr>
                {postSessionData.data.results.map((result, index) => (
                  <tr key={index}>
                    <td><strong className="text-capitalize">Results</strong></td>
                    <td>{result}</td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td colSpan="2">Arbitrary Methods Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
      ):
      (
        <span className='error'>Access Control Allow Methods Are Not Enable</span>
      )}
    </div>
  );
};

export default ArbitraryMethods;
