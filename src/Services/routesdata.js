import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import UserLogin from '../pages/login/UserLogin';
import { routes } from './routes';
import UserRegister from '../pages/login/UserRegister';
import { useSelector } from 'react-redux';
import { decryptData } from '../helpers/commonFunctions';
import AddWebsite from '../pages/master/security/AddWebsite';
import Layout from '../components/Layout/Layout';

export const RoutesData = () => {
  const userreducerDetails = useSelector((state) => state.UserReducer)
  const [Loader, setLoding] = useState(true)
  useEffect(() => {
    setLoding(true)
    const encrypteddata = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : ''
    if (userreducerDetails.isAuthenticated && encrypteddata.token) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + encrypteddata.token
      axios.defaults.headers.common['SelectedHost'] = userreducerDetails.domain

    }

    setLoding(false)
  }, [userreducerDetails,])
  return (
    <React.Fragment>{Loader ? <div >..Loading</div> :
      <Router>
        <Routes>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={userreducerDetails.isAuthenticated ? <Layout>{userreducerDetails.domain ? route.element : <AddWebsite />}</Layout>
                : <Navigate to="/login" />}
            />
          ))}
        </Routes>


      </Router>
    }</React.Fragment>

  );
};

