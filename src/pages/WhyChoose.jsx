import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const WhyChoose = () => {
    return (
        <div>
            <div className='home-bg why-choose'>
                <Container>
                    <Row>
                        <Col lg={6} sm={12} xs={12}>
                            <div class="ab_content">
                                <span>Why choose us</span>
                                <h2>Cyber security skills gap widens as demand for experts continues to soar.</h2>
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massa.In enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu pede mollis pretium Inte ger tincid unt cras dapibus.</p>
                            </div>
                            <Row>
                                <Col lg={4} sm={4} xs={12}>
                                    <div class="single-project2">
                                        <h2 class="counter-num">94%</h2>
                                        <h4>Quality services</h4>
                                    </div>
                                </Col>
                                <Col lg= {4} sm={4} xs={12}>
                                    <div class="single-project2">
                                        <h2 class="counter-num">69%</h2>
                                        <h4>Skilled Staff</h4>
                                    </div>
                                </Col>
                                <Col lg={4} sm={4} xs={12}>
                                    <div class="single-project2">
                                        <h2 class="counter-num">99%</h2>
                                        <h4>Support team</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img src="asset/computer.png" class="img-fluid" alt="image" />
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
export default WhyChoose