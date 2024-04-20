import React, { useState } from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader'
import axios from 'axios'
const Directorylisting = () => {
  const [progress, setProgress] = useState(0);
  const [completeed, setCompleted] = useState(0);
  const [responseData, setResponseData] = useState([]);
  const UserData = useSelector((state) => state.UserReducer)
  const robottxt = useDataFetch(`InsecureObjectRefGuard/robottxt?domain=${UserData.domain}`, [UserData.domain], "")
  const httpparameterpollution = useDataFetch(`InsecureObjectRefGuard/httpparameterpollution?domain=${UserData.domain}`, [UserData.domain], "")

  const DirectoryListingEnable = useDataFetch(`InsecureObjectRefGuard/DirectoryListingEnable?domain=${UserData.domain}`, [UserData.domain],)
  // Function to make an API request
  async function fetchData(url, filepath) {
    try {
      // Make API request using directoryPath and name
      const response = await axios.get(url);
      // Process response as needed
      return response.status
    } catch (error) {
      return 400
    }
  }

  // Process data array sequentially
  const processSequentially = async () => {
    try {
      const totalItems = DirectoryListingEnable.data.directoryUrls.length;
      console.log("totalItems", totalItems)
      let completedItems = 0;
      const responses = [];

      for (const item of DirectoryListingEnable.data.directoryUrls) {
        // Make API request for the current item
        console.log(item)
        const data = await fetchData(`http://${UserData.domain + item}`);
        data === 200 && responses.push("Directory Listing is Enable on the " + item);
        completedItems++
        setCompleted(completedItems)
        // Update progress
        const progressPercentage = Math.round((completedItems / totalItems) * 100);
        setProgress(progressPercentage);

        // Optionally, you can wait for some time before making the next API call
        // For example, wait for 1 second
        await delay(1000); // 1000 milliseconds = 1 second

      }

      setResponseData(responses);
    } catch (error) {
      console.error('Error processing data:', error);
    }
  };

  // Function to simulate a delay
  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  console.log("completeed", completeed)
  return (
    <div>
      <ul className='list-unstyled'>
        <li className="list-unstyled">
          
          {
            DirectoryListingEnable.errors.loading ? <LoadingSpinner /> : DirectoryListingEnable.errors.error ? <li className='list-unstyled'><b>Directory listing is enabled on the server </b>:<span className='error'>{DirectoryListingEnable.errors.message}</span></li> :
              <>
                <div style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '4px', marginTop: '20px' }}>
                  <div style={{ width: `${progress}%`, backgroundColor: '#007bff', height: '20px', borderRadius: '4px', transition: 'width 0.5s ease-in-out' }}></div>
                </div>

                <p style={{ marginTop: '10px' }}>{progress}% Complete</p>
                <p style={{ marginTop: '10px' }}> {`${completeed}/${DirectoryListingEnable?.data?.directoryUrls?.length}`}</p>

                <button onClick={processSequentially} className="btn btn-primary">Check Directory listing is enabled or Not  on the server</button>
              </>

          }
        </li>
        {responseData.length > 0 && completeed === DirectoryListingEnable?.data?.directoryUrls?.length && <h3 className='error'>Directory listing is enabled on the server</h3>}
        {responseData.length === 0 && completeed === DirectoryListingEnable?.data?.directoryUrls?.length && <h3 className='success'>Directory listing is not enabled on the server</h3>}
        <li className="list-unstyled"><b>HTTP parameter pollution</b>:<span className={httpparameterpollution.errors.error ? "error" : ""}> {httpparameterpollution.errors.error ? robottxt.errors.message : httpparameterpollution?.data}</span></li>
        {robottxt.errors.loading ? <LoadingSpinner /> : robottxt.errors.error ? <li className='list-unstyled' ><b>The remote server contains a ‘robots.txt’ file</b><span className='error'>{robottxt.errors.message}</span></li>: <li className='list-unstyled' ><b>The remote server contains a ‘robots.txt’ file</b>{robottxt?.data}</li>}
      </ul>
    </div>
  )
}

export default Directorylisting