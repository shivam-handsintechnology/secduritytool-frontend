import React from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'

const Sensitivedatastored = () => {
  const UserData = useSelector((state) => state.UserReducer)

  const SensitiveStorageLocalStorage=useDataFetch(`SensitiveStorageLocalStorage`,[],[])
    console.log("SensitiveStorageLocalStorage", SensitiveStorageLocalStorage)
  return (
    <div>Sensitivedatastored</div>
  )
}

export default Sensitivedatastored