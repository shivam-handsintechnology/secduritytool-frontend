import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WEBSOCKET_SEND_MESSAGE, WEBSOCKET_CONNECT, RECEIVE_MESSAGE, socket } from '../../redux/reducers/websocketReducer'

const MiscellaneousAttacks = () => {
    const {connection,messages} = useSelector((state) => state.websocketReducer)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(WEBSOCKET_CONNECT());
      socket &&   socket.on("message", (message) => {
        dispatch(RECEIVE_MESSAGE(message));
      }
      );
    }, []);
  return (
    <div>MiscellaneousAttacks
        <button type="button" onClick={() =>dispatch(WEBSOCKET_SEND_MESSAGE('https://www.muscleblaze.com')) }>Send Message</button>
       {
        messages.length> 0 && messages.map((message,index) => {
            return <div key={index}>{message}</div>
        }
        )
       }
    </div>
  )
}

export default MiscellaneousAttacks