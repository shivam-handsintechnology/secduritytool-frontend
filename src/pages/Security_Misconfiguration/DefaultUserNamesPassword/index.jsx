import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DefaultUsernames } from "../../../helpers/defaultusernames"
import DefaultuSernamesComponent from './DefaultuSernamesComponent'
const DefaultUserNamesPasswordMain = () => {

    return (
        <div>
            {DefaultUsernames.map((credential, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <strong>Username: </strong><span>{credential.username}</span>
                    <br />

                    <strong>Default Emails:</strong>
                    {credential.defaultemails.length > 0 ? (
                        <span>{credential.defaultemails.join(', ')}</span>
                    ) : (
                        <>'N/A'</>
                    )}

                    <br />
                    <strong>Default Passwords:</strong>
                    {
                        credential.passwords.length > 0 ? (
                            <>
                                <span>{credential.passwords.join(', ')}</span>
                                <br />
                                <DefaultuSernamesComponent defaultUsername={credential.username} defaultEmails={credential.defaultemails} defaultPasswords={credential.passwords} />
                            </>
                        ) : (
                            <>'N/A'</>
                        )
                    }

                </div>
            ))}

        </div>
    )
}

export default DefaultUserNamesPasswordMain