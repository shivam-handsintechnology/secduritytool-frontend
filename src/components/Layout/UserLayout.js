
import React from 'react'
import Headers from "./Header";
import Menu from './Menu';
import Footer from './Footer';

const UserLayout = ({ children }) => {

    return (
        <React.Fragment>
            {/* <Headers /> */}
            <Menu />
            <div className='dashboard-content'>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default UserLayout