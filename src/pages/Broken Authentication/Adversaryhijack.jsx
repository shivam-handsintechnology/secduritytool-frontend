import React from 'react'
import { useDataFetch } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'

const Adversaryhijack = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const postSessionData=useDataFetch(`AuthSessionGuardian/session-fixation?domain=${UserData.domain}`,[UserData.domain])
    console.log("postSessionData", postSessionData)
  return (
    <div>
    {postSessionData.errors.loading ? <LoadingSpinner /> : postSessionData.errors.error ? <p>{postSessionData.errors.message}</p> : <p>
      {
        postSessionData.data && postSessionData.data.length > 0 && postSessionData.data.map((obj, index) => (
          <div key={index}>
            {Object.entries(obj).map(([key, value]) => (
              <div key={key}>
                <li className="list-styling"><strong className="text-capitalize">{key}</strong>:{value}</li>
              </div>
            ))}
          </div>

        ))

      }
    </p>}
  </div>
  )
}

export default Adversaryhijack