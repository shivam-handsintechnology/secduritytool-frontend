import axios from 'axios';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import UserLogin from '../components/login/UserLogin';
import { isAuthenticatedCallback } from './Authenticate';
import { routes } from './routes';

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
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  ) : (
    // window.location.assign("/login")
    <div>
      <UserLogin/>
    </div>
  );
};
