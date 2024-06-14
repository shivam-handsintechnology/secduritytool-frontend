import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>

            <Container>
                <div>
                    <h1 className='text-center mt-4 mb-5'>
                        About Us
                    </h1>
                </div>
                <div className='mb-4'>
                    <Row>
                        <Col><img src='/asset/pic1.jpg' className='aboutimg' /></Col>
                        <Col className='align-content-center'>
                            <div><h3 className='text-center mb-4'><b>About Security Tool</b></h3></div>
                            <div>
                                <p className='text-justify'>
                                    At the security tool, we're driven by an ambitious goal: to contribute to the creation of a safer online environment. We're confident that our skilled team, innovative technology, and dedicated users can tackle some of the most significant challenges facing the internet today. Our vision encompasses substantial improvements that can positively impact the digital landscape.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4 '>

                        <Col className='align-content-center'>
                            <div><h3 className='text-center mb-4'><b> Our Vision</b></h3></div>
                            <div>
                                <p className='text-justify'>
                                    Our vision is to make substantial improvements that positively impact the digital landscape. We believe that by empowering individuals and organizations with robust security tools, we can foster a safer and more secure online experience for everyone. Our commitment to excellence and innovation drives us to continuously enhance our solutions and stay ahead of emerging threats.
                                </p>
                            </div>
                        </Col>
                        <Col><img src='/asset/pic1.jpg' className='aboutimg' /></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs
