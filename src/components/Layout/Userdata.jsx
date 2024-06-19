import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import useDataFetch from '../../hooks/DataFetchHook';

const Userdata = () => {
  const userreducerDetails = useSelector((state) => state.UserReducer)
  return (
    <>

      <Link to="/dashboard" className="brand-link">
        <img
          src="http://handsintechnology.in/1assets/images/bg/shapes/logo12.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: "1" }}
        />
      </Link>
      <Link to="/Profile" >
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">

          <div className="image">
            {/*  eslint-disable-next-line */}
            <img
              src={userreducerDetails.isAuthenticated && userreducerDetails?.profilepic}
              className="img-circle elevation-2"
              alt="photo"
            />
          </div>
          <div className="info">
            <Link className="d-block">
              {userreducerDetails.isAuthenticated && userreducerDetails?.email}
            </Link>
          </div>

        </div>
      </Link>
    </>
  )
}

export default Userdata