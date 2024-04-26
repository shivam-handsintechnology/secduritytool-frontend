import React, { useState } from 'react'
import { useDataFetch, usePostData } from '../../hooks/DataFetchHook'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoaderAndError/loader';
import axios from 'axios';
const Serversidesourcedisclosure = () => {
  const [progress, setProgress] = useState(0);
  const [completeed, setCompleted] = useState(0);
  const [responseData, setResponseData] = useState([]);
  const UserData = useSelector((state) => state.UserReducer)
  const sourcecodeDisclosoure = useDataFetch(`SensitiveDataExposure/sourcecode-disclosoure?domain=${UserData.domain}`, [UserData.domain]);
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
          const totalItems = sourcecodeDisclosoure.data.length;
          let completedItems = 0;
          const responses = [];

          for (const item of sourcecodeDisclosoure.data) {
              // Make API request for the current item

              const data = await fetchData(`http://${UserData.domain + item.directoryPath}/${item.name + item.extension}`, `${item.directoryPath}/${item.name + item.extension}`);
              data === 200 && responses.push(data);
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

  // SensitiveDataExposure.data && SensitiveDataExposure.data.length > 0 && processSequentially();

  // Function to simulate a delay
  const delay = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
  };
  return (
    <div>
      <ul>
      <li className="list-unstyled">
                                    Application’s server side source code disclosure
                                    {/* Progress bar */}
                                    {
                                        sourcecodeDisclosoure.errors.loading ? <LoadingSpinner /> : sourcecodeDisclosoure.errors.error ? <span className='error'> {sourcecodeDisclosoure.errors.message}</span> : sourcecodeDisclosoure.data && sourcecodeDisclosoure.data.length > 0 ? (
                                            <div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
                                                </div>
                                                <div className="text-center">{completeed} of {sourcecodeDisclosoure?.data?.length} completed</div>
                                                <button className="btn btn-primary" onClick={processSequentially}>Check For Source Code Disclosure</button>
                                            </div>
                                        ) : <div>No data available</div>
                                    }
                                </li>
      </ul>
    </div>
  )
}

export default Serversidesourcedisclosure