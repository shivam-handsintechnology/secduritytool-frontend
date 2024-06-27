
import React from 'react'
import "./adminlte.css"
import Headers from "./Header";
import Menu from './Menu';
import Footer from './Footer';

const UserLayout = ({ children }) => {

    return (
        <React.Fragment>
            <Headers />
            <Menu />
            <div className="content-wrapper">
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default UserLayout