import React from 'react'
import { Nav, Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import {logo} from '../../../public/asset/hit1.png/'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <div>

                <Navbar className='navbar-top background-home' expand="md">
                    <Container>
                        <Navbar.Brand href="/"><img src='/asset/hit1.png' className='logo' alt="Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                            <Nav className="mx-auto">
                                <Nav.Link as={Link} to="/" className='home-nav'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/aboutus' className='home-nav'>About</Nav.Link>
                                <Nav.Link as={Link} to='/aboutus' className='home-nav'>Services</Nav.Link>
                                <Nav.Link as={Link} to='/documents' className='home-nav'>Documentation</Nav.Link>
                                <Nav.Link as={Link} to="/pricedetail" className='home-nav'>Pricing</Nav.Link>
                                <Nav.Link as={Link} to="" className='home-nav'>Contact US</Nav.Link>
                            </Nav>
                            <Link to='/login'> <Button className='btn_one ml-md-3'>Login</Button></Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

            {children}
            
            <div className='footer home-bg why-choose pb-2 pt-3'>
                <Container fluid >
                    <div>
                        <Container>
                            <Row className='pt-5 pb-1 justify-content-center' style={{ borderBottom: "1px solid grey" }}>
                                <Col lg={4} >
                                    <img src='/asset/hit1.png' />
                                    <p className='mt-4'> Our commitment to excellence and innovation drives us to continuously enhance our solutions and stay ahead of emerging threats.</p>
                                    <div class="social_profile ">
                                        <ul className='pb-5'>
                                            <li><a href="#" class="f_facebook"><i class="fa fa-facebook" title="Facebook"></i></a></li>
                                            <li><a href="#" class="f_twitter"><i class="fa fa-twitter" title="Twitter"></i></a></li>
                                            <li><a href="#" class="f_instagram"><i class="fa fa-instagram" title="Instagram"></i></a></li>
                                            <li><a href="#" class="f_linkedin"><i class="fa fa-linkedin" title="LinkedIn"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={3}>
                                    <ul className='list-unstyled'>
                                        <Link to="/aboutus" >
                                            <li className='footer-text text-light'>About</li>
                                        </Link>
                                        <Link to='/pricedetail'>
                                            <li className='footer-text text-light'>Pricing</li>
                                        </Link>
                                        <Link to='/contactus'>
                                            <li className='footer-text text-light'>Contact Us</li>
                                        </Link>
                                    </ul>
                                </Col>
                                <Col lg={3}>
                                    <ul className='list-unstyled'>
                                        <Link to="/policy">
                                            <li className='footer-text text-light'>Privacy Policy</li>
                                        </Link>
                                        <Link to='/termsandcondition'>
                                            <li className='footer-text text-light'>Terms and Condition</li>
                                        </Link>
                                        <Link to='/cancellation' >
                                            <li className='footer-text text-light'>Cancellation</li>
                                        </Link>
                                    </ul>
                                </Col>
                            </Row>
                            <p className='text-center pt-2'>© 2024. All Rights Reserved.</p>
                        </Container>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default PublicLayout
