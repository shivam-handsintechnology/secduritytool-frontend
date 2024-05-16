import React from 'react'
import { useDataFetch } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'

const Defaultwebpageinserver = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const DefaultWebPage = useDataFetch(`SensitiveDataExposure/DefaultWebPage?domain=${UserData.domain}`, [UserData.domain]);

  return (
    <div>
      <ul className='list-unstyled'>
        <li className="list-unstyled">Default web page is accessible: {DefaultWebPage.errors.loading ? <LoadingSpinner /> :
          DefaultWebPage.errors.error ? <span className='error'> {DefaultWebPage.errors.message}</span> : DefaultWebPage.data && DefaultWebPage.data
        }</li>
      </ul>
    </div>
  )
}

export default Defaultwebpageinserver