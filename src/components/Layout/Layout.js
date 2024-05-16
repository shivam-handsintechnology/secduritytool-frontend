import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import UserLayout from './UserLayout';
import axios from 'axios';
import { decryptData } from '../../helpers/commonFunctions';
import { setUserDetails } from '../../redux/reducers/UserReducer';
const Layout = ({ children }) => {
  const statedata = useSelector((state) => state.UserReducer)
  const dispatch = useDispatch()
  const encrypteddata = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : ''
  const GetProfileData = async () => {
    await axios.get('auth/profile', {
      headers: {
        'Authorization': `Bearer ${encrypteddata.token}`
      }
    }).then((response) => {
      console.log(response)
      dispatch(setUserDetails(response.data))
    }
    ).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    if (statedata.isAuthenticated && encrypteddata.token) {
      GetProfileData()
    }
    // eslint-disable-next-line
  }, [statedata.isAuthenticated])
  return (
    <React.Fragment>
      {
        statedata.isAuthenticated && <UserLayout children={children} />
      }
    </React.Fragment>
  )
}

export default Layout
