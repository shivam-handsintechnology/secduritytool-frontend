import React from 'react'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import {logo} from '../../../public/asset/hit1.png/'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <div>

                <Navbar className='navbar-top background-home' expand="md">
                    <Container>
                        <Navbar.Brand href="#home"><img src='/asset/hit1.png' className='logo' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#home" className='home-nav'>Home</Nav.Link>
                                <Nav.Link className='home-nav'
                                >
                                    <Link to='/aboutus'>
                                        About </Link></Nav.Link>
                                <Nav.Link href="/pricedetail" className='home-nav'>Pricing</Nav.Link>
                                <Nav.Link href="/login" className='home-nav'>Login</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {children}
            <div className='footer background-home '>
                <Container fluid >
                    <div>
                        <Container>
                            <Row className='pt-5 pb-3 justify-content-center'>
                                <Col lg={4}><img src='/asset/hit1.png' /></Col>
                                <Col lg={3}>
                                    <ul>
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
                                    <ul>
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
                        </Container>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default PublicLayout
