import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useEffect, useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaLeftLong } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const [loading, setLoading] = useState(true)
    const equipment = useLoaderData()
    const navigate = useNavigate()
    const { _id, name, category, price, description, shortDescription, available, rating, customization, image, deliveryTime } = equipment;
    // console.log(name, category, price, image, description, rating, customization, deliveryTime, available);
    // console.log(image);

    useEffect(() => {
        if (equipment) {
            setLoading(false)
        }
    }, [equipment])

    const handleBack = () => {
        navigate(-1)
    }

    const handleCart = (id) => {
        // console.log(id);

        const cartProduct = {
            name: name,
            category: category,
            price: price,
            description: description,
            shortDescription: shortDescription,
            available: available,
            rating: rating,
            customization: customization,
            image: image,
            deliverTime: deliveryTime,
            productId: id

        }

        // console.log(cartProduct);

        fetch(`https://performance-gear-server.vercel.app/carts`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })

            .then(res => res.json())
           .then(data => {
                    //    console.log(data);
                       if(data.insertedId){
                           Swal.fire({
                               position: "top-center",
                               icon: "success",
                               title: "Equipment added successfully to your cart list!",
                               showConfirmButton: false,
                               timer: 2000
                             });
                            //  navigate(`/myEquipmentList`)
                       }
                   })

    }


    return (
        <Zoom>
            <div className='max-w-7xl w-11/12 mx-auto mt-6 mb-10 text-secondary'>
                <Link onClick={handleBack} className='flex items-center gap-1 btn bg-accent max-w-28 mb-8'><span><FaLeftLong></FaLeftLong></span> Back</Link>
                <div className=' grid grid-cols-1  md:grid-cols-2 gap-6 border rounded-lg p-6'>
                    <div className='grid-cols-1'>
                        <img className='w-full rounded-lg' src={image} alt="" />
                    </div>
                    <div className='space-y-1 text-slate-400'>
                        <h3 className='text-lg font-bold'>{name}</h3>
                        <p>{shortDescription}</p>
                        <h3>Category: {category}</h3>
                        <p className='flex items-center'><TbCurrencyTaka className='text-lg'></TbCurrencyTaka> {price}</p>
                        <p>Customization: {customization}</p>
                        {/* <div className="rating rating-sm items-center mr-2">
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
                    </div> */}
                        <div className='flex items-center gap-0'>
                            <p>Rating: </p>
                            <Rating className='text-center mx-auto'
                                style={{ maxWidth: 90, margin: 0, marginLeft: '4px', marginRight: '4px' }}
                                value={rating}
                                readOnly
                            />
                            {/* ({rating}) */}
                        </div>
                        <p>Available: {available}</p>
                        <p> {description}</p>
                        <p>Delivery Time: {deliveryTime} day</p>
                        <button  onClick={() => handleCart(_id)} className="btn bg-accent mt-6">Add to Cart</button>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default Details;