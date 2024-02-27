import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import './switch.css'
import "./App.css"
import { RoutesData } from "./Services/routesdata";
import axios from "axios";
export default function App() {

  const [Loader, setLoader] = useState(true)
  useEffect(() => {
    const baseURL='https://securitytool.handsintechnology.in/api/'
    // const baseURL='https://securitytool.onrender.com/api/'
    // const baseURL='/api/'  
    // const baseURL='http://192.168.0.8:5000/api/'  
    // const baseURL = 'http://localhost:8080/api/'
    axios.defaults.baseURL = baseURL
    setLoader(false)
    if (sessionStorage.getItem('token')) {
      const token = JSON.parse(sessionStorage.getItem('token')).token
      const accessToken = token || ""
      axios.defaults.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : "Bearer "

    }
    axios.interceptors.response.use(response => {
      return response.data;
    },
      error => {
        console.log(error.response)
        return error.response.data;
      }
    );
  }, [])
  return (
    <div>
      {!Loader && <RoutesData />}
    </div>
  );
}
