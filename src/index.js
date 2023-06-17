import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { SocketContextAppProvider } from './context/ContextApi';
// const baseURL='https://sercuritytool.handsintechnology.in/api/'
// const baseURL='https://securitytool.onrender.com/api/'
// const baseURL='/api/'  
// const baseURL='http://192.168.0.8:5000/api/'  
const baseURL='http://localhost:8080/api/'  
axios.defaults.baseURL=baseURL
if(sessionStorage.getItem('token')){
  const token=JSON.parse(sessionStorage.getItem('token')).token
  const accessToken=token || ""
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
    <App />
    <ToastContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

