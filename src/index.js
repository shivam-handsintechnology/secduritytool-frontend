import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import axios from 'axios';
import { decryptData, encryptData } from './helpers/commonFunctions';

// axios.defaults.baseURL =process.env.REACT_APP_PRODUCTION_BASEURL;
// Set base URL based on environment
axios.defaults.baseURL = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEVELOPMENT_BASEURL
    : process.env.REACT_APP_PRODUCTION_BASEURL;

axios.interceptors.request.use(config => {

    // Encrypt data in config if needed
    // console.log("config",config)
    // if(config.url){
    //   let querues=config.url.split("?")
    //   if(querues.length>1){
    //     let query=querues[1].split("&")
    //     let queryObj={}
    //     query.forEach((element)=>{
    //       let queryElement=element.split("=")
    //       queryObj[queryElement[0]]=queryElement[1]
    //     })
    //     console.log("queryObj",queryObj)
    //     config.url=querues[0]+"?encryptData="+encryptData(queryObj)
    //   }
      
    // }
    if (config.data && typeof config.data === 'object') {
      console.log("config.data",config.data)
        config.data = {encryptData:encryptData(config.data)};
    }
    
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log("response",response)
    // Decrypt response data if needed
    // if (response.data && typeof response.data === 'string') {
    //     response.data = decryptData(response.data);
    //   return response.data;
    // }
    // else{
    //   return response.data;
    // }
    return response.data;
 
}, error => {
  
    // if(error.response && error.response.data  && typeof error.response.data === 'string'){
    //   error.response.data = decryptData(error.response.data);
    //   return Promise.reject(error);
    // }
    return Promise.reject(error);
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

