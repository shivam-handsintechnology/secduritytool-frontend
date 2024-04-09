import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDataFetch from '../../hooks/DataFetchHook'
import axios from "axios"
const DirectObjectReferenceProtection = () => {
    const [progress, setProgress] = useState(0);
    const [completeed, setCompleted] = useState(0);
    const [responseData, setResponseData] = useState([]);
    const userData = useSelector((state) => state.UserReducer)
    const robottxt = useDataFetch(`security/test/robottxt?domain=${userData.domain}`, [userData.domain], null, false)
    const httpparameterpollution = useDataFetch(`client/httpparameterpollution?domain=${userData.domain}`, [userData.domain], null, false)
    const DirectoryListingEnable = useDataFetch(`InsecureObjectRefGuard/DirectoryListingEnable?domain=${userData.domain}`, [userData.domain], null, false)
   console.log("DirectoryListingEnable",DirectoryListingEnable)
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

    useEffect(() => {
        // Process data array sequentially
        const processSequentially = async () => {
            try {
                const totalItems = DirectoryListingEnable.data.length;
                let completedItems = 0;
                const responses = [];
                
                for (const item of DirectoryListingEnable.data) {
                    // Make API request for the current item
                   
                        const data = await fetchData(`http://${userData.domain + item.directoryPath}/${item.name + item.extension}`, `${item.directoryPath}/${item.name + item.extension}`);
                        data===200 && responses.push("Directory Listing is Enable on the "+item.directoryPath);
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

        // DirectoryListingEnable.data && DirectoryListingEnable.data.length > 0 && processSequentially();
    }, [DirectoryListingEnable.data]); // Empty dependency array ensures useEffect runs only once on component mount

    // Function to simulate a delay
    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
console.log("completeed",completeed)
    return (
        <React.Fragment>
            <div className="card card-primary card-outline">
                <div className="card-header">
                    <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules ( Insecure Direct Object References)</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <ul>
                            <li>
                            Directory listing is enabled on the server
                                    {/* Progress bar */}
                                    <div style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '4px', marginTop: '20px' }}>
                                        <div style={{ width: `${progress}%`, backgroundColor: '#007bff', height: '20px', borderRadius: '4px', transition: 'width 0.5s ease-in-out' }}></div>
                                    </div>
                                    {/* Progress text */}
                                    <p style={{ marginTop: '10px' }}>{progress}% Complete</p>
                                    <p style={{ marginTop: '10px' }}> {`${completeed}/${DirectoryListingEnable.data?.length}`}</p>
                                </li>
                                {responseData.map((response, index) => (
                                    <li key={index}><span><b>{response.message}</b></span></li>
                                ))}
                               <li><b>The remote server contains a ‘robots.txt’ file</b>:<span className={robottxt.errors.error?"error":""}> {robottxt.errors.error ?robottxt.errors.message:robottxt?.data}</span></li>
                                <li><b>HTTP parameter pollution</b>:<span className={httpparameterpollution.errors.error?"error":""}> {httpparameterpollution.errors.error ?robottxt.errors.message:httpparameterpollution?.data?.data}</span></li>
                           
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DirectObjectReferenceProtection