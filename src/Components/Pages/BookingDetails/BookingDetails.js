import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BookingDetails.css'
import { useForm } from "react-hook-form";
import axios from 'axios'



const BookingDetails = () => {
    const [books, setBooks] = useState([])
    const { serviceId } = useParams()
    useEffect(() => {

        const url = `http://localhost:5000/service`
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const foundData = (books.find(element => element?.id == serviceId))

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/placeorder', data)
        .then(res=>{
            alert('Thank you for order')
            reset()
        })
    };
   

    return (
        <div className='bookingTitle '>
            <div className='bookingTitle my-5'>
                <h2 className='my-5 pt-5 bookingtext text-center' >Booking Details</h2>
            </div>
            
            <Row>
            <Col xs={12} md={8}>
            <div className='bg-details text-center py-5'>
                <img className='img-width' style={{ borderRadius: "10px" }} src={foundData?.imgs} alt="" />
                <h4>{foundData?.title}</h4>
                <p>Name {foundData?.description}</p>
                <h5>Price {foundData?.price}</h5>
                
            </div>
            </Col>
            <Col xs={12} md={4}>
            <div className='form-main'>
            <h4 className='mb-2 text-info'>Place Your Order</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='d-block w-100 p-2 mb-3' {...register("Name", { required: true})} placeholder='Name' />
                    
                    <input className='d-block w-100 p-2 mb-3' {...register("Email", { required: true})} placeholder='Email' />
                    
                    <input className='d-block w-100 p-2 mb-3' defaultValue={foundData?.title} {...register("title", { required: true})} placeholder='Title' />
                   
                    <input className='d-block w-100 p-2 mb-3' defaultValue={foundData?.price} {...register("price", { required: true})} placeholder='Price' />
                    
                    <input type="submit" />
                </form>
            </div>
            </Col>
          </Row>
                
            
        </div>

    );
};

export default BookingDetails;

// element?.id === serviceId