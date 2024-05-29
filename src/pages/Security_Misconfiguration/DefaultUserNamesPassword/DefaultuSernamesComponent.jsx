import React from "react";
import HandleEvent from "./HandleEventEmail";
import HandleEventEmail from "./HandleEventEmail";
import HandleEventUsername from "./HandleEventUsername";

const DefaultuSernamesComponent = ({ defaultUsername, defaultEmails, defaultPasswords }) => {


  return (
    <div>
      {/* Default Emails And password Test */}
      <span>Default Emails And password Test</span>
      {defaultEmails.map((email, index) => (
        <div key={index}>

          <ul>
            {defaultPasswords.map((password, idx) => (
              <li key={idx}>
                <HandleEventEmail email={email} password={password} />
              </li>

            ))}
          </ul>

        </div>
      ))}
      {/* Default username and password Test */}
      <span>
        Default username and password Test
      </span>
      {
        defaultPasswords.map((password, index) => (
          <div key={index}>
            <HandleEventUsername username={defaultUsername} password={password} />
          </div>
        ))
      }
    </div>
  );
};

export default DefaultuSernamesComponent;