import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import './switch.css'
import "./App.css"
import axios from "axios";
import { useSelector } from "react-redux";
import { decryptData } from "./helpers/commonFunctions";
import { RoutePages } from "./routes";

export default function App() {


  return (
    <div>
     <RoutePages />
    </div>
  );
}
