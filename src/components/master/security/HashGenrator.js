import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function HashGenerator() {
  const [algorithm, setAlgorithm] = useState('sha256');
  const [message, setMessage] = useState('');
  const [hash, setHash] = useState('');
  const [algorithmsList, setalgorithmsList] = useState([])
  useEffect(()=>{
    GetAllHashesh()
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`security/test/hash/${algorithm}?message=${message}`);
      console.log(response)
      setHash(response);
    } catch (err) {
      console.error(err);
    }
  };
  const GetAllHashesh =  () => {
   
    try {
     axios.get(`security/test/allhashesh`).then(
      (response)=>{
        const { message, statusCode ,data} = response;
        setalgorithmsList(data)
        console.log(response)
      }
      ).catch(err=>console.log(err))
  
    //   setHash(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
    {/* <Header />
    <Menu /> */}

    <div className="content-wrapper">
        {/*CONTENT CONTAINER*/}
        {/*===================================================*/}
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 ">
                            <i class="fa-brands fa-expeditedssl" /> SSL
                        </h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <a href="dashboard.php">
                                    <i className="fas fa-home" /> Admin Panel
                                </a>
                            </li>
                            <li className="breadcrumb-item active"> Hasshing</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        {/*Page content*/}
        {/*===================================================*/}
        <div className="content">
        <form onSubmit={handleSubmit}>
      <label htmlFor="algorithm">Hash algorithm:</label>
      <select id="algorithm" value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
        {algorithmsList.map((hash) => (
          <option key={hash} value={hash}>
            {hash}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="message">Message:</label>
      <input id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      <button type="submit">Generate hash</button>
      {hash && (
        <>
          <br />
          <label htmlFor="hash">Hash:</label>
          <input id="hash" type="text" value={hash} readOnly />
        </>
      )}
    </form>

        </div>
        {/*===================================================*/}
        {/*End page content*/}
    </div>
</div>
  );
}

export default HashGenerator;
