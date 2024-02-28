import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import './switch.css'
import "./App.css"
import { RoutesData } from "./Services/routesdata";
import axios from "axios";
import { useSelector } from "react-redux";
import { decryptData } from "./helpers/commonFunctions";

export default function App() {


  return (
    <div>
      <RoutesData />
    </div>
  );
}
