import React, { useEffect, useState } from 'react';
import useDataFetch from '../../hooks/DataFetchHook';
import { useSelector } from 'react-redux';
import axios from 'axios';

const SensitiveDataExposure = () => {
    const [progress, setProgress] = useState(0);
    const [completeed, setCompleted] = useState(0);
    const [responseData, setResponseData] = useState([]);
    const UserData = useSelector((state) => state.UserReducer);
    const sourcecodeDisclosoure = useDataFetch(`SensitiveDataExposure/sourcecode-disclosoure?domain=${UserData.domain}&type=nodejs`, [UserData.domain]);
    const DefaultWebPage = useDataFetch(`SensitiveDataExposure/DefaultWebPage?domain=${UserData.domain}&type=nodejs`, [UserData.domain]);
    console.log("DefaultWebPage.data.length",DefaultWebPage.data)
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
                const totalItems = sourcecodeDisclosoure.data.length;
                let completedItems = 0;
                const responses = [];
                
                for (const item of sourcecodeDisclosoure.data) {
                    // Make API request for the current item
                   
                        const data = await fetchData(`http://${UserData.domain + item.directoryPath}/${item.name + item.extension}`, `${item.directoryPath}/${item.name + item.extension}`);
                        data===200 && responses.push(data);
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
    }, [sourcecodeDisclosoure.data]); // Empty dependency array ensures useEffect runs only once on component mount

    // Function to simulate a delay
    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
console.log("completeed",completeed)
    return (
        <React.Fragment>
            <div className="card card-primary card-outline">
                <div className="card-header">
                    <h5><i className="fas fa-shield-alt" /> &nbsp;Protection Modules (Sensitive Data Exposure)</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <ul>
                                <li>An adversary can harvest email ids for spamming:</li>
                                <li>
                                 Application’s server side source code disclosure
                                    {/* Progress bar */}
                                    <div style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '4px', marginTop: '20px' }}>
                                        <div style={{ width: `${progress}%`, backgroundColor: '#007bff', height: '20px', borderRadius: '4px', transition: 'width 0.5s ease-in-out' }}></div>
                                    </div>
                                    {/* Progress text */}
                                    <p style={{ marginTop: '10px' }}>{progress}% Complete</p>
                                    <p style={{ marginTop: '10px' }}> {`${completeed}/${SensitiveDataExposure.data?.length}`}</p>
                                </li>
                                {responseData.map((response, index) => (
                                    <li key={index}><span><b>{response.message}</b></span></li>
                                ))}
                                <li>Critical information in URL</li>
                                <li>Default web-page present in the server :{DefaultWebPage?.data}</li>
                                <li>Physical server path disclosure</li>
                                <li> Sensitive application configuration architecture files available at users machine in clear text </li>
                                <li> Sensitive information revealed in HTTP response </li>
                                <li> Credentials are transmitted to server in plain text </li>
                                <li> Sensitive data is transmitted to server in plain text </li>
                                <li>Cleartext Password returned in login response  </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SensitiveDataExposure;
