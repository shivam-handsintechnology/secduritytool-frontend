import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Documents = () => {
    return (
        <div className='bg-light'>
            {/* <section class="section-top">
              <Row>
                  <Col >
                      <div class="section-top-title wow " >
                          <h1 className='text-center'>ABOUT US</h1>
                      </div>
                  </Col>
              </Row>
          </section> */}
            <section>
                <Container fluid>
                    <Row>
                        <Col lg={3} className='box-doc-left'>
                            <ul className="left-list pt-4" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <span >
                                        <div className='nav-link active text-center section-button ' id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><span className='line'><img src="../asset/1.png" className='vector-icon pl-2' />SERVER - SIDE INTEGRATION</span></div>
                                        <div className='ml-40 mt-4  text-center section-button'><img src="../asset/2.png" className='vector-icon' />Node.js / Express</div>
                                        <svg class="curve-line" width="100" height="200">
                                            <path d="M10,10 C20,100 80,100 90,190" stroke="black" fill="transparent" />
                                        </svg>
                                    </span>
                                </li>

                                <li className="nav-item mt-3" role="presentation">
                                    <div className='nav-link  text-center section-button' id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">CLIENT-SIDE INTEGRATION</div>
                                    <div className='ml-40 mt-4  text-center section-button'><img src="../asset/2.png" className='vector-icon' />Node.js / Express</div>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={9}>
                            <div className="tab-content pt-4" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="container px-3">
                                        <ul className='' style={{ listStyle: "none" }}>
                                            <li>
                                                <Row>
                                                    <Col >
                                                        <div>
                                                            <h4 className='text-head'>This module is dedicated to be used inside the Node.js backend web-server</h4>
                                                        </div>
                                                        <div>
                                                            <p className='text-describe'>
                                                                Before the regular Node.js HTTP process starts, it sends requests to the DataDome server. Depending on the API response, the module either blocks the request or proceeds with the regular process.
                                                            </p>
                                                            <p className='text-describe'>
                                                                The module has been developed to protect the users' experience: if any errors were to occur during the process, or if the timeout is reached, the module will automatically disable its blocking process and allow the regular process to proceed
                                                            </p>

                                                        </div>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <img src='./asset/amico.png' className='img-fluid' />
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li className='pt-4'>
                                                <div>
                                                    <h4 className='text-head'>How to install and embed the module</h4>
                                                </div>
                                                <div>
                                                    <p className='text-describe'>
                                                        The module is distributed as a npm package. You can install it in your process and you will need to slightly modify the code.
                                                        The first step is to install it into an application (using npm) with the following command:
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='pt-4'>
                                                <div>
                                                    <h4 className='text-head'>Express integration</h4>
                                                </div>
                                                <div>
                                                    <p className='text-describe'>
                                                        The module also supports integration through callbacks. Refer to the example below for an integration with express :
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                                <div className="tab-pane fade text-dark" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                    <div class="container px-3">
                                        <ul className='list-' style={{ listStyle: "none" }}>
                                            <li>
                                                <Row>
                                                    <Col >
                                                        <div>
                                                            <h4 className='text-describe-head '>Because Single-Page Applications (SPA) rely so heavily on AJAX calls, SPAs need a specific protection solution to defend them against bots as opposed to multi-page sites.</h4>
                                                        </div>
                                                        <div>
                                                            <h4 className='text-describe-head pt-5' >Below are the 2 steps needed to integrate DataDome protection into your SPA.</h4>
                                                        </div>
                                                    </Col>
                                                    <Col lg={3}>
                                                        <img src='./asset/image3.png' className='img-fluid' />
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <div>
                                                    <h4 className='text-head'>1 - Captcha Display</h4>
                                                </div>
                                                <div>
                                                    <p className='text-describe'>
                                                        The module is distributed as a  npm package. You can install it in your process and you will need to slightly modify the code.
                                                        The first step is to install it into an application (using npm) with the following command:
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='pt-4'>
                                                <div>
                                                    <h4 className='text-head text-black'>Ajax Listener</h4>
                                                </div>
                                                <div>
                                                    <p className='text-describe'>
                                                        When DataDome detects an illegal use of the API, DataDome server-side module blocks the request.
                                                    </p>
                                                    <p className='text-describe'>
                                                        DataDome JavaScript Tag handles the display of a Captcha on the client-side.
                                                    </p>
                                                    <p className='text-describe'>
                                                        This can be done by simply adding the parameter ajaxListenerPath in the JavaScript Tag:
                                                    </p>
                                                </div>
                                                <ul className='mx-4' style={{listStyle:"disc"}}>
                                                    <li className='text-describe'>To true to listen to AJAX calls made on the same domain as the displayed page</li>

                                                    <li className='text-describe'>To any given string (or array of strings) to be matched against the requested URL, ex: 'domain.com/api' or '/api')</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">. tdgh56..</div>
                            </div></Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Documents