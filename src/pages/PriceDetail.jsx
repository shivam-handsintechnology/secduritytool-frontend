import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const PriceDetail = () => {

    const [isAnnual, setIsAnnual] = useState(true);

    const handleToggle = () => {
        setIsAnnual(!isAnnual);
    };

    return (
        <div>

            <Container>
                <div>
                    <p className='margin-gap text-center '>   <h4 className='text-height mb-4'>SECURITY, PERFORMANCE, & MORE</h4></p>
                    <div>
                        <Row>
                            <Col lg={3}>
                                <div className='box'>
                                    <p>
                                        <h5><b>24/7 email & phone support</b></h5>
                                        <p className='mt-3'>
                                            Award winning, global, 24/7/365 email & emergency phone support (Enterprise plans). Plus on-demand resources, guides & best practice implementation.

                                        </p>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='box'>
                                    <p>
                                        <h5><b>24/7 email & phone support</b></h5>
                                        <p>
                                            Award winning, global, 24/7/365 email & emergency phone support (Enterprise plans). Plus on-demand resources, guides & best practice implementation.

                                        </p>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='box'>
                                    <p>
                                        <h5><b>24/7 email & phone support</b></h5>
                                        <p>
                                            Award winning, global, 24/7/365 email & emergency phone support (Enterprise plans). Plus on-demand resources, guides & best practice implementation.

                                        </p>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='box'>
                                    <p>
                                        <h5><b>24/7 email & phone support</b></h5>
                                        <p>
                                            Award winning, global, 24/7/365 email & emergency phone support (Enterprise plans). Plus on-demand resources, guides & best practice implementation.

                                        </p>
                                    </p>
                                </div>
                            </Col>

                        </Row>
                    </div>

                </div>
                <section>
                    <div>
                        <Row>
                            <Col lg={4} className=' align-content-center'>
                                <div >
                                    <h3 className='text-height'>Includes everything from the Pro plan & much more:</h3>
                                </div>
                            </Col>
                            <Col className='mt-5'>
                                <div className="top">
                                    <div className="toggle-btn">
                                        <span style={{ margin: '0.8em' }}>Annually</span>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={!isAnnual}
                                                onChange={handleToggle}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                        <span style={{ margin: '0.8em' }}>Monthly</span>
                                    </div>
                                </div>

                                <div className="package-container">
                                    <div className="packages">
                                        <h1>Buisness</h1>
                                        <h2 className="text1" style={{ display: isAnnual ? 'block' : 'none' }}>$ 108 </h2>
                                        <h2 className="text2" style={{ display: isAnnual ? 'none' : 'block' }}>$ 9</h2>
                                        <ul className="list">
                                            <li className="first">2000 Subscribers</li>
                                            <li>12,000 Emails/month</li>
                                            <li>Multi-User Accounts</li>
                                            <li>Email Support</li>
                                        </ul>
                                        <a href="#" className="button button1">Start Now</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default PriceDetail
