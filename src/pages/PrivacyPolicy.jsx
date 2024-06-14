import React from 'react'
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <div>
            <Container>
                <div>
                    <h1 className='text-center mt-5 mb-5'>
                     Privacy Policy
                    </h1>
                </div>
                <div className='text-justify'>
                    <p className='mb-3'>
                        This Privacy Policy (“Policy”) outlines the personal information that the security tool (“we”, “us” or “our”) gathers, how we use that personal information, and the options you have to access, correct, or delete such personal information.
                    </p>
                    <hr/>
                    <h3 className='mb-4'>SECURITY TOOL’S PROMISE</h3>
                    <div>
                        <p>
                            Our mission to help build a safer online environment is rooted in the importance we place on establishing trust with our customers, users, and the online community globally. To earn and maintain that trust, we commit to communicating transparently, providing security, and protecting the privacy of data on our systems

                        </p>
                        <p>
                            We keep your personal information personal and private. We will not sell or rent your personal information. We will only share or otherwise disclose your personal information as necessary to provide our services or as otherwise described in this Policy, except in cases where we first provide you with notice and the opportunity to consent.
                        </p>
                    </div>
                    <div>
                        <ol className='pl-3'>
                            <li>
                                <h5><b>POLICY APPLICATION</b></h5>

                                <div>
                                    <p>This Policy applies to the security tool’s collection, use, and disclosure of personal information for the following categories:</p>
                                    <ul>
                                        <li>
                                            <b>Attendees</b>
                                            <p>Those who visit our offices or provide their information when attending security tool-sponsored events or participating in our studies.</p>
                                        </li>
                                        <li>
                                            <b>Website Visitors</b>
                                            <p>Those who visit our websites and may provide contact information to receive communications, fill out surveys, or provide feedback. For this Policy, “Websites” refer to all websites operated by the security tool that link to this Policy.</p>
                                        </li>
                                        <li>
                                            <b>Customers</b>
                                            <p>Individuals or entities who enter into a subscription agreement with the security tool and receive our services, including all cloud-based solutions designed to enhance the performance, security, and availability of internet properties, applications, devices, and networks.</p>
                                        </li>
                                        <li>
                                            <b>Administrative Users</b>
                                            <p>Those with login credentials for a security tool account or those who administer services for a Customer. This may include agents acting on behalf of a Customer</p>
                                        </li>
                                    </ul>
                                    <p>
                                        This Policy does not cover our Customers’ domains and websites, which have their own privacy policies. Customers are responsible for compliance with applicable laws.
                                    </p>
                                    <p>
                                        Our websites and services are not intended for those under eighteen. We do not knowingly collect personal information from anyone under eighteen. If discovered, we will delete it.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <h5><b>INFORMATION WE COLLECT (Categories of Data Subjects)</b></h5>
                                <div>
                                    <ul>
                                        <li>
                                            <b>Attendees</b>
                                            <p>We collect personal information such as name, email, and contact details when you visit our offices, attend events, or participate in studies.</p>
                                        </li>
                                        <li>
                                            <b>Website Visitors</b>
                                            <p>We gather contact information, log files (IP addresses, system info), and use cookies for site interaction and marketing insights.</p>
                                        </li>
                                        <li>
                                            <b>Customers and Administrative Users:</b>
                                            <p>We collect account details, payment information (for paid services), crash reports, and activity logs.</p>
                                        </li>
                                        <li>
                                            <b>Public DNS Resolver Users</b>
                                            <p>Limited DNS query data is collected without logging personal info.</p>
                                        </li>
                                        <li>
                                            <b>Registrants</b>
                                            <p>We collect domain and contact information, network data for analysis and security.</p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <h5><b>HOW WE USE INFORMATION</b></h5>
                                <div>
                                    <ul className='mb-3'>
                                        <li>Maintain and improve our services for all users.</li>
                                        <li>Enable access to and usage of our services.</li>
                                        <li>Respond to inquiries and provide customer support.</li>
                                        <li>Complete transactions and provide related information.</li>
                                        <li>Comply with legal requirements and prevent fraud.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <h5><b>DATA AGGREGATION</b></h5>
                                <div>
                                    <p>We aggregate data about our Customers, Administrators, and End Users to analyze web indexing and detect malicious activity. Non-personally identifiable, aggregated data may be shared with third parties.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PrivacyPolicy
