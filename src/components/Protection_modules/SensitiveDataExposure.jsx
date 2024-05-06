import React, {  useState } from 'react';
import useDataFetch from '../../hooks/DataFetchHook';
import { useSelector } from 'react-redux';
import axios from 'axios';
import LoadingSpinner from '../LoaderAndError/loader';

const SensitiveDataExposure = () => {
    const [progress, setProgress] = useState(0);
    const [completeed, setCompleted] = useState(0);
    const [responseData, setResponseData] = useState([]);
    const UserData = useSelector((state) => state.UserReducer);
    const sourcecodeDisclosoure = useDataFetch(`SensitiveDataExposure/sourcecode-disclosoure?domain=${UserData.domain}`, [UserData.domain]);
    const fingerprintDetection = useDataFetch(`SensitiveDataExposure/fingerprint-detection?domain=${UserData.domain}`, [UserData.domain]);
    const DefaultWebPage = useDataFetch(`SensitiveDataExposure/DefaultWebPage?domain=${UserData.domain}`, [UserData.domain]);
    // const emailHarvesting = useDataFetch(`SensitiveDataExposure/email-harvesting?domain=${UserData.domain}`, [UserData.domain]);
    const SensitiveKeysinUrl = useDataFetch(`SensitiveDataExposure/sensitive-data?type=url&domain=${UserData.domain}&isQuestion=1`, [UserData.domain], []);
    const SensitiveKeysinBody = useDataFetch(`SensitiveDataExposure/sensitive-data?type=response&domain=${UserData.domain}&isQuestion=1`, [UserData.domain], []);
    const ServerPathDisclosure = useDataFetch(`SensitiveDataExposure/server-path-disclosure?domain=${UserData.domain}`, [UserData.domain], "")
    const ServerFileAvailbleInCLearText = useDataFetch(`SensitiveDataExposure/ServerFileAvailbleInCLearText?domain=${UserData.domain}`, [UserData.domain], [])
    const sensitiveDataPlain = useDataFetch(`SensitiveDataExposure/server-plain-text?domain=${UserData.domain}`, [UserData.domain])
    const Cleartextpassword = useDataFetch(`SensitiveDataExposure/server-plain-text?domain=${UserData.domain}`, [UserData.domain])
    console.log("sensitiveDataPlain", sensitiveDataPlain)
    console.log("ServerFileAvailbleInCLearText", ServerFileAvailbleInCLearText)
    console.log("sensitiveDataPlain", sensitiveDataPlain)

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
    console.log("completeed", completeed)
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
                                <li className="list-unstyled">An adversary can fingerprint the web server from the HTTP responses :{
                                    fingerprintDetection.errors.loading ? <LoadingSpinner /> : fingerprintDetection.errors.error ? <span className='error'> {fingerprintDetection.errors.message}</span> : fingerprintDetection.data && fingerprintDetection.data.length > 0 ? "Yes" : "No"
                                }</li>
                                {/* <li className="list-unstyled">An adversary can harvest email ids for spamming: {emailHarvesting.data ? "Yes" : "No"}</li> */}
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
                                {responseData.map((response, index) => (
                                    <li key={index}><span><b>{response.message}</b></span></li>
                                ))}

                                <li className="list-unstyled">Default web page is accessible: {DefaultWebPage.errors.loading ? <LoadingSpinner /> :
                                    DefaultWebPage.errors.error ? <span className='error'> {DefaultWebPage.errors.message}</span> : DefaultWebPage.data && DefaultWebPage.data
                                }</li>
                                <li className="list-unstyled">Sensitive keys in URL: {SensitiveKeysinUrl.errors.loading ? <LoadingSpinner /> :
                                    SensitiveKeysinUrl.errors.error ? <span className='error'> {SensitiveKeysinUrl.errors.message}</span> : SensitiveKeysinUrl.data && SensitiveKeysinUrl.data.length > 0 ? "Yes" : "No"
                                }</li>
                                <li className="list-unstyled">Sensitive keys in body: {SensitiveKeysinBody.errors.loading ? <LoadingSpinner /> :
                                    SensitiveKeysinBody.errors.error ? <span className='error'> {SensitiveKeysinBody.errors.message}</span> : SensitiveKeysinBody.data && SensitiveKeysinBody.data.length > 0 ? "Yes" : "No"
                                }</li>
                                <li className="list-unstyled">Sensitive data is transmitted to server in plain text: {sensitiveDataPlain.errors.loading ? <LoadingSpinner /> :
                                    sensitiveDataPlain.errors.error ? <span className='error'> {sensitiveDataPlain.errors.message}</span> : SensitiveKeysinBody.data && SensitiveKeysinBody.data.keys.length > 0 ? "Yes" : "No"
                                }</li>
                                <li className="list-unstyled">Sensitive data is transmitted to server in plain text: {sensitiveDataPlain.errors.loading ? <LoadingSpinner /> :
                                    sensitiveDataPlain.errors.error ? <span className='error'>{sensitiveDataPlain.errors.message}</span> : sensitiveDataPlain.data && sensitiveDataPlain.data.key.length > 0 ? "Yes" : "No"
                                }</li>

                                <li className="list-unstyled">Physical server path disclosure: {ServerPathDisclosure.errors.loading ? <LoadingSpinner /> :
                                    ServerPathDisclosure.errors.error ? <span className='error'>{ServerPathDisclosure.errors.message}</span> : ServerPathDisclosure.data && ServerPathDisclosure.data
                                }</li>
                                <li className="list-unstyled">Sensitive application configuration architecture files available at users machine in clear text: {ServerFileAvailbleInCLearText.errors.loading ? <LoadingSpinner /> :
                                    ServerFileAvailbleInCLearText.errors.error ? <span className='error'> {ServerFileAvailbleInCLearText.errors.message}</span> : ServerFileAvailbleInCLearText.data && ServerFileAvailbleInCLearText.data.length > 0 ? "Yes" : "No"
                                }</li>
                                <li>
                                    Cleartext Password returned in login response:
                                    {
                                        Cleartextpassword.errors.loading ? <LoadingSpinner /> :
                                            Cleartextpassword.errors.error ? <span className='error'>{Cleartextpassword.errors.message}</span> :
                                                <div>{Cleartextpassword.data && Cleartextpassword.data.password ? (
                                                    <>
                                                        {Cleartextpassword.data && Cleartextpassword.data.HashedPassword ? "Yes":"No"}
                                                    </>
                                                ) : <div>Password Related Information Not Fund</div>
                                                }</div>
                                    }
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SensitiveDataExposure;
