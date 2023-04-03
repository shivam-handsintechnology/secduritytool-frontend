import React, { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import './switch.css'
import "./App.css"
import { RoutesData } from "./Services/routesdata";
export default function App() {
  return (
    <div>
      <RoutesData  />
    </div>
  );
}
