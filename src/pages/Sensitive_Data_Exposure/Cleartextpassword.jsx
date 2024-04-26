import React from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'

const Cleartextpassword = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const Cleartextpassword = useDataFetch(`SensitiveDataExposure/clear-password-text-response?domain=${UserData.domain}`, [UserData.domain],)
  console.log("clear-password-text-response", Cleartextpassword)
  return (
    <>
      {
        Cleartextpassword.errors.loading ? <LoadingSpinner /> :
          Cleartextpassword.errors.error ? <span className='error'>{Cleartextpassword.errors.message}</span> :
            <div>{Cleartextpassword.data && Cleartextpassword.data.password ? (
              <>
                {Cleartextpassword.data && Cleartextpassword.data.HashedPassword ? <div className='text-center'>Cleartext Password returned in login response:Yes</div> : <div className='text-center'>Cleartext Password returned in login response:No</div>}
              </>
            ) : <div>Password Related Information Not Fund</div>
            }</div>
      }
    </>
  )
}

export default Cleartextpassword