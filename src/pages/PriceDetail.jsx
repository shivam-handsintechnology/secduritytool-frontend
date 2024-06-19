import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const PriceDetail = () => {

    const [isAnnual, setIsAnnual] = useState(true);

    const handleToggle = () => {
        setIsAnnual(!isAnnual);
    };

    return (
        <div>
            <div>
                <section class="section-top">
                    <Row>
                        <Col >
                            <div class="section-top-title wow " >
                                <h1 className='text-center'>Our pricing</h1>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
            <Container>
               
                <section className='pt-5'>
                    <div>
                        <Row className='justify-content-center'>
                            <div class="section-title text-center">
                                <span>Pricing Plan</span>
                                <h2>Our best pricing plan for <br />your solution</h2>
                            </div>	
                            <Col lg={4} className='mt-5 mb-5'>
                               
                                <div class="pricingTable">
                                    <div class="pricingTable-header">
                                        <h3 class="title">Business</h3>
                                    </div>
                                    <div class="pricing-icon">
                                        <i class="fa fa-database"></i>
                                    </div>
                                    <ul class="pricing-content">
                                        <li>5 website</li>
                                        <li>50GB Disk Space</li>
                                        <li>50 Email Accounts</li>
                                        <li>50GB Monthly Bandwidth</li>
                                        <li>10 Subdomains</li>
                                    </ul>
                                    <div class="price-value">
                                        <span class="amount">$9</span>
                                        <span class="duration"> /mo</span>
                                    </div>
                                    <div>
                                        <a href="#" class="btn_one">Purchase Now</a>
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
