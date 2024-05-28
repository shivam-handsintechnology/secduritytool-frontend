import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import defaultCredentials from "../../helpers/defaultusernames.json"
import DefaultuSernamesComponent from './DefaultuSernamesComponent';
const DefaultUserNamesPassword = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };
    return (
        <div>
            {defaultCredentials.map((credential, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <strong>Username: </strong><span>{credential.username}</span>
                    <br />
                    <strong>Default Passwords:</strong>
                    <ul>

                        {credential.passwords.slice(0, showMore ? credential.passwords.length : 3).map((password, idx) => (
                            <>
                                <li key={idx}>{password}</li>
                                <DefaultuSernamesComponent username={credential.username} password={password} />
                            </>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={handleToggle}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    )
}

export default DefaultUserNamesPassword
