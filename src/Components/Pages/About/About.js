import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutimg from '../../images/back/banner1.png'

const About = () => {
    return (
        <div>
            <h2 className='mt-5 pt-5 text-center'>About TourX</h2>
            <Row>
                <Col xs={12} md={6}>
                    <h5 className='text-center  my-5'>Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays through-out the world. Combined we have received 1532 customer reviews.</h5>
                    <p className=' m-1 '>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.Travel has helped us to understand the meaning of life and it has helped us.</p>
                </Col>
                <Col xs={12} md={6}>
                    <img className='w-75' src={aboutimg} alt="" fluid />
                </Col>
            </Row>
        </div>
    );
};

export default About;