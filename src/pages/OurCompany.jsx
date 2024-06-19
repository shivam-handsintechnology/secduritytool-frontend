import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
const OurCompany = () => {
    return (
        <div>
            <Container>
                <div className='mb-5'>
                    <Row>
                        <Col lg={6} sm={12} xs={12}>
                            <div class="ab_content">
                                <span>About our company</span>
                                <h2>Our experts team are providing a 24/7 technical support and services.</h2>
                            </div>
                            <div class="abmv_list">
                                <ul>
                                    <li><img src="asset/check.png" alt="" /> Broken Authentication and Session Management</li>
                                    <li><img src="asset/check.png" alt="" /> Injection Attacks (Including XML External Entity Attack)</li>
                                    <li><img src="asset/check.png" alt="" /> SSL and Weak Cross-Domain Policy Issues</li>
                                    <li><img src="asset/check.png" alt="" /> Security Misconfiguration</li>

                                </ul>
                            </div>
                            <div class="skill_btn">
                                <Button className='btn_one mb-2'>Getting Started</Button>
                                <Button className='btn_two mb-2'>Contact with us </Button>

                            </div>
                        </Col>
                        <Col>
                            <div class="ab_img ai_top">
                                <img src="asset/about3.png" class="img-fluid" alt="image" />
                                <div class="abmv_list">
                                    <ul>
                                        <li><img src="asset/check.png" alt="" /> Sensitive Data Exposure (Including Sensitive Data Stored in Local Storage)</li>
                                        <li><img src="asset/check.png" alt="" /> Insecure Direct Object References and Missing Function Level Access Control</li>
                                        <li><img src="asset/check.png" alt="" /> Cross-Site Scripting (XSS) and Unvalidated Redirects and Forwards</li>

                                    </ul>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    )
}
export default OurCompany