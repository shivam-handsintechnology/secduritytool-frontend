import axios from 'axios';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import UserLogin from '../components/login/UserLogin';
import { isAuthenticatedCallback } from './Authenticate';
import { routes } from './routes';
import Layout from '../components/Layout';
import UserRegister from '../components/login/UserRegister';
import { useSelector } from 'react-redux';
import { decryptData } from '../helpers/commonFunctions';

export const RoutesData = () => {
  const userreducerDetails = useSelector(state => state.UserReducer)
  const [Loader, setLoding] = useState(true)
  useEffect(() => {
    setLoding(true)
    const encrypteddata = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : ''
    console.log("userreducerDetails", userreducerDetails)
    if (userreducerDetails.isAuthenticated && encrypteddata.token) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + encrypteddata.token

    }

    setLoding(false)
  }, [userreducerDetails.isAuthenticated,])
  useEffect(() => {
    axios.defaults.headers.common['SelectedHost'] = userreducerDetails.domain ? userreducerDetails.domain : ""
  }
    , [userreducerDetails.domain])
  return (
    <>{Loader ? <div >..Loading</div> :
      <Router>
        <Routes>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={userreducerDetails.isAuthenticated ? <Layout>{route.element}</Layout>
                : <Navigate to="/login" />}
            />
          ))}
        </Routes>


      </Router>
    }</>

  );
};

