import React from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'

const Sessionnotexpire = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const postSessionData=useDataFetch(`AuthSessionGuardian/session-vulnurability?domain=${UserData.domain}&type=nodejs`,[UserData.domain])
    console.log("postSessionData", postSessionData)
  return (
    <div>Sessionnotexpire</div>
  )
}

export default Sessionnotexpire