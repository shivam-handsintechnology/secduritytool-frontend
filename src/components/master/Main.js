import React, { useEffect, useState } from "react";
import Headers from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [Message, setMessage] = useState('')
  const navigate = useNavigate()
  const statedata = useSelector((state) => state.UserReducer)
  useEffect(() => {
    statedata.domain == "" && navigate("/Websites")
  }, [statedata])
  return (
    <div>
      {/*        
        <Headers  />
        <Menu  /> */}
      <Content />
      <Footer />
    </div>
  );

}
export default Main