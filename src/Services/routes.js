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

  },
  {
    path: '/hashgenerater',
    exact: true,
    element: <HashGenerator />,
  },
  {
    path: '/sessioninfo',
    exact: true,
    element: <SessionInfo />,
  },
  {
    path: '/SSLInformation',
    exact: true,
    element: <SSLInformation />,
  },
  {
    path: '/Main',
    exact: true,
    element: <Main />,
  },
  {
    path: '/Login',
    exact: true,
    element: <UserLogin />,
  },
  {
    path: '/block',
    exact: true,
    element: <Block />,
  },
  {
    path: '/Form',
    exact: true,
    element: <Form />,
  },
  {
    path: '/Systeminfo',
    exact: true,
    element: <Systeminfo />,
  },
  {
    path: '/Loginsecurity',
    exact: true,
    element: <Loginsecurity />,
  },
  {
    path: '/Warningpages',
    exact: true,
    element: <Warningpages />,
  },
  // {
  //   path: '/logs/:type',
  //   exact: true,
  //   element: <Sqlinjection />,
  // },
  {
    path: '/Ipwhitelist',
    exact: true,
    element: <Ipwhitelist />,
  },
  {
    path: '/socketchecker',
    exact: true,
    element: <SocketChecker />,
  },
  {
    path: '/Filewhitelist',
    exact: true,
    element: <Filewhitelist />,
  },
  {
    path: '/Portscanner',
    exact: true,
    element: <Portscanner />,
  },
  {
    path: '/Htaccesseditor',
    exact: true,
    element: <Htaccesseditor />,
  },
  {
    path: '/Errormonitoring',
    exact: true,
    element: <Errormonitoring />,
  },
  {
    path: '/Visitanalytics',
    exact: true,
    element: <Visitanalytics />,
  },
  {
    path: '/Livetraffic',
    exact: true,
    element: <Livetraffic />,
  },
  {
    path: '/Visitordetails/:ip',
    exact: true,
    element: <Visitordetails />,
  },
  {
    path: '/Phpconfigcheck',
    exact: true,
    element: <Phpconfigcheck />,
  },
  {
    path: '/Phpfunctionscheck',
    exact: true,
    element: <Phpfunctionscheck />,
  },
  {
    path: '/Badwords',
    exact: true,
    element: <Badwords />,
  },
  {
    path: '/Badbots',
    exact: true,
    element: <Badbots />,
  },
  {
    path: '/Proxy',
    exact: true,
    element: <Proxy />,
  },
  {
    path: '/Spam',
    exact: true,
    element: <Spam />,
  },
  {
    path: '/Alllogs',
    exact: true,
    element: <Alllogs />,
  },
  {
    path: '/logs/:type',
    exact: true,
    element: <Sqlinjectionlogs />,
  },
  {
    path: '/Badbotlogs',
    exact: true,
    element: <Badbotlogs />,
  },
  {
    path: '/Proxylogs',
    exact: true,
    element: <BadPoxylogs />,
  },
  {
    path: '/Spammerlogs',
    exact: true,
    element: <SpamLogs />,
  },
  {
    path: '/Bansip',
    exact: true,
    element: <Bansip />,
  },
  {
    path: '/Banscountry',
    exact: true,
    element: <Banscountry />,
  },
  {
    path: '/Bansiprange',
    exact: true,
    element: <Bansiprange />,
  },
  {
    path: '/Otherbans',
    exact: true,
    element: <Otherbans />,
  },
  {
    path: '/Install',
    exact: true,
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
    element: <ApiTesting />,
  },
  {
    path: 'Websites',
    exact: true,
    element: <AddWebsite />,
  },

];


