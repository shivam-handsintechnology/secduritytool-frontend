import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import Moment from 'react-moment'
import { io } from "socket.io-client"
import { v4 as uuidv4 } from 'uuid';
import { UseSocketContext } from "../context/ContextApi";
import { ref, get } from "firebase/database";
import {database} from '../firebase/FirebaseConfig'
import'./ChatRoom.css'
const ChatRoom = () => {
    const { socket } = UseSocketContext();
    // const roomId = localStorage.getItem('room')
    const [msg, setMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [allMessages, setAllMessages] = useState([]);
    const [room, setRoom] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
    const msgBoxRef = useRef();
    useEffect(() => {
      // get messages from database
      const connectedsocketssalseadviser = ref(database, `messages/${room}`);
      get(connectedsocketssalseadviser).then((snapshot) => {
        if (snapshot.exists()){
          const data=Object.values(snapshot.val())
          console.log(Object.values(snapshot.val()));
          setAllMessages([ ...data,  allMessages ])
              msgBoxRef.current.scrollIntoView({behavior: "smooth"})
              setMsg("")
              setIsLoading(false)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      // end  get messages from database
      socket.on("connect", () => {
        console.log("socket Connected");
      });
      socket.on("room", (room) => {
        setRoom(room);
        if(room){
          socket.emit("joinRoom", room);
        }
        // localStorage.setItem('room', room);
        // window.location.reload(true)
      });
      socket.on('roomFull',(data)=>{
        alert("room full")
      })
      socket.on("disconnect", () => {
        socket.disconnect();
       
      });
     
  
      return () => {
        // localStorage.removeItem('room')
        socket.disconnect();
      };
    }, [room, socket]);
  
    useEffect(() => {
      if (socket) {
        socket.on("getLatestMessage", (newMessage) => {
          setAllMessages([...allMessages, newMessage]);
          msgBoxRef.current.scrollIntoView({ behavior: "smooth" });
          setMsg("");
          setIsLoading(false);
        });
      }
    }, [socket, allMessages]);
  
    const handleChange = (e) => setMsg(e.target.value);
  
    const handleEnter = (e) => {
      if (e.keyCode === 13) {
        onSubmit();
      }
    };
  
    const onSubmit = () => {
      if (msg) {
        setIsLoading(true);
        const newMessage = { time: new Date(), msg, name: room };
        socket.emit("newMessage", { newMessage, room: room });
      }
    };
    return (
        <>
        {isOpen && (
      <div className="chat_room_abcds">
       <div className="shadow bg-white text-dark border rounded" >
                <div className="text-center px-3 mb-4 text-capitalize">
                    <h1 className="text-warning mb-4">{room?room:""}</h1>
                </div>
                <div className="bg-light border rounded p-3 mb-4" style={{height: "450px", overflowY:"scroll"}}>
                    {
                        allMessages.map(msg => {
                            return room === msg.name
                            ?
                            <div className="row justify-content-end pl-5 ">
                                <div className="d-flex flex-column align-items-end m-2 shadow p-2 bg-info border rounded w-auto">
                                    <div>
                                        <strong className="m-1">{msg.name}</strong>
                                        <small className="text-muted m-1"><Moment fromNow>{msg.time}</Moment></small>
                                    </div>
                                    <h4 className="m-1">{msg.msg}</h4>
                                </div>
                            </div>
                            :
                            <div className="row justify-content-start">
                                <div className="d-flex flex-column m-2 p-2 shadow bg-white border rounded w-auto">
                                    <div>
                                        <strong className="m-1">{msg.name}</strong>
                                        <small className="text-mmuted m-1"><Moment fromNow>{msg.time}</Moment></small>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div ref={msgBoxRef} ></div>
                </div>
                <div className="form-group d-flex">
                    <input type="text" className="form-control bg-light" name="message" onKeyDown={handleEnter} placeholder="Type your message" value={msg} onChange={handleChange} />
                    <button type="button" className="btn btn-warning mx-2" disabled={isLoading} onClick={onSubmit}>
                        {
                            isLoading
                            ?
                            <div class="spinner-border spinner-border-sm text-primary"></div>                            
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
                            </svg>
                        }
                    </button>   
                </div>
        </div>
      </div>
          )}

        </>
    )
}

export default ChatRoom