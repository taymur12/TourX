import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const AddnewService = (props) => {
    const {imgs, title, description, price, day} = props.allitems
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
                   <Button className='w-100' disabled>Booking Now</Button>
                   
                </Card>
            </Col>
        </div>
    );
};

export default AddnewService;