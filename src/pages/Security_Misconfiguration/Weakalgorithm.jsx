import React from 'react'
import { useDataFetch } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
const Weakalgorithm = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const postSessionData=useDataFetch(`AuthSessionGuardian/session-vulnurability?domain=${UserData.domain}`,[UserData.domain])
    console.log("postSessionData", postSessionData)
  return (
    <div>Weakalgorithm</div>
  )
}

export default Weakalgorithm