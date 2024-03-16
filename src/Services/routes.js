import Main from '../pages/master/Main'
import Systeminfo from "../pages/master/security/Systeminfo";
import Loginsecurity from "../pages/master/security/Loginsecurity";
import Ipwhitelist from "../pages/master/security/Ipwhitelist";
import Filewhitelist from "../pages/master/security/Filewhitelist";
import Portscanner from "../pages/master/security/Portscanner";
import Htaccesseditor from "../pages/master/security/Htaccesseditor";
import Errormonitoring from "../pages/master/security/Errormonitoring";
import Visitanalytics from "../pages/master/security/Visitanalytics";
import Livetraffic from "../pages/master/security/Livetraffic";
import Visitordetails from "../pages/master/security/Visitordetails";
import Badwords from "../pages/master/security/Badwords";
import Badbots from "../pages/master/security/Badbots";
import Proxy from "../pages/master/security/Proxy";
import Spam from "../pages/master/security/Spam";
import Alllogs from "../pages/master/security/Alllogs";
import Sqlinjectionlogs from "../pages/master/security/Sqlinjectionlogs";
import Badbotlogs from "../pages/master/security/Badbotlogs";
import Bansip from "../pages/master/security/Bansip";
import Banscountry from "../pages/master/security/Banscountry";
import Bansiprange from "../pages/master/security/Bansiprange";
import Otherbans from "../pages/master/security/Otherbans";
import Block from "../pages/master/Block";
import UserLogin from "../pages/login/UserLogin";
import Warningpages from '../pages/master/security/Warningpages';
import SSLInformation from '../pages/master/security/SSLInformation';
import ErrorPageHandler from '../components/ErrorPageHandler';
import ApiTesting from '../pages/login/ApiTesting';
import BadPoxylogs from '../pages/master/security/BadbProxyogs';
import SpamLogs from '../pages/master/security/Spamlogs';
import SessionInfo from '../pages/master/security/SessionInfo';
import SocketChecker from '../pages/master/security/SocketChecker';
import HashGenerator from '../pages/master/security/HashGenrator';
import AddWebsite from '../pages/master/security/AddWebsite';

export const routes = [
  {
    path: '/',
    exact: true,
    element: <Main />,
    Layout: "AdminLayout"

  },
  {
    path: '/hashgenerater',
    exact: true,
    element: <HashGenerator />,
    Layout: "AdminLayout"
  },
  {
    path: '/sessioninfo',
    exact: true,
    element: <SessionInfo />,
    Layout: "AdminLayout"
  },
  {
    path: '/SSLInformation',
    exact: true,
    element: <SSLInformation />,
    Layout: "AdminLayout"
  },
  {
    path: '/Main',
    exact: true,
    element: <Main />,
    Layout: "AdminLayout"
  },
  {
    path: '/Login',
    exact: true,
    element: <UserLogin />,
    Layout: "AdminLayout"
  },
  {
    path: '/block',
    exact: true,
    element: <Block />,
    Layout: "AdminLayout"
  },
  {
    path: '/Systeminfo',
    exact: true,
    Layout: "AdminLayout",
    element: <Systeminfo />,
  },
  {
    path: '/Loginsecurity',
    exact: true,
    Layout: "AdminLayout",
    element: <Loginsecurity />,
  },
  {
    path: '/Warningpages',
    exact: true,
    Layout: "AdminLayout",
    element: <Warningpages />,
  },

  {
    path: '/Ipwhitelist',
    exact: true,
    Layout: "AdminLayout",
    element: <Ipwhitelist />,
  },
  {
    path: '/socketchecker',
    exact: true,
    Layout: "AdminLayout",
    element: <SocketChecker />,
  },
  {
    path: '/Filewhitelist',
    exact: true,
    Layout: "AdminLayout",
    element: <Filewhitelist />,
  },
  {
    path: '/Portscanner',
    exact: true,
    Layout: "AdminLayout",
    element: <Portscanner />,
  },
  {
    path: '/Htaccesseditor',
    exact: true,
    Layout: "AdminLayout",
    element: <Htaccesseditor />,
  },
  {
    path: '/Errormonitoring',
    exact: true,
    Layout: "AdminLayout",
    element: <Errormonitoring />,
  },
  {
    path: '/Visitanalytics',
    exact: true,
    Layout: "AdminLayout",
    element: <Visitanalytics />,
  },
  {
    path: '/Livetraffic',
    exact: true,
    Layout: "AdminLayout",
    element: <Livetraffic />,
  },
  {
    path: '/Visitordetails/:ip',
    exact: true,
    Layout: "AdminLayout",
    element: <Visitordetails />,
  },
  {
    path: '/Badwords',
    exact: true,
    Layout: "AdminLayout",
    element: <Badwords />,
  },
  {
    path: '/Badbots',
    exact: true,
    Layout: "AdminLayout",
    element: <Badbots />,
  },
  {
    path: '/Proxy',
    exact: true,
    Layout: "AdminLayout",
    element: <Proxy />,
  },
  {
    path: '/Spam',
    exact: true,
    Layout: "AdminLayout",
    element: <Spam />,
  },
  {
    path: '/Alllogs',
    exact: true,
    Layout: "AdminLayout",
    element: <Alllogs />,
  },
  {
    path: '/logs/:type',
    exact: true,
    Layout: "AdminLayout",
    element: <Sqlinjectionlogs />,
  },
  {
    path: '/Badbotlogs',
    exact: true,
    Layout: "AdminLayout",
    element: <Badbotlogs />,
  },
  {
    path: '/Proxylogs',
    exact: true,
    Layout: "AdminLayout",
    element: <BadPoxylogs />,
  },
  {
    path: '/Spammerlogs',
    exact: true,
    Layout: "AdminLayout",
    element: <SpamLogs />,
  },
  {
    path: '/Bansip',
    exact: true,
    Layout: "AdminLayout",
    element: <Bansip />,
  },
  {
    path: '/Banscountry',
    exact: true,
    Layout: "AdminLayout",
    element: <Banscountry />,
  },
  {
    path: '/Bansiprange',
    exact: true,
    Layout: "AdminLayout",
    element: <Bansiprange />,
  },
  {
    path: '/Otherbans',
    exact: true,
    Layout: "AdminLayout",
    element: <Otherbans />,
  },
  {
    path: '*',
    exact: true,
    element: <ErrorPageHandler />,
  },
  {
    path: 'apitest',
    exact: true,
    Layout: "AdminLayout",
    element: <ApiTesting />,
  },
  {
    path: 'Websites',
    exact: true,
    Layout: "AdminLayout",
    element: <AddWebsite />,
  },

];


