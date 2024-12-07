import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
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
       <Zoom>
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
                <div className="rating rating-sm items-center mr-2">
                    <p className='font-medium mr-2'>Rating: </p>
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                             />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    ({rating})
                <p>Available: {available}</p>
                <p>Description: {description}</p>
                <p>Delivery Time: {deliveryTime} day</p>
                <button className="btn bg-accent mt-4">Purchase now</button>
            </div>
        </div>
        </div>
       </Zoom>
    );
};

export default Details;