import React, { useEffect,useState } from "react";
import Headers from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";
import axios from "axios";
const Main=()=> {
  const [Message, setMessage] = useState('')

  
    return (
      <div>
       
        <Headers  />
        <Menu  />
        <Content/>
        <Footer />
      </div>
    );
 
}
export default Main