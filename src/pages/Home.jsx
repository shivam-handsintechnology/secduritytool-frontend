import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurCompany from './OurCompany';
import WhyChoose from './WhyChoose';
import Teams from './Teams';
const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,

                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    return (
        <div>
            <div>

                <div className='home-bg align-content-center'>
                    <Container>
                        <Row className='pt-5 pb-5'>
                            <Col lg={6} md={6} className='align-content-center home-content pb-5  mb-5 mt-5'>
                                <h2 className='height-text text-light'>
                                    We Provide Cyber <br /> Solutions For Your Security
                                </h2>
                                <p className='mt-4  text-light'>Ensuring your digital safety with innovative, reliable, and comprehensive cybersecurity solutions. Protecting what matters most, one byte at a time.</p>
                                <Link to='/aboutus'>
                                    <Button className='btn_one mb-5'>Getting Started</Button>
                                </Link>
                                {/* <span className='mx-4'>
                                    <Link to='/contactus'>
                                        <Button className='button-sign'>Contact Us</Button>
                                    </Link>
                                </span> */}

                            </Col>

                        </Row>

                    </Container>
                </div>

                <section className='count_area counter_feature'>
                    <Container className='p-4'>
                        <Row className='text-center'>
                            <Col lg={3} sm={6} xs={12}>
                                <div class="single-project">
                                    <h2 class="counter-num">34</h2>
                                    <h4>Our Experience</h4>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                <div class="single-project">
                                    <h2 class="counter-num">99</h2>
                                    <h4>Customer Satisfaction</h4>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                <div class="single-project">
                                    <h2 class="counter-num">184</h2>
                                    <h4>Our team member</h4>
                                </div>
                            </Col>
                            <Col lg={3} sm={6} xs={12}>
                                <div class="single-project">
                                    <h2 class="counter-num">541</h2>
                                    <h4>Porject Complete</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <OurCompany />

                {/* <div class="marq_text">
                        <div id="supermarquee1">
                            <marquee behavior="scroll" direction="left" scrollamount="6">
                                *Access Control Lists* &nbsp; &nbsp; *Search Functionality* &nbsp; &nbsp; *Legal Disclaimers* &nbsp; &nbsp; *Network Segmentation* &nbsp; &nbsp; *Feedback & Reporting* &nbsp; &nbsp;
                            </marquee>

                        </div>
                    </div> */}

                <Container>
                    <div className='pt-5 pb-5'>
                        <Row>
                            <Col>
                                <div class="section-title">
                                    <span>Our services</span>
                                    <h2>What we do for your  <br />Cyber security solutions</h2>
                                </div>
                            </Col>
                            <Col>
                                <div class="ser_btn">
                                    <a href="service.html" class="btn_two">View all services <i class="ti-arrow-top-right"></i></a>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-4'>

                            <Col>
                                <div class="single_service">
                                    <img src="asset/service4.png" class="img-fluid" alt="image" />
                                    <h2>Computer Security</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <a href="service.html">Read More <i class="ti-arrow-top-right"></i></a>
                                </div>
                            </Col>
                            <Col>
                                <div class="single_service">
                                    <img src="asset/service5.png" class="img-fluid" alt="image" />
                                    <h2>File Duplication & Access</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <a href="service.html">Read More <i class="ti-arrow-top-right"></i></a>
                                </div>
                            </Col>
                            <Col>
                                <div class="single_service">
                                    <img src="asset/service6.png" class="img-fluid" alt="image" />
                                    <h2>Network Protections</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <a href="service.html">Read More <i class="ti-arrow-top-right"></i></a>
                                </div>
                            </Col>
                            <Col>
                                <div class="single_service">
                                    <img src="asset/service7.png" class="img-fluid" alt="image" />
                                    <h2>Finger Print Security</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <a href="service.html">Read More <i class="ti-arrow-top-right"></i></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <WhyChoose />

                <div>
                    <Container className='mt-5 pt-5'>
                        <div class="section-title text-center">
                            <span>Top Reviews</span>
                            <h2>Take a look our top <br />Customer feedback</h2>
                        </div>
                        <Row>
                            <Col lg={12} className='pt-4 pb-5 mb-5'>
                                <Slider {...settings}>
                                    <div className='testimonial'>
                                        <img src="asset/quote.png" alt="" />
                                        <div class="testimonial_content">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <p>Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.</p>
                                        </div>
                                        <div class="testi_pic_title">
                                            <h4>James Clayton</h4>
                                        </div>
                                    </div>
                                    <div className='testimonial'>
                                        <img src="asset/quote.png" alt="" />
                                        <div class="testimonial_content">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <p>Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.</p>
                                        </div>
                                        <div class="testi_pic_title">
                                            <h4>James Clayton</h4>
                                        </div>
                                    </div>
                                    <div className='testimonial'>
                                        <img src="asset/quote.png" alt="" />
                                        <div class="testimonial_content">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <p>Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.</p>
                                        </div>
                                        <div class="testi_pic_title">
                                            <h4>James Clayton</h4>
                                        </div>
                                    </div>
                                    <div className='testimonial'>
                                        <img src="asset/quote.png" alt="" />
                                        <div class="testimonial_content">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <p>Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error sit quam minus sint rem a rerum dolobus veritatis delectus.</p>
                                        </div>
                                        <div class="testi_pic_title">
                                            <h4>James Clayton</h4>
                                        </div>
                                    </div>

                                </Slider></Col>
                        </Row>
                    </Container>
                </div>

                <Teams />

            </div>
        </div>
    )
}
export default Home;