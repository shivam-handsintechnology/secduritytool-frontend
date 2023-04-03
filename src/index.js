import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SqlAppProvider } from './context/SqlllogsContextApi';
import axios from 'axios';
// const baseURL='https://sercuritytool.handsintechnology.in/api/'
const baseURL='http://localhost:5000/api/'  
axios.defaults.baseURL=baseURL
if(sessionStorage.getItem('token')){
  const token=JSON.parse(sessionStorage.getItem('token'))
  const accessToken=token.accessToken || ""
  axios.defaults.headers.common['Authorization']=accessToken?`Bearer ${accessToken}`:"Bearer " 
}
axios.interceptors.response.use(response => {
  return response.data;
},
 error => {
  console.log(error.response)
  return error.response.data;
}
);

ReactDOM.render(
  <React.StrictMode>
    <SqlAppProvider>
    <App />
    <ToastContainer/>
    </SqlAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

