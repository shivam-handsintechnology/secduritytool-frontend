import axios from 'axios';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import UserLogin from '../components/login/UserLogin';
import { isAuthenticatedCallback } from './Authenticate';
import { routes } from './routes';
import Layout from '../components/Layout';

export const RoutesData = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const isAuthenticatedCallbackMemoized = useCallback(async () => {
    try {
      const isAuthenticated = await isAuthenticatedCallback();
      setIsAuthenticated(isAuthenticated);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    isAuthenticatedCallbackMemoized();
  }, [isAuthenticatedCallbackMemoized]);

  if (isAuthenticated === null) {
    // Loading state
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <Router>
      <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      </Layout>
   
    </Router>
  ) : (
    // window.location.assign("/login")
    <div>
      <UserLogin/>
    </div>
  );
};
