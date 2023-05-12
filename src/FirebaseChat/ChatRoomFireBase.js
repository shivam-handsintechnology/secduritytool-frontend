import React, { useState, useEffect } from "react";
import { database } from "../firebase/FirebaseConfig";
import { ref, push, onValue, orderByChild, equalTo, query } from "firebase/database";
import { UseSocketContext } from "../context/ContextApi";
const ChatRoomFireBase = () => {
//   const userId=JSON.parse(sessionStorage.getItem('token')).email
 const {userId}=UseSocketContext()
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [ClientId, setClientId] = useState("");
  useEffect(() => {
    // Create a Firebase reference to the chat node
    const chatRef = ref(database, "chat");
    const userChatRef = query(
      chatRef,
      orderByChild("userId"),
      equalTo(userId)
    );
    // Subscribe to the chat node and get the initial data
    onValue(userChatRef, (snapshot) => {
      const chatData = snapshot.val();
       console.log({chatData})
      if (chatData) {
        // Convert the chat data into an array of chat messages
        const messageList = Object.entries(chatData).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setMessages(messageList);
        const clientIds = Array.from(new Set(messageList.map(message => message.ClientId)));
        if (clientIds.length === 1) {
          setClientId(clientIds[0]);
        } else {
          // Handle case where there are multiple clientIds in the messages
        }
      }
      
    });
  
    // Unsubscribe from the chat node when the component unmounts
    return () => {
    //   off(chatRef);
    };
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    // Create a new message object with the message text and the user ID
    const newMessage = {
      text: message,
      userId: userId,     
      ClientId:ClientId,
      timestamp: Date.now(),
    };
    // Save the new message to Firebase Realtime Database
    push(ref(database, "chat"), newMessage);
    setMessage("");
  };

  return (
    <div>
    <div className="content-wrapper" style={{ minHeight: 511 }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 ">
                <i className="fas fa-align-justify" /> All Logs
              </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="dashboard.php">
                    <i className="fas fa-home" /> Admin Panel
                  </a>
                </li>
                <li className="breadcrumb-item active">All Logs</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/*Page content*/}
      {/*===================================================*/}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary card-outline">
              <div>
        <ul>
          {messages.map((message) => (
            <li key={message.timestamp}>
              {message.userId}: {message.text}
            </li>
          ))}
        </ul>
        <form onSubmit={handleMessageSubmit}>
          <input type="text" value={message} onChange={handleMessageChange} />
          <button type="submit">Send</button>
        </form>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===================================================*/}
      {/*End page content*/}
    </div>
  
  </div>
  
  );
};

export default ChatRoomFireBase;
