import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePostData } from "../../hooks/DataFetchHook";
import { decryptData } from "../../helpers/commonFunctions";

const url = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DEVELOPMENT_BASEURL + "AuthSessionGuardian/non-html-content-accessability"
  : process.env.REACT_APP_PRODUCTION_BASEURL + "AuthSessionGuardian/non-html-content-accessability";

const NonHtmlContentAccess = () => {
  const [events, setEvents] = useState([]);
  const userreducerDetails = useSelector((state) => state.UserReducer);
 const [EvertSorceState, setEvertSorceState] = useState(null);
  const handleButtonClick = (domain) => {
     setEvents([]);
    const encryptedData = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : '';
    if (userreducerDetails.isAuthenticated && encryptedData.token) {
      const eventSourceUrl = `${url}?domain=${domain}&authorization=Bearer ${encodeURIComponent(encryptedData.token)}`;
      const newEventSource = new EventSource(eventSourceUrl, { withCredentials: true });
      setEvertSorceState(newEventSource)
    }
  };
useEffect(()=>{
  if(EvertSorceState){
    console.log("EventSource started"                              )
    EvertSorceState.onmessage = (event) => {
      const newEvent = JSON.parse(event.data);
      console.log(newEvent)
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    };
    EvertSorceState.onerror = (error) => {
      console.error("EventSource failed:", error);
      EvertSorceState.close();
    };
  }else{
    console.log("EventSource not started")
  
  }

},[EvertSorceState])
  return (
    <div>
      <button onClick={() => handleButtonClick(userreducerDetails.webdomain)}>Start Receiving Events</button>
      <h1>Server-Sent Events</h1>
      <ul>
        {events.length > 0 && events.map((event, index) => (
          <li key={index}>{`${event.time}: ${event.message}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default NonHtmlContentAccess;
