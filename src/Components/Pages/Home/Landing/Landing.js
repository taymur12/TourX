import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import cover1 from '../../../images/back/back3.jpg'
import cover2 from '../../../images/back/back2.jpg'
import cover3 from '../../../images/back/back1.jpg'
import './Landing.css'

const Landing = () => {
    return (
        <div className='landing'>
           <Carousel className='landing-carousel'>
  <Carousel.Item interval={4000}>
    <img fluid
      className="d-block w-100 img-caro"
      src={cover1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='text-dark '>Explore Life Travel Where You Want</h1>
      <p className='text-dark '>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img fluid
      className="d-block w-100 img-caro"
      src={cover2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h1 className='text-light '>Make Your Trip Fun & Noted</h1>
      <p className='text-light '>Find information about vaccination rates and requirements, approved vaccines, exemptions for vaccinated travelers, and more, right in TripIt’s COVID-19 travel guidance feature.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Landing;