import React from 'react';
import { Button } from 'react-bootstrap';
import './Myorder.css'

const Myorder = (props) => {

    const {Name,Email,_id,price}= props.allorder
    
    const deleteBtnHandler = id =>{
        const url = `https://hidden-stream-36360.herokuapp.com/myorder/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                alert('Your order has been deleted successfully', window.location.reload(false))
                
            }
        })
    }
    return (
        <div className='mb-5'>
            <div className='myorder'>
            <h4 className='text-center mb-4'>Order Summary</h4>
            <h6>Order id: {_id}</h6>
            <p>Name: {Name}</p>
            <p>Email: {Email}</p>
            <p>Price: {price}</p>
            <Button onClick={()=>deleteBtnHandler(_id)} variant="danger">Delete Order</Button>
            </div>

        </div>
    );
};

export default Myorder;