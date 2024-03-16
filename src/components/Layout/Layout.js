import React, { useEffect, useState } from 'react'
import Headers from "./Header";
import Menu from './Menu';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
const Layout = ({ children }) => {
  const [UserData, setUserdata] = useState({})
  const statedata = useSelector((state) => state.UserReducer)
  const navigate = useNavigate()
  const GetProfileData = async () => {
    await axios.get('auth/profile').then((response) => {
      console.log(response)
      setUserdata(response.data)
    }
    ).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    GetProfileData()
    statedata.domain == "" && navigate("/Websites")
  }, [statedata])

  return (
    <React.Fragment>
      <Headers UserData={UserData} />
      <Menu UserData={UserData} />
      <div className="content-wrapper">
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
