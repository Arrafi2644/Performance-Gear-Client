import React from 'react';
import { FaLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const equipment = useLoaderData()
    const navigate = useNavigate()
    const {name, category, price, description, available, rating, customization, image, deliveryTime} = equipment;
    // console.log(name, category, price, image, description, rating, customization, deliveryTime, available);
    // console.log(image);
 
    const handleBack = () =>{
        navigate(-1)
    }


    return (
        <div className='max-w-7xl w-11/12 mx-auto mt-6 mb-10'>
        <Link onClick={handleBack} className='flex items-center gap-1 btn bg-accent max-w-28 mb-8'><span><FaLeftLong></FaLeftLong></span> Back</Link>
        <div className=' grid grid-cols-1  md:grid-cols-3 gap-6 border rounded-lg p-6'>
            <div className='grid-cols-1'>
                <img className='w-full rounded-lg' src={image} alt="" />
            </div>
            <div className='font-medium'>
                <h3>Name: {name}</h3>
                <h3>Category: {category}</h3>
                <p>Price: {price}</p>
                <p>Customization: {customization}</p>
                <p>Rating : {rating}</p>
                <p>Available: {available}</p>
                <p>Description: {description}</p>
                <p>Delivery Time: {deliveryTime} day</p>

            </div>
        </div>
        </div>
    );
};

export default Details;