import React from 'react'
import { useDataFetch } from '../../hooks/DataFetchHook'
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
               Cleartext Password returned in login response:
                {Cleartextpassword.data && Cleartextpassword.data.HashedPassword ?"No":"Yes"}
              </>
            ) : <div>Password Related Information Not Fund</div>
            }</div>
      }
    </>
  )
}

export default Cleartextpassword