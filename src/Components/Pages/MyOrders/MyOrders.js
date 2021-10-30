import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Myorder from './Myorder';

const MyOrders = () => {
    const [order,setOder] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/myorder')
        .then(res=>res.json())
        .then(data =>setOder(data))
    },[])

    return (
        <Container>
            <h2  className='my-5 py-5 text-center'>Your Orders</h2>
            <Row xs={1} md={3}>
            {
                order.map(orders=><Myorder key={orders._id} allorder={orders}></Myorder>)
            
            }
            </Row>
        </Container>
    );
};

export default MyOrders;