import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.allitem)
    const {id, price, imgs, title, description,day } = props.allitem
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={imgs} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <p className='days'>{day} Days</p>
                            <p className='price'>{price}/<span>Per Person</span></p>
                        </div>
                    </Card.Body>
                    <Link to={`/book/${id}`}><Button className='w-100'>Booking Now</Button></Link>
                </Card>
            </Col>
        </div>
    );
};

export default Service;