import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import footerimg from '../../images/icons/download.png'

const Footer = () => {
    return (
        <div className='footer-main'>
            <Row>
            <Col xs={12} md={4}>
              <img className='pb-3' src={footerimg} alt="" />
              <p className='text-light'>Phone: +0123 456 987</p>
              <p className='text-light'>Email: tourx@gmail.com</p>
              <p className='text-light'>Open: Sunday To Friday (9am-4pm)</p>
            </Col>
            <Col xs={12} md={4}>
              <div className='footerItem'>
                <Link className='footer-item' to="/aboutus"> About us</Link>
                <Link className='footer-item' to="/aboutus"> Latest Blog</Link>
                <Link className='footer-item' to="/aboutus"> Contact Us</Link>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <p className='text-light'>Payment Method</p>
              <li className='text-light'>Paypal</li>
              <li className='text-light'>Master Card</li>
              <li className='text-light'i>Credit Card</li>
            </Col>
            </Row>
            <p className='text-light text-center'>Copyright @2021 TourX</p>
        </div>
    );
};

export default Footer;