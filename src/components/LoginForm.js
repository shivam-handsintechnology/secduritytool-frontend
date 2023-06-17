import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [csrfToken, setCsrfToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/submit', {
        _csrf: csrfToken,
        // Include other form data here
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('/form');
        // console.log(response)
   
        setCsrfToken(response.csrfToken);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCsrfToken();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_csrf" value={csrfToken} />
      {/* Include other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
