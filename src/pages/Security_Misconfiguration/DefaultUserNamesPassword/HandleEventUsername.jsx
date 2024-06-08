import React, { useEffect, useState } from 'react'
import VideoComponent from '../../../hooks/VideoComponent ';
import { useSelector } from "react-redux";
import { decryptData, encryptData } from "../../../helpers/commonFunctions";
const url = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEVELOPMENT_BASEURL + "SecurityMisconfiguration/defaultpasswordandusername"
    : process.env.REACT_APP_PRODUCTION_BASEURL + "SecurityMisconfiguration/defaultpasswordandusername";
const HandleEventUsername = ({
    username, password
}) => {
    const [events, setEvents] = useState([]);
    const userreducerDetails = useSelector((state) => state.UserReducer);
    const [isSubmit, setisSubmit] = useState(false)

    const handleButtonClick = (domain, username, password) => {

        setEvents([]);
        const encrypted = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : '';

        if (userreducerDetails.isAuthenticated && encrypted.token) {
            let data = {
                [encodeURIComponent(encryptData("username"))]: encodeURIComponent(encryptData(username)),
                [encodeURIComponent(encryptData("password"))]: encodeURIComponent(encryptData(password)),
                [encodeURIComponent(encryptData("domain"))]: encodeURIComponent(encryptData(domain)),
                [encodeURIComponent(encryptData("authorization"))]: encodeURIComponent(encryptData(encrypted.token))
            };

            const eventSourceUrl = `${url}?data=${JSON.stringify(data)}`;
            const newEventSource = new EventSource(eventSourceUrl, { withCredentials: true, Authorization: encrypted.token });

            newEventSource.onmessage = (event) => {
                const newEvent = JSON.parse(event.data);
                console.log(newEvent);
                if (newEvent.complete) {
                    setisSubmit(false);
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
            <button disabled={isSubmit} onClick={() => handleButtonClick(userreducerDetails.webdomain, username, password)}>Scan Application is allowing default username {username} and password {password}</button>
            {events.length > 0 && events.map((event, eventIndex) => (
                <>
                    <li key={eventIndex}><span className={!event.error ? "success" : "error"}>{event.message}</span></li>
                    {event.screenshot && <img width='500' height='200' src={`data:image/png;base64,${event.screenshot}`} />}
                    {event.video && <VideoComponent event={event} />}
                </>
            ))}
        </div>
    )
}

export default HandleEventUsername
