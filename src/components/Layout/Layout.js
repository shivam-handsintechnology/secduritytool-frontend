import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import UserLayout from './UserLayout';
import axios from 'axios';
import { decryptData } from '../../helpers/commonFunctions';
import { setUserDetails } from '../../redux/reducers/UserReducer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Layout = ({ children }) => {
  const navigate = useNavigate()
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
      if (error.response && error.response.status === 403) {
        toast.error("Session Expired", { autoClose: 3000 })
        sessionStorage.removeItem('token')
        navigate('/login')
      } else if (error.response && error.response.status === 405) {
        toast.error(error.response.data.message, { autoClose: 3000 })
        navigate('/checkout')
      }



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
