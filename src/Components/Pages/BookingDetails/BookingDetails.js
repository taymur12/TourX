import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BookingDetails.css'
const BookingDetails = () => {
    const [books, setBooks] = useState([])
    const {serviceId} = useParams()
    useEffect(()=>{
       
        const url = `http://localhost:5000/service`
        fetch(url)
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[])
    const foundData = (books.find(element => element?.id == serviceId))
    
    return (
       <div className='bookingTitle'>
            <div className='bookingTitle my-5'>
            <h2 className='my-5 pt-5 bookingtext text-center' >Booking Details</h2>
            </div>
            <div className='bg-details text-center py-5'>
            <img className='img-width' style={{borderRadius:"10px"}} src={foundData?.imgs} alt="" />
            <h4>{foundData?.title}</h4>
            <p>Name {foundData?.description}</p>
            <h5>Price {foundData?.price}</h5>
            <Button variant="dark">Place Order</Button>
            </div>
       </div>
        
    );
};

export default BookingDetails;

// element?.id === serviceId