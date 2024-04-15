
// import Systeminfo from "./pages/master/security/Systeminfo";
// import Loginsecurity from "./pages/master/security/Loginsecurity";
// import Portscanner from "./pages/master/security/Portscanner";
// import Htaccesseditor from "./pages/master/security/Htaccesseditor";
// import Errormonitoring from "./pages/master/security/Errormonitoring";
// import Visitanalytics from "./pages/master/security/Visitanalytics";
// import Livetraffic from "./pages/master/security/Livetraffic";
// import Badwords from "./pages/master/security/Badwords";
// import Badbots from "./pages/master/security/Badbots";
// import Proxy from "./pages/master/security/Proxy";
// import Spam from "./pages/master/security/Spam";
// import Alllogs from "./pages/master/security/Alllogs";
// import Badbotlogs from "./pages/master/security/Badbotlogs";
// import Bansip from "./pages/master/security/Bansip";
// import Banscountry from "./pages/master/security/Banscountry";
// import Bansiprange from "./pages/master/security/Bansiprange";
// import Otherbans from "./pages/master/security/Otherbans";
// import Warningpages from './pages/master/security/Warningpages';
// import ApiTesting from './pages/login/ApiTesting';
// import BadPoxylogs from './pages/master/security/BadbProxyogs';
// import SpamLogs from './pages/master/security/Spamlogs';
// import SocketChecker from './pages/master/security/SocketChecker';
// import HashGenerator from './pages/master/security/HashGenrator';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { decryptData } from './helpers/commonFunctions';
import UserRegister from './pages/login/UserRegister';
import Layout from './components/Layout/Layout';
import Ipwhitelist from "./pages/master/security/Ipwhitelist";
import Blacklist from "./pages/master/security/Blacklist";
import Visitordetails from "./pages/master/security/Visitordetails";
import Block from "./pages/master/Block";
import UserLogin from "./pages/login/UserLogin";
import SSLInformation from './pages/master/security/SSLInformation';
import ErrorPageHandler from './pages/ErrorPageHandler';
// import SessionInfo from './pages/master/security/SessionInfo';
import AllWebsites from './pages/master/security/AllWebsite';
import AllLogs from './pages/master/security/Alllogs';
import Dashboard from "./pages/master/security/Dashboard";
import Main from './pages/master/Main';
import SensitiveData from './pages/master/security/SensitiveDataExposure/SensitiveData';
import Sessionnotexpire from './pages/Broken Authentication/Sessionnotexpire';
import Sessiontimeout from './pages/Broken Authentication/Sessiontimeout';
import Sessiontoken from './pages/Broken Authentication/Sessiontoken';
import Adversaryhijack from './pages/Broken Authentication/Adversaryhijack';
import Sessionhijackattack from './pages/Broken Authentication/Sessionhijackattack';
import Ssl from './pages/SSL/Ssl';
import Serverreturnserror from './pages/Error Message/Serverreturnserror';
import Serverhttperror from './pages/Error Message/Serverhttperror';
import Helpfulerrormessage from './pages/Error Message/Helpfulerrormessage';
import Directorylisting from './pages/Insecure_Direct_Object_References/Directorylisting';
import HTTPparameterpollution from './pages/Insecure_Direct_Object_References/HTTPparameterpollution';
import Serverobotstxtfile from './pages/Insecure_Direct_Object_References/Serverobotstxtfile';
import Arbitrarymethods from './pages/Security_Misconfiguration/Arbitrarymethods';
import Passwordplaintext from './pages/Security_Misconfiguration/Passwordplaintext';
import Olderserverversion from './pages/Security_Misconfiguration/Olderserverversion';
import DangerousHTTPmethods from './pages/Security_Misconfiguration/DangerousHTTPmethods';
import OPTIONSmethod from './pages/Security_Misconfiguration/OPTIONSmethod';
import Weakalgorithm from './pages/Security_Misconfiguration/Weakalgorithm';
import Adversaryemailidsspaming from './pages/Sensitive_Data_Exposure/Adversaryemailidsspaming';
import Serversidesourcedisclosure from './pages/Sensitive_Data_Exposure/Serversidesourcedisclosure';
import Criticalinformationinurl from './pages/Sensitive_Data_Exposure/Criticalinformationinurl';
import Defaultwebpageinserver from './pages/Sensitive_Data_Exposure/Defaultwebpageinserver';
import Sensitivedataaccessible from './pages/Sensitive_Data_Exposure/Sensitivedataaccessible';
import Sensitiveinformationrevealed from './pages/Sensitive_Data_Exposure/Sensitiveinformationrevealed';
import Cleartextpassword from './pages/Sensitive_Data_Exposure/Cleartextpassword';
import URLredirection from './pages/Unvalidated_Redirects_Forwards/URLredirection';
import Crossframescripting from './pages/Cross_Scripting_Site/Crossframescripting';
import Crosssitescriptingattack from './pages/Cross_Scripting_Site/Crosssitescriptingattack';
import Storedcrosssitescripting from './pages/Cross_Scripting_Site/Storedcrosssitescripting';
import XSSpossible from './pages/Cross_Scripting_Site/XSSpossible';
import Sensitivedatastored from './pages/Sensitive_Data_Local_Storage/Sensitivedatastored';
import Crossdomainpolicy from './pages/Weak_cross_domain_Policy/Crossdomainpolicy';
import Originheader from './pages/Weak_cross_domain_Policy/Originheader';
import AccessControlAllowOrigin from './pages/Weak_cross_domain_Policy/AccessControlAllowOrigin';
import XXE from './pages/Xml_External_Entity_Attack/XXE';

export const ProtectedRoutes = [


  {
    path: '/',
    exact: true,
    element: <Main />,
    Layout: "AdminLayout"

  },
  {
    path: '/dashboard',
    exact: true,
    element: <Main />,
    Layout: "AdminLayout"

  },
  {
    path: '/SSLInformation',
    exact: true,
    element: <SSLInformation />,
    Layout: "AdminLayout"
  },
 
  {
    path: '/block',
    exact: true,
    element: <Block />,
    Layout: "AdminLayout"
  },
  {
    path: '/Ipwhitelist',
    exact: true,
    Layout: "AdminLayout",
    element: <Ipwhitelist />,
  },
  {
    path: '/Blacklist',
    exact: true,
    Layout: "AdminLayout",
    element: <Blacklist />,
  },
  {
    path: '/Visitordetails/:ip',
    exact: true,
    Layout: "AdminLayout",
    element: <Visitordetails />,
  },
  {
    path: '/logs/:type',
    exact: true,
    Layout: "AdminLayout",
    element: <AllLogs />,
  },
  {
    path: '/SensitiveData/:type',
    exact: true,
    Layout: "AdminLayout",
    element: <SensitiveData />,
  },
  {
    path: 'Websites',
    exact: true,
    Layout: "AdminLayout",
    element: <AllWebsites />,
  },
  {
    path: '/Sessionnotexpire',
    exact: true,
    Layout: "AdminLayout",
    element: <Sessionnotexpire />,
  },
  {
    path: '/Sessiontimeout',
    exact: true,
    Layout: "AdminLayout",
    element: <Sessiontimeout />,
  },
  {
    path: '/Sessiontoken',
    exact: true,
    element: <Sessiontoken />,
  },
  {
    path: '/Adversaryhijack',
    exact: true,
    element: <Adversaryhijack />,
  },
  {
    path: '/Sessionhijackattack',
    exact: true,
    element: <Sessionhijackattack />,
  },
  {
    path: '/Ssl',
    exact: true,
    element: <Ssl />,
  },
  {
    path: '/Serverreturnserror',
    exact: true,
    element: <Serverreturnserror />,
  },
  {
    path: '/Serverhttperror',
    exact: true,
    element: <Serverhttperror />,
  },
  {
    path: '/Helpfulerrormessage',
    exact: true,
    element: <Helpfulerrormessage />,
  },
  {
    path: '/Directorylisting',
    exact: true,
    element: <Directorylisting />,
  },
  {
    path: '/HTTPparameterpollution',
    exact: true,
    element: <HTTPparameterpollution />,
  },
  {
    path: '/Serverobotstxtfile',
    exact: true,
    element: <Serverobotstxtfile />,
  },
  {
    path: '/Arbitrarymethods',
    exact: true,
    element: <Arbitrarymethods />,
  },
  {
    path: '/Passwordplaintext',
    exact: true,
    element: <Passwordplaintext />,
  },
  {
    path: '/Olderserverversion',
    exact: true,
    element: <Olderserverversion />,
  },
  {
    path: '/DangerousHTTPmethods',
    exact: true,
    element: <DangerousHTTPmethods />,
  },
  {
    path: '/OPTIONSmethod',
    exact: true,
    element: <OPTIONSmethod />,
  },
  {
    path: '/Weakalgorithm',
    exact: true,
    element: <Weakalgorithm />,
  },
  {
    path: '/Adversaryemailidsspaming',
    exact: true,
    element: <Adversaryemailidsspaming />,
  },
  {
    path: '/Serversidesourcedisclosure',
    exact: true,
    element: <Serversidesourcedisclosure />,
  },
  {
    path: '/Criticalinformationinurl',
    exact: true,
    element: <Criticalinformationinurl />,
  },
  {
    path: '/Defaultwebpageinserver',
    exact: true,
    element: <Defaultwebpageinserver />,
  },
  {
    path: '/Sensitivedataaccessible',
    exact: true,
    element: <Sensitivedataaccessible />,
  },
  {
    path: '/Sensitiveinformationrevealed',
    exact: true,
    element: <Sensitiveinformationrevealed />,
  },
  {
    path: '/Cleartextpassword',
    exact: true,
    element: <Cleartextpassword />,
  },
  {
    path: '/URLredirection',
    exact: true,
    element: <URLredirection />,
  },
  {
    path: '/Crossframescripting',
    exact: true,
    element: <Crossframescripting />,
  },
  {
    path: '/Crosssitescriptingattack',
    exact: true,
    element: <Crosssitescriptingattack />,
  },
  {
    path: '/Storedcrosssitescripting',
    exact: true,
    element: <Storedcrosssitescripting />,
  },
  {
    path: '/XSSpossible',
    exact: true,
    element: <XSSpossible />,
  },
  {
    path: '/Sensitivedatastored',
    exact: true,
    element: <Sensitivedatastored />,
  },
  {
    path: '/Crossdomainpolicy',
    exact: true,
    element: <Crossdomainpolicy />,
  },
  {
    path: '/Originheader',
    exact: true,
    element: <Originheader />,
  },
  {
    path: '/AccessControlAllowOrigin',
    exact: true,
    element: <AccessControlAllowOrigin />,
  },
  {
    path: '/XXE',
    exact: true,
    element: <XXE />,
  },

];
const PublicRoutes = [
  {
    path: '/login',
    exact: true,
    element: <UserLogin />,
  },
  {
    path: '/register',
    exact: true,
    element: <UserRegister />,
  },
  {
    path: '*',
    exact: true,
    element: <ErrorPageHandler />,
  },
];




export const RoutePages = () => {
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
          
          {
            PublicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))
          }
          {
          ProtectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={userreducerDetails.isAuthenticated ? <Layout>{route.element}</Layout>
                : <Navigate to="/login" />}
            />
          ))}
        </Routes>


      </Router>
    }</React.Fragment>

  );
};

