import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [manage, setManage] = useState([])
    
    useEffect(() => {
        fetch('https://hidden-stream-36360.herokuapp.com/manageorder')
            .then(res => res.json())
            .then(data => setManage(data))
    }, [])

    const manageBtnHandler = id =>{
        const url = `https://hidden-stream-36360.herokuapp.com/manageorder/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                alert('Your order has been deleted successfully')
                const remainingOrder = manage.filter(x => x._id !== id)
                setManage(remainingOrder)
            }
        })
    }

    const findId = manage.find(x=>(x._id))

    return (
        <div className='m-5'>
            <h2 className="my-5 pt-5 text-center">Manage Order</h2>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                
                        <th>Name</th>
                        <th>Email</th>
                        <th>Purchase</th>
                        <th>Price</th>
                    </tr>
                </thead>

                {
                    manage.map(manages =>
                            <tbody>
                                <tr>
                                    <td>{manages.Name}</td>
                                    <td>{manages.Email}</td>
                                    <td>{manages.title}</td>
                                    <td>{manages.price}</td>
                                    <td><button onClick={()=>manageBtnHandler(findId._id)}>X</button></td>

                                </tr>
                            </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default ManageAllOrder;