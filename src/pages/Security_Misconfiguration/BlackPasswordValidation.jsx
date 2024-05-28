import React, { useState } from "react";
import { useSelector } from "react-redux";
import { decryptData } from "../../helpers/commonFunctions";
import VideoComponent from "../../hooks/VideoComponent ";
const url = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DEVELOPMENT_BASEURL + "AuthSessionGuardian/blankpasswordandusername"
  : process.env.REACT_APP_PRODUCTION_BASEURL + "AuthSessionGuardian/blankpasswordandusername";

const BlackPasswordValidation = () => {

  const [events, setEvents] = useState([]);
  const userreducerDetails = useSelector((state) => state.UserReducer);
  const [isSubmit, setisSubmit] = useState(false)

  const handleButtonClick = (domain) => {
    setisSubmit(true)
    setEvents([]);
    const encryptedData = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : '';
    if (userreducerDetails.isAuthenticated && encryptedData.token) {
      const eventSourceUrl = `${url}?domain=${domain}&authorization=Bearer ${encodeURIComponent(encryptedData.token)}`;
      const newEventSource = new EventSource(eventSourceUrl, { withCredentials: true });
      newEventSource.onmessage = (event) => {
        const newEvent = JSON.parse(event.data);
        console.log(newEvent)
        if (newEvent.complete) {
          setisSubmit(false)
        }
        setEvents((prevEvents) => [...prevEvents, newEvent]);
      };
      newEventSource.onerror = (error) => {
        console.error("EventSource failed:", error);
        newEventSource.close();
      };
    }
  };
  return (
    <div>
      <button disabled={isSubmit} onClick={() => handleButtonClick(userreducerDetails.webdomain)}>Scan Application is allowing blank / invalid passwords</button>
      <h3>Application is allowing blank / invalid passwords</h3>

      <ul>
        {events.length > 0 && events.map((event, index) => (
          <>

            <li key={index}><span className={!event.error ? "success" : "error"}> {event.message}</span></li>
            {
              event.screenshot && <img width='500' height='200' src={`data:image/png;base64,${event.screenshot}`} />
            }
            {
              event.video &&
              <VideoComponent event={event} />

            }

          </>
        ))}
      </ul>
    </div>
  );
};

export default BlackPasswordValidation;
