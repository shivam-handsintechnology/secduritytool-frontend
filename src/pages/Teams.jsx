import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const Teams = () => {
  return (
    <div>
          <Container>
              <Row>
                  <Col lg={6} sm={12} xs={12}>
                      <div class="section-title">
                          <span>Our team member</span>
                          <h2>Our Expert's team member for your solution</h2>
                          <p>Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor saerror sed earum a magni soluta quam minus dolor dolor sed earum a magni soluta autem dolor error error.</p>
                          <a href="#" class="btn_one">View all members <i class="ti-arrow-top-right"></i></a>
                      </div>
                  </Col>
                  <Col lg={6} sm={12} xs={12}>
                      <Row>
                          <Col lg={6} sm={12} xs={12}>
                              <div class="single_team">
                                  <img src="asset/team1.jpg" class="img-fluid" alt="image" />
                                  <h4>William Smith</h4>
                                  <p>Brand designer</p>
                              </div>
                          </Col>
                          <Col lg={6} sm={12} xs={12}>
                              <div class="single_team">
                                  <img src="asset/team1.jpg" class="img-fluid" alt="image" />
                                  <h4>William Smith</h4>
                                  <p>Brand designer</p>
                              </div>
                          </Col>
                          <Col lg={6} sm={12} xs={12}>
                              <div class="single_team">
                                  <img src="asset/team1.jpg" class="img-fluid" alt="image" />
                                  <h4>William Smith</h4>
                                  <p>Brand designer</p>
                              </div>
                          </Col>
                          <Col lg={6} sm={12} xs={12}>
                              <div class="single_team">
                                  <img src="asset/team1.jpg" class="img-fluid" alt="image" />
                                  <h4>William Smith</h4>
                                  <p>Brand designer</p>
                              </div>
                          </Col>
                      </Row>
                  </Col>

              </Row>
          </Container>
    </div>
  )
}
export default Teams