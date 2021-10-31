import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNew.css'

const AddNew = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://hidden-stream-36360.herokuapp.com/addnew', data)
            .then(res => {
                alert('New Service Add successfully into Homepage')
                reset()
            })
    };

    return (
        <div>
            <h2 className='mt-5 pt-5 text-center'>Add New Service</h2>
            <div className='mx-auto m-5'>
                <form className='form-addnew ' onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("title", { required: true })} placeholder='Title' />
                    <br />
                    <input  {...register("description", { required: true })} placeholder='Description' />
                    <br />
                    <input {...register("imgs", { required: true })} placeholder='Img Url' />
                    <br />
                    <input type="number" {...register("price")} placeholder='Price' />
                    <br />
                    <input type="number" {...register("day")} placeholder='Days' />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNew;