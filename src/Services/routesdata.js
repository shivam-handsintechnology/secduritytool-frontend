import axios from 'axios';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import UserLogin from '../components/login/UserLogin';
import { isAuthenticatedCallback } from './Authenticate';
import { routes } from './routes';
import Layout from '../components/Layout';
import UserRegister from '../components/login/UserRegister';

export const RoutesData = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
const location=window.location.pathname
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

  return (
    <Router>
      {isAuthenticated ? (
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      ) :location=== "/register" ? (
        <UserRegister />
      ) : (
        <UserLogin />
      )}
    </Router>
  );
};

