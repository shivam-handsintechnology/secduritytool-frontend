import Main from '../components/master/Main'
import Form from "../components/master/Form";
import Systeminfo from "../components/master/security/Systeminfo";
import Loginsecurity from "../components/master/security/Loginsecurity";
import Warwningpages from "../components/master/security/Warningpages";
import Sqlinjection from "../components/master/security/Sqlinjection";
import Ipwhitelist from "../components/master/security/Ipwhitelist";
import Filewhitelist from "../components/master/security/Filewhitelist";
import Portscanner from "../components/master/security/Portscanner";
import Htaccesseditor from "../components/master/security/Htaccesseditor";
import Errormonitoring from "../components/master/security/Errormonitoring";
import Visitanalytics from "../components/master/security/Visitanalytics";
import Livetraffic from "../components/master/security/Livetraffic";
import Visitordetails from "../components/master/security/Visitordetails";
import Phpconfigcheck from "../components/master/security/Phpconfigcheck";
import Phpfunctionscheck from "../components/master/security/Phpfunctionscheck";
import Badwords from "../components/master/security/Badwords";
import Badbots from "../components/master/security/Badbots";
import Proxy from "../components/master/security/Proxy";
import Spam from "../components/master/security/Spam";
import Alllogs from "../components/master/security/Alllogs";
import Sqlinjectionlogs from "../components/master/security/Sqlinjectionlogs";
import Badbotlogs from "../components/master/security/Badbotlogs";
import Bansip from "../components/master/security/Bansip";
import Banscountry from "../components/master/security/Banscountry";
import Bansiprange from "../components/master/security/Bansiprange";
import Otherbans from "../components/master/security/Otherbans";
import axios from "axios";
import Block from "../components/master/Block";
import UserLogin from "../components/login/UserLogin";
import Warningpages from '../components/master/security/Warningpages';
import SSLInformation from '../components/master/security/SSLInformation';
import Install from '../components/master/Install';
import ErrorPageHandler from '../components/master/ErrorPageHandler';
import ApiTesting from '../components/login/ApiTesting';
import BadPoxylogs from '../components/master/security/BadbProxyogs';
import SpamLogs from '../components/master/security/Spamlogs';
import SessionInfo from '../components/master/security/SessionInfo';
import SocketChecker from '../components/master/security/SocketChecker';
import HashGenerator from '../components/master/security/HashGenrator';
import AddWebsite from '../components/master/security/AddWebsite';

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
    path: '/Form',
    exact: true,
    Layout: "AdminLayout",
    element: <Form />,
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
    path: '/Phpconfigcheck',
    exact: true,
    Layout: "AdminLayout",
    element: <Phpconfigcheck />,
  },
  {
    path: '/Phpfunctionscheck',
    exact: true,
    Layout: "AdminLayout",
    element: <Phpfunctionscheck />,
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
    path: '/Install',
    exact: true,
    Layout: "AdminLayout",
    element: <Install />,
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


