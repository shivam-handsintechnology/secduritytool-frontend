import React, { useState } from "react";
import { useSelector } from "react-redux";
import { decryptData, encryptData } from "../../helpers/commonFunctions";
import VideoComponent from "../../hooks/VideoComponent ";
const url = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DEVELOPMENT_BASEURL + "SecurityMisconfiguration/defaultpasswordandusername"
  : process.env.REACT_APP_PRODUCTION_BASEURL + "SecurityMisconfiguration/defaultpasswordandusername";

const DefaultuSernamesComponent = ({ username, password }) => {

  const [events, setEvents] = useState([]);
  const userreducerDetails = useSelector((state) => state.UserReducer);
  const [isSubmit, setisSubmit] = useState(false)

  const handleButtonClick = (domain) => {
    setisSubmit(true)
    setEvents([]);
    const encrypted = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : '';
    if (userreducerDetails.isAuthenticated && encrypted.token) {
      let data = {
        username: encodeURIComponent(encryptData(username)),
        password: encodeURIComponent(encryptData(password)),
        domain: encodeURIComponent(encryptData(domain)),
        authorization: encodeURIComponent(encryptData(encrypted.token))
      }
      // CONVERT ALL DATA ONE BY ONE TO ENCRYPT

      const eventSourceUrl = `${url}?data=${JSON.stringify(data)}`;
      const newEventSource = new EventSource(eventSourceUrl, { withCredentials: true, Authorization: encrypted.token });
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
      <button disabled={isSubmit} onClick={() => handleButtonClick(userreducerDetails.webdomain)}>{`Test With this Username And Password`}</button>
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

export default DefaultuSernamesComponent;
