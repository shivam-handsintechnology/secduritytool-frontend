import React, { useState } from "react";
import { useSelector } from "react-redux";
import { decryptData } from "../../helpers/commonFunctions";
import VideoComponent from "../../hooks/VideoComponent ";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
const url = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEVELOPMENT_BASEURL + "MiscellaneousAttacks/SqlWildcards"
    : process.env.REACT_APP_PRODUCTION_BASEURL + "MiscellaneousAttacks/SqlWildcards";

const SqlWildcards = () => {

    const [events, setEvents] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const userreducerDetails = useSelector((state) => state.UserReducer);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setEvents([]);
        const encryptedData = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : '';
        if (userreducerDetails.isAuthenticated && encryptedData.token) {
            const eventSourceUrl = `${url}?domain=${userreducerDetails.webdomain}&authorization=Bearer ${encodeURIComponent(encryptedData.token)}`;
            const newEventSource = new EventSource(eventSourceUrl, { withCredentials: true });
            newEventSource.onmessage = (event) => {
                const newEvent = JSON.parse(event.data);
                if (newEvent.complete) {
                    setIsSubmit(false);
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

            <Button type="button" onClick={handleFormSubmit} disabled={isSubmit}>Submit</Button>
            <ul>
                {events.length > 0 && events.map((event, index) => (
                    <React.Fragment key={index}>

                        <li>
                            <span className={!event.error ? "success" : "error"}>
                                {event.message}
                            </span>
                        </li>
                        {event.screenshot && (
                            <img width='500' height='200' src={`data:image/png;base64,${event.screenshot}`} alt="screenshot" />
                        )}
                        {event.video && <VideoComponent event={event} />}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default SqlWildcards;
