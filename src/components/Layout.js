import React from 'react'
import Headers from "../components/master/Header";
import Menu from './master/Menu';
import ChatRoom from './ChatRoom';
import ChatRoomFireBase from '../FirebaseChat/ChatRoomFireBase';
const Layout = ({children}) => {
  return (
    <>
    <Headers/>
     <Menu/>  
  
    {/* <ChatRoom/> */}
    {children}
    </>
  )
}

export default Layout
