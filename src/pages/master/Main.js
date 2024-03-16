import React, { useEffect, useState } from "react";
import Headers from "../../components/Layout/Header";
import Menu from "../../components/Layout/Menu";
import Content from "./Content";
import Footer from "../../components/Layout/Footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Content />
    </>
  );

}
export default Main