import React, { useState } from "react";
import { useSelector } from "react-redux";
import { decryptData } from "../../helpers/commonFunctions";
import VideoComponent from "../../hooks/VideoComponent ";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
const url = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DEVELOPMENT_BASEURL + "MiscellaneousAttacks"
  : process.env.REACT_APP_PRODUCTION_BASEURL + "MiscellaneousAttacks";

const MiscellaneousAttacks = () => {
  const [isLockoutFeatreEnabled, setIsLockoutFeatreEnabled] = useState(false); // [1
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ attempt: 0, duration: 0 });
  const [isSubmit, setIsSubmit] = useState(false);

  const userreducerDetails = useSelector((state) => state.UserReducer);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setEvents([]);
    const encryptedData = sessionStorage.getItem('token') ? decryptData(sessionStorage.getItem('token')) : '';
    if (userreducerDetails.isAuthenticated && encryptedData.token) {
      const eventSourceUrl = `${url}?domain=${userreducerDetails.webdomain}&authorization=Bearer ${encodeURIComponent(encryptedData.token)}&attempt=${formData.attempt}&duration=${formData.duration}`;
      const newEventSource = new EventSource(eventSourceUrl, { withCredentials: true });
      newEventSource.onmessage = (event) => {
        const newEvent = JSON.parse(event.data);
        console.log(newEvent);
        if (newEvent.status && newEvent.status === 429) {
          setIsLockoutFeatreEnabled(true);
        }
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
      <Form onSubmit={handleFormSubmit}>

        <FormGroup>
          <FormLabel>Maximum Failed Attempt</FormLabel>
          <FormControl
            type="number"

            name="attempt"
            value={formData.attempt}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Lockout Duration (in seconds)</FormLabel>
          <FormControl
            type="number"

            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit" disabled={isSubmit}>Submit</Button>
      </Form>
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

export default MiscellaneousAttacks;
