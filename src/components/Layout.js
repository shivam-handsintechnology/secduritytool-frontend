import React from 'react'
import Headers from "../components/master/Header";
import Menu from './master/Menu';
const Layout = ({ children }) => {
  return (
    <>
      <Headers />
      <Menu />
      {children}

    </>
  )
}

export default Layout
