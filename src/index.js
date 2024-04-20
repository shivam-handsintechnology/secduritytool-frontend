import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import axios from 'axios';

axios.defaults.baseURL =process.env.REACT_APP_PRODUCTION_BASEURL;
// axios.defaults.baseURL = process.env.NODE_ENV==="development"?process.env.REACT_APP_DEVELOPMENT_BASEURL:process.env.REACT_APP_PRODUCTION_BASEURL;
axios.interceptors.response.use(response => {
  return response.data;
},
  error => {
    console.log(error)
    return Promise.reject(error);
   
  }
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

