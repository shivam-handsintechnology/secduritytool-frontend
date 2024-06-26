import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { decryptData } from "../../helpers/commonFunctions";

const url = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DEVELOPMENT_BASEURL + "AuthSessionGuardian/non-html-content-accessability"
  : process.env.REACT_APP_PRODUCTION_BASEURL + "AuthSessionGuardian/non-html-content-accessability";

const NonHtmlContentAccess = () => {

  const [events, setEvents] = useState([]);
  const userreducerDetails = useSelector((state) => state.UserReducer);
  const [isSubmit, setisSubmit] = useState(false)
  const [ErrorHnadler, setErrorHandler] = useState({
    errorPageHandler: false,
    pageNotFoundHandler: false
  })
  const handleSwitch = (e) => {
    setErrorHandler({ ...ErrorHnadler, [e.target.name]: e.target.checked })
  }
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
  console.log("ErrorHnadler", ErrorHnadler)
  return (
    <div>
      <button disabled={isSubmit} onClick={() => handleButtonClick(userreducerDetails.webdomain)}>Scan Non-HTML contents directly accessible without logging-in</button>
      <h3>Non-HTML contents directly accessible without logging-in </h3>
      <Form>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          name="pageNotFoundHandler"
          onChange={handleSwitch}
          checked={ErrorHnadler.pageNotFoundHandler}
          label="404 Page Handler is enabled"
        />
        <br />
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          name="errorPageHandler"
          onChange={handleSwitch}
          checked={ErrorHnadler.errorPageHandler}
          label="Error Page Handler is enabled"
        />

      </Form>
      <ul>
        {events.length > 0 && events.map((event, index) => (
          <>

            <li key={index}><span className={!event.error ? "success" : "error"}> {event.message}</span></li>
            {
              event.screenshot && <img width='500' height='200' src={`data:image/png;base64,${event.screenshot}`} />
            }
          </>
        ))}
      </ul>
    </div>
  );
};

export default NonHtmlContentAccess;
