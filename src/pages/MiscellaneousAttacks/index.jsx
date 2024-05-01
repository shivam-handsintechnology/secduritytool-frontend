import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WEBSOCKET_SEND_MESSAGE } from '../../redux/reducers/websocketReducer'

const MiscellaneousAttacks = () => {
    const {connection,messages} = useSelector((state) => state.websocketReducer)
    const dispatch=useDispatch()
  return (
    <div>MiscellaneousAttacks
        <button type="button" onClick={() =>dispatch(WEBSOCKET_SEND_MESSAGE('https://mlsdev.sblcorp.com')) }>Send Message</button>
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