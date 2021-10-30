import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [items,setItems] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data =>setItems(data))
    },[])
    return (
        <div>
            <div>
                <h4 className='mt-5 text-center package'>Choose Your Package</h4>
                <h1 className='mt-3 text-center package-title'>Select Your Best Package For Your Travel</h1>
                <Row xs={1} md={3} className="g-4 m-4">
                {
                    items.map(item=><Service key={item.id} allitem={item}></Service>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Services;