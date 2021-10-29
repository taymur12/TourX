import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../images/extra/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container-about'>
            <Container>
            <Row>
                <Col xs={12} md={6}>
                  <div className='descriptionAbout'>
                  <h2>About Us</h2>
                    <p>Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars.
                        Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                    <img className='w-100  imgabout' src={aboutImg} alt="" fluid />
                </Col>
            </Row>
            </Container>
           
        </div>
    );
};

export default About;